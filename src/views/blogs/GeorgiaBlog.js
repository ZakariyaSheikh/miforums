import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Coverimage from "../../assets/images/blog/Georgia/coverimage.jpeg"
import Chateau from "../../assets/images/blog/Georgia/chateau.jpg"
import Furnicular from "../../assets/images/blog/Georgia/furnicular.jpg"
import Radissonblu from "../../assets/images/blog/Georgia/radissonblu.jpg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const GeorgiaBlog = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Discover Georgia Powered by m&i: the recap | m&i</title>
        <meta
          name="description"
          content="Discover Georgia Powered by m&i: the recap "
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
                <h1 className="heading">Discover Georgia Powered by m&i: <br/>{" "} <span className="coral-underlined">the recap {" "}
                   </span></h1> 
      
                  <p className="blog-date">Published on July 28, 2023</p><br/><br/>
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


                    <p>At the start of the month m&i embarked on a trip to Georgia for Discover Georgia Powered by m&i in partnership with <a target="_blank" href="https://gnta.ge/">Georgian National Tourism Administration.</a> A little different from our regular Forums, at this event we flew out a group of European buyers to the destination to show them the best of Georgia’s capital, Tbilisi. Delegates stayed at the <a target="_blank" href="https://roomshotels.com/hotel/tbilisi/">Rooms Hotel</a> and <a target="_blank" href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-tbilisi">Radisson Blu Iveria Hotel</a>, Tbilisi, the latter also being their meeting venue. Curious as to how it all went? Keep reading to find out what our delegates got up to. </p>
    <br/><br/>

                    <h3>Why was our event in Georgia different? </h3>

    <br></br>
                    <p>While we kept to our usual format – 25 pre-organised meetings, networking activities, upmarket dinners and site visits – we also switched it up a bit. Usually, we invite global suppliers and UK & European buyers to our m&i Europe Forums but this time we brought 55 buyers to the destination to meet with 35 local suppliers. Essentially, we were helping buyers discover Tbilisi’s widely undiscovered MICE potential. </p>

    <br></br>            
                    <h3>What went down in Tbilisi </h3>   

    <br></br>     
                    <p>Our guests kickstarted their Georgian experience with an afternoon at <a target="_blank" href="https://gotsawines.com/en/">Gotsa winery</a> where we all discovered the traditional methods of winemaking from the experts at Gotsa Family Wines. The winery itself is nestled in the oak forests of Kiketi, a beautiful region of Georgia filled with rolling hills and luscious greenery. Here we tucked into our first taste of Georgian cuisine and Georgian hospitality, something the local people pride themselves on.  </p>

    <br></br>

                    <div className="pullquote"> <quote><span>"</span>A fantastically organised event to discover and find partners in this promising and underestimated destination.<span>"</span> </quote>

                    <h5>Yaprak Renda, Hotelmaster Training & Consulting </h5><br></br></div>

                    <p>Our first evening was spent at the recently restored Tbilisi Funicular. A truly unique venue, the Tbilisi funicular takes travellers to the city’s highest point where you can explore Mtatsminda Park and take in panoramic views of the city. We dined at the Funicular Restaurant in a refined Georgian ‘supra’, a traditional Georgian feast incorporating sharing plates. In true supra fashion, we dined at long tables where sharing plates were placed, encouraging conversation and connection throughout. </p>

    <br></br>

                    <img src={Furnicular} alt={" "} ></img><br/><br/>

                    <p>Day two kicked off with our first morning of meetings at the Radisson Blu Iveria Tbilisi Hotel, followed by an afternoon of destination activities. For those that aren’t familiar, our destination discovery activities are a set of local experiences that help our buyers see the best of a destination. They’re also a great way for buyers and suppliers to network outside of the meeting room. In Tbilisi, we had an amazing range to choose from including a tour of the old city, a bunker tour and even a calligraphy masterclass. Attendees got to experience all sides of Georgian culture from its wartime history to its ancient language. </p>

  <br></br>

                    <div className="pullquote"> <quote><span>"</span>Georgia is certainly "on my mind" since this fascinating event! This Forum provided insights into the remarkable story of an independent people creating a new future for MICE as well as global politics, and I'm confident that Georgia - and Tbilisi in particular - is THE new destination for creative and curious travellers!<span>"</span> </quote>

                    <h5>Kristie Hall, HelmsBriscoe </h5></div>

  <br></br>
    
                    <img src={Radissonblu} alt={" "} ></img><br/><br/>

                    <p>Once we’d freshened up from our activities it was on to another supra at our second evening hosted by The Stamba Hotel. We ascended to the rooftop for a night of connection overlooking the city in a building that was once a Soviet-era publishing house. The hotel itself prides itself on its striking industrial design and sustainable practices, reflecting Tbilisi's dedication to innovation and history.  </p>

                    <br></br>

                    <p>Guests awoke on day three ready for another morning of meetings, followed by an afternoon at leisure where they could either choose to relax in their own time or book a site visit. Their options ranged from The Biltmore Tbilisi & The Tbilisi Marriott Hotel, Sheraton Grand Tbilisi and leading exhibition space, Expo Georgia. </p>

                    <br></br>

                    <p>After an afternoon of visits, we were treated to a final evening of Georgian hospitality at Château Mukhrani. The Château, originally built in the 19th century as a royal family estate, released its first vintage in 1878 and has since invited visitors to witness its traditional winemaking methods. We were taken on a tour of its famous cellars and grounds before heading to its orangery for another delicious supra. </p>

  <br></br>

                  <img src={Chateau} alt={" "} ></img><br/><br/>

                  <div className="pullquote"> <quote><span>"</span>Discover Georgia Powered by m&i was a real eye-opener into a new, exciting destination and to be at the forefront of discovering this destination is a real honour! It has so much to offer from cities to mountains, wine regions and coastal destinations.<span>"</span> </quote>

                  <h5>Susan Brogan, Venue Seekers </h5></div>

 <br></br>

                 <p>And that’s a wrap! We had a brilliant time bringing our team of buyers to Tbilisi to explore everything that it has to offer the MICE world. From evening feasts in unique venues to lessons in Georgian history, we left no stone unturned in our three days of exploration and connection. </p>

                 <br></br>

                 <p>Want to see what all the fuss is about? Have a look at our full calendar of events. We’ve still got Limassol, Lake Como and more coming up this year and in 2024 you can look forward to Marrakesh, Miami and Sorrento to name just a few! </p>


<br></br><br/> 
        <a href='/calendar'>
                                     <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                          view calendar 
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

export default GeorgiaBlog