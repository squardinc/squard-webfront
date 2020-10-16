import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { Loading } from '../Loading'
import * as colors from '../../styles/colors'
import * as Const from '../../styles/const'

export interface MainProps {
  loading?: boolean
  children: React.ReactNode
}

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
`

const Animation = styled.div<{ out: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  visibility: ${(props) => (props.out ? 'hidden' : 'visible')};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 1s linear;
  transition: visibility 1s linear;
`

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay))
}
export const MainContainer = React.memo((props: MainProps) => {
  const spinner = document.getElementById('loader')
  const [count, setCount] = useState(0)

  // console.log(count)
  // useEffect(() => {
  //   async function setTimer() {
  //     if (count < 100) {
  //       await timeout(10)
  //       setCount(count + 1)
  //     }
  //   }
  //   setTimer()
  // }, [count])

  return (
    <MainWrapper>
      {props.children}
      {/* {count === 100 ? props.children : <Loading type={'page'} />} */}
    </MainWrapper>
  )
})
