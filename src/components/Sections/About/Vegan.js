import React from "react"
import Image from "../../images/About/VeganImage"

const Ingredients = () => {
  return (
    <section class="section-xl md:my-12 lg:my-36 my-12">
      <div class="grid-2-column place-items-center">
        <div class="w-full row-start-1 lg:col-start-1">
          <Image />
        </div>
        <div class="flex flex-col">
          <span class="text-lg md:text-xl uppercase font-medium text-gray-400">
            We Believe
          </span>
          <h2 class="text-3xl font-bold md:text-4xl uppercase">
            Every Life Matters
          </h2>
          <hr class="hr-thick" />
          <p>
            The skincare industry is notorious for cruel and inhumane animal
            testing. Like you, we believe every life matters. We do not and will
            not ever test our products on animals. Every purchase helps us
            further our goal of reducing unnecessary animal cruelty in the
            skincare industry.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Ingredients
