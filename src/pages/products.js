import React from "react"
import Product from "../components/Sections/elements/Product"
import Hero from "../components/Sections/General/heroContained"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import FootCTA from "../components/Layout/Footer/FootCTA"

const ProductsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProduct {
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          hoverImage {
            fluid(maxWidth: 1600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  const populateProducts = () => {
    return data.allContentfulProduct.nodes.map((node, i) => {
      return <Product class="mb-8" key={i} data={node} />
    })
  }
  return (
    <Layout>
      <SEO title={"All Products"} />
      <Hero
        title={`NATURAL SKINCARE PRODUCTS`}
        text="Advanced naturally based formulas with the best ingredients. Great skin without the harmful side effects and dangerous chemicals."
      />
      <section class="section-xl md:my-12 lg:my-20 my-20">
        <div class="mb-4 flex flex-col items-center">
          <h2 class="text-2xl lg:text-3xl font-bold text-center mx-auto ">
            ALL PRODUCTS
          </h2>
          <hr class="hr-thick mx-auto mb-20" />
        </div>
        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row sm:space-x-5">
          {populateProducts()}
        </div>
      </section>
      <FootCTA />
    </Layout>
  )
}

export default ProductsPage
