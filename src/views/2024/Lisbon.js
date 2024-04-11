import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../components/elements/Carousel"
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import EpicSana from "../../assets/images/events/partner_logos/EpicSana.jpg"
import Connect from "../../assets/images/events/2024/Miami/Connect.png";
import Experience from "../../assets/images/events/2024/Miami/Experience.png";
import Enjoy from "../../assets/images/events/2024/Miami/Enjoy.png";
import CTA from "../../assets/images/events/2024/Lisbon/CTA.png";
import Spotlight from "../../assets/images/events/2024/Miami/Spotlight.png";
import PortugalTravel from "../../assets/images/events/partner_logos/Portugal_Travel.jpg"
import Vega from "../../assets/images/events/partner_logos/vega_logo.png"

const Lisbon = () => {

 
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
      EpicSana
    ],
    [
      PortugalTravel, Vega
    ]
  ];
 

  
  const links = [
   
    ['https://www.sanahotels.com/en/hotel/epic-sana-marques/'],['https://portugal-travelteam.pt/', 'https://www.vegadmc-portugal.com/']
  ];
  const headings = ['Headline Partners','Event Partners'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Lisbon 24 | m&i </title>
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
        <div className="event-page twentyfour powder-bg">
          <div
            className="sprint-hero-slider">

            <div class="video-container">
          <iframe className="hero-background-video" width="100%" height="100%" src="https://www.youtube.com/embed/5_SL9BfpkrE?&autoplay=1&mute=1&playsinline=1&controls=0&&showinfo=0&loop=1&playlist=5_SL9BfpkrE" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        
        </div>

<div className="row no-gutters align-items-stretch">
                  <div className="header-section-heading">
                  <h3>Flagship</h3>
                   <h1>Lisbon 24</h1>
                   <h3>Portugal</h3>
                   <h4>25-28 Aug</h4>
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
                <h2>A slice of Portuguese hospitality by the sea.   </h2>
                <br/>
                <p>
                Connect in Portugal’s capital city across three unbeatable days. From 1-2-1 meetings and destination discovery to exciting evenings and a jam-packed social schedule, this is your chance to meet with top European buyers and global suppliers in a MICE hotspot. Is there anything better than connecting in the Portuguese sunshine? We don’t think so either.
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
                            <h1 className="eventNumbers raven">40</h1>
                            <p>Meetings</p>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">140</h1>
                            <p>Supplier tables</p>
                          </div>
                        </li>
                        <li>
                          <div className="numbers-caption">
                            <h1 className="eventNumbers raven">150</h1>
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
                Spotlight on Lisbon
                </h2>
                <p
                    style={{ paddingRight: "20px" }}
                    className="mobilePadding-2"
                  >
              Cobbled streets and white-domed cathedrals set the scene for a brilliant few days in Portugal’s capital city by the beach. Indulge in local delicacies, enjoy a glass of port or visit the city’s various UNESCO World Heritage Sites for a hit of history and architectural prowess. A taste of Lisbon will leave you wanting so much more. 
                    <br />
                    <br />
                    And it doesn’t stop there. Lisbon brings a touch of class to the MICE industry, with a Congress Centre containing 29,000 sq. m of event space in Belém, one of Lisbon’s most iconic and beautiful neighbourhoods. It also conveniently sits 7km from the nearest international airport – pretty handy, right?
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block" style={{ paddingBottom: "5rem" }}>
        <div id="scroll-container">
  <div id="scroll-text">Meet with a wider range of MICE professionals at our Flagship Forum in Lisbon. </div>
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
                                            href='https://www.sanahotels.com/en/hotel/epic-sana-marques/'
                                        >
                                        Epic Sana Marques
                                        </a>
                                    </h2>
                                </div>

                            </div>
                            <div className='anchorScroll' id='itinerary'></div>
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
               <p className="itemCaption">Engage with a wide range of top MICE buyers and suppliers across 40 meetings.   </p>
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
               <p className="itemCaption">Let your hair down at our m&i After Dark nightlife experiences packed with top entertainment and delicious cuisine. </p>
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
                                                        3 days of high-quality networking in a stunning city 
                                                        </li>
                                                        <li>
                                                        40 guaranteed 1-2-1 meetings with vetted key UK & European buyers  
                                                        </li>

                                                        <li>
                                                        Cutting-edge AI matchmaking technology to find your best meeting potential  
                                                        </li>
                                                       
                                                        <li>Networking activities for extra relationship-building with attending buyers </li>
                                                       <li>Outstanding networking dinners and social nightlife experiences </li>
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
                                                        1-2-1 meetings with high-quality global suppliers  
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
                                                        <li>
                                                        Destination discovery — discover Lisbon’s MICE infrastructure  
                                                        </li>
                                                        <li>Networking activities — experience Lisbon’s top attractions with fellow attendees  </li>
                                                        <li>Glamorous dinners, parties and nightlife experiences  </li>

                                                      
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
                  
                   <h1>Create more than just business connections.   </h1>
                   <h3 className="caption">Join us for an unforgettable three days in Lisbon, Portugal.   </h3>
                  </div>
                    <a href="/signup">
                      <span className=" btn btn-primary fawnbtn">
                      Sign me up
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

export default Lisbon;
