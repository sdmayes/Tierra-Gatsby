import { Link } from "gatsby"
import React from "react"

function FooterNav() {
  const linkStyles = "text-center mb-6 text-gray-300 hover:text-accent"
  return (
    <div class="flex flex-col md:flex-row mt-6 uppercase font-light">
      <Link class={`${linkStyles} md:mr-6`} to={"/"}>
        Home
      </Link>

      <Link class={`${linkStyles} md:mr-6`} to={"/products/"}>
        Products
      </Link>

      <Link class={`${linkStyles} md:mr-6`} to={"/about/"}>
        About Us
      </Link>

      <Link class={`${linkStyles}`} to={"/support/"}>
        Support
      </Link>
    </div>
  )
}

export default FooterNav
