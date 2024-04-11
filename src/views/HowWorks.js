import React from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import TopHalf from "../assets/images/flexibility_shapes1.svg"
import { useHistory } from "react-router-dom"

const HowWorks = () => {

  let history = useHistory()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>how it works | m&i</title>
        <meta
          name="description"
          content="The fine print part. Here's everything you need to know about attending an m&i networking event."
        />
      </Helmet>
      <div className="site-wrap">
        <div className="terms-hero-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="contact-hero blue-underlined">
                 how it works.
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
        <div className="site-half block">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-9 mr-lg-auto py-3">
                <h2>what to expect from an m&i event</h2>
                <br />
                <h3>m&i atmosphere</h3>
                <p>
                Our events are all about bringing the excitement as well as the business! We believe that the best professional relationships are made when attendees can truly be themselves, which is why we aim to provide a buzzing yet laid-back atmosphere.
But don’t let the relaxed look fool you, m&i events are intense and work like clockwork. You’ll be talking to hundreds of people throughout, so you’ll need to make sure you find the right balance to refuel and rest and stay at the top of your game.
                </p>
              </div>
              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>morning meetings</h3>
                <p>
                We always want our attendees to enjoy an event in their own way. However, all we ask is that you attend all of your 1-2-1 meetings and arrive at each of them on time. In return, we promise to match you with your very best business potential.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>networking activities</h3>
                <p>
                Most of our activities take place in the afternoon. We believe in the power of human-to-human connections in order to do great business. We therefore try to create opportunities for you to meet hosted buyers and fellow attendees outside of the meeting room in a more informal setting, so you can relax and get to know each other as humans first. And trust us, this event format never fails.

                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>networking evenings</h3>
                <p>
                We like a party, and love giving attendees the chance to let their hair down. Our networking dinners and parties can therefore go on a tad late, especially on the closing night. So, if you suffer from chronic disco fever, feel free to dance the night away, but if you prefer a bit more kip, you’re free to turn in earlier and relax before the next day begins.

                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>free time </h3>
                <p>
                To help you make the most of an event, we’ll always try to make sure your itinerary includes some free time to relax, catch up on emails or explore the host city. However, we also promise to provide an event that’s full of action to make sure you have plenty of networking opportunities.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>help onsite</h3>
                <p>
                Feeling under the weather? Not sure where you need to be? Something not quite right with your event experience? We’ll always have a team of m&i staff on hand to help you with anything you need. You can also message our behind-the-scenes team via our networking platform.

                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>dress code</h3>
                <p>
                For us, comfort is key to doing high-quality business (because no-one wants to wear a three-piece suit in 40 degree heat). At m&i events, we actively encourage a more informal dress code, so you can dress as you like and put all your focus into making great connections.
                </p>
                <br/><br/>
              </div>
              <h2>here’s what you’ll need to organise
</h2>
              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>your travel</h3>
                <p>
                Suppliers are responsible for organising their own travel to and from the host venue, including flights and transfers. Some of our events may include free transfers. These will be communicated to attending suppliers in due course.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>your accommodation</h3>
                <p>
                As networking lunches and evening dinners are included in the event package price, suppliers are only required to book accommodation on a Bed & Breakfast basis. We strongly recommend booking your stay with the host venue, as this will provide additional networking opportunities and will often include a reduced rate for the duration of the event.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>your presentation</h3>
                <p>
                Please ensure you bring your own presentation devices (laptops, tablets etc.) with the correct power cables and international socket adapters if needed.
                </p><br/><br/>
              </div>

              <h2>what does your attendance fee include?</h2>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>your presentation table</h3>
                <p>
                Tables are provided, complete with a personalised table sign and standard stationary. Please note, table sharers will be provided with one table between two independent suppliers.

                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>your personalised meetings schedule</h3>
                <p>
                Your meetings schedule will be available to view approx. one week before the event takes place. At this point, you will have the opportunity to prepare for your meetings and highlight any major issues with our team.

                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>wi-fi at the host venue</h3>
                <p>
                Wi-fi will be provided to all attendees, but we recommend having as much of your presentation available offline as possible to prevent disruption in the unlikely event of internet outage.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>dinners and lunches</h3>
                <p>
                All catering (except breakfast, which is included in your accommodation rate) will be part of your attendance fee. Our evening dinners usually include one stand up and one sit down dinner where possible, and provide food options to fit all dietary requirements (as long as we are aware of them in advance).
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>scheduled breaks</h3>
                <p>
                Regular refreshment breaks will be scheduled throughout meetings, which will include snacks and drinks.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>networking activities</h3>
                <p>
                All professional equipment required for activities will be provided on site. In some instances, we may recommend you bring certain items of clothing or footwear for your own comfort during activities (e.g. warm hats and gloves for outdoor activities in colder climates).

                </p>
                <br/><br/><br/>
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
      </div>
    </>
  )
}

export default HowWorks
