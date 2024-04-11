import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/experience/Buyer_Experience_Hero_1920.jpg"
import HeroBanner1024 from "../assets/images/experience/Buyer_Experience_Hero_1024.jpg"
import HeroBanner766 from "../assets/images/experience/Buyer_Experience_Hero_766.jpg"
import HeroBanner320 from "../assets/images/experience/Buyer_Experience_Hero_320.jpg"
import Slider1 from "../assets/images/experience/buyer-experience_panel-image-1.jpg"
import Slider2 from "../assets/images/experience/buyer-experience_panel-image-2.jpg"
import Slider3 from "../assets/images/experience/buyer-experience_panel-image-3.jpg"
import ExperienceCTA from '../assets/images/experience/buyer_experience_CTA.png'
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';

const BuyerExperience = () => {
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
        <title>hosted buyer experience | m&i</title>
        <meta
          name="description"
          content="Learn more about what can you expect as an m&i buyer."
        />
         <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_About.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_About.png"} />

      </Helmet>
      <div className="site-wrap">
        <div
          className="experience-hero-slider"
          style={{ backgroundImage: `url(${heroBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <p className="experience-hero-caption">so what can you expect as an</p>
                <h2 className="experience-hero-heading">
                m&i <br/>{" "}
buyer?

                </h2>
              </div>
            </div>
          </div>
        </div>

<div className="buyerExperience-main">
        <div className="site-half ">
          <div className="container">
            <div className="row no-gutters center-content">
            <div class="circleNumber blueCircle">1</div>
              <div className="col-lg-6 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                  first thing’s first, you’ll need to <span className="underlined">register for an event.</span>
                </h2>
                <p>
                One event isn’t really our style. In fact, we like to host multiple events every year. We know that as an event planner, your clients’ needs are unique and a ‘one event fits all’ solution won’t help you find the right business. That’s why we create a wide range of ‘Forums’ to suit a broad spectrum of planners - all you need to do is choose the best one for you!
                  <br />
                  <br />
                  Registration for an event is easy. Simply fill out our Sign Up form and a member of our team will contact you to run through the full registration and vetting process (that’s how we keep the quality of our events so high).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half ">
          <div className="container">
            <div className="row no-gutters center-content">
            <div class="circleNumber blueCircle">2</div>
              <div className="col-lg-6 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                  be <span className="underlined">our guest!</span>
                </h2>
                <p>
                As our hosted buyer, we'll take care of you from start to finish. You’ll receive a bespoke buyer package, including accommodation and transfers,
as well as airfare/train credits. We'll also arrange delicious lunches and exciting dinners for to you enjoy. Bon appetit!
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="experience-images" style={{ backgroundImage: `url(${Slider1})` }}> </div>

        <div className="site-half no-top-padding">
          <div className="container">
            <div className="row no-gutters center-content">
            <div class="circleNumber blueCircle">3</div>
              <div className="col-lg-6 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                  meet <span className="underlined">your match.</span>
                </h2>
                <p>
                There’s nothing worse than spending hours of your time searching for the best people to plan meetings with. At m&i events, we’ve got a solution for that - we call it ‘smart matchmaking’. Utilising the power of AI technology, our unique ‘Wyred’ networking platform allows you to find your most relevant supplier matches quickly and effectively, so you can spend less time searching and more time doing what you love.
                  <br />
                  <br />
                 <a className="blue-underlined" href="/smart-meetings">Learn more about smart matchmaking.</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half ">
          <div className="container">
            <div className="row no-gutters center-content">
            <div class="circleNumber blueCircle">4</div>
              <div className="col-lg-6 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                  get down to <span className="underlined">business.</span>
                </h2>
                <p>
                All of our in-person Forums feature 1-2-1 meetings, which are included as standard within your hosted buyer package. Think of it a bit like speed dating. Your meetings will be pre-scheduled and a provisional schedule will be sent to you for review a week before the event. At the event itself, you’ll visit the tables of each supplier on your schedule at allocated times, where you can meet for up to 13 minutes.
                  <br />
                  <br />
We know what you’re thinking: ‘13 minutes doesn’t seem very long for a business meeting’, and we hear you. But that right there is the beauty of m&i. There are plenty more opportunities for you to get to know suppliers and do business outside the meeting hall. That’s how you make real connections.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-images" style={{ backgroundImage: `url(${Slider2})` }}> </div>


        <div className="site-half no-top-padding">
          <div className="container">
            <div className="row no-gutters center-content">
            <div class="circleNumber blueCircle">5</div>
              <div className="col-lg-6 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                 <span className="underlined">network</span> to your heart's content
                </h2>
                <p>
                So, what do we mean by ‘doing business outside of the meeting hall’? Our Forums are designed to help you forge real relationships with global suppliers, which is why everything surrounding the meetings is just as important as the meetings themselves.
                  <br />
                  <br />
                  At every m&i event, you’ll have the opportunity to take part in unique destination-themed activities, from walking city tours and quad biking in the desert to hiking across mountain trails and relaxing in bubbling hot springs, our activities are the perfect way to develop industry friendships and business partners.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="site-half ">
          <div className="container">
            <div className="row no-gutters center-content">
            <div class="circleNumber blueCircle">6</div>
              <div className="col-lg-6 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                 <span className="underlined">discover</span> the destination.
                </h2>
                <p>
                You’ve travelled a long way, so naturally you’d want to see the destination in all its glory, right? We’ve got you covered. On top of networking activities, hosted buyers at m&i events can sign up to inspect some of the destination’s top MICE properties. We call this ‘Destination Discovery’.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-images" style={{ backgroundImage: `url(${Slider3})` }}> </div>

        <div className="site-half no-top-padding">
          <div className="container">
            <div className="row no-gutters center-content">
            <div class="circleNumber blueCircle">7</div>
              <div className="col-lg-6 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                love <span className="underlined">the nightlife.</span>
                </h2>
                <p>
                After a busy morning of meetings and an exciting afternoon of destination discovery, it’s time to experience what m&i has to offer after dark. We’re pretty picky about where we host our evenings - past venues have included secret bars, river boats and even royal palaces! This is your time to unwind, have fun and cement the friendships you’ve made throughout the day.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-half ">
          <div className="container">
            <div className="row no-gutters center-content">
            <div class="circleNumber blueCircle">8</div>
              <div className="col-lg-6 mr-lg-auto">
                <h2 className="site-section-heading font-secondary">
                stay <span className="underlined">in the know</span>
                </h2>
                <p>
                Don’t have your hands on the programme? no problem. We’ll send you notifications through our event app with reminders, timings and event tips, so you won’t miss a thing!
                </p>
              </div>
            </div>
          </div>
        </div>
</div>



        <div className='experience-footer fawn' style={{marginTop:'5%'}}>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-8 ml-rg-auto py-5 laptop'
                                style={{ paddingLeft: '100px' }}
                            >
                                <h2>
                 <span className="blue-underlined">can't wait to give m&i a try?</span> <br></br>
                {" "} or feel like you still have a<br></br>
                 {" "} few questions?
                                </h2>

                                {/* <p className='eventFooterText'>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                                    elit, sed, do eiusmod tempor incididunt ut.{' '}
                                </p> */}
                                <a href='/calendar'>
                                    <span className=' btn btn-secondary white'>
                                       show me the events
                                    </span>
                </a>
                <a href='/tell-me-more'>
                                    <span className=' btn btn-secondary transparentRaven' style={{marginLeft:'5%'}}>
                                       i want more info
                                    </span>
                                </a>
              </div>
              <div className="col-lg-10 ml-rg-auto py-3">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={ExperienceCTA}
                className={"experienceCTA desktop"}
              ></img>
            </div>
          </div>
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

export default BuyerExperience
