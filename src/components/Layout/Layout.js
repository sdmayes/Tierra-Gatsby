import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = props => {
  return (
    <div style={{ background: "#f9f9fa" }}>
      <div
        class="flex flex-col m-auto min-h-screen w-full shadow max:border-l max:border-r max:border-gray-300"
        style={{ background: "#fff", maxWidth: "2000px" }}
      >
        <Header />
        <main class="min-h-screen leading-loose">{props.children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
