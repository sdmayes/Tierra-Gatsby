/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const slug = url => {
  let split = url.split("/")
  let slug = split[split.length - 1]
  return slug
}
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
            title
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.handle}/`,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
          title: node.title,
        },
      })
    })
    /*
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        // Build the URL
        path: `/articles/${node.slug}/`,
        //Pass in the template we want to use for each
        component: path.resolve(`./src/templates/article.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      })
    }) */
  })
}
