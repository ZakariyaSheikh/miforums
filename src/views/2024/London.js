import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import enableInlineVideo from 'iphone-inline-video';
import Carousel from "../../components/elements/Carousel"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import Connect from "../../assets/images/events/2024/Sorrento/Connect.png";
import Experience from "../../assets/images/events/2024/Sorrento/Experience.png";
import Enjoy from "../../assets/images/events/2024/Sorrento/Enjoy.png";
import CTA from "../../assets/images/events/2024/London/CTA.png";
import Spotlight from "../../assets/images/events/2024/London/Spotlight.png";
import PartnerLogo from "../../assets/images/events/partner_logos/London.png";
import ConceptLogo from "../../assets/images/events/partner_logos/ConceptLogo.png"
import Junohire from "../../assets/images/events/partner_logos/juno-final-circle-black-05.jpg"
import TateLogo from "../../assets/images/events/partner_logos/Tate_logo_black.jpg"
import ThreeSixty from "../../assets/images/events/partner_logos/threesixty.png"
import Healthcare from "../../assets/images/events/partner_logos/Healthcarevenue.jpg"

const London = () => {

 
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
      PartnerLogo
    ],
    [ConceptLogo, Junohire, TateLogo, ThreeSixty, Healthcare]
  ];
 

  
  const links = [
   
    ['https://www.hilton.com/en/hotels/lonmetw-hilton-london-metropole/'], ['https://eventconcept.co.uk/', 'https://www.junohire.com/', 'https://privateevents.tate.org.uk/', 'https://3sixtyeventconsulting.com/', 'https://healthcare-venues.com/']
  ];
  const headings = ['Headline Partner', 'Event Partners'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Healthcare London 24 | m&i </title>
        <meta
          name="description"
          content="An event for healthcare event specialists and certified healthcare venues in a healthcare hotspot. "
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
          <iframe className="hero-background-video" width="100%" height="100%" src="https://www.youtube.com/embed/-t8DVitKwx8?&autoplay=1&mute=1&playsinline=1&controls=0&&showinfo=0&loop=1&playlist=-t8DVitKwx8" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        
        </div>


<div className="row no-gutters align-items-stretch">
                  <div className="header-section-heading">
                  <h3>Healthcare</h3>
                   <h1>London 24</h1>
                   <h3>England</h3>
                   <h4>6-8 May</h4>
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
                <h2>Grow your healthcare events network in The Big Smoke.  </h2>
                <br/>
                <p>
                It can be difficult to navigate the healthcare events ecosystem – and that’s where we come in. Our healthcare Forums bring together certified healthcare venues and healthcare events specialists for two days of 1-2-1 meetings, enhanced educational content and unbeatable evening entertainment in England’s capital, London!
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
                            <h1 className="eventNumbers raven">2</h1>
                            <p>Days</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">25</h1>
                            <p>Meetings</p>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">150</h1>
                            <p>Supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">160</h1>
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
                Spotlight on London
                </h2>
                <p
                    style={{ paddingRight: "20px" }}
                    className="mobilePadding-2"
                  >
              A hub of history, culture and innovation, London is the capital with it all. From its many famous landmarks and historical museums to its award-winning restaurants and buzzing nightlife – it's where old meets new.
                    <br />
                    <br />
                    Well, quite a lot actually. Hosting a wide range of largescale health-tech conferences and home to a range of medical and healthcare company clusters with a long-established MICE infrastructure, London is a dedicated healthcare hotspot.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block" style={{ paddingBottom: "5rem" }}>
        <div id="scroll-container">
  <div id="scroll-text">An event for healthcare event specialists and healthcare-certified venues   </div>
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
                                            href='https://www.hilton.com/en/hotels/lonmetw-hilton-london-metropole/'
                                        >
                                        Hilton London Metropole 
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
               <p className="itemCaption">Grow your network across 25 meetings with healthcare-certified venues and healthcare events specialists.  </p>
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
               <p className="itemCaption">See a destination with fresh eyes through a range of site visits and exciting networking activities.    </p>
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
               <p className="itemCaption">Educate yourself on the key topics affecting the healthcare events ecosystem through enhanced educational content.</p>
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
                                                        2 days of high-quality networking in a popular, healthcare-relevant city  
                                                        </li>
                                                        <li>
                                                        25 guaranteed 1-2-1 meetings with healthcare-specific buyers  
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
                                                        <li>
                                                        Venue accreditation and specialist delegate training provided via our event partner, HealthcareVenues  
                                                        </li>
                                                        <li>Educational sessions from key industry speakers   </li>
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
                                                        2 days of high-quality networking in one of the world’s top convention destinations  
                                                        </li>
                                                        <li>
                                                        1-2-1 meetings with healthcare-relevant suppliers  
                                                        </li>

                                                        <li>
                                                        Cutting-edge AI matchmaking technology to find your best meeting potential  
                                                        </li>
                                                        <li>
                                                        Bespoke buyer package, including accommodation and transfers, as well as airfare/train credits.  
                                                        </li>
                                                        <li>
                                                        Breakfast, lunch and exciting networking dinners provided  
                                                        </li>
                                                        <li>Educational sessions from key industry speakers  </li>
                                                        <li>Destination discovery — discover London's great MICE infrastructure </li>
                                                        <li>Experience what London has to offer with fellow attendees   </li>
                                                        <li>Networking activities — experience London’s top attractions with fellow attendees    </li>

                                                      
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
                   
                   <h1>Want to join other healthcare event professionals in a healthcare hotspot?  </h1>
                   <h3 className="caption">Get in early as spaces are strictly limited!  </h3>
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

export default London;
