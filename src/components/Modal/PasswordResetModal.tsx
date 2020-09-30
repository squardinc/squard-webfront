import * as React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { RoundInput } from 'src/components/Input/Input'
import { RoundButton } from 'src/components/Button/DefaultButton'
import { TextDisplay } from 'src/components/TextDisplay/TextDisplay'
import { asModal, ModalProps } from './asModal'
import { DefaultModalContainer } from './ModalContainer'
import { AuthService } from 'src/services/AuthService'
import { ErrorModal } from './ErrorModal'
import { UserContext } from 'src/context/UserContext'

type PasswordResetComponentProps = ModalProps & {
  username: string
  code: string
}
const PasswordResetComponent: React.FC<PasswordResetComponentProps> = ({ username, code, closeModal }) => {
  const { setUser } = React.useContext(UserContext)
  const [password, setPassword] = React.useState('')
  const [succeeded, setSucceeded] = React.useState(false)
  const [errorMesasge, setErrorMessage] = React.useState('')

  return (
    <>
      {!errorMesasge ?
        <DefaultModalContainer closeModal={closeModal} >
          <TextDisplay className='text-4xl font-semibold'>Password Reset</TextDisplay>
          {!succeeded ?
            <>
              <TextDisplay className='mb-8 text-sm'>再設定するパスワードを入力してください</TextDisplay>
              <RoundInput value={password} onChange={setPassword} placeholder='パスワード' faIcon={faEnvelope} type='password' />
              <div className='flex flex-col'>
                <RoundButton className='text-black bg-white' text='送信' onClick={async () => {
                  AuthService.resetPassword(username, code, password).then(
                    async () => {
                      setUser(await AuthService.login(username, password))
                      setSucceeded(true)
                    },
                    (err) => setErrorMessage(err)
                  )
                }} />
              </div>
            </>
            :
            <>
              <TextDisplay className='mb-8 text-sm'>パスワードの再設定が完了しました。</TextDisplay>
              <RoundButton className='border-2 text-lg' text='OK' onClick={() => { closeModal() }} />
            </>
          }
        </DefaultModalContainer >
        : <ErrorModal message={errorMesasge} closeModal={() => setErrorMessage('')} />
      }
    </>
  )
}

export const PasswordResetModal = asModal(PasswordResetComponent)
