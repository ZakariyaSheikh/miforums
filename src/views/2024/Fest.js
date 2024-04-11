import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Sticky from "react-sticky-el";
import HomeCarousel from "../../components/elements/HomeCarousel"
import "../../assets/scss/style.scss";
import Movenpick from "../../assets/images/events/partner_logos/Movenpick.jpg"
import MiFest from "../../assets/images/events/2024/Fest/miFest.svg"
import Logo from '../../assets/images/events/2024/Fest/festlogo.svg';
import Community1 from '../../assets/images/events/2024/Fest/Community1.png'
import Community2 from '../../assets/images/events/2024/Fest/Community2.png'
import PowderCircle from "../../assets/images/events/2024/Fest/PowderCircle.svg"
import Attend1 from '../../assets/images/events/2024/Fest/attend1.png'
import Attend2 from '../../assets/images/events/2024/Fest/attend2.png'
import Picture1 from '../../assets/images/events/2024/Fest/picture1.png'
import Picture2 from '../../assets/images/events/2024/Fest/picture2.png'
import Picture3 from '../../assets/images/events/2024/Fest/picture3.png'
import Carousel1 from "../../assets/images/events/2024/Fest/Carousel.png";
import Whitelogo from "../../assets/images/events/2024/Fest/festlogowhite.svg"
import useModal from '../../components/elements/useModal';
import Video from '../../assets/images/events/2024/Fest/marrakesh-hero-video.mp4';
import PlayPurpleButton from '../../assets/images/events/fest/playbutton.svg';
import ReactPlayer from 'react-player/youtube'
const Fest = () => {

  const { isShowing, toggle } = useModal();
  const [videoLoading, setVideoLoading] = useState(true);
const [modal, setModal] = useState(false);
const openModal = () => {
  setModal(!modal);
};
const spinner = () => {
  setVideoLoading(!videoLoading);
};
  // const scrollToRef = (ref) => window.scrollTo(0, 500, ref.current.offsetTop);
  // const executeScroll = () => scrollToRef(myRef);

  const [value, setvalue] = useState('')

const  handleOnchange  =  val  => {
  setvalue(val)
}


  const carouselimages = [[Carousel1, Carousel1]];
  
 
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
      Movenpick
    ]
  ];
 

  
  const links = [
   
    ['https://movenpick.accor.com/en/africa/morocco/marrakech/marrakech.html']
  ];
  const headings = ['Gold'];


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Fest | m&i </title>
        <meta
          name="description"
          content="A brand new event format. Where the choice of an exhibition meets the intimate networking power of our Forums."
          
        />
         <meta name="tags"
                content="Marrakesh m&i Fest"/>
       
      </Helmet>
      <div className="site-wrap">
        <div className="event-page fest bambi-bg">
          <div
            className="sprint-hero-slider">
         
         <div class="video-container">
  <iframe className="hero-background-video" width="100%" height="100%" src="https://www.youtube.com/embed/uRNHFKPfSwg?&autoplay=1&mute=1&playsinline=1&controls=0&&showinfo=0&loop=1&playlist=uRNHFKPfSwg" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
 
  <div className="row no-gutters align-items-stretch">
                  <div className="header-section-heading">
                   <img src={Whitelogo}></img>
                  <div className="subtitle"><h4>Experience the difference</h4></div>
                  <a onClick={openModal} >
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal ? 1 : 0}>
              <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url="https://youtu.be/DeBezt8Phsw"
          width='100%'
          height='100%'
        />
      </div>
               
            
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="playButton">
                  <img src={PlayPurpleButton}></img>

                  </div>
                 </a>
                 
                  </div>
              </div>


  


                            </div>

 
</div>




            
            
            

          <Sticky>
            <div className="event-under-banner gum-bg" id="scrollto">
              <div className="container">
                <div className="row no-gutters align-items-stretch">
                  <div className=" ml-rg-auto event-sticky-text" style={{display:'flex'}}>
                    <h3><strong>Marrakesh 24</strong></h3>
                    <h3>17-21 Mar</h3>
                    <h3>Morocco</h3>
                  </div>
                  <div className="ml-rg-auto event-buttons flex-wrap ">
                    
                    <a href="/mi-fest-marrakesh-24">
                      <span className=" btn btn-secondary white">
                     Attend m&i Fest
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
       
          <div className="site-half eventInformationSection bambi-bg" >
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" >
              

<div className="title" >
<h1>The evolution of the MICE trade show</h1>
<p>A brand-new event format. Where the choice of an exhibition meets the intimate networking power of our Forums.</p>
            
              </div>

              </div>

              </div>
            </div>
          </div>

          <div className="site-half develop bambi-bg no-top-padding" >
          <div className="developExploreCelebrate" style={{ backgroundImage: `url(${MiFest})`, backgroundSize:'contain', height:'50%', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}>
              <h1 style={{color:'#352E35'}}>A unique & different event format</h1>
              </div>
              </div>

              
          
          <div className="site-half block meetourcommunity">
         
          <div className="container">
          <div className="img-bg-1">
            <img alt={" "} src={Community1} className={"eventDestination"} width="590px" />
          </div>
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-7 ml-rg-auto "
              >
                <h4> Meet our community</h4>
                <h1 className="site-section-heading font-secondary">
                We are MICE <br/>industry leaders
                </h1>
               
              </div>

              <div
                className="col-lg-5 ml-rg-auto "
              >
                <p
                    
                    className="mobilePadding-2"
                  >
         Over the last 20 years, we’ve listened, evolved and perfected the trade show experience. The result? A much more effective way to network. Our Forum formula is a mix of 1-2-1 meetings with the highest quality buyers & suppliers, immersive destination experiences, and scintillating evening socials that maximise ROI & spark real, human-to-human connection. 
                   <br />
                    <br />
                    Simply put, you won’t find a better return on your time or investment anywhere else.

 
                  </p>
                 
            <img alt={" "} src={Community2} className={"network"} width="590px" />
                  </div>
            </div>
          </div>
        </div>

       
        <div className="site-half develop bambi-bg no-top-padding" >
          <div className="developExploreCelebrate">
              <h1 style={{color:'#352E35'}}>The highest-value MICE event</h1>
              </div>
              </div>

      




              
          
          <div className="site-half block attendmifest" style={{ backgroundImage: `url(${PowderCircle})`, backgroundSize:'contain', height:'auto', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}>
          {/* <div className="powderCircle" style={{ backgroundImage: `url(${PowderCircle})`, backgroundSize:'contain', height:'100%', backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}>
              </div> */}
          <div className="img-bg-1">
            <img alt={" "} src={Attend1} className={"eventDestination"} width="590px" />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-7 ml-rg-auto "
              >
                <h4> Attend m&i Fest</h4>
                <h1 className="site-section-heading font-secondary">
                The best buyers <br/>choose the best <br/>events
                </h1>
               
              </div>

              <div
                className="col-lg-5 ml-rg-auto "
              >
                <p
                    
                    className="mobilePadding-2 discover" 
                  >
       Discover a trade show that is guaranteed to give you increased buyer facetime, maximum brand exposure and more genuine connections.  With unparalleled destination discovery, enhanced personalisation, and brand-new exhibitor spaces, m&i Fest is built to attract the best buyers.
                    
 
                  </p>
                 
            <img alt={" "} src={Attend2} className={"network"} width="590px" />
                  </div>
            </div>
          </div>
        </div>

        <div className="site-half block transforming">
         
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-7 ml-rg-auto "
              >
                <h4> The unmissable event</h4>
                <h1 className="site-section-heading font-secondary">
                Tell your brand <br/>story the m&i<br/> Fest way
                </h1>
               
              </div>

              <div
                className="col-lg-5 ml-rg-auto "
              >
                <p
                    
                    className="mobilePadding-2"
                  >
       A new creative platform unlike any other in the MICE market offering multiple opportunities for maximum brand visibility. We’ll help you get the attention of the industry’s best buyers through a host of immersive brand experiences that tell your brand story and showcase your products, services and properties in powerful ways. 

        <br/><br/>
        Your brand, your way.

 
                  </p>
                 
         
                  </div>
            </div>
          </div>

          <div className="container">
          <div className="row no-gutters align-items-stretch pictures">

<div
    className="col-lg-4 ml-rg-auto py-5"
  >

    <img src={Picture1}></img>

    </div>

    <div
    className="col-lg-4 ml-rg-auto py-5"
  >

    <img src={Picture2}></img>

    </div>

    <div
    className="col-lg-4 ml-rg-auto py-5"
  >

    <img src={Picture3}></img>

    </div>


    </div>


        </div>
        </div>


        <div className="site-half newHeader " >
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" style={{paddingRight:'10%'}}>

              <h2></h2>
               
                <h1>Be the first to discover m&i Fest</h1>
               
                <a href="/mi-fest-marrakesh-24">
                      <span className=" btn btn-secondary purple" style={{width:'220px'}}>
                  Discover m&i Fest
                      </span>
                    </a>
          
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>


          <div className="numbers-section eventNumbers bambi-bg">
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

       

      


      

          
        

  

         
         

          <div
            className="cta-banner"
            style={{ backgroundImage: `url(${Logo})` }}
          >
          
          </div>
          
         

         
        </div>
      </div>
    </>
  );
};

export default Fest;
