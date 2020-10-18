import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  opacity: 0.5;
  background: #000;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  animation: ${rotate} 2s linear infinite;
`

interface LoadingProps {
  loading: boolean
}

const Loading: React.FC<LoadingProps> = ({ children, loading }) => {
  if (loading) {
    return (
      <LoadingMask>
        <Spinner>
          <FontAwesomeIcon icon={faSpinner} size="lg" color="white" />
        </Spinner>
      </LoadingMask>
    )
  }

  return <></>
}

export default Loading
