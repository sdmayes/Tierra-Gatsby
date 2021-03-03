import React, { useEffect } from "react"
import QuantitySelector from "../Product/QuantitySelector"

const LineItem = props => {
  const item = props.item
  const store = props.store
  const checkout = store.checkout

  const subTotal = quantity =>
    Number.parseFloat(item.variant.price * quantity).toFixed(2)

  const updateLineItems = newQuantity => {
    let lineItemToUpdate = { id: item.id, quantity: newQuantity }
    props.updateLineItems(checkout.id, lineItemToUpdate)
  }

  const handleChange = newQuantity => {
    newQuantity = parseInt(newQuantity)
    if (newQuantity === 0) {
      removeLineItems()
      return
    }
    updateLineItems(newQuantity)
    subTotal(newQuantity)
  }

  const removeLineItems = () => {
    let lineItemId = item.id
    props.removeLineItems(checkout.id, lineItemId)
  }
  useEffect(() => {})
  return (
    <div class="w-full flex flex-col  sm:grid sm:grid-cols-3 items-center">
      <div class="flex items-center w-full">
        <div class="">
          <img style={{ maxWidth: "120px" }} src={item.variant.image.src} />
        </div>
        <div class="flex flex-col">
          <h3 class="text-lg md:text-xl">{item.title}</h3>
          <span class="text-sm font-bold text-gray-700 mt-1">
            ${item.variant.price}
          </span>
          <div class="flex flex-col sm:hidden">
            <div class="flex flex-col mt-2">
              <QuantitySelector
                updateQuantity={handleChange}
                currentQuantity={props.quantity}
              />
              <button class="mr-auto" onClick={() => removeLineItems()}>
                <span class="text-xs underline uppercase mr-auto text-left">
                  Remove
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:flex hidden items-center ml-auto">
        <QuantitySelector
          updateQuantity={handleChange}
          currentQuantity={props.quantity}
        />
        <button class="ml-2 mr-auto" onClick={() => removeLineItems()}>
          <span class="text-xs underline uppercase mr-auto text-left">
            Remove
          </span>
        </button>
      </div>
      <div class="hidden sm:flex ml-auto">
        <div><span class="font-base uppercase">${subTotal(props.quantity)}</span></div>
      </div>
    </div>
  )
}

export default LineItem
