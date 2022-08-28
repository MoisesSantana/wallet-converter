import { useState } from 'react'
import { IInputProps } from '../@types'

export const Input = ({
  name,
  inputState,
  setInputState
}: IInputProps): JSX.Element => {
  const [passType, setPassType] = useState('password')

  const handlePassType = (): void => {
    const expectedType = passType === 'password' ? 'text' : 'password'
    setPassType(expectedType)
  }

  return (
    <label htmlFor={name}>
        {name}
        <input
          type={name === 'Email' ? 'text' : passType}
          name={name}
          id={name}
          value={inputState}
          onChange={({ target }) => setInputState(target.value)}
        />
        {name === 'Password' && (
          <button
            type="button"
            onClick={() => handlePassType()}
          >
            {passType === 'password' ? 'view' : 'hidden'}
          </button>
        )}
      </label>
  )
}
