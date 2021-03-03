import { useStaticQuery, graphql } from "gatsby"

export const AboutImages = () => {
  const { data } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "about" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)
  return data
}
