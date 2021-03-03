import React from "react"
import Layout from "../components/Layout/Layout"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

const featured = []
// Todo
const Articles = props => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost {
        edges {
          node {
            featured
            title
            slug
            description {
              description
            }
            featuredImage {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Latest Articles" />
      <Layout></Layout>
    </>
  )
}

export default Articles
