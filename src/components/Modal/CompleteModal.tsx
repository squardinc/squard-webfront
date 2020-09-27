import * as React from 'react'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { ModalProps, asModal } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import Complete from 'src/assets/payment.svg'
import { fadeOut } from '../../utils/Modal'

type CompleteComponentProps = ModalProps & {
  title: string
  headerDescription?: string
  footerDescription?: string
}
export const CompleteCompoenent: React.FC<CompleteComponentProps> = ({ closeModal, title, headerDescription = '', footerDescription = '' }) => {

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
        <TextDisplay className='text-3xl'>{title}</TextDisplay>
        <TextDisplay className='mb-8 text-lg'>{headerDescription}</TextDisplay>
        <Complete />
        <TextDisplay className='mt-10 text-lg'>{footerDescription}</TextDisplay>
        <RoundButton className='border-2 text-lg' text='OK'  onClick={closeModalHandler}/>
      </div>
    </DefaultModalContainer>
  )
}

export const CompleteModal = asModal(CompleteCompoenent)
