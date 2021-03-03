import React from "react"
import Button from "../../Sections/elements/buttons/MainButton"
import KitImage from "../../images/Home/Kits"

const Kits = () => {
  return (
    <section class="section-xl md:my-12 lg:my-20 my-4">
      <div class="grid-2-column items-center">
        <div class="h-full">
          <KitImage />
        </div>
        <div class="w-full flex flex-col">
          <h2 class="text-3xl font-bold md:text-4xl">Age Reversing Kit</h2>
          <p>
            The best anti-aging products in one simple bundle. Rejuvenate your
            skin with an easy to follow routine and restore your youthful glow.
            The best part? Enjoy huge savings over buying individually.
          </p>
          <h3 class="text-xl text-gray-900 mt-6 mb-2">Benefits</h3>
          <ul class="list-disc ml-6 mb-10">
            <li>Reduce Fine Lines and Wrinkles</li>
            <li>Brightens Skin Tone</li>
            <li>Tightens and Refines Skin</li>
          </ul>
          <Button btnType="secondary" to="/products/">
            View Kit
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Kits
