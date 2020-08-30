import * as React from 'react'
import { SampleService } from 'src/services/Sample'

const IndexPage = () => {
  const service = new SampleService()
  return <div>{service.hello()}</div>
}

export default IndexPage
