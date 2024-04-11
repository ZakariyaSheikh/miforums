import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Coverimage from "../../assets/images/blog/webinar/cover.png"
import Richard from "../../assets/images/blog/RichardB/RICHARD.jpg"
import FEST from "../../assets/images/blog/RichardB/FEST.png"
import Marrakesh from "../../assets/images/blog/RichardB/MARRAKESH.jpeg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";
import Coffeebreak from "../../assets/images/blog/webinar/coffeebreak.jpg"
import Handshake from "../../assets/images/blog/webinar/handshake.jpg"
import Collaboration from "../../assets/images/blog/webinar/collaboration.jpg"

const Webinars = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The key issues affecting MICE professionals today | m&i</title>
        <meta
          name="description"
          content="The key issues affecting MICE professionals today"
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
              <div className="blog-banner" style={{ backgroundImage: `url(${Coverimage})`, backgroundSize:"contain", marginLeft:"5%" }}> </div>
                <h1 className="heading">The key issues affecting <br/>{" "} <span className="coral-underlined"> MICE professionals today    {" "}
                   </span></h1> 
      
                  <p className="blog-date">Published on February 19, 2024</p><br/><br/>
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


                    <p>Following our highly successful MICE webinar, “Navigating the MICE Landscape: Buyers, Trends, Success”, we’ve put together a summary of the common industry challenges that our webinar attendees are facing going into 2024, how their jobs are changing in response to these challenges and the potential solutions going forward. </p>
                    <br></br>

                  
                    <p>During this session, attended by over 200 guests, m&i's Commercial Director, Heri Kashema, asked a select panel of top MICE suppliers and buyers questions on the current MICE landscape. What did we learn? From budget constraints to AI integration and a huge push for sustainability, producing events in today’s world is difficult but the payoff for clients has never been higher, with an overarching move towards real, authentic experiences to provide a sense of escapism.  </p>

    <br></br>            

                    <p>Our panel was made up of 4 key figures in the MICE industry on both the supplier and buyer side: Anna Peters, Creative Director at Evolve Events, Mette Ingstrup Owner and CEO at Better Travel & Events ApS, João Pinto Coelho, Sales Director at Onyria Golf Resorts and Jenn Whittle, Sales & Marketing Manager at Hello Scotland.  </p>

                    <br></br>

                  <h3>What are the challenges for MICE professionals in 2024?  </h3>

    <br></br>

                  <h4 className="underlined">Increase in hybrid working</h4>

    <br></br>

                  <p>Post-pandemic we saw the Great Resignation, then came the Great Reshuffle which saw a global shift to hybrid working. Going into 2024, venues and properties are finding it increasingly difficult to reach buyers to present traditional sales presentations and calls.  

    <br></br>  <br></br>

    “There isn’t the opportunity to do the sales calls and meet multiple people in a da.”   <br></br>  <br></br>


     “The new dynamic is working from home and people aren’t in their offices as much, so we have to find ways to reach buyers for a sales presentation.”     <br></br>  <br></br>


 “We could visit 20 clients in one week pre-COVID, and now at the m&i Forums you could meet 20 people during one cocktail party and then after we have to use LinkedIn and social media to show what we’re doing as a hotel.”    <br></br>  <br></br>


 “Post-COVID there's been so much reshuffling, our relationships with suppliers have been affected.”  </p>

<br></br>

                  <p>Takeaways: 

<li>Human-to-human connection has never been more important  </li>

<li>Trade shows, like m&i Forums, are becoming the most economical way to do business </li>

<li>Social media has never been more important for hotels to gain exposure </li> </p>

    <br></br>

                  <img src={Coffeebreak} alt={" "} ></img><br/><br/>

                  <h4 className="underlined">Last-minute requests and budget constraints </h4>
                  
<br></br>
                
                <p>Shorter lead times and last-minute requests are becoming the norm, with less experienced junior-level clients underappreciating the time and effort that planners must put in to produce the level of event that these clients want. Additionally, inflation and smaller budgets are forcing planners to be innovative.  </p>

    <br></br>

                <p>“Groups are super urgent and almost every email we receive is urgent or super urgent and also last-minute requests and they’re difficult with lots of AV and simultaneous translation.”   </p>

    <br></br>

                <p>“Now we’re seeing a much shorter lead time, typically we see a lead time of 18 months to a year and that's become a lot shorter and has opened up challenges with availability.”   </p>

    <br></br>

                <p>“Now the clients, the young ones, don’t really understand or appreciate our work the same way as before COVID.” </p>

    <br></br>

                <p>“When you look at expectations, they’d also gone up hugely. The answer lies in flexibility – what can people do around that to soften the cost and when you’re looking to hold that event and being more flexible on the type of venue and destination.”   </p>

    <br></br>

                <p>“We collaborate with our neighbouring hotels, the same way we did before COVID, we’ve been working as a region. Sometimes we won't have availability for a big group, so I suggest a neighbour and they’ll do the same for us.”  </p>

    <br></br>

                <p>Takeaways: 

<li>Buyers and suppliers are faced with exceedingly high expectations from clients with short lead times and smaller budgets </li>

<li>Lack of experience on the client side puts undue pressure on buyers and suppliers </li>

<li>Buyers and suppliers can’t be afraid of asking for flexibility from clients and planners, finding a middle ground for clients </li>

<li>Collaboration – not competition – is key to hotels hosting larger groups </li>  </p>

    <br></br>

               <img src={Collaboration} alt={" "} ></img><br/><br/>

               <h4 className="underlined">ESG </h4>
                  
                  <br></br>

              <p>More than ever, it appears that sustainability is at the top of clients’ wish lists, with a focus on
sustainable travel options and corporate social responsibility. While this is largely rooted in a desire
to reduce CO2 emissions and to travel ethically, clients are also concerned about the potential
judgment associated with making less sustainable choices.   </p>

    <br></br>

              <p>“Normally we could charter flights and buy airline tickets but this year we’ve had more and more requests asking how to make it sustainable and clients are worried about bad press from the transportation point of view.” </p>
                    

                 <br></br>

                 <p>“The Scandi and Nordic countries keep coming up because of sustainability. I also see dual destinations come up a lot and because of sustainable travel as you can travel between from city to city on trains as opposed to taking flights.” </p>

                 <br></br>
                 

                 <p>“Regarding ESG, for most of the hotels it’s about listing what we’re doing and being more visible the past 7/8 years so we’re not creating things from scratch.”  </p>

<br></br>


<p>Takeaways: 

<li>Suppliers need to provide more visibility on their sustainable options – social media is key in this </li>

<li>Buyers need to get creative when it comes to transportation and prioritise finding sustainable solutions to client briefs</li> </p>

<br></br>



               <h4 className="underlined">RFP fatigue  </h4>
                  
                  <br></br>

                  <p>Along with lead times shortening, suppliers are seeing an influx of RFPs through the introduction of
digital tools and AI post-COVID. This, however, can be an opportunity for suppliers to display their
destination knowledge.  </p>

<br></br>


<p>“Normally we have 4 people answer requests, now we have 6 but we also have more technology to help us answer, now we have AI helping answer people.” 

  <br></br>

  “Because there’s an increase in demand in certain regions, people are open to trying other destinations. We can send people to Glasgow instead of Edinburgh for instance. It shows our value as a DMC.”
</p>

<br></br>

<p>Takeaways: 

<li>AI is both a blessing and a curse </li>

<li>Venues and hotels require more time and resources to seek out the RFPs worth taking on </li>

<li>It can be a great opportunity for suppliers to display knowledge and innovation when finding solutions</li>  </p>

<br></br>


<h3>How are MICE professionals adapting?</h3>


<br></br>
<h4 className="underlined">AI is your friend, not your foe </h4>  <br></br>

<p>Unsurprisingly, conversation made its way back to AI time and time again but perhaps more surprisingly, our speakers were generally unphased by the question marks it poses over their roles, with some using it to enhance their processes and others confident in their authentic and human approach to work.  <br></br><br></br>

“If you look at AI you can find out a lot of information about venues, but you can’t find out the info that the people come to an agency want to know. What’s the ambience like, what’s the experience like?.”  <br></br><br></br>

“AI and tech-wise we try and visualise what that event will look like using visualisation tools for clients.”  <br></br>

“The technology innovation in my business is zero but I’m very good with people, so we meet and discuss the briefing and I find the solution. I have the personal edge.”  <br></br><br></br>

<h4 className="underlined">In-person events are the way forward  </h4>  <br></br>

The shift to hybrid working post-COVID and the want for real, human-to-human connection in a tech-automated world has left the MICE industry with a huge demand for trade shows like ours.  <br></br><br></br>

“The industry has proved the irreplaceable value of live experiences post-pandemic, it’s a case of absence makes the heart grow fonder.”  <br></br><br></br>

“Now we have sales reps in every major destination and what we did last year was invite all our DMCS to an event for one afternoon so we could collectively market.” </p>

<br></br><br></br>

<img src={Handshake} alt={" "} ></img><br/><br/>



<h3>In summary </h3>
<br></br>

<p>To conclude, it’s clear the solutions to the issues affecting the MICE industry today – namely hybrid working, budget constraints, short lead times and ESG – lie in embracing technology while retaining that personal touch and finding the most economical way to reach buyers, trade shows.  <br></br><br></br>

That’s where we come in. Our market-leading Forums, attended by all our speakers many times
over, allow you to meet the best buyers from all over the world, saving you a month of work in just a
few days. If you’d like to see first-hand how our events can solve these common industry challenges,
register your interest in one or more our Forums and one of our team will be in touch. </p>


<br></br>


        <a href='/signup'>
                                     <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                          I'm interested
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

export default Webinars