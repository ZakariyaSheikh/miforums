import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import ForJoy from "../assets/images/aboutus_joy.png"
import WeLove from "../assets/images/welovewhatwedo.png"
import BarHigh from "../assets/images/aboutus_bar_high.png"
import BeBold from "../assets/images/aboutus_bold.png"
import HeroBanner1920 from "../assets/images/banners/about_us_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/about_us_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/about_us_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/about_us_Hero_320.png"
import HomeCTA from "../assets/images/home-cta.png"
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';

const Person = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { isShowing, toggle } = useModal();
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
        <title>about | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
        />
         <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_About.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_About.png"} />

      </Helmet>
      <div className="site-wrap">
        <div
          className="about-hero-slider"
          style={{ backgroundImage: `url(${heroBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="about-hero-heading">
                  our story
                  <br /> begins{" "}
                  <span class="coral-underlined">
                    {" "}
                    with <br />a dream.{" "}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half block">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto py-5">
                <h2 className="site-section-heading font-secondary">
                  <span class="blue-underlined">re-imagining</span> the
                  traditional trade show.
                </h2>
                <p>
                  For 20 years, m&i has been moving, shaking and innovating within the MICE industry. The global networking
                  events we create are designed to be a welcome break from the
                  traditional industry trade show, with a firm focus on building
                  lasting business relationships as well as unforgettable
                  memories.
                  <br />
                  <br />
                  Our expert team is made up of passionate, forward-thinking
                  people with the shared goal of connecting the MICE world
                  through high-quality meetings and out-of-the-box networking
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half block padding-bottom mobileAbout">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8">
                <h3>So, what makes us tick?</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="about-block coral-bg">
          <div className="img-bg-1">
            <img alt={" "} src={WeLove} className={"weLove"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5 white">
                <h2 className="site-section-heading font-secondary white">
                  we love{" "}
                  <span
                    style={{ textDecoration: "underline", color: "#131A33" }}
                  >
                    what we do.
                  </span>
                </h2>
                <p style={{ paddingRight: "80px" }}>
                  You know the old saying ‘no one can love you if you don’t love
                  yourself’? At m&i, we take pride in what we do and are truly
                  passionate about providing the best events in the industry.
                  That’s why our attendees love m&i events and return year after
                  year.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-block">
          <div className="img-bg-1">
            <img alt={" "} src={BarHigh} className={"barHigh"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch ">
              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  we set the <span class="blue-underlined"> bar high.</span>
                </h2>
                <p>
                  Your success is our success. We set high standards for our
                  events because providing the best quality meetings has always
                  been (and always will be) our top priority. We’ll never stop
                  pushing beyond our own limits to bring you the very best event
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-block yellow-bg">
          <div className="img-bg-1">
            <img alt={" "} src={BeBold} className={"weLove"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5 ">
                <h2 className="site-section-heading font-secondary ">
                  we strive to <span class="blue-underlined">be bold.</span>
                </h2>
                <p style={{ paddingRight: "80px" }}>
                  Traditional isn’t our style. m&i products are designed to
                  break boundaries and cross thresholds, so our attendees can
                  experience the new and exciting at every single event.
                  Innovation is our passion. From our event formats to the
                  latest cutting-edge technology, we’re brave enough to try new
                  things, take risks and lead the way for the future of industry
                  trade shows.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-block">
          <div className="img-bg-1">
            <img alt={" "} src={ForJoy} className={"barHigh"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch ">
              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  we do it <span class="coral-underlined"> for joy.</span>
                </h2>
                <p>
                  Who says you can’t do great business whilst having fun? We
                  believe the most rewarding industry relationships are created
                  in a creative, inspiring and relaxed atmosphere, and that’s
                  exactly what we bring to all our events, both in-person and
                  virtual.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="home-footer-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 class="yellow-underlined">
                  stay in the know{" "}
                </h2>
                <br />

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                >
                  Sign up to our mailing list and be the first to hear<br />
                { " "} about our latest event updates.
                </p>

                <span className=" btn btn-secondary white" style={{width:'200px'}} onClick={toggle}>
                   add me to your list
                  </span>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-3">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={HomeCTA}
                className={"homeCTA desktop"}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default Person
