import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/banners/contact_thank_you_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/contact_thank_you_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/contact_thank_you_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/contact_thank_you_Hero_320.png"

const ThankYou = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const heroBannerUrl =
    windowWidth <= 479
      ? HeroBanner320
      : windowWidth <= 768
      ? HeroBanner766
      : windowWidth <= 1024
      ? HeroBanner1024
      : HeroBanner1920

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>thank you | m&i</title>
        <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_Thank_you.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_Thank_you.png"} />
      </Helmet>
      <div className="site-wrap">
      <div className="site-half newHeader mint-bg" style={{paddingTop:'10rem'}}>
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" style={{paddingRight:'10%'}}>

              <h2></h2>
               
                <h1>Success!</h1>
                <p>
                That was one small step for you, one giant leap for your business prospects. 
                
                <br/><br/>We’ll be in touch very soon to discuss the next steps.
                </p>
                
          
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

        <div className="thankyou-block grey">

        <div className="site-half newHeader camel-bg" style={{paddingTop:'0'}}>
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" style={{paddingRight:'10%'}}>

              <h2></h2>
               
                <h1>   so, now what?</h1>
                <p>
                We never like to leave our guests twiddling their thumbs, so here are a few ideas to keep you entertained until your next coffee break…
                </p>
               

                <h3 className="youTubeLink">
                  Check out our{" "}
                  <a href="https://www.youtube.com/user/meetingforums">
                    <span className="coral underlined">
                      YouTube channel.{" "}
                    
                    </span>
                  </a>
                </h3>
                <br />
                <h3 className="instagramLink">
                  Head over to our{" "}
                  <a href="https://www.instagram.com/miforums/">
                    <span className="coral underlined">
                      Instagram page.
                    </span>
                  </a>
                </h3>
                <br />
                <h3 className="youTubeLink">
                  Find out more{" "}
                  <a href="/about">
                    <span className="blue"></span>
                    <span className="coral underlined">about us.</span>
                  </a>
                </h3>
                
          
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>


        </div>
      </div>
    </>
  )
}

export default ThankYou
