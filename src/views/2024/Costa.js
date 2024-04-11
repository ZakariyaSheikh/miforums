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
import Spotlight from "../../assets/images/events/2024/Costa/Spotlight.png";
import PartnerLogo from "../../assets/images/events/partner_logos/CostaMujeres.jpg";
import Trslocal from "../../assets/images/events/partner_logos/trslocal.jpg"
import { Fab } from "@material-ui/core";

const Costa = () => {

 
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
    PartnerLogo, Trslocal
    ]
  ];
 

  
  const links = [
   
    ['https://www.palladiumhotelgroup.com/en/hotels/mexico/costamujerescancun/grand-palladium-costa-mujeres-resort-spa', 'https://www.palladiumhotelgroup.com/en/hotels/mexico/costamujerescancun/trs-coral-hotel']
  ];
  const headings = ['Headline Partners'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i VIP Costa Mujeres 24 | m&i </title>
        <meta
          name="description"
          content="An event for senior-level MICE suppliers and buyers in the beautiful Costa Mujeres. "
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
          <iframe className="hero-background-video" width="100%" height="100%" src="https://www.youtube.com/embed/5XHW9261H2Q?&autoplay=1&mute=1&playsinline=1&controls=0&&showinfo=0&loop=1&playlist=5XHW9261H2Q" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        
    
        </div>


<div className="row no-gutters align-items-stretch">
                  <div className="header-section-heading">
                  <h3>VIP</h3>
                   <h1>Costa Mujeres 24</h1>
                   <h3>Mexico</h3>
                   <h4>17-20 Nov</h4>

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
                <h2>Cancun’s exclusive neighbour.</h2>
                <br/>
                <p>
                Are you a senior-level buyer or supplier with a wealth of experience in MICE tourism? Look no further than our VIP Forum for an intimate three days of 30 meetings, destination activities and evening experiences.  And you’ll get all this while enjoying the beautiful coastline of northern Cancun.
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
                            <h1 className="eventNumbers raven">70</h1>
                            <p>Supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">80</h1>
                            <p>American buyers</p>
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
                Spotlight on Costa Mujeres
                </h2>
                <p
                    style={{ paddingRight: "20px" }}
                    className="mobilePadding-2"
                  >
               Away from the buzz of Cancun, you’ll find the picturesque Costa Mujeres with its turquoise waters, sandy beaches and Mexican Caribbean hospitality. A winning mix of sun, sea and ancient Mayan history make it a tropical haven with something a little different. 
                    <br />
                    <br />
                    Its sublime location also makes it a perfect pick for MICE events, with Cancun airport just 30 minutes drive away, a range of impressive 5-star resorts, trendy restaurants and a state-of-the-art conference centre with over 14,000 sqft of event space.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block" style={{ paddingBottom: "5rem" }}>
        <div id="scroll-container">
  <div id="scroll-text" style={{color:'#352E35'}}>A Forum for the industry leaders in MICE. </div>
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
                                            href='https://www.palladiumhotelgroup.com/en/hotels/mexico/costamujerescancun/grand-palladium-costa-mujeres-resort-spa'
                                        >
                                      Grand Palladium Costa Mujeres
                                        </a>
                                    </h2>
                                </div>

                            </div>
                            <div className='anchorScroll' id='itinerary'></div>
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
                                                        Truly exclusive opportunities to discover the best of Costa Mujeres, Mexico 
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
                   <h1>Find out if you’ll make the guestlist.  </h1>
                   <h3 className="caption">Spaces are limited so get in there early!  </h3>
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


         
        </div>
      </div>
    </>
  );
};

export default Costa;
