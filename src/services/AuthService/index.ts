import * as Cognito from 'src/external/aws/cognito'

interface LoginUser {
  userId: string
}

export class AuthService {
  signUp = async (email: string, password: string): Promise<LoginUser> => {
    const user = await Cognito.signUp(email, password)
    return {
      userId: user.getUsername()
    }
  }
  signUpConfirmation = async (username: string, code: string) => {
    return Cognito.confirmSignUp(username, code)
  }

  login = async (email: string, password: string) => {
    return await Cognito.login(email, password)
  }
}
