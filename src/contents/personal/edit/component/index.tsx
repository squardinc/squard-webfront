import * as React from 'react'
import styled from 'styled-components'
import * as personal from '../personalData'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { getTeamIcon } from '../../../../components/pages/PersonalLayout/utils'

import {
  LayoutHorizontal,
  LayoutVertical,
  LayoutType,
} from 'src/components/layout'
import { TabMenuBar, ItemProps } from 'src/components/TabMenu'
import { ImageProfile } from 'src/components/ImageProfile'

const PersonalEditProfileWrapper = styled.div`
  padding-bottom: 140px;
`

interface PersonalEditProfileProps {
  isLoading: boolean
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
const Input = styled.input`
  width: calc(100% - 120px);
  display: block;
  overflow: hidden;
  resize: both;
  min-height: 40px;
  line-height: 20px;
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
  padding-left: 2rem;
  padding-top: 0.25rem;
  line-height: 1.5rem;
`

const TeamNameText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`
const TeamPositionText = styled.div`
  line-height: 1.5rem;
`

const TeamLinkWrapper = styled.div`
  position: absolute;
  padding-top: 0.25rem;
  right: 0;
  padding-right: 0.5rem;
  height: 3rem;
`

const BottomWrapper = styled.div`
  width: 100%;
  padding: 20px;
`
const RoundButton = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid white;
  border-radius: 50vh;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
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
      <Label>{props.label}</Label>
      <Input type={props.type ? props.type : 'input'} value={props.value} />
    </LayoutHorizontal>
  )
}

export const PersonalEditProfile: React.FC<PersonalEditProfileProps> = (
  props
) => {
  return (
    <PersonalEditProfileWrapper>
      <LayoutVertical layoutType={LayoutType.topCenter}>
        <TabMenuBar
          items={tabMenuData as [ItemProps]}
          onClick={(itemMenu) => {
            console.log(itemMenu)
          }}
        />
        <ImageProfile
          cover={personal.hiroki.topImage}
          avatar={personal.hiroki.icon}
        />
        <InformationWrapper style={{ width: '100%' }}>
          <RowInformation label={'名前'} value={personal.hiroki.nameJp} />
          <RowInformation label={'英語表記'} value={personal.hiroki.nameEn} />
          <RowInformation label={'ID'} value={personal.hiroki.id} />

          <RowInformation
            type="text"
            label={'自己紹介'}
            value={personal.hiroki.description}
          />

          {personal.hiroki.socialMedia.map((socialMedia, index) => {
            return (
              <RowInformation
                key={index}
                label={`リンクURL${index}`}
                value={socialMedia.url}
              />
            )
          })}
        </InformationWrapper>

        <TeamWrapper>
          <Label style={{ width: '100%' }}>所属チーム表示切り替え</Label>

          {personal.hiroki.teams.map((team, i) => {
            return (
              <TeamItemWrapper key={i}>
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
                    <RoundButton
                      style={{
                        background: 'white',
                        color: 'black',
                        width: '100px',
                        borderRadius: '8px',
                        marginRight: '10px',
                      }}
                    >
                      保存
                    </RoundButton>
                  </LayoutHorizontal>
                </TeamInfo>
              </TeamItemWrapper>
            )
          })}
        </TeamWrapper>

        <BottomWrapper>
          <LayoutVertical
            layoutType={LayoutType.center}
            style={{ margin: 'auto' }}
          >
            <RoundButton style={{ background: 'white', color: 'black' }}>
              保存
            </RoundButton>
            <RoundButton style={{ color: 'white' }}>キャンセル</RoundButton>
          </LayoutVertical>
        </BottomWrapper>
      </LayoutVertical>
    </PersonalEditProfileWrapper>
  )
}
