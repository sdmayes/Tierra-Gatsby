import React from "react"

const CheckoutBar = props => {
  let cart
  let cartItems
  let cartPrice
  let cartLink

  if (typeof window !== `undefined`) {
    cart = props.cart
    cartItems = cart.lineItems.length
    cartPrice = cart.totalPrice
    cartLink = cart.webUrl
  }

  return (
    <div
      class="w-full bg-white lg:hidden p-2 sticky top-0 z-40"
      visible={props.visible}
    >
      <a href={cartLink}>
        <div class="flex items-center py-3 w-full bg-accent">
          <span class="m-auto text-xs text-center text-white font-bold">
            Proceed to Checkout ({cartItems} items) {cartPrice}
          </span>
        </div>
      </a>
    </div>
  )
}

export default CheckoutBar
