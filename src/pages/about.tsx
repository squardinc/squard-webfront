import * as React from 'react'

import { PageWrapper } from 'src/components/PageWrapper'
import { About } from 'src/contents/about/About/About'
import { Classes } from 'src/contents/about/Classes/Classes'
import { Status } from 'src/contents/about/Status/Status'
import { ManagementSystem } from 'src/contents/about/ManagementSystem/ManagementSystem'
import { Heading1 } from 'src/components/Heading1/Heading1'

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <Heading1>About</Heading1>
      <About></About>
      <Classes></Classes>
      <Status></Status>
      <ManagementSystem></ManagementSystem>
    </PageWrapper>
  )
}

export default AboutPage
