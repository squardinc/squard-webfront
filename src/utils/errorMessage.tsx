import * as React from 'react'
import { ErrorType } from 'src/types/ErrorType'

export const errorMessage = (errorType?: ErrorType) => {
  if (errorType === 'NOT_JOINED') return 'チームに参加していません。'
  if (errorType === 'ALREADY_JOINED') return '既に参加しています。'
  if (errorType === 'ALREADY_LEFT') return 'チームに参加していないか、既に脱退しています。'
  return <div>サーバーとの通信に失敗しました。再度お試し頂くか、<a href='mailto:contact@squard.co.jp'>運営者</a>へお問い合わせ下さい。</div>
}
