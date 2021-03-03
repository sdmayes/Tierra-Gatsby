import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bunny = () => { 
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home/homeBunny.jpg" }) {
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
  
  
  export default Bunny