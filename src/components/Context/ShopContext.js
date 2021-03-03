import React, { useState, createContext, useEffect } from "react"
import Client from "shopify-buy"

//  Context for our store
// Handles Shopify cart functionality
// References
// https://github.com/Shopify/js-buy-sdk/blob/master/tutorials/MIGRATION_GUIDE.md
// https://shopify.github.io/js-buy-sdk/#creating-a-checkout
// https://github.com/AlexanderProd/gatsby-shopify-starter/blob/master/src/provider/ContextProvider.js

// Initialize our client
const client = Client.buildClient({
  domain: "test-spotremover.myshopify.com",
  storefrontAccessToken: "abe5685056da68bc16996e748d0d5264",
})

const ShopContextProvider = ({ children }) => {
  const state = {
    client: client,
    adding: false,
    checkout: { lineItems: [] },
    checkoutId: undefined,
    products: [],
    shop: {},
  }
  const [store, updateStore] = useState(state)
  useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutId = localStorage.getItem("shopify_checkout_id")

      const createCheckout = () => {
        client.checkout
          .create()
          .then(checkout => {
            updateStore(prevState => {
              return {
                ...prevState,
                checkoutId: checkout.id,
                checkout: checkout,
              }
            })
            setCheckout(checkout)
          })
          .catch(e => console.log(e))
      }

      const setCheckout = checkout => {
        localStorage.setItem("shopify_checkout_id", checkout.id)
        updateStore(prevState => {
          return { ...prevState, checkout }
        })
      }

      const fetchCheckout = checkoutId => {
        store.client.checkout
          .fetch(checkoutId)
          .then(checkout => {
            updateStore(prevState => {
              return {
                ...prevState,
                checkout: checkout,
                checkoutId: checkout.id,
              }
            })
          })
          .catch(e => {
            console.log(e)
            createCheckout()
          })
      }
      if (!localStorage.getItem("shopify_checkout_id")) {
        createCheckout()
      } else {
        fetchCheckout(existingCheckoutId)
      }
    }
    initializeCheckout()
  }, [store.client.checkout])

  return (
    <ShopContext.Provider
      value={{
        ...store,
        addVariantToCart: (variantId, quantity) => {
          quantity = parseInt(quantity, 10)
          if (variantId === "" || !quantity) {
            console.error("Variant ID and Quantity are required")
            return
          }
          const lineItemsToAdd = [{ variantId: variantId, quantity: quantity }]
          return store.client.checkout
            .addLineItems(store.checkout.id, lineItemsToAdd)
            .then(checkout => {
              updateStore(prevState => {
                return { ...prevState, checkout: checkout }
              })
            })
        },
        updateLineItem: (checkoutId, lineItemToUpdate) => {
          store.client.checkout
            .updateLineItems(checkoutId, lineItemToUpdate)
            .then(checkout => {
              updateStore(prevState => {
                return { ...prevState, checkout: checkout }
              })
            })
        },
        removeLineItem: (checkoutId, lineItemId) => {
          store.client.checkout
            .removeLineItems(checkoutId, lineItemId)
            .then(checkout => {
              updateStore(prevState => {
                return { ...prevState, checkout: checkout }
              })
            })
        },
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
export const ShopContext = createContext(ShopContextProvider)
export default ShopContext
export { ShopContextProvider }
