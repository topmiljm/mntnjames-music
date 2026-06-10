const styles = {
  nav: {
    background: '#2c1f0e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1.5rem',
    height: '52px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: '16px',
    fontFamily: 'Georgia, serif',
    fontWeight: '400',
    color: '#f0e0c4',
    letterSpacing: '0.05em',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    fontSize: '13px',
    color: '#9e7d55',
    cursor: 'pointer',
    letterSpacing: '0.04em',
    fontFamily: 'Georgia, serif',
    background: 'none',
    border: 'none',
    padding: 0,
  },
};

export default function Navbar({ activePage, onNavigate }) {
  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>MNTN James</span>
      <div style={styles.links}>
        {['Home', 'Albums', 'About'].map((page) => (
          <button
            key={page}
            style={{
              ...styles.link,
              color: activePage === page ? '#f0e0c4' : '#9e7d55',
            }}
            onClick={() => onNavigate(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
}
