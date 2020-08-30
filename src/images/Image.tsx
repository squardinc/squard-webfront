import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { StaticImageDataQuery } from 'types/graphql-types'

type imageName = keyof StaticImageDataQuery
interface StaticImageProps {
  image: imageName
}
export const StaticImageFluid: React.FC<StaticImageProps> = ({ image }) => {
  return <StaticQuery
    query={query}
    render={(data: StaticImageDataQuery) => {
      const img = data[image]?.childImageSharp?.fluid as FluidObject
      if (!img) {
        return <></>
      }
      return <GatsbyImage fluid={img} />
    }}
  />
}


const query = graphql`
  query StaticImageData {
    icon: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    top: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
