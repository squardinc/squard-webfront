import * as React from 'react'
import { IPersonal } from 'src/models/person'
import { withTheme } from 'src/context/ThemeContext'
import { shunpei, hiroki, akihiro, shoya } from './personalData'
import { navigate } from 'gatsby'
import PersonPageLayout from './PersonPageLayout'

interface PersonPageContainerProps {
  id: string
}
const getPersonData = (id: string): IPersonal | undefined => {
  if (id === 'shunpei_koike') return shunpei
  if (id === 'hiroki_matsui') return hiroki
  if (id === 'akihiro_kimura') return akihiro
  if (id === 'shoya_yanagisawa') return shoya
}
export const PersonPageContainer: React.FC<PersonPageContainerProps> = ({
  id,
}) => {
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
  const personData = getPersonData(id)
  if (!personData) {
    navigate('/')
    return <></>
  }
  personData.id = id

  return <PersonPageLayout isLoading={false} personal={personData} />
}

export default PersonPageContainer
