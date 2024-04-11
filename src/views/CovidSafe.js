import React from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import TopHalf from "../assets/images/covid_shapes.png"
// import { useHistory } from "react-router-dom"

const CovidSafe = () => {
  // let history = useHistory()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>covid safe events | m&i</title>
        <meta
          name="description"
          content="Find out what covid safety measures we’re taking in 2022 and beyond."
        />
      </Helmet>
      <div className="site-wrap">
        <div className="terms-hero-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="contact-hero">
                  COVID-safe
                  <br />
                  events
                  <br />
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center mb-3 mb-md-0">
              <img src={TopHalf} alt={"banner"} className={"covid-top-shape"} />
            </div>
          </div>
        </div>
        <div
          className="site-half block"
          style={{ paddingTop: "12rem", paddingBottom: "8rem" }}
        >
          <div className="container">
            <div className="row no-gutters center-content">
              {/* <div className="col-lg-9 mr-lg-auto py-3">
                <p>
                  At m&i, we’re committed to keeping you safe at all our events.
                  Here’s what you need to know about the safety measures we’re
                  taking in 2021 and beyond:
                  <br />
                </p>
              </div> */}

              <div className="col-lg-9 mr-lg-auto py-4">
                <h3>Our commitment</h3>
                <p>We’ll continue to monitor the latest guidance and regulations during the COVID-19 pandemic. The safety and well-being of our attendees, including partners and staff, will always be our top priority. We’re collaborating with local government agencies and local venues to implement best practices aimed at managing the spread of COVID-19 in accordance with the latest guidelines.</p><br/>

              </div>


              <div className="col-lg-9 mr-lg-auto py-4">
                <h3>
                  Delegates' duties:
                </h3>
                <p>
                m&i has put recommended preventative measures in place to reduce the spread of COVID-19. However, under no circumstances are we able to guarantee that you will not become infected with the virus while attending one of our events. 
                </p>
                <br />
                <p>Please review the duties below:</p>
                <br />
                <h3>1. Adhere to country entry regulations</h3>
                <p>Check and comply with entry regulations pertaining to your country of departure.</p>
                <br/>
                <h3>2. Ensure you are symptom-free</h3>
                <p>If you have tested positive for COVID-19 before departure, please do not travel. Affected attendees will be given the opportunity to attend their meetings virtually. However, social and networking activities will not be accessible virtually.</p><br/>
                <p>For hosted buyers, normal cancellation fees for reasons other than a positive Covid test or any unforeseen last-minute travel restrictions will apply.
                </p>
                <br/>
                <h3>3. Keep us in the loop</h3>
                <p>If you are experiencing or exhibiting any COVID-19 related symptoms as outlined by the WHO such as fever, dry cough, or shortness of breath during the event, you should let us know and self-isolate until you get tested.</p>
                <br/>
                <h3>4. Agree to the following</h3>
                <p>By attending an m&i event, all delegates will automatically accept the following commitments:
                </p><br />
               
                <li>Attendees must get tested before attending the event if they are experiencing COVID-19 related symptoms and not attend the live event if tested positive for COVID-19.
                </li>
                <br />
                <li>Attendees understand that Big Worldwide Ltd cannot be held liable for any exposure to the COVID-19 virus caused by travel to/from or participation in one of our events.</li><br/>
                <li>Attendees understand that Big Worldwide Ltd cannot be held financially liable forany expenses resulting from any exposure to COVID-19 caused by travel to/from or participation in one of our events. Quarantine, additional night stay and f&b costs will not be covered by Big Worldwide Ltd.
                </li><br/>
                <li>All event attendees acknowledge the contagious and evolving nature of COVID-19 and voluntarily assume the risk that they may be exposed to the virus and become affected as a result.</li>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CovidSafe
