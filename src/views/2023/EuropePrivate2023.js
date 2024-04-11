import React, { useState, useEffect } from "react";
import Carousel from "../../components/elements/Carousel"
import { Helmet } from "react-helmet";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import HeroBanner1920 from "../../assets/images/events/2023/Europe Private/Private_Europe_Ibiza_Hero_image_1920px.jpg";
import HeroBanner1024 from "../../assets/images/events/2023/Europe Private/Private_Europe_Ibiza_Hero_image_1024px.jpg";
import HeroBanner766 from "../../assets/images/events/2023/Europe Private/Private_Europe_Ibiza_Hero_image_766px.jpg";
import HeroBanner320 from "../../assets/images/events/2023/Europe Private/Private_Europe_Ibiza_Hero_image_320px.jpg";
import CTABanner from "../../assets/images/events/2023/Europe Private/Private_Europe_Ibiza_CTA_image_1920px.jpg";
import Network from "../../assets/images/events/2023/Europe Private/Private_Europe_Ibiza_What_to_expect.png";
import Seville from "../../assets/images/events/2023/Europe Private/Private_Europe_Ibiza_Spotlight.png";
import TestBG from "../../assets/images/events/2023/Europe Private/ibiza_hero.png";
import CaptionPeople from "../../assets/images/events/americas_2021/conversational_characters.svg";
import Torre from "../../assets/images/events/2023/Europe Private/LOGOTORREDELMAR.gif";
import IbizaConvention from "../../assets/images/events/partner_logos/Ibiza Convention Bureau.jpg";
import IbizaBalears from "../../assets/images/events/partner_logos/ibizabalears.jpg"
import IbizaGSE from "../../assets/images/events/partner_logos/LOGO_GSE.jpg"
import IbizaProject from "../../assets/images/events/partner_logos/ibiza_project.jpg";
import Incentivos from "../../assets/images/events/partner_logos/incentivos.png"

// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const EuropePrivate2023 = () => {
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
      Torre
    ],
    [
     IbizaConvention, IbizaBalears, IbizaGSE, IbizaProject, Incentivos
    ]
  ];
 
  const links = [
    ['https://www.hoteltorredelmar.com/en'],
    ['https://www.ibizaconventionbureau.es/en/', 'https://ibiza.travel/', 'https://www.global-star-events.com/', 'https://ibizaproject.es/', 'https://incentivosibiza.com/']
  ];
  const headings = ['gold', 'silver'];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Europe Private 2023, Ibiza | m&i </title>
        <meta
          name="description"
          content='This "no hard brands" specialist networking event is perfect for independent venues and local hotel groups. Sign up today.'
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
            className="sprint-hero-slider ibiza"
            style={{
              backgroundImage: `url(${heroBannerUrl})`,
            }}
          >
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                  <h1
                    className="header-section-heading yellow "
                    style={{
                      backgroundImage: `url(${TestBG})`,
                    }}
                  >
                    escape to a spanish
                    <br /> island where
                    <br className="showOnlyMobile" />{" "}
                    <span className="blue-underlined">
                      new business
                      <br /> and unforgettable
                      <br /> memories wait
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Sticky>
            <div className="event-under-banner">
              <div className="container">
                <div className="row no-gutters d-flex align-items-center justify-content-between">
                  <div className=" ml-rg-auto event-sticky-text">
                    <h3>love the sound of this event?</h3>
                  </div>
                  <div className="ml-rg-auto event-buttons flex-wrap ">
                    <a href="/tell-me-more">
                      <span className=" btn btn-secondary transparentYellow">
                        tell me more
                      </span>
                    </a>
                    <a href="/signup">
                      <span className=" btn btn-secondary yellowBtn">
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
                      m&i Private, Ibiza 2023
                    </h2>
                    <span>
                      23-26 April <br /> spain
                    </span>
                    <br />
                    <br />
                    <p>
                      For m&i Private, we’re jetting off to the Balearic Island
                      of Ibiza. As an m&i Private Forum, this smaller-scale
                      event is exclusively designed for introducing independent
                      hotels, local hotel groups and properties of character to
                      buyers on the hunt for something different. So sorry hard
                      brands, this one’s not for you! Picture 3 days of unique networking experiences, up to 40 pre-scheduled meetings powered by AI tech, and a strictly limited guestlist, giving a
                      more personal feel.{" "}
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
                      <p>Spotlight on Ibiza </p>
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

          <div className="numbers-section eventNumbers yellow-bg">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div
                  className="col-lg-12 ml-rg-auto py-4 laptop"
                  style={{ color: "#fff" }}
                >
                  <div className="container">
                    <div className="inNumbers">
                      <h2 className="site-section-heading font-secondary ">
                        <span className="underlined">m&i Private</span> in
                        numbers.
                      </h2>
                      <ul>
                      <li style={{paddingRight:"6rem"}}>
                          <div className="numbers-caption ">
                            <h1 className="eventNumbers coral">3</h1>
                            <p style={{paddingRight:"2px"}}>exciting days</p>
                          </div>
                        </li>
                        <li style={{paddingRight:"6rem"}}>
                          <div className="numbers-caption" >
                            <h1 className="eventNumbers coral">35</h1>
                            <p style={{paddingRight:"2px"}}>meetings for buyers</p>
                          </div>
                        </li>
                        <li style={{paddingRight:"6rem"}}>
                          <div className="numbers-caption" >
                            <h1 className="eventNumbers coral">30</h1>
                            <p style={{paddingRight:"2px"}}>meetings for suppliers</p>
                          </div>
                        </li>
                        <li style={{paddingRight:"6rem"}}>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers coral">100</h1>
                            <p style={{paddingRight:"2px"}}>supplier tables</p>
                          </div>
                        </li>
                        <li style={{paddingRight:"6rem"}}>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers coral">110</h1>
                            <p style={{paddingRight:"2px"}}>UK & european buyers</p>

                          </div>
                        </li>
                      </ul>
                      {/* <p className="finePrint">*Opt for 10 extra meetings at a discounted rate </p> */}
                      <div className="anchorScroll" id="spotlight"></div>
                    </div>
                  </div>
                </div>
              </div>
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
                    spotlight on <span className="blue-underlined">ibiza</span>
                  </h2>
                  <p
                    style={{ paddingRight: "60px" }}
                    className="mobilePadding-2"
                  >
                    The name ‘Ibiza’ might conjure images of glamorous beach
                    clubs, thumping nightclubs and DJ sets, but there’s so much
                    more to be discovered on this beautiful Balearic Island.
                    Away from the ‘livelier’ parts of Ibiza, you can find quaint
                    villages, zen yoga retreats, and secluded beach coves. Given
                    its reputation for nightlife, it’s no surprise that Ibiza is
                    well established as a hotspot for festivals and large-scale
                    events, and of course there’s no shortage of hotels &
                    resorts to choose from, including our host Hotel Torre Del
                    Mar (did we mention it has its own multi-story conference
                    centre?).
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>

          <div
            className="event-venue bg-blue-caption"
            style={{ height: "350px" }}
          >
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
                      href="https://www.hoteltorredelmar.com/en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hotel torre del mar
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
                    </TabList>
                    <TabPanel tabId="one">
                      <ul className="itineraryList">
                        <li>You arrive (yay!)</li>
                        <li>A delicious welcome dinner</li>
                        <li>
                          Time to get some sleep after a busy evening of
                          mingling
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="two">
                      <ul className="itineraryList">
                        <li>A morning of pre-scheduled meetings</li>
                        <li>
                          Lunch time! A great opportunity to chat with other
                          attendees (and refuel for the afternoon ahead)
                        </li>
                        <li>
                          An afternoon of your chosen networking activities
                        </li>
                        <li>
                          Get dressed up and join us for the networking dinner
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="three">
                      <ul className="itineraryList">
                        <li>Pre-scheduled 1-2-1 meetings in the morning</li>
                        <li>A quick break for lunch</li>
                        <li>
                          A chance to relax and carry on talking during the
                          Social Afternoon or set off on the optional
                          destination discovery tour
                        </li>
                        <li>
                          Get your party shoes on - tonight's closing party is
                          all about delicious food and letting loose on the
                          dancefloor
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="four">
                      <ul className="itineraryList">
                        <li>Your final morning of pre-scheduled meetings</li>
                        <li>
                          Farewell lunch - one last chance for some final
                          networking
                        </li>
                        <li>Departures (boo!)</li>
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
                              3 days of high-quality networking in a popular
                              MICE paradise
                            </li>
                            <li>
                            Up to 40 meetings with buyers looking for independent and boutique hotels, unusual properties and venues
                              of character
                            </li>
                            <li>
                              Limited to only 100 suppliers - this is our most
                              intimate event in the calendar
                            </li>
                            <li>No hard brands</li>
                            <li>
                              Cutting edge AI matchmaking technology to find
                              your best meeting potential
                            </li>
                            <li>
                              Networking activities for extra
                              relationship-building with attending buyers
                            </li>
                            <li>
                              Outstanding networking dinners and social
                              nightlife experiences
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
                            40 meetings with suppliers offering tailor-made services in venues of character
                            </li>
                            <li>
                              An intimate event with a limit of 100 suppliers
                            </li>
                            <li>No hard brands</li>
                            <li>
                              Cutting edge AI matchmaking technology to find
                              your best meeting potential
                            </li>
                            <li>
                              Accommodation, flights and transfers included
                            </li>
                            <li>
                              Breakfast, lunch and exciting networking dinners
                              provided
                            </li>
                            <li>
                              Destination discovery — discover Ibiza's great
                              MICE infrastructure
                            </li>
                            <li>
                              Networking activities — experience Ibiza's top
                              attractions with fellow attendees
                            </li>
                            <li>
                              Glamorous dinners, parties and nightlife
                              experiences
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
                      want your name on <br /> guestlist?{" "}
                      <span className="underlined">
                        hurry - spaces are <br /> strictly limited!
                      </span>{" "}
                      <br />{" "}
                    </h2>
                    <a href="/signup">
                      <span className=" btn btn-secondary white">
                        save me a space
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

export default EuropePrivate2023;
