import React, { useState, useEffect } from "react"
import Button from "../../Sections/elements/buttons/MainButton"

// COMPONENT
const ContactForm = props => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  })
  const states = ["default", "sending", "success", "error"]
  const [status, setStatus] = useState(states[0])
  const [text, setText] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus(states[1])
    let res = await fetch("replaceme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    }).catch(err => {
      setStatus(states[3])
      setText(
        "Submission timed out. Try again later or send an email to the address below."
      )
    })

    if (!res.ok) {
      setStatus(states[3])
      setText("Something went wrong. Check the information you submitted.")
      res.text().then(data => console.log(data))
      throw new Error(`HTTP Error ${res.status}`)
    } else {
      setStatus(states[2])
      setText("Success! We will get back with you shortly!")
      setState({
        name: "",
        email: "",
        subject: "",
        body: "",
      })
      console.log(res)
    }
  }
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const buttonText = status => {
    let text
    switch (status) {
      case "success":
        text = "Thanks!"
        break
      case "sending":
        text = "Sending"
        break
      default:
        text = "Submit"
        break
    }
    return text
  }

  const statusTextStyle = status => {
    let style
    switch (status) {
      case "success":
        style = { opacity: "100" }
        break
      case "error":
        style = { opacity: "100" }
        break
      default:
        style = { display: "none" }
        break
    }
    return style
  }

  const resetStatus = () => {
    setTimeout(() => {
      setStatus(states[0])
      setText("")
    }, 7000)
  }

  useEffect(() => {
    if (status !== "default" && status !== "sending") {
      resetStatus()
    }
  }, [status])

  return (
    <form
      class="w-full text-sm md:text-base flex flex-col"
      name="contact"
      method="post"
      onSubmit={e => handleSubmit(e)}
    >
      <div class="flex flex-col mb-2 md:flex-row md:w-full">
        <input type="hidden" name="form-name" value="contact" />
        <input
          class="w-full px-2 mb-2 md:mb-0 md:mr-2 py-2 border border-gray-500 rounded"
          type="text"
          aria-label="Name"
          value={state.name}
          placeholder="Name"
          name="name"
          onChange={e => handleChange(e)}
        />
        <input
          class="w-full px-2 py-2 border border-gray-500 rounded"
          type="email"
          aria-label="Email"
          value={state.email}
          placeholder="Email"
          name="email"
          required
          onChange={e => handleChange(e)}
        />
      </div>
      <input
        class="px-2 py-2 mb-2 border border-gray-500 rounded"
        type="text"
        aria-label="Subject"
        value={state.subject}
        placeholder="Subject"
        name="subject"
        required
        onChange={e => handleChange(e)}
      />
      <textarea
        class="px-2 py-2 border border-gray-500 rounded h-60 resize-y"
        type="text"
        aria-label="Body"
        value={state.body}
        placeholder="Body"
        name="body"
        required
        onChange={e => handleChange(e)}
      />
      <span style={statusTextStyle(status)}>{text}</span>
      <Button btnType="secondary" class="mx-auto mt-1 mb-1 text-xl" type="submit">
        {buttonText(status)}
      </Button>
      <div class="m-auto flex flex-col text-center">
        <span>Or Send an Email To: </span>
        <span>Support@TierraSkincare.com</span>
      </div>
    </form>
  )
}

export default ContactForm
