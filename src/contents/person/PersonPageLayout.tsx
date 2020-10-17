import React from 'react'
import { animateScroll } from 'react-scroll'
import { CompleteModal } from 'src/components/Modal/CompleteModal'
import { MessageModal } from 'src/components/Modal/MessageModal'
import { withTheme } from 'src/context/ThemeContext'
import { uploadImg } from 'src/external/aws/s3'
import { IPersonal } from 'src/models/person'
import * as colors from 'src/styles/colors'
import { UpdateUserInput } from 'src/types/API'
import styled from 'styled-components'
import { PersonalEditProfile } from './edit/PersonalEditProfile'
import { PersonPage } from './PersonPage'

type PersonPageProps = {
  personal: IPersonal
  isLoading: boolean
  profileEditable: boolean
  isEditing: boolean
  hasPaymentComplete?: boolean
  joinSucceededTeamId?: string
  onEditProfile?: (value: boolean) => void
  update: (input: UpdateUserInput) => Promise<void>
}

type StyleCssProps = {
  icon?: string
  topImage?: string
  width?: number
  backgroundColor?: string
  profileHeight?: number
  oppositeTopOffset?: number
  profileMarginLeft?: number
  profileBorderLeft?: number
}

const PersonPageWrapper = styled.div`
  position: relative;
  background-color: ${(props: StyleCssProps) =>
    props.backgroundColor ? props.backgroundColor : colors.textWhite};
`

const EditProfileWrapper = styled.div`
  width: 100%;
`

const PersonPageLayout: React.FC<PersonPageProps> = ({
  profileEditable,
  personal,
  hasPaymentComplete,
  joinSucceededTeamId,
  onEditProfile,
  update,
}) => {
  const [isEditing, setEditing] = React.useState(false)
  const [showPaymentCompleteModal, setShowPaymentCompleteModal] = React.useState(hasPaymentComplete)
  const [showJoinSucceededModal, setShowJoinSucceededModal] = React.useState(false)

  return (
    <>
      <PersonPageWrapper backgroundColor={'#ebebeb'}>
        {!isEditing ? (
          <PersonPage
            isLoading={false}
            personal={personal}
            editProfile={() => onEditProfile && onEditProfile(true)}
            profileEditable={profileEditable}
            joinSucceededTeamId={joinSucceededTeamId}
            showJoinSucceededModal={showJoinSucceededModal}
          />
        ) : (
          <EditProfileWrapper>
            <PersonalEditProfile
              isLoading={false}
              personal={personal}
              close={() => onEditProfile && onEditProfile(false)}
              saveImage={async (fileName: string, image: Blob, contentType: string) =>
                uploadImg(fileName, image, contentType)
              }
              saveProfile={update}
            />
          </EditProfileWrapper>
        )}
      </PersonPageWrapper>
      {showPaymentCompleteModal && (
        <CompleteModal
          closeModal={(e) => {
            setShowPaymentCompleteModal(false)
            setShowJoinSucceededModal(true)
            const top = document.getElementById(`team-item_${joinSucceededTeamId}`)?.offsetTop
            if (top) {
              animateScroll.scrollTo(top - 600 || 0)
            }
          }}
          title="決済完了"
          headerDescription="Payment Completed!"
        />
      )}
      {showJoinSucceededModal && (
        <MessageModal
          closeModal={(e) => setShowJoinSucceededModal(false)}
          message={'チームに参加しました。マイページから参加特典を確認できます。'}
        />
      )}
    </>
  )
}

export const PersonPageLayoutGray = React.memo(withTheme(PersonPageLayout, 'gray'))
export const PersonPageLayoutDark = React.memo(withTheme(PersonPageLayout, 'dark'))
export const PersonPageLayoutBlack = React.memo(withTheme(PersonPageLayout, 'black'))

export default React.memo(withTheme(PersonPageLayout, 'gray'))
