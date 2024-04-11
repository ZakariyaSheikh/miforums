import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Carousel from "../components/elements/Carousel"
import HomeCarousel from "../components/elements/HomeCarousel"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Sticky from "react-sticky-el";
import "../assets/scss/style.scss";
import Spotlight from "../assets/images/events/2024/Marrakesh/Marrakesh.png";
import Apriil from "../assets/images/events/partner_logos/Apriil Event & Congress.png";
import Flytoget from "../assets/images/events/partner_logos/Flytoget_logo.png";
import SNO from "../assets/images/events/partner_logos/sno_logo_hvit_blaa_rgb.png";
import Thon from "../assets/images/events/partner_logos/Thon_hotels.png";
import Furset from "../assets/images/events/partner_logos/furset_gruppen.png";
import Eik from "../assets/images/events/partner_logos/eik_norg.png";
import Why from "../assets/images/homepage24/Why.png";
import Leaders from "../assets/images/homepage24/Leaders.png";
import Carousel1 from "../assets/images/homepage24/Carousel1.png";
import Carousel2 from "../assets/images/homepage24/Carousel2.png";
import Carousel3 from "../assets/images/homepage24/Carousel3.png";
import Carousel4 from "../assets/images/homepage24/Carousel4.png";
import Carousel5 from "../assets/images/homepage24/Carousel5.png";
import QuoteMarks from "../assets/images/homepage24/quotemarks.png";
import Limassol from "../assets/images/homepage24/Limassol.png"
import Americas from "../assets/images/homepage24/Americas.png"
import Porto from "../assets/images/homepage24/Porto.png"
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';


const Home24 = () => {



const videoEl = useRef(null);

const attemptPlay = () => {
  videoEl &&
    videoEl.current &&
    videoEl.current.play().catch(error => {
      console.error("Error attempting to play", error);
    });
};

  const { isShowing, toggle } = useModal();
  
    const [lastWord, setLastWord] = useState(0);
    const words = ['exploration', 'opportunity', 'experience', 'joy', 'business'];
  
    useEffect(() => {
      attemptPlay();
      const interval = setInterval(() => {
        setLastWord((prevWord) => (prevWord + 1) % words.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, [words.length]);

    

  const testimonials = [
    {
      id: 1,
      quote: ' It was my first m&i Forum ever and I just LOVED it so much!',
      caption: 'Not only were the meetings really interesting and allowed me to discover many destinations and hotels, but the organisation of the event was flawless and so complete! It was so good to meet people again and enjoy the on-site experience with everyone!!!',
      author: 'Leslie Delay ',
      position: 'EPIC Events, Luxembourg'
    },
    {
      id: 2,
      quote: ' It was my first m&i Forum ever and I just LOVED it so much!',
      caption: 'Not only were the meetings really interesting and allowed me to discover many destinations and hotels, but the organisation of the event was flawless and so complete! It was so good to meet people again and enjoy the on-site experience with everyone!!!',
      author: 'Leslie Delay ',
      position: 'EPIC Events, Luxembourg'
    },
    {
      id: 3,
      quote: ' It was my first m&i Forum ever and I just LOVED it so much!',
      caption: 'Not only were the meetings really interesting and allowed me to discover many destinations and hotels, but the organisation of the event was flawless and so complete! It was so good to meet people again and enjoy the on-site experience with everyone!!!',
      author: 'Leslie Delay ',
      position: 'EPIC Events, Luxembourg'
    },
    {
      id: 4,
      quote: ' It was my first m&i Forum ever and I just LOVED it so much!',
      caption: 'Not only were the meetings really interesting and allowed me to discover many destinations and hotels, but the organisation of the event was flawless and so complete! It was so good to meet people again and enjoy the on-site experience with everyone!!!',
      author: 'Leslie Delay ',
      position: 'EPIC Events, Luxembourg'
    }
  ];

  
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
    useEffect(() => {
      
      const intervalId = setInterval(() => {
        setCurrentTestimonial(currentTestimonial => (currentTestimonial + 1) % testimonials.length);
      }, 7000);
      return () => clearInterval(intervalId);
    }, []);

 
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
      Apriil, Flytoget, SNO, Thon, Furset, Eik
    ]
  ];

  const carouselimages = [[Carousel1, Carousel2, Carousel3, Carousel4, Carousel5, Carousel1, Carousel2, Carousel3, Carousel4, Carousel5, Carousel1, Carousel2, Carousel3, Carousel4, Carousel5, Carousel1, Carousel2, Carousel3, Carousel4, Carousel5]];
  
 

  
  const links = [
   
    ['https://www.apriil-pco-dmc.no/', 'https://flytoget.no/en/', 'https://snooslo.no/', 'https://www.thonhotels.com/', 'https://www.fursetgruppen.no/', 'https://operaen.no/', 'https://www.eikservering.no/', 'https://www.rengroup.no/']
  ];
  const headings = [''];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);




  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>homepage | m&i</title>
        <meta
          name="description"
          content="Welcome to m&i, the home of virtual and in-person networking events for the Meetings & Events Industry."
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
      <div className="site-wrap homepage">
        <div className="event-page  powder-bg">
          <div
            className="sprint-hero-slider">

<div class="video-container">
          <iframe className="hero-background-video" width="100%" height="100%" src="https://www.youtube.com/embed/LkQpL8kAXCU?&autoplay=1&mute=1&playsinline=1&controls=0&&showinfo=0&loop=1&playlist=LkQpL8kAXCU" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        
    
        </div>


            {/* <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                  <div
                    className="header-section-heading "
                 
                  >
                   <h1>m&i Global <br/>Marrakesh 24</h1>
                   <h4>17-21 March<br/>
                   Mövenpick Marrakesh</h4>

                   <div
      className="scroll-arrow"
      onClick={handleScroll}
    >
     <svg width="70" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" fill="#E0C7B2">
<g><path d="M500,10"/><path d="M500,990L108,598h784L500,990z"/></g>
</svg>
    </div>
                 
                  </div>
                </div>
              </div>
            </div> */}
          </div>

        
       
          <div className="site-half eventInformationSection powder-bg" >
            <div className="container">
              <div className="row no-gutters">
             
              <div className="col-lg-12 mr-lg-auto py-5" >

             
               
                <h1><a href="partnership-guide-headline-partners.pdf" download target="_blank">Making business joyful</a></h1>
                <p>
                Business relationships that last are built from genuine connection. Over the last 20 years, we’ve listened, evolved and perfected the trade show experience. The result? A much more effective way to network. 
                <br/><br/>
                Now you get to experience it too. Welcome to m&i!
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
                  <HomeCarousel images={carouselimages} />
                  </div>
                </div>
              </div>
              <div className="anchorScroll" id="spotlight"></div>
            </div>
          </div>


            <div className="site-half block evenings" style={{ paddingTop: "5rem" }}>
            <div className="img-bg-1">
              {" "}
              <img alt={" "} src={Why} className={"eventDestination"} />
            </div>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5 py-7 blockText">
                <h6>Try it the m&i way</h6>
                  <h2 className="site-section-heading font-secondary why">
                  Why we stand out
                  </h2>
                  <p
                    style={{ paddingRight: "85px" }}
                    
                  >
                  Do you believe that joyful experiences lead to quality connections and better business? We do, too. 
                  
                  <br/><br/>
                  Our not-so-secret success formula – a combination of valuable 1-2-1 meetings and exciting shared experiences – has empowered the industry and helped create thousands of connections. In fact, you could say that we’re the #1 matchmaker for MICE!
                  </p>
                </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
          </div>
               
               
                <div className="site-half block py-7 afternoon">
                <div className="img-bg-1">
            <img alt={" "} src={Leaders} className={"network"} />
          </div>
        
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-7 ml-rg-auto afternoons"
              >
                 <h6>Your next unforgettable event is here</h6>
                <h2 className="site-section-heading font-secondary ">
                Leaders in the MICE industry
                </h2>
                <p
                    style={{ paddingRight: "180px" }}
                    
                  >
         Our Forum formula is a mix of 1-2-1 meetings with the highest quality buyers & suppliers, immersive destination experiences, and scintillating evening socials that maximise ROI & spark real, human-to-human connection. 
         
         <br/><br/>Simply put, you won’t find a better return on your time or investment anywhere else.
                  
                  </p>
              </div>
            </div>
          </div>
          </div>

       
        <div className="site-half sampleProgramme costa-bg">
       
          <p>The numbers don’t lie</p>
          <h1>Why the industry trusts us</h1>
         

          <div className="fourGrid">
            <div className="container">
              <div className="row no-gutters align-items-stretch">

             
               
          
              <div
                className="col-lg-6 ml-rg-auto"
              >
                 <div className="gridItem" style={{backgroundColor:'#D4ACE5'}}>
                 
                 <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#335653'}}>20</h1>
               <p className="itemCaption" style={{color:'#335653'}}>years of experience and getting better every year</p>
               </div>
                </div>
                </div>

              
                <div
                className="col-lg-6 ml-rg-auto"
              >
                  <div className="gridItem" style={{backgroundColor:'#FFE0E0'}}>
                  
                  <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#352E35'}}>3k</h1>
               <p className="itemCaption" style={{color:'#352E35'}}>high quality attendees every year </p>
               </div>
                </div>
                </div>

               
                <div
                className="col-lg-6 ml-rg-auto"
              >
                  <div className="gridItem" style={{backgroundColor:'#E4F2E4'}}>
                 <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#335653'}}>100 <span style={{fontSize:'45px'}}>%</span></h1>
               <p className="itemCaption" style={{color:'#335653'}}>of our attendees said they would recommend m&i events </p>
               </div>
                </div>
                </div>


                <div
                className="col-lg-6 ml-rg-auto"
              >
                  <div className="gridItem" style={{backgroundColor:'#335653'}}>
                 
                  <div className="gridContent">
              <h1 className="itemHeading" style={{color:'#E4F2E4'}}>6 <span style={{fontSize:'45px'}}> RFPs</span></h1>
               <p className="itemCaption" style={{color:'#E4F2E4'}}>on average, our suppliers receive 6 RFPs from m&i events</p>
               </div>
                </div>
                </div>

                </div>

              </div>
            </div>
          </div>

          <div className="site-half eventProgramme powder-bg" >
           
           
               
               
                <div
          className="diamond-quote-block" style={{paddingBottom:"0px"}}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">

              <div className="col-lg-12 ml-rg-auto py-5">
              <img
                alt={" "}
                src={QuoteMarks}
               ></img>
              <div className="testimonial-carousel">
                
      <div className="testimonial">
      <h2 className="diamond-quote-heading">
      {testimonials[currentTestimonial].quote}
                </h2>
             <p className="diamond-quote-caption">{testimonials[currentTestimonial].caption}</p>
        <div class="quote-author">
        <span className="author">{testimonials[currentTestimonial].author}</span><br/>
        <span className="position">{testimonials[currentTestimonial].position}</span>
        </div>
      </div>
    </div>
             
              
            
        </div>
            


      

                
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

      

      

          <div className="site-half exploreEvents raven-bg">

<h1 className="alternating"> 
m&i means {" "}
     <span className="underlined">{'' + words[lastWord]}</span>
    </h1>


          {/* <h1>Explore our events</h1> */}
         

        
            {/* <div className="container">
              <div className="row no-gutters align-items-stretch eventslist" style={{paddingTop:'120px'}}> 

             
               
          
              <div
                className="col-lg-4 ml-rg-auto"
              >
                  <a href="/mi-europe-summer-limassol-2023">
                 <div className="eventItem">
                 <img alt={" "} src={Limassol} className={"eventItemThumbnail"} />
                 <div className="gridContent">
              <h1 className="itemHeading">m&i Europe Summer,<br></br> Limassol 2023</h1>
               <p className="itemCaption">30 Aug–2 Sept</p>
               </div>
                </div>
                </a>
                </div>

              
             

                <div
                className="col-lg-4 ml-rg-auto"
              ></div>
              <div
                className="col-lg-4 ml-rg-auto" style={{textAlign:'center'}}
              > <a href="/calendar">
              <span className=" btn btn-secondary white">
             View full calendar
              </span>
            </a></div>
              <div
                className="col-lg-4 ml-rg-auto"
              ></div>



               
             

              </div>
            </div> */}
          </div>

          <div className="subscribe-banner mint-bg" id="scrollto">
              <div className="container">
                <div className="row no-gutters align-items-stretch">
                  <div className=" ml-rg-auto event-sticky-text">
                    <h3>Don’t want to miss out on any updates? Subscribe to our mailing list.</h3>
                  </div>
                  <div className="ml-rg-auto event-buttons flex-wrap ">
                   
                   
                      <span className=" btn btn-secondary white" onClick={toggle}>
                      Subscribe now
                      </span>
                  </div>
                </div>
              </div>
            </div>
         
       
            <SubscribeModal
                                                isShowing={isShowing}
                                                hide={toggle}
                                            />
         
          
        
        </div>
      </div>
    </>
  );
};

export default Home24;
