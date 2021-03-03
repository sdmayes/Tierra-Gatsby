import React from "react"
import Image from "../../images/About/IngredientsImage"
import Button from "../../Sections/elements/buttons/MainButton"

const Ingredients = () => {
  return (
    <section class="section-xl md:my-12 lg:my-36 my-12">
      <div class="grid-2-column place-items-center">
        <div class="flex flex-col">
          <span class="text-lg md:text-xl uppercase font-medium text-gray-400">
            It all starts with
          </span>
          <h2 class="text-3xl font-bold md:text-4xl uppercase">
            The Perfect Ingredients
          </h2>
          <hr class="hr-thick" />
          <p class="mb-10">
            Your skin deserves the best it can get. We remove harmful chemicals
            and rely on the best natural ingredients to deliver the results you
            deserve.
          </p>
          <Button btnType="secondary" to="/products/">
            Shop Skincare
          </Button>
        </div>
        <div class="w-full row-start-1 lg:col-start-2">
          <Image />
        </div>
      </div>
    </section>
  )
}

export default Ingredients
