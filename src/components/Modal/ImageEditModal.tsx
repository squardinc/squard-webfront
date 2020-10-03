import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ModalProps, asModal } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { fadeOut } from '../../utils/Modal'
import styled from 'styled-components'

type ImageEditModalProps = ModalProps & {
  title: string
  headerDescription?: string
  footerDescription?: string
  editImage: string | null
}

const ImageEditWrapper = styled.div`
 
`

export const ImageEditModal: React.FC<ImageEditModalProps> = ({
  closeModal,
  title,
  headerDescription = '',
  footerDescription = '',
}) => {
    
  function closeModalHandler(e: any) {
    e.stopPropagation()
    fadeOut()
    setTimeout(() => {
      closeModal()
    }, 500)
  }

  return (
    <DefaultModalContainer closeModal={closeModal}>
    
        <TextDisplay className="text-3xl">{title}</TextDisplay>
        <ImageEditWrapper>
                AAAAA
        </ImageEditWrapper>
        <RoundButton
          className="border-2 text-lg"
          text="OK"
          onClick={closeModalHandler}
        />
    
    </DefaultModalContainer>
  )
}

export const CompleteModal = asModal(ImageEditModal)
