import * as Functions from 'src/external/firebase/Functions'

class Service {
  requestSubscription = async (priceId: string) => {
    const session = await Functions.requestSubscription(priceId)
    return session?.sessionId || ''
  }
}

export const PaymentService = new Service()
