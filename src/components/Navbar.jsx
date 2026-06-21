import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Demos', to: '/demos' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <div className="navbar-img-container">
          <img
            className="navbar-title-img"
            src="/images/MNTN-James-title-2.png"
          >
          </img>
        </div>
      </NavLink>
      <div className="navbar-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `navbar-link${isActive ? ' active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

