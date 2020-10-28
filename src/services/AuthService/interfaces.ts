export interface LoginUser {
  id: string
  pageId: string
  icon: string
  agreementsVerified: boolean
  loggedIn: boolean
  isMine: (id: string) => boolean
}
