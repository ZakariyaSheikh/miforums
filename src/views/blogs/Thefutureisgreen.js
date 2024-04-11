import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Coverimage from "../../assets/images/blog/thefutureisgreen/cover.png"
import Picture1 from "../../assets/images/blog/thefutureisgreen/picture1.png"
import Picture2 from "../../assets/images/blog/thefutureisgreen/picture2.png"
import Picture3 from "../../assets/images/blog/thefutureisgreen/picture3.jpg"
import Picture4 from "../../assets/images/blog/thefutureisgreen/picture4.jpeg"
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
        <title>The future is green: Anna Peters from Evolve Events on how sustainability is reshaping MICE | m&i</title>
        <meta
          name="description"
          content="The future is green: Anna Peters from Evolve Events on how sustainability is reshaping MICE  "
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
                <h1 className="heading">The future is green: Anna Peters from Evolve Events on how sustainability  <br/>{" "} <span className="coral-underlined">is reshaping MICE    {" "}
                   </span></h1> 
      
                  <p className="blog-date">Published on March 12, 2024</p><br/><br/>
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


                    <p>The events industry is embracing a monumental shift towards sustainability and eco-conscious practices as 2024 ushers in an undeniable call to climate action. According to Anna Peters, Creative Director of Evolve Events and a CN Awards Event Influencer of the Year, sustainability is no longer merely a trend or “nice-to-have” in the meeting and events sector – it’s becoming the central focus in guiding the strategic decisions of both clients and venues. A Forum regular, we spoke to Anna about all things MICE and sustainability – here's what she had to say.  </p>
                    <br></br>

                    <img src={Picture1} alt={" "} ></img><br/><br/>

                    <h4 className="underlined">1) Thanks for chatting to us today, let’s get into it. How do you see sustainability becoming more of a concern for your clients?  </h4>
<br></br>
                    <p>Absolutely, in 2024, sustainability isn't merely a trend; it's a call to action and the events industry is primed to take significant strides towards environmentally conscious practices. From waste reduction to embracing eco-friendly solutions, events are set to play a pivotal role in shaping a greener future. And with the Corporate Sustainability Reporting Directive taking effect, clients are increasingly looking to us to create events that are not only sustainable-focussed and align with their values but where the impact of hosting the event can be measured.  

                    <br></br>    <br></br>

Alongside the environmental concerns, clients are placing a greater emphasis on the social aspect of sustainability. The wellness wave is set to surge even higher in 2024, with self-care folded into event design. Flexible schedules, health-oriented experiences, time outdoors and a focus on local offerings are becoming essential components to counteract stress and burnout. The year ahead signals a significant shift towards meaningful events. Clients are prioritising human connection, authentic local encounters and the pursuit of profound experiences.   </p>

    <br></br>            

    <h4 className="underlined">2) How are venues adapting to this?   </h4>
    <br></br>

<p>As sustainability transforms from a "nice-to-have" to a "need-to-have," clients are seeking deeper commitments from venues. It’s no longer sufficient to say, ‘We’re eliminating straws’ or ‘We only wash towels only upon request’. Clients are looking for venues that lead with sustainable practices benefiting both people and the planet.  

<br></br>    <br></br>

Venues prioritising eco-initiatives and reflecting local environments are standing out. Six Senses, for instance, directs a portion of its revenues towards a Sustainability Fund, supporting projects benefiting local communities or ecosystems. Good Hotel in London not only provides a unique floating venue but also reinvests profits into social causes, supporting the long-term unemployed in building careers in hospitality.  

<br></br>    <br></br>

Food waste is also in the spotlight, with Accor leveraging AI to adjust menus and reduce waste. Novotel Amsterdam Schiphol Airport, part of this initiative, have been able to cut its waste by 35%, the equivalent of 8 tons over two years. Under, a Norwegian restaurant located underwater not only offers a once-in-a-lifetime dining experience but also operates as a research centre, providing unique opportunities to observe maritime life. For those sceptical that vegetarian and vegan dining can deliver the wow factor clients crave, Alpen Gold’s atelier Vert menu will change minds with surprises and ingredients from alpine pastures, including rolled barley and hemp flour and cocktails featuring Christoffel Röteli liquor, the secret recipe of which has been a local family secret for over 100 years.  


 </p>

<br></br>            

  <img src={Picture2} alt={" "} ></img>
  <p>(Under, Norway)</p><br/>

  <h4 className="underlined">3) What are the most innovative sustainable solutions you’ve seen?  </h4>
    <br></br>

<p>Venues that foster collaboration and conversation, provide quiet rooms, and feature sensory-friendly environments will be in more demand, along with rooms to relax. Hotel Luise in Germany, proves that smaller hotels can punch just as hard as the bigger groups, boasting the world’s first ‘renewable hotel rooms’ where everything is recyclable or biodegradable; the ceilings are made from straws and the carpet from recycled fishing nets and the junior suites come with garden views and a hand-painted starry sky above the bed for deep relaxation. 2024 is the year that sleep gets serious - Lefay Resort & Spa in Lake Garda is an example of a hotel now offering a five-night sleep programme for executives looking to de-stress.  
 </p>

<br></br>     
<img src={Picture3} alt={" "} ></img>
  <p>(Lefay Resort & Spa Lago di Garda)</p><br/>     

<p>Among so many initiatives, learning how to assess genuine eco-friendliness can be challenging, with a sea of accreditations out there. Measurability is key and Hilton's 'Travel with Purpose' initiative sets an excellent standard for transparency, measuring and reporting on energy, water and waste metrics in easy-to-understand reports.  </p>

<br/><br/>   

<h4 className="underlined">4) In your opinion, which destinations are leading the way for sustainability?  </h4>
    <br></br>

<p>More and more, event attendees are starting to question if they can justify travel to events in a climate crisis. The simple answer? Yes, we can. The ascent of AI and the era of remote work exemplify why fostering real-life connections has never been more crucial. But to meet carbon targets, those frequent flyers among us must take to the skies a bit less. <br/><br/>   

Opting for trains is an impactful move to slash the carbon footprint of an event and a travel choice that I expect to see on the rise, especially for European events. Great news then that, according to Tripadvisor, Europe is leading the way on sustainability, with eight out of the top 10 most sustainable cities stemming from the region. <br/><br/>   

Lesser-known destinations are also gaining popularity, moving away from 'bucket list' to 'off-the-beaten-track' choices, helping to decrease over-tourism whilst also satisfying the thirst for new and unique. Ljubljana in Slovenia, Europe’s ‘greenest city,’ impresses with its commitment to removing cars from the city centre, focusing on public transport and creating wildlife-friendly spaces. Slovenia also has the largest percentage of veggies in Europe, making it easier to keep your ‘foodprint’ low.  <br/><br/>   

Public transport green schemes are sprouting globally, with cities like Berlin becoming cycle-friendly. Singapore has increased its green cover by 10% in the last twenty years and Vienna has pioneered its first ‘climate-adapted street’ with gardens, spaces for bikes and trees. Gothenburg has topped the Global Destination Sustainability index for the seventh time, whilst Nordic cities continuing to lead the way making up eight of the top ten cities.  <br/><br/>   

Meanwhile Paris, thanks to the Olympics, is undergoing significant sustainable investment, ensuring it never goes out of style. Outside Europe, destinations like Bhutan, the world's only carbon-negative country, exemplify a 'less-is-more' approach, regulating visitor numbers and protecting its forests. Sustainable destinations can vary greatly; those that actively support the environment, minimise natural resource use and contribute to local communities are the ones to seek out.  </p>

<br></br>     
<img src={Picture4} alt={" "} ></img><br/><br/>

<h4 className="underlined">5) Aside from sustainability, what do you think are the key trends to look out for in 2024?   </h4>
    <br></br>

<p>Events are in a constant state of evolution, and no more so than in 2024, spurred by a dynamic global landscape marked by multiple elections, the urgency of climate change and technological advancements.  <br/><br/> 

Beyond the pivotal focus on sustainability, several key trends are shaping the industry this year. With remote work becoming the new normal, live events are crucial for fostering connections and promoting company culture. The need to bring together is one of the most important facts in why events are gaining strength.  <br/><br/> 

Meaningful events will take centre stage, focusing on experiences that prioritise authentic connections. Destinations and venues offering environments accessible to all and encouraging collaboration will be in high demand.  <br/><br/> 

In 2023, ChatGPT exploded, streamlining event planning processes from destination research to automating event registration. In 2024, leveraging attendee data and AI for personalised agendas and enhanced networking will be a key focus. The year might witness facial recognition going mainstream at large events and AI-powered features like closed captioning and language translation will help with accessibility. However, concerns about AI persist, creating a trust gap. Face-to-face events stand out as an opportunity to bridge this gap, providing genuine connections beyond the digital realm. As the industry navigates transformative trends, the enduring value of real-life interactions becomes increasingly evident.  <br/><br/>    </p>

<br></br>     


<p>Want to meet forward thinking buyers like Anna and find effective, authentic ways to connect with MICE professionals?  

 <br></br><br></br>

Check out our full calendar and discover what m&i could mean for you in 2024! Our Forums are all about making business joyful – if you attend an event you’ll be leaving with more than just great connections. </p>


<br></br>


        <a href='/calendar'>
                                     <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                         View calendar
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