export interface LoginUser {
  id: string
  loggedIn: boolean
  isMine: (id: string) => boolean
}
