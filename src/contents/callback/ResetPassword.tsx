import { navigate } from 'gatsby'
import * as React from 'react'
import { PasswordResetModal } from 'src/components/Modal/PasswordResetModal'
import { getPreviousPath } from 'src/utils/LocalStorage'
import { parseSearchParams } from 'src/utils/UrlParser'

export const ResetPasswordLayout: React.FC = () => {
  const params = parseSearchParams(window.location.search)
  return (
    <>
      <PasswordResetModal
        username={params.id}
        code={params.code}
        closeModal={() => {
          navigate(getPreviousPath())
        }}
      />
    </>
  )
}

export default ResetPasswordLayout
