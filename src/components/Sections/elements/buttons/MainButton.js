import React from "react"
import Link from "gatsby-link"

const MainButton = props => {
  const styles = {
    primary: `px-10 py-2 bg-accent text-white font-sans text-lg md:text-xl uppercase border border-accent ${props.class}`,
    secondary: `px-10 py-2 bg-transparent btn-hover font-sans text-lg md:text-xl uppercase border border-accent text-accent ${props.class}`,
    secondaryWhite: `px-10 py-2 bg-transparent btn-hover-white font-sans text-lg md:text-xl uppercase border border-gray-200 text-gray-200 ${props.class}`,
  }

  const getStyle = () => {
    switch (props.btnType) {
      case "primary":
        return styles.primary
      case "secondary":
        return styles.secondary
      case "secondaryWhite":
        return styles.secondaryWhite
      default:
        return styles.secondary
    }
  }

  const getButton = () => {
    if (props.to && !props.external) {
      return (
        <Link to={props.to} class={getStyle()}>
          {props.children}
        </Link>
      )
    } else if (props.to && props.external) {
      return (
        <a href={props.to} class={getStyle()}>
          {props.children}
        </a>
      )
    } else {
      return (
        <button onClick={() => props.onClick} class={getStyle()}>
          {props.children}
        </button>
      )
    }
  }

  return <div class={`flex ${props.className}`}>{getButton()}</div>
}

export default MainButton
