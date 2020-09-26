import * as AWS from 'aws-sdk'
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js'
import * as uuid from 'uuid'
import { AWS_COGNITO_USERPOOL_ID, AWS_COGNITO_USERPOOL_CLIENT_ID } from 'src/utils/env'

AWS.config.region = 'ap-northeast-1'
const userPool = new CognitoUserPool({
  UserPoolId: AWS_COGNITO_USERPOOL_ID,
  ClientId: AWS_COGNITO_USERPOOL_CLIENT_ID
})
const signUpErrorMessage = (code: string) => {
  switch (code) {
    case 'UsernameExistsException':
      return 'メールアドレスは既に登録されています'
  }
  return 'エラーが発生しました。入力内容を確認し、再度やり直して下さい'
}

export const signUp = async (email: string, password: string): Promise<CognitoUser> => {
  return new Promise<CognitoUser>((resolve, reject) => {
    userPool.signUp(uuid.v4(), password, [new CognitoUserAttribute({ Name: 'email', Value: email })], [], (err, result) => {
      if (err || !result) {
        reject(signUpErrorMessage(err?.__type))
        return
      }
      resolve(result.user)
    });
  })
}

const confirmSignUpErrorMessage = (code: string) => {
  if (code === 'CodeMismatchException') {
    return '認証コードが一致しません'
  }
  return 'エラーが発生しました。再度登録からやり直してください。'
}

export const confirmSignUp = async (username: string, code: string) => {
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
