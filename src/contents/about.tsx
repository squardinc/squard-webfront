import * as React from 'react'

import { Heading1 } from 'src/components/Heading1/Heading1'
import { About } from './about/About/About'
import { Classes } from './about/Classes/Classes'
import { ManagementSystem } from './about/ManagementSystem/ManagementSystem'
import { Status } from './about/Status/Status'

export const AboutPage: React.FC = () => {
  return (
    <div>
      <Heading1>About</Heading1>
      <About></About>
      <Classes></Classes>
      <Status></Status>
      <ManagementSystem></ManagementSystem>
    </div>
  )
}
