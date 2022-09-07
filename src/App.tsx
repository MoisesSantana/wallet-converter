import { Routes, Route } from 'react-router-dom'
import { Login, Wallet } from './pages'

export const App = (): JSX.Element => (
  <main className="App">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  </main>
)
