import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../components/elements/Carousel"
import Sticky from "react-sticky-el";
import "../../assets/scss/style.scss";
import Spotlight from "../../assets/images/events/2024/Marrakesh/Marrakesh.png";
import CTA from "../../assets/images/events/2024/Marrakesh/CTA.png";
import Mornings from "../../assets/images/events/2024/Marrakesh/Mornings.png"
import Afternoons from "../../assets/images/events/2024/Marrakesh/Afternoons.png"
import Evenings from "../../assets/images/events/2024/Marrakesh/Evenings.png"
import Movenpick from "../../assets/images/events/partner_logos/Movenpick.jpg"
import Herobanner from "../../assets/images/events/2024/Fest/hero-banner.png"
import Ctabanner from "../../assets/images/events/2024/Fest/cta-banner.jpg"
import Whitelogo from "../../assets/images/events/2024/Fest/festlogowhite.svg"
import Split1 from "../../assets/images/events/2024/Fest/Split1.png"
import Split2 from "../../assets/images/events/2024/Fest/Split2.png"
import Split3 from "../../assets/images/events/2024/Fest/Split3.png"
import Split4 from "../../assets/images/events/2024/Fest/Split4.png"
import MiceYou from "../../assets/images/events/2024/Fest/WMY-logo.jpg"
import Pestana from "../../assets/images/events/partner_logos/Pestana.png"
import Barcelo from "../../assets/images/events/partner_logos/Barcelo.png"
import Morocco from "../../assets/images/events/partner_logos/Amazing_Morocco_Logo.png"
import FairmontTaghazout from "../../assets/images/events/partner_logos/Fairmont_Taghazout_Bay.png"
import FairmontRoyal from "../../assets/images/events/partner_logos/Fairmont_Royal_Palm_Marrakech.png"
import FairmontTazi from "../../assets/images/events/partner_logos/Fairmont_Tazi_Palace_Tangier.png"
import FairmontMarina from "../../assets/images/events/partner_logos/Marina_Rabat.png"
import GainAdvisors from "../../assets/images/events/partner_logos/Gaintalks.png"
import ParkHyatt from "../../assets/images/events/partner_logos/parkhyatt.jpg"
import Prod from "../../assets/images/events/partner_logos/11prod.png"

const Marrakesh24 = () => {

 
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
    
    [Movenpick],
    [FairmontMarina, FairmontRoyal, FairmontTaghazout, FairmontTazi],
    [
      MiceYou, Pestana, Barcelo, Morocco
    ],
    [GainAdvisors],
    [ParkHyatt],
    [Prod]
  ];
 

  
  const links = [
   
    ['https://movenpick.accor.com/en/africa/morocco/marrakech/marrakech.html'],['https://www.fairmont.fr/rabat/', 
    'https://www.fairmont.fr/marrakech/', 'https://www.fairmont.com/taghazout/', 'https://www.fairmont.fr/tangier/'],
    ['https://wemiceyou.ma/', 'https://www.pestanacr7.com/fr/hotel/pestana-cr7-marrakech', 'https://www.barcelo.com/fr-fr/barcelo-palmeraie/', 'http://www.amazingmorocco.com/'], 
    ['https://gainadvisors.com/'], ['https://www.hyatt.com/en-US/hotel/morocco/park-hyatt-marrakech'], ['https://11prod.ma/']
  ];
  const headings = ['Headline Partner', 'Headline Partner', 'Event Partners', 'Strategic Partner', 'Supporting Partner', 'Event Sponsor'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Fest Marrakesh 24 | m&i </title>
        <meta
          name="description"
          content="Global suppliers meet global buyers at our biggest m&i event yet in the bustling Marrakesh."
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
        <div className="event-page marrakesh camel-bg">
          <div
            className="sprint-hero-slider"
            style={{
              backgroundImage: `url(${Herobanner})`,
          }}>


          
            
              <div className="row no-gutters align-items-stretch">
                  <div className="header-section-heading">
                   <img src={Whitelogo}></img>
                  <div className="subtitle"><h4>Marrakesh 24</h4><h4>17-21 Mar</h4><h4>Morocco</h4></div>
                  
                 
                  </div>
              </div>
            
          </div>

          <Sticky>
            <div className="event-under-banner gum-bg" id="scrollto">
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
                      <span className=" btn btn-secondary white">
                      Register now
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
       
          <div className="site-half camel-bg no-padding" style={{paddingTop:'0'}} >

          <div className="row splitrow bambi-bg develop">
                        <div class="column leftSide" style={{ backgroundImage: `url(${Split1})` }} >
                        <div className='col-lg-12 ml-rg-auto py-5'>
                              
                            
                            
                            </div>

            </div>

                <div className="column rightSide" >
                            <div className='col-lg-12 ml-rg-auto py-5'>
                            <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-7 ml-rg-auto "
              >
                <h4> 1-2-1 meetings</h4>
                <h1 className="site-section-heading font-secondary">
                Develop <br/>new business relationships
                </h1>
               
            
                <p
                    
                    className="mobilePadding-2"
                  >
         40 high-quality meetings with leading MICE experts, saving you months of work. Develop genuine connections with people you really want to meet. A personalised schedule delivering maximum value, starting a lifetime of business. 

 
                  </p>
                 
                  </div>
            </div>
          </div>
                          
                            </div>
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
                <h4> Afternoons of choice </h4>
                <h1 className="site-section-heading font-secondary">
                Explore  <br/>Marrakesh
                </h1>
               
            
                <p
                    
                    className="mobilePadding-2"
                  >
        We create authentic shared experiences for maximum buyer-supplier interaction as you explore the highlights of Marrakesh. More opportunities to connect whilst you discover stunning Marrakesh properties, go on an adventure in the Moroccan landscape, or select a restorative or relaxing path – your event: Your way.
                  </p>
                 
                  </div>
            </div>
          </div>
                            
                            
                            </div>

            </div>

                <div className="column rightSide afternoons" style={{ backgroundImage: `url(${Split2})` }}>
                            <div className='col-lg-12 ml-rg-auto py-5'>
                          
                          
                            </div>
                </div>
        </div>

        <div className="row splitrow celebrate" style={{backgroundColor:"#352E35"}}>
                        <div class="column leftSide celebrate" style={{ backgroundImage: `url(${Split3})` }} >
                        <div className='col-lg-12 ml-rg-auto py-5'>
                              
                            
                            
                            </div>

            </div>

                <div className="column rightSide celebrate" >
                            <div className='col-lg-12 ml-rg-auto py-5'>
                            <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-7 ml-rg-auto "
              >
                <h4 className="bambi"> Evenings of entertainment</h4><br/>
                <h1 className="site-section-heading font-secondary bambi">
                Celebrate <br/>in Festival style
                </h1>
                <br/>
               
            
                <p
                    
                    className="mobilePadding-2 bambi"
                  >
        Celebrate in Fest style at a choice of beautiful properties in Marrakesh while sparking new and exciting business relationships.  

 
                  </p>
                 
                  </div>
            </div>
          </div>
                          
                            </div>
                </div>
        </div>


          
          </div>

          <div class="video-container">
          <iframe className="hero-background-video" width="100%" height="100%" src="https://www.youtube.com/embed/fXyICyt0Agg?&autoplay=1&mute=1&playsinline=1&controls=0&&showinfo=0&loop=1&playlist=uRNHFKPfSwg" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        
           <div className="header-section-heading magic">
                   <h1>Marrakesh Magic</h1>
                   <p>
                    With its year-round sunny climate, excellent infrastructure, luxury accommodation, and incentive options, Morocco has long been established as a global MICE destination - the perfect home for m&i Fest.  <br/><br/>Discover stunning venues around Marrakesh. A breathtakingly beautiful city that blends tradition and modernity.  
                   </p>
                 
                 
                  </div>
        </div>

         
            
          

          <div className="site-half camel-bg no-padding accommodationvenue" style={{paddingTop:'0'}} >
          <div className="row splitrow" style={{backgroundColor:"#ECDDD1"}}>
                        <div class="column leftSide accommodation"  >
                        <div className='col-lg-12 ml-rg-auto py-5'>
                              
                        <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-7 ml-rg-auto "
              >
                <h4> Accommodation and Meeting venue</h4>
                <h1 className="site-section-heading font-secondary">
                <a
                                            className='venueLink'
                                            rel='noopener noreferrer'
                                            target="_blank"
                                            href='https://movenpick.accor.com/en/africa/morocco/marrakech/marrakech.html'
                                        >
                                          Mövenpick Hotel Mansour Eddahbi & Palais des Congrès Marrakech
                                        </a>
               
                </h1>

                <hr></hr>

                <h1 className="site-section-heading font-secondary">
                <a
                                            className='venueLink'
                                            rel='noopener noreferrer'
                                            target="_blank"
                                            href='https://www.pestanacr7.com/fr/hotel/pestana-cr7-marrakech'
                                        >
                                          Pestana CR7 Marrakesh Lifestyle Hotels
                                        </a>
               
                </h1>
               
            
               
                 
                  </div>
            </div>
          </div>
                            
                            
                            </div>

            </div>

                <div className="column rightSide accommodation" style={{ backgroundImage: `url(${Split4})` }}>
                            <div className='col-lg-12 ml-rg-auto py-5'>
                          
                          
                            </div>
                </div>
        </div>
        </div>

        <div className="site-half sampleProgramme ground-bg">
          <h1>How m&i Fest works</h1>
          <p>The details</p>
          <h3>17-21 March 2024 <br/>Mövenpick Marrakesh</h3>

          <div className="fourGrid">
            <div className="container">
              <div className="row no-gutters align-items-stretch">

             
               
          
              <div
                className="col-lg-6 ml-rg-auto"
              >
                 <div className="gridItem" style={{backgroundColor:'#ECDDD1'}}>
                 
                 <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#352E35'}}>4</h1>
               <p className="itemCaption" style={{color:'#352E35'}}>days</p>
               </div>
                </div>
                </div>

              
                <div
                className="col-lg-6 ml-rg-auto"
              >
                  <div className="gridItem" style={{backgroundColor:'#FBEFE7'}}>
                  
                  <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#352E35'}}>40</h1>
               <p className="itemCaption" style={{color:'#352E35'}}>one-to-one meetings</p>
               </div>
                </div>
                </div>

               
                <div
                className="col-lg-6 ml-rg-auto"
              >
                  <div className="gridItem" style={{backgroundColor:'#FBEFE7'}}>
                 <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#352E35'}}>230</h1>
               <p className="itemCaption" style={{color:'#352E35'}}>suppliers including global MICE destinations and International hotel brands </p>
               </div>
                </div>
                </div>


                <div
                className="col-lg-6 ml-rg-auto"
              >
                  <div className="gridItem" style={{backgroundColor:'#ECDDD1'}}>
                 
                  <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#352E35'}}>240</h1>
               <p className="itemCaption" style={{color:'#352E35'}}>of the highest-quality buyers </p>
               </div>
                </div>
                </div>

                </div>

              </div>
            </div>
          </div>

          {/* <div className="site-half eventProgramme camel-bg" >
            <div className="container">
              <div className="row no-gutters">
             
              <div className="col-lg-12 mr-lg-auto py-5" >

              <h2>An event programme developed around our core pillars</h2>
               
                <h1>Develop – Discover – Celebrate</h1>

                <div className="site-half block evenings" style={{ paddingBottom: "5rem" }}>
            <div className="img-bg-1">
              {" "}
              <img alt={" "} src={Mornings} className={"eventDestination"} />
            </div>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-5 ml-lg-auto py-5">
                  <h2 className="site-section-heading font-secondary ">
                  Mornings of meetings
                  </h2>
                  <p
                    style={{ paddingRight: "120px" }}
                    className="mobilePadding-2"
                  >
                  High quality meetings with leading MICE experts. Build genuine connections with people you really want to meet. A personalised schedule delivering maximum value, starting a lifetime of business. 
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>
               
               
                <div className="site-half block py-7 afternoon">
                <div className="img-bg-1">
            <img alt={" "} src={Afternoons} className={"network"} />
          </div>
        
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-7 ml-rg-auto afternoons "
              >
                <h2 className="site-section-heading font-secondary ">
                Afternoons of choice
                </h2>
                <p
                    style={{ paddingRight: "140px" }}
                    className="mobilePadding-2"
                  >
         Discover the highlights of Marrakesh with authentic shared experiences allowing maximum buyer-seller interaction, and more opportunities to connect. Explore stunning Marrakesh properties, go on an adventure in the Moroccan landscape, or select a restorative or relaxing path – your event: Your way. 
                  
                  </p>
              </div>
            </div>
          </div>
        </div>


        <div className="site-half block evenings" >
            <div className="img-bg-1">
              {" "}
              <img alt={" "} src={Evenings} className={"eventDestination"} />
            </div>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-5 ml-lg-auto py-5">
                  <h2 className="site-section-heading font-secondary py-5 ">
                  Celebrate in festival style
                  </h2>
                  <p
                    style={{ paddingRight: "120px" }}
                    
                  >
                  Celebrate in Fest style at a choice of beautiful properties in Marrakesh while sparking new and exciting business relationships.  
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
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
                                            href='https://movenpick.accor.com/en/africa/morocco/marrakech/marrakech.html'
                                        >
                                    Mövenpick Hotel Mansour Eddahbi & Palais des Congrès Marrakech
                                        </a>
                                    </h2>
                                </div>

                            </div>
                            <div className='anchorScroll' id='itinerary'></div>
                        </div>
                    </div> 

                
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

        <div className="site-half block scroll" style={{ paddingBottom: "5rem" }}>
        <div id="scroll-container">
  <div id="scroll-text">Meet the best global buyers and global suppliers in a MICE hotspot  </div>
</div>
    </div> */}

  

         
          <div className="packages-section" style={{backgroundColor:'#FFD05C'}}>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-lg-auto py-5 ">

                  <h1 className="site-section-heading font-secondary">
                      What's in it for you?
                  </h1>

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
        <div className="tabs-description"><p>Want to get the attention of the industry’s best buyers at events that offer the highest converting RFPs? Let’s work together to get you more face time, maximum brand visibility, and more genuine connections.  <br/><br/> We’ll help you showcase your business products and properties in powerful ways. It’s your time to shine! </p></div>

        <ul className='packages'>
                                                        <li>
                                                        4 days of high-quality networking with top international buyers 
                                                        </li>
                                                        <li>
                                                        40 1-2-1 meetings to save you weeks of work
                                                        </li>

                                                        <li>
                                                        Cutting-edge AI matchmaking technology to find your best meeting potential. We ensure you meet buyers who have business for you
                                                        </li>
                                                        <li>
                                                        Afternoon networking activities designed to give you maximum buyer interaction and greater potential to connect
                                                        </li>
                                                        <li>
                                                        Dedicated exhibitor space and enhanced visibility opportunities for tourism brands to showcase their products & services powerfully
                                                        </li>
                                                        <li>
                                                        Sponsorship opportunities for maximum brand visibility and impact
                                                        </li>
                                                        <li>Celebrate with the industry and enjoy best m&i Fest nightlife for maximum buyer facetime     </li>
                                                       <li>Personal Account Manager to guide you from start to finish    </li>

                                                      
                                                    </ul>

          
        </div>
      </div>
      <div className={`accordion ${activeTab === 'buyers' ? 'open' : ''}`}>
        {/* Buyers content */}
        <div className="content">

        <div className="tabs-description"><p> We’re giving you more choice than ever before to discover the MICE highlights of the destination and how it puts on outstanding events. Meet with a wider variety of the best quality suppliers. This event has been designed with you in mind!     <br/><br/>Tailor your experience, choosing from an array of possible destination discovery options. Your event, your way, for your business!   </p></div>

       




        <ul className='packages'>
                                                        <li>
                                                        4 days of destination discovery and high-quality networking with top global suppliers
                                                        </li>
                                                        <li>
                                                        See the destination through the eyes of your clients – experience the destination as an attendee 
                                                        </li>

                                                        <li>
                                                        Experience how the destination hosts International events through the eyes of an attendee 
                                                        </li>
                                                        <li>
                                                        Personalised schedule of 1-2-1 meetings 
                                                        </li>
                                                        <li>
                                                        Cutting-edge AI matchmaking technology to find your best meeting potential. We ensure you meet the suppliers you want to meet   
                                                        </li>
                                                        <li>Immersive destination discovery — explore Marrakesh’s MICE infrastructure & culture – more choice than ever before with activity ‘pathways’ </li>
                                                        <li>Fully hosted bespoke buyer package, including accommodation and transfers, airfare/train credits, breakfast, lunch and dinner  </li>
                                                        <li>Connect with the industry during networking activities and celebrate at glamorous dinners and evening events. Live your best Fest life!   </li>
                                                    

                                                      
                                                     
                                                        <li>
                                                            New to m&i?
                                                            Wondering what to
                                                            expect at our events
                                                            ? See{' '}
                                                            <a href='https://mi-forums.com/buyer-experience'>
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
            style={{ backgroundImage: `url(${Ctabanner})` }}
          >
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5 laptop">
                  <div className="cta-content">
                  <div
                    className="footer-section-heading "
                 
                  >
                        <h3>m&i Fest Marrakesh 24</h3>
                   <h1>Join us on this <br/>new <span className="underlined">journey</span></h1>
                   <h3 className="caption">Our guestlist is strictly limited so if you want a space, get in early!</h3>
                  </div>
                    <a href="/signup">
                      <span className=" btn btn-primary fawnbtn">
                   Secure your space
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
          
          {/* <div className="site-half partnerSection">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                  <h3 className="site-section-heading font-secondary">
                    Host Partners
                  </h3>

                  <Carousel images={images} links={links} headings={headings} autoPlay />
                  
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

export default Marrakesh24;
