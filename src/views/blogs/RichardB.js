import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Coverimage from "../../assets/images/blog/RichardB/COVER.png"
import Richard from "../../assets/images/blog/RichardB/RICHARD.jpg"
import FEST from "../../assets/images/blog/RichardB/FEST.png"
import Marrakesh from "../../assets/images/blog/RichardB/MARRAKESH.jpeg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const RichardB = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Richard Barnes gives the lowdown on m&i's new event in Marrakesh | m&i</title>
        <meta
          name="description"
          content="m&i: Richard Barnes gives the lowdown on m&i's new event in Marrakesh "
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
                <h1 className="heading">m&i Fest: <br/>{" "} <span className="coral-underlined">Richard Barnes gives the lowdown on m&i's new event in Marrakesh {" "}
                   </span></h1> 
      
                  <p className="blog-date">Published on January 26, 2024</p><br/><br/>
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


                    <p>With the new year underway and March in our sights, we felt a chat with our CEO, Richard Barnes, about  <a target="_blank" href="https://www.mi-forums.com/mi-fest-marrakesh-24">m&i Fest Marrakesh 24</a> would be just the antidote for the January blues. If you didn’t know, Fest is our biggest event yet, combining the choice of an exhibition with the personalisation of our smaller Forums. Behind the scenes, we’ve been putting together a programme that promises to enhance your opportunities to connect, show you the very best of the beautiful Marrakesh and its MICE capabilities, and create meaningful moments. </p>
    <br/><br/>

                    <h3>Decades in the making  </h3>

    <br></br>
                    <p>We spoke to CEO, Richard Barnes, about where this new event format came from. “It’s the evolution of our mission to find better ways to connect the MICE industry.” It’s a culmination, he tells us, of decades of experience, “We’ve been improving the way the MICE community meets for 20 years and m&i Fest is the result of all that we have learned over the last two decades and over 180 events.”  </p>

    <br></br>            

                    <p>“Festivalising”, however, is not a new concept to Worldwide Events. As Richard explains, “we started doing this with Private Luxury Events years ago when we actually started using the term.” </p>

    <br></br>

                    <p>But what exactly does this mean? </p>

    <br></br>

                    <p>Richard tells us: “At the heart of what ‘Fest’ stands for is a trade show that is focussed on giving people an impactful and inspiring experience for both their businesses AND for themselves. A core value is choice.  Choice of who to meet with, how to fill your time, where to go, what to do in the evenings and how to create the experience that you want.” </p>

    <br></br>
    
                    <img src={Richard} alt={" "} ></img><br/><br/>

                  <h3>Why Fest, why now? </h3>

    <br></br>

                  <p>But why deliver Fest now, what’s the significance of a 2024 launch? Richard tells us it’s giving the industry a breath of fresh air: “We believe our industry deserves a more stimulating place to meet, to do business, to develop, and to celebrate.”  </p>

    <br></br>

                  <p>It’s about building the future of the MICE industry and “always striving to find more effective ways to network.” This can be seen in the upgrades to meetings, programme format and supplier storytelling. </p>

    <br></br>

                  <p>But what else sets this event apart from our other Forums? In a broad sense, as he explains, “More choice, more business, more happiness, more return on investment and more return on time.” </p>

    <br></br>

                  <p>One of the most pertinent updates is our innovative ‘Pathway’ concept. Pathways are our new and improved destination activities which aim to provide delegates with maximum facetime in a relaxed setting while providing buyers with more in-depth opportunities to discover Marrakesh’s MICE offering. </p>

    <br></br>

                  <p>From deep dives into Marrakesh’s cultural history and natural beauty to a culinary discovery and an architectural journey, there’s something for everyone. Guests’ choice has been doubled with the option to book 2 separate Pathways across 2 days. Because, as is the Fest approach, this is your event, your way – personalisation is integral to our programme.  </p>

    <br></br>

                  <p>Another enhancement is the introduction of our exhibitor pavilions which aim to provide our suppliers with maximum exposure while also allowing them to tell their brand or destination story in new and unique ways. </p>

    <br></br>

                  <p>We’re also addressing a common ask from delegates: longer meetings. The Fest programme will see longer meetings, with longer rest periods in-between and meetings spread across the morning and afternoon. This upgrade will allow delegates to focus on doing high-quality business without being rushed. </p>

    <br></br>

                  <p>Of course, the most apparent difference is the size of the event. With a total of around 200 international supplier tables and 240 international buyers, it’s our biggest to date. This means more meeting choice than any other m&i Forum and, importantly, more opportunities to find your best MICE matches. </p>

    <br></br>

                  <img src={FEST} alt={" "} ></img><br/><br/>

                  <h3>Marrakesh: adding some spice to MICE </h3>

    <br></br>

                <p>Richard enthuses, “Culture, intrigue, variety and especially authenticity – Marrakesh has all the ingredients for a magical event experience, and it is very much the embodiment of what m&i Fest stands for.”  </p>

    <br></br>

                <p>A true delight for the senses, Marrakesh is a beautiful concoction of colourful souks, world-famous cuisine and plentiful natural beauty. Marrakesh does something else rather well: MICE events.  </p>

    <br></br>

                <p>The city has 3 conference centres and a whole host of conference rooms and meeting facilities integrated into its huge selection of 4 & 5-star hotels, ranging from traditional riads to luxury resorts.  </p>

    <br></br>

                <p>Not only can it guarantee delegates over 300 days of sunshine, it’s also easy to get to and get around with a flight time of under 3.5 hours from the UK and other European cities, and a compact and walkable city centre. </p>

    <br></br>

                <p>More widely, an investment of $368 million has been made to the country's airports and a further $1.59 billion into improving Morocco’s trains and train links to major cities.  </p>

    <br></br>

                <p>Morocco’s commitment to tourism has also stepped up in recent years, with huge investment into waste disposal, hygiene certification in restaurants in Marrakesh and beach clean ups along Morocco’s coastline – it's cleaner and safer, than it’s ever been. </p>

    <br></br>

                <p>Put simply, our inaugural Fest had to take place in Marrakesh.  </p>

    <br></br>

               <img src={Marrakesh} alt={" "} ></img><br/><br/>

               <h3>Looking ahead </h3>

    <br></br>

              <p>With buyer spaces already sold out, our supplier spots are looking likely to do the same soon. If you’re convinced, we recommend registering your interest soon to avoid missing out.  </p>

    <br></br>

              <p>On a final note, we asked Richard what he’s most looking forward to: “The atmosphere.  If it comes together the way we’re planning, the event will have a unique buzz created by 500 people who are realising that they have found a new way to do business. What could be more exciting than that?”  </p>
                    

                 <br></br>

<br></br><br/> 
        <a href='/signup'>
                                     <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                          Register your interest
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

export default RichardB