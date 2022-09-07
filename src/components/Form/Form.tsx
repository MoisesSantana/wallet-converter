import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Input } from '../'
import { signIn } from '../../redux/user.slice'

export const Form = (): JSX.Element => {
  const [emailInput, setEmailInput] = useState('')
  const [passInput, setPassInput] = useState('')
  const [btnDisabled, setBtnDisable] = useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validateEmail = (email: string): boolean => {
    const emailRegex = /\S+@\S+\.\S+/i
    return emailRegex.test(email)
  }

  const validatePass = (pass: string): boolean => pass.length >= 6

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(signIn(emailInput))
    navigate('/wallet')
  }

  useEffect(() => {
    const emailIsValid = validateEmail(emailInput)
    const passIsValid = validatePass(passInput)
    setBtnDisable(!emailIsValid || !passIsValid)
  }, [emailInput, passInput])

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
