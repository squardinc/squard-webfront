export interface LoginUser {
  id: string
  pageId: string
  loggedIn: boolean
  isMine: (id: string) => boolean
}
