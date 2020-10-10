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
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            ></link>

            <link
              href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&display=swap"
              rel="stylesheet"
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
