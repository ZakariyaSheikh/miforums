import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../components/elements/Carousel"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import Connect from "../../assets/images/events/2024/Sorrento/Connect.png";
import Experience from "../../assets/images/events/2024/Sorrento/Experience.png";
import Enjoy from "../../assets/images/events/2024/Sorrento/Enjoy.png";
import CTA from "../../assets/images/events/2024/Bodrum/CTA.png";
import Spotlight from "../../assets/images/events/2024/Bodrum/Spotlight.png";
import PartnerLogo from "../../assets/images/events/partner_logos/Bodrum.png";
import Susona from "../../assets/images/events/partner_logos/SusonaLogo.png"
import Tangier from "../../assets/images/events/partner_logos/tangiers_travel.jpg"



const Bodrum = () => {


const videoEl = useRef(null);

const attemptPlay = () => {
  videoEl &&
    videoEl.current &&
    videoEl.current.play().catch(error => {
      console.error("Error attempting to play", error);
    });
};

 
    const [activeTab, setActiveTab] = useState('suppliers'); // Set the initial active tab to 'suppliers'

    const toggleAccordion = (tabName) => {
      setActiveTab(activeTab === tabName ? null : tabName);
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
    // Play the video when the component mounts
   

   
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
      PartnerLogo
    ],
    [ 
      Susona, Tangier
    ]
  ];
  
  const links = [
   
    ['https://www.lujohotel.com/'], ['https://susonabodrum.com/', 'https://tangierstravel.com/en']
  ];
  const headings = ['Headline Partner', 'Event Partners'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Luxe Bodrum 24 | m&i </title>
        <meta
          name="description"
          content="An event for buyers looking to book high-end incentives and VIP MICE groups in luxury properties."
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
      <div className="site-wrap camel-bg">
        <div className="event-page twentyfour">
          <div
            className="sprint-hero-slider">
              <div class="video-container">
          <iframe className="hero-background-video" width="100%" height="100%" src="https://www.youtube.com/embed/jn7G4Y8a67A?&autoplay=1&mute=1&playsinline=1&controls=0&&showinfo=0&loop=1&playlist=jn7G4Y8a67A" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        
    
        </div>
              

<div className="row no-gutters align-items-stretch">
                  <div className="header-section-heading">
                  <h3>Luxe</h3>
                   <h1>Bodrum 24</h1>
                   <h3>Türkiye</h3>
                   <h4>2-5 Oct</h4>

                   <div className="scroll-arrow" onClick={handleScroll} >
     <svg width="70" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" fill="#E0C7B2">
<g><path d="M500,10"/><path d="M500,990L108,598h784L500,990z"/></g>
</svg>
    </div>
                 
                  </div>
              </div>



         
          </div>

          <Sticky>
            <div className="event-under-banner twentyfour" id="scrollto">
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
       
          <div className="site-half eventInformationSection camel-bg" >
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" style={{paddingRight:'20px'}}>
                <h2>Elegant properties and a sparkling marina set this destination apart from the crowd. </h2>
                <br/>
                <p>
                Want to meet top UK & European buyers in high-end incentive travel and VIP events, or suppliers in superior brands and properties? This is the Forum for you. Specifically designed for the top-tier of the luxury MICE market, everything about this intimate Forum is made to match, from the 1-2-1 meetings and the immersive social schedule to the crafted evenings in exquisite venues. And where better to do this than Türkiye’s most exclusive destination, Bodrum?
                </p>
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

          <div className="numbers-section eventNumbers camel-bg">
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
                            <p>Global supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">110</h1>
                            <p>High-end UK & European buyers</p>
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
            <img alt={" "} src={Spotlight} className={"network"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-6 ml-rg-auto "
                style={{ paddingLeft: "120px" }}
              >
                <h2 className="site-section-heading font-secondary">
                Spotlight on Bodrum
                </h2>
                <p
                    style={{ paddingRight: "20px" }}
                    className="mobilePadding-2"
                  >
             A protected cove of luxury in Türkiye, Bodrum’s flat-topped white villas are guaranteed to charm every traveller lucky enough to walk its alleys. Wandering from the ancient Old Town to the marina will reveal the most exclusive part of the Turkish riviera filled with super yachts owned by the area’s elite clientele. 
                    <br />
                    <br />
                    A recent boom in five-star hotels, including boutique properties and wellness resorts from world-famous hotel brands has spurred interest in the region for meetings and incentives. The city is also conveniently located 30 minutes drive from the nearest international airport, making for easy transfers for small groups.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block" style={{ paddingBottom: "5rem" }}>
        <div id="scroll-container">
  <div id="scroll-text">See what Bodrum has to offer the high-end MICE market </div>
</div>
    </div>

      

    <div className='event-venue'>
                        <div className='container'>
                            <div className='row no-gutters align-items-stretch'>
                                <div className='col-lg-12 ml-lg-auto py-5' style={{textAlign:'center'}}>
                                    <h3
                                        className='site-section-heading font-secondary '
                                        style={{ textDecoration: 'underline' }}
                                    >
                                        Accommodation and Meeting venue
                                    </h3>
                                    <h2 style={{ lineHeight: '45px' }}>
                                        <a
                                            className='venueLink'
                                            rel='noopener noreferrer'
                                            href='https://www.lujohotel.com/'
                                        >
                                        Lujo Bodrum
                                        </a>
                                    </h2>
                                </div>

                            </div>
                            <div className='anchorScroll' id='itinerary'></div>
                        </div>
                    </div> 


          <div className="site-half sampleProgramme">
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
               <p className="itemCaption">Grow your network across 30 meetings with MICE professionals looking for exquisite properties and products suitable for high-end incentive trips and VIP groups.</p>
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
               <p className="itemCaption">See a destination with fresh eyes through a range of site visits and upmarket networking activities.</p>
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
               <p className="itemCaption">Let your hair down at our m&i After Dark nightlife experiences packed with top entertainment and upscale dining.</p>
                </div>
                </div>

              </div>
            </div>
          </div>
          <div className="packages-section camel-bg">
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
                                                        30 x pre-scheduled meetings with buyers organising high-end incentives, VIP groups and luxury events
                                                        </li>
                                                        <li>
                                                        Invitations only extended to buyers organising high-end events, VIP groups, high-end incentives, luxury events  
                                                        </li>

                                                        <li>
                                                        Limited supplier spaces for enhanced connection-building  
                                                        </li>
                                                       
                                                        <li>
                                                        Cutting edge AI matchmaking technology to find your best meeting potential 
                                                        </li>
                                                        <li>
                                                        Incredible destination experiences for optimum networking  
                                                        </li>
                                                        <li>Exceptional dinners and glamorous nightlife experiences   </li>
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
                                                        30 x pre-scheduled meetings with only 5* and 5*+ experiential products, Luxury DMCs and destinations exclusively oriented towards the MICE luxury segment  

                                                        </li>
                                                        <li>
                                                        Truly exclusive opportunities to discover the best of Bodrum  
                                                        </li>

                                                        <li>
                                                        A luxury programme of high-end activities and experiences  
                                                        </li>
                                                        <li>
                                                        Cutting edge AI matchmaking technology to find your best meeting potential 
                                                        </li>
                                                        <li>
                                                        Bespoke buyer package, including accommodation and transfers, as well as airfare allowance 
                                                        </li>
                                                        <li>Breakfast, lunch and outstanding dinners provided </li>
                                                        <li>Glamorous parties and nightlife experiences  </li>

                                                      
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
                   <h1>Want a seat at the most exclusive table in the MICE industry?</h1>
                   <h3 className="caption">This is your chance.  </h3>
                  </div>
                    <a href="/signup">
                      <span className=" btn btn-primary fawnbtn">
                       See if you qualify
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

export default Bodrum;
