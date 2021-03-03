import React from "react"
import Image from "../../images/About/CityImage"

const City = () => {
  return (
    <section class="section-xl md:my-12 lg:my-36 my-12">
      <div class="grid-2-column place-items-center">
        <div class="flex flex-col">
          <span class="text-lg md:text-xl uppercase font-medium text-gray-400">
            Proudly
          </span>
          <h2 class="text-3xl font-bold md:text-4xl uppercase">
            Made In The USA
          </h2>
          <hr class="hr-thick" />
          <p>
            Tierra Skincare is proudly owned and operated from Knoxville, TN and
            all of our products are made in the USA! Buy with confidence and
            help support a small business!
          </p>
        </div>
        <div class="w-full row-start-1 lg:col-start-2">
          <Image />
        </div>
      </div>
    </section>
  )
}

export default City
