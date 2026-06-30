export default function AboutPage() {
  return (
    <>
      <div className="about-page-img-wrapper">
        <img className="about-page-img" src="/images/about-header-2.jpg" alt="" />
      </div>

      <div className="page-content--narrow">
        <div className="section-label">
          About &nbsp;·&nbsp; <strong>MNTN James</strong>
          <div className="section-divider" />
        </div>

        <p className="about-text">
          Original music by James. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* <img className="about-page-img-2" src="/images/about-img.jpg"></img> */}
      </div>
    </>
  );
}
