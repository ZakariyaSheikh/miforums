import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../components/elements/Carousel"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import HeroBanner1920 from "../../assets/images/events/2023/Luxe Europe/luxe_pm_hero_image_1920px.jpg";
import HeroBanner1024 from "../../assets/images/events/2023/Luxe Europe/luxe_pm_hero_image_1024px.jpg";
import HeroBanner766 from "../../assets/images/events/2023/Luxe Europe/luxe_pm_hero_image_766px.jpg";
import HeroBanner320 from "../../assets/images/events/2023/Luxe Europe/luxe_pm_hero_image_hero_image_320px.jpg";
import CTABanner from "../../assets/images/events/2023/Luxe Europe/luxe_pm_cta_image_1024px.jpg";
import Network from "../../assets/images/events/2023/Luxe Europe/pm_grouped.png";
import Seville from "../../assets/images/events/2023/Luxe Europe/pm_spotlight.png";
import TestBG from "../../assets/images/events/2023/Europe Spring/hero_shape.png";
import CaptionPeople from "../../assets/images/events/americas_2021/conversational_characters.svg";
import Regent from "../../assets/images/events/partner_logos/Regent Logo.jpg";
import Talas from "../../assets/images/events/partner_logos/talas.png";
import Portonovi from "../../assets/images/events/partner_logos/OO_Portonovi.png";
import GroupedLogos from "../../assets/images/3logos_grouped.png";
import Mamula from "../../assets/images/events/partner_logos/Mamula.png";
import Dukley from "../../assets/images/events/partner_logos/Dukley.png";
import Lifestyle from "../../assets/images/events/partner_logos/Lifestyle.png"

// import CityOfDreams from '../../assets/images/events/partner_logos/City_of_Dreams.png';

// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const LuxeEurope2023 = () => {
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
      Regent,
      Talas
    ],
    [
      Portonovi
    ],
    [Dukley, Mamula, Lifestyle]
  ];
 
  const links = [
    ['https://www.ihg.com/regent/hotels/gb/en/porto-montenegro/tivpm/hoteldetail', 'https://www.talas-montenegro.com/'],
    ['https://www.oneandonlyresorts.com/portonovi'],
    ['https://www.dukleyhotels.com/en/', 'https://www.mamulaisland.com/en/', 'http://www.lifestylemne.me/']
  ];
  const headings = ['gold', 'silver', 'bronze'];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Luxe, Porto Montenegro 2023 </title>
        <meta
          name="description"
          content="Our brand new event is targetted at high-end incentive travel and VIP groups. If you're a buyer or supplier in the luxury MICE market then apply now."
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
            className="sprint-hero-slider"
            style={{
              backgroundImage: `url(${heroBannerUrl})`,
            }}
          >
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                  <h1 className="header-section-heading raven">
                    the ultimate event for
                    <br />
                    <span className="underlined" style={{ fontSize: "50px" }}>
                      high-end incentive <br /> travel and VIP <br></br>groups.
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
                      m&i Luxe, Porto Montenegro 2023
                    </h2>
                    <span>
                      11-14 october <br /> montenegro
                    </span>
                    <br />
                    <br />
                    <p>
                      An event for the top-tier of the luxury MICE market, m&i
                      Luxe is specifically aimed at exquisite properties and
                      products for high-end board meetings, celebratory events
                      and high-end incentive travel. This Forum aims to bring
                      UK & European buyers in the incentive travel and MICE VIP
                      events sphere together with global suppliers specialising
                      in superior brands and properties. Experience three days
                      of upscale meetings and unbeatable networking in an
                      intimate setting.
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
                      <p>Spotlight on Porto Montonegro </p>
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
                          m&i Luxe, Porto Montenegro 2023
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
                            <h1 className="eventNumbers coral">60</h1>
                            <p>global supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers coral">65</h1>
                            <p>high-end UK & European buyers</p>
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
              <img alt={" "} src={Seville} className={"eventDestination"} />
            </div>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-5 ml-lg-auto py-5">
                  <h2 className="site-section-heading font-secondary ">
                    spotlight on <br />
                    <span className="raven-underlined">porto montenegro</span>
                  </h2>
                  <p
                    style={{ paddingRight: "60px" }}
                    className="mobilePadding-2"
                  >
                    In recent years Porto Montenegro has shown itself to be an
                    emerging talent – and serious contender – in the luxury
                    market for MICE events, incentive trips and travellers
                    alike. Wander along its glistening harbour flanked with vast
                    yachts, soak up the sun against a backdrop of exceptional
                    resorts and explore historic towns drenched in Baroque
                    Venetian architecture.
                    <br />
                    <br />
                    More than just its Mediterranean charm, Porto Montenegro has
                    a depth of potential for the MICE sector. With a range of
                    exclusive events to its name, premium accommodation with
                    in-house meeting space and an abundance of destination
                    experiences, the area has cemented itself as the jewel of
                    the Adriatic coast and a must for all high-end MICE events.
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>

          <div className="event-venue fawn">
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
                    <a className="venueLink" rel="noopener noreferrer" href="https://www.ihg.com/regent/hotels/gb/en/porto-montenegro/tivpm/hoteldetail">
                      regent porto montenegro
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
                    <a className="venueLink" rel="noopener noreferrer" href="https://www.ihg.com/regent/hotels/gb/en/porto-montenegro/tivpm/hoteldetail">
                      regent porto montenegro
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
                <div className="col-lg-12 ml-lg-auto py-5 ">
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
                          It’s time to put your black-tie attire on –tonight’s
                          all about the Closing Night Party
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel tabId="four">
                      <ul className="itineraryList">
                        <li> It’s time to depart </li>
                        <li>Look ahead to your next m&i event</li>
                        
                      </ul>
                    </TabPanel>
                  </Tabs>
                </div>
              
              </div>
            </div>
          </div>

          <div className="advisoryboard-block raven-bg">
          <div className="img-bg-1">
          <img alt={" "} src={GroupedLogos} className={"panelImage"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch ">
              <div
                className="col-lg-6 ml-rg-auto py-5"
               
              >
               <h2
                  className="site-section-heading font-secondary"
                  style={{ paddingBottom: "0px" }}
                >
                 meet our {" "}
                
                  <span class="fawn-underlined">Luxe<br/> Diamond Suppliers.</span>
                </h2>
                <p>
                m&i Luxe Diamond Suppliers are a select group offering exquisite properties and products. 
                </p>
                <a href='/luxe-diamond-suppliers'>
                <span className=' btn btn-secondary fawnbtn' style={{padding:"0 2rem", lineHeight:"2.5"}}>
                meet our Luxe Diamond Suppliers
                                    </span></a>
              </div>
            </div>
          </div>
        </div>

         

        <div className="col-lg-6 ml-lg-auto " style={{backgroundColor:'#fcf2eb'}}>
                  <div className="img-bg-1">
                    <img
                      alt={" "}
                      src={Network}
                      className={"itineraryPicture2"}
                    />
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
                              Invitations only extended to buyers organising
                              high-end events, VIP groups, high-end incentives,
                              luxury events
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
                              of Porto Montenegro
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
                  <div className="cta-content">
                    <h2>
                      be part of m&i’s only european event created
                      <br /> for the luxury incentive and VIP MICE market.
                    </h2>
                    <a href="/signup-mi-luxe-2023">
                      <span className=" btn btn-secondary white">i'm in</span>
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

export default LuxeEurope2023;
