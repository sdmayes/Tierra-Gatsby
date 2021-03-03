import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Sections/General/Hero"
import Vegan from "../components/Sections/Home/Vegan"
import Products from "../components/Sections/Home/Products"
import Kits from "../components/Sections/Home/Kits"
import About from "../components/Sections/Home/About"
import FootCTA from "../components/Layout/Footer/FootCTA"

const NewHome = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout alternate={false}>
        <Hero />
        <Products />
        <hr class="w-full" />
        <Vegan />
        <hr class="w-full" />
        <Kits />
        <hr class="w-full" />
        <About />
        <FootCTA />
      </Layout>
    </>
  )
}

export default NewHome
