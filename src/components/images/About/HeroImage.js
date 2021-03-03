import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-background-image"

const HeroImage = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "about/about-hero-image.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      className={props.class}
      fluid={data.placeholderImage.childImageSharp.fluid}
    >
      {props.children}
    </Img>
  )
}

export default HeroImage
