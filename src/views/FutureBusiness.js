import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/events/future_business/WM_Future_Business_Hero_1920.png"
import HeroBanner1024 from "../assets/images/events/future_business/WM_Future_Business_Hero_1024.png"
import HeroBanner766 from "../assets/images/events/future_business/WM_Future_Business_Hero_766.png"
import HeroBanner320 from "../assets/images/events/future_business/WM_Future_Business_Hero_320.png"
import Spotlight from "../assets/images/events/future_business/WM_Future Business_Image2.png"
import WomanSitting from "../assets/images/events/future_business/WM_Future Business_Image3.png"
import QuoteIcon from "../assets/images/quotation_icon_white.svg"
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const FutureBusiness = () => {
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
        <title>Wyred Meets: Future business | m&i</title>
        <meta
          name="description"
          content="Get to work on post-pandemic events and meet MICE professionals with business for you. Sign up today!"
        />
      </Helmet>
      <div className="site-wrap">
        <div
          className="seville-hero-slider "
          style={{
            backgroundImage: `url(${heroBannerUrl})`,
            height: "auto",
            paddingBottom: " 10%",
            paddingTop: "15%",
          }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 wyredleft mobileBanner"
                style={{ color: "#131A33" }}
              >
                <h1 className="header-section-heading sevilleheader mobileHide">
                  Wyred Meets: <br />
                  <span className="fawn-underlined">Future Business</span>
                </h1>
                <h1 className="header-section-heading sevilleheader mobileShow">
                  Wyred Meets: <br />
                  <span className="fawn-underlined">Future Business</span>
                </h1>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="site-half block marketCaption">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto">
                <p>
                  Isn’t it nice to think that after a mere four hours of
                  meetings, you could have brand-new business partners and be
                  one step ahead of the pandemic? Well, luckily, we’ve created
                  an entire event to make that thought a reality! <br />
                  <br />
                  Introducing Wyred Meets: Future Business, a no-frills,
                  budget-friendly gathering of buyers and suppliers with one
                  common trait — they’re 100% ready to start planning and
                  hosting future events. From the comfort of wherever you are in
                  the world, you’ll have the chance to meet and discuss some
                  very real events taking place in 2021 and beyond. So, whether
                  you’re a planner with client briefs that need working on
                  sooner rather than later, or a supplier looking to host your
                  first post-pandemic events, you’ll feel right at home with
                  Future Business.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="numbers-section eventNumbers blue-bg">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-4 laptop"
                style={{ color: "#fff" }}
              >
                <div className="inNumbers white">
                  <h2 className="site-section-heading font-secondary white">
                    <span className="yellow-underlined">Future Business</span>{" "}
                    by numbers.
                  </h2>
                  <ul>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers yellow">40</h1>
                        <p>suppliers</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers yellow">50</h1>
                        <p>buyers</p>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="numbers-caption">
                        <h1 className="eventNumbers yellow">10</h1>
                        <p>meetings</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers yellow">15</h1>
                        <p>minutes per meeting</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half block" style={{ paddingBottom: "5rem" }}>
          <div className="img-bg-1">
            {" "}
            <img alt={" "} src={Spotlight} className={"eventDestination"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary ">
                  here's how the event works... <br />
                </h2>
                <p style={{ paddingRight: "80px" }} className="mobilePadding-2">
                  Once you’ve signed up to a Future Business event, you’ll
                  provide us with some essential info about you and your
                  business needs. Our AI matchmaking technology will then
                  analyse your information and reveal your best matches. It’s
                  then completely down to you to choose who you want to meet out
                  of your matches. And because this is a no-frills, simply
                  meetings event, you’ll be able to meet all 10 of your selected
                  matches in just half a day! By the way, as a special bonus,
                  we’re giving all attendees a complimentary hour in our
                  Networking Lounge, so you’ll meet even more people - result!
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="packages-market-section blush-bg eventDetails">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  <span className="coral-underlined">event details</span>
                </h2>
                <table className="eventTable marketTable">
                  {/* <tr className="eventRow">
                    <td className="eventName">
                      {" "}
                      Wyred Meets:
                      <br />
                      <span className="underlined">
                        Future Business, Europe
                      </span>
                    </td>
                    <td className="date">19 may 2021 </td>
                    <td className="location mobileHide">European suppliers</td>
                    <td className="location mobileHide">UK & European buyers</td>
                    <td className="location mobileShow">
                      European suppliers | UK & European buyers
                    </td>
                    <td className="signup">
                      <a href="/signup">
                        <span className=" text-white btn btn-primary ">
                          sign up
                        </span>
                      </a>
                    </td>
                  </tr> */}
                  <tr className="eventRow">
                    <td className="eventName">
                      {" "}
                      Wyred Meets:
                      <br />
                      <span className="underlined">
                        Future Business, Americas
                      </span>
                    </td>
                    <td className="date">13 jul 2021 </td>
                    <td className="location mobileHide">American suppliers</td>
                    <td className="location mobileHide">American buyers</td>
                    <td className="location mobileShow">
                      American suppliers | American buyers
                    </td>
                    <td className="signup">
                      <a href="/signup">
                        <span className=" text-white btn btn-primary ">
                          sign up
                        </span>
                      </a>
                    </td>
                  </tr>
                </table>
                <br /><p>Wyred Meets: Future business, Americas and Wyred Meets: New Openings, Americas will run concurrently on 13 july 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="packages-market-section">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  <span className="coral-underlined">supplier pricing:</span>{" "}
                  £950 / $1300
                </h2>
                <h3>did you know?</h3>
                <p style={{ lineHeight: "2" }}>
                  You can now sign up for all our digital events on our website
                  and <br />
                  pay directly online as part of our fast-track payment system.
                </p>
                <br />
                <br />
                <br />
                <h2 className="site-section-heading font-secondary">
                  <span className="blue-underlined">
                    as a supplier, you will...
                  </span>
                </h2>
                <ul className="packages">
                  <li>
                    Attend 10 pre-scheduled meetings with buyers looking to
                    fulfil future event briefs
                  </li>
                  <li>
                    Experience higher quality meetings with AI matchmaking
                    technology
                  </li>
                  <li>Benefit from budget-friendly pricing</li>
                  <li>
                    Receive buyer contact details from all your pre-scheduled
                    meetings after the event
                  </li>
                  <li>
                    Further connect with buyers and fellow suppliers during our
                    complimentary Networking Hour
                  </li>
                  <li>
                    Significantly expand your buyer reach in only half a day
                  </li>
                </ul>
                <br />
                <h2 className="site-section-heading font-secondary">
                  <span className="blue-underlined">
                    as a buyer, you will...
                  </span>
                </h2>
                <ul className="packages">
                  <li>Attend the event free of charge</li>
                  <li>
                    Get 10 pre-scheduled meetings with venues ready to host
                    future events
                  </li>
                  <li>
                    Experience smarter meetings with AI matchmaking technology
                  </li>

                  <li>
                    Receive supplier contact details from all your pre-scheduled
                    meetings after the event
                  </li>
                  <li>
                    Further connect with suppliers and fellow buyers during our
                    complimentary Networking Hour
                  </li>
                  <li>
                    Learn all about the updated health & safety policies for
                    each hotel and destination
                  </li>
                  <li>
                    Fulfil your client briefs by meeting new business partners
                    in only half a day
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="event-footer-slider grey-bg testimonialSection">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <img alt={" "} src={QuoteIcon} class="quoteIcon"></img>
                <br />

                <p className="testimonialText">
                  The m&i Wyred events we attended were very smooth. We managed
                  to gain some great new connections and business opportunities
                  in a small amount of time.
                </p>
                <br />
                <p className="testimonialAuthor">
                  <strong>Fanni Zoltai</strong>
                  <br />
                  Budapest Marriott Hotel, (Hungary)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="market-footer-slider yellow-bg">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2>
                  <span className="blue-underlined"> are you ready</span> to
                  start <br /> planning and hosting
                  <br /> future events?
                </h2>
                <br />

                <p className="eventFooterText">
                  The future is now! Places for this event are strictly
                  <br /> limited, so don’t miss out! Apply for Future
                  <br /> Business today by clicking below.
                </p>
                <a href="/signup">
                  <span className=" btn btn-secondary white">apply</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-5 mobileHide">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={WomanSitting}
                className={"twoPeople desktop"}
                style={{ width: "250px", marginTop: "-28rem" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FutureBusiness
