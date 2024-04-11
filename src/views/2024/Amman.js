import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../components/elements/Carousel"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import Connect from "../../assets/images/events/2024/Miami/Connect.png";
import Experience from "../../assets/images/events/2024/Miami/Experience.png";
import Enjoy from "../../assets/images/events/2024/Miami/Enjoy.png";
import CTA from "../../assets/images/events/2024/Costa/CTA.png";
import Spotlight from "../../assets/images/events/2024/Amman/Spotlight.png";
import RitzCarlton from "../../assets/images/events/2024/Amman/ritz_carlton_amman.png"
import StRegis from "../../assets/images/events/2024/Amman/st_regis_amman.png"
import PartnerLogo from "../../assets/images/events/partner_logos/CostaMujeres.jpg";
import JordanTourism from "../../assets/images/events/2024/Amman/Jordan_Tourism_Board_Logo.jpg"
import Sheraton from "../../assets/images/events/2024/Amman/Sheraton_Amman.png"

const Amman = () => {

 
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
      StRegis, JordanTourism
    ],
    [
      RitzCarlton
    ]
   
  ];
  
  const links = [
    ['https://www.marriott.com/en-us/hotels/ammxr-the-st-regis-amman/overview/', 'https://visitjordan.com/'],
    ['https://www.ritzcarlton.com/en/hotels/ammrz-the-ritz-carlton-amman/overview/']
   
   
  ];
  const headings = ['Headline Partners','Event Partners'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i VIP Amman 24 | m&i </title>
        <meta
          name="description"
          content="An event for senior-level MICE suppliers and buyers in the beautiful Amman. "
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
        <div className="event-page twentyfour cream-bg">
          <div
            className="sprint-hero-slider">

<div class="video-container">
          <iframe className="hero-background-video" width="100%" height="100%" src="https://www.youtube.com/embed/-ahGE_o8iok?&autoplay=1&mute=1&playsinline=1&controls=0&&showinfo=0&loop=1&playlist=-ahGE_o8iok" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        
        </div>


<div className="row no-gutters align-items-stretch">
                  <div className="header-section-heading">
                  <h3>VIP</h3>
                   <h1>Amman 24</h1>
                   <h3>Jordan</h3>
                   <h4>4-8 June</h4>

                   <div className="scroll-arrow" onClick={handleScroll} >
     <svg width="70" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" fill="#E0C7B2">
<g><path d="M500,10"/><path d="M500,990L108,598h784L500,990z"/></g>
</svg>
    </div>
                 
                  </div>
              </div>


           
          </div>

          <Sticky>
            <div className="event-under-banner twentyfour costa-bg" id="scrollto">
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
       
          <div className="site-half eventInformationSection cream-bg" >
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" style={{paddingRight:'20px'}}>
                <h2>Conquer the City of Seven Hills.</h2>
                <br/>
                <p>
                Are you a senior-level MICE professional with a wealth of industry experience? If that’s a yes, then this is the Forum for you. Engage in 4 days of unbeatable experiences designed to boost your networking potential. From our AI-matched meetings and destination activities to our signature evening experiences – this is the ultimate opportunity to meet the people that matter in the Middle East.
                </p>
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

          <div className="numbers-section eventNumbers cream-bg">
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
                Spotlight on Amman
                </h2>
                <p
                    style={{ paddingRight: "20px" }}
                    className="mobilePadding-2"
                  >
              Desert landscapes, world-famous historical landmarks and a fascinating cultural tapestry draw visitors to Jordan from all over the world. With centuries of history to learn and an exciting melting pot of cultures, it was an obvious choice for m&i VIP 2024. 
                    <br />
                    <br />
                    Amman, both Jordan’s capital and business centre, is a hotspot for grand hotels, conference centres and exceptional day trips suitable for incentive groups. It holds enough history to give you a taste of the Jordanian experience while maintaining a modern infrastructure perfect for meetings and events.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block" style={{ paddingBottom: "5rem" }}>
        <div id="scroll-container">
  <div id="scroll-text" style={{color:'#352E35'}}>An exclusive forum for industry leaders. </div>
</div>
    </div>

      

    <div className="event-venue">
            <div className="container">
              <div className="row no-gutters align-items-stretch" style={{textAlign:'center'}}>
                

                <div className="col-lg-12 ml-lg-auto py-5">
                  <h3
                    className="site-section-heading font-secondary" 
                    style={{ textDecoration: "underline"}}
                     
                  >
                    Accommodation Venues & Meeting Venue
                  </h3>
                  <h2 className="accommodation" style={{ lineHeight: "45px" }} >
                    <a className="venueLink" rel="noopener noreferrer" href="https://www.marriott.com/en-us/hotels/ammxr-the-st-regis-amman/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0">
                     The St Regis Amman
                    </a>
                  </h2>
                  <hr></hr>
                  <h2 className="accommodation" style={{ lineHeight: "45px" }}>

                    <a className="venueLink" rel="noopener noreferrer" href="https://www.ritzcarlton.com/en/hotels/ammrz-the-ritz-carlton-amman/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0">
                     The Ritz-Carlton
                    </a>
                  </h2>
                  <hr></hr>


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


          <div className="site-half sampleProgramme costa-bg">
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
               <p className="itemCaption">Engage with an intimate group of experienced senior-level buyers and suppliers across 30 meetings.  </p>
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
               <p className="itemCaption">See a destination with fresh eyes through a range of site visits and exciting networking activities.   </p>
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
               <p className="itemCaption">Let your hair down at our m&i After Dark nightlife experiences packed with top entertainment and delicious cuisine.  </p>
                </div>
                </div>

              </div>
            </div>
          </div>
          <div className="packages-section cream-bg">
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
                                                        3 days of exclusive networking with top-tier buyers  
                                                        </li>
                                                        <li>
                                                        Invitations only extended to buyers with real decision-making power  
                                                        </li>

                                                        <li>
                                                        Limited to 70 suppliers for enhanced connection-building  
                                                        </li>
                                                        <li>
                                                        In-depth sustainability programme from industry pioneers  
                                                        </li>
                                                        <li>
                                                        Cutting edge AI matchmaking technology to find your best meeting potential 
                                                        </li>
                                                        <li>Exclusive activities for optimum networking  </li>
                                                        <li>Exceptional dinners and nightlife experiences  </li>
                                                        <li>
                                                            Friendly Account
                                                            Manager to guide you
                                                            from start to finish
                                                        </li>
                                                       
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
                                                        1-2-1 meetings with senior-level MICE suppliers  
                                                        </li>
                                                        <li>
                                                        Truly exclusive opportunities to discover the best of Amman, Jordan
                                                        </li>

                                                        <li>
                                                        In-depth sustainability programme from industry pioneers  
                                                        </li>
                                                        <li>A VIP programme of high-end activities and experiences  </li>
                                                        <li>
                                                        Cutting edge AI matchmaking technology to find your best meeting potential 
                                                        </li>
                                                        <li>
                                                        Bespoke buyer package, including accommodation and transfers, as well as airfare/train credits.  
                                                        </li>
                                                        <li>Breakfast, lunch and outstanding dinners provided  </li>
                                                        <li>Glamorous parties and nightlife experiences   </li>
                                                    

                                                      
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
                   <h1>Make a business decision you won’t regret. </h1>
                   <h3 className="caption">Grow your MICE network in a Middle Eastern business hotspot.  </h3>
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

export default Amman;
