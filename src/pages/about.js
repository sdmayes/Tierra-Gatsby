import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import FootCTA from "../components/Layout/Footer/FootCTA"
import AboutHero from "../components/Sections/About/AboutHero"
import Ingredients from "../components/Sections/About/Ingredients"
import Vegan from "../components/Sections/About/Vegan"
import City from "../components/Sections/About/City"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <AboutHero />
      <Ingredients />
      <hr class="w-full" />
      <Vegan />
      <hr class="w-full" />
      <City />
      <FootCTA />
    </Layout>
  )
}

export default AboutPage
