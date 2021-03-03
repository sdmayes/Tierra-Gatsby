import React from "react"
import FaqWrapper from "../elements/Faq"
import FaqItem from "../elements/FaqItem"

const Faq = () => {
  const data = [
    {
      question: "How do I request a refund?",
      answer: "Lorem Ipsum",
    },
    {
      question: "How do I cancel an order?",
      answer: "Lorem Ipsum",
    },
  ]

  const populateFaqs = () => {
    let faqs = data.map(faq => {
      return <FaqItem question={faq.question} answer={faq.answer} />
    })
    return faqs
  }
  return (
    <div>
      <h2 class="mx-auto mb-8 mt-16 text-3xl text-center">FAQ</h2>
      <FaqWrapper>{populateFaqs()}</FaqWrapper>
    </div>
  )
}

export default Faq
