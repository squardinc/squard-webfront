import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { StaticImageDataQuery } from 'types/graphql-types'

type imageName = keyof StaticImageDataQuery
interface StaticImageProps {
  image: imageName
  style?: Object
}
export const StaticImageFluid: React.FC<StaticImageProps> = ({ image, style }) => {
  return <StaticQuery
    query={query}
    render={(data: StaticImageDataQuery) => {
      const img = data[image]?.childImageSharp?.fluid as FluidObject
      if (!img) {
        return <></>
      }
      return <GatsbyImage fluid={img} style={style} />
    }}
  />
}

const query = graphql`
  query StaticImageData {
    icon: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    top: file(relativePath: { eq: "top.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    background: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
