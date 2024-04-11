import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../components/elements/Carousel"
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import EpicSana from "../../assets/images/events/partner_logos/EpicSana.jpg"
import Connect from "../../assets/images/events/2025/lakelouise/connect.png";
import Experience from "../../assets/images/events/2025/lakelouise/experience.png";
import Enjoy from "../../assets/images/events/2025/lakelouise/enjoy.png";
import CTA from "../../assets/images/events/2025/lakelouise/cta.png";
import Spotlight from "../../assets/images/events/2025/lakelouise/spotlight.png";
import Accommodation from "../../assets/images/events/2025/lakelouise/accommodation.png";
import PortugalTravel from "../../assets/images/events/partner_logos/Portugal_Travel.jpg";
import Vega from "../../assets/images/events/partner_logos/vega_logo.png";
import Fairmont from "../../assets/images/events/2025/lakelouise/fairmont.png";
import FairmontB from  "../../assets/images/events/2025/lakelouise/fairmont-b.png";
import BLL from  "../../assets/images/events/2025/lakelouise/BLL.png";
import Header from "../../assets/images/events/2025/lakelouise/header.png";

const LakeLouise = () => {

  
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
      FairmontB, BLL
    ],
  ];
 

  
  const links = [
   
    ['https://www.fairmont.com/lake-louise/', 'https://www.banfflakelouise.com/']
  ];
  const headings = ['Headline Partners'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Luxe Lake Louise 25 | m&i </title>
        <meta
          name="description"
          content="Global suppliers meet UK & European MICE buyers in a beautiful Portuguese city. "
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
        <div className="event-page twentyfour lakelouise powder-bg">
          <div
            className="sprint-hero-slider" style={{
              backgroundImage: `url(${Header})`,
          }}>

            <div class="video-container">
          
        
        </div>

<div className="row no-gutters align-items-stretch">
                  <div className="header-section-heading">
                  <h3>Luxe</h3>
                   <h1>Lake Louise 25</h1>
                   <h3>Canada</h3>
                   <h4>24-27 March</h4>
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
                <h2>The ultimate B2B experience for the <br/>luxury incentive travel industry  </h2>
                <br/>
                <p>
                m&i Luxe is where the very best corporations and agencies meet with exquisite properties and luxury DMCs for 3 days of high-end networking. Elevate your business through tailored meetings, exclusive networking dinners, and transformative experiences set against the backdrop of Canadian opulence. 
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
                            <h1 className="eventNumbers raven">3</h1>
                            <p>Days</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">30</h1>
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
                            <p>Buyers</p>
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


         
          <div className="row splitrow explore" style={{backgroundColor:"#ECDDD1"}}>
                        <div class="column leftSide afternoons"  >
                        <div className='col-lg-12 ml-rg-auto py-5'>
                              
                        <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-7 ml-rg-auto "
              >
               
                <h1 className="site-section-heading font-secondary">
                Spotlight on Lake Louise
                </h1>
               
            
                <p
                    
                    className="mobilePadding-2"
                  >
         Snow-capped peaks, towering pines, and crisp blue skies are all reflected in the crystal waters of Lake Louise, a unique MICE destination that brings a wintery touch to the incentives industry. 
                    <br />
                    <br />
                    Expect a picturesque journey from Calgary International Airport to our host property, Fairmont Chateau Lake Louise, which boasts the largest event space in Banff National Park, a glamourous chateau-style exterior, and an unbeatable location right on the water’s edge.
                  </p>
                 
                  </div>
            </div>
          </div>
                            
                            
                            </div>

            </div>

                <div className="column rightSide afternoons" style={{ backgroundImage: `url(${Spotlight})` }}>
                            <div className='col-lg-12 ml-rg-auto py-5'>
                          
                          
                            </div>
                </div>
        </div>

        <div className="row splitrow celebrate" style={{backgroundColor:"#352E35"}}>
                        <div class="column leftSide celebrate" style={{ backgroundImage: `url(${Accommodation})` }} >
                        <div className='col-lg-12 ml-rg-auto py-5'>
                              
                            
                            
                            </div>

            </div>

                <div className="column rightSide celebrate" >
                            <div className='col-lg-12 ml-rg-auto py-5'>
                            <div className="container">
            <div className="row no-gutters align-items-stretch">
            <div className='col-lg-12 ml-lg-auto py-5' style={{textAlign:'center'}}>
                                    <h3
                                        className='site-section-heading font-secondary '
                                        style={{ textDecoration: 'underline' }}
                                    >
                                        Accommodation and meeting venue
                                    </h3>
                                    <a href="https://www.fairmont.com/lake-louise/" target="_blank"> <img
                alt={" "}
                src={Fairmont}
                className={"partnerlogo"}
              ></img></a><br/>
              <a href="https://www.fairmont.com/lake-louise/" target="_blank">
                      <span className=" btn btn-secondary transparent">
                     Visit website
                      </span>
                    </a>

                                   
                                </div>
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
                    
                  </h3>

                  <Carousel images={images} links={links} headings={headings} autoPlay />
                  
                </div>
              </div>
            </div>
          </div>

      

        {/* <div className="site-half block" style={{ paddingBottom: "5rem" }}>
        <div id="scroll-container">
  <div id="scroll-text">Meet with a wider range of MICE professionals at our Flagship Forum in Lisbon. </div>
</div>
    </div> */}

      

    {/* <div className='event-venue'>
                        <div className='container'>
                            <div className='row no-gutters align-items-stretch'>
                              

                            </div>
                            <div className='anchorScroll' id='itinerary'></div>
                        </div>
                    </div>  */}

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
               <p className="itemCaption">Grow your network across 30 meetings with MICE professionals looking for exquisite properties and products suitable for high-end incentive trips and VIP groups.   </p>
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
               <p className="itemCaption">See a destination with fresh eyes through a range of site visits and upmarket networking activities.  </p>
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
               <p className="itemCaption">Indulge and connect at our signature evening experiences packed with top entertainment and upscale dining. </p>
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
                                                        30 x pre-scheduled meetings with buyers organising high-end events, VIP groups and luxury events 
                                                        </li>
                                                        <li>
                                                        Invitations extended to buyers organising high-end events, VIP groups and luxury events 
                                                        </li>
                                                        <li>
                                                        Limited supplier spaces for enhanced connection-building 
                                                        </li>
                                                        <li>
                                                        Cutting-edge AI matchmaking technology to find your best meeting potential  
                                                        </li>
                                                        <li>
                                                        Incredible destination experiences for optimum networking 
                                                        </li>
                                                       
                                                        <li>Exceptional dinners and glamorous nightlife experiences  </li>
                                                      
                                                       <li>Friendly Account Manager to guide you from start to finish </li>
                                                        <li>
                                                            Make your money go
                                                            further with our{' '}
                                                            <a href='/pricing'>
                                                                early payment
                                                                discount
                                                            </a>
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
      <div className={`accordion ${activeTab === 'buyers' ? 'open' : ''}`}>
        {/* Buyers content */}
        <div className="content">

       
        <ul className='packages'>
                                                        <li>
                                                        30 x pre-scheduled meetings with only 5* and 5*+ experiential products, Luxury DMCs and destinations 
exclusively oriented towards the MICE luxury segment 
                                                        </li>
                                                        <li>Truly exclusive opportunities to discover the best of Banff </li>
                                                        <li>A luxury programme of high-end activities and experiences </li>
                                                        <li>
                                                        Cutting-edge AI matchmaking technology to find your best meeting potential  
                                                        </li>

                                                        <li>
                                                        Accommodation, flights and transfers included 
                                                        </li>
                                                        <li>
                                                        Breakfast, lunch and outstanding dinners provided  
                                                        </li>
                                                        <li>
                                                        Glamorous parties and nightlife experiences 
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
                  <h3>m&i Luxe Lake Louise 25</h3>
                   <h1>What are you waiting for?   </h1>
                   <h3 className="caption">Grow your luxury incentive network in Lake Louise   </h3>
                  </div>
                    <a href="/signup">
                      <span className=" btn btn-primary">
                      See if you qualify
                      </span>
                    </a>
                    <br/><br/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        


        
        </div>
      </div>
    </>
  );
};

export default LakeLouise;
