import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "../elements/Product"

const FeaturedProducts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulProduct(filter: { featured: { eq: true } }, limit: 3) {
          nodes {
            productName
            subtitle
            slug
            price
            compareAtPrice
            excerpt {
              excerpt
            }
            keyIngredients {
              keyIngredients
            }
            benefits
            featuredImage {
              fluid(maxWidth: 1600) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            hoverImage {
              fluid(maxWidth: 1600) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    `
  )

  // Output an array of elements containing our product data
  const Products = data.allContentfulProduct.nodes.map(node => {
    return <Product class="mb-4" data={node} />
  })

  return (
    <>
      <h2 class="text-3xl text-center font-semibold uppercase font-sans mt-6 lg:mt-6 ">
        Top Products
      </h2>
      <hr class="w-12 border-accent mx-auto mt-2" />
      <div class="flex flex-col md:grid md:grid-cols-3 py-6">{Products}</div>
    </>
  )
}

export default FeaturedProducts
