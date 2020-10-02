import * as React from 'react'
import PersonalLayout from 'src/components/pages/PersonalLayout'
import { IPersonal } from 'src/models/personal'
import { withTheme } from 'src/context/ThemeContext'
import { shunpei, hiroki, akihiro, shoya } from './personalData'
import { navigate } from 'gatsby'

interface PersonalLayoutContainerProps {
  id: string
}
const getPersonData = (id: string): IPersonal | undefined => {
  if (id === 'shunpei_koike')
    return shunpei
  if (id === 'hiroki_matsui')
    return hiroki
  if (id === 'akihiro_kimura')
    return akihiro
  if (id === 'shoya_yanagisawa')
    return shoya
}
export const PersonalLayoutContainer: React.FC<PersonalLayoutContainerProps> = ({ id }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 400)
  //   return () => clearTimeout(timer)
  // }, [])

  // if (isLoading) {
  //   return <></>
  // }
  const personData = getPersonData('shunpei_koike')
  if (!personData) {
    navigate('/')
    return <></>
  }
  return <PersonalLayout isLoading={false} personal={personData} />
}

export default withTheme(PersonalLayoutContainer, 'gray')
