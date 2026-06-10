import { Link, NavLink } from 'react-router-dom'
import { paths } from '@/routes/paths'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <Link to={paths.home} className="brand">
        Demo App
      </Link>
      <nav>
        <NavLink to={paths.home} end>
          Home
        </NavLink>
        <NavLink to={paths.students}>Students</NavLink>
      </nav>
    </header>
  )
}
