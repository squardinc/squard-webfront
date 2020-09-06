import { functions } from './firebase'


interface FunctionResponse<T> {
  status: 'sucess' | 'failure'
  data?: T
  errorMessage?: string
}
interface PaymentSession {
  sessionId: string
}

export const requestSubscription = async (priceId: string) => {
  const requestSubscriptionFn = functions.httpsCallable('requestSubscription')
  const response = await requestSubscriptionFn({ priceId, origin: window.location.host })
  const result = response.data as FunctionResponse<PaymentSession>
  if (result.status == 'failure') {
    throw new Error(result.errorMessage)
  }
  return result.data
}