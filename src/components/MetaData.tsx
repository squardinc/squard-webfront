import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MetaDataQuery } from 'types/graphql-types'

export const MetaData: React.FC = () => (
  <StaticQuery
    query={query}
    render={(data: MetaDataQuery) => {
      if(!data.site?.siteMetadata) {
        return <></>
      }
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title || ''}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description || '' }
            ]}
          >
          </Helmet>
        </>
      )

    }}
  />
)


const query = graphql`
query MetaData {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`
