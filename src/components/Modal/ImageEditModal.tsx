import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ModalProps, asModal } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { fadeOut, fadeIn } from '../../utils/Modal'
import styled from 'styled-components'

type ImageEditComponentProps = ModalProps & {
  title: string
  editImage: string | null
}

const ImageEditWrapper = styled.div``

const ImageEditComponent: React.FC<ImageEditComponentProps> = ({
  closeModal,
  title,
}) => {
  function closeModalHandler(e: any) {
    e.stopPropagation()
    fadeOut()
    setTimeout(() => {
      closeModal()
    }, 500)
  }

  React.useEffect(() => {
    fadeIn()
  }, [])

  return (
    <DefaultModalContainer closeModal={closeModal}>
      <TextDisplay className="text-3xl">{title}</TextDisplay>
      <ImageEditWrapper>AAAAA</ImageEditWrapper>
      <RoundButton
        className="border-2 text-lg"
        text="OK"
        onClick={closeModalHandler}
      />
    </DefaultModalContainer>
  )
}

export const ImageEditModal = asModal(ImageEditComponent)
