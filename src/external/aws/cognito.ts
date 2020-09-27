import Amplify, { Auth } from 'aws-amplify'
import * as AWS from 'aws-sdk'
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js'
import * as uuid from 'uuid'
import { AWS_COGNITO_USERPOOL_ID, AWS_COGNITO_USERPOOL_CLIENT_ID, AWS_COGNITO_USERPOOL_DOMAIN } from 'src/utils/env'

AWS.config.region = 'ap-northeast-1'
const configure = (origin: string) => {
  Amplify.configure({
    Auth: {
      region: 'ap-northeast-1',
      userPoolId: AWS_COGNITO_USERPOOL_ID,
      userPoolWebClientId: AWS_COGNITO_USERPOOL_CLIENT_ID,
      mandatorySignIn: true,
      oauth: {
        domain: AWS_COGNITO_USERPOOL_DOMAIN,
        scope: ['email', 'profile', 'openid'],
        redirectSignIn: `${origin}/socialSignIn`,
        redirectSignOut: `${origin}/socialSignIn`,
        clientId: AWS_COGNITO_USERPOOL_CLIENT_ID,
        responseType: 'code'
      }
    }
  })
}
const userPool = new CognitoUserPool({
  UserPoolId: AWS_COGNITO_USERPOOL_ID,
  ClientId: AWS_COGNITO_USERPOOL_CLIENT_ID
})

const signUpErrorMessage = (code: string) => {
  switch (code) {
    case 'UsernameExistsException':
      return 'このメールアドレスは既に登録されています。'
  }
  return 'エラーが発生しました。入力内容を確認し、再度やり直して下さい。'
}

export const signUp = async (email: string, password: string): Promise<CognitoUser> => {
  configure(window.location.origin)
  return Auth.signUp({ username: email, password: password }).then(
    result => result.user,
    err => Promise.reject(signUpErrorMessage(err?.code))
  )
}

const confirmSignUpErrorMessage = (code: string) => {
  if (code === 'CodeMismatchException') {
    return '認証コードが一致しません'
  }
  return 'エラーが発生しました。再度登録からやり直してください。'
}

export const confirmSignUp = async (username: string, code: string) => {
  configure(window.location.origin)
  return new Promise((resolve, reject) => {
    new CognitoUser({
      Username: username,
      Pool: userPool
    }).confirmRegistration(code, true, (err, result) => {
      if (err || !result) {
        reject(confirmSignUpErrorMessage(err?.code))
        return
      }
      resolve()
    })
  })
}

export const login = async (email: string, password: string) => {
  const cognitoUser = new CognitoUser({ Username: email, Pool: userPool })
  return new Promise<CognitoUserSession>((resolve, reject) => {
    cognitoUser.authenticateUser(
      new AuthenticationDetails({ Username: email, Password: password }),
      {
        onSuccess: (session: CognitoUserSession) => {
          resolve(session)
        },
        onFailure: () => {
          reject('ログインできませんでした。入力内容を確認して再度やり直してください。')
        }
      })
  })
}

export const resetPassword = async (email: string) => {
  const cognitoUser = new CognitoUser({ Username: email, Pool: userPool })
  return new Promise((resolve, reject) => {
    cognitoUser.forgotPassword({
      onSuccess: (data) => {
        resolve()
      },
      onFailure: () => {
        reject('エラーが発生しました。入力内容を確認して再度やり直してください。')
      }
    })
  })
}

export const loginWithFacebook = () => {
  configure(window.location.origin)
  Auth.federatedSignIn({ provider: 'Facebook' })
}
