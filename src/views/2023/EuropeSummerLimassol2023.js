import React, { useState, useEffect } from "react";
import Carousel from "../../components/elements/Carousel"
import { Helmet } from "react-helmet";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import HeroBanner1920 from "../../assets/images/events/2023/Europe Autumn Cyprus/Europe_Autumn_Limassol_Hero_image_1920px.jpg";
import HeroBanner1024 from "../../assets/images/events/2023/Europe Autumn Cyprus/Europe_Autumn_Limassol_Hero_image_1024px.jpg";
import HeroBanner766 from "../../assets/images/events/2023/Europe Autumn Cyprus/Europe_Autumn_Limassol_Hero_image_766px.jpg";
import HeroBanner320 from "../../assets/images/events/2023/Europe Autumn Cyprus/Europe_Autumn_Limassol_Hero_image_320px.jpg";
import CTABanner from "../../assets/images/events/2023/Europe Autumn Cyprus/Europe_Autumn_Limassol_CTA_image_1920px.jpg";
import Network from "../../assets/images/events/2023/Europe Autumn Cyprus/Europe_Autumn_Limassol_What_to_expect.png";
import Seville from "../../assets/images/events/2023/Europe Autumn Cyprus/Europe_Autumn_Limassol_Spotlight.png";
import TestBG from "../../assets/images/events/2023/Europe Autumn Cyprus/hero_shape_Limassol.png";
import CaptionPeople from "../../assets/images/events/americas_2021/conversational_characters.svg";
import CityOfDreams from "../../assets/images/events/2023/Europe Autumn Cyprus/COD.jpg";
import CyprusConvention from "../../assets/images/events/partner_logos/cyprusconvention.png"
import CyprusConference from "../../assets/images/events/partner_logos/cyprusconference.png"
import Sassy from "../../assets/images/events/partner_logos/Sassy Events.png"
import CIMA from "../../assets/images/events/partner_logos/CIMA.png"
import Thanos from "../../assets/images/events/partner_logos/thanoshotels.jpg"
import Fourseasons from "../../assets/images/events/partner_logos/fourseasons.png"
import Redcross from "../../assets/images/events/partner_logos/redcrosslogo.png"


// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const EuropeSummerLimassol2023 = () => {
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
      CityOfDreams, CIMA, CyprusConvention, CyprusConference, Sassy
    ],
    [
      Redcross
    ],
    [
      Fourseasons, Thanos
    ],
  ];
 
  const links = [
    ['https://www.cityofdreamsmed.com.cy/en', 'https://cimacyprus.com/', 'https://www.visitcyprus.com/index.php/en/', 'https://www.visitcyprus.com/index.php/en/', 'https://sassydmc.com/'],
    ['https://www.redcross.org.cy/en/home'],
    ['https://eventsinlimassol.com/', 'https://www.thanoshotels.com/'],
  ];
  const headings = ['gold', 'charitable partner', 'silver',];



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Europe Summer, Limassol 2023| m&i </title>
        <meta
          name="description"
          content="Global suppliers meet UK & European buyers at this unmissable Flagship MICE Forum. Join us in sunny Limassol and sign up now."
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
                    connect in <br />{" "}
                    <span className="blue-underlined">
                      europe's first <br /> integrated luxury
                      <br /> resort
                    </span>{" "}
                    in cyprus.
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
                      m&i Europe Summer, Limassol 2023
                    </h2>
                    <span>
                      30 aug - 2 sep <br />
                      cyprus
                    </span>
                    <br />
                    <br />
                    <p>
                      Better brush up on your Syrtos* because for this Flagship
                      Forum, we’ll be whisking you away to Limassol, Cyprus!
                      Over the course of four days, you’ll have 40 pre-scheduled
                      meetings with UK & European buyers and global suppliers, and
                      get to know the delights of Limassol through our unique
                      programme of destination discovery and networking
                      experiences. Expect something big, bold and full of
                      Mediterranean fun.
                      <br />
                      <br />
                      <span className="finePrint">
                        *that’s a traditional Cypriot folk dance, by the way!
                      </span>{" "}
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
                      <p>Spotlight on Limassol </p>
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
                        <span className="underlined">
                          m&i Europe Summer, Limassol
                        </span>{" "}
                        in numbers.
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
                    <span className="blue-underlined">limassol</span>
                  </h2>
                  <p
                    style={{ paddingRight: "60px" }}
                    className="mobilePadding-2"
                  >
                    As one of the world’s up-and-coming cities, Limassol (also
                    known as Lemesos) is the perfect place to host an m&i
                    Flagship Forum. Full of hidden historical gems like Lemesos
                    Castle, this Cypriot destination is also the country’s
                    business hub, which means plenty of vibrant cafes,
                    restaurants and shops. Limassol is situated right on Cyprus’
                    southern coast and boasts a swanky marina, along with trendy
                    beaches and beach clubs.
                    <br />
                    <br />
                    As for MICE credentials? Cyprus has two international
                    airports and it only takes 3 hours to drive across the whole
                    island from east to west - this makes it the perfect
                    destination for easy access and exploration. Did we mention
                    that the island gets 300 days of sunshine a year? Those are
                    some pretty good odds for event planners!
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>

          <div className="event-venue blue-bg" style={{ height: "350px" }}>
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
                      className="venueLink"
                      href="https://www.cityofdreamsmed.com.cy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      city of dreams
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
                              3 days of high-quality networking in a stunning
                              Cypriot city
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
                              Destination discovery — discover Limassol's MICE
                              infrastructure
                            </li>
                            <li>
                              Networking activities — experience Limassol's top
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
                      be the first to discover
                      <br />{" "}
                      <span className="underlined">
                        cyprus's brand new 5-star resort.
                      </span>{" "}
                      <br />{" "}
                    </h2>
                    <a href="/signup">
                      <span className=" btn btn-secondary white">
                        save me a spot
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

export default EuropeSummerLimassol2023;
