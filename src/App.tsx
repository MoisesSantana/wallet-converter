import { Routes, Route } from 'react-router-dom'
import { Login } from './pages'

export const App = (): JSX.Element => (
  <main className="App">
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </main>
)
