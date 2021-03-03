import React, { useContext, useState, useEffect } from "react"
import Link from "gatsby-link"
import ShopContext from "../Context/ShopContext"
import styles from "./mobileNavWhite.module.css"

const MobileCartWhite = props => {
  const store = useContext(ShopContext)
  const [items, setItems] = useState(0)

  useEffect(() => {
    if (store.checkout && store.checkout.lineItems != items) {
      setItems(store.checkout.lineItems.length)
    }
  })

  console.log(items)
  return (
    <div class={`w-10 ${props.class}`}>
      <Link to="/cart/">
        <svg
          style={{ fill: "#fff" }}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
        >
          <path
            fill="#fff"
            d="M32.4 31.119L30.34 7.907A.992.992 0 0029.352 7h-4.24A7.118 7.118 0 0018 0a7.118 7.118 0 00-7.111 7.001H6.648a.987.987 0 00-.987.906l-2.06 23.212c0 .03-.008.059-.008.088C3.593 33.85 6.015 36 8.996 36h18.008c2.981 0 5.403-2.15 5.403-4.793 0-.03 0-.059-.007-.088zM18 1.988A5.13 5.13 0 0123.124 7H12.876A5.13 5.13 0 0118 1.988zm9.004 32.024H8.996c-1.87 0-3.386-1.236-3.416-2.76L7.554 8.995h3.327v3.019a.99.99 0 00.994.994.99.99 0 00.994-.994V8.996h10.255v3.019a.99.99 0 00.994.994.99.99 0 00.994-.994V8.996h3.327l1.98 22.255c-.029 1.524-1.553 2.761-3.415 2.761z"
          />
        </svg>
        <div
          class={`${styles.circle} ${items > 0 ? "visible" : "invisible"}`}
          items={items}
        >
          {items}
        </div>
      </Link>
    </div>
  )
}

export default MobileCartWhite
