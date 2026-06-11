export default function HeroHeader({ onBrowse }) {
  return (
    <div className="hero">
      <img
        src="/images/header-1.jpg"
        alt="Mountain wilderness illustration"
        className="hero-img"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">MNTN James</h1>
        <p className="hero-subtitle">Original Works &nbsp;·&nbsp; Stream &amp; Listen</p>
        <button className="hero-btn" onClick={onBrowse}>
          Browse Albums
        </button>
      </div>
    </div>
  );
}
