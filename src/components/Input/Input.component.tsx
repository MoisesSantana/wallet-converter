import { useState } from 'react'
import { IInputProps } from '../../@types'
import { Container } from './Input.style'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'

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
    <Container htmlFor={name}>
        {name}
        <input
          type={name === 'Email' ? 'text' : passType}
          name={name}
          id={name}
          value={inputState}
          onChange={({ target }) => setInputState(target.value)}
        />
        {/* {name === 'Password' && (
          <button
            type="button"
            onClick={() => handlePassType()}
          >
            {passType === 'password' ? 'view' : 'hidden'}
          </button>
        )} */}
        {name === 'Password' && (
          <>
            {
              passType === 'password'
                ? (
                <VisibilityRoundedIcon
                  className="view-pass"
                  onClick={() => handlePassType()}
                />
                  )
                : (
                <VisibilityOffRoundedIcon
                  className="view-pass"
                  onClick={() => handlePassType()}
                />
                  )
            }
          </>
        )}
      </Container>
  )
}
