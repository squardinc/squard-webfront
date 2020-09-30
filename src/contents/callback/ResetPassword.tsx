import * as React from 'react'
import { TeamLayout } from 'src/contents/team/TeamLayout'
import { parseSearchParams } from 'src/utils/UrlParser'
import { navigate } from 'gatsby'
import { PasswordResetModal } from 'src/components/Modal/PasswordResetModal'

export const ResetPasswordLayout: React.FC = () => {
  const params = parseSearchParams(window.location.search)
  return (
    <>
      <TeamLayout />
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