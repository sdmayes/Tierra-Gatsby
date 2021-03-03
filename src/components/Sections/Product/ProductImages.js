import React, { useState } from "react"
import Img from "gatsby-image"

const InactiveImage = props => {
  return (
    <div
      class="w-full h-full"
      key={props.id}
      onClick={() =>
        props.setFeaturedImage({ id: props.id, fluid: props.fluid })
      }
    >
      <Img
        className="w-full h-full cursor-pointer transition-all duration-300 hover:opacity-100 opacity-75"
        fluid={props.fluid}
      />
    </div>
  )
}

const ProductImages = props => {
  const images = props.images

  const [featuredImage, setFeaturedImage] = useState({
    id: images[0].id,
    fluid: images[0].fluid,
  })

  // Populate inactive images
  const createImages = images => {
    return images.map((image, index) => {
      return (
        <InactiveImage
          key={index}
          id={image.id}
          fluid={image.fluid}
          setFeaturedImage={setFeaturedImage}
        />
      )
    })
  }

  return (
    <div class="w-full md:sticky">
      <Img loading="eager" fluid={featuredImage.fluid} />
      <div class="flex w-full">{createImages(images)}</div>
    </div>
  )
}

export default ProductImages
