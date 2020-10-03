import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MetaDataQuery } from 'types/graphql-types'

export const MetaData: React.FC = () => (
  <StaticQuery
    query={query}
    render={(data: MetaDataQuery) => {
      if (!data.site?.siteMetadata) {
        return <></>
      }
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title || ''}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description || '',
              },
            ]}
          >
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700,900" rel="stylesheet preload" />
            <link
              id="Montserrat"
              rel="stylesheet"
              href="https://use.typekit.net/pey6zyl.css"
            />
            <link
              id="ATF Livermore Script"
              rel="stylesheet"
              href="https://use.typekit.net/ajn0goi.css"
            />
            <link
              id="Raleway"
              rel="stylesheet"
              href="https://use.typekit.net/bff0wql.css"
            />
            <link
              id="Raleway v2.0"
              rel="stylesheet"
              href="https://use.typekit.net/bwj6ctc.css"
            />
            <link
              id="Lato"
              rel="stylesheet"
              href="https://use.typekit.net/nlu4xtp.css"
            />
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
