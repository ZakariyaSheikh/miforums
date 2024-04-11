import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/seville/thumbnail.png"
import Picture1 from "../../assets/images/blog/seville/picture1.png"
import Picture2 from "../../assets/images/blog/seville/picture2.png"
import Picture3 from "../../assets/images/blog/seville/picture3.png"
import Picture4 from "../../assets/images/blog/seville/picture4.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const Seville = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>blog | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
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
                <div className="blog-banner" style={{ backgroundImage: `url(${Banner})` }}> </div>
                <br></br>
                <h1 className="heading"><span className="coral-underlined">Back so soon?</span> Why we're hosting our second event in Seville in 5 years.</h1>
                  <p className="blog-date">Published on March 21, 2022</p><br/><br/>
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

                    <p>This year, we’re hosting our second Forum in Seville within just 5 years! To help you understand what makes this unique Spanish city so perfect for hosting events, we asked Manuel Macias, Director of Seville Congress & Convention Bureau, to tell us everything a planner might want to know, from how the city’s changed since our last event in 2017, to where the city is heading in the next 20 years (plus lots more in between). </p><br/>

                    <p>So read on and get to know Seville through the eyes of its experts…</p><br/>

                    <h3>m&i last hosted a Seville-based event back in 2017. If an event planner came to our 2017 event, what new properties would they find now in 2022?</h3>
                    <br />
                    <p>In these 5 years, many things have happened and I don’t just mean the pandemic. Attendees coming to m&i Europe Spring 2022 in Seville will be able to discover some of the almost 40 new hotels that are being built, as well as new venues, an airport that, once complete, will double its capacity for receiving passengers, as well as new infrastructures in the city.</p>

                      <br></br>
                    <img src={Picture1} alt={" "}></img>
                    <br /><br />


                      <h3>Tell us a secret about Seville that most visitors wouldn't know.</h3>
                    <br />
                    <p>For two and a half centuries, Seville was the most important capital in the world. After the discovery of America, the city became the port and doorway to the New World. The first circumnavigation of the Earth also began and ended in Seville in the 1500s. Now we celebrate the 500th anniversary of this great feat of humanity. Many also don’t know that Seville is the city with the largest number of orange trees - more than 37,000! </p><br />


                    <h3>What makes Seville perfect for hosting events?</h3>
                    <br />
                    <p>In life, balance is essential and we’re convinced that Seville is a city in which the balance of climate, monumentality, hospitality, value for money, gastronomy, venues and professionalism all play a favourable role for event organisers.</p><br />

                    <h3>What big events do you already host and which events are you hoping to host in the foreseeable future?</h3>
                    <br />
                    <p>This year alone, we’re hosting great events such as the UEFA League Final, which will bring together more than 50,000 pax in Seville, and numerous international congresses such as the International Pharmacy Congress and the International Congress of Sports Sciences. We will also have a unique Festival on Flamenco art, the Bienal de Flamenco de Sevilla in September and October, plus the Icónica Festival to be held in the famous Plaza de España.</p>

                    <br></br>
                    <img src={Picture2} alt={" "} ></img>
                    <br /><br />

                    <h3>Where do you see Seville in 20 years?</h3>
                    <br />
                    <p>The boost that Seville has been experiencing in recent years will undoubtedly make this city one of the most desirable destinations for holding conferences and events. Air connectivity is improving remarkably, as well as the quality and quantity of hotels, which justifies the sustained and consolidated growth of Seville as a premium MICE destination. To this, we must add an unwavering commitment to create and celebrate sustainable events in a smart city that will combine modernity as a standard of action in the governance of the city.</p><br />

                    <h3>Sell Seville in one sentence.</h3>
                    <br />
                    <p>The dream city made possible.</p><br />

                    <h3>Why should buyers choose Seville over another major Spanish city like Barcelona or Madrid?</h3>
                    <br />
                    <p>Spain in general is a world-class destination that leads MICE trends. Seville is a very important link for Spain - it’s located in southern Europe, the capital of Andalusia, with a very manageable size, where everything is possible. The differences with other important Spanish cities are currently based on the climate, the value for money in hotels, restaurants, venues and complementary services, as well as the level of hospitality, local attitude and the artistic culture. All these things are what makes Seville so unique. </p>

                    <br></br>
                    <img src={Picture3} alt={" "} ></img>
                    <br /><br />

                    <h3>Current trends show that second-tier (smaller) cities are more popular for hosting meetings & events. Do you agree and why?</h3>
                    <br />
                    <p>Of course I agree. We see how this trend manifests itself on a daily basis. More and more congresses and large events are looking for medium-sized cities that are well connected, with attractions and sufficient resources. <br /><br/>
                    The pleasure of reaching venues within a manageable walking distance, avoiding traffic jams and taking less time to get from one place to another, gives event attendees more time to get to know and enjoy the destination. It’s real ‘bleisure’.</p><br />

                    <h3>Describe your idea of a perfect incentive trip to Seville.</h3>
                    <br />
                    <p>Without a doubt, there are as many "ideal" incentive programmes as there are organisers, and their variations are innumerable.<br /><br/>

                    On a subjective level, a great programme could include aspects such as visiting some of the most impressive monuments in the world, like the Cathedral with the Giralda tower, the Real Alcázar and the Museum of Fine Arts, or enjoying an unforgettable flamenco show, preceded by a fun interactive flamenco class or cooking experience and eating delicious tapas. Also visiting an unknown and monumental convent with actors and musicians or riding in horse-drawn carriages in the Doñana National Park.... I could go on but we invite those interested to ask us more...</p><br />

                    <br></br>
                    <img src={Picture4} alt={" "} ></img>
                    <br /><br />

                    <h3>How well is Seville recovering from the pandemic?</h3>
                    <br />
                    <p>For Seville, tourism in general and MICE in particular form an important part of the local economy.<br/><br/>

                    We can confirm that there is plenty of desire for travel to Seville and many events that were cancelled during the pandemic are beginning to resume from March, so we are very optimistic about the recovery. An important fact is that during this harsh pandemic period, none of the 40 planned hotel projects have fallen through, which shows great confidence in Seville.</p>
                   <br/>

                   <h3>Discover incredible Seville with your own eyes</h3>
                    <br />
                    <p>Join us at m&i Europe Spring 2022 from 8-11 May. As a hosted buyer, we’ll provide your flights, accommodation and transfers, plus 1-2-1 meetings, unmissable destination activities and exceptional nightlife experiences. You’d be ‘loco’ to miss out.</p>


                    <br></br>

              </div>



</div></div>
            </div>
            </div>

<RelatedArticles/>
          </div>
      </div>
      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default Seville
