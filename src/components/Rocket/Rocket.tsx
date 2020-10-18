import React from 'react';
import RocketBack from 'src/assets/about/rocket_back.svg';
import RocketFront from 'src/assets/about/rocket_front.svg';
import styled, { keyframes } from 'styled-components';



const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const upcoming = keyframes`
  0% {
    opacity: 0;
    transform: translateY(600px);
  }

  5% {
    opacity: 1;
    transform: translateY(600px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Back = styled.div`
  opacity: 0;
  transform: translateY(600px);
  animation : ${upcoming} 5s ease-out 0.5s 1 both;
`

const Front = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`


export const Rocket: React.FC = (props) => {
  return (
    <Wrapper>
      <Back>
        <RocketBack />
      </Back>
      <Front>
        <RocketFront />
      </Front>
    </Wrapper>
  )
}
