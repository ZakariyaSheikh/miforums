import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/banners/opt_in_hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/opt_in_hero_1024.png"
import HeroBanner766 from "../assets/images/banners/opt_in_hero_766.png"
import HeroBanner320 from "../assets/images/banners/opt_in_hero_320.png"
import HomeCTA from "../assets/images/home-cta.png"
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';
import miLogo from '../assets/mi-logo.svg';
import miLogoInverted from '../assets/mi-logo-inverted.png'
import YoutubeEmbed from '../components/elements/YoutubeEmbed'

const JoinUs = () => {
  const { isShowing, toggle } = useModal();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const joinusBannerUrl =
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
      window.removeEventListener("resize", handleWindowResize);
    }
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Join Us | m&i</title>
        <meta
          name="description"
          content="Welcome to m&i, the home of virtual and in-person networking events for the Meetings & Events Industry."
        />
      </Helmet>
      <div className="site-wrap joinus">
      <div
          className="joinus-hero-slider"
          style={{ backgroundImage: `url(${joinusBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-3">
                <img alt={" "} src={miLogo} className={"miLogo"}></img>
                <h2
                  className="hero-heading"
                  style={{ width: "600px" }}
                >
                  welcome
                  <br className="desktop" /> <span className="coral-underlined"> to m&i.<br/></span>
                </h2>
                <br />
                <p>Join our insiders’ community and discover an array of MICE professionals, hospitality leaders, event gurus and travel trailblazers. </p>
                <br/><br/>
                <span className=" btn btn-primary" style={{width:'180px'}} onClick={toggle}>
                join our community
                  </span>
              </div>
            </div>
          </div>
        </div>


        <div className="site-half block " style={{ paddingTop: "120px" }}>
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                <span className="coral-underlined"> who</span> we are.
                </h2>
                <p>
                  m&i is your gateway to connecting with an exciting network of professionals across the Meetings & Events industry.<br /><br/>
                  Our events are made up of tailored 1-2-1 meetings and a thrilling social programme.
We use cutting-edge AI matchmaking technology to create the highest quality meetings for attendees. No more guesswork!

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block no-mobile-top-padding " style={{ paddingTop: "80px" }}>
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                <span className="coral-underlined"> why</span> people love us.
                </h2>
                <p>
                The suppliers who attend our events know they can rely on us to provide an impressive ROI, outstanding meeting quality and countless networking opportunities. Our buyers just love the destinations and venues we uncover, the unique and exciting activities we organise and the high standard of global properties on our guestlist.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block" style={{ paddingTop: "80px", paddingBottom:"50px" }}>
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                but enough talk! want to see an event<br/> for yourself?{" "}
<span className="blue-underlined">here’s a video of one...</span>
                </h2>
                <YoutubeEmbed embedId="D-TAfDIhSuQ" />
              </div>
            </div>
          </div>
        </div>





        <div className="home-footer-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop joinusCTAslider"
                style={{ paddingLeft: "165px", color: "#fff" }}
              >

                <h2 style={{ color: '#fff' }}>
                by joining our mailing list, we’ll make<br/>{" "} sure you <span className="yellow-underlined"> never miss an m&i beat.</span>
                </h2>
                <br />

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                >
                  You’ll receive event updates, including a sneak peek of our <br/>
                { " "} attending guestlists, event offers and early bird sign ups!<br />
                </p>
                  <span className=" btn btn-secondary " style={{width:'200px'}} onClick={toggle}>
                   add me to the list
                  </span>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-3">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={HomeCTA}
                style={{marginRight:'-5rem'}}
                className={"homeCTA desktop"}
              ></img>
            </div>
          </div>
        </div>

        <div>
                <footer className='landingpage-footer bg-dark'>
                    <div className='container'>
                        {/* <div className="row mb-5">
                <div className="col-md-12">

                  <form action="#" className="d-flex footer-subscribe" />
                  <input
                    type="text"
                    className="form-control email-round"
                    placeholder="enter email"
                  />
                  <input
                    type="submit"
                    className="btn btn-primary btn-round"
                    value="send me updates"
                  />
                </div>
              </div> */}
                        <div className='row'>
                            <div className='col-md-12 mb-4 mb-md-0'>
                                <div className='row'>
                                    <div className='col-md-3 moreInfo' style={{marginLeft:'5%', marginRight:'-5%'}}>
                                      <p class="small" style={{width:'500px'}}>Want more info about m&i? <a href="https://www.mi-forums.com/">Click here</a></p>
                    </div>
                    <div className='col-md-3' >

                    </div>
                    <div className='col-md-3' >

                    </div>


                                    <div className='col-md-3'>
                                        <div className='row'>
                                            <div className='col-md-10'>
                                                <h3
                                                    className='footer-heading mb-4 desktop'
                                                    style={{
                                                        color: '#FF5959',
                                                        marginTop: '-6%',
                                                    }}
                                                >
                                                   <img alt={" "} src={miLogoInverted} style={{width:'100px'}}></img>
                                                </h3>
                        </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>

      </div>
      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default JoinUs
