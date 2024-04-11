import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import People from "../assets/images/AIVector.png"
import HeroBanner1920 from "../assets/images/banners/Smart_meetings_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/Smart_meetings_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/Smart_meetings_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/Smart_meetings_Hero_320.png"
import Step1 from "../assets/images/step1.svg"
import Step2 from "../assets/images/step2.svg"
import Step3 from "../assets/images/step3.svg"
import Step4 from "../assets/images/step4.svg"
import AmazonNetflix from "../assets/images/amazonnetflix.png"
import SmartHow from "../assets/images/smartmeetings_how.png"
import HomeCTA from "../assets/images/home-cta.png"
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';

const Meetings = () => {
  const { isShowing, toggle } = useModal();
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
        <title>smart meetings | m&i</title>
        <meta
          name="description"
          content="m&i events use cutting-edge AI matchmaking technology to create higher quality 1-2-1 meetings. Learn more!"
        />
         <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_Smart_Meetings.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_Smart_Meetings.png"} />
      </Helmet>
      <div className="site-wrap">
        <div
          className="person-hero-slider"
          style={{ backgroundImage: `url(${heroBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="hero-heading mobile" style={{ width: "600px" }}>
                  artificial
                  <br /> intelligence, <br />
                  <span
                    style={{ color: "#e3c7b2", textDecoration: "underline" }}
                  >
                    real connections.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bg-caption fawn">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 text-center mb-3 mb-md-0">
                <img src={People} alt={"banner"} className={"meeting-people"} />
              </div>
              <div className="col-md-6 mb-3 mb-md-0">
                <h2
                  className=" mb-4"
                  style={{ fontSize: "1.8rem", lineHeight: "45px" }}
                >
                  AI technology is changing how <br /> we meet and connect with{" "}
                  <br /> others.{" "}
                  <span
                    style={{ color: "#2E66FF", textDecoration: "underline" }}
                  >
                    {" "}
                    There's never been a <br /> better way to find new business.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half">
          <div className="img-bg-1">
            <img alt={" "} src={SmartHow} className={"network"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "100px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  how does our <br />
                  smart matchmaking <br />
                  technology work?
                </h2>
                <p>
                  Networking is an art, matchmaking is a science. Our
                  cutting-edge AI matchmaking technology analyses your business
                  profile and matches you with the best people for your business
                  needs. You'll then receive personalised meeting
                  recommendations and the opportunity to select who you want to
                  meet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half" style={{ paddingBottom: "5rem" }}>
          <div className="img-bg-1">
            <img alt={" "} src={AmazonNetflix} className={"discover"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary">
                  take the guesswork <br />
                  out of meetings.
                </h2>
                <p style={{ paddingRight: "100px" }}>
                  Just like Netflix and Amazon, our technology uses machine
                  learning and advanced algorithms to make intelligent initial
                  recommendations that get smarter over time — the more you use
                  it, the more accurate your recommendations will be, resulting
                  in more efficient meetings. Simple!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="steps-section">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 className="site-section-heading font-secondary">
                  <span
                    style={{ color: "#FF5959", textDecoration: "underline" }}
                  >
                    better 1-2-1 meetings
                  </span>{" "}
                  in 4 easy steps.
                </h2>
                <div className="steps">
                  <ul>
                    <li>
                      <img alt={" "} src={Step1} />
                      <div className="steps-caption">
                        <h3>tell us about you</h3>
                        <p>
                          Complete your online profile within our networking
                          platform.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img alt={" "} src={Step2} />
                      <div className="steps-caption">
                        <h3>get matches</h3>
                        <p>
                          Discover new business through your recommendations.
                        </p>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <img alt={" "} src={Step3} />
                      <div className="steps-caption">
                        <h3>be choosey</h3>
                        <p>Select who you want to meet.</p>
                      </div>
                    </li>
                    <li>
                      <img alt={" "} src={Step4} />
                      <div className="steps-caption">
                        <h3>put your specs on</h3>
                        <p>Review your meetings schedule in advance.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-footer-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 class="yellow-underlined">
                  stay in the know{" "}
                </h2>
                <br />

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                >
                  Sign up to our mailing list and be the first to hear<br />
                { " "} about our latest event updates.
                </p>

                <span className=" btn btn-secondary white" style={{width:'200px'}} onClick={toggle}>
                   add me to your list
                  </span>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-3">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={HomeCTA}
                className={"homeCTA desktop"}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default Meetings
