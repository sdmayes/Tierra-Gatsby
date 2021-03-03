import React from "react"
import add from "../../../images/icons/add-24px 1.svg"
import subtract from "../../../images/icons/remove-24px 1.svg"
import styles from "./quantity.module.css"

const QuantitySelector = props => {
  
  const decrementQuantity = e => {
    e.preventDefault()
    props.updateQuantity(props.currentQuantity - 1)
  }

  const incrementQuantity = e => {
    e.preventDefault()
    props.updateQuantity(props.currentQuantity + 1)
  }

  return (
    <div
      class={`flex justify-between items-center border px-2 py-1 h-full border-gray-600 ${styles.inputWrapper}`}
    >
      <button onClick={e => decrementQuantity(e)}>
        <img alt="Minus Symbol" src={subtract} />
      </button>
      <input
        class={`${styles.styledInput} text-center text-gray-600`}
        type="number"
        min="1"
        value={props.currentQuantity}
        onBlur={e => props.updateQuantity(e.target.value)}
      />
      <button onClick={e => incrementQuantity(e)}>
        <img alt="Addition Symbol" src={add} />
      </button>
    </div>
  )
}

export default QuantitySelector
