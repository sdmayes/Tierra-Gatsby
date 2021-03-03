import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Logo from "../../images/Logo"
import Cart from "../../images/MobileCartWhite.js"
import NavWhite from "../../images/SideNavWhite.js"
import { getScrollPosition } from "../../helper/Position"

const MobileNav = props => {
  const isBrowser = typeof window !== `undefined`
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = newPos => {
    if (newPos > -100 && scrolled) {
      setScrolled(false)
    } else if (newPos < -100 && !scrolled) setScrolled(true)
  }

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("scroll", () => handleScroll(getScrollPosition()))
    }
    return window.removeEventListener("scroll", () =>
      handleScroll(getScrollPosition())
    )
  }, [])

  return (
    <div class="flex flex-col lg:hidden bg-gray-900 border-b-2 border-accent">
      <div
        class="w-full flex justify-between items-center p-4"
        scrolled={scrolled}
        scrollBgColor={props.scrollBgColor}
        bgColor={props.bgColor}
        scrolledBorder={props.scrolledBorder}
        border={props.border}
        fixed={props.fixed}
      >
        <Cart />
        <Logo class="w-28" />
        <NavWhite toggleNav={props.toggleNav} />
      </div>
    </div>
  )
}

MobileNav.propTypes = {
  color: PropTypes.string,
}

MobileNav.defaultProps = {
  fixed: false,
}

export default MobileNav
