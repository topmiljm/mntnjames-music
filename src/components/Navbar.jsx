export default function Navbar({ activePage, onNavigate }) {
  return (
    <nav className="navbar">
      <span className="navbar-logo">MNTN James</span>
      <div className="navbar-links">
        {['Home', 'Demos', 'About'].map((page) => (
          <button
            key={page}
            className={`navbar-link${activePage === page ? ' active' : ''}`}
            onClick={() => onNavigate(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
}
