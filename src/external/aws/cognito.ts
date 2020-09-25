import * as AWS from 'aws-sdk'
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js'
import * as uuid from 'uuidv4'
import { AWS_COGNITO_USERPOOL_ID, AWS_COGNITO_USERPOOL_CLIENT_ID } from 'src/utils/env'

AWS.config.region = 'ap-northeast-1'
const userPool = new CognitoUserPool({
  UserPoolId: AWS_COGNITO_USERPOOL_ID,
  ClientId: AWS_COGNITO_USERPOOL_CLIENT_ID
})
export const signUp = async (email: string, password: string): Promise<CognitoUser> => {
  return new Promise<CognitoUser>((resolve, reject) => {
    userPool.signUp(uuid.uuid(), password, [new CognitoUserAttribute({ Name: 'email', Value: email })], [], (err, result) => {
      if (err) {
        // TODO handling
        console.error(err)
        reject()
        return
      }
      if (!result) {
        reject()
        return
      }
      resolve(result.user)
    });
  })
}

export const confirmSignUp = async (username: string, code: string) => {
  return new Promise((resolve, reject) => {
    new CognitoUser({
      Username: username,
      Pool: userPool
    }).confirmRegistration(code, true, (err, result) => {
      console.log()
      if (err) {
        // TODO handling
        console.error(err)
        reject()
        return
      }
      if (!result) {
        reject()
        return
      }
      resolve()
    })
  })
}

export const login = async (email: string, password: string) => {
  const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });
  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(
      new AuthenticationDetails({ Username: email, Password: password }),
      {
        onSuccess: (session: CognitoUserSession) => {
          resolve(session)
        },
        onFailure: () => {
          reject('login failed.')
        }
      })
  })
}