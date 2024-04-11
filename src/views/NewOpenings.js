import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/events/new_openings/WM_New_Openings_Hero_1920.png"
import HeroBanner1024 from "../assets/images/events/new_openings/WM_New_Openings_Hero_1024.png"
import HeroBanner766 from "../assets/images/events/new_openings/WM_New_Openings_Hero_766.png"
import HeroBanner320 from "../assets/images/events/new_openings/WM_New_Openings_Hero_320.png"
import Spotlight from "../assets/images/events/new_openings/WM_New Openings_Image2.png"
import WomanSitting from "../assets/images/events/new_openings/WM_New Openings_Image3.png"
import QuoteIcon from "../assets/images/quotation_icon_white.svg"
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const NewOpenings = () => {
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
        <title>Wyred Meets: New openings | m&i</title>
        <meta
          name="description"
          content="Discover and promote newly opened and refurbished properties at this digital MICE event. Sign up today."
        />
      </Helmet>
      <div className="site-wrap">
        <div
          className="seville-hero-slider "
          style={{
            backgroundImage: `url(${heroBannerUrl})`,
            height: "auto",
            paddingBottom: " 10%",
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
                  <span className="blue-underlined">New Openings</span>
                </h1>
                <h1 className="header-section-heading sevilleheader mobileShow">
                  Wyred Meets: <br />
                  <span className="blue-underlined">New Openings</span>
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
                  Looking to show off a brand-new or newly refurbished property?
                  Perhaps you’re an event planner hoping to discover a new venue
                  that will really wow your clients? Whichever category you fall
                  into, you’ve landed on your feet because this no-frills,
                  budget-friendly digital event is just for you.
                  <br />
                  <br />
                  Wyred Meets: New Openings has been designed to shine a
                  much-needed spotlight on any newly opened and soon-to-open
                  hotels and venues that haven’t had the attention they deserve
                  over the past year because of travel restrictions. It’s the
                  perfect opportunity for suppliers and planners to simply meet
                  and create lasting relationships that lead to some truly
                  memorable events.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="numbers-section eventNumbers coral-bg ">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-4 laptop"
                style={{ color: "#fff" }}
              >
                <div className="inNumbers">
                  <h2 className="site-section-heading font-secondary white">
                    <span className="blush-underlined">New Openings</span> by
                    numbers.
                  </h2>
                  <ul>
                    <li>
                      <div className="numbers-caption blush">
                        <h1 className="eventNumbers blush">40</h1>
                        <p>suppliers</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption blush">
                        <h1 className="eventNumbers blush">50</h1>
                        <p>buyers</p>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="numbers-caption blush">
                        <h1 className="eventNumbers blush">10</h1>
                        <p>meetings</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption blush">
                        <h1 className="eventNumbers blush">15</h1>
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
                  how does the event work? <br />
                </h2>
                <p style={{ paddingRight: "80px" }} className="mobilePadding-2">
                  When you sign up to attend Wyred Meets: New Openings, you’ll
                  provide us with some important details about yourself and your
                  business needs. Our AI matchmaking technology will then use
                  this information to find your best matches — then it’s up to
                  you to select who you want to meet. Simple, right? And because
                  there’s no travel required for this event, you can meet and do
                  business all from the comfort of your favourite chair! Need a
                  little extra persuasion? To help you connect even further,
                  we’re throwing in a complimentary Networking Hour for all
                  attendees, so you can meet even more buyers and suppliers.{" "}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="packages-market-section fawn eventDetails">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  <span className="blue-underlined">event details</span>
                </h2>
                <table className="eventTable marketTable">
                  <tr className="eventRow">
                    <td className="eventName">
                      {" "}
                      Wyred Meets:
                      <br />
                      <span className="underlined">New Openings, Europe</span>
                    </td>
                    <td className="date">13 july 2021 </td>
                    <td className="location mobileHide">European suppliers</td>
                    <td className="location mobileHide">UK & European buyers</td>
                    <td className="location mobileShow">
                      European suppliers | UK & European buyers
                    </td>
                    <td className="signup">
                      <a href="/signup">
                        <span className=" text-white btn btn-primary bluebtn ">
                          sign up
                        </span>
                      </a>
                    </td>
                  </tr>
                  <tr className="eventRow">
                    <td className="eventName">
                      {" "}
                      Wyred Meets:
                      <br />
                      <span className="underlined">New Openings, Americas</span>
                    </td>
                    <td className="date">13 july 2021 </td>
                    <td className="location mobileHide">American suppliers</td>
                    <td className="location mobileHide">American buyers</td>
                    <td className="location mobileShow">
                      American suppliers | American buyers
                    </td>
                    <td className="signup">
                      <a href="/signup">
                        <span className=" text-white btn btn-primary bluebtn ">
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
                    Attend 10 pre-scheduled meetings with buyers looking for new
                    and ‘wow’ venues
                  </li>
                  <li>
                    Have the opportunity to show off your newly opened and
                    refurbished properties
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
                    Get 10 pre-scheduled meetings with newly opened and
                    refurbished venues of your choice
                  </li>
                  <li>
                    Discover venue options that are brand-new to the market
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
                <img alt={" "} class="quoteIcon" src={QuoteIcon}></img>
                <br />

                <p className="testimonialText">
                  m&i Wyred events allowed us to connect with potential business
                  and get a much-needed look at how the industry is doing right
                  now. In such an unprecedented time, you couldn’t ask for more.
                </p>
                <br />
                <p className="testimonialAuthor">
                  <strong>Odete Fonseca</strong>
                  <br />
                  Be Live Hotels, Portugal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="new-openings-slider blue-bg">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 style={{ color: "#fff" }}>
                  could this be your <br />
                  <span className="fawn-underlined">
                    {" "}
                    perfect digital event?{" "}
                  </span>
                </h2>
                <br />

                <p className="eventFooterText">
                  It’s time to get back to business! Apply for New Openings{" "}
                  <br />
                  today by clicking below - places are strictly limited.
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
                style={{ width: "300px", marginTop: "-23rem" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewOpenings
