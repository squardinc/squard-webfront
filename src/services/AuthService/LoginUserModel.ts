import { TERMS_OF_USE_VERSION } from 'src/contents/termsofuse/TermsOfUsePage'
import { LoginUser } from './interfaces'

export class LoginUserModel implements LoginUser {
  private constructor(
    readonly id: string,
    readonly icon: string,
    private agreedTermsOfUseVersions: string[]
  ) {}

  static guest = () => new LoginUserModel('', '', [])
  static user = (id: string, icon = '', agreedTermsOfUseVersions = []) =>
    new LoginUserModel(id, icon, agreedTermsOfUseVersions)

  get loggedIn() {
    return !!this.id
  }

  get agreementsVerified() {
    return (
      !!this.agreedTermsOfUseVersions?.length &&
      this.agreedTermsOfUseVersions.includes(TERMS_OF_USE_VERSION)
    )
  }

  isMine = (id: string) => id === this.id
}
