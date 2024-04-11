import React from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import Banner from "../assets/images/wyred-hero-banner.png"
import WyredConnect from "../assets/images/wyred-connect.png"
import Network from "../assets/images/ww2020_virtual.png"
import Meetings from "../assets/images/ww2020_meeting.png"
import Thrive from "../assets/images/ww2020_thrive.png"
import PreScheduledIcon from "../assets/images/prescheduleicon.svg"
import UnrivalledIcon from "../assets/images/unrivalledicon.svg"
import ExtraIcon from "../assets/images/extraicon.svg"
import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"

const EuropeAutumn = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Europe Autumn 2021, Sibenik | m&i</title>
        <meta
          name="description"
          content="Global suppliers meet UK & European buyers at this Autumn Flagship MICE Forum. Learn more and sign up today."
        />
      </Helmet>
      <div className="site-wrap">
        <div className="wyred-hero-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-6 ml-rg-auto py-6"
                style={{ paddingLeft: "100px", color: "#131A33" }}
              >
                <h1 className="header-section-heading wyredheader">
                  <span
                    style={{ color: "#FF5959", textDecoration: "underline" }}
                  >
                    wyred world <br />
                  </span>
                  autumn 2020
                </h1>
                <br />
                <p style={{ fontSize: "25px" }}>
                  17-19 november
                  <br /> central european time <br />
                  virtual
                </p>
                <br />
              </div>
              <div className="col-lg-6 ml-rg-auto py-5">
                <img
                  src={Banner}
                  alt={"banner"}
                  className="wyred-hero-banner"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 bg-blue-caption">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 text-center mb-3 mb-md-0">
                <div className="col-md-6 text-center mb-3 mb-md-0">
                  <img
                    src={WyredConnect}
                    alt={"banner"}
                    className={"wyred-people"}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3 mb-md-0">
                <h2
                  className="mb-4"
                  style={{
                    fontSize: "34px",
                    lineHeight: "45px",
                    color: "#fff",
                  }}
                >
                  a major gathering of the
                  <br /> travel industry that’s{" "}
                  <span className="yellow-underlined">
                    virtually the <br />
                    same
                  </span>{" "}
                  as an in-person event.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half block" style={{ paddingTop: "8rem" }}>
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto py-5">
                <h2 className="site-section-heading font-secondary">
                  two industries{" "}
                  <span
                    style={{ color: "#FF5959", textDecoration: "underline" }}
                  >
                    are better than one.
                  </span>
                </h2>
                <p style={{ marginBottom: "3rem" }}>
                  Over three excitement-packed days, you'll be able to make new
                  connections and bond with potential business partners like
                  never before. Plus, for the first time in our 15-year history,
                  we're joining forces with our sister brand, Private Luxury
                  Events, to create a major virtual event that connects the
                  worlds of MICE and luxury leisure.
                </p>
                <a href="/signup">
                  <span className="text-white btn btn-primary">register</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="numbers-section">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-4 laptop"
                style={{ paddingLeft: "50px", color: "#fff" }}
              >
                <div className="numbers">
                  <ul>
                    <li>
                      <div className="numbers-caption">
                        <h1 style={{ color: "#FF5959" }}>500</h1>
                        <p>UK & european buyers & suppliers</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 style={{ color: "#FF5959" }}>30</h1>
                        <p>perfectly matched 1-2-1 meetings</p>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="numbers-caption">
                        <h1 style={{ color: "#FF5959" }}>15</h1>
                        <p>amazing activities to choose from</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 style={{ color: "#FF5959" }}>6</h1>
                        <p>outstanding speakers</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half">
          <div className="img-bg-1">
            {" "}
            <img alt={" "} src={Meetings} className={"meetingsBanner"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary mobilePadding">
                  how do your meetings work?
                </h2>
                <p style={{ paddingRight: "80px" }} className="mobilePadding-2">
                  Just like at our Forums, both mornings will be made up of
                  pre-scheduled meetings, lasting 15 minutes each. Thanks to our
                  AI powered matchmaking technology, finding new business
                  partners has never been easier.
                  <br />
                  <br />
                  As for connecting to each meeting? It couldn't be more simple
                  - one click and you're good to go (no need to download any
                  additional programmes).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half">
          <div className="img-bg-1">
            <img
              alt={" "}
              src={Network}
              className={"network"}
              style={{ width: "400px" }}
            />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <h2 className="site-section-heading font-secondary mobilePadding">
                  who says we can't <br />
                  network virtually?
                </h2>
                <p className="mobilePadding-2">
                  This is where things get fun! Our unique menu of digital
                  experiences gives you the chance to forge great bonds with
                  other delegates in a fun and engaging way. From online cooking
                  class and musical workshops to wellness sessions, virtual
                  destination discovery and much more, your afternoons will be a
                  business fiesta, no siesta!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half">
          <div className="img-bg-1">
            {" "}
            <img alt={" "} src={Thrive} className={"thriveBanner"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary mobilePadding">
                  learn to thrive in a new normal.
                </h2>
                <p style={{ paddingRight: "80px" }} className="mobilePadding-2">
                  Over three days, join hundreds of fellow event profs who are
                  reshaping the events industry. Listen to inspiring talks from
                  your peers and attend interactive breakout sessions to discuss
                  the latest event trends and key challenges facing the industry
                  in 2020. This programme will educate, empower and energise
                  attendees to embrace an exciting future.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 className="site-section-heading font-secondary">
                  <span style={{ textDecoration: "underline" }}>
                    here's what you'll get...
                  </span>
                </h2>
                <div className="features">
                  <ul>
                    <li>
                      <img alt={" "} src={PreScheduledIcon}></img>
                      <div className="features-caption">
                        <h3 style={{ paddingBottom: "20px" }}>
                          30 pre-scheduled meetings
                        </h3>
                        <p>
                          High-quality 1-2-1 meetings. Broaden your portfolio
                          and client reach by connecting with vetted buyers and
                          european suppliers from the MICE, luxury travel and
                          romance sectors.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img alt={" "} src={UnrivalledIcon}></img>
                      <div className="features-caption">
                        <h3 style={{ paddingBottom: "20px" }}>
                          unrivalled networking experiences
                        </h3>
                        <p>
                          Get to know your peers in a fun, engaging and highly
                          creative way with our wide range of exciting virtual
                          activities.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img alt={" "} src={ExtraIcon}></img>
                      <div className="features-caption">
                        <h3 style={{ paddingBottom: "20px" }}>
                          a little <br />
                          something extra
                        </h3>
                        <p>
                          As a thank you for attending our first big virtual
                          event, we're giving buyers a €250 travel voucher and
                          suppliers will receive one month's free access to
                          Wyred World On Demand. Speak to our team for more
                          info.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 className="site-section-heading font-secondary">
                  Want to know more about who you'll meet and why you should
                  attend?{" "}
                  {/* <span
                    style={{ color: "#FF5959", textDecoration: "underline" }}
                  >
                    next big event!
                  </span> */}
                </h2>
                <p>
                  Register your interest for this event and a member of our
                  friendly team will come back to you with more info.
                </p>
                <a href="/signup">
                  <span className="text-white btn btn-primary">register</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="wyred-footer-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2 style={{ fontSize: "36px" }}>
                  connect anytime, anywhere <br />
                  with{" "}
                  <span className="blue-underlined">wyred world on demand</span>
                </h2>
                <br />

                <p
                  style={{
                    lineHeight: "28px",
                    paddingBottom: "40px",
                  }}
                >
                  Enjoy the benefits of a virtual event 24/7, 365 days a year
                  <br /> with our online digital networking platform.
                </p>
                <a href="/on-demand">
                  <span className=" btn btn-cta">find out more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-5">
            <div className="img-bg-1">
              <img alt={" "} src={WyredWorldLogo} className={"wyredLogo"}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EuropeAutumn
