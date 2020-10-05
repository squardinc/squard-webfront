import { LoginUser } from './interfaces'

export class LoginUserModel implements LoginUser {
  constructor(readonly id: string, readonly pageId: string = id) { }

  static guest = () => new LoginUserModel('', '')

  get loggedIn() {
    return !!this.id
  }
}
