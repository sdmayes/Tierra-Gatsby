import React from "react"
import Bunny from "../../images/Home/Bunny"
import Button from "../../Sections/elements/buttons/MainButton"

const Vegan = () => {
  return (
    <section class="section-xl md:my-12 lg:my-20 my-4">
      <div class="grid-2-column place-items-center">
        <div class="row-start-2 lg:row-start-1 lg:col-start-1">
          <h2 class="text-3xl font-bold md:text-4xl">100% Cruelty Free and Vegan</h2>
          <hr class="hr-thick" />
          <p>
            Animal testing in the skincare industry subjects animals to brutal
            experiments that maim, disable and often kill the innocent animals.
            We believe every life matters our mission is to make it easy to get
            the results you expect without supporting this abhorrent practice.
          </p>
          <br />
          <p class="mb-10">
            Every purchase helps put an end to animal cruelty in the skincare
            industry.
          </p>
          <Button to="/products/">
            Learn More
          </Button>
        </div>
        <div class="w-full row-start-1 lg:col-start-2">
          <Bunny />
        </div>
      </div>
    </section>
  )
}

export default Vegan
