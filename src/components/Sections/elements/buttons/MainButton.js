import React from "react"
import Link from "gatsby-link"

const MainButton = props => {
  const styles = {
    primary: `px-10 py-2 bg-accent text-white font-sans text-lg md:text-xl uppercase border border-solid border-accent ${props.class}`,
    secondary: `px-10 py-2 bg-transparent btn-hover text-accent font-sans text-lg md:text-xl uppercase border border-solid border-accent ${props.class}`,
  }
  const getButton = () => {
    if (props.to && !props.external) {
      return (
        <Link
          to={props.to}
          class={props.primary ? styles.primary : styles.secondary}
        >
          {props.children}
        </Link>
      )
    } else if (props.to && props.external) {
      return (
        <a
          href={props.to}
          class={props.primary ? styles.primary : styles.secondary}
        >
          {props.children}
        </a>
      )
    } else {
      return (
        <button
          onClick={() => props.onClick}
          class={props.primary ? styles.primary : styles.secondary}
        >
          {props.children}
        </button>
      )
    }
  }

  return <div class={`flex ${props.className}`}>{getButton()}</div>
}

export default MainButton
