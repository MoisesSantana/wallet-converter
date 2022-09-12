import axios from 'axios'
import { baseURL } from '../utils/constants'

export const api = axios.create({ baseURL })
