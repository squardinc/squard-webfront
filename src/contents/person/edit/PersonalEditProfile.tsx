import { ApolloError } from '@apollo/client'
import { GraphQLError } from 'graphql'
import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { ImageProfileEdit } from 'src/components/ImageProfile'
import { LayoutHorizontal, LayoutType, LayoutVertical } from 'src/components/layout'
import { ErrorMessageModal } from 'src/components/Modal/ErrorMessageModal'
import { TabMenuBar } from 'src/components/TabMenu'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import NoImage from 'src/images/NoImage.jpg'
import Top from 'src/images/temp/team/top.jpg'
import { IPersonal } from 'src/models/person'
import { isValidLink } from 'src/utils/SocialMediaDescriminator'
import styled from 'styled-components'

const PersonalEditProfileWrapper = styled.div`
  padding-bottom: 0px;
  background: black;
`

interface PersonalEditProfileProps {
  isLoading: boolean
  personal: IPersonal
  close: VoidFunction
  saveProfile: (data: IPersonal, pageId: string) => Promise<void>
  saveImage: (image: Blob, contentType: string, fileName?: string) => Promise<string>
}

const tabMenuData = [
  {
    title: 'キャンセル',
  },
  {
    title: 'プロフィールを編集',
  },
  {
    title: '保存',
  },
]

const InformationWrapper = styled.div`
  width: 100%;
  position: absolute:
  border-top: 1px solid gray;
`
const Label = styled.div`
  width: 110px;
  margin-right: 10px;
  color: gray;
`
const Input = styled.input`
  width: calc(100% - 120px);
  display: block;
  background: none;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const TextareaWrapper = styled.div`
  width: calc(100% - 120px);

  .textarea {
    width: 100%;
    display: block;
    background: none;
    color: white;
  }
`

const TeamWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid gray;
`

const TeamItemWrapper = styled.div`
  position: relative;
  margin-top: 15px;
  height: 80px;
  width: 100%;
  border-radius: 10px;

  :last-child {
    margin-bottom: 0px;
  }
`
const TeamInfo = styled.div`
  display: flex;
  background-image: linear-gradient(to right, #bc4c49, #edc74c);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  color: #fff;
  padding-left: 1.5rem;
  height: 100%;
  align-items: center;
  position: relative;
`

const TeamIconWrapper = styled.div`
  height: 3rem;
  width: auto;
`

const TeamTextWrapper = styled.span`
  padding-left: 15px;
  padding-top: 0.25rem;
  line-height: 1.5rem;
`

const TeamNameText = styled.div`
  font-size: 17px;
  font-weight: 600;
`
const TeamPositionText = styled.div`
  line-height: 1.5rem;
  font-size: 13px;
`

const TeamDisplayToggleButton = styled.button`
  text-align: center;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  background: white;
  color: gray;
  width: 100px;
  font-size: 13px;
  border-radius: 8px;
  margin-right: 10px;
`

const BottomWrapper = styled.div`
  width: 100%;
  padding: 20px;
`
const RoundButton = styled.button`
  font-size: 17px;
  text-align: center;
  padding: 5px;
  border: 1px solid white;
  border-radius: 50vh;
  width: 150px;
  margin-top: 15px;
  margin-bottom: 0px;
  font-weight: 200;
  :last-child {
    margin-bottom: 30px;
  }
  ${(props) => props.disabled && 'cursor: not-allowed;'}
`

interface RowInputProps {
  label: string
  value?: string
  invalidMessage?: string
  onChange: (value: string) => void
  onFocus?: (value: string) => void
  onBlur?: (value: string) => void
}

const HorizontalLayoutWrapper: React.FC = ({ children }) => {
  return (
    <LayoutHorizontal
      layoutType={LayoutType.centerLeft}
      style={{
        width: '100%',
        borderBottom: '1.5px solid #636363',
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingBottom: '10px',
        paddingTop: '10px',
      }}
    >
      {children}
    </LayoutHorizontal>
  )
}
const RowInput: React.FC<RowInputProps> = ({
  label,
  value = '',
  onChange,
  onBlur,
  onFocus,
  invalidMessage = '',
}) => {
  return (
    <HorizontalLayoutWrapper>
      <Label>
        <TextDisplay>{label}</TextDisplay>
      </Label>
      <Input
        contentEditable={true}
        suppressContentEditableWarning={true}
        value={value}
        style={{
          color: '#F8F8F8',
        }}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => {
          if (onFocus) onFocus(e.target.value)
        }}
        onBlur={(e) => {
          if (onBlur) onBlur(e.target.value)
        }}
      />
      {invalidMessage && <div style={{ color: 'red' }}>{invalidMessage}</div>}
    </HorizontalLayoutWrapper>
  )
}
const RowTextarea: React.FC<RowInputProps> = ({ label, value = '', onChange, onBlur, onFocus }) => {
  return (
    <HorizontalLayoutWrapper>
      <Label>
        <TextDisplay>{label}</TextDisplay>
      </Label>
      <TextareaWrapper>
        <TextareaAutosize
          className="textarea"
          contentEditable={true}
          suppressContentEditableWarning={true}
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
          }}
          onFocus={(e) => {
            if (onFocus) onFocus(e.target.value)
          }}
          onBlur={(e) => {
            if (onBlur) onBlur(e.target.value)
          }}
        />
      </TextareaWrapper>
    </HorizontalLayoutWrapper>
  )
}
interface LinksInputProps {
  values?: string[]
  onChange: (value: string, index: number) => void
}

const LinksInput: React.FC<LinksInputProps> = ({ values = [''], onChange }) => {
  const [currentIndex, setCurrentindex] = React.useState(values.length + 1)
  const [inputValue, setInputValue] = React.useState(values[currentIndex])
  const forms = values.length >= 20 ? values : values.concat([''])
  return (
    <>
      {forms.map((url, index) => {
        return (
          <div key={`${index}_${url}`}>
            <RowInput
              key={`${index}_${url}`}
              label={`リンクURL${index + 1}`}
              value={index === currentIndex ? inputValue : url}
              onChange={(value) => {
                if (value.length <= 2048) setInputValue(value)
              }}
              onFocus={(value) => {
                setCurrentindex(index)
                setInputValue(value)
              }}
              onBlur={(value) => {
                onChange(value, currentIndex)
                if (!value) setInputValue(forms[currentIndex + 1])
              }}
              invalidMessage={url && !isValidLink(url) ? '※リンクURLが不正です' : ''}
            />
          </div>
        )
      })}
    </>
  )
}

export const PersonalEditProfile: React.FC<PersonalEditProfileProps> = ({
  personal,
  close,
  saveImage,
  saveProfile,
}) => {
  const [errorInfo, setErrorInfo] = React.useState<GraphQLError>()
  const [topImage, setTopImage] = React.useState<Blob>()
  const [icon, setIcon] = React.useState<Blob>()
  const [profile, setProfile] = React.useState<IPersonal>(personal)
  const [pageId, setPageId] = React.useState<string>(personal.pageId)
  const isSubmittable = React.useMemo(() => !profile.links.find((link) => !isValidLink(link)), [
    profile,
  ])
  const onSaveProfile = async () => {
    if (icon) {
      const url = await saveImage(icon, 'image/jpeg')
      profile.icon = url
      setProfile(Object.assign({}, profile))
    }
    if (topImage) {
      const url = await saveImage(topImage, 'image/jpeg')
      profile.topImage = url
      setProfile(Object.assign({}, profile))
    }
    await saveProfile(profile, pageId)
    close()
  }
  return (
    <>
      <PersonalEditProfileWrapper>
        <TabMenuBar
          title="プロフィールを編集"
          onCancel={close}
          saveDisabled={!isSubmittable}
          onSave={() =>
            onSaveProfile().catch((err: ApolloError) => {
              if (err.graphQLErrors.length) {
                setErrorInfo(err.graphQLErrors[0])
              }
            })
          }
        />
        <LayoutVertical layoutType={LayoutType.topCenter}>
          <ImageProfileEdit
            topImage={profile.topImage || Top}
            icon={profile.icon || NoImage}
            setTopImage={setTopImage}
            setIcon={setIcon}
          />
          <InformationWrapper style={{ width: '100%' }}>
            <RowInput
              label={'名前'}
              value={profile.nameJp}
              onChange={(value = '') => {
                if (value.length <= 32) setProfile(Object.assign({}, profile, { nameJp: value }))
              }}
            />
            <RowInput
              label={'英語表記'}
              value={profile.nameEn}
              onChange={(value = '') => {
                if (value.length <= 64) setProfile(Object.assign({}, profile, { nameEn: value }))
              }}
            />
            {/* <RowInput
            label={'ID'}
            value={pageId}
            onChange={(value) => {
              setPageId(value)
            }}
          /> */}
            <RowTextarea
              label={'自己紹介'}
              value={profile.introduction}
              onChange={(value = '') => {
                if (value.length <= 1024)
                  setProfile(Object.assign({}, profile, { introduction: value }))
              }}
            />

            <LinksInput
              values={profile.links}
              onChange={(value = '', index) => {
                const links = [...profile.links]
                links[index] = value
                setProfile({ ...profile, links: links.filter(Boolean) })
              }}
            />
          </InformationWrapper>

          {/* <TeamWrapper>
          <Label style={{ width: '100%' }}>所属チーム表示切り替え</Label>

          {personal.teams.map((team, i) => {
            return (
              <TeamItemWrapper key={`${i}_${team.name}`}>
                <TeamInfo>
                  <LayoutHorizontal
                    layoutType={LayoutType.centerBetween}
                    style={{ width: '100%' }}
                  >
                    <LayoutHorizontal layoutType={LayoutType.center}>
                      <TeamIconWrapper>
                        {getTeamIcon(team.classType)}
                      </TeamIconWrapper>
                      <TeamTextWrapper>
                        <TeamNameText>
                          <TextDisplay>{team.name}</TextDisplay>
                        </TeamNameText>
                        <TeamPositionText>
                          <TextDisplay>{`- ${team.classType}`}</TextDisplay>
                        </TeamPositionText>
                      </TeamTextWrapper>
                    </LayoutHorizontal>
                    <TeamDisplayToggleButton>
                      {team.classType === 'Leader' ? '表示中' : '非表示中'}
                    </TeamDisplayToggleButton>
                  </LayoutHorizontal>
                </TeamInfo>
              </TeamItemWrapper>
            )
          })}
        </TeamWrapper> */}

          <BottomWrapper>
            <LayoutVertical layoutType={LayoutType.center} style={{ margin: 'auto' }}>
              <RoundButton
                style={{ background: 'white', color: 'black' }}
                disabled={!isSubmittable}
                onClick={() =>
                  onSaveProfile().catch((err: ApolloError) => {
                    if (err.graphQLErrors.length) {
                      setErrorInfo(err.graphQLErrors[0])
                    }
                  })
                }
              >
                <TextDisplay>保存</TextDisplay>
              </RoundButton>
              <RoundButton style={{ color: 'white' }} onClick={close}>
                <TextDisplay>キャンセル</TextDisplay>
              </RoundButton>
            </LayoutVertical>
          </BottomWrapper>
        </LayoutVertical>
      </PersonalEditProfileWrapper>
      {errorInfo && (
        <ErrorMessageModal
          closeModal={() => {
            setErrorInfo(undefined)
          }}
          errorInfo={errorInfo}
        />
      )}
    </>
  )
}

export default PersonalEditProfile
