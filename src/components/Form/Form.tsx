import { useState } from "react"
import { Input } from "../"

export const Form = () => {
  const [emailInput, setEmailInput] = useState("")
  const [passInput, setPassInput] = useState("")

  return (
    <form>
      <h1>SING IN</h1>
      <Input
        name="Email"
        inputState={emailInput}
        setInputState={setEmailInput}
      />
      <Input
        name="Password"
        inputState={passInput}
        setInputState={setPassInput}
      />
      <button type="submit">Sign In</button>
    </form>
  )
}