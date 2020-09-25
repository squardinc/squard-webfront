import * as Cognito from 'src/external/aws/cognito'

interface LoginUser {
  userId: string
}

export class AuthService {
  signUp = async (userId: string, password: string): Promise<LoginUser> => {
    const user = await Cognito.signUp(userId, password)
    return {
      userId: user.getUsername()
    }
  }
  signUpConfirmation = async (userId: string, code: string) => {
    return Cognito.confirmSignUp(userId, code)
  }

  login = async (email: string, password: string) => {
    return await Cognito.login(email, password)
  }
}
