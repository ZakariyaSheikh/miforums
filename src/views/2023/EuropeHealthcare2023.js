import React, { useState, useEffect } from "react";
import Carousel from "../../components/elements/Carousel"
import { Helmet } from "react-helmet";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import HeroBanner1920 from "../../assets/images/events/2023/Europe Healthcare/Healthcare_Europe_The_Hague_Hero_image_1920px.jpg";
import HeroBanner1024 from "../../assets/images/events/2023/Europe Healthcare/Healthcare_Europe_The_Hague_Hero_image_1024px.jpg";
import HeroBanner766 from "../../assets/images/events/2023/Europe Healthcare/Healthcare_Europe_The_Hague_Hero_image_766px.jpg";
import HeroBanner320 from "../../assets/images/events/2023/Europe Healthcare/Healthcare_Europe_The_Hague_Hero_image_320px.jpg";
import CTABanner from "../../assets/images/events/2023/Europe Healthcare/Healthcare_Europe_The_Hague_CTA_image_1920px.jpg";
import Network from "../../assets/images/events/2023/Europe Healthcare/Healthcare_Europe_The_Hague_What_to_expect.png";
import Seville from "../../assets/images/events/2023/Europe Healthcare/Healthcare_Europe_The_Hague_Spotlight.png";
import TestBG from "../../assets/images/events/2023/Europe Healthcare/thehague_hero.png";
import LRDH from "../../assets/images/events/2023/Europe Healthcare/LRDH.JPG";
import MARIOTT from "../../assets/images/events/2023/Europe Healthcare/MARIOTT.jpg";
import TheWorldForum from "../../assets/images/events/2023/Europe Healthcare/The_World_Forum.jpg";
import TheHagueConvention from "../../assets/images/events/partner_logos/Sign_Off_Impact_Conference_CMYK.jpg";
import House from "../../assets/images/events/partner_logos/houseoflords.jpg";
import Louwman from "../../assets/images/events/partner_logos/louwman.jpg";
import AFKL from "../../assets/images/events/partner_logos/AFKL-GM-E-Official-Carrier-logo.png";
import AFKLGM from "../../assets/images/events/partner_logos/AFKL-GM-E-Logo.png"
import ThreeSixty from "../../assets/images/events/partner_logos/3sixty.png"
import HealthcareVenues from "../../assets/images/events/partner_logos/healthcarevenues.jpg"
import CoastalGym from "../../assets/images/events/partner_logos/coastalgym.png"
import FirstService from "../../assets/images/events/partner_logos/firstservice.png"
import Gadenhaag from "../../assets/images/events/partner_logos/gadenhaag.png"
import Postillion from "../../assets/images/events/partner_logos/logo-ph-oranje-rgb.png"



// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const EuropeHealthcare2023 = () => {
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
      TheHagueConvention
    ],
    [
      TheWorldForum, MARIOTT, LRDH, Louwman, House, ThreeSixty, HealthcareVenues
    ],
    [
      AFKLGM, CoastalGym, FirstService, Gadenhaag, Postillion
    ],
  ];
 
  const links = [
    ['https://thehague.com/conventionbureau/en'],
    ['https://www.worldforum.nl/en/', 'https://www.marriott.com/en-us/hotels/rtmmc-the-hague-marriott-hotel/overview/', 'https://www.leonardo-hotels.com/the-hague/leonardo-royal-hotel-den-haag-promenade/', 'https://www.louwmanmuseum.nl/en/', 'https://houseoflords.nl/','https://3sixtyeventconsulting.com/', 'https://www.healthcare-venues.com/'],
    ['https://wwws.airfrance.fr/en/information/offres/corporate/congres-seminaires-salons', 'https://coastalgym.nl/', 'https://www.firstservice.nl/', 'https://dagjedenhaag.nl/', 'https://www.postillionhotels.com/en-gb'],
  ];
  const headings = ['gold', 'silver', 'bronze'];

  

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Healthcare, The Hague 2023 | m&i </title>
        <meta
          name="description"
          content="This MICE healthcare event will introduce you to healthcare certified venues and specialist buyers over 2 days. Sign up today. "
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
                    className="header-section-heading coral"
                    style={{
                      backgroundImage: `url(${TestBG})`,
                    }}
                  >
                    one dutch city, two <br /> days,{" "}
                    <span className="yellow-underlined">
                      hundreds of <br /> MICE healthcare
                      <br /> connections.
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Sticky>
            <div className="event-under-banner">
              <div className="container">
                <div className="row no-gutters no-gutters align-items-stretch">
                  <div className=" ml-rg-auto event-sticky-text">
                    <h3>love the sound of this event?</h3>
                  </div>
                  <div className="ml-rg-auto event-buttons flex-wrap ">
                    <a href="/tell-me-more">
                      <span className=" btn btn-secondary transparentCoral">
                        tell me more
                      </span>
                    </a>
                    <a href="/signup">
                      <span className=" btn btn-secondary coral">
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
                      m&i Healthcare, The Hague 2023
                    </h2>
                    <span>
                      6-8 june <br />
                      netherlands
                    </span>
                    <br />
                    <br />
                    <p>
                      Want to plan events in certified healthcare venues?
                      Interested in providing your event space to medical
                      industry clients? You need m&i Healthcare! Simply put,
                      this is a specialist event that provides enhanced
                      educational content and connects suppliers and buyers over
                      two healthcare-focused days in the Netherlands’ major city
                      - The Hague!{" "}
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
                      <p>Spotlight on The Hague </p>
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

          <div className="numbers-section eventNumbers coral-bg">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-4 laptop">
                  <div className="container">
                    <div className="inNumbers">
                      <h2 className="site-section-heading font-secondary ">
                        <span className="underlined">
                          m&i Healthcare Europe
                        </span>{" "}
                        in numbers...
                      </h2>
                      <ul>
                        <li>
                          <div className="numbers-caption ">
                            <h1 className="eventNumbers white">2</h1>
                            <p>exciting days</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers white">25</h1>
                            <p>meetings</p>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="numbers-caption">
                            <h1 className="eventNumbers white">120</h1>
                            <p>supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers white">130</h1>
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
                    <span className="blue-underlined">the hague</span>
                  </h2>
                  <p
                    style={{ paddingRight: "60px" }}
                    className="mobilePadding-2"
                  >
                    Away from the grand historical and political buildings,
                    museums, eateries and high-end shops, you might be surprised
                    to find Scheveningen, the most well-known seaside resort on
                    the Dutch coast. You’ll certainly find it tough to name
                    another major city with sun, sea and watersports right on
                    its doorstep!
                    <br />
                    <br />
                    And what about MICE credentials? The city is just 30 minutes
                    from two international airports. As for hosting events, the
                    city boasts 64 venues, including the World Forum convention
                    centre, where your m&i Healthcare meetings will take place.
                    <br />
                    <br />
                    The Hague is also home to a high volume of pioneering
                    medical tech companies, medical start-ups, and a wide
                    network of life sciences and health & technology
                    organisations, which makes it the perfect destination for
                    m&i Healthcare 2023.
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>

          <div className="event-venue yellow-bg">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-6 ml-lg-auto py-5 ">
                  <h3
                    className="site-section-heading font-secondary "
                    style={{ textDecoration: "underline" }}
                  >
                    meeting venue
                  </h3>
                  <h2 style={{ lineHeight: "45px" }}>
                    <a
                      className="venueLink"
                      href="https://www.worldforum.nl/en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      the world forum
                    </a>
                  </h2>
                </div>

                <div className="col-lg-5 ml-lg-auto py-5 ">
                  <h3
                    className="site-section-heading font-secondary "
                    style={{ textDecoration: "underline" }}
                  >
                    accommodation venues
                  </h3>
                  <h2 className="accommodation" style={{ lineHeight: "45px" }}>
                    <a
                      className="venueLink"
                      href="https://www.marriott.com/en-us/hotels/rtmmc-the-hague-marriott-hotel/overview/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      the hague marriott hotel
                    </a>
                  </h2>
                  <hr />

                  <h2 style={{ lineHeight: "45px" }}>
                    <a
                      className="venueLink"
                      href="https://www.leonardo-hotels.com/the-hague/leonardo-royal-hotel-den-haag-promenade"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      leonardo royal hotel den haag promenade
                    </a>
                  </h2>
                  {/* <hr />

                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.all.accor.com/hotel/5389/index.en.shtml'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        novotel den haag world forum
                                        </a>
                                        <div className="anchorScroll"  id="itinerary"></div>
                                </h2> */}
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
                        <li>The event begins with a welcome reception</li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="two">
                      <ul className="itineraryList">
                        <li>A morning of meetings and workshops</li>
                        <li>Time for lunch - hope you’re hungry!</li>
                        <li>Panel discussion with industry specialists</li>
                        <li>
                          Option 1: Get to know the city's potential for
                          planning healthcare events
                        </li>
                        <li>
                          Option 2: Get to know other attendees outside during
                          networking activities
                        </li>
                        <li>The closing dinner</li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="three">
                      <ul className="itineraryList">
                        <li>
                          {" "}
                          Another great morning of meetings and workshops
                        </li>
                        <li> A farewell lunch for everyone to enjoy</li>
                        <li>
                          Optional peer-to-peer discussion session for buyers
                        </li>
                        <li>Departures (until next time!)</li>
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
                              2 days of high-quality networking in a popular,
                              healthcare-relevant city
                            </li>
                            <li>
                              25 guaranteed 1-2-1 meetings with healthcare
                              specific buyers
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
                              Venue accreditation and specialist delegate
                              training provided via our event partner,
                              HealthcareVenues
                            </li>
                            <li>
                              Educational sessions from key industry speakers
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
                              <a href="https://www.mi-forums.com/supplier-experience">
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
                              2 days of high-quality networking in one of the
                              world’s top convention destinations
                            </li>
                            <li>
                              1-2-1 meetings with healthcare-relevant suppliers
                            </li>
                            <li>
                              Cutting edge AI matchmaking technology to find
                              your best meeting potential
                            </li>
                            <li>
                              Bespoke buyer package, including accommodation and
                              transfers, as well as airfare/train credits.{" "}
                            </li>
                            <li>
                              Breakfast, lunch and exciting networking dinners
                              provided
                            </li>
                            <li>
                              Educational sessions from key industry speakers
                            </li>

                            <li>
                              Destination discovery — discover The Hague's great
                              MICE infrastructure
                            </li>
                            <li>
                              Experience what The Hague has to offer with fellow
                              attendees
                            </li>
                            <li>
                              Networking activities — experience The Hague's top
                              attractions with fellow attendees
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
                              <a href="https://www.mi-forums.com/buyer-experience">
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
                      experience the hague and
                      <br />{" "}
                      <span className="underlined">
                        make top MICE connections in <br /> just two fantastic
                        days!
                      </span>{" "}
                      <br />{" "}
                    </h2>
                    <a href="/signup">
                      <span className=" btn btn-secondary white">
                        I want to attend
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

export default EuropeHealthcare2023;
