import { Dispatch, SetStateAction } from "react"

export type InputProps = {
  name: string,
  inputState: string,
  setInputState: Dispatch<SetStateAction<string>>
}