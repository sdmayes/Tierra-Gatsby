import React, { useState } from "react"
import PropTypes from "prop-types"

const FaqItem = ({ question, answer }) => {
  // Boolean
  const [expanded, setExpanded] = useState(false)

  const styles = expanded => {
    // Holds all of our different styles that we need to change when expanded
    let styles = {
      symbol: "",
      faqTop: "",
      faqAnswer: "",
    }

    if (expanded === true) {
      return (styles = {
        symbol: "-",
        faqTop: "bg-accent",
        faqAnswer: "pb-3 pt-3 max-h-80",
      })
    } else {
      return (styles = {
        symbol: "+",
        faqTop: "bg-gray-900",
        faqAnswer: "py-0 max-h-0 invisible",
      })
    }
  }

  return (
    <div id="faq-wrapper" class={`w-full my-2 flex flex-col justify-between`}>
      <div
        onClick={() => setExpanded(!expanded)}
        id="Question Container"
        class={`flex transition-all duration-500 justify-between px-2 md:px-4 py-5 text-lg text-white uppercase font-medium ${
          styles(expanded).faqTop
        }`}
      >
        <span id="Question" class="text-sm sm:text-base font-medium my-auto">
          {question}
        </span>
        <span id="Symbol">{styles(expanded).symbol}</span>
      </div>

      <div
        id="Answer Container"
        class={`px-4 text-sm transition-height duration-150 bg-gray-100 border border-gray-300 overflow-hidden ${
          styles(expanded).faqAnswer
        }`}
      >
        <p id="Answer Text" class="leading-loose">
          {answer}
        </p>
      </div>
    </div>
  )
}

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

export default FaqItem
