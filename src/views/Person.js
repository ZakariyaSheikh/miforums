import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import TwoPeople from "../assets/images/two-people-talking.svg"
import HeroBanner1920 from "../assets/images/banners/Events_Inperson_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/Events_Inperson_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/Events_Inperson_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/Events_Inperson_Hero_320.png"

const Person = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const heroBannerUrl =
    windowWidth <= 479
      ? HeroBanner320
      : windowWidth <= 768
      ? HeroBanner766
      : windowWidth <= 1024
      ? HeroBanner1024
      : HeroBanner1920

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])
  return (
    <>
      <div className="site-wrap">
        <div
          className="person-hero-slider"
          style={{ backgroundImage: `url(${heroBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="hero-heading">
                  watch this space, <br />
                  our in-person <br />
                  events{" "}
                  <span
                    style={{ color: "#FF5959", textDecoration: "underline" }}
                  >
                    will <br /> be back.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half block no-padding">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto py-5">
                <h2 className="site-section-heading font-secondary">
                  2021 is the new 2020.
                </h2>
                <p>
                  We love bringing you in-person events - it’s what we do - but
                  right now, it’s simply not safe enough to do what we do best.
                  That’s why we’ve decided against holding any physical events
                  until we can do so responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half block no-padding">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto py-1">
                <h3 style={{ lineHeight: "42px" }}>
                  <span
                    style={{ color: "#2E66FF", textDecoration: "underline" }}
                  >
                    But there is a silver lining.
                  </span>{" "}
                  So, we’ll let our CEO
                  <br /> Richard Barnes take it from here…
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block padding-bottom">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto py-5">
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    title="CEO"
                    src="https://www.youtube-nocookie.com/embed/p3UrDGxSYO0?controls=0&amp;start=5"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="person-footer-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 style={{ color: "#fff" }}>
                  want to experience{" "}
                  <span className="yellow-underlined">
                    all the benefits <br /> of an in-person event
                  </span>{" "}
                  without <br /> the need for travel?
                </h2>
                <br />

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                >
                  Join us for a major global gathering of the travel industry in
                  what will be <br />
                  m&i’s biggest and most rewarding virtual event yet!
                </p>
                <a href="/wyred-world">
                  <span className=" btn btn-secondary">view event</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-5">
            <div className="img-bg-1">
              <img src={TwoPeople} alt={" "} className={"twoPeople"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Person
