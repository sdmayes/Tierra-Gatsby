import React, { useState } from "react"
import styled from "styled-components"

const NavWhite = props => {
  const [colors, setColors] = useState({ black: "#000", white: "#fff" })
  return (
    <button class="w-8" onClick={() => props.toggleNav()}>
      <svg
        fill={props.scrolled ? colors.black : colors.white}
        class="w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="24"
      >
        <rect width="35" height="3" rx="1.5" />
        <rect width="29" height="3" x="6" y="7" rx="1.5" />
        <rect width="22" height="3" x="13" y="14" rx="1.5" />
        <rect width="16" height="3" x="19" y="21" rx="1.5" />
      </svg>
    </button>
  )
}

export default NavWhite
