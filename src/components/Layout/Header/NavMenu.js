import React, { Component } from "react"
import styles from "./navMenu.module.css"
import { Link } from "gatsby"
import LogoCart from "../../images/logoCart"
import Twitter from "../../images/Social/twitter.js"
import Facebook from "../../images/Social/facebook.js"
import Instagram from "../../images/Social/instagram.js"

export default class NavMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: this.props.visible,
    }
  }

  render() {
    const footerLink = "ml-auto text-xs"
    const navLink = "uppercase text-lg text-align-right mb-3 ml-auto"
    return (
      <>
        <div
          class={`${
            styles.navMenu
          } flex flex-col fixed w-full h-screen top-0 justify-between pt-4 px-4 bg-white ${
            this.props.visible ? styles.open : ""
          }`}
        >
          <div>
            <div class="w-full flex justify-between items-center pb-1">
              <LogoCart />
              <div class="flex items-center">
                <span class="text-3xl text-accent font-medium uppercase mr-4">
                  MENU
                </span>
                <button
                  class="text-3xl"
                  aria-label="close nav menu"
                  onClick={() => this.props.toggleNav()}
                >
                  X
                </button>
              </div>
            </div>
            <hr />

            <nav class="flex flex-col md:grid auto-flow-rows pt-8">
              <Link class={navLink} activeStyle={{ color: "#ee4266" }} to={"/"}>
                Home
              </Link>
              <Link
                class={navLink}
                activeStyle={{ color: "#ee4266" }}
                to={"/products/"}
              >
                Products
              </Link>
              <Link
                class={navLink}
                activeStyle={{ color: "#ee4266" }}
                to={"/about/"}
              >
                About Us
              </Link>
              <Link
                class={navLink}
                activeStyle={{ color: "#ee4266" }}
                to={"/support/"}
              >
                Support
              </Link>
              <Link
                class={navLink}
                activeStyle={{ color: "#ee4266" }}
                to={"/cart/"}
              >
                Cart
              </Link>
            </nav>
          </div>

          <div
            class={`flex flex-col justify-between pb-4 ${this.props.visible ? 'sticky' : 'relative'} bottom-0 w-full ${styles.maxw}`}
          >
            <hr />
            <div class="flex justify-between w-full pt-2">
              <div class="flex">
                <Twitter class="mr-2" width="30px" />
                <Facebook class="mr-2" width="30px" />
                <Instagram width="30px" />
              </div>

              <div class="grid auto-flow-rows gap-y-2">
                {/*
                  <Link class={footerLink} to={"/"} href="/Support">
                    Privacy Policy
                  </Link>
                  <Link class={footerLink} to={"/"} href="/Support">
                    Return Policy
                  </Link>
                */}
                <Link class={footerLink} to={"/"} href="/Support">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full z-50 h-screen bg-gray-900 bg-opacity-60 fixed top-0 right-0 opacity-0 transition-all duration-300 ${
            this.props.visible ? styles.visible : styles.closed
          }`}
          onClick={() => this.props.toggleNav()}
        />
      </>
    )
  }
}
