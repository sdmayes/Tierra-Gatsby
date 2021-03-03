import React from "react"
import FaqItem from "../elements/FaqItem"

const Faq = () => {
  return (
    <div class="w-full grid grid-flow-row mt-20">
      <FaqItem
        answer="If you weren't satisfied with your products, use the contact form above or send an email to Support@TierraSkincare.com. Include as much information about your order as possible!"
        question="How do I request a refund?"
      />
      <FaqItem
        answer="How long will it take for my package to arrive?"
        question="How long will it take for my package to arrive?"
      />
    </div>
  )
}

export default Faq
