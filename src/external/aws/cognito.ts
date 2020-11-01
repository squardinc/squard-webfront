import { CognitoUser } from 'amazon-cognito-identity-js'
import Amplify, { Auth } from 'aws-amplify'
import {
  AWS_COGNITO_IDENTITYPOOL_ID,
  AWS_COGNITO_USERPOOL_CLIENT_ID,
  AWS_COGNITO_USERPOOL_DOMAIN,
  AWS_COGNITO_USERPOOL_ID,
  AWS_REGION
} from 'src/utils/env'
import { setItem } from 'src/utils/LocalStorage'

const configure = (origin: string) => {
  Amplify.configure({
    Auth: {
      region: AWS_REGION,
      identityPoolId: AWS_COGNITO_IDENTITYPOOL_ID,
      userPoolId: AWS_COGNITO_USERPOOL_ID,
      userPoolWebClientId: AWS_COGNITO_USERPOOL_CLIENT_ID,
      mandatorySignIn: true,
      oauth: {
        domain: AWS_COGNITO_USERPOOL_DOMAIN,
        scope: ['email', 'profile', 'openid'],
        redirectSignIn: `${origin}/socialSignIn`,
        redirectSignOut: `${origin}/socialSignOut`,
        clientId: AWS_COGNITO_USERPOOL_CLIENT_ID,
        responseType: 'code',
      },
    },
  })
}
const signUpErrorMessage = (code: string) => {
  switch (code) {
    case 'UsernameExistsException':
      return 'このメールアドレスは既に登録されています。'
  }
  return 'エラーが発生しました。入力内容を確認し、再度やり直して下さい。'
}

export const signUp = async (
  email: string,
  password: string,
  origin: string,
  currentPath: string
): Promise<CognitoUser> => {
  return Auth.signUp({
    username: email,
    password,
    clientMetadata: { origin, currentPath },
  }).then(
    (result) => result.user,
    (err) => Promise.reject(signUpErrorMessage(err?.code))
  )
}

const confirmSignUpErrorMessage = (code: string, username: string) => {
  if (code === 'ExpiredCodeException') {
    Auth.resendSignUp(username)
    return 'リンクの有効期限が切れています。新しいリンクを送信しましたので、再度アクセスをお願いします。'
  }
  return 'エラーが発生しました。再度登録からやり直してください。'
}

export const confirmSignUp = async (username: string, code: string) => {
  configure(window.location.origin)
  return await Auth.confirmSignUp(username, code).catch(async (err) => {
    return Promise.reject(confirmSignUpErrorMessage(err?.code, username))
  })
}

export const login = async (email: string, password: string) => {
  return Auth.signIn(email, password).then(
    async () => Auth.currentSession(),
    () => Promise.reject('ログインできませんでした。入力内容を確認して再度やり直してください。')
  )
}

export const resetPasswordRequest = async (email: string, origin: string, currentPath: string) => {
  setItem('previous_path', window.location.pathname)
  return await Auth.forgotPassword(email, { origin, currentPath }).catch(() =>
    Promise.reject('エラーが発生しました。入力内容を確認して再度やり直してください。')
  )
}

export const resetPassword = async (email: string, code: string, newPassword: string) => {
  return await Auth.forgotPasswordSubmit(email, code, newPassword).catch(() =>
    Promise.reject('エラーが発生しました。入力内容を確認して再度やり直してください。')
  )
}
export const loginWithFacebook = async () => {
  setItem('previous_path', window.location.pathname)
  return Auth.federatedSignIn({ provider: 'Facebook' })
}

const IGNORE_PREVIOUS_PATHS = ['/socialSignIn', '/logout']
export const logout = async () => {
  if (!IGNORE_PREVIOUS_PATHS.includes(window.location.pathname))
    setItem('previous_path', window.location.pathname)
  return Auth.signOut({})
}

export const intialize = async () => {
  configure(window.location.origin)
  return Auth.currentSession()
}

export const currentIdToken = async () => (await Auth.currentSession()).getIdToken().getJwtToken()
export const currentIdentityId = async () => (await Auth.currentCredentials()).identityId
