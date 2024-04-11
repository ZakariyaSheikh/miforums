import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../components/elements/Carousel"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import Connect from "../../assets/images/events/2024/Miami/Connect.png";
import Experience from "../../assets/images/events/2024/Miami/Experience.png";
import Enjoy from "../../assets/images/events/2024/Miami/Enjoy.png";
import CTA from "../../assets/images/events/2024/Tbilisi/CTA1.png";
import Spotlight from "../../assets/images/events/2024/Amman/Spotlight2.png";
import RitzCarlton from "../../assets/images/events/2024/Amman/ritz_carlton_amman.png"
import StRegis from "../../assets/images/events/2024/Amman/st_regis_amman.png"
import PartnerLogo from "../../assets/images/events/partner_logos/CostaMujeres.jpg";
import JordanTourism from "../../assets/images/events/2024/Amman/Jordan_Tourism_Board_Logo.jpg"
import ConventionGeorgia from "../../assets/images/events/2024/Tbilisi/ConventionGeorgia.jpg"
import LuxuryCollection from "../../assets/images/events/2024/Tbilisi/LuxuryCollection.png"
import Mariott from "../../assets/images/events/2024/Tbilisi/Mariott.png"
import Wyndham from "../../assets/images/events/2024/Tbilisi/WyndhamLogo.png"

const TbilisiTwo = () => {

 
    const [activeTab, setActiveTab] = useState('suppliers'); // Set the initial active tab to 'suppliers'

    const toggleAccordion = (tabName) => {
      setActiveTab(activeTab === tabName ? null : tabName);
    };

    const videoEl = useRef(null);

const attemptPlay = () => {
  videoEl &&
    videoEl.current &&
    videoEl.current.play().catch(error => {
      console.error("Error attempting to play", error);
    });
};
const handleScroll = () => {
      const sectionElement = document.getElementById('scrollto');
      // If you want to scroll to a specific section by its ID

    // const percentageToScroll = 0.5;
    // const offset = window.innerHeight * percentageToScroll;
    // If you want to scroll a certain percentage down the page

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
   
  const textRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    
      

  useEffect(() => {

    
attemptPlay();

   

   
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
      ConventionGeorgia, LuxuryCollection
    ],
   
   
  ];
  
  const links = [
    ['https://www.gceb.ge/', 'https://www.marriott.com/en-us/hotels/tbslc-paragraph-freedom-square-a-luxury-collection-hotel-tbilisi/overview/']
   
   
  ];
  const headings = ['Headline Partners','Event Partners'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Tbilisi 24 | m&i </title>
        <meta
          name="description"
          content="An event for senior-level MICE suppliers and buyers in the beautiful Tbilisi, Georgia. "
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
        <div className="event-page twentyfour">
          <div
            className="sprint-hero-slider">

<div class="video-container">
          <iframe className="hero-background-video" width="100%" height="100%" src="https://www.youtube.com/embed/5Nz4Gb9zPjI?&autoplay=1&mute=1&playsinline=1&controls=0&&showinfo=0&loop=1&playlist=5Nz4Gb9zPjI" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        
        </div>


<div className="row no-gutters align-items-stretch">
                  <div className="header-section-heading">
                  <h3>Flagship</h3>
                   <h1>Tbilisi 24</h1>
                   <h3>Georgia</h3>
                   <h4>30 June - 4 July</h4>

                   <div className="scroll-arrow" onClick={handleScroll} >
     <svg width="70" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" fill="#E0C7B2">
<g><path d="M500,10"/><path d="M500,990L108,598h784L500,990z"/></g>
</svg>
    </div>
                 
                  </div>
              </div>


           
          </div>

          <Sticky>
            <div className="event-under-banner twentyfour raven-bg" id="scrollto">
              <div className="container">
                <div className="row no-gutters align-items-stretch">
                  <div className=" ml-rg-auto event-sticky-text">
                    <h3>Love the sound of this event?</h3>
                  </div>
                  <div className="ml-rg-auto event-buttons flex-wrap ">
                    <a href="/tell-me-more">
                      <span className=" btn btn-secondary transparent">
                        Tell me more
                      </span>
                    </a>
                    <a href="/signup">
                      <span className=" btn btn-secondary grey">
                      Register now
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
       
          <div className="site-half eventInformationSection powder-bg" >
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" style={{paddingRight:'20px'}}>
                <h2>Uncover a new world of connection amongst the Caucasus Mountains.</h2>
                <br/>
                <p>
                Be among the first to experience an up-and-coming destination, largely untouched by mainstream MICE events. Expect our signature Flagship programme filled with 1-2-1 meetings, destination discovery and incredible evening experiences designed to keep the connection flowing from day to night – and get all this in the eclectic Tbilisi.
                </p>
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

          <div className="numbers-section eventNumbers powder-bg">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div
                  className="col-lg-12 ml-rg-auto py-4 laptop"
                  style={{ color: "#fff" }}
                >
                  <div className="container">
                    <div className="inNumbers">
                    
                      <ul>
                        <li>
                          <div className="numbers-caption ">
                            <h1 className="eventNumbers raven">4</h1>
                            <p>Days</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">40</h1>
                            <p>Meetings</p>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">100</h1>
                            <p>Supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">110</h1>
                            <p>UK & European buyers</p>
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

          <div className="site-half block powder-bg" style={{ paddingBottom: "5rem" }}>
          <div className="img-bg-1">
            <img alt={" "} src={Spotlight} className={"network"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-6 ml-rg-auto "
                style={{ paddingLeft: "120px" }}
              >
                <h2 className="site-section-heading font-secondary">
                Spotlight on Tbilisi
                </h2>
                <p
                    style={{ paddingRight: "20px" }}
                    className="mobilePadding-2"
                  >
              A cosmopolitan city located in an ancient valley; Tbilisi is a city of two halves. On the one hand, you have a wealth of beautiful 17th-century architecture and a community harbouring some of the oldest traditions in the world. On the other, you have an up-and-coming destination with a hipster feel.
                    <br />
                    <br />
                    And this extends to its impressive range of MICE-ready venues. Whether you want to dine in a historic chateau or you’re looking for an established hard-brand hotel, you’ll have a healthy venue selection to choose from.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block powder-bg" style={{ paddingBottom: "5rem" }}>
        <div id="scroll-container">
  <div id="scroll-text" style={{color:'#352E35'}}>Connect with MICE professionals in an up-and-coming MICE hotspot. </div>
</div>
    </div>

      

    <div className="event-venue powder-bg">
            <div className="container">
              <div className="row no-gutters align-items-stretch" style={{textAlign:'center'}}>
                

                <div className="col-lg-12 ml-lg-auto py-5">
                  <h3
                    className="site-section-heading font-secondary" 
                    style={{ textDecoration: "underline"}}
                     
                  >
                    Accommodation & Meeting Venue
                  </h3>
                  <h2 className="accommodation" style={{ lineHeight: "45px" }} >
                    <a className="venueLink" rel="noopener noreferrer" href="https://www.marriott.com/en-us/hotels/tbslc-paragraph-freedom-square-a-luxury-collection-hotel-tbilisi/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0">
                     Paragraph Freedom Square, a Luxury Collection Hotel
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


          <div className="site-half sampleProgramme raven-bg">
          <h1>What to expect</h1>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
               
             
              <div
                className="col-lg-4 ml-rg-auto py-5"
              >
                 <div className="programmeItem">
                   <img
                alt={" "}
                src={Connect}
                className={"sampleThumbnails"}
              ></img>
               <h1 className="itemHeading">Connect</h1>
               <p className="itemCaption">Engage with a wide range of top MICE buyers and suppliers across 40 meetings.

</p>
                </div>
                </div>

              
                <div
                className="col-lg-4 ml-rg-auto py-5"
              >
                  <div className="programmeItem">
                   <img
                alt={" "}
                src={Experience}
                className={"sampleThumbnails"}
              ></img>
              <h1 className="itemHeading">Experience</h1>
               <p className="itemCaption"> See a destination with fresh eyes through a range of site visits and exciting networking activities.

</p>
                </div>
                </div>

               
                <div
                className="col-lg-4 ml-rg-auto py-5"
              >
                 <div className="programmeItem">
                   <img
                alt={" "}
                src={Enjoy}
                className={"sampleThumbnails"}
              ></img>
              <h1 className="itemHeading">Enjoy</h1>
               <p className="itemCaption">Let your hair down at our m&i After Dark nightlife experiences packed with top entertainment and delicious cuisine.

</p>
                </div>
                </div>

              </div>
            </div>
          </div>
          <div className="packages-section">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-lg-auto py-5 ">

                  <h2 className="site-section-heading font-secondary">
                    <span style={{fontSize:"20px"}}>
                      What's in it for you?
                    </span>
                  </h2>

                  <div className="tabs">
        <div
          className={`tab ${activeTab === 'suppliers' ? 'active' : ''}`}
          onClick={() => toggleAccordion('suppliers')}
        >
          Suppliers
        </div>
        <div className="separator">|</div>
        <div
          className={`tab ${activeTab === 'buyers' ? 'active' : ''}`}
          onClick={() => toggleAccordion('buyers')}
        >
          Buyers
        </div>
      </div>
      <div className={`accordion ${activeTab === 'suppliers' ? 'open' : ''}`}>
        {/* Suppliers content */}
        <div className="content">

        <ul className='packages'>
                                                        <li>
                                                        4 days of exclusive networking with top-tier buyers  
                                                        </li>
                                                        <li>
                                                        40 guaranteed 1-2-1 meetings with vetted key UK & European buyers

                                                        </li>

                                                        <li>
                                                        Cutting-edge AI matchmaking technology to find your best meeting potential

                                                        </li>
                                                        <li>
                                                        Networking activities for extra relationship-building with attending buyers

                                                        </li>
                                                        <li>
                                                        Outstanding networking dinners and social nightlife experiences

                                                        </li>
                                                        <li> Friendly Account Manager to guide you from start to finish
                                                        </li>
                                                        <li>Make your money go further with our <a href="https://lively-speculoos-c70cc0.netlify.app/pricing">early payment discount</a>
                                                        </li>
                                                        <li>
                                                        Find out how we're <a href="https://www.mi-forums.com/covid-safe-events">keeping you safe</a> at this event
                                                        </li>
                                                        <li>
                                                            New to m&i?
                                                            Wondering what to
                                                            expect at our events
                                                            ? See{' '}
                                                            <a href='https://mi-forums.com/supplier-experience'>
                                                                how it works
                                                            </a>
                                                        </li>
                                                    </ul>

          
        </div>
      </div>
      <div className={`accordion ${activeTab === 'buyers' ? 'open' : ''}`}>
        {/* Buyers content */}
        <div className="content">

       
        <ul className='packages'>
                                                        <li>
                                                        1-2-1 meetings with high-quality global suppliers

                                                        </li>
                                                        <li>
                                                        Cutting edge AI matchmaking technology to find your best meeting potential

                                                        </li>

                                                        <li>
                                                        Bespoke buyer package, including accommodation and transfers, as well as airfare allowance

                                                        </li>
                                                        <li> Breakfast, lunch and exciting networking dinners provided
                                                        </li>
                                                        <li>
                                                        Destination discovery — discover Tbilisi’s MICE infrastructure

                                                        </li>
                                                        <li>
                                                        Networking activities — experience Tbilisi’s top attractions with fellow attendees

                                                        </li>
                                                        <li>Outstanding networking dinners and social nightlife experiences
                                                         </li>
                                                        <li>
                                                            Find out how we're{' '}
                                                            <a href='https://www.mi-forums.com/covid-safe-events'>
                                                                keeping you safe
                                                            </a>{' '}
                                                            at this event
                                                        </li>
                                                        <li>
                                                            New to m&i?
                                                            Wondering what to
                                                            expect at our events
                                                            ? See{' '}
                                                            <a href='https://mi-forums.com/supplier-experience'>
                                                                how it works
                                                            </a>
                                                        </li>
                                                    </ul>
        </div>
      </div>

      
              
                 
                </div>
              
              </div>
            </div>
          </div>

          <div
            className="cta-banner"
            style={{ backgroundImage: `url(${CTA})` }}
          >
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5 laptop">
                  <div className="cta-content">
                  <div
                    className="footer-section-heading "
                 
                  >
                   {/* <h3>m&i Costa Mujeres 24</h3> */}
                   <h1>Save yourself a month of work. </h1>
                   <h3 className="caption">Join us in the up-and-coming destination making waves on the MICE scene.
 </h3>
                  </div>
                    <a href="/signup">
                      <span className=" btn btn-primary fawnbtn">
                      Register your interest
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="site-half partnerSection fawn-bg" style={{textAlign:'center'}}>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                 

                  <Carousel images={images} links={links} headings={headings} autoPlay />
                  
                </div>
              </div>
            </div>
          </div>




         
        </div>
      </div>
    </>
  );
};

export default TbilisiTwo;