import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/events/spain_portugal/WM_Spain_Portugal_Hero_1920.png"
import HeroBanner1024 from "../assets/images/events/spain_portugal/WM_Spain_Portugal_Hero_1024.png"
import HeroBanner766 from "../assets/images/events/spain_portugal/WM_Spain_Portugal_Hero_766.png"
import HeroBanner320 from "../assets/images/events/spain_portugal/WM_Spain_Portugal_Hero_320.png"
import Spotlight from "../assets/images/events/spain_portugal/WM_Spain_Portugal_Image.png"
import WomanSitting from "../assets/images/events/mylocalmarket/womansitting.svg"
import QuoteIcon from "../assets/images/quotation_icon_white.svg"
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"

const SpainPortugal = () => {
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
        <title>Wyred Meets: Spain & Portugal | m&i</title>
        <meta
          name="description"
          content="Virtually meet MICE professionals from your home country and do business for domestic events. Register now."
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
                  <span className="coral-underlined">
                    Spain &
                    <br />
                    {""} Portugal
                  </span>
                </h1>
                <h1 className="header-section-heading sevilleheader mobileShow">
                  Wyred Meets: <br />
                  <span className="coral-underlined">Spain & Portugal</span>
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
                Whether you say Hola or Olá, one thing is for sure - everyone reading this page will have something in common; a desire to do business at an event designed around the incredible hospitality that Spain & Portugal have to offer. And that’s where we come in! Wyred Meets: Spain & Portugal is the perfect opportunity for Spanish & Portuguese suppliers to show off their destinations to sun-seeking UK & European buyers with MICE in mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="numbers-section eventNumbers fawn">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-4 laptop"
                style={{ color: "#fff" }}
              >
                <div className="inNumbers">
                  <h2 className="site-section-heading font-secondary ">
                    <span className="blue-underlined">Wyred Meets: Spain & Portugal</span> by
                    numbers.
                  </h2>
                  <ul>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers blue">40</h1>
                        <p>suppliers</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers blue">50</h1>
                        <p>buyers</p>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="numbers-caption">
                        <h1 className="eventNumbers blue">10</h1>
                        <p>meetings</p>
                      </div>
                    </li>
                    <li>
                      <div className="numbers-caption">
                        <h1 className="eventNumbers blue">15</h1>
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
            <img alt={" "} src={Spotlight} style={{ width: "450px" }} className={"eventDestination"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-6 ml-lg-auto py-5">
                <h2 className="site-section-heading font-secondary ">
                  here's how the event works... <br />
                </h2>
                <p style={{ paddingRight: "80px" }} className="mobilePadding-2">
                When you sign up to Wyred Meets: Spain & Portugal, we’ll ask you to tell us about yourself, the company you work for and your business goals. This information will then be used to provide you with your best business matches via our smart AI matchmaking technology, which you can take into account when selecting the people you’d like to meet. And did we mention that this event lasts only 4 hours? All 10 of your meetings will be delivered in just half a day - no additional talks or seminars, we promise! You will, however, receive a complimentary networking hour so you can say hello to other attendees and create even more connections.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="packages-market-section yellow-bg eventDetails">
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
                <tr className="eventRow">
                    <td className="eventName">
                      {" "}
                      Wyred Meets:
                      <br />
                      <span className="underlined">
                        Spain & Portugal
                      </span>
                    </td>
                    <td className="date">2 june 2021 </td>
                    <td className="location mobileHide">Spanish & <br/>Portuguese <br/>suppliers</td>
                    <td className="location mobileHide">UK & European buyers</td>
                    <td className="location mobileShow">
                    Spanish & Portuguese suppliers | UK & European buyers
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
                    Attend 10 pre-scheduled meetings with buyers looking to plan events in Spain & Portugal
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
                    Get 10 pre-scheduled meetings with venues from Spain & Portugal
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
                   Learn all about the updated health & safety poilicies for each hotel and destination
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
                Through m&i Wyred we've been given a great tool for digital 1-2-1 meetings, which means no matter the distance, we can still do great business. It's a win-win for everyone.
                </p>
                <br />
                <p className="testimonialAuthor">
                  <strong>Sergio Maccanti
</strong>
                  <br />
                  Gran Canaria CVB, Spain

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="market-footer-slider coral-bg">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2 style={{ color: "#fff" }}>
                  <span className="yellow-underlined">
                    {" "}
                    are you ready to plan &  <br />
                   host  </span>
MICE events in
{" "}
                  <br /> Spain and Portugal?
                </h2>
                <br />

                <p className="eventFooterText">
                Places for this event are going fast,

so don’t miss out!
                  <br />  Apply for this event below.
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

export default SpainPortugal
