import React from "react"
import Button from "../../Sections/elements/buttons/MainButton"
import Hand from "../../images/Home/Hand"

const About = () => {
  return (
    <section class="section-xl md:my-12 lg:my-20 my-4">
      <div class="grid-2-column place-items-center">
        <div class="flex flex-col">
          <h2 class="text-3xl font-bold md:text-4xl">About Us</h2>
          <hr class="hr-thick" />
          <p class="mb-10">
            Traditional Products are loaded with artificial chemicals that cause
            serious long-term damage to your skin. Our naturally based products
            cut out harmful chemicals allowing you to get amazing skin without
            compromise.
          </p>
          <Button btnType="secondary" to="/about/">
            Read More
          </Button>
        </div>
        <div class="w-full row-start-1 lg:col-start-2">
          <Hand />
        </div>
      </div>
    </section>
  )
}

export default About
