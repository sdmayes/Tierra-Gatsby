import React from "react"
import ShopContext from "../../../Context/ShopContext"

function AddToCartButton(props) {
  const styles = {
    primary: `px-10 py-2 bg-accent text-white font-sans text-lg md:text-xl uppercase border border-solid border-accent ${props.class}`,
    secondary: `px-10 py-2 bg-transparent btn-hover text-accent font-sans text-lg md:text-xl uppercase border border-solid border-accent ${props.class}`,
  }
  return (
    <ShopContext.Consumer>
      {value => (
        <button
          class={props.primary ? styles.primary : styles.secondary}
          onClick={() => {
            value.addVariantToCart(props.variant, props.quantity)
          }}
        >
          {props.children}
        </button>
      )}
    </ShopContext.Consumer>
  )
}

AddToCartButton.defaultProps = {
  class: "bg-transparent",
}

export default AddToCartButton
