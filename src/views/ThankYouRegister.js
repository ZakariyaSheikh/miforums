import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/banners/reg_thank_you_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/reg_thank_you_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/reg_thank_you_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/reg_thank_you_Hero_320.png"

const ThankYouRegister = () => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>thank you | m&i</title>

      </Helmet>
      <div className="site-wrap">
        <div
          className="thankyou-hero-slider"
          style={{ backgroundImage: `url(${heroBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="contact-hero">
                  <span class="blue-underlined">success!</span>
                  <br />
                </h2>
                <p>
                  That was one small step for you, one giant leap for <br />{" "}
                  your business prospects.
                </p>
                <br />
                <p>We'll be in touch very soon to discuss the next steps.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="thankyou-block grey">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-10 ml-lg-auto py-5 ">
                <h2 className="site-section-heading font-secondary ">
                  so, now what?
                </h2>
                <p style={{ paddingRight: "100px" }}>
                  We never like to leave our guests twiddling their thumbs, so
                  here are a few ideas to keep you entertained until your next
                  coffee break...
                </p>
                <br />
                <h3 className="youTubeLink">
                  check out our{" "}
                  <a href="https://www.youtube.com/user/meetingforums">
                    <span className="coral">
                      YouTube channel.{" "}
                      <i className="fa fa-youtube-play coral"></i>
                    </span>
                  </a>
                </h3>
                <br />
                <h3 className="instagramLink">
                  head over to our{" "}
                  <a href="https://www.instagram.com/miforums/">
                    <span className="blue">
                      Instagram page. <i className="fa fa-instagram blue"></i>
                    </span>
                  </a>
                </h3>
                <br />
                <h3 className="youTubeLink">
                  find out more{" "}
                  <a href="/about">
                    <span className="blue"></span>
                    <span className="coral">about us.</span>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThankYouRegister
