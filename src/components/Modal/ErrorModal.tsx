import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ModalProps, asModal } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { fadeOut } from '../../utils/Modal'

type ErrorComponentProps = ModalProps & {
  message: string
}
export const ErrorCompoenent: React.FC<ErrorComponentProps> = ({ closeModal, message}) => {

  function closeModalHandler(e: any) {
    e.stopPropagation()
   fadeOut()
    setTimeout(() => {
      closeModal()
    }, 500)
  }


  return (
    <DefaultModalContainer closeModal={closeModal} >
      <div className='flex flex-col justify-center items-center font-semibold'>
        <TextDisplay className='text-3xl'>{}</TextDisplay>
        <TextDisplay className='mb-8 text-lg'>{message}</TextDisplay>
        <RoundButton className='border-2 text-lg' text='Close' onClick={closeModalHandler}/>
      </div>
    </DefaultModalContainer>
  )
}

export const ErrorModal = asModal(ErrorCompoenent)
