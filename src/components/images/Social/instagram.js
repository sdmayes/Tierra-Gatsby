import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */


const StyledImage = styled(Img)`
` 

const ImageWrapper = styled.div`
  width: ${props => props.width};
`

const Instagram = (props) => { 
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icons/instagram-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 38) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <ImageWrapper width={props.width}><StyledImage fluid={data.placeholderImage.childImageSharp.fluid} /></ImageWrapper>
  
}


export default Instagram


