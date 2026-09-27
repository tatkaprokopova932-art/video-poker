import { NavLink } from "react-router-dom";

/**
 * Displays the main navigation for the application.
 *
 * @returns The application header with navigation links.
 */
function Header() {
  return (
    <header className="header">
      <h1 className="logo">VIDEO POKER</h1>

      <nav className="nav" aria-label="Main navigation">
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/rules">Rules</NavLink>
      </nav>
    </header>
  );
}

export default Header;