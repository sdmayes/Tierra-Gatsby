import React, { useState } from "react"
import Img from "gatsby-image"
import Link from "gatsby-link"
import AddToCartButton from "../../Sections/elements/buttons/AddToCartButton"

const Product = props => {
  const data = props.data
  const [hovered, setHovered] = useState(false)

  const setImage = (data, hovered) => {
    if (hovered === false) {
      return <Img fluid={data.featuredImage.fluid} />
    } else return <Img fluid={data.hoverImage.fluid} />
  }

  return (
    <div class={`flex flex-col place-items-center ${props.class}`}>
      <Link
        className="w-3/5 md:w-4/5 m-auto"
        to={`/products/${data.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {setImage(data, hovered)}
      </Link>
      <Link
        className="w-full flex flex-col items-center"
        to={`/products/${data.slug}`}
      >
        <h4 class="text-base font-bold text-center uppercase">
          {data.productName}
        </h4>
        <span class="text-xs text-center uppercase text-accent">
          {data.subtitle}
        </span>
        <div class="flex items-center mt-2">
          <span class="text-sm line-through mr-2">${data.compareAtPrice}</span>
          <span class="text-lg font-medium">${data.price}</span>
        </div>
      </Link>
    </div>
  )
}

export const ProductAlt = props => {
  const data = props.data
  return (
    <div class={`flex flex-col px-4 h-max border border-gray-300 shadow md:border-0 md:shadow-none py-4 items-center ${props.class}`}>
      <Link
        className="flex flex-col items-center text-center mb-2 w-full m-auto"
        to={`/products/${data.slug}`}
      >
        <Img className="w-4/5" fluid={data.featuredImage.fluid} />
        <h4 className="text-xs font-bold md:text-base uppercase text-center">{data.productName}</h4>
      </Link>
      <p class="mx-auto w-full text-center text-xs mb-2 place-self-start">
        {data.excerpt.excerpt}
      </p>
      <div class="flex items-center mb-2 m-auto">
        <span class="text-sm md:text-base font-medium">${data.price}</span>
      </div>
      <AddToCartButton
        class="grid grid-flow-col mx-auto mt-2 sm:auto-cols-max gap-x-4 items-center mt-4 w-max"
        variant={data.shopify}
        quantity={1}
      >
        <span>Add To Cart</span>
      </AddToCartButton>
    </div>
  )
}

export const ProductBorder = props => {
  const data = props.data
  return (
    <div
      class={`grid grid-flow-row auto-rows-max gap-y-2 border border-gray-400 ${props.class}`}
    >
      <Link
        className="flex flex-col items-center w-full m-auto"
        to={`/products/${data.slug}`}
      >
        <Img className="w-4/5" fluid={data.featuredImage.fluid} />
        <h4 className="text-sm text-left uppercase">{data.productName}</h4>
      </Link>
      <p class="mx-auto w-full text-left text-xs place-self-start">
        {data.excerpt.excerpt}
      </p>
      <AddToCartButton
        class="grid grid-flow-col mr-auto mt-6 sm:auto-cols-max gap-x-4 items-center mt-4 w-max"
        variant={data.shopify}
        quantity={1}
      >
        <span>Add To Cart</span>
      </AddToCartButton>
    </div>
  )
}
export default Product
