import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hand = () => { 
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home/Hand.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    
  }
  
  
  export default Hand