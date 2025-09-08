import { NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
  padding: '8px 12px',
  textDecoration: 'none',
  color: isActive ? '#0ea5e9' : '#111827',
  borderBottom: isActive ? '2px solid #0ea5e9' : '2px solid transparent',
})

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 12, borderBottom: '1px solid #e5e7eb', padding: 12 }}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>Sobre</NavLink>
      <NavLink to="/instructions" style={linkStyle}>Sobre</NavLink>
      <NavLink to="/references" style={linkStyle}>Sobre</NavLink>
    </nav>
  )
}
