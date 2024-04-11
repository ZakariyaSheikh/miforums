import React, { useState, useEffect } from "react"
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/banners/wwod_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/wwod_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/wwod_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/wwod_Hero_320.png"
import TwoPeople from "../assets/images/2-people-jigsaw.svg"
import Network from "../assets/images/wwod_network.png"
import ClockPeople from "../assets/images/clock_people.svg"
import Perfection from "../assets/images/connection_perfection.png"
import Supercharge from "../assets/images/supercharge.png"
import DemandFooter from "../assets/images/ondemand-footer.png"

const OnDemand = () => {
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
          className="ondemand-hero-slider"
          style={{ backgroundImage: `url(${heroBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-rg-auto py-6">
                <h1 className="header-section-heading onDemandHeader ">
                  <span className="blue-underlined">
                    wyred world <br />
                  </span>
                  on demand
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 bg-caption">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-5 text-center mb-3 mb-md-0">
                <div className="col-md-9 text-center mb-3 mb-md-0">
                  <img
                    src={TwoPeople}
                    alt={"banner"}
                    className={"wyred-jigsaw-people"}
                  />
                </div>
              </div>
              <div className="col-md-7 mb-3 mb-md-0">
                <h2
                  className="mb-4"
                  style={{
                    fontSize: "34px",
                    lineHeight: "45px",
                    paddingLeft: "5%",
                  }}
                >
                  schedule virtual meetings and
                  <br />
                  <span className="coral-underlined">
                    make great industry connections
                    <br />
                  </span>{" "}
                  with our digital networking platform
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half" style={{ paddingTop: "8rem" }}>
          <div className="img-bg-1">
            <img alt={" "} src={Network} className="onDemandNetwork" />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "65px", paddingRight: "40px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  an entirely new way <br />
                  to network.
                </h2>
                <p>
                  Access the MICE community like never before and expand to new
                  markets within the travel sector. With more flexibility, more
                  choice and more opportunities at your fingertips, there’s no
                  better way to connect.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half" style={{ paddingTop: "8rem" }}>
          <div className="img-bg-1">
            {" "}
            <img
              alt={" "}
              src={ClockPeople}
              className={"meetingsBanner"}
              style={{ width: "400px" }}
            />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary">
                  you're in control.
                </h2>
                <p style={{ paddingRight: "80px" }}>
                  It’s time to take a step back from loaded schedules. Meet who
                  you want, when you want, from anywhere you like. Grow your
                  network and become part of a trusted community 365 days a
                  year.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half" style={{ paddingTop: "8rem" }}>
          <div className="img-bg-1">
            <img alt={" "} src={Perfection} className="onDemandPerfection" />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "65px", paddingRight: "40px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  connection perfection.
                </h2>
                <p>
                  Discover your personal business recommendations and free up
                  more time for great 1-2-1 meetings with our AI matchmaking
                  technology. In the same way Netflix suggests new content to
                  watch, Wyred World On Demand suggests new relevant people to
                  meet with as you interact with the platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="site-half"
          style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
        >
          <div className="img-bg-1">
            {" "}
            <img
              alt={" "}
              src={Supercharge}
              className={"meetingsBanner"}
              style={{ width: "400px" }}
            />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary">
                  supercharge your business.
                </h2>
                <p style={{ paddingRight: "80px" }}>
                  More people to meet, more ways to connect. You won’t find any
                  cookie-cutters here. With Wyred World On Demand, you’re free
                  to choose your own platform experience. Meet your recommended
                  matches or manually search for new connections. Network with
                  only the people from your industry or expand into new markets
                  within the travel sector. It’s your choice.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ondemand-footer-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-9 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2 style={{ fontSize: "36px" }}>
                  gain free access to{" "}
                  <span className="blue-underlined">wyred world on demand</span>
                </h2>
                <br />

                <p
                  style={{
                    lineHeight: "28px",
                    paddingBottom: "15px",
                  }}
                >
                  When you join us at Wyred World Autumn 2020, you’ll receive
                  access to <br />
                  the Wyred World On Demand platform free of charge* for an
                  entire month.
                </p>
                <p style={{ fontWeight: "bold", paddingBottom: "40px" }}>
                  So, what are you waiting for? Sign up today!
                </p>
                <a href="/signup">
                  <span className=" btn btn-cta-fill">sign up</span>
                </a>
                <p className="small" style={{ marginTop: "5%" }}>
                  <br />
                  *T&Cs apply. Speak to our team for full details.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-5">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={DemandFooter}
                className={"demandFooter"}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnDemand
