import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Carousel from "../../components/elements/Carousel"
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import HeroBanner1920 from "../../assets/images/events/2023/Luxe Americas/luxe_cm_hero_1920px.jpg";
import HeroBanner1024 from "../../assets/images/events/2023/Luxe Americas/luxe_cm_hero_1024px.jpg";
import HeroBanner766 from "../../assets/images/events/2023/Luxe Americas/luxe_cm_hero_766px.jpg";
import HeroBanner320 from "../../assets/images/events/2023/Luxe Americas/luxe_cm_hero_320px.jpg";
import CTABanner from "../../assets/images/events/2023/Luxe Americas/luxe_pm_cta_image_1024px.jpg";
import Network from "../../assets/images/events/2023/Luxe Americas/costamujeres_grouped.png";
import Seville from "../../assets/images/events/2023/Luxe Americas/costamujeres_spotlight.png";
import TRS from "../../assets/images/events/partner_logos/TRS_Coral.jpg"
import Palladium from "../../assets/images/events/partner_logos/Palladium_Hotel_Group.jpg"
import GrandPalladium from "../../assets/images/events/partner_logos/Grand_Palladium_Costa_Mujeres.jpg"
import Gimdmc from "../../assets/images/events/partner_logos/gimdmc.png"
import Palace from "../../assets/images/events/partner_logos/palace.png"
// import CityOfDreams from '../../assets/images/events/partner_logos/City_of_Dreams.png';

// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const LuxeAmericas2023 = () => {
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
      TRS, Palladium, GrandPalladium, Gimdmc
    ],
    [Palace],
   
  ];
 
  const links = [
    ['https://www.palladiumhotelgroup.com/en/hotels/mexico/costamujerescancun/grand-palladium-costa-mujeres-resort-spa ', 'https://www.palladiumhotelgroup.com/en ', 'https://www.palladiumhotelgroup.com/en/hotels/mexico/costamujerescancun/grand-palladium-costa-mujeres-resort-spa','https://gimdmc.com/'],
    ['https://meetings.palaceresorts.com']
  ];
  const headings = ['gold','silver']


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Luxe, Costa Mujeres 2023 | m&i </title>
        <meta
          name="description"
          content="Make lasting connections in the luxury MICE industry - meet high-end suppliers and luxury American event planners in Costa Mujeres, Mexico. Apply today."
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
        <div className="event-page luxe">
          <div
            className="sprint-hero-slider loscabos"
            style={{
              backgroundImage: `url(${heroBannerUrl})`,
            }}
          >
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                  <h1 className="header-section-heading white">
                    a new event for
                    <br />
                    <span className="underlined" style={{ fontSize: "50px" }}>
                      high-end incentive
                      <br /> travel and VIP groups
                      <br /> in the Americas.
                    </span>
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
                      <span className=" btn btn-secondary transparentRaven">
                        tell me more
                      </span>
                    </a>
                    <a href="/signup-mi-luxe-2023">
                      <span className=" btn btn-secondary raven">
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
                    m&i Luxe, Costa Mujeres 2023
                    </h2>
                    <span>
                      11-14 december <br /> costa mujeres, mexico
                    </span>
                    <br />
                    {/* <span>
                      paradisus los cabos, member of
                      <br />
                      <a href="https://www.lhw.com/">
                        the leading hotels of the world
                      </a>
                    </span> */}
                    <br />
                    <br />
                    <p>
                    As one of only a handful of luxury-focused events in the industry, the m&i Luxe guestlist is one you’ll
want to be on. This event is designed exclusively for opulent properties and experiential products
with a focus on luxury incentive travel, high-end board meetings and celebratory events. The aim of
m&i Luxe is to introduce key American planners in incentive travel and VIP groups to global leaders in
premium brands and properties, all against the backdrop of a sun-soaked Costa Mujeres. Expect
lasting connections, invaluable 1-2-1 meetings and the chance to experience an unbeatable
programme.
                      <br />
                      <br />
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 ml-rg-auto py-3">
                  <div className="eventNavigation">
                    {/* <img
                      alt={" "}
                      src={LWH}
                      style={{
                        width: "200px",
                        paddingBottom: "10px",
                        paddingTop: "0px",
                      }}
                      className={"partnerLogo"}
                    /> */}
                    <h4 className="site-section-heading font-secondary">
                      Click to jump to:
                    </h4>
                    <a href="#numbers">
                      <p>This event in numbers </p>
                    </a>
                    <a href="#spotlight">
                      <p>Spotlight on Costa Mujeres </p>
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

          <div className="numbers-section eventNumbers raven-bg">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div
                  className="col-lg-12 ml-rg-auto py-4 laptop"
                  style={{ color: "#fff" }}
                >
                  <div className="container">
                    <div className="inNumbers">
                      <h2 className="site-section-heading font-secondary ">
                        <span className="fawn-underlined">
                          m&i Luxe, Costa Mujeres 2023
                        </span>{" "}
                        in numbers...
                      </h2>
                      <ul>
                        <li>
                          <div className="numbers-caption ">
                            <h1 className="eventNumbers coral">3</h1>
                            <p>luxurious days</p>
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
                            <h1 className="eventNumbers coral">50</h1>
                            <p>global supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers coral">55</h1>
                            <p>high-end planners</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="spotlight"></div>
          </div>

          <div className="site-half block" style={{ paddingBottom: "5rem" }}>
            <div className="img-bg-1">
              {" "}
              <img alt={" "} src={Seville} className={"eventDestination"} style={{paddingBottom:'5rem'}}/>
            </div>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-5 ml-lg-auto py-5">
                  <h2 className="site-section-heading font-secondary ">
                    spotlight on <br />
                    <span className="raven-underlined">Costa Mujeres</span>
                  </h2>
                  <p
                    style={{ paddingRight: "60px" }}
                    className="mobilePadding-2"
                  >
                  Away from the buzz of Cancun, you’ll find the picturesque Costa Mujeres with its turquoise waters,
white sand beaches and eclectic mix of Mexican-Caribbean culture. Experience a coastline that
stretches for miles, bathe in endless sunshine, and test out its many exclusive golf courses complete
with beautiful backdrops.
                    <br />
                    <br />
                    Its sublime location also makes it a perfect pick for MICE events, with Cancun International Airport
just 30 minutes drive away, a range of impressive 5-star resorts and boutique properties with in-
house meeting facilities and fine dining restaurants.
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>

          <div className="event-venue fawn">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-11 ml-lg-auto py-5 ">
                  <h3
                    className="site-section-heading font-secondary "
                    style={{ textDecoration: "underline" }}
                  >
                    meeting & accommodation venue
                  </h3>
                  <h2 style={{ lineHeight: "45px" }}>
                    <a
                      className="venueLink"
                      href="https://www.palladiumhotelgroup.com/en/hotels/mexico/costamujerescancun/trs-coral-hotel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                   TRS Coral Hotel
                    </a>
                  </h2>

                  <hr />

<h2 style={{ lineHeight: "45px" }}>
  <a
    className="venueLink"
    href="https://www.palladiumhotelgroup.com/en/hotels/mexico/costamujerescancun/grand-palladium-costa-mujeres-resort-spa "
    target="_blank"
    rel="noopener noreferrer"
  >
   Grand Palladium Costa Mujeres Resort & Spa
  </a>
  </h2>
                  {/* <span>
                    member of{" "}
                    <a href="https://www.lhw.com/">
                      the leading hotels of the world
                    </a>
                  </span> */}
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
                    <span className="underlined">here's a sample</span> of{" "}
                    <br />
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
                        <li>You arrive</li>
                        <li>Our Opening Night soirée </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="two">
                      <ul className="itineraryList">
                        <li>Your first set of pre-scheduled meetings</li>
                        <li>Stop for a bite of lunch</li>
                        <li>
                          An afternoon of your chosen networking activities
                        </li>
                        <li>Smarten up and join us for a networking evening</li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="three">
                      <ul className="itineraryList">
                        <li>Pre-scheduled 1-2-1 meetings in the morning</li>
                        <li>
                          Lunch time – the perfect opportunity to socialise with
                          other attendees
                        </li>
                        <li>
                          A chance to relax and carry on talking during the
                          Social Afternoon or set off on the optional
                          destination discovery tour
                        </li>
                        <li>
                        It's time to let your hair down for our Farewell Evening
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="four">
                      <ul className="itineraryList">
                        <li>
                          Your final morning of pre-scheduled 1-2-1 meetings
                        </li>
                        <li>Stop for a bite of lunch</li>
                        <li> It’s time to depart </li>
                        <li>Look ahead to your next m&i event</li>
                      </ul>
                    </TabPanel>
                  </Tabs>
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
                <div className="anchorScroll" id="packages"></div>
                <div className="col-lg-5 ml-lg-auto py-5 ">
                  <h2 className="site-section-heading font-secondary">
                    <span className="raven-underlined">
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
                              30 x pre-scheduled meetings with buyers organising
                              high-end events, VIP groups and luxury events
                            </li>
                            <li>
                              Invitations extended to buyers organising high-end
                              events, VIP groups and luxury events
                            </li>
                            <li>
                              Limited supplier spaces for enhanced
                              connection-building
                            </li>
                            <li>
                              Cutting-edge AI matchmaking technology to find
                              your best meeting potential
                            </li>
                            <li>
                              Incredible destination experiences for optimum
                              networking
                            </li>
                            <li>
                              Exceptional dinners and glamorous nightlife
                              experiences
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
                      <div class="accordion__content accordion__content--large">
                        {/* <h2 class="accordion__header"></h2> */}
                        <p class="accordion__body">
                          {" "}
                          <ul className="packages">
                            <li>
                              30 x pre-scheduled meetings with only 5* and 5*+
                              experiential products, Luxury DMCs and
                              destinations <br />
                              exclusively oriented towards the MICE luxury
                              segment
                            </li>
                            <li>
                              Truly exclusive opportunities to discover the best
                              of Costa Mujeres
                            </li>
                            <li>
                              A luxury programme of high-end activities and
                              experiences
                            </li>
                            <li>
                              Cutting edge AI matchmaking technology to find
                              your best meeting potential
                            </li>
                            <li>
                              Accommodation, flights and transfers included
                            </li>
                            <li>
                              Breakfast, lunch and outstanding dinners provided
                            </li>
                            <li>
                              Glamorous parties and nightlife experiences{" "}
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
                  <br/>
                  <div className="cta-content">
                    <h2>join m&i's most exclusive guestlist yet...</h2>
                    <a href="/signup-mi-luxe-2023">
                      <span className=" btn btn-secondary white">sign up</span>
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

          {/* <div className="site-half partnerSection">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                  <h3 className="site-section-heading font-secondary mobilePadding">
                    our partners
                  </h3>

                
                                <a href='https://wow.pt/?gclid=EAIaIQobChMIpNXqvJbu9wIVEb_tCh06pgCFEAAYASAAEgLKH_D_BwE'>
                                    <img
                                        alt={' '}
                                        src={WOW}
                                        className={'partnerLogo'}
                                    />
                                </a> 
                </div>
              </div>
            </div>
          </div> */}

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

export default LuxeAmericas2023;
