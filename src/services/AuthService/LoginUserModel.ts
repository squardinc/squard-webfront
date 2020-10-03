import { LoginUser } from './interfaces'

export class LoginUserModel implements LoginUser {
  constructor(readonly id: string, readonly idToken: string) { }

  static guest = () => new LoginUserModel('', '')

  get loggedIn() {
    return !!this.idToken
  }
}
