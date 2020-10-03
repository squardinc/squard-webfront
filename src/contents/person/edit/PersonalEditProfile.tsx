import * as React from 'react'
import styled from 'styled-components'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { getTeamIcon } from 'src/contents/person/utils'
import { withTheme } from 'src/context/ThemeContext'
import { IPersonal } from 'src/models/person'
import { ImageEditModal } from 'src/components/Modal/ImageEditModal'

import {
  LayoutHorizontal,
  LayoutVertical,
  LayoutType,
} from 'src/components/layout'
import { TabMenuBar, ItemProps } from 'src/components/TabMenu'
import { ImageProfile, ImageType } from 'src/components/ImageProfile'

const PersonalEditProfileWrapper = styled.div`
  padding-bottom: 0px;
  background: black;
`

interface PersonalEditProfileProps {
  isLoading: boolean
  personal: IPersonal
  close: VoidFunction
  savePofile: Function
  saveImage: Function
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
  border-top: 1px solid gray;
`
const Label = styled.div`
  width: 110px;
  margin-right: 10px;
  color: gray;
`
const Input = styled.div`
  width: calc(100% - 120px);
  display: block;
  background: none;
  color: white;
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

const TeamDisplayButton = styled.div`
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
  text-align: center;
  padding: 10px;
  border: 1px solid white;
  border-radius: 50vh;
  width: 200px;
  margin-top: 15px;
  margin-bottom: 0px;
`

interface RowInformationProps {
  type?: string
  label: string
  value?: string
}

const RowInformation = (props: RowInformationProps) => {
  return (
    <LayoutHorizontal
      layoutType={LayoutType.centerLeft}
      style={{
        width: '100%',
        borderBottom: '1px solid gray',
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingBottom: '10px',
        paddingTop: '10px',
      }}
    >
      <Label>
        <TextDisplay>{props.label}</TextDisplay>
      </Label>
      <Input
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={(e) => {
          console.log(e.currentTarget.textContent)
        }}
      >
        <TextDisplay>{props.value}</TextDisplay>
      </Input>
    </LayoutHorizontal>
  )
}

export const PersonalEditProfile: React.FC<PersonalEditProfileProps> = (
  props
) => {
  const { personal, close, saveImage, savePofile } = props
  const [showTopImageEditModal, setShowTopImageEditModal] = React.useState(false)
  const [showIconEditModal, setShowIconEditModal] = React.useState(false)
  const [topImage, setTopImage] = React.useState<Blob>()
  const [icon, setIcon] = React.useState<Blob>()
  const [topImagePreviewUrl, setTopImagePreviewUrl] = React.useState<string>('')
  const [iconPreviewUrl, setIconPreviewUrl] = React.useState<string>('')
  const [profile, setProfile] = React.useState<IPersonal>(personal)

  return (
    <PersonalEditProfileWrapper>
      <LayoutVertical layoutType={LayoutType.topCenter}>
        <TabMenuBar
          items={tabMenuData as [ItemProps]}
          onClick={(itemMenu) => {
            if (itemMenu.title !== 'プロフィールを編集') {
              close()
            }
          }}
        />
        <ImageProfile
          cover={topImagePreviewUrl || profile.topImage}
          avatar={iconPreviewUrl || profile.icon}
          onEditIcon={() => setShowIconEditModal(true)}
          onEditTopImage={() => setShowTopImageEditModal(true)}
        />
        <InformationWrapper style={{ width: '100%' }}>
          <RowInformation label={'名前'} value={profile.nameJp} />
          <RowInformation label={'英語表記'} value={profile.nameEn} />
          <RowInformation label={'ID'} value={profile.id} />

          <RowInformation
            type="text"
            label={'自己紹介'}
            value={profile.description}
          />

          {profile.socialMedia.map((socialMedia, index) => {
            return (
              <RowInformation
                key={`${index}_${socialMedia.url}`}
                label={`リンクURL${index + 1}`}
                value={socialMedia.url}
              />
            )
          })}
        </InformationWrapper>

        <TeamWrapper>
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
                    <TeamDisplayButton>
                      {team.classType === 'Leader' ? '表示中' : '非表示中'}
                    </TeamDisplayButton>
                  </LayoutHorizontal>
                </TeamInfo>
              </TeamItemWrapper>
            )
          })}
        </TeamWrapper>

        <BottomWrapper>
          <LayoutVertical layoutType={LayoutType.center} style={{ margin: 'auto' }}>
            <RoundButton style={{ background: 'white', color: 'black' }} onClick={async () => {
              if (icon) {
                const url = await saveImage('icon.jpeg', icon, 'image/jpeg')
                setProfile(Object.assign(profile, { icon: url }))
              }
              if (topImage) {
                const url = await saveImage('top.jpeg', icon, 'image/jpeg')
                setProfile(Object.assign(profile, { topImage: url }))
              }
              await savePofile(profile)
              close()
            }}>
              <TextDisplay>保存</TextDisplay>
            </RoundButton>
            <RoundButton style={{ color: 'white' }} onClick={close} >
              <TextDisplay>キャンセル</TextDisplay>
            </RoundButton>
          </LayoutVertical>
        </BottomWrapper>
      </LayoutVertical>
      {showTopImageEditModal && (
        <ImageEditModal
          fileName='top.jpeg'
          contentType='image/jpeg'
          closeModal={() => {
            if (typeof window !== 'undefined')
              window.URL.revokeObjectURL(topImagePreviewUrl)
            setShowTopImageEditModal(false)
          }}
          setImg={setTopImage}
          setPreviewUrl={setTopImagePreviewUrl}
        />
      )}
      {showIconEditModal && (
        <ImageEditModal
          fileName='icon.jpeg'
          contentType='image/jpeg'
          closeModal={() => setShowIconEditModal(false)}
          setImg={setIcon}
          setPreviewUrl={setIconPreviewUrl}
        />
      )}
    </PersonalEditProfileWrapper>
  )
}

export default React.memo(withTheme(PersonalEditProfile, 'gray'))
