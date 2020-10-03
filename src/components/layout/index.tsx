import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

export enum JustifyContentType {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  spaceBetween = 'space-between',
  spaceAround = 'space-around',
  spaceEvenly = 'space-evenly',
  start = 'start',
  end = 'end',
  left = 'left',
  right = 'right',
  unsafe = 'unsafe',
}

export enum AlignItemsType {
  stretch = 'stretch',
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  baseline = 'baseline',
  firstBaseline = 'first baseline',
  lastBaseline = 'last baseline',
  start = 'start',
  end = 'end',
  selfStart = 'self-start',
  selfEnd = 'self-end',
  unsafe = 'unsafe',
}

export enum AlignContentType {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  spaceBetween = 'space-between',
  spaceAround = 'space-around',
  spaceEvenly = 'space-evenly',
  start = 'start',
  end = 'end',
  left = 'left',
  right = 'right',
  unsafe = 'unsafe',
}

export enum WrapType {
  nowrap = 'nowrap',
  wrap = 'wrap',
  reverse = 'reverse',
}

export enum DirectionType {
  row = 'row',
  rowReverse = 'row-reverse',
  column = 'column',
  columnReverse = 'column-reverse',
}

export enum DisplayType {
  none = 'none',
  inline = 'inline',
  block = 'block',
  inlineBlock = 'inline-block',
  flex = 'flex',
}

export function justifyContent(type: JustifyContentType) {
  return `justify-content:${type};`
}

export function alignItems(type: AlignItemsType) {
  return `align-items:${type};`
}

export function alignContent(type: AlignContentType) {
  return `align-content:${type};`
}

export function flexWrap(type: WrapType) {
  return `flex-wrap:${type};`
}

export function flexDirection(type: DirectionType) {
  return `flex-direction:${type};`
}

export function display(type: DisplayType) {
  return `display:${type};`
}

export const flexStype = {
  row: {
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    topCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  column: {},
}

/*
  topLeft -> left param & right param
  left : AlignItemsType
  right :JustifyContentType
*/
export enum LayoutType {
  topLeft = 'topLeft',
  topCenter = 'topCenter',
  topRight = 'topRight',
  centerLeft = 'centerLeft',
  center = 'center',
  centerRight = 'centerRight',
  bottomLeft = 'bottomLeft',
  bottomCenter = 'bottomCenter',
  bottomRight = 'bottomRight',
  topBetween = 'topBetween',
  centerBetween = 'centerBetween',
  bottomBetween = 'bottomBetween',
  topAround = 'topAround',
  centerAround = 'centerAround',
  bottomAround = 'bottomAround',
  topEvenly = 'topEvenly',
  centerEvenly = 'centerEvenly',
  bottomEvenly = 'bottomEvenly',
}

const FlexLayoutRowValue = {
  topLeft: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.flexStart,
    alignItems: AlignItemsType.flexStart,
  },
  topCenter: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.center,
    alignItems: AlignItemsType.flexStart,
  },
  topRight: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.flexEnd,
    alignItems: AlignItemsType.flexStart,
  },
  centerLeft: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.flexStart,
    alignItems: AlignItemsType.center,
  },
  center: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.center,
    alignItems: AlignItemsType.center,
  },
  centerRight: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.flexEnd,
    alignItems: AlignItemsType.center,
  },
  bottomLeft: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.flexStart,
    alignItems: AlignItemsType.flexEnd,
  },
  bottomCenter: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.center,
    alignItems: AlignItemsType.flexEnd,
  },
  bottomRight: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.flexEnd,
    alignItems: AlignItemsType.flexEnd,
  },
  topBetween: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.spaceBetween,
    alignItems: AlignItemsType.flexStart,
  },
  centerBetween: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.spaceBetween,
    alignItems: AlignItemsType.center,
  },
  bottomBetween: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.spaceBetween,
    alignItems: AlignItemsType.flexEnd,
  },
  topAround: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.spaceAround,
    alignItems: AlignItemsType.flexStart,
  },
  centerAround: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.spaceAround,
    alignItems: AlignItemsType.center,
  },
  bottomAround: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.spaceAround,
    alignItems: AlignItemsType.flexEnd,
  },
  topEvenly: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.spaceEvenly,
    alignItems: AlignItemsType.flexStart,
  },
  centerEvenly: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.spaceEvenly,
    alignItems: AlignItemsType.center,
  },
  bottomEvenly: {
    display: DisplayType.flex,
    justifyContent: JustifyContentType.spaceEvenly,
    alignItems: AlignItemsType.flexEnd,
  },
}

const FlexLayoutColumnValue = {
  topLeft: FlexLayoutRowValue.topLeft,
  topCenter: FlexLayoutRowValue.centerLeft,
  topRight: FlexLayoutRowValue.bottomLeft,
  centerLeft: FlexLayoutRowValue.topCenter,
  center: FlexLayoutRowValue.center,
  centerRight: FlexLayoutRowValue.bottomCenter,
  bottomLeft: FlexLayoutRowValue.topRight,
  bottomCenter: FlexLayoutRowValue.centerRight,
  bottomRight: FlexLayoutRowValue.bottomRight,
  topBetween: FlexLayoutRowValue.topBetween,
  centerBetween: FlexLayoutRowValue.centerBetween,
  bottomBetween: FlexLayoutRowValue.bottomBetween,
  topAround: FlexLayoutRowValue.topAround,
  centerAround: FlexLayoutRowValue.centerAround,
  bottomAround: FlexLayoutRowValue.bottomAround,
  topEvenly: FlexLayoutRowValue.topEvenly,
  centerEvenly: FlexLayoutRowValue.centerEvenly,
  bottomEvenly: FlexLayoutRowValue.bottomEvenly,
}

/*

  margin | padding: 25px 50px 75px 100px;
    top padding is 25px
    right padding is 50px
    bottom padding is 75px
    left padding is 100px

  margin | padding: 25px 50px 75px;
    top padding is 25px
    right and left paddings are 50px
    bottom padding is 75px

  margin | padding: 25px 50px;
    top and bottom paddings are 25px
    right and left paddings are 50px

*/
export interface FlexBoxProps {
  direction?: DirectionType
  layoutType?: LayoutType
  wrap?: WrapType
  padding?: string
  margin?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export function getLayoutStyle(props: FlexBoxProps) {
  let style = props.style ? props.style : {}
  props.padding && (style.padding = props.padding)
  props.margin && (style.margin = props.margin)

  style.flexDirection = DirectionType.row
  props.direction && (style.flexDirection = props.direction)

  const wrap = {
    flexWrap: props.wrap ? props.wrap : WrapType.wrap,
  }

  let layoutStyle =
    FlexLayoutRowValue[props.layoutType ? props.layoutType : LayoutType.topLeft]
  if (props.direction === DirectionType.column) {
    layoutStyle =
      FlexLayoutColumnValue[
        props.layoutType ? props.layoutType : LayoutType.topLeft
      ]
  }

  const mixStyle = { ...style, ...wrap, ...layoutStyle }
  return mixStyle
}

export const FlexBox = (props: FlexBoxProps) => {
  const style = getLayoutStyle(props) as React.CSSProperties
  return <Wrapper style={style}>{props.children ? props.children : ''}</Wrapper>
}

export const LayoutHorizontal = (props: FlexBoxProps) => {
  const config = { ...props }
  config.direction = DirectionType.row
  return <FlexBox {...config} />
}

export const LayoutVertical = (props: FlexBoxProps) => {
  const config = { ...props }
  config.direction = DirectionType.column
  return <FlexBox {...config} />
}

export interface FlexStyles {
  justifyContent?: React.CSSProperties['justifyContent']
  alignItems?: React.CSSProperties['alignItems']
  flexDirection?: React.CSSProperties['flexDirection']
  padding?: React.CSSProperties['padding']
}

export const Flex = styled.div<FlexStyles>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
`
