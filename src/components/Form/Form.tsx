import { useEffect, useState } from 'react'
import { Input } from '../'

export const Form = (): JSX.Element => {
  const [emailInput, setEmailInput] = useState('')
  const [passInput, setPassInput] = useState('')
  const [btnDisabled, setBtnDisable] = useState(true)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /\S+@\S+\.\S+/i
    return emailRegex.test(email)
  }

  const validatePass = (pass: string): boolean => pass.length >= 6

  useEffect(() => {
    const emailIsValid = validateEmail(emailInput)
    const passIsValid = validatePass(passInput)
    setBtnDisable(!emailIsValid || !passIsValid)
  }, [emailInput, passInput])

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
      <button
        type="submit"
        disabled={btnDisabled}
      >
        Sign In
      </button>
    </form>
  )
}
