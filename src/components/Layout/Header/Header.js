import { Link } from "gatsby"
import React, { useState } from "react"
import Logo from "../../images/Logo"
import LogoCart from "../../images/MobileCartWhite"
import MobileNav from "./MobileNav"
import NavMenu from "./NavMenu"
import Discount from "../../Sections/elements/discount"

const Header = props => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  const linkStyles =
    "w-full m-auto text-white hover:text-accent text-center uppercase transition duration-150"

  return (
    <header class="flex flex-col w-full lg:static sticky top-0 z-50">
      <div class="w-full">
        <div class="w-full lg:grid grid-flow-col auto-cols-max hidden justify-between items-center py-4 px-8 bg-gray-900">
          <Logo class="w-32 mr-auto" />

          <nav class="grid grid-cols-4 gap-x-10 items-center">
            <Link
              className={linkStyles}
              activeStyle={{ color: "#ee4266" }}
              to="/"
            >
              HOME
            </Link>
            <Link
              className={linkStyles}
              activeStyle={{ color: "#ee4266" }}
              to="/products/"
            >
              Products
            </Link>
            <Link
              className={linkStyles}
              activeStyle={{ color: "#ee4266" }}
              to="/about/"
            >
              About
            </Link>
            <Link
              className={linkStyles}
              activeStyle={{ color: "#ee4266" }}
              to="/support/"
            >
              Support
            </Link>
          </nav>

          <div class="ml-auto w-32">
            <LogoCart width="26" />
          </div>
        </div>
        <MobileNav
          scrollBgColor={props.scrollBgColor}
          bgColor={props.bgColor}
          scrolledBorder={props.scrolledBorder}
          border={props.border}
          toggleNav={toggleNav}
          mobileBg={props.mobileBg}
          fixed={props.fixed}
          inverted={props.inverted}
          color={props.color}
          textColor={props.textColor}
          scrollTextColor={props.scrollTextColor}
        />
      </div>
      <NavMenu toggleNav={toggleNav} visible={showNav} />
      <Discount />
    </header>
  )
}
export default Header
