import * as Cognito from 'src/external/aws/cognito'
import { LoginUserModel } from './LoginUserModel'

class Service {
  signUp = async (email: string, password: string, origin: string, currentPath: string) => {
    const user = await Cognito.signUp(email, password, origin, currentPath)
    return user.getUsername()
  }
  confirmSignUp = async (username: string, code: string) => {
    return Cognito.confirmSignUp(username, code)
  }

  login = async (email: string, password: string) => {
    const credential = await Cognito.login(email, password)
    return new LoginUserModel(email, credential.getIdToken().getJwtToken())
  }
  resetPassword = async (email: string) => {
    return Cognito.resetPassword(email)
  }
  loginWithFacebook = () => {
    Cognito.loginWithFacebook()
  }
}

export const AuthService = new Service()
