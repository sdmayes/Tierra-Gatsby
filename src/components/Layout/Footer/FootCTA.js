import React from "react"

const FootCTA = () => {
  return (
    <section class="section-full bg-accent">
      <div class="max-w-screen-2xl py-4 m-auto grid grid-cols-1 grid-rows-2 gap-y-4 md:gap-x-12 lg:grid-rows-1 lg:grid-cols-2">
        <div class="w-full m-auto flex flex-column" style={{maxWidth: '500px'}}>
          <p class="text-2xl text-white font-base">
            Subscribe to get special deals, offers and notified when we add new
            products.
          </p>
        </div>
        <div class="w-full m-auto flex flex-column" style={{maxWidth: '550px'}}>
          <form class="w-full md:m-auto flex place-items-center">
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="w-full py-2 px-2 border rounded-l-sm border-solid border-gray-400 focus:outline-none text-base"
            />
            <button class="btn-black">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FootCTA
