import { LoginUser } from './interfaces'

export class LoginUserModel implements LoginUser {
  constructor(readonly email: string, readonly idToken: string) {}

  static guest = () => new LoginUserModel('', '')

  get loggedIn() {
    return !!this.idToken
  }
}
