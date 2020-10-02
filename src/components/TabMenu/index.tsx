import React, {
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  useRef,
} from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon'

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const IconWrapper = styled.div``
const TitleWrapper = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
`
export interface ItemProps {
  id?: string
  isSelected?: boolean | '' | undefined
  icon?: string
  iconSize?: string
  title: string
  size?: number
  style?: React.CSSProperties
  onClick?: (tab: ItemProps) => void
}
export const Item = (props: ItemProps) => {
  return (
    <ItemWrapper
      style={props.style ? props.style : {}}
      onClick={() => {
        props.onClick && props.onClick({ ...props })
      }}
    >
      {props.icon && (
        <IconWrapper>
          <Icon
            name={props.icon}
            size={props.iconSize ? props.iconSize : '24px'}
            style={{ marginRight: '5px' }}
          />
        </IconWrapper>
      )}
      <TitleWrapper
        style={{
          fontSize: props.size ? `${props.size}px` : '13px',
          fontWeight: props.isSelected ? 'bold' : 'normal',
        }}
      >
        {props.title}
      </TitleWrapper>
    </ItemWrapper>
  )
}

const TabMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
const TabMenuItemWrapper = styled.div``
interface TabMenuProps {
  items: [ItemProps]
  style?: React.CSSProperties
  onClick: (tab: ItemProps) => void
}

export const TabMenuBar = (props: TabMenuProps) => {
  const [tabSelected, setTabSelected] = useState({ id: '' } as ItemProps)

  return (
    <TabMenuWrapper style={props.style ? props.style : {}}>
      {props.items.map((item, index) => {
        const isSelected = tabSelected.id && tabSelected.id === `${index}`
        return (
          <TabMenuItemWrapper key={index}>
            <Item
              {...item}
              id={`${index}`}
              isSelected={isSelected}
              onClick={(item) => {
                setTabSelected(item)
                props.onClick(item)
              }}
            />
          </TabMenuItemWrapper>
        )
      })}
    </TabMenuWrapper>
  )
}
