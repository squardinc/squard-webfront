export interface LoginUser {
  id: string
  icon: string
  agreementsVerified: boolean
  loggedIn: boolean
  isMine: (id: string) => boolean
}
