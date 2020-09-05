import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'

const IMAGES = ['icon', 'top', 'backgorund'] as const
type image = typeof IMAGES[number]
interface StaticImageProps {
  image: image
  className?: any
}
export const StaticImageFluid: React.FC<StaticImageProps> = ({ image, className }) => {
  return <StaticQuery
    query={query}
    render={(data: { [key in image]: { childImageSharp: { fluid: FluidObject } } }) => {
      const img = data[image]?.childImageSharp?.fluid as FluidObject
      if (!img) {
        return <></>
      }
      return <GatsbyImage fluid={img} className={className} />
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
