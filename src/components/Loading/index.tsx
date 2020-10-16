import * as React from 'react'
import styled from 'styled-components'
import * as colors from '../../styles/colors'
import * as Const from '../../styles/const'

export interface LoadingProps {
  type?: 'page' | 'component'
  process?:number
  loading?: boolean
  children?: React.ReactNode
}

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  color:black;
  display: flex;
  align-items:center;
`

export const PageLoading = () => {

}

export const Loading = React.memo((props: LoadingProps) => {
  return <LoadingWrapper>{props.process}</LoadingWrapper>
})
