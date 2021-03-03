import React from "react"
import Button from "../../Sections/elements/buttons/MainButton"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-background-image"

const Hero = props => {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "home/Hero Image-Cropped.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileImage: file(relativePath: { eq: "home/Hero Image_Mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 480px)`,
    },
  ]

  return (
    <Image
      className="flex flex-col"
      loading="eager"
      fadeIn={true}
      fluid={sources}
    >
      <div class="w-full h-screen-3/4 flex flex-col background-darken">
        <div class="flex flex-col m-auto items-center">
          <div class="mb-16">
            <h1 class="text-3xl text-white text-center font-semibold mb-4 uppercase text-shadow lg:text-5xl">
              Skincare Perfected
            </h1>
            <div class="w-full m-auto grid grid-cols-3 place-items-center">
              <span class="font-sans text-base text-white uppercase lg:text-xl">
                Safe
              </span>
              <span class="font-sans text-base text-white uppercase lg:text-xl">
                Natural
              </span>
              <span class="font-sans text-base text-white uppercase lg:text-xl">
                Vegan
              </span>
            </div>
          </div>
          <Button primary={true} to="/products/">Shop</Button>
        </div>
      </div>
    </Image>
  )
}

Hero.propTypes = {}

export default Hero
