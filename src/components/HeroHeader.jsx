const styles = {
  hero: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#b0aaa2',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    display: 'block',
    maxHeight: '900px',
    objectFit: 'cover',
    objectPosition: 'center bottom',
  },
  overlay: {
    background: '#2c1f0e',
    padding: '1.75rem 2rem',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Georgia, serif',
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontWeight: '400',
    color: '#f0e0c4',
    letterSpacing: '0.08em',
  },
  subtitle: {
    fontSize: '11px',
    color: '#9e7d55',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    marginTop: '8px',
    fontFamily: 'Georgia, serif',
  },
  btn: {
    display: 'inline-block',
    marginTop: '1.25rem',
    padding: '9px 28px',
    border: '1px solid #c4a055',
    color: '#c4a055',
    fontSize: '12px',
    borderRadius: '4px',
    cursor: 'pointer',
    letterSpacing: '0.08em',
    fontFamily: 'Georgia, serif',
    background: 'none',
    textTransform: 'uppercase',
    transition: 'background 0.15s',
  },
};

export default function HeroHeader({ onBrowse }) {
  return (
    <div style={styles.hero}>
      <div></div>
      <img
        src="/images/header-1.jpg"
        alt="Mountain wilderness illustration"
        style={styles.img}
      />
      <div style={styles.overlay}>
        <h1 style={styles.title}>MNTN James</h1>
        <p style={styles.subtitle}>Original Works &nbsp;·&nbsp; Stream &amp; Listen</p>
        <button
          style={styles.btn}
          onClick={onBrowse}
          onMouseEnter={e => e.target.style.background = 'rgba(196,160,85,0.12)'}
          onMouseLeave={e => e.target.style.background = 'none'}
        >
          Browse Albums
        </button>
      </div>
    </div>
  );
}
