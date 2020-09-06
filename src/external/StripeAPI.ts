import { loadStripe } from '@stripe/stripe-js'
import { STRIPE_PUBLIC_KEY } from 'src/env/Variables'

export const checkout = async (sessionId: string) => {
  const stripe = await loadStripe(STRIPE_PUBLIC_KEY)
  await stripe?.redirectToCheckout({ sessionId }).catch(err => {
    // TODO handle error
    console.error(err)
  })
}
