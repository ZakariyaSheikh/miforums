import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../components/elements/Carousel"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import HeroBanner1920 from "../../assets/images/events/2023/Europe Summer/Europe_Summer_Oslo_Hero_image_1920px.jpg";
import HeroBanner1024 from "../../assets/images/events/2023/Europe Summer/Europe_Summer_Oslo_Hero_image_1024px.jpg";
import HeroBanner766 from "../../assets/images/events/2023/Europe Summer/Europe_Summer_Oslo_Hero_image_766px.jpg";
import HeroBanner320 from "../../assets/images/events/2023/Europe Summer/Europe_Summer_Oslo_Hero_image_320px.jpg";
import CTABanner from "../../assets/images/events/2023/Europe Summer/Europe_Summer_Oslo_CTA_image_1920px.jpg";
import Network from "../../assets/images/events/2023/Europe Summer/Europe_Summer_Oslo_What_to_expect.png";
import Seville from "../../assets/images/events/2023/Europe Summer/Europe_Summer_Oslo_Spotlight.png";
import TestBG from "../../assets/images/events/2023/Europe Summer/oslo_hero.png";
import CaptionPeople from "../../assets/images/venuepanel_characters.png";
import Norway from "../../assets/images/events/partner_logos/Visit Norway.png";
import Clarion from "../../assets/images/events/partner_logos/Clarion_Hotel.png";
import Apriil from "../../assets/images/events/partner_logos/Apriil Event & Congress.png";
import Oslo from "../../assets/images/events/partner_logos/visitoslo.png";
import Flytoget from "../../assets/images/events/partner_logos/Flytoget_logo.png";
import SNO from "../../assets/images/events/partner_logos/sno_logo_hvit_blaa_rgb.png";
import Thon from "../../assets/images/events/partner_logos/Thon_hotels.png";
import Furset from "../../assets/images/events/partner_logos/furset_gruppen.png";
import Opera from "../../assets/images/events/partner_logos/opera_house.jpg";
import Eik from "../../assets/images/events/partner_logos/eik_norg.png";
import Needmusic from "../../assets/images/events/partner_logos/Needmusiclogo.jpg";
import WalletPass from "../../assets/images/events/partner_logos/Wallet_Pass.png";

const EuropeSummer2023 = () => {
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
      Clarion, Norway, Oslo
    ],
    [
      Apriil, Flytoget, SNO, Thon, Furset, Opera, Eik, WalletPass
    ],
    [
      Needmusic
    ]
  ];
 

  
  const links = [
    ['https://www.nordicchoicehotels.no/hotell/norge/oslo/clarion-hotel-the-hub/', 'https://www.visitnorway.fr/', 'https://www.visitoslo.com/'],
    ['https://www.apriil-pco-dmc.no/', 'https://flytoget.no/en/', 'https://snooslo.no/', 'https://www.thonhotels.com/', 'https://www.fursetgruppen.no/', 'https://operaen.no/', 'https://www.eikservering.no/', 'https://www.rengroup.no/'],
    ['https://www.needmusic.no/']
  ];
  const headings = ['gold', 'silver', 'bronze'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Europe Summer, Oslo 2023 | m&i </title>
        <meta
          name="description"
          content="Get great MICE connections and unbeatable social activities, all in one of Europe’s most sustainable cities, Oslo!"
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
                    className="header-section-heading grey"
                    style={{
                      backgroundImage: `url(${TestBG})`,
                    }}
                  >
                    <span className="coral-underlined">
                      create lasting MICE
                      <br /> connections
                    </span>{" "}
                    in
                    <br /> norway's green
                    <br /> capital city.
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
                      <span className=" btn btn-secondary grey">
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
                      m&i Europe Summer, Oslo 2023
                    </h2>
                    <span>
                      25-28 june <br />
                      norway
                    </span>
                    <br />
                    <br />
                    <p>
                      For this Flagship Forum, we’re heading off to one of
                      Europe’s most sustainable cities, Oslo! Our Flagships are
                      never done by half. On top of your pre-scheduled meetings
                      and destination experiences, you can also expect a bigger,
                      bolder atmosphere with a higher number of attendees (which
                      means even more connections to be made) and even more
                      memorable moments.{" "}
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
                      <p>Spotlight on Oslo </p>
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

          <div className="numbers-section eventNumbers grey-bg">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div
                  className="col-lg-12 ml-rg-auto py-4 laptop"
                  style={{ color: "#fff" }}
                >
                  <div className="container">
                    <div className="inNumbers">
                      <h2 className="site-section-heading font-secondary ">
                        <span className="underlined">m&i Europe Summer</span> in
                        numbers.
                      </h2>
                      <ul>
                        <li>
                          <div className="numbers-caption ">
                            <h1 className="eventNumbers blue">3</h1>
                            <p>exciting days</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers blue">40</h1>
                            <p>meetings</p>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="numbers-caption">
                            <h1 className="eventNumbers blue">150</h1>
                            <p>supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers blue">160</h1>
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
                    spotlight on <span className="coral-underlined">oslo</span>
                  </h2>
                  <p
                    style={{ paddingRight: "60px" }}
                    className="mobilePadding-2"
                  >
                    It’s tough to tear your mind away from thoughts of heavy
                    Viking ships, Edvard Munch and majestic, winding fjords; but
                    there’s so much more to discover in Oslo. The city is known
                    for its low carbon footprint, thriving culinary scene,
                    vibrant nightlife and local craftsmanship.
                    <br />
                    <br />
                    But what about the MICE credentials? Oslo has a good range
                    of accommodation options. The city operates 200
                    international flights a day, making it accessible from most
                    of Europe. It’s also easy to explore with plenty of walking
                    routes and green transport options. As for meetings &
                    events, Oslo hosts 50% of Norway’s international meetings
                    and offers state-of-the-art conference and exhibition
                    venues, like the impressive Oslofjord Convention Center.
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
                      href="https://www.nordicchoicehotels.no/hotell/norge/oslo/clarion-hotel-the-hub/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hotel clarion the hub
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
                        day 1
                      </Tab>
                      <Tab tabFor="two" className="eventTabs raven">
                        day 2
                      </Tab>
                      <Tab tabFor="three" className="eventTabs raven">
                        day 3
                      </Tab>
                      <Tab tabFor="four" className="eventTabs raven">
                        departures
                      </Tab>
                    </TabList>
                    <TabPanel tabId="one">
                      <ul className="itineraryList">
                        <li>You arrive (yay!)</li>
                        <li>Refuel with a bit of lunch</li>
                        <li>Opening session </li>
                        <li>Your first set of pre-scheduled meetings </li>
                        <li>Our Opening Night celebration</li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="two">
                      <ul className="itineraryList">
                        <li>
                          Start the day energised with our Rise & Shine wellness
                          session
                        </li>
                        <li>A morning of pre-scheduled meetings</li>
                        <li>
                          Lunch time! A great opportunity to chat with other
                          attendees (and refuel for the afternoon ahead){" "}
                        </li>
                        <li>
                          An afternoon of your chosen networking activities{" "}
                        </li>
                        <li>
                          Get dressed up and join us for a networking evening
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="three">
                      <ul className="itineraryList">
                        <li>
                          Another chance to join a Rise & Shine wellness session
                        </li>
                        <li>Pre-scheduled 1-2-1 meetings in the morning</li>
                        <li>A quick break for lunch </li>
                        <li>
                          A chance to relax and connect during our Networking
                          Afternoon
                        </li>
                        <li>
                          Get your party shoes on - it’s time for a Closing
                          Night Party!
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="four">
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
                              3 days of high-quality networking in a stunning
                              Norwegian city
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
                              Destination discovery — discover Oslo’s MICE
                              infrastructure
                            </li>
                            <li>
                              Networking activities — experience Oslo’s top
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
                      <span className="underlined">are you ready</span> to
                      create new business <br /> connections and unforgettable
                      <br /> memories in oslo, norway?
                    </h2>
                    <a href="/signup">
                      <span className=" btn btn-secondary white">
                        I'm ready
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

export default EuropeSummer2023;
