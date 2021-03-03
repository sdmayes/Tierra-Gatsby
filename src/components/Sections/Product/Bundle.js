import React from "react"
import { ProductAlt } from "../elements/Product"
import Scrollbox from "../elements/Scrollbox"
import styles from "./product.module.css"

const Bundle = props => {
  const Products = props.data.complementaryProducts.map(node => {
    return (
      <ProductAlt
        class={`w-full mr-8 md:m-auto ${styles.maxw300}`}
        data={node}
      />
    )
  })
  return <Scrollbox>{Products}</Scrollbox>
}

export default Bundle
