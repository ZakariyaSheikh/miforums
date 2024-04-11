import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/ibiza/banner.jpg";
import Torre from "../../assets/images/events/2023/Europe Private/LOGOTORREDELMAR.gif";
import IbizaConvention from "../../assets/images/events/partner_logos/Ibiza Convention Bureau.jpg";
import IbizaBalears from "../../assets/images/events/partner_logos/ibizabalears.jpg"
import IbizaGSE from "../../assets/images/events/partner_logos/LOGO_GSE.jpg"
import IbizaProject from "../../assets/images/events/partner_logos/ibiza_project.jpg";
import Incentivos from "../../assets/images/events/partner_logos/incentivos.png"
import Carousel from "../../components/elements/Carousel"
import Graphic1 from "../../assets/images/blog/ibiza/graphic1.png"
import Graphic2 from "../../assets/images/blog/ibiza/graphic2.png"
import Graphic3 from "../../assets/images/blog/ibiza/graphic3.png"
import Picture1 from "../../assets/images/blog/ibiza/Image1.jpg"
import Picture2 from "../../assets/images/blog/ibiza/Image2.jpg"
import Picture3 from "../../assets/images/blog/ibiza/Image3.jpg"
import Picture4 from "../../assets/images/blog/ibiza/Image4.jpg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const IbizaBlog = () => {
  const { isShowing, toggle } = useModal();

  const images = [
    [
      Torre
    ],
    [
     IbizaConvention, IbizaBalears, IbizaGSE, IbizaProject, Incentivos
    ]
  ];
 
  const links = [
    ['https://www.hoteltorredelmar.com/en'],
    ['https://www.ibizaconventionbureau.es/en/', 'https://ibiza.travel/', 'https://www.global-star-events.com/', 'https://ibizaproject.es/', 'https://incentivosibiza.com/']
  ];
  const headings = ['gold', 'silver'];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Private, Ibiza 2023: how it went down| m&i</title>
        <meta
          name="description"
          content="m&i Private, Ibiza 2023: how it went down "
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
              <div className="blog-banner" style={{ backgroundImage: `url(${Banner})`, backgroundSize:"contain", marginLeft:"5%" }}> </div>
                <h1 className="heading">m&i Private, Ibiza 2023: {" "} <span className="coral-underlined">how it went down {" "}
                   </span></h1>
                  <p className="blog-date">Published on May 25, 2023</p><br/><br/>
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

                    <p>In April we whisked a select group of buyers and suppliers off to the Balearic coasts of Ibiza for 3 days of immersive networking in the sunshine. Together guests connected over good food, incredible evenings and even better meetings at our annual Private Forum. 
</p><br/><br/>

                    <h3>What did we get up to?  </h3>
                    <br />
                  
                    <p>Our Private Forum is always a favourite amongst our long-standing m&i-ers. People love them because of their intimate atmosphere, special destinations and hand-picked clientele – specifically intimate brands of hotel chains, unusual properties, venues of character and boutique hotels. These Forums are all about showcasing properties with something different on offer, highlighting their individuality and character.   </p>  
<br></br>

                    <img src={Graphic1} alt={" "} ></img><br/><br/>

                    <p>We kicked off the Forum with a relaxed opening night at our host hotel, Hotel Torre del Mar, with local entertainment showcasing Ibiza’s cultural history. From a hippie family performance to traditional folk dancers and drummers, guests got a taste of Ibiza’s past against a beautiful sunset.  </p>
                    <br/><br/>
<img src={Picture1} alt={" "} ></img><br/><br/>
<p>The next morning called for our first round of meetings, also at our host hotel. Guests got more than just some connection, but a beautiful sea view as too! After lunch they got to experience a range of exciting destination activities to see what the island has to offer. There were creative workshops, Old Town tours, mountain and e-bike trips, hikes and road trips to provide a fun-filled afternoon of connection.  </p>
<br/><br/>
<img src={Picture2} alt={" "} ></img><br/><br/>
                

                    <div className="pullquote"> <quote><span>"</span>The professionalism of all the staff at the event made it a complete success – congratulations!!!<span>"</span> </quote>

                    <h5>Alberto received 8 RFPs during the Forum.  </h5>

                    <p>Alberto No, Barceló Hotel Group, Spain</p><br/><br/></div>

                    <p>After freshening up, we took off to the beautiful Atzaró Agroturismo on the other side of the island for a white party to remember. Here guests mingled in the stunning venue gardens, all against the backdrop of yet another sunset. Following a successful trial in Istanbul, we also provided another 100% vegetarian fine dining experience, saving 4,306 car miles worth of CO2 compared to the meat option. </p>  

<br/><br/>
<img src={Picture3} alt={" "} ></img><br/><br/>
<p>The highlight of our final full day had to be the networking afternoon at Cala Bassa Beach Club. Following their morning meetings, guests headed to a beautiful beach cove for water sports and relaxation in the sun, because connection doesn’t have to be confined to the meeting room!  </p>
<br/><br/>
                    <div className="pullquote"> <quote><span>"</span>Many thanks to the team at m&i Private! I had a blast during the event. It was my absolute pleasure to meet so many great people from the industry. I was able to plant the seed for fruitful relationships with new contacts and strengthen old connections!<span>"</span> </quote>

                    <h5>Ginny received 3 RFPs during the Forum.   </h5>

                    <p>Ginny Schmid, Oostwegel Collection, The Netherlands   </p><br/><br/></div>

                    <p>And lastly, it was time for one last indulgent night at the understated Nassau Beach Club. Our final evening in Ibiza called for a hippie theme and boy did our guests wear it well! After indulging in a delicious three-course seafood dinner we all got on our feet for a boogie to 60s and 70s classics, finishing the Forum the only way m&i know how: with a smile on our faces.    <br/><br/>

                   
<img src={Picture4} alt={" "} ></img><br/><br/>
<h3>What did the delegates make of it? </h3>

Three days of connection in the sunshine, a meeting room with a sea view and an impressive selection of Ibizan venues is hard to beat – and this was reflected in our delegate satisfaction surveys. Guests praised the efficiency of the Wyred app, our hardworking team and our showcasing of the island.     </p>  
<br></br>


<img src={Graphic2} alt={" "} ></img><br/><br/>

<div className="pullquote"> <quote><span>"</span>It was a fabulous three days of balanced networking, fun and meetings with a really good level and quality of suppliers for my needs. It was one of the best Forums I have attended, even outside of m&i!<span>"</span> </quote>

<h5>Susan placed 3 RFPs during the Forum.   </h5>

<p>Susan Brogan, Venue Seekers, United Kingdom  </p><br/><br/></div>

<br></br>


<img src={Graphic3} alt={" "} ></img><br/><br/>
                

<div className="pullquote"> <quote><span>"</span>In my six years working the MICE industry, this was my first experience of m&i and I can’t believe I didn’t do it earlier! I’ve met new and interesting people and that’s always better than via email or any other platform. Thank you for the great event in Ibiza!<span>"</span> </quote>

<h5>Silvia placed 10 RFPs during the Forum.  </h5>

<p>Silvia Osterauer, Ax Travel Management GmbH, Austria  </p><br/><br/></div>

<br></br>

                  

<h3>Partner Zone   </h3>
                    <br />
                    <p>Before we go, we’d like to give one last thanks to the partners that made this event possible. Through their support and intrinsic knowledge of Ibiza, we were able to create an unforgettable experience for our guests.  
</p> 

<div className="site-half partnerSection" style={{textAlign:'center'}}>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                

                <h3 className="site-section-heading font-secondary">
                    host partners
                  </h3>

                  <Carousel images={images} links={links} headings={headings} autoPlay />
                  
                </div>
              </div>
            </div>
          </div>

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

export default IbizaBlog
