import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Carousel from "../../components/elements/Carousel"

import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import HeroBanner1920 from "../../assets/images/events/2023/Europe Winter/Europe_Winter_Amman_Hero_image_1920px.jpg";
import HeroBanner1024 from "../../assets/images/events/2023/Europe Winter/Europe_Winter_Amman_Hero_image_1024px.jpg";
import HeroBanner766 from "../../assets/images/events/2023/Europe Winter/Europe_Winter_Amman_Hero_image_766px.jpg";
import HeroBanner320 from "../../assets/images/events/2023/Europe Winter/Europe_Winter_Amman_Hero_image_320px.jpg";
import CTABanner from "../../assets/images/events/2023/Europe Winter/Europe_Winter_Amman_CTA_image_1920px.jpg";
import Network from "../../assets/images/events/2023/Europe Winter/Europe_Winter_Amman_What_to_expect.png";
import Seville from "../../assets/images/events/2023/Europe Winter/Europe_Winter_Amman_Spotlight.png";
import TestBG from "../../assets/images/events/2023/Europe Winter/jordan_hero.png";
import CaptionPeople from "../../assets/images/venuepanel_characters.png";
import KempsinkiIshtar from "../../assets/images/events/2023/Europe Winter/kempsinkiishtar.png";
import KempsinkiHotel from "../../assets/images/events/2023/Europe Winter/kempsinkihotel.png";
import JordanTourism from "../../assets/images/events/partner_logos/Jordan Tourism Board Logo Blue.jpg";
import KarmaHouse from "../../assets/images/events/partner_logos/Karma_house_logo.png"
import GlobalOrganiser from "../../assets/images/events/partner_logos/global_organiser.jpg"

// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const EuropeWinter2023 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const heroBannerUrl =
    windowWidth <= 479
      ? HeroBanner320
      : windowWidth <= 768
      ? HeroBanner766
      : windowWidth <= 1024
      ? HeroBanner1024
      : HeroBanner1920;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);



  const images = [
    [
      JordanTourism,
      KempsinkiHotel,
      KempsinkiIshtar,
      KarmaHouse
    ],
    [
      GlobalOrganiser
    ]
  ];
 
  const links = [
    ['https://visitjordan.com/', 'https://www.kempinski.com/en/amman/hotel-amman/', 'https://www.kempinski.com/en/dead-sea/hotel-ishtar', 'https://www.karmahousejordan.com/'],
    ['https://globalorganiser.com/']
  ];
  const headings = ['gold', 'bronze'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i VIP Connect, Jordan 2023 | m&i </title>
        <meta
          name="description"
          content="Connect with the MICE industry’s elite buyers and suppliers at this invitation-only event in Amman, Jordan. Apply for your invite today."
        />
        <meta
          property="og:url"
          content={
            "https://www.mi-forums.com/images/ographs/OG_image_Europe_Autumn_2022.png"
          }
        />
        <meta
          property="og:image"
          content={
            "https://www.mi-forums.com/images/ographs/OG_image_Europe_Autumn_2022.png"
          }
        />
      </Helmet>
      <div className="site-wrap">
        <div className="event-page">
          <div
            className="sprint-hero-slider"
            style={{
              backgroundImage: `url(${heroBannerUrl})`,
            }}
          >
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div
                  className="col-lg-12 ml-rg-auto py-5"
                  style={{ color: "#131A33" }}
                >
                  <h1
                    className="header-section-heading fawn"
                    style={{
                      backgroundImage: `url(${TestBG})`,
                    }}
                  >
                    <span className="coral-underlined">
                      connect with city and <br /> sea
                    </span>{" "}
                    as you forge new
                    <br /> business partnerships <br /> in jordan
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Sticky>
            <div className="event-under-banner">
              <div className="container">
                <div className="row no-gutters align-items-stretch">
                  <div className=" ml-rg-auto event-sticky-text">
                    <h3>love the sound of this event?</h3>
                  </div>
                  <div className="ml-rg-auto event-buttons flex-wrap ">
                    <a href="/tell-me-more">
                      <span className=" btn btn-secondary transparent">
                        tell me more
                      </span>
                    </a>
                    <a href="/signup">
                      <span className=" btn btn-secondary white">
                        attend
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>

          <div className="site-half eventInformationSection">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-7 ml-rg-auto">
                  <div className="eventTitle">
                    <h2 className="site-section-heading font-secondary">
                      m&i VIP Connect, Jordan 2023
                    </h2>
                    <span>
                      19-23 november <br />
                      amman & dead sea
                    </span>
                    <br />
                    <br />
                    <p>
                      What’s better than one event destination? Two, of course!
                      At this VIP Connect Forum, we’ll be whisking you away to
                      two different parts of Jordan: the capital city of Amman
                      and the tranquil Dead Sea. Over the course of five days,
                      you’ll have 30 pre-scheduled meetings with UK & European buyers
                      and global suppliers, and get to know the delights of the
                      Middle East through unique destination experiences. Keep
                      reading and discover more of what’s in store for m&i VIP
                      Connect Europe...
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 ml-rg-auto py-3">
                  <div className="eventNavigation">
                    <h4 className="site-section-heading font-secondary">
                      Click to jump to:
                    </h4>
                    <a href="#numbers">
                      <p>This event in numbers </p>
                    </a>
                    <a href="#spotlight">
                      <p>Spotlight on Jordan </p>
                    </a>
                    <a href="#meeting">
                      <p>Meeting & accommodation venue </p>
                    </a>
                    <a href="#itinerary">
                      <p>Sample itinerary</p>
                    </a>
                    <a href="#packages">
                      <p>Your package</p>
                    </a>
                    <a href="#signup">
                      <p>Sign up</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

          <div className="numbers-section eventNumbers fawn">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div
                  className="col-lg-12 ml-rg-auto py-4 laptop"
                  style={{ color: "#ff5959" }}
                >
                  <div className="container">
                    <div className="inNumbers">
                      <h2 className="site-section-heading font-secondary ">
                        <span className="blue-underlined">m&i VIP Connect</span>{" "}
                        in numbers.
                      </h2>
                      <ul>
                        <li>
                          <div className="numbers-caption ">
                            <h1 className="eventNumbers blue">4</h1>
                            <p>exciting days</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers blue">30</h1>
                            <p>meetings</p>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="numbers-caption">
                            <h1 className="eventNumbers blue">100</h1>
                            <p>supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers blue">110</h1>
                            <p>UK & european buyers</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anchorScroll" id="spotlight"></div>
            </div>
          </div>

          <div className="site-half block" style={{ paddingBottom: "5rem" }}>
            <div className="img-bg-1">
              {" "}
              <img alt={" "} src={Seville} className={"eventDestination"} />
            </div>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-5 ml-lg-auto py-5">
                  <h2 className="site-section-heading font-secondary ">
                    spotlight on{" "}
                    <span className="coral-underlined">jordan.</span>
                  </h2>
                  <p
                    style={{ paddingRight: "60px" }}
                    className="mobilePadding-2"
                  >
                    With its desert landscapes, unmissable historical sites and
                    grand hotels, the Middle Eastern country of Jordan is the
                    ideal host for m&i VIP Connect Europe 2023. Jordan is a
                    country with two distinctive personalities: outstanding
                    natural beauty on the one hand and bustling city life on the
                    other, and at this event, you’ll experience the best of both
                    worlds!
                    <br />
                    <br />
                    In the capital city of Amman, you’ll find Roman ruins,
                    authentic souqs, grand mosques, traditional coffee houses
                    and a plethora of exciting properties. And 431m below sea
                    level at the Dead Sea? Expect to find luxury resorts,
                    thermal springs, even more exciting historical gems and
                    sensational views.
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>

          <div className="event-venue coral-bg" style={{ height: "350px" }}>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-5 ml-lg-auto py-5 ">
                  <h3
                    className="site-section-heading font-secondary "
                    style={{
                      textDecoration: "underline",
                      color: "#fff",
                    }}
                  >
                    meeting and accommodation venue
                  </h3>
                  <h2 style={{ lineHeight: "45px" }}>
                    <a
                      className="venueLink white"
                      href="https://www.kempinski.com/en/amman/hotel-amman/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      kempinski hotel amman
                    </a>
                    <hr />
                    <a
                      className="venueLink white"
                      href="https://www.kempinski.com/en/dead-sea/hotel-ishtar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      kempinski hotel Ishtar dead sea
                    </a>
                  </h2>
                </div>
                <div className="col-lg-6 ml-lg-auto py-5 ">
                  <img
                    alt={" "}
                    src={CaptionPeople}
                    className={"twoPeople desktop"}
                    style={{
                      width: "300px",
                      marginTop: "-8rem",
                    }}
                  ></img>
                </div>
              </div>
              <div className="anchorScroll" id="itinerary"></div>
            </div>
          </div>

          <div className="site-half eventItinerarySection">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-5 ml-lg-auto py-5 ">
                  <h2
                    className="site-section-heading font-secondary"
                    style={{ paddingBottom: "40px" }}
                  >
                    here's a sample of <br />
                    what you can expect.
                  </h2>
                  <Tabs defaultTab="one">
                    <TabList className="eventTabList">
                      <Tab tabFor="one" className="eventTabs raven">
                        arrival
                      </Tab>
                      <Tab tabFor="two" className="eventTabs raven">
                        day 1
                      </Tab>
                      <Tab tabFor="three" className="eventTabs raven">
                        day 2
                      </Tab>
                      <Tab tabFor="four" className="eventTabs raven">
                        day 3
                      </Tab>
                      <Tab tabFor="five" className="eventTabs raven">
                        departures
                      </Tab>
                    </TabList>
                    <TabPanel tabId="one">
                      <ul className="itineraryList">
                        <li>You arrive (yay!)</li>
                        <li>
                          Time to get some sleep after a busy day of travelling
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="two">
                      <ul className="itineraryList">
                        <li>
                          Start the day energised with our Rise & Shine wellness
                          session
                        </li>

                        <li>Your first set of pre-scheduled meetings</li>
                        <li>Refuel with a bit of lunch</li>

                        <li>
                          An afternoon of your chosen networking activities
                        </li>
                        <li>Our Opening Night celebration</li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="three">
                      <ul className="itineraryList">
                        <li>
                          Start the day energised with our Rise & Shine wellness
                          session
                        </li>
                        <li>
                          A full day of experiences between Amman and the Dead
                          Sea
                        </li>
                        <li>
                          Get dressed up and join us for a networking evening
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="four">
                      <ul className="itineraryList">
                        <li>
                          Another chance to join a Rise & Shine wellness session
                        </li>
                        <li>Pre-scheduled 1-2-1 meetings in the morning</li>
                        <li>A quick break for lunch</li>
                        <li>
                          A chance to relax and connect during more networking
                          activities
                        </li>
                        <li>
                          Get your party shoes on - it’s time for a Closing
                          Night Party!
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="five">
                      <ul className="itineraryList">
                        <li>You depart (boo!)</li>
                        <li>Time to book your next m&i event!</li>
                      </ul>
                    </TabPanel>
                  </Tabs>
                  <div className="anchorScroll" id="packages"></div>
                </div>
                <div className="col-lg-6 ml-lg-auto py-5 ">
                  <div className="img-bg-1">
                    <img
                      alt={" "}
                      src={Network}
                      className={"itineraryPicture"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="packages-section">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-5 ml-lg-auto py-5 ">
                  <h2 className="site-section-heading font-secondary">
                    <span className="blue-underlined">
                      what's in it for you?
                    </span>
                  </h2>
                  <p>Take a look at our exciting packages for this event:</p>
                  <br />
                  <h2 className="site-section-heading font-secondary supplierPackageTitle">
                    supplier package
                  </h2>
                  <div class="accordion">
                    <div>
                      <input type="checkbox" name="panel" id="panel-1" />
                      <label for="panel-1">read more</label>
                      <div class="accordion__content accordion__content--large">
                        {/* <h2 class="accordion__header"></h2> */}
                        <p class="accordion__body">
                          {" "}
                          <ul className="packages">
                            <li>
                              4 days of exclusive networking with top-tier
                              buyers
                            </li>
                            <li>
                              Invitations only extended to buyers with real
                              decision-making power
                            </li>
                            <li>
                              Limited to 100 suppliers for enhanced
                              connection-building
                            </li>
                            <li>
                              In-depth sustainability programme from industry
                              pioneers
                            </li>
                            <li>
                              Cutting-edge AI matchmaking technology to find
                              your best meeting potential
                            </li>
                            <li>Exclusive activities for optimum networking</li>
                            <li>
                              Exceptional dinners and nightlife experiences
                            </li>
                            <li>
                              Friendly Account Manager to guide you from start
                              to finish
                            </li>
                            <li>
                              Make your money go further with our{" "}
                              <a href="/pricing">early payment discount</a>
                            </li>
                            
                            <li>
                              Find out how we're{" "}
                              <a href="https://www.mi-forums.com/covid-safe-events">
                                keeping you safe
                              </a>{" "}
                              at this event
                            </li>
                            <li>
                              New to m&i? Wondering what to expect at our events
                              ? see{" "}
                              <a href="https://mi-forums.com/supplier-experience">
                                how it works
                              </a>
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>

                  <br />
                  <hr />
                  <br />
                  <div className="anchorScroll" id="signup"></div>

                  <h2 className="site-section-heading font-secondary buyerPackageTitle">
                    buyer package
                  </h2>
                  <div class="accordion">
                    <div>
                      <input type="checkbox" name="panel" id="panel-2" />
                      <label for="panel-2">read more</label>
                      <div class="accordion__content accordion__content--large buyernopadding">
                        {/* <h2 class="accordion__header"></h2> */}
                        <p class="accordion__body">
                          {" "}
                          <ul className="packages">
                            <li>
                              1-2-1 meetings with senior-level European MICE
                              suppliers
                            </li>
                            <li>
                              Truly exclusive opportunities to discover the best
                              of Amman, Jordan
                            </li>
                            <li>
                              In-depth sustainability programme from industry
                              pioneers
                            </li>
                            <li>
                              A VIP programme of high-end activities and
                              experiences
                            </li>
                            <li>
                              Cutting edge AI matchmaking technology to find
                              your best meeting potential
                            </li>
                            <li>
                              Bespoke buyer package, including accommodation and
                              transfers, as well as airfare/train credits.
                            </li>
                            <li>
                              Breakfast, lunch and outstanding dinners provided
                            </li>
                            <li>Glamorous parties and nightlife experiences</li>
                            <li>
                              Find out how we're{" "}
                              <a href="https://www.mi-forums.com/covid-safe-events">
                                keeping you safe
                              </a>{" "}
                              at this event
                            </li>
                            <li>
                              New to m&i? Wondering what to expect at our events
                              ? see{" "}
                              <a href="https://mi-forums.com/buyer-experience">
                                how it works
                              </a>
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ml-lg-auto py-5 "></div>
              </div>
            </div>
          </div>

          <div
            className="cta-banner"
            style={{ backgroundImage: `url(${CTABanner})` }}
          >
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5 laptop">
                  <div className="cta-content">
                    <h2>
                      two parts of jordan,
                      <br /> one unmissable event!
                      <br /> <span className="underlined">are you in?</span>
                    </h2>
                    <a href="/signup">
                      <span className=" btn btn-secondary white">
                        count me in
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-half partnerSection">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                  <h3 className="site-section-heading font-secondary">
                    host partners
                  </h3>

                  <Carousel images={images} links={links} headings={headings} autoPlay />

                  
                  
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
      </div>
    </>
  );
};

export default EuropeWinter2023;
