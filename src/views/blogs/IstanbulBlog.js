import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/istanbul/istanbul_bloghero-min.png"
import Picture1 from "../../assets/images/blog/istanbul/WOW_hotel.png"
import Picture2 from "../../assets/images/blog/istanbul/Hilton_Istanbul_Bomonti.png"
import Picture3 from "../../assets/images/blog/istanbul/Accessibility.png"
import Picture4 from "../../assets/images/blog/istanbul/environment.png"
import Picture5 from "../../assets/images/blog/istanbul/culture.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const Istanbul = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>What’s so good about Istanbul? | m&i</title>
        <meta
          name="description"
          content="What’s so good about Istanbul? "
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
                <h1 className="heading">What’s so good about <span className="coral-underlined">Istanbul?  {" "}
                   </span></h1>
                  <p className="blog-date">Published on Feb 1, 2023</p><br/><br/>
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
                    <p>Istanbul, our host destination for <a href="https://www.mi-forums.com/mi-europe-spring-2023">m&i Europe Spring Istanbul, 2023</a>. For some, it’s simply a major city in Türkiye, far from the beach resorts and clubs of popular holiday destinations like Belek or Bodrum. But for others, Istanbul is a treasure trove of culture, architecture, art, and business.<br/><br/>

It’s a city that was once the centre of civilization; so multicultural, in fact, that dozens of languages were spoken on its streets, including Greek, Persian, Arabic, and Italian. Visitors would come from all over Europe and beyond for the city’s trade and commerce opportunities.<br/><br/>

Now, we could give you a full breakdown of Istanbul’s fascinating history (and believe us, it’s a long one), or we could dive straight into what makes this Turkish city the ideal MICE destination.<br/><br/>

…we’re guessing it’s that second one, right? Okay, let’s get started.
 </p><br/><br/>

                    <h3>Location </h3>
                    {/* <br />
                    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src="https://www.youtube.com/embed/0V2Jhh_Ygqk"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div> */}
   <br />
                    <p>Istanbul is pretty special because it actually straddles two continents: Europe and Asia. This distinctive split has provided Türkiye with The Bosphorus Strait, a 20-mile stretch of water connecting the Black Sea and the Sea of Marmara. You’ll struggle to find another city with such a unique placement. </p>
                    <br></br>
                    <div className="quote"> <quote> ‘Finding somewhere to stay is no problem in bustling Istanbul. The city has more than 100,000 beds and over 200 four and five-star hotels to hang your hat for the night.’ </quote></div>
                   
                    <br></br>
                    
                    <h3>Meetings & Events</h3>
                    <br />
                    <p>For a city with such a rich history in business and trade, Istanbul certainly knows how to appreciate and embrace the new and modern. Just take a look at their seven swanky convention centres and three exhibition centres, all designed to connect the world through meetings & events.<br/><br/>

Their largest space for meetings is undoubtedly the WOW Convention Center, which houses 16 meeting halls across 5,100 sq m. of space. The centre even features a hotel with more than 600 four and five-star rooms, and its own metro station connecting it to the city. <br/><br/>

As for events, the city is no stranger to large-scale gatherings, including film festivals, concerts, music festivals, sporting events, and art exhibitions.<br/><br/>
 </p>


 <img src={Picture1} alt={" "} ></img>

 <br/><br/> 

                    <h3>Accommodation</h3>
                    <br />
                    <p>Finding somewhere to stay is no problem in bustling Istanbul. The city has more than 100,000 beds and over 200 four and five-star hotels to hang your hat for the night. <br/><br/>

Some of the city’s leading conference hotels include the Conrad Istanbul Bosphorus, Grand Cevahir Hotel & Convention Center, Swissôtel The Bosphorus Istanbul, and Hilton Bomonti Hotel & Conference Centre – our host venue for m&i Europe Spring Istanbul, 2023. 
 </p>
                    <br></br>

                     
                    <div className="quote"><quote>‘Their largest space for meetings is undoubtedly the WOW Convention Center, which houses 16 meeting halls across 5,100 sq m. of space’</quote></div>
                    <br></br>

                    <img src={Picture2} alt={" "} ></img>

                    <br/><br/>   
                    <h3>Accessibility </h3>
                    <br/>
                    <p>Nothing beats a city with great travel options by land, air, and sea. Not only is Istanbul easily accessible by plane from both Europe and Asia, but the city itself has an extensive range of ways to get around. <br /><br />

Bike paths provide a fun and active way to explore the natural splendour of the 25 nature parks, whilst the city’s metro network (the second oldest in the world) is a great way to see the sights. <br /><br />

Istanbul also boasts tram lines, the Metrobus, the Eurasia Tunnel, and Marmaray commuter rail line. And let’s not forget the option to sail along the stunning route of the Bosphorus Strait. 
 </p><br /><br />

                    <img src={Picture3} alt={" "}></img>
                    <br /><br />

                    <h3>Environmental action</h3>
                    <br/>
                    <p>Like many cities around the world, Istanbul is making positive environmental changes to facilitate a more sustainable future. <br/><br/>

The city has 25 nature parks - nine on the Asian side of the city and sixteen on the European. They’ve recently implemented a stricter zero waste scheme, electric public transport, travel credits in exchange for recycled items, and a new waterway, which is shortly due for completion. 

 </p><br /><br />

                    <img src={Picture4} alt={" "}></img>
                    <br /><br />

                   <h3>Culture</h3>
                   <br/>
                  <p> Art, history, religion, food, architecture, shopping - it’s all waiting to be discovered in Istanbul. A photographer’s dream, the stunning minarets and markets throughout the city are an explosion of colour. <br/><br/>

Take your senses on a journey through one of the city’s bustling bazaars, before stopping for a delicious taste of Türkiye (we’re thinking kebabs, baklava, and Turkish delight to name but a few scrumptious offerings), whilst you take in the view of one of the stunning mosques. <br/><br/>

Or why not break from the city’s more traditional side to experience a more modern twist on Istanbul culture? The local shopping centres and modern museums aren’t to be missed.</p>


                    <br></br>
                    <img src={Picture5} alt={" "}></img>
                    <br /><br />
                    <h3>Why did Türkiye change its name?</h3>
                    <br/>
                    <p>As many of you will already know, Türkiye changed its name last year following a request from the UN. This important historical moment was spurred by a number of things. <br/><br/>

President Recep Tayyip Erdogan issued a statement saying, ‘The word 'Turkiye' represents and expresses the culture, civilisation, and values of the Turkish nation in the best way.’<br/><br/>

The country wanted to move away from its anglicised name and reclaim its roots while also erasing the unfortunate association with the bird of the same name. Essentially, this is a rebranding campaign for the Turkish government in an effort to drive tourism while staying true to its past. <br/><br/>

<strong style={{fontSize:"30px"}}>Experience Istanbul for yourself at m&i Europe Spring 2023</strong><br/><br/>

Love the sound of building new connections and MICE partnerships in one of the world’s most historic business destinations? Join us at m&i Europe Spring from 16-19 April 2023. 
</p><br></br><br></br>
                    <a href='/signup'>
                                                    <span className='text-white btn btn-primary' >
                                                       sign up
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

export default Istanbul
