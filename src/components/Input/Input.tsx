import { useState } from "react"
import { InputProps } from "../@types"

export const Input = ({
  name,
  inputState,
  setInputState,
}: InputProps) => {
  const [passType, setPassType] = useState("password")

  const handlePassType = () => {
    const expectedType = passType === "password" ? "text" : "password"
    setPassType(expectedType)
  }

  return (
    <label htmlFor={name}>
        {name}
        <input
          type={name === "Email" ? "text" : passType}
          name={name}
          id={name}
          value={inputState}
          onChange={({ target }) => setInputState(target.value)}
        />
        {name === "Password" && (
          <button
            type="button"
            onClick={() => handlePassType()}
          >
            show
          </button>
        )}
      </label>
  )
}