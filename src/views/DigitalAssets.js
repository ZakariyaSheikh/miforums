import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import Sticky from "react-sticky-el";
import DigitalAssetsModal from '../components/elements/DigitalAssetsModal';
import HeroBanner1920 from "../assets/images/banners/People_of_m&i_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/People_of_m&i_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/People_of_m&i_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/People_of_m&i_Hero_320.png"
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';
import BrandGuidelines from "../assets/images/toolkitassets/download_brandguidelines.png"
import EventImages from "../assets/images/toolkitassets/download_eventimages.png"
import Logo from "../assets/images/toolkitassets/download_logo.png"
import PartnerGuide from "../assets/images/toolkitassets/download_partnerguide.png"
import SocialMediaAssets from "../assets/images/toolkitassets/download_socialmediaassets.png"
import SocialMediaMessages from "../assets/images/toolkitassets/download_socialmediamessages.png"
import Panel2 from "../assets/images/toolkitassets/panel_2560.png"
import { ReactComponent as DownloadIcon } from "../assets/images/toolkitassets/download_icon.svg"
import LeftShape from "../assets/images/toolkitassets/leftshape.svg"
import RightShape from "../assets/images/toolkitassets/rightshape.svg"

  
const DigitalAssets = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { isShowing, toggle } = useModal();
  const [videoLoading, setVideoLoading] = useState(true);

 
  const heroBannerUrl =
    windowWidth <= 479
      ? HeroBanner320
      : windowWidth <= 768
      ? HeroBanner766
      : windowWidth <= 1024
      ? HeroBanner1024
      : HeroBanner1920

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = 'hidden'
    }
  
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [isShowing])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>the m&i toolkit | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
        />
      </Helmet>
      <div className="site-wrap toolkitPage">
        <div
          className="toolkit-hero-slider"
          
        >
           <img src={LeftShape} className="leftShape"></img>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="toolkit-hero-heading">
                 
                <span className="raven-underlined"> The m&i toolkit</span>
                 
                </h2>
                <p className="caption">Congratulations on becoming an m&i partner! We can’t wait to work with you, but before we start, we need to exchange some assets to prepare us both for the partnership ahead.  </p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="container step1" style={{textAlign:"center"}}>
        <img src={RightShape} className="RightShape"></img>
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="toolkit-steps-heading">
               Step 1
                </h2><br/>
                <h2 className="toolkit-headings">
                
                  Upload your assets
                </h2>
                <p className="toolkit-caption">Share all your assets - logo, videos, photos - using the link below. We’ll be using all of this for our co-branded content on our marketing channels. </p>
                
                <a href="#"  onClick={toggle}>  <span className='text-white btn btn-primary'>
                                                      Upload
                                                    </span></a>

              </div>
            </div>
          </div>
       

       {/* <Sticky>
       <div className="uploadAssetsBar">
              <div className="container AssetsBar" style={{transform:"translateX(25%)"}}>
                <div className="row no-gutters align-items-stretch">
                <div className="col-lg-4 ml-rg-auto">
                  <div className="ml-rg-auto assets-sticky-text">
                    <h3>ready to provide your assets?</h3>
                  </div>
                  </div> <div className="col-lg-2 ml-rg-auto" style={{textAlign:"center"}}>
                  <div className="ml-rg-auto assets-buttons flex-wrap ">

            
                    
                    <a href="#"  onClick={toggle}>
                      <span className=" btn btn-secondary blueBtn">
                        upload
                      </span>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </Sticky> */}



        <div className="digitalAssets-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

            <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="toolkit-steps-heading">
               Step 2
                </h2><br/>
                <h2 className="toolkit-headings">
                Download our assets
                </h2>
                <p className="toolkit-caption">Now it’s our turn. Download all our assets so you can get up to speed with all things m&i and start shouting about us to your network.</p>
              </div>

         
               <div
                className="col-lg-3 ml-rg-auto py-5"
              >
                  <div className="peopleofmi-video-container">

                  <img
                alt={" "}
                src={PartnerGuide}
                className={"video-thumbnails"}
              ></img></div>
                 <h4 className="thumbnail-heading">
                 Campaign messages</h4>
                 <p>Use our templates to deliver updates to your following.</p>
                 {/* <a href="/toolkitassets/Partner_Guide/m&i_partner_guide.pdf" download ><br/>
                  <DownloadIcon width="30px" />
                 </a> */}
              </div>

              <div
                className="col-lg-3 ml-rg-auto py-5"
              >
                  <div className="peopleofmi-video-container">

                  <img
                alt={" "}
                src={Logo}
                className={"video-thumbnails"}
              ></img></div>
                 <h4 className="thumbnail-heading">
                 m&i logo </h4>
                 <p>Use our logo when sharing content with your network.</p>
                 {/* <a href="/toolkitassets/Logo.zip" download ><br/>
                  <DownloadIcon width="30px" />
                 </a> */}
              </div>

            
              <div
                className="col-lg-3 ml-rg-auto py-5"
              >
               
                  <div className="peopleofmi-video-container">

                  <img
                alt={" "}
                src={EventImages}
                className={"video-thumbnails"}
              ></img></div>
                 <h4 className="thumbnail-heading">
                 Event images </h4>
                 <p>Discover photos that capture the m&i feeling perfectly.</p>
                 {/* <a href="/toolkitassets/Event_Images.zip" download ><br/>
                  <DownloadIcon width="30px" />
                 </a> */}
              </div>


              <div
                className="col-lg-3 ml-rg-auto py-5"
              >
               
      
                  <div className="peopleofmi-video-container">

                  <img
                alt={" "}
                src={SocialMediaAssets}
                className={"video-thumbnails"}
              ></img></div>
                 <h4 className="thumbnail-heading">
                 Headline Partner assets</h4>
                 <p>Get your very own email signature and social imagery designed by us.</p>
                 {/* <a href="/toolkitassets/Social_Media_Assets.zip" download ><br/>
                  <DownloadIcon width="30px" />
                 </a> */}
              </div>

            
              <div className="container" style={{textAlign:"center"}}>
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
              
                <a href='/toolkitassets/ToolkitBundle.zip' download>
                                                    <span className='text-white btn btn-primary'>
                                                      Download
                                                    </span>
                                                </a>
              </div>
            </div>
          </div>
          

            </div>
          </div>
        </div>

       

{/* 
        <div className="digitalAssets-footer-slider" style={{ backgroundImage: `url(${Panel2})`}}>
        </div>
        <br/> */}
      </div>
      <div className="digitalAssets-footer">
      <div className="container" style={{textAlign:"center"}}>
            <div className="row no-gutters align-items-stretch">
            <div className="col-lg-12 ml-rg-auto py-5">
              
                <h2 className="toolkit-steps-heading">
               Step 3
                </h2><br/>
                <h2 className="toolkit-headings">
                Book an introductory meeting 
                </h2>
                <p className="toolkit-caption">Schedule a meeting in Calendly to kick-start our partnership.</p>
                <a href='https://calendly.com/gregoryjohntaylor' >
                                                    <span className='text-white btn btn-primary'>
                                                     Book meeting
                                                    </span>
                                                </a>
              </div>
            
            

            </div>
          </div>
          </div>

     
                                <DigitalAssetsModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default DigitalAssets
