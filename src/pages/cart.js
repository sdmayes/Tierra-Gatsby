import React, { useContext } from "react"
import Layout from "../components/Layout/Layout"
import ShopContext from "../components/Context/ShopContext"
import LineItem from "../components/Sections/elements/LineItem"
import MainButton from "../components/Sections/elements/buttons/MainButton"
import SEO from "../components/seo"

const CartPage = props => {
  const isBrowser = typeof window !== `undefined`
  const store = useContext(ShopContext)
  const items = isBrowser ? store.checkout.lineItems : undefined
  function updateLineItems(checkoutId, lineItem) {
    store.updateLineItem(checkoutId, lineItem)
  }

  function removeLineItems(checkoutId, lineItemId) {
    store.removeLineItem(checkoutId, lineItemId)
  }

  const getBody = () => {
    if (store.checkout && store.checkout.lineItems.length > 0) {
      return (
        <section class="section-xl">
          <h1 class="text-3xl md:text-4xl mb-6 my-4">Your Cart</h1>
          <div class="sm:grid grid-cols-3 mb-2 hidden">
            <span class="text-lg uppercase">Product</span>
            <span class="text-lg uppercase ml-auto text-right">Quantity</span>
            <span class="text-lg uppercase ml-auto text-right">Subtotal</span>
          </div>
          <div class="flex flex-col border-t border-b">
            {items.map((lineItem, index) => {
              return (
                <LineItem
                  key={index}
                  store={store}
                  updateLineItems={updateLineItems}
                  removeLineItems={removeLineItems}
                  item={lineItem}
                  quantity={parseInt(lineItem.quantity, 10)}
                />
              )
            })}
          </div>
          <div class="flex flex-col mt-4">
            <h2 class="ml-auto text-2xl mt-4">
              CART TOTAL: ${isBrowser ? store.checkout.totalPrice : 0}
            </h2>
            <div class="flex justify-between mt-6">
              <MainButton type="Primary" external={true} to={"/products/"}>
                BACK
              </MainButton>
              {isBrowser && (
                <MainButton
                  primary={true}
                  external={true}
                  to={store.checkout.webUrl}
                >
                  Checkout
                </MainButton>
              )}
            </div>
          </div>
        </section>
      )
    } else
      return (
        <section class="section-xl">
          <div class="mx-auto mt-16 flex flex-col items-center">
            <h1 class="text-3xl md:text-4xl mb-10">NOTHING HERE...</h1>
            <MainButton type="Secondary" external={false} to={"/products/"}>
              SHOP SKINCARE
            </MainButton>
          </div>
        </section>
      )
  }
  return (
    <>
      <SEO title="Cart" description="View Your Cart and Buy Now or Checkout" />
      <Layout
        fixed={true}
        inverted={false}
        border={"2px solid #ee4266"}
        bg={"#fff"}
        bgColor={"#181818"}
        textColor={"#000"}
        scrollTextColor={"#000"}
        scrollBgColor={"#fff"}
      >
        {getBody()}
      </Layout>
    </>
  )
}

export default CartPage
