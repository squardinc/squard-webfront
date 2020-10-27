import { ApolloError, gql, useMutation, useQuery } from '@apollo/client'
import { navigate } from 'gatsby'
import * as React from 'react'
import { ErrorMessageModal } from 'src/components/Modal/ErrorMessageModal'
import { LoadingContext } from 'src/context/LoadingContextProvider'
import { UserContext } from 'src/context/UserContext'
import { uploadImg } from 'src/external/aws/s3'
import { leaveTeam, updatePage, updateUser } from 'src/graphql/mutations'
import { getMyself, getUser } from 'src/graphql/queries'
import { Person } from 'src/models/person'
import {
  GetMyselfQuery,
  GetUserQuery,
  LeaveTeamMutation,
  LeaveTeamMutationVariables,
  UpdatePageMutation,
  UpdatePageMutationVariables,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables
} from 'src/types/API'
import { parseSearchParams } from 'src/utils/UrlParser'
import { PersonPageLayoutBlack, PersonPageLayoutGray } from './PersonPageLayout'
interface PersonPageContainerProps {
  id: string
}
export const PersonPageContainer: React.FC<PersonPageContainerProps> = ({ id }) => {
  const { user } = React.useContext(UserContext)
  const { setLoading } = React.useContext(LoadingContext)
  const [isEditing, setEditing] = React.useState(false)
  const [showErrorModal, setShowErrorModal] = React.useState(false)
  const params = parseSearchParams(window.location.search)
  const { loading, error, data, refetch } = user.isMine(id)
    ? useQuery<GetMyselfQuery>(gql(getMyself))
    : useQuery<GetUserQuery>(gql(getUser), {
        variables: { id },
      })
  const [updateUserRequest, updateUserResponse] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(gql(updateUser))
  const [updatePageIdRequest, updatePageIdResponse] = useMutation<
    UpdatePageMutation,
    UpdatePageMutationVariables
  >(gql(updatePage))
  const [leaveTeamRequest, leaveTeamResponse] = useMutation<
    LeaveTeamMutation,
    LeaveTeamMutationVariables
  >(gql(leaveTeam))
  React.useEffect(() => {
    if (updateUserResponse.data || leaveTeamResponse.data) refetch()
  }, [updateUserResponse.data, leaveTeamResponse.data])

  if (error) {
    navigate('/')
    return <></>
  }
  if (loading || !data) {
    return <></>
  }

  const personalData = Person.fromQueryResult(data)
  if (window.location.pathname === '/mypage' && window.location.search === '')
    window.history.replaceState({}, document.title, personalData.pageId)

  const PersonPageLayout = isEditing ? PersonPageLayoutBlack : PersonPageLayoutGray
  return (
    <>
      <PersonPageLayout
        isLoading={false}
        profileEditable={user.isMine(personalData.id)}
        isEditing={isEditing}
        hasPaymentComplete={params['payment_status'] === 'success'}
        joinSucceededTeamId={params.teamId}
        showLeaveTeamResult={!!leaveTeamResponse.data?.leaveTeam?.message}
        personal={personalData}
        uploadImage={async (image: Blob, contentType: string, fileName?: string) => {
          setLoading(true)
          return uploadImg(image, contentType, fileName).catch((err: ApolloError) => {
            Promise.reject(err)
            setLoading(false)
            setShowErrorModal(true)
          })
        }}
        update={async (profile: UpdateUserInput, pageId: string) => {
          setLoading(true)
          if (pageId && personalData.pageId !== pageId)
            updatePageIdRequest({ variables: { pageId } })
          return updateUserRequest({
            variables: {
              input: {
                nameJp: profile.nameJp,
                nameEn: profile.nameEn,
                links: profile.links,
                introduction: profile.introduction,
                displayTeamIds: profile.displayTeamIds,
                topImage: profile.topImage,
                icon: profile.icon,
              },
            },
          }).then(
            () => setLoading(false),
            (err: ApolloError) => {
              Promise.reject(err)
              setLoading(false)
              setShowErrorModal(true)
            }
          )
        }}
        leaveTeam={async (teamId: string, teamMemberId: string) => {
          setLoading(true)
          return leaveTeamRequest({
            variables: {
              teamId,
              teamMemberId,
            },
          }).then(
            () => setLoading(false),
            (err: ApolloError) => Promise.reject(err)
          )
        }}
        onEditProfile={(editing: boolean) => {
          setEditing(editing)
        }}
        refetch={refetch}
      />
      {showErrorModal && (
        <ErrorMessageModal
          closeModal={(e) => {
            setShowErrorModal(false)
          }}
        />
      )}
    </>
  )
}

export default PersonPageContainer
