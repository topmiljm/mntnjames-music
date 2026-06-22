export default function HeroHeader({ onBrowse }) {
  return (
    <div className="hero">
      <img
        src="/images/header-1.jpg"
        alt="Mountain wilderness illustration"
        className="hero-img"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">MNTN James
          <img className="hero-title-img"
            src="/images/mntn-peak2.jpg">
          </img>
        </h1>
        <p className="hero-subtitle">Songwriter/Musician &nbsp;·&nbsp; Los Angeles, CA</p>
        <button className="hero-btn" onClick={onBrowse}>
          Browse Demos
        </button>
      </div>

    </div>
  );
}
