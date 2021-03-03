import React from "react"
import FeaturedProducts from "../Product/FeaturedProducts"
import Button from "../elements/buttons/MainButton"
import ProductsImage from "../../images/Home/Products"

const Products = () => {
  return (
    <section class="section-xl md:my-12 lg:my-20 my-4">
      <div class="grid-2-column">
        <div class="flex flex-col row-start-2 lg:row-start-1 lg:col-start-1 justify-center">
          <h2 class="text-3xl font-bold md:text-4xl">
            Safe on Skin Without The Compromise
          </h2>
          <hr class="hr-thick" />
          <p>
            Traditional Products are loaded with artificial chemicals that cause
            serious long-term damage to your skin. Our naturally based products
            cut out harmful chemicals allowing you to get amazing skin without
            compromise.
          </p>
        </div>
        <div class="row-start-1 lg:col-start-2">
          <ProductsImage />
        </div>
      </div>
      <div class="mt-6">
        <FeaturedProducts />
        <Button btnType="secondary" class="mx-auto my-5" to="/products/">
          Shop All
        </Button>
      </div>
    </section>
  )
}

export default Products
