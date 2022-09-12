import { Dispatch, SetStateAction } from 'react'

export interface IInputProps {
  name: string
  inputState: string
  setInputState: Dispatch<SetStateAction<string>>
}

export interface IReduxState {
  user: {
    email: string
  }
}
