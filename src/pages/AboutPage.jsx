import { useState, useEffect } from "react";

export default function AboutPage() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(1);

  const slides = [
    {
      src: "/images/about-img-1.jpg",
    },
    {
      src: "/images/about-img-2.jpg",
    },
    {
      src: "/images/about-img-3.jpg",
    },
    {
      src: "/images/about-img-4.jpg",
    },
    {
      src: "/images/about-img-5.jpg",
    },
  ]

  // const first = () => {
  //   setStart(0);
  //   setEnd(1);
  // };
  // const second = () => {
  //   setStart(1);
  //   setEnd(2);
  // };
  // const third = () => {
  //   setStart(2);
  //   setEnd(3);
  // };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStart((start) => start + 1);
      setEnd((end) => end + 1);
    }, 3000);

    if (end === slides.length + 1) {
      setStart(0);
      setEnd(1);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [start, end]);

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
          Original music. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div class="about-page-img-container">
          {slides.slice(start, end).map((slide, i) => (
            <div key={i}>
              <img className="about-page-img-2" src={slide.src} alt={slide.alt} />
              {/* <p>{slide.caption}</p>
              <button onClick={first}>first</button>
              <button onClick={second}>second</button>
              <button onClick={third}>third</button> */}
            </div>
          ))}
          {/* <p>{start} start</p>
          <p>{end} end</p> */}
        </div>

        <div className="section-label">
          <div className="section-divider" />
          <img className="page-bottom-img" src="/images/mntn-peak-removebg.png"></img>
          <div className="section-divider" />
        </div>
      </div>
    </>
  );
}
