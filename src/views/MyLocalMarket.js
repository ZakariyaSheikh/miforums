import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/events/mylocalmarket/WM_My_Local_Market_Hero_1920.png"
import HeroBanner1024 from "../assets/images/events/mylocalmarket/WM_My_Local_Market_Hero_1024.png"
import HeroBanner766 from "../assets/images/events/mylocalmarket/WM_My_Local_Market_Hero_766.png"
import HeroBanner320 from "../assets/images/events/mylocalmarket/WM_My_Local_Market_Hero_320.png"
import Spotlight from "../assets/images/events/mylocalmarket/WM_My_Local_Market_2.png"
import WomanSitting from "../assets/images/events/mylocalmarket/womansitting.svg"
import QuoteIcon from "../assets/images/quotation_icon_white.svg"
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const MyLocalMarket = () => {
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
        <title>Wyred Meets: My local market | m&i</title>
        <meta
          name="description"
          content="Virtually meet MICE professionals from your home country and do business for domestic events. Register now."
        />
      </Helmet>
      <div className="site-wrap">
        <div
          className="seville-hero-slider "
          style={{
            backgroundImage: `url(${heroBannerUrl})`,
            height: "auto",
            paddingBottom: " 10%",
          }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 wyredleft mobileBanner"
                style={{ color: "#131A33" }}
              >
                <h1 className="header-section-heading sevilleheader mobileHide">
                  Wyred Meets: <br />
                  <span className="coral-underlined">
                    My Local
                    <br />
                    {""} Market
                  </span>
                </h1>
                <h1 className="header-section-heading sevilleheader mobileShow">
                  Wyred Meets: <br />
                  <span className="coral-underlined">My Local Market</span>
                </h1>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block marketCaption">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto">
                <p>
                  Struggling to do international business right now? You’re not
                  alone. According to our latest survey, where we asked buyers
                  about their current event plans, a vast majority expressed the
                  need for more domestic events. That got us thinking. Why not
                  create a no-frills, budget-friendly digital event that brings
                  buyers and suppliers from the same country together for an
                  intensive day of just meetings? Et voilà, My Local Market was
                  born.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="numbers-section eventNumbers yellow-bg">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-4 laptop"
                style={{ color: "#fff" }}
              >
                <div className="inNumbers">
                  <h2 className="site-section-heading font-secondary ">
                    <span className="blue-underlined">My Local Market</span> by
                    numbers.
                  </h2>
                  <ul>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers blue">40</h1>
                        <p>suppliers</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers blue">50</h1>
                        <p>buyers</p>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="numbers-caption">
                        <h1 className="eventNumbers blue">10</h1>
                        <p>meetings</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers blue">15</h1>
                        <p>minutes per meeting</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half block" style={{ paddingBottom: "5rem" }}>
          <div className="img-bg-1">
            {" "}
            <img alt={" "} src={Spotlight} className={"eventDestination"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary ">
                  how do your meetings work? <br />
                </h2>
                <p style={{ paddingRight: "80px" }} className="mobilePadding-2">
                  It’s simple! When you sign up to attend Wyred Meets: My Local
                  Market, our smart AI matchmaking technology will analyse your
                  needs and provide you with 10 business matches from your
                  country; then it’s up to you to choose who you want to meet.
                  Over the course of the digital event, you’ll have the
                  opportunity to meet and do business with your best matches,
                  and all without any need for travel. Sound good? Did we
                  mention that as an added bonus, we’re also giving all
                  attendees a complimentary networking hour to connect with more
                  people and strengthen those newly made relationships?
                  Fantastisch!
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="packages-market-section blush-bg eventDetails">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  <span className="coral-underlined">event details</span>
                </h2>
                <table className="eventTable marketTable">
                <tr className="eventRow">
                    <td className="eventName">
                      {" "}
                      Wyred Meets:
                      <br />
                      <span className="underlined">
                        My Local Market, France
                      </span>
                    </td>
                    <td className="date">14 june 2021 </td>
                    <td className="location mobileHide">French suppliers</td>
                    <td className="location mobileHide">French buyers</td>
                    <td className="location mobileShow">
                      French suppliers | French buyers
                    </td>
                    <td className="signup">
                      <a href="/signup">
                        <span className=" text-white btn btn-primary ">
                          sign up
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="eventRow">
                    <td className="eventName">
                      {" "}
                      Wyred Meets:
                      <br />
                      <span className="underlined">My Local Market, UK</span>
                    </td>
                    <td className="date">15 june 2021 </td>
                    <td className="location mobileHide">UK suppliers</td>
                    <td className="location mobileHide">UK buyers</td>
                    <td className="location mobileShow">
                      UK suppliers | UK buyers
                    </td>
                    <td className="signup">
                      <a href="/signup">
                        <span className=" text-white btn btn-primary ">
                          sign up
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="eventRow">
                    <td className="eventName">
                      {" "}
                      Wyred Meets:
                      <br />
                      <span className="underlined">
                        My Local Market, Germany
                      </span>
                    </td>
                    <td className="date">16 june 2021 </td>
                    <td className="location mobileHide">German suppliers</td>
                    <td className="location mobileHide">German buyers</td>
                    <td className="location mobileShow">
                      German suppliers | German buyers
                    </td>
                    <td className="signup">
                      <a href="/signup">
                        <span className=" text-white btn btn-primary ">
                          sign up
                        </span>
                      </a>
                    </td>
                  </tr>

                </table>
                <br />
                <p>
                  These events are strictly for domestic buyers and suppliers,
                  and all attendees will need to qualify.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="packages-market-section">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  <span className="coral-underlined">supplier pricing:</span>{" "}
                  £950 / $1300
                </h2>
                <h3>did you know?</h3>
                <p style={{ lineHeight: "2" }}>
                  You can now sign up for all our digital events on our website
                  and <br />
                  pay directly online as part of our fast-track payment system.
                </p>
                <br />
                <br />
                <br />
                <h2 className="site-section-heading font-secondary">
                  <span className="blue-underlined">
                    as a supplier, you will...
                  </span>
                </h2>
                <ul className="packages">
                  <li>
                    Attend 10 pre-scheduled meetings with vetted domestic buyers
                  </li>
                  <li>
                    Experience higher quality meetings with AI matchmaking
                    technology
                  </li>
                  <li>Benefit from budget-friendly pricing</li>
                  <li>
                    Receive buyer contact details from all your pre-scheduled
                    meetings after the event
                  </li>
                  <li>
                    Further connect with buyers and fellow suppliers during our
                    complimentary Networking Hour
                  </li>
                  <li>
                    Significantly expand your buyer reach in only half a day
                  </li>
                </ul>
                <br />
                <h2 className="site-section-heading font-secondary">
                  <span className="blue-underlined">
                    as a buyer, you will...
                  </span>
                </h2>
                <ul className="packages">
                  <li>Attend the event free of charge</li>
                  <li>
                    Get 10 pre-scheduled meetings with domestic venues of your
                    choice
                  </li>
                  <li>
                    Experience smarter meetings with AI matchmaking technology
                  </li>
                  <li>
                    Discover the best properties your country has to offer
                  </li>
                  <li>
                    Receive supplier contact details from all your pre-scheduled
                    meetings after the event
                  </li>
                  <li>
                    Further connect with suppliers and fellow buyers during our
                    complimentary Networking Hour
                  </li>
                  <li>
                    Fulfil your client briefs by meeting new business partners
                    in only half a day
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="event-footer-slider grey-bg testimonialSection">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <img alt={" "} src={QuoteIcon} class="quoteIcon"></img>
                <br />

                <p className="testimonialText">
                  What really stands these events apart from the rest is the
                  smart software – it’s really helped us to meet new clients and
                  gain more business opportunities.
                </p>
                <br />
                <p className="testimonialAuthor">
                  <strong>Jens Ihsen</strong>
                  <br />
                  Düsseldorf Convention Bureau, Germany
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="market-footer-slider coral-bg">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 style={{ color: "#fff" }}>
                  <span className="yellow-underlined">
                    {" "}
                    are you ready to discover the <br />
                    power of 'local'
                  </span>{" "}
                  and make new
                  <br /> domestic connections?
                </h2>
                <br />

                <p className="eventFooterText">
                  There’s no place like home, after all! Apply for My <br />
                  Local Market events today by clicking below, but
                  <br /> hurry because places are limited.
                </p>
                <a href="/signup">
                  <span className=" btn btn-secondary white">apply</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-5 mobileHide">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={WomanSitting}
                className={"twoPeople desktop"}
                style={{ width: "300px", marginTop: "-23rem" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyLocalMarket
