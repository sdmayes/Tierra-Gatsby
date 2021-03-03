import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "../css/headerMain.module.css"

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

const MobileAccount = () => { 
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "baseline_account_circle_white_36dp.png" }) {
        childImageSharp {
          fluid(maxWidth: 36) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img className={headerStyles.logoCart} fluid={data.placeholderImage.childImageSharp.fluid} />
  
}


export default MobileAccount