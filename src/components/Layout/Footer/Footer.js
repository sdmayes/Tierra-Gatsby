import React from "react"
import Logo from "../../images/Logo"
import FooterNav from "./footerNav"
import Social from "../../Sections/elements/Social"

const Footer = () => {
  return (
    <div class="flex flex-col pt-4 items-center bg-gray-900">
      <Logo class="w-32 m-auto" />
      <FooterNav />
      <div class="mb-4 mt-8">
        <Social />
      </div>
    </div>
  )
}

export default Footer
