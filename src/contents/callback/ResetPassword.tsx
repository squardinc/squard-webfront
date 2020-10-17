import { navigate } from 'gatsby'
import * as React from 'react'
import { PasswordResetModal } from 'src/components/Modal/PasswordResetModal'
import { parseSearchParams } from 'src/utils/UrlParser'
import { TopLayout } from '../TopLayout'

export const ResetPasswordLayout: React.FC = () => {
  const params = parseSearchParams(window.location.search)
  return (
    <>
      <TopLayout />
      <PasswordResetModal
        username={params.id}
        code={params.code}
        closeModal={() => {
          navigate(params.path || '/')
        }}
      />
    </>
  )
}

export default ResetPasswordLayout
