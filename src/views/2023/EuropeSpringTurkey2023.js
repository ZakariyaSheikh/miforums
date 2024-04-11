import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Carousel from "../../components/elements/Carousel"
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import HeroBanner1920 from "../../assets/images/events/2023/Europe Spring/europespring_istanbul_heroimage_1920px.jpg";
import HeroBanner1024 from "../../assets/images/events/2023/Europe Spring/europespring_istanbul_heroimage_1024px.jpg";
import HeroBanner766 from "../../assets/images/events/2023/Europe Spring/europespring_istanbul_heroimage_766px.jpg";
import HeroBanner320 from "../../assets/images/events/2023/Europe Spring/europespring_istanbul_heroimage_320px.jpg";
import CTABanner from "../../assets/images/events/2023/Europe Spring/europespring_istanbul_ctaimage_1920px.jpg";
import Network from "../../assets/images/events/2023/Europe Spring/europespring2023_istanbul_what_to_expect.png";
import Seville from "../../assets/images/events/2023/Europe Spring/europespring2023_istanbul_spotlight.jpg";
import TestBG from "../../assets/images/events/2023/Europe Spring/hero_shape.png";
import CaptionPeople from "../../assets/images/venuepanel_characters.png";
import Hilton from "../../assets/images/events/partner_logos/Hilton Istanbul Bomonti Hotel Conference Center.jpg";
import Airlines from "../../assets/images/events/partner_logos/Turkish Airlines.jpg";
import Raffles from "../../assets/images/events/partner_logos/Raffles.jpg";
import Spectrum from "../../assets/images/events/partner_logos/Spectrum Event Technologies - LOGO.jpg"
import CVKHotels from "../../assets/images/events/partner_logos/cvkhotels.png"
import Meptur from "../../assets/images/events/partner_logos/meptur.png"
import Concept from "../../assets/images/events/partner_logos/concept.png"
import MITogether from "../../assets/images/events/partner_logos/MITogether.jpg"
import GoTurkiye from "../../assets/images/events/partner_logos/GoTurkiye_red.jpg"
import ODSlogo from "../../assets/images/events/partner_logos/ODSlogo.jpg"
import Tekser from "../../assets/images/events/partner_logos/Tekser_Logo.jpg"
import Binbirdirek from "../../assets/images/events/partner_logos/Binbirdirek_Sarnici.jpg"
import Divan from "../../assets/images/events/partner_logos/Divan.png"
import SiteLogo from "../../assets/images/events/partner_logos/site_logo.png"
import Izzet from "../../assets/images/events/partner_logos/izzet.png"
import Elif from "../../assets/images/events/partner_logos/elifceorganizasyon.png"
import ATYEvents from "../../assets/images/events/partner_logos/ATY_Events.jpg"

// import CityOfDreams from '../../assets/images/events/partner_logos/City_of_Dreams.png';

// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const EuropeSpringTurkey2023 = () => {

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
      Hilton,
      Tekser,
      ODSlogo
    ],
    [
      Binbirdirek, Concept, CVKHotels, Divan, Meptur, Raffles
    ],
    [
      GoTurkiye, Spectrum, Airlines, Izzet, Elif, ATYEvents
    ],
  ];
 
  const links = [
    ['https://www.hilton.com/en/hotels/istbhhi-hilton-istanbul-bomonti-hotel-and-conference-center', 'https://www.tekser.com/', 'https://www.ods.com.tr/'],
    ['https://www.binbirdirek.com.tr/', 'https://conceptteam.org/', 'https://www.cvkhotelsandresorts.com/park-bosphorus-hotel-istanbul', 'https://www.divan.com.tr/toplanti-davet/divan-kurucesme', 'https://www.meptur.com.tr/', 'https://www.rafflesistanbul.com/'],
    ['https://goturkiye.com/','https://www.spectrum.web.tr/','https://www.turkishairlines.com/', 'http://www.izzetyakar.com/', 'https://elifceorganizasyon.com/', 'http://www.aty.com.tr/'],
  ];
  const headings = ['gold', 'silver', 'bronze'];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Europe Spring, Istanbul 2023 | m&i</title>
        <meta
          name="description"
          content="Grow your MICE network at our 3-day Flagship Forum in Istanbul, Türkiye. Register your interest today."
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
                <div className="col-lg-12 ml-rg-auto py-5">
                  <h1
                    className="header-section-heading blush raven"
                    style={{
                      backgroundImage: `url(${TestBG})`,
                    }}
                  >
                    <span className="coral-underlined">
                      discover türkiye's <br /> MICE delights{" "}
                    </span>{" "}
                    in
                    <br /> this ancient city
                    <br />
                    of wonders.
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
                  <div className="ml-rg-auto event-buttons flex-wrap">
                    <a href="/tell-me-more">
                      <span className=" btn btn-secondary transparentBlush">
                        tell me more
                      </span>
                    </a>
                    <a href="/signup">
                      <span className=" btn btn-secondary blush">
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
                      m&i Europe Spring, Istanbul 2023
                    </h2>
                    <span>
                      16-19 apr <br /> türkiye
                    </span>
                    <br />
                    <br />
                    <p>
                      For this edition of m&i Europe Spring, we’re off to
                      Türkiye's largest city, Istanbul. As a Flagship Forum, you
                      can expect 40 pre-scheduled meetings with your best buyer
                      and supplier matches, plus some truly unique Turkish
                      networking activities designed to maximise your
                      connections and give you more business leads than ever!
                      <br />
                      <br />
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
                      <p>Spotlight on Istanbul </p>
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

          <div className="numbers-section eventNumbers blush-bg">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div
                  className="col-lg-12 ml-rg-auto py-4 laptop"
                  style={{ color: "#fff" }}
                >
                  <div className="container">
                    <div className="inNumbers">
                      <h2 className="site-section-heading font-secondary ">
                        <span className="underlined">m&i Europe Spring</span> in
                        numbers.
                      </h2>
                      <ul>
                        <li>
                          <div className="numbers-caption ">
                            <h1 className="eventNumbers coral">3</h1>
                            <p>exciting days</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers coral">40</h1>
                            <p>meetings</p>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="numbers-caption">
                            <h1 className="eventNumbers coral">150</h1>
                            <p>supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers coral">160</h1>
                            <p>UK & european buyers</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="anchorScroll" id="spotlight"></div>
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
                    spotlight on{" "}
                    <span className="blue-underlined">istanbul</span>
                  </h2>
                  <p
                    style={{ paddingRight: "60px" }}
                    className="mobilePadding-2"
                  >
                    East meets West in this major Turkish city. Steeped in
                    ancient history, Istanbul is full to the brim with reminders
                    of bygone eras, including art and architecture left behind
                    by the Greeks, Romans, Venetians, and Ottomans.
                    <br />
                    <br />
                    As for Meetings & Events, Istanbul is home to no less than
                    seven convention centres and three exhibition centres, with
                    additional options for hosting events in some historic
                    venues around the city. There are 112,000 beds and more than
                    200 4 & 5 star hotels to choose from. Plus, with two
                    international airports, Istanbul is one of the biggest
                    travel hubs for connecting Europe to the Middle-East, Asia,
                    and Africa.
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>

          <div
            className="event-venue coral-bg"
            style={{ height: "350px", marginTop: "5rem" }}
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
                  <a
                   className='venueLink'
                   rel='noopener noreferrer'
                   href="https://www.hilton.com/en/hotels/istbhhi-hilton-istanbul-bomonti-hotel-and-conference-center">
                  <h2 style={{ lineHeight: "45px", color: "#fff" }}>
                  Hilton Bomonti Hotel & Conference Centre
                  </h2></a>
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
                              3 days of high-quality networking in a stunning
                              Turkish city
                            </li>
                            <li>
                              40 guaranteed 1-2-1 meetings with vetted key
                              UK & European buyers
                            </li>
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
                              ? see <a href="/how-it-works">how it works</a>
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
                              1-2-1 meetings with high-quality global suppliers
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
                              Breakfast, lunch and exciting networking dinners
                              provided
                            </li>
                            <li>
                              Destination discovery — discover Istanbul’s MICE
                              infrastructure
                            </li>
                            <li>
                              Networking activities — experience Istanbul’s top
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
                              ? see <a href="/how-it-works">how it works</a>
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
                      history, culture, high tech meetings
                      <br /> unmissable memories, and exciting
                      <br /> partnerships.{" "}
                      <span className="underlined">
                        are you in?
                      </span> <br />{" "}
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

                  <h3 className="site-section-heading font-secondary">
                    industry partner
                  </h3>
                  <a href="https://siteglobal.com/
">
                    <img
                      alt={" "}
                      src={SiteLogo}
                      style={{ width: "150px" }}
                      className={"partnerLogo"}
                    />
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
      </div>
    </>
  );
};

export default EuropeSpringTurkey2023;
