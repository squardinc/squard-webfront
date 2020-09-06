import * as React from 'react'
import * as StripeAPI from 'src/external/StripeAPI'
import { PaymentService } from 'src/services/PaymentService'

import style from './PaymentLayout.module.scss'
import { array } from 'prop-types'

const PaymnetContent: React.FC = ({ sessionId, setSessionId }) => {
  const request = async (priceId: string) => {
    const id = await PaymentService.requestSubscription(priceId)
    setSessionId(id)
  }
  if (sessionId) {
    StripeAPI.checkout(sessionId)
  }
  return (
    <div>
      <div className={style.paymentLayout}>
        <div>
          ・Squard Front 開発に Prospect として参加を申し込む
          <br />
           10,000 JPY / month + tax
          <br />
          <button onClick={() => request('price_1HOI46Khcfrw0Jk6jAOHQEbl')} disabled={sessionId}>
            Request
          </button>
        </div>
        <div>
          ・Squard UI/UXデザインに Prospect として参加を申し込む
          <br />
           15,000 JPY / month + tax
          <br />
          <button onClick={() => request('price_1HOOsNKhcfrw0Jk6tkb8QROB')} disabled={sessionId}>
            Request
          </button>
        </div>
      </div>
    </div>
  )
}
const parseSearchParams = (search: string) => {
  const params = search.substring(1).split('&')
  return params.reduce((previous: any, cuurent) => {
    const [key, value] = cuurent.split('=')
    if (!previous[key]) {
      previous[key] = value
      return previous
    }
    const existence = previous[key]
    if (existence instanceof array) {
      existence.push(value)
    } else {
      previous[key] = [existence, value]
    }
    return previous
  }, {})
}
export const PaymentLayout: React.FC = () => {
  const [sessionId, setSessionId] = React.useState<string>('')
  if (typeof window === 'undefined') {
    return <></>
  }
  const params = parseSearchParams(window.location.search)
  const paymentStatus = params.status
  if (paymentStatus) {
    return (
      <div>
        <div className={style.paymentLayout}>
          Congratulations! You're Squard Prospect from now on!
        </div>
      </div>
    )
  }
  return <PaymnetContent sessionId={sessionId} setSessionId={setSessionId} />
}