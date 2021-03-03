import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ProductImages from "../components/Sections/Product/ProductImages"
import ProductInfo from "../components/Sections/Product/ProductInfo"
import { graphql } from "gatsby"
import FootCTA from "../components/Layout/Footer/FootCTA"
import Bundle from "../components/Sections/Product/Bundle"
import BreadCrumb from "../components/Sections/elements/BreadCrumbs"

const ProductPage = props => {
  const product = props.data.shopifyProduct
  const contentfulData = props.data.contentfulProduct
  const featuredImage = contentfulData.featuredImage
  const images = contentfulData.images

  return (
    <Layout>
      <SEO
        description={contentfulData.excerpt.excerpt}
        title={contentfulData.productName}
      />
      <section class="section-xl mb-10 mt-4">
        <BreadCrumb
          current={contentfulData.productName}
          previous={"PRODUCTS"}
          to="/products/"
        />
        <div class="md:grid md:grid-cols-2 flex flex-col md:gap-x-12">
          <ProductImages image={featuredImage} images={images} />
          <ProductInfo
            product={product}
            contentfulData={contentfulData}
          />
        </div>
      </section>
      <section class="my-16">
        <h2 class="text-3xl font-bold mb-4 mt-6 m-auto text-center">
          WORKS GREAT WITH
        </h2>
        <Bundle data={contentfulData} />
      </section>
      <FootCTA />
    </Layout>
  )
}

export default ProductPage

export const query = graphql`
  query($title: String!, $handle: String!) {
    contentfulProduct(productName: { eq: $title }) {
      productName
      subtitle
      description {
        json
      }
      excerpt {
        excerpt
      }
      featuredImage {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      images {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
        id
      }
      featured
      complementaryProducts {
        productName
        shopify
        price
        subtitle
        slug
        excerpt {
          excerpt
        }
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
        keyIngredients {
          keyIngredients
        }
        fullIngredients {
          fullIngredients
        }
        benefits
      }
      fullIngredients {
        fullIngredients
      }
    }

    shopifyProduct(handle: { eq: $handle }) {
      descriptionHtml
      shopifyId
      variants {
        price
        compareAtPrice
        availableForSale
        shopifyId
      }
    }
  }
`
