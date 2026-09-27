import './App.css'
import Header from './components/Header'
import GamePage from './pages/GamePage'
import PlayersPage from './pages/PlayersPage'
import RulesPage from './pages/RulesPage'
import { Routes, Route } from 'react-router-dom'

/**
 * Displays the main application layout and defines the application routes.
 *
 * @returns The application UI with navigation and page routes.
 */
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </>
  )
}

export default App
