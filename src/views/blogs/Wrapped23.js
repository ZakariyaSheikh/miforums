import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Forums from "../../assets/images/blog/Wrapped23/Forums.png"
import CoverPic from "../../assets/images/blog/Wrapped23/blog_hero.png"
import Meetings from "../../assets/images/blog/Wrapped23/Meetings.png"
import Attendees from "../../assets/images/blog/Wrapped23/Attendees.png"
import Partners from "../../assets/images/blog/Wrapped23/Partners.png"
import LiveLaunch from '../../assets/images/blog/Wrapped23/Live_launch.png'
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const Wrapped23 = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Wrapped 2023: A Year in Review | m&i</title>
        <meta
          name="description"
          content="m&i Wrapped 2023: A Year in Review "
        />


      </Helmet>
      <div className="site-wrap">
        <div className="blog-single-page">
        <div
          className="blog-single-hero-slider"
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
              <div className="blog-banner" style={{ backgroundImage: `url(${CoverPic})`, backgroundSize:"contain", marginLeft:"5%", height:"390px" }}> </div>
                <h1 className="heading">m&i wrapped 2023: <br/>{" "} <span className="coral-underlined">A year in review {" "}
                   </span></h1> 
      
                  <p className="blog-date">Published on Dec 19, 2023</p><br/><br/>
              </div>
            </div>
          </div>
        </div>

        <div className="article">
        <div
          className="site-half block no-top-padding"
        >
          <div className="container">
            <div className="row no-gutters">

              <div className="col-lg-9 mr-lg-auto py-4">
                {/* <h3>Our commitment</h3> */}


                    <p>It’s that time of the year again – the festive period is approaching, the nights are drawing in and here at m&i we’re reflecting on the unbelievable year we’ve had. From the launch of a brand-new Forum and our first-ever live stream event reveal to some of our best attendee feedback and highest event ratings. Of course, we couldn’t have had such a brilliant year without you, our loyal delegates, who sit at the core of our Forums. So, without further ado, here are the top m&i moments of 2023...</p>
    <br/><br/>

                    <h3>Forums</h3>

                    <br></br>

                    <img src={Forums} alt={" "} ></img><br/><br/>

    <br></br>
                    <p>m&i Forums are the cornerstone of every MICE calendar, and this year was no different. We pushed our event programmes to their limit, breaking new ground in destination discovery and finding unique spaces and venues for our delegates to experience. From Istanbul and Ibiza to Oslo and Costa Mujeres, we covered a range of cities that showed either untapped MICE potential or an established MICE infrastructure that would work perfectly for buyers and provide suppliers with a brilliant environment to connect. </p>

    <br></br>     

                    <p>See our Forums in <a target="_blank" href="https://www.mi-forums.com/past-events">action.</a> </p>


    <br></br>

                    <div className="pullquote"> <quote><span>"</span>m&i Forums are the best industry events I have attended. I’ve been on 4 now since 2019 and each one has been amazing, all different in their own way to suit the destination. You have an excellent events team, on-site team and the events are all-round super-organised, really capturing the culture of each destination!<span>"</span> </quote>

                    <h5>Marlene Scott, veSpace </h5><br></br></div>

    <br></br>

                    <h3>Meetings</h3>

                    <br></br>

                    <img src={Meetings} alt={" "} ></img><br/><br/>

                    <p>Our 1-2-1 pre-scheduled meetings really shone through this year. The core of our events, our signature AI-matched meetings are the foundation of every event programme, bringing together the best suppliers and buyers from all corners of the globe. It’s the inception of a new business relationship where two MICE professionals decipher whether they can work together to solve a complex brief, and maybe even strike up a friendship. </p>

  <br></br>

                    <div className="pullquote"> <quote><span>"</span>Once again, we had a great time with our industry peers and we got the chance to meet new people in the industry in an amazing place. There is a sort of "m&i" secret ingredient to every event, as every time I feel I regather with a family but also make new friends.<span>"</span> </quote>

                    <h5>Andra Leonte, Congress Bookers  </h5></div>

  <br></br>

                    <h3>Attendees</h3>

                    <br></br>
    
                    <img src={Attendees} alt={" "} ></img><br/><br/>

                    <p>This year 1,205 buyers and 1,122 suppliers attended our events in total. Our delegates came from all over the world and all corners of the MICE sphere. Each Forum type has a slightly different set of requirements for our attendees, from our specialist Forums catering to the healthcare sector, VIP for those with seniority, Private for properties with character and Luxe for those in high-end incentives. Meanwhile, our Flagship is the cornerstone of the MICE calendar, offering the broadest choice of attendees. And, of course, we’re soon to welcome m&i Fest into the mix next year, an even larger event offering the choice of an exhibition with the personalisation of our smaller Forums. The one thing that connects each Forum? The level of attendees – each one is rigorously vetted to ensure only the highest-quality matches! </p>

                    <br></br>

                    <div className="pullquote"> <quote><span>"</span>m&i Forums have made my working life so much easier. I now have an incredible list of people I can contract when I have a group going to a destination. Even If I don't use them immediately, I can keep the contacts and I'm able to use them further down the line – so useful! Thank you.<span>"</span> </quote>

                    <h5>Heather Davies, Davington Events </h5></div>

                    <br></br>

                    <h3>Partners</h3>

                    <br></br>

                    <img src={Partners} alt={" "} ></img><br/><br/>

                    <br></br>

                    <p>Our partners are crucial in showcasing a destination to our delegates. Without them, we wouldn’t be able to call on their fantastic network of local suppliers for vital services and key destination knowledge. From hotels, DMCs and CVBs to evening venues and production companies, our partners help bring our exciting visions to life. </p>

                    <br></br>

                    <p>Interested in becoming a future partner? Get in touch with our Future Solutions team to discuss options for 2025 by emailing them at <a href="mailto: future-solutions@wwideevents.com">future-solutions@wwideevents.com</a>  </p>

                <br></br>

                <div className="pullquote"> <quote><span>"</span>Being a Gold partner for m&i Europe Spring, Istanbul 2023 was a key driver in bolstering our brand's visibility and connecting us with top-tier buyers in the travel sector. Hosting the event aligned perfectly with our business philosophy: investing in the future by showcasing our destination. m&i provided a platform for us to amplify our message, engaging with key decision-makers, and driving interest in our destinations and services.<span>"</span> </quote>

                    <h5>Hasan Dinc, ODS </h5></div>

                <br></br>

                <h3>Live Launch</h3>

                <br></br>

                <img src={LiveLaunch} alt={" "} ></img><br/><br/>

                    <br></br>

                 <p>This year we ran our first-ever livestream launch event for 2024, m&i Forward. Just over 1,500 MICE professionals signed up to the live event, streamed on the 11th July. The m&i team poured their time and creativity into this project, creating a flight-themed journey to remember and amassing a whole load of fancy dress which we can assure you we’ll be using again. Legend has it, Heri, our Commerical Director (and unofficial “captain”), still wears his captain hat in the office... </p>

                 <br></br>

                 <p>See all the <a target="_blank" href="https://www.tiktok.com/@miforums/video/7254565272210705691?is_from_webapp=1&web_id=7275648680329709089">behind-the-scenes fun here.</a> </p>

                 <br></br>

                <div className="pullquote"> <quote><span>"</span>m&i Forums are always perfectly organised, enabling us to meet a large number of prospects in a short space of time. It's always a pleasure to take part. Thanks to all the staff!<span>"</span> </quote>

                <h5>Claudette Bertin, Nice Convention Bureau </h5></div>

                <br></br>

                <h3>m&i Luxe, Porto Montenegro 2023 - Our highest-rated event this year</h3>

                <br></br>

                <p>In October we jetted a select group of high-end MICE professionals off to Montenegro’s most glamorous port and as we’d hoped, it proved incredibly popular with attendees. Our inaugural Luxe Forum went better than we could have ever imagined, with positive feedback streaming in during and after the event. Attendees praised the high-level suppliers who attended and the attention to detail in all aspects of the programme and venue choices.</p>

                <br></br>

                <div className="pullquote"> <quote><span>"</span>m&i Luxe provides an amazing opportunity to truly experience a destination while networking with industry professionals - it felt superior to other industry events. The genuine care, presence and efforts the m&i staff provide is witnessed throughout the entirety of the event and it results in an industry experience that is truly unique.<span>"</span> </quote>

                    <h5>Brian Carraher, HelmsBriscoe </h5></div>

                <br></br>

                <h3>Brand-new event launch</h3>

                <p>You've probably already heard the buzz around <a target="_blank" href="https://www.mi-forums.com/mi-fest-marrakesh-24">m&i Fest Marrakesh 24</a>, our new event for 2024 that combines the choice of an exhibition with the choice of our smaller Forums. Yes, we know – it hasn’t technically happened this year, but we did launch it this year and we just couldn’t contain our excitement for when it finally comes around on 17-21 March 2024. Expect our first-ever hosted exhibitor stands, new ‘Pathways’ and our highest-ever level of buyer and supplier.</p>

                <br></br>

                <p>Want to save your spot before it's too late? <a target="_blank" href="https://www.mi-forums.com/signup">Register your interest here.</a></p>

                <br></br>

                <div className="pullquote"> <quote><span>"</span>For me it felt like a combination of the advantages of a big exhibition and the 1-2-1 meetings delivered by m&i. That’s what first triggered an interest in me. The combination is what attracted me most. The fact it’s new, and your biggest-ever event, will also have a big impact on the type of buyers that will attend because they will have more choice. I have no doubt this will attract even better buyers.<span>"</span> </quote>

                <h5>Arjen van der Linden, Van der Valk Hotel Schiphol A4</h5></div>

                <br></br>

                <p>And that’s a wrap on 2023 – what a year it’s been! If you’re reading this as an m&i-er, thanks for being part of our journey, and if you’re reading this as a newbie, what are you waiting for? Check out our events for next year and make 2024 the year you mean business.</p>

                <br></br>


<br></br>
<br></br><br/> 
        <a href='/calendar'>
                                     <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                          View 2024 calendar 
                                            </span>
                                             </a><br/><br/><br/>
              </div>

              </div></div>
            </div>
            </div>


          <RelatedArticles />

          </div>
      </div>
      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default Wrapped23