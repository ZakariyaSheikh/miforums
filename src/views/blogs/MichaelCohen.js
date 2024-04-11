import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Cover from "../../assets/images/blog/michaelcohen/thumbnail.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const MichaelCohen = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Michael Cohen on our GAINTalks partnership, m&i Americas and how AI is changing MICE  | m&i</title>
        <meta
          name="description"
          content="Michael Cohen on our GAINTalks partnership, m&i Americas and how AI is changing MICE "
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
              <div className="blog-banner" style={{ backgroundImage: `url(${Cover})`, backgroundSize:"contain", marginLeft:"5%" }}> </div>
                <h1 className="heading">Michael Cohen on our GAINTalks partnership, m&i Americas and how AI is changing MICE {" "}
                   </h1>
                  <p className="blog-date">Published on July 27, 2023</p><br/><br/>
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

                    <p>Here at m&i we’re constantly trying to enrich our attendees’ experience. Whether it’s improving your meetings or the quality of food and beverage at events, we aim to respond to your feedback effectively while finding innovative ways of boosting your Forum.  <br></br><br/>

                    And that’s why we’re thrilled to announce our partnership with GAINTalks, a new global speaker platform that brings together international thought leaders in growth, innovation, technology and more to speak at a range of high-level events. To get you up to speed before our first GAINTalks keynote at <a href="https://www.mi-forums.com/mi-americas-2023"> m&i El Paso, Americas 2023</a>, we chatted to GAIN’s managing director, Michael Cohen on all things MICE.  
</p>
<br/><br/>

              <h3>1. Tell us how GAINTalks began.  </h3>
                    <br />
                  
                    <p>The global innovation, travel, hospitality, tech execs and advisors that make up the GAIN (Growth Advisors International Network) have attended hundreds of varied industry events and conferences over the years. It became evident to us, and our MICE industry friends, that there was a true need for more impactful, expert, innovative and relevant keynote speakers and panelists.   <br/><br/>

The international conference and event organizers we interacted with continued to reach out to GAIN to source focused and experienced subject matter experts to deliver industry-specific keynotes, master class content and panelists, on a case-by-case basis, sometimes with little lead time. So, it became evident that a new streamlined speaker bureau platform with access to a wide range of specialized innovation, business and “what’s next” focused content providers, made great sense.   </p>  


  <br></br>
              <h3>2. What value will GAINTalks bring to our events?  </h3>
                    <br />
                  
                    <p> With such a deep international bench of travel, hospitality, MICE and tech innovation speakers, master class facilitators and expert panelists, GAINTalks will be providing engaging, ‘what’s next’ focused, applied content for attendees. This content will enhance the impact and value of your events for their investment of time and bandwidth. 

 </p>  

                    <br></br>

                    <p>Additionally, the MICE industry execs attending will be introduced to a turn-key network of thought leaders and a new brand of keynote speakers, to seamlessly source and deliver impact and engagement to their clients’ conferences and events.   </p>
  <br></br>

              <h3>3. What, in your opinion, are the most pressing issues affecting the MICE industry today?   </h3>
                    <br />
                  
                    <p>Changing expectations are driving attendees to become more discerning in their choices of events. They are demanding more personalized experiences that are much more relevant to their careers and lives, in addition to greater specialized, streamlined interactions with other attendees and exhibitors.  </p>  

                   
  <br></br>

              <h3>4. What do you think the most pressing issues will be for MICE in the future?  </h3>
                    <br />
                  
                    <p>The MICE industry is becoming increasingly reliant on emerging technologies, with many events incorporating virtual, hybrid and immersive elements. As a result, event organizers need to be tech-savvy and keep up with the latest trends in spatial computing and immersive oriented event technology or be left behind.  </p>  

             
  <br></br>

             

              <h3>5. Could you tell us about the keynote you’ll be delivering in El Paso? </h3>
              <br />

              <p>My GAINTalks keynote will be focused on the power and impact of ChatGPT, generative AI and spatial computing, within the MICE industry. I will share my insights and applications of these game-changing innovations, technologies and the real-life use cases, that are revolutionizing the way we design, market and deliver MICE experiences.  </p>

            

              <br></br>

              <h3>6. AI is the hot topic being debated right now. Do you think it’s our friend or foe?  </h3>
              <br />

              <p>While there are concerns about its potential for privacy violation and the possibility it will replace human workers in the MICE industry, and in the wider workforce, it’s much more likely that AI will be optimized and safeguarded to augment human experiences and work securely. <br/><br/>

Overall, whether AI is a friend or foe depends on how it is developed, deployed, and regulated. If AI is developed and used responsibly, it has the potential to provide numerous benefits and efficiencies to the MICE industry and the world at large. </p>

             
              <br></br>

              <h3>7. Are you looking forward to heading to El Paso for our event?  </h3>
              <br />

              <p>I’m very much looking forward to returning to the beautiful El Paso, Texas. It’s such a multi-cultural city combined with the desert and mountain views and to experience all this while being able to interact with true leaders and emerging executives within the North American MICE industry is an unmissable opportunity.   </p>

             
              <br></br>

              <p>We anticipate spaces will fill up fast after this announcement, so if you want to see Michael Cohen in action at m&i El Paso, Americas 2023, sign up today!  </p>

                    <br></br><br/> 
        <a href='/signup'>
                                     <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                         I'm in
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

    export default MichaelCohen