import React from "react"

const Scrollbox = props => {
  return (
    <div class="lg:max-w-screen-2xl m-auto">
      <div class="w-full mb-16 md:overflow-x-none overflow-x-scroll no-scrollbar">
        <div class="ml-4 flex pb-4 md:px-0 lg:w-full">{props.children}</div>
      </div>
    </div>
  )
}

export default Scrollbox
