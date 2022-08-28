import { Dispatch, SetStateAction } from 'react'

export interface IInputProps {
  name: string
  inputState: string
  setInputState: Dispatch<SetStateAction<string>>
}
