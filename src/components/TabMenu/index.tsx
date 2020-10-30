import CSS from 'csstype'
import React, { CSSProperties } from 'react'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { windowWidth } from 'src/styles/sizes'
import styled from 'styled-components'

type  ItemWrapperStyleProps = CSSProperties & {
  clickable: boolean
}
const ItemWrapper = styled.button`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: ${(props: ItemWrapperStyleProps) => {
    if(!props.clickable) return 'default'
    return props.disabled ? 'not-allowed': 'pointer' 
  }};
`
const TitleWrapper = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  min-width: 100px;
`
export interface ItemProps {
  title: string
  align?: CSS.Properties['textAlign']
  fontSize?: number
  fontWeight?: number
  disabled: boolean
  onClick?: () => Promise<void>
}
export const Item: React.FC<ItemProps> = ({
  title,
  onClick,
  disabled,
  align,
  fontSize,
  fontWeight,
}) => {
  return (
    <ItemWrapper
      clickable={onClick}
      disabled={disabled}
      onClick={() => {
        if (onClick) return onClick()
        return Promise.resolve()
      }}
    >
      <TitleWrapper
        style={{
          fontSize: fontSize ? `${fontSize}px` : '15px',
          fontWeight: fontWeight ? fontWeight : 'bold',
          textAlign: align ? align : 'center',
        }}
      >
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
  saveDisabled: boolean
  style?: React.CSSProperties
}

export const TabMenuBar: React.FC<TabMenuProps> = ({
  title,
  onCancel,
  onSave,
  saveDisabled,
  style = {},
}) => {
  return (
    <TabMenuWrapper style={style}>
      <TabMenuItemWrapper>
        <Item title="キャンセル" align={'left'} fontWeight={500} onClick={onCancel} />
      </TabMenuItemWrapper>
      <TabMenuItemWrapper>
        <Item title={title} align={'center'} />
      </TabMenuItemWrapper>
      <TabMenuItemWrapper>
        <Item
          title="保存"
          align={'right'}
          fontWeight={500}
          disabled={saveDisabled}
          onClick={onSave}
        />
      </TabMenuItemWrapper>
    </TabMenuWrapper>
  )
}
