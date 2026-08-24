export default function HeroHeader({ onBrowse }) {
  return (
    <div className="hero">
      <img
        src="/images/player-img-1.jpg"
        alt="Mountain wilderness illustration"
        className="hero-img"
      />
      <div className="hero-overlay">
        <div className="hero-head">
          <h1 className="hero-title">MNTN James
            {/* <img className="hero-title-img-2"
            src="/images/MNTN-James-title-3.png">
          </img> */}
          </h1>
          <img className="hero-title-img"
            src="/images/mntn-peak2.jpg">
          </img>
        </div>
        <p className="hero-subtitle">Songwriter/Musician &nbsp;·&nbsp; Los Angeles, CA</p>
        <button className="hero-btn" title="View All Album Demos" onClick={onBrowse}>
          Browse Demos
        </button>
      </div>

    </div>
  );
}
