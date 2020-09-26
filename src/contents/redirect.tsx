import * as React from 'react'
import { navigate } from 'gatsby'

interface RedirectProps {
  default: boolean
}
export const Redirect: React.FC<RedirectProps> = () => {
  // TODO Loading
  if (typeof window !== 'undefined') {
    navigate('/squard')
  }
  return <></>
}
