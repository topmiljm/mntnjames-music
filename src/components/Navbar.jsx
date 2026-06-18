export default function Navbar({ activePage, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="navbar-link-home">
        {['Home'].map((page) => (
          <button
            key={page}
            className={`navbar-link-home${activePage === page ? ' active' : ''}`}
            onClick={() => onNavigate(page)}
          >
            MNTN James
          </button>))}
      </div>
      <div className="navbar-links">
        {['About', 'Demos'].map((page) => (
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
