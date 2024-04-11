import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import People from "../assets/images/caption-people.png"
import HeroBanner1920 from "../assets/images/banners/Homepage_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/Homepage_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/Homepage_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/Homepage_Hero_320.png"
import AmericasProductSlider from "../assets/images/productslider/product_mi-americas_image.jpg"
import EuropeProductSlider from "../assets/images/productslider/product_mi-europe_image.jpg"
import HealthcareProductSlider from "../assets/images/productslider/product_mi-healthcare_image.jpg"
import PrivateProductSlider from "../assets/images/productslider/product_mi-private_image.jpg"
import VIPProductSlider from "../assets/images/productslider/product_mi-vip-connect_image.jpg"
// import HeroInPersonBanner1920 from "../assets/images/banners/Homepage_in_person_events_Hero_1920.png"
// import HeroInPersonBanner1024 from "../assets/images/banners/Homepage_in_person_events_Hero_1024.png"
// import HeroInPersonBanner766 from "../assets/images/banners/Homepage_in_person_events_Hero_766.png"
// import HeroInPersonBanner320 from "../assets/images/banners/Homepage_in_person_events_Hero_320.png"
import HeroFutureHosting1920 from "../assets/images/banners/Homepage_future_hosting_Hero_1920.png"
import HeroFutureHosting1024 from "../assets/images/banners/Homepage_future_hosting_Hero_1024.png"
import HeroFutureHosting766 from "../assets/images/banners/Homepage_future_hosting_Hero_766.png"
import HeroFutureHosting320 from "../assets/images/banners/Homepage_future_hosting_Hero_320.png"
import FeelingBanner1920 from "../assets/images/banners/we_mean_business_homepage_banner_1920.png"
import FeelingBanner1024 from "../assets/images/banners/we_mean_business_homepage_banner_1024.png"
import FeelingBanner766 from "../assets/images/banners/we_mean_business_homepage_banner_766.png"
import FeelingBanner320 from "../assets/images/banners/we_mean_business_homepage_banner_320.png"
import Discover from "../assets/images/discover-hero.png"
import Experiences from "../assets/images/experiences.png"
import FooterCaption from "../assets/images/footercaption.png"
import MobileFooterCaption from "../assets/images/mobile-footercaption.png"
import BlueShape from "../assets/images/blueshape.png"
import HomeCTA from "../assets/images/home-cta.png"
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {
  const { isShowing, toggle } = useModal();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const footerBannerUrl =
    windowWidth >= 650 ? FooterCaption : MobileFooterCaption

  const heroBannerUrl =
    windowWidth <= 479
      ? HeroBanner320
      : windowWidth <= 768
      ? HeroBanner766
      : windowWidth <= 1024
      ? HeroBanner1024
          : HeroBanner1920

          // const heroInPersonBannerUrl =
          // windowWidth <= 479
          //   ? HeroInPersonBanner320
          //   : windowWidth <= 768
          //   ? HeroInPersonBanner766
          //   : windowWidth <= 1024
          //   ? HeroInPersonBanner1024
          //         : HeroInPersonBanner1920

                  const heroFutureHostingBannerUrl =
                  windowWidth <= 479
                    ? HeroFutureHosting320
                    : windowWidth <= 768
                    ? HeroFutureHosting766
                    : windowWidth <= 1024
                    ? HeroFutureHosting1024
                          : HeroFutureHosting1920

                          const heroFeelingBannerUrl =
                          windowWidth <= 479
                            ? FeelingBanner320
                            : windowWidth <= 768
                            ? FeelingBanner766
                            : windowWidth <= 1024
                            ? FeelingBanner1024
                                : FeelingBanner1920



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
        <title>homepage | m&i</title>
        <meta
          name="description"
          content="Welcome to m&i, the home of virtual and in-person networking events for the Meetings & Events Industry."
        />
          <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_Homepage.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_Homepage.png"} />
      </Helmet>
      <div className="site-wrap">


                    <div className="register-your-interest showOnlyMobile">
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto  '
                            >
                             <a href='/signup'>
                                    <span className=' btn btn-primary '>
                                        register your interest
                                    </span>
                                </a>

                            </div>
                            </div>


                </div></div>

        <div
          className="hero-sliderFuture hideBanner "
          style={{ backgroundImage: `url(${heroFutureHostingBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-3">
                <h2
                  className="hero-heading inPerson"
                  style={{ marginLeft: "2%" }}
                >
                  interested in <br className="desktop" />becoming a<br className="desktop" />
                  <span className="coral-underlined">host partner? </span>
                </h2>
                <a href='https://www.wwideevents.com/future-hosting' target='_blank' rel="noopener noreferrer">
                  <span className=" btn btn-primary " style={{marginTop:'2%',marginLeft:'2%'}}>
                    register your interest
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
         <a href="/calendar">
        <div
          className="hero-slider2 feelingSlider "
          style={{ backgroundImage: `url(${heroFeelingBannerUrl})` }}
        >



          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-3 heading2023">

              </div>
            </div>
          </div>

        </div>
        </a>


        <div
          className="hero-slider hideBanner"
          style={{ backgroundImage: `url(${heroBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-3">
                <h2
                  className="hero-heading"
                  style={{ width: "600px", color: "#fff" }}
                >
                  we believe in
                  <br className="desktop" /> the power of <br />
                  <span className="yellow-underlined"> connecting people.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="hero-slider4 hideBanner"
          style={{ backgroundImage: `url(${heroDigitalBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-3">
                <h2
                  className="hero-heading mobileHide"
                  style={{ marginLeft:"5%"}}
                >
                  let's get
                  <br className="desktop" /> <span className="blue-underlined">digital.</span>
                  <br />
                  <p>Get back to business with <br/>m&i Wyred, our new range of no-frills<br/> digital events.</p>

                </h2>
                <h2
                  className="hero-heading getDigital mobileShow"
                >
                  let's get <span className="blue-underlined">digital.</span>
                  <br />
                  <p>Get back to business with m&i Wyred, our new range of no-frills digital events.</p>
                </h2>
              </div>
            </div>
          </div>
        </div> */}
        <div className="py-5 bg-caption">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 text-center mb-3 mb-md-0">
                <img src={People} alt={"banner"} className={"people"} />
              </div>
              <div className="col-md-6 mb-3 mb-md-0">
                <h2 className="mb-4" style={{ lineHeight: "45px" }}>
                  our products centre around <br />
                  <span style={{ color: "#FF5959" }}>
                    face-to-face
                  </span> and <span style={{ color: "#336aff" }}>digital</span>{" "}
                  1-2-1 meetings
                  <br /> for the meetings & events industry.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half block" style={{ paddingTop: "120px" }}>
          <div className="img-bg-1 right desktop responsive">
            <img alt={" "} src={BlueShape} className={"blueShape "} />
          </div>
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                  the future of networking.
                </h2>
                <p>
                  Our events push the tradeshow boundaries to provide an
                  experience unlike any other, where lasting relationships are
                  made. Why? Because we know that when people can really get to
                  know each other, they do better business together. It's
                  exactly this human-to-human mantra that keeps the m&i tribe
                  growing year after year.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half">
          <div className="img-bg-1">
            <img alt={" "} src={Discover} className={"discover"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary">
                  discover a better
                  <br /> way to meet.
                </h2>
                <p style={{ paddingRight: "80px" }}>
                  At m&i, we use state-of-the-art matchmaking technology to help
                  you do business with meetings & events professionals. Meet
                  your AI powered matches face-to-face at our global in-person
                  events or virtually from the comfort of your own office. We’re
                  kind of like the Cupid of the MICE world, so let’s find your
                  best matches!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half" style={{ paddingBottom: "5rem" }}>
          <div className="img-bg-1">
            <img alt={" "} src={Experiences} className={"network"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-rg-auto py-5">
                <h2 className="site-section-heading font-secondary">
                experience innovative in-person <br />
                  events around the world.
                </h2>
                <p>
                Forget everything you thought you knew about tradeshows
                  because m&i in-person events are far from traditional. Our
                  delegates love us for our bold and entirely unique formula -
                  combining business with compelling experiences! Say goodbye to
                  fruitless business meetings and hello to a world of
                  high-energy global events, where networking and new
                  experiences go hand in hand.
                </p>
              </div>
            </div>
          </div>
        </div>


        <h2 className="slider-top-heading" style={{textAlign:'center'}}>which m&i Forum <span className="coral-underlined">will you choose?</span></h2>
        <Slider {...settings}>

        <div>
      <div className="slider-item coral-bg">
      <div className="row">
      <div class="column slider-image" style={{ backgroundImage: `url(${EuropeProductSlider})` }}></div>
        <div className="column">
          <div className="slider-body">
          <h2 className="slider-heading">m&i <span className="yellow-underlined">Europe</span></h2>
          <p className="slider-caption">Our Europe Flagship Forums are big, bold and full of business potential! Over the course of 3 days, you’ll have 40 pre-scheduled meetings, plus further opportunities to connect with UK & European buyers and global suppliers throughout some incredible destination-themed activities. Our Flagship Forums always include some great nightlife experiences too!</p>
                      <a href='/tell-me-more'>
                        <span className='text-white btn btn-primary'>
                        tell me more
                        </span>
                     </a>
                  </div>
                </div>
            </div>
            </div>
          </div>

          <div>
      <div className="slider-item blush-bg">
      <div class="row">
  <div class="column slider-image" style={{ backgroundImage: `url(${HealthcareProductSlider})` }}></div>
        <div class="column">
          <div className="slider-body">
          <h2 className="slider-heading">m&i <span className="coral-underlined">Healthcare</span></h2>
          <p className="slider-caption">If you’re looking to plan events in certified healthcare venues or find dedicated healthcare planners, you’ll love m&i Healthcare. At this two-day event, you’ll get 25 pre-scheduled meetings with specialist healthcare event professionals, along with plenty of enhanced educational content that will help you stay well-informed and up-to-date with the latest industry topics.</p>
                      <a href='/tell-me-more'>
                        <span className='text-white btn btn-primary'>
                        tell me more
                        </span>
                     </a>
                  </div>
                </div>
            </div>
            </div>
          </div>




          <div>
      <div className="slider-item grey-bg">
      <div className="row">
      <div class="column slider-image" style={{ backgroundImage: `url(${AmericasProductSlider})` }}></div>
        <div className="column">
          <div className="slider-body">
          <h2 className="slider-heading">m&i <span className="blue-underlined">Americas</span></h2>
          <p className="slider-caption">Our Americas Flagship Forum is one of our biggest events of the year and always takes place in a top meeting and incentive destination within the Americas. In just 3 exciting days, you’ll conduct 40 pre-scheduled meetings with buyers from the Americas & global suppliers, plus network with fellow attendees throughout exceptional, local activities and nightlife experiences. </p>
                      <a href='/tell-me-more'>
                        <span className='text-white btn btn-primary'>
                        tell me more
                        </span>
                     </a>
                  </div>
                </div>
            </div>
            </div>
          </div>

          <div>
      <div className="slider-item yellow-bg">
      <div className="row">
      <div class="column slider-image" style={{ backgroundImage: `url(${PrivateProductSlider})` }}></div>
        <div className="column">
          <div className="slider-body">
          <h2 className="slider-heading">m&i <span className="coral-underlined">Private</span></h2>
          <p className="slider-caption">m&i Private focuses on the independent sector and connects event planners with boutique hotels and local hotel groups around the world. One of the best things about this event is its size - we’ve deliberately kept it small, resulting in stronger connections and deeper business partnerships. </p>
                      <a href='/tell-me-more'>
                        <span className='text-white btn btn-primary'>
                        tell me more
                        </span>
                     </a>
                  </div>
                </div>
            </div>
            </div>
          </div>

          <div>
      <div className="slider-item fawn">
      <div className="row">
      <div class="column slider-image" style={{ backgroundImage: `url(${VIPProductSlider})` }}></div>
        <div className="column">
          <div className="slider-body-long">
          <h2 className="slider-heading">m&i <span className="blue-underlined">VIP Connect</span></h2>
          <p className="slider-caption">
m&i VIP Connect is the most exclusive event in our calendar. Strictly invitation-only, this Forum is designed to bring the most elite buyers and suppliers of the MICE industry together for three days of top-tier networking. If selected to attend, you can expect 30 pre-scheduled meetings with highly experienced industry professionals plus an exclusive itinerary of high-end experiences.
 </p>
                      <a href='/tell-me-more'>
                        <span className='text-white btn btn-primary'>
                       tell me more
                        </span>
                     </a>
                  </div>
                </div>
            </div>
            </div>
          </div>



    </Slider>

        {/* <div
          className="plane-hero-slider"
          style={{
            backgroundImage: `url(${planeBannerUrl})`,
          }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-8 ml-rg-auto py-5 laptop">
                <h2>
                  say YES to industry events <br />{" "}
                  <span className="blue-underlined"> in 2021</span>
                </h2>
                <br />

                <p>
                  Check out our 2021 calendar and discover <br />
                  your gateway to new connections.
                  <br />
                  <span style={{ fontFamily: "CircularStd-Bold" }}>
                    #meetyouthere2021
                  </span>
                </p>
                <a href="/calendar">
                  <span
                    className=" btn btn-secondary bluebtn"
                    style={{ marginTop: "0px" }}
                  >
                    view events calendar
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="img-bg-1 desktop">
            <img alt={" "} src={FooterSlider} className={"footerSlider"} />
          </div>
        </div> */}

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
                <a href="/tell-me-more"><span className=" btn btn-secondary white" style={{width:'200px'}} >
                  stay in the know
                  </span></a>
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

        {/* <div className="footerCaption">
          <img
            alt={" "}
            src={`${footerBannerUrl}`}
            className={"footerCaptionImg"}
          />
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-8 mb-3 mb-md-0">
                <h2
                  className=" mb-4"
                  style={{ fontSize: "35px", width: "100%" }}
                >
                  goodbye b2b,{" "}
                  <span style={{ textDecoration: "underline" }}>
                    hello h2h!
                  </span>{" "}
                  At m&i, we relate <br /> to each other as humans first. We
                  call this{" "}
                  <span style={{ color: "#FF5959" }}>
                    human-to-human (h2h).
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default Home
