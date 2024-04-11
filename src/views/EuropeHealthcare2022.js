import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs"
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/events/Healthcare Europe 2022/Event_Healthcare_Europe_2022_Hero_1920.png"
import HeroBanner1024 from "../assets/images/events/Healthcare Europe 2022/Event_Healthcare_Europe_2022_Hero_1024.png"
import HeroBanner766 from "../assets/images/events/Healthcare Europe 2022/Event_Healthcare_Europe_2022_Hero_766.png"
import HeroBanner320 from "../assets/images/events/Healthcare Europe 2022/Event_Healthcare_Europe_2022_Hero_320.png"
import Itinerary from "../assets/images/events/Healthcare Europe 2022/Healthcare_Europe_2022_itinerary.png"
import Berlin from "../assets/images/events/partner_logos/visitBerlin_Convention_Logo_RGB.jpg"
import BerlinPartnerNew from "../assets/images/events/partner_logos/visitBerlin_Convention_Partner_Logos-new.jpg"
import Sibenik from "../assets/images/events/Healthcare Europe 2022/Healthcare_Europe_2022_Spotlight.png"
import CaptionPeople2 from "../assets/images/events/europe_autumn/europe_autumn 2021_venue_section.png"
import Vienna from '../assets/images/events/partner_logos/Logo-Vienna-House-Berlin.jpg'
import Timechange from '../assets/images/events/partner_logos/timechange_Logo_Orange_rgb.png'
import Weichlein from '../assets/images/events/partner_logos/weichlein.png'
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"

const EuropeHealthcare2022 = () => {
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
        <title>m&i Healthcare 2022, Berlin | m&i </title>
        <meta
          name="description"
          content=" This MICE healthcare event will introduce you to healthcare certified venues and specialist buyers over 2 days. Sign up today. "
        />
      </Helmet>
      <div className="site-wrap">
        <div
          className="seville-hero-slider mobileSeville"
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
                <h1 className="header-section-heading sevilleheader">
                  m&i{" "}
                  <span className="coral-underlined">
                    Healthcare <br />
                     2022
                  </span>
                </h1>
                <br />
                <p style={{ fontSize: "25px" }}>
                  11 - 13 april
                  <br />
                   berlin, germany
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block eventCaption">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto">
                <p>
                Want to plan events in certified healthcare venues? Interested in providing your event space to specialist clients? You need m&i Healthcare! Simply put, this is a specialist event that provides enhanced educational content and connects suppliers and buyers over two days in Germany’s buzzing capital city - Berlin!
                  <br /><br />
Intrigued? Keep reading and we’ll give you all the details!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="numbers-section eventNumbers coral-bg">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-4 laptop"
                style={{ color: "#fff" }}
              >
                <div className="inNumbers">
                  <h2 className="site-section-heading font-secondary ">
                    <span className="yellow-underlined">m&i Healthcare</span>{" "}
                    in numbers.
                  </h2>
                  <ul>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers">2</h1>
                        <p>exciting days</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers">25</h1>
                        <p>meetings</p>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="numbers-caption">
                        <h1 className="eventNumbers">120</h1>
                        <p>supplier tables</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers">130</h1>
                        <p>healthcare buyers</p>
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
            <img
              alt={" "}
              src={Sibenik}
              className={"eventDestination"}
              style={{ marginTop: "2%" }}
            />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary ">
                  spotlight on{" "}
                  <span className="coral-underlined">berlin.</span>
                </h2>
                <p style={{ paddingRight: "40px" }} className="mobilePadding-2">

Ultra trendy with an unmistakable sense of deep history, Germany’s capital city has a completely unique personality. From its distinct neoclassical architecture to the art & graffiti-covered remains of the Berlin Wall, there is so much to discover and learn here. With so much incredible food & drink, and a plethora of museums and parks to explore, you’ll blink and the day will be gone! Thankfully, Berlin is a city that truly never sleeps. Watch the sunset over the Brandenberger Tor, grab a drink at a local bar and then party till the sun comes up again in one of the city’s booming nightclubs.

                  <br /><br />
                  Of course, if you prefer a good night’s sleep, Berlin has almost 800 hotels to choose from. As for events, there are five convention centres - in fact, Berlin is in the top five global destinations for conventions, particularly healthcare, so it’s the perfect host for this event.

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="event-venue yellow-bg " style={{ height: "350px" }}>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-5 ml-lg-auto py-5 ">
                <h3
                  className="site-section-heading font-secondary "
                  style={{ textDecoration: "underline" }}
                >
                  meeting and accommodation venue
                </h3>
                <h2 style={{ lineHeight: "45px" }}>
                  <a
                    className="venueLink "
                    href="http://www.viennahouse.com/en/andels-berlin/the-hotel/overview.html"
                  >
                    vienna house andel’s berlin
                  </a>
                </h2>
              </div>
              <div className="col-lg-6 ml-lg-auto py-5 ">
                <img
                  alt={" "}
                  src={CaptionPeople2}
                  className={"twoPeople desktop"}
                  style={{ width: "300px", marginTop: "-5rem" }}
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half eventItinerarySection">
          <div className="img-bg-1">
            <img
              alt={" "}
              src={Itinerary}
              className={"network"}
              style={{ width: "400px", marginTop: "5%" }}
            />
          </div>
          <div className="container itineraryTitle">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-9 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <h2
                  className="site-section-heading font-secondary"
                  style={{ paddingBottom: "40px" }}
                >
                  here's a sample of <br />
                  what you can expect.
                </h2>
                <Tabs defaultTab="one">
                  <TabList className="eventTabList">
                    <Tab tabFor="one" className="eventTabs">
                      arrival
                    </Tab>
                    <Tab tabFor="two" className="eventTabs">
                      day 1
                    </Tab>
                    <Tab tabFor="three" className="eventTabs">
                      day 2
                    </Tab>
                  </TabList>
                  <TabPanel tabId="one">
                    <ul className="itineraryList">
                      <li>You arrive </li>
                      <li>Let's eat! Lunch is served</li>
                      <li>
                        Be fully prepared with a focused supplier session
                      </li>
                      <li>We start the night with a keynote presentation</li>
                      <li>
                        The event begins with a welcome reception
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel tabId="two">
                    <ul className="itineraryList">
                      <li>A morning of meetings and workshops</li>
                      <li>Time for lunch - hope you’re hungry!</li>
                      <li>Panel discussion with industry specialists</li>
                      <li>
                        Option 1: Get to know the city's potential for planning healthcare events
                      </li>
                      <li>
                        Option 2: Get to know other attendees outside during networking activities
                      </li>
                      <li>The closing dinner</li>
                    </ul>
                  </TabPanel>
                  <TabPanel tabId="three">
                    <ul className="itineraryList">
                      <li> Another great morning of meetings and workshops</li>
                      <li> A farewell lunch for everyone to enjoy</li>
                      <li>
                        Optional peer-to-peer discussion session for buyers
                      </li>
                      <li>Departures (until next time!)</li>
                    </ul>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        <div className="packages-section">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 className="site-section-heading font-secondary">
                  <span className="blue-underlined">supplier package</span>
                </h2>
                <ul className="packages">
                  <li>
                   2 days of high-quality networking in a popular, healthcare-relevant city
                  </li>
                  <li>
                  25 guaranteed 1-2-1 meetings with healthcare specific buyers

                  </li>
                  <li>
                  Cutting edge AI matchmaking technology to find your best meeting potential
                  </li>
                  <li>
                    Networking activities for extra relationship-building with
                    attending buyers
                  </li>
                  <li>
                    Outstanding networking dinners and social nightlife
                    experiences
                  </li>
                  <li>Venue accreditation and specialist delegate training provided via our event partner, HealthcareVenues
                  </li>
                  <li>Educational sessions from key industry speakers
</li>
                  <li>
                    Friendly Account Manager to guide you from start to finish
                  </li>
                  <li>
                  Make your money go further with our{" "}
                    <a href="/pricing">early booking discount</a>
                  </li>
                  <li>Find out how we're  <a href="https://www.mi-forums.com/covid-safe-events">keeping you safe</a> at this event</li>
                  <li>
                                    New to m&i? wondering what to expect at our events? see {" "}
                    <a href="/how-it-works">how it works</a>
                  </li>
                </ul>
                <br />
                <hr />
                <br />
                <h2 className="site-section-heading font-secondary">
                  <span className="blue-underlined">hosted buyer package</span>
                </h2>
                <ul className="packages">
                  <li>2 days of high-quality networking in one of the world’s top convention destinations</li>
                  <li>
                  1-2-1 meetings with healthcare-relevant suppliers

                  </li>
                  <li>Cutting edge AI matchmaking technology to find your best meeting potential
</li>
                  <li>Bespoke buyer package, including accommodation and transfers, as well as airfare/train credits. </li>
                  <li>
                    Breakfast, lunch and exciting networking dinners provided
                  </li>
                  <li>
                  Educational sessions from key industry speakers
                  </li>

                  <li>
                   Destination discovery — discover Berlin’s great MICE infrastructure

                  </li>
                  <li>Experience what Berlin has to offer with fellow attendees</li>
                  <li>Networking activities — experience Berlin’s top attractions with fellow attendees
</li>
                  <li>Find out how we're  <a href="https://www.mi-forums.com/covid-safe-events">keeping you safe</a> at this event</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="event-footer-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 style={{ color: "#fff" }}>
                experience berlin and make <br />
                 top MICE connections {" "}
                  <span className="blush-underlined">in just <br/>two fantastic days!</span>
                </h2>
                <br />

                <p className="eventFooterText">
                Sign up to m&i Healthcare 2022 today and a member <br/>of our team will get in touch to discuss the full event details.

                </p>
                <a href="/signup">
                  <span className=" btn btn-secondary white">sign up</span>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-10 ml-rg-auto py-5">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={CaptionPeople}
                className={"twoPeople desktop"}
                style={{ width: "270px", marginTop: "-27%" }}
              ></img>
            </div>
          </div> */}
        </div>
        <div className="site-half partnerSection">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <h3 className="site-section-heading font-secondary mobilePadding">
                  our partners
                </h3>
                <a href="http://www.viennahouse.com/en/andels-berlin/the-hotel/overview.html">
                  <img alt={" "} src={Vienna} className={"partnerLogo"} />
                </a>
                <a href="http://www.visitberlin-partnerhotels.de/">
                  <img alt={" "} src={BerlinPartnerNew} className={"partnerLogo"} />
                </a>
                <a href="https://convention.visitberlin.de/en">
                  <img alt={" "} src={Berlin} className={"partnerLogo"} />
                </a>
                <a href="https://weichlein.de/ ">
                  <img alt={" "} src={Weichlein} className={"partnerLogo"} />
                </a>
                <a href="https://www.time-change.com/?lang=en">
                  <img alt={" "} src={Timechange} className={"partnerLogo"} />
                </a>



              </div>
            </div>
          </div>
        </div>

        {/* <div className="wyred-footer-slider">
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
        </div> */}
      </div>
    </>
  )
}

export default EuropeHealthcare2022
