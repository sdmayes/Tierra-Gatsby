import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = props => {
  // Get our Data From Contentful
  let title = props.title
  let text = props.text

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "productFlowers.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div class="max-w-screen-xl m-auto w-full">
      <div class="max-w-screen-xl grid md:grid-cols-2 grid-cols-1 p-2 m-auto">
        <div class="max-w-md flex flex-col justify-center md:row-start-auto row-start-2">
          <h1 class="lg:text-4xl text-3xl mb-4">{title}</h1>
          <p class="lg:text-base ">{text}</p>
        </div>
        <Img
          class="row-start-1"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </div>
    </div>
  )
}

export default Hero
