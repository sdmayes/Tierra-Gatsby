import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ContactForm from "../components/Sections/elements/ContactForm"
import Faq from "../components/Sections/elements/Faq"

const Support = () => (
  <Layout>
    <SEO
      title="Support"
      description="Get help with your order! Contact our support for help with any issues, questions or to initiate a return."
    />
      <section
        class="section-xl flex flex-col md:my-12 lg:my-20 my-4"
        style={{ maxWidth: "800px" }}
      >
        <h3 class="m-auto text-3xl md:text-4xl text-center mb-4">Need Help?</h3>
        <p class="m-auto text-sm md:text-base text-center mb-10 md:mb-12">
          Something not quite right with your order or just have a question? Use
          the resources below and don’t be afraid to contact us! We put our
          customers first in everything we do! When you’re happy, so are we!
        </p>
        <ContactForm />
        <Faq />
      </section>
  </Layout>
)

export default Support
