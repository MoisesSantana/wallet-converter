import { useState } from "react"

export const Login = () => {
  const [passType, setPassType] = useState("password")
  const [emailInput, setEmailInput] = useState("")
  const [passInput, setPassInput] = useState("")


  const handlePassType = () => {
    const expectedType = passType === "password" ? "text" : "password"
    setPassType(expectedType)
  }

  return (
    <form>
      <h1>SING IN</h1>
      <label htmlFor="email">
        email
        <input
          type="text"
          name="email"
          id="email"
          value={emailInput}
          onChange={({ target }) => setEmailInput(target.value)}
        />
      </label>
      <label htmlFor="pass">
        password
        <input
          type={passType}
          name="pass"
          id="pass"
          value={passInput}
          onChange={({ target }) => setPassInput(target.value)}
        />
        <button
          type="button"
          onClick={() => handlePassType()}
        >
          show
        </button>
      </label>
      <button type="submit">Sign In</button>
    </form>
  )
}
