import React from "react"
import HeroBG from "../../images/About/HeroImage"

const AboutHero = () => {
  return (
    <HeroBG class="w-full h-screen-3/4 flex flex-col place-items-center">
      <div
        class="flex flex-col self-center m-auto"
        style={{ marginLeft: "7vw" }}
      >
        <span class="text-2xl uppercase text-accent font-light mb-2">
          Our Mission
        </span>
        <h1 class="text-3xl md:text-4xl uppercase text-white mb-4">
          Perfecting Skincare
        </h1>
        <hr class="border-t-4 border-accent w-14" />
      </div>
    </HeroBG>
  )
}
export default AboutHero
