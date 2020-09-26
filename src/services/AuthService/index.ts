import * as Cognito from 'src/external/aws/cognito'
import { LoginUserModel } from './LoginUserModel'

class Service {
  signUp = async (email: string, password: string) => {
    const user = await Cognito.signUp(email, password)
    return user.getUsername()
  }
  signUpConfirmation = async (username: string, code: string) => {
    return Cognito.confirmSignUp(username, code)
  }

  login = async (email: string, password: string) => {
    const credential = await Cognito.login(email, password)
    return new LoginUserModel(email, credential.getIdToken().getJwtToken())
  }
}

export const AuthService = new Service()