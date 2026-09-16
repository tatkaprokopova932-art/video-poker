import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>Video Poker</h1>
      <nav>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/rules">Rules</NavLink>


      </nav>
    </header>
  )
}
export default Header