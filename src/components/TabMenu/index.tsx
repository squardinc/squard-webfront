import React from 'react'
import styled from 'styled-components'
import { windowWidth } from 'src/styles/sizes'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'

interface ItemWrapperStyleProps {
  clickable: boolean
}
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: ${(props: ItemWrapperStyleProps) =>
    props.clickable ? 'pointer' : 'default'};
  min-width: 100px;
`
const TitleWrapper = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
`
export interface ItemProps {
  title: string
  fontSize?: number
  onClick?: VoidFunction
}
export const Item: React.FC<ItemProps> = ({ title, onClick, fontSize }) => {
  return (
    <ItemWrapper clickable={!!onClick} onClick={() => onClick && onClick()}>
      <TitleWrapper style={{ fontSize: fontSize ? `${fontSize}px` : '13px' }}>
        <TextDisplay>{title}</TextDisplay>
      </TitleWrapper>
    </ItemWrapper>
  )
}

const TabMenuWrapper = styled.div`
  z-index: 1;
  max-width: ${windowWidth};
  width: 100%;
  position: fixed;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
const TabMenuItemWrapper = styled.div``
interface TabMenuProps {
  title: string
  onCancel: VoidFunction
  onSave: VoidFunction
  style?: React.CSSProperties
}

export const TabMenuBar: React.FC<TabMenuProps> = ({
  title,
  onCancel,
  onSave,
  style = {},
}) => {
  return (
    <TabMenuWrapper style={style}>
      <TabMenuItemWrapper>
        <Item title="キャンセル" onClick={onCancel} />
      </TabMenuItemWrapper>
      <TabMenuItemWrapper>
        <Item title={title} />
      </TabMenuItemWrapper>
      <TabMenuItemWrapper>
        <Item title="保存" onClick={onSave} />
      </TabMenuItemWrapper>
    </TabMenuWrapper>
  )
}
