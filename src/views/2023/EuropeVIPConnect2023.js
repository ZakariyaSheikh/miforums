import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import HeroBanner1920 from "../../assets/images/events/2023/Europe VIP Connect/VIP_Connect_Europe_St_Moritz_Hero_image_1920px.jpg";
import HeroBanner1024 from "../../assets/images/events/2023/Europe VIP Connect/VIP_Connect_Europe_St_Moritz_Hero_image_1920px.jpg";
import HeroBanner766 from "../../assets/images/events/2023/Europe VIP Connect/VIP_Connect_Europe_St_Moritz_Hero_image_1920px.jpg";
import HeroBanner320 from "../../assets/images/events/2023/Europe VIP Connect/VIP_Connect_Europe_St_Moritz_Hero_image_1920px.jpg";
import CTABanner from "../../assets/images/events/2023/Europe VIP Connect/VIP_Connect_Europe_St_Moritz_CTA_image_1920px.jpg";
import Network from "../../assets/images/events/2023/Europe VIP Connect/VIP_Connect_Europe_St_Moritz_What_to_expect.png";
import Seville from "../../assets/images/events/2023/Europe VIP Connect/VIP_Connect_Europe_St_Moritz_Spotlight.png";

// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const EuropeVIPConnect2023 = () => {
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i VIP Connect Europe 2023, st moritz | m&i </title>
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
                <div className="col-lg-12 ml-rg-auto py-5">
                  <h1 className="header-section-heading blush">
                    <span className="blue-underlined">
                      breathe in the fresh <br /> mountain air
                    </span>{" "}
                    with
                    <br /> some of the industry's
                    <br /> biggest major players
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
                      m&i VIP Connect Europe 2023
                    </h2>
                    <span>
                      17-20 september <br />
                      st moritz, switzerland
                    </span>
                    <br />
                    <br />
                    <p>
                      A very VIP destination for our very VIP guests! St Moritz
                      is famous for its luxurious, mountainous surroundings.
                      Throughout this strictly exclusive m&i Forum, we’ll be
                      bringing you together with the industry’s finest buyers
                      and suppliers for 3 days of elite networking. We’re
                      talking the real decision makers and senior leaders. If
                      invited to attend this event, you can expect unique,
                      high-end Swiss experiences and top-tier meetings in one of
                      the world’s most ritzy mountain escapes.{" "}
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
                      <p>Spotlight on St Moritz </p>
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
                          m&i VIP Connect Europe
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
                            <h1 className="eventNumbers coral">30</h1>
                            <p>meetings</p>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="numbers-caption">
                            <h1 className="eventNumbers coral">80</h1>
                            <p>supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers coral">90</h1>
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
                    <span className="blue-underlined">st moritz</span>
                  </h2>
                  <p
                    style={{ paddingRight: "60px" }}
                    className="mobilePadding-2"
                  >
                    Large-scale events are certainly no problem in the glamorous
                    resort town of St Moritz, having hosted the winter olympics
                    twice already, along with multiple festivals and
                    conferences. Accommodation is high-end, providing a boujee,
                    picture-perfect stay. And as for getting there? With such
                    close proximity to the Italian border, this Swiss town is
                    easily accessible from five different airports (Lugano and
                    Zurich in Switzerland and three more in Milan).
                    <br />
                    <br />
                    So, how about the scenery? It doesn’t get much more
                    breathtaking than the Alpine surroundings of St Moritz with
                    skiing and winter sports in the colder months and stunning
                    forest hikes in summer.
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>

          <div className="event-venue blue-bg">
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
                      href="https://www.laudinella.ch/hotel-reine-victoria/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      laudinella and reine victoria
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
                      href="https://www.kempinski.com/en/st-moritz/grand-hotel-des-bains/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      grand hotel des bains kempsinki st. moritz
                    </a>
                  </h2>
                  <hr />

                  <h2 style={{ lineHeight: "45px" }}>
                    <a
                      className="venueLink"
                      href="https://www.laudinella.ch/hotel-reine-victoria"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hotel reine victoria
                    </a>
                  </h2>
                  <hr />
                  <div className="anchorScroll" id="itinerary"></div>
                  <h2 style={{ lineHeight: "45px" }}>
                    <a
                      className="venueLink"
                      href="https://www.laudinella.ch/en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hotel laudinella st moritz
                    </a>
                  </h2>
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
                              Portuguese city
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
                              3 days of high-quality networking in a stunning
                              Portuguese city
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
                      this event is strictly invitation
                      <br /> only. think you should be there?
                      <br />{" "}
                      <span className="underlined">
                        apply for an invitation below.
                      </span>{" "}
                      <br />{" "}
                    </h2>
                    <a href="/signup">
                      <span className=" btn btn-secondary white">
                        apply for an invite
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
                  <h3 className="site-section-heading font-secondary mobilePadding">
                    our partners
                  </h3>

                  {/* <a href='https://www.visitportugal.com/en/destinos/porto-e-norte'>
                                    <img
                                        alt={' '}
                                        src={Turismo}
                                        className={'partnerLogo'}
                                    />
                                </a> */}

                  {/* <a href='https://www.portocvb.com/'>
                                    <img
                                        alt={' '}
                                        src={PortoCVB}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.marriott.co.uk/hotels/travel/oposi-sheraton-porto-hotel-and-spa/'>
                                    <img
                                        alt={' '}
                                        src={SheratonLogo}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a href='https://www.editoryhotels.com/porto-palacio/'>
                                    <img
                                        alt={' '}
                                        src={PortoLogo}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a href='https://www.ihg.com/crowneplaza/hotels/gb/en/porto/opocp/hoteldetail'>
                                    <img
                                        alt={' '}
                                        src={Crowne}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.ccalfandegaporto.com/en/'>
                                    <img
                                        alt={' '}
                                        src={Alfandega}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.leading.pt/'>
                                    <img
                                        alt={' '}
                                        src={Leading}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.apdl.pt/en_US/terminal-passageiros-sul'>
                                    <img
                                        alt={' '}
                                        src={Terminal}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://barons-hall.com/?utm_source=Google&utm_medium=Organic&utm_campaign=GMB'>
                                    <img
                                        alt={' '}
                                        src={BaronsHall}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://palaciodabolsa.com/'>
                                    <img
                                        alt={' '}
                                        src={Tipos}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://wow.pt/?gclid=EAIaIQobChMIpNXqvJbu9wIVEb_tCh06pgCFEAAYASAAEgLKH_D_BwE'>
                                    <img
                                        alt={' '}
                                        src={WOW}
                                        className={'partnerLogo'}
                                    />
                                </a> */}
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

export default EuropeVIPConnect2023;
