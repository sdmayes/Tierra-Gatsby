/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import "./src/components/index.css"

import { ShopContextProvider } from "./src/components/Context/ShopContext"

export const wrapRootElement = ({ element }) => (
  <ShopContextProvider>{element}</ShopContextProvider>
)
