import React from "react"
import Button from "../elements/buttons/MainButton"

const HeroAlt = () => {
  return (
    <div class="w-full h-screen-3/4 flex flex-col place-items-center bg-black">
      <div
        class="flex flex-col self-center m-auto"
        style={{ marginLeft: "7vw" }}
      >
        <h1 class="text-3xl md:text-5xl uppercase text-white mb-3">
          Perfecting Skincare
        </h1>
        <span class="text-2xl uppercase text-accent font-light mb-12">
          The Perfect Blend For Perfect Skin
        </span>
        <div class="flex flex-col md:flex-row">
          <Button btnType="primary" to="/products/" class="mb-2 md:mr-4">
            Shop Skincare
          </Button>
          <Button btnType="secondaryWhite" class="border-gray-200 text-gray-200" to="/products/">Take Skincare Quiz</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroAlt
