import React from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import TopHalf from "../assets/images/flexibility_shapes1.svg"
import { useHistory } from "react-router-dom"
import ReferenceShape from "../assets/images/flexibility_shapes2.svg"
import RewardsShape from "../assets/images/flexibility_shapes3.svg"

const FlexibleTerms = () => {
  let history = useHistory()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>flexi-terms | m&i</title>
        <meta
          name="description"
          content="Our Flexi-terms Promise allows you to book now, pay later and relax in the knowledge that we've got you covered."
        />
         <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_Flexi_Terms.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_Flexi_Terms.png"} />
      </Helmet>
      <div className="site-wrap">
        <div className="terms-hero-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="contact-hero">
                  <span className="blue-underlined">flexibility</span> is our{" "}
                  <br />
                  middle name.
                  <br />
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center mb-3 mb-md-0">
              <img src={TopHalf} alt={"banner"} className={"terms-top-shape"} />
            </div>
          </div>
        </div>
        <div
          className="site-half block"
          style={{ paddingTop: "12rem", paddingBottom: "8rem" }}
        >
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-9 mr-lg-auto py-3">
                <p>
                  We understand that committing to events might feel a bit
                  daunting right now, which is why we’ve created a more flexible
                  set of booking terms, so you can reserve a spot at your chosen
                  m&i event(s) without the pressure of paying straight away.
                  <br />
                  <br />
                  Our{" "}
                  <span className="raven-underlined bold">
                    Flexi-terms Promise
                  </span>{" "}
                  allows you to book now, pay later and relax in the knowledge
                  that you’re covered if your circumstances should change.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-4">
                <div className="img-bg-1 desktop">
                  <img
                    alt={" "}
                    src={ReferenceShape}
                    className="referenceShape"
                  ></img>
                </div>
                <h3>secure your spot</h3>
                <p>
                When you sign up to an event, you’ll be required to pay 30% to secure your place. The outstanding balance will be due before the event. Please contact your Account Manager for specific payment details regarding your chosen Forum.

                </p>
              </div>
              {/* <div className="col-lg-9 mr-lg-auto py-4">
                <h3>no obligation cancellation</h3>
                <p>
                  Once you’ve signed your contract, you can cancel without
                  obligation up until the beginning of March.
                </p>
              </div> */}
              <br />
              <div className="col-lg-9 mr-lg-auto py-4">
                <h3>more choice for you if our plans change</h3>
                <p>
                  If, for any reason, the event cannot go ahead, you’ll have the
                  option to move your booking, attend a similar event or receive
                  a voucher towards another m&i event.
                </p>
              </div>
              <img
                alt={" "}
                src={RewardsShape}
                className="flexibilityShape"
              ></img>
            </div>
          </div>
        </div>
        <div
          className="event-footer-slider blush-bg"
          style={{ height: "350px" }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2>read everything carefully? great!</h2>
                <br />

                <p className="eventFooterText">
                  <span>
                    <a href="/calendar" className="blue">
                      Check out our full calendar of events
                    </a>
                  </span>{" "}
                  or go back to where you left off.
                </p>
                <a
                  href="#/"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.goBack()}
                >
                  <span className=" btn btn-secondary white">take me back</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlexibleTerms
