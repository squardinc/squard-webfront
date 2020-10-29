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
    return new LoginUserModel(credential.getIdToken().decodePayload().sub)
  }
  resetPasswordRequest = async (email: string, origin: string, currentPath: string) => {
    return Cognito.resetPasswordRequest(email, origin, currentPath)
  }
  resetPassword = async (username: string, code: string, newPassword: string) => {
    return Cognito.resetPassword(username, code, newPassword)
  }
  loginWithFacebook = async () => {
    return Cognito.loginWithFacebook()
  }

  logout = async () => Cognito.logout()

  intialize = async () => {
    return Cognito.intialize().then(
      (credential) => credential.getIdToken().decodePayload().sub,
      () => ''
    )
  }
  idToken = async () => Cognito.currentIdToken()
}

export const AuthService = new Service()
