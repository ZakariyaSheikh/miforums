import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/istanbulrundown/banner.png";
import Hilton from "../../assets/images/events/partner_logos/Hilton Istanbul Bomonti Hotel Conference Center.jpg";
import Airlines from "../../assets/images/events/partner_logos/Turkish Airlines.jpg";
import Raffles from "../../assets/images/events/partner_logos/Raffles.jpg";
import Spectrum from "../../assets/images/events/partner_logos/Spectrum Event Technologies - LOGO.jpg"
import CVKHotels from "../../assets/images/events/partner_logos/cvkhotels.png"
import Meptur from "../../assets/images/events/partner_logos/meptur.png"
import Concept from "../../assets/images/events/partner_logos/concept.png"
import MITogether from "../../assets/images/events/partner_logos/MITogether.jpg"
import GoTurkiye from "../../assets/images/events/partner_logos/GoTurkiye_red.jpg"
import ODSlogo from "../../assets/images/events/partner_logos/ODSlogo.jpg"
import Tekser from "../../assets/images/events/partner_logos/Tekser_Logo.jpg"
import Binbirdirek from "../../assets/images/events/partner_logos/Binbirdirek_Sarnici.jpg"
import Divan from "../../assets/images/events/partner_logos/Divan.png"
import SiteLogo from "../../assets/images/events/partner_logos/site_logo.png"
import Izzet from "../../assets/images/events/partner_logos/izzet.png"
import Elif from "../../assets/images/events/partner_logos/elifceorganizasyon.png"
import ATYEvents from "../../assets/images/events/partner_logos/ATY_Events.jpg"
import Carousel from "../../components/elements/Carousel"
import Graphic1 from "../../assets/images/blog/istanbulrundown/graphic1.png"
import Graphic2 from "../../assets/images/blog/istanbulrundown/graphic2.png"
import Graphic3 from "../../assets/images/blog/istanbulrundown/graphic3.png"
import Picture1 from "../../assets/images/blog/istanbulrundown/Image1.jpg"
import Picture2 from "../../assets/images/blog/istanbulrundown/Image2.jpg"
import Picture3 from "../../assets/images/blog/istanbulrundown/Image3.jpg"
import Picture4 from "../../assets/images/blog/istanbulrundown/Image4.jpg"
import Picture5 from "../../assets/images/blog/istanbulrundown/Image5.jpg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const ErinTierney = () => {
  const { isShowing, toggle } = useModal();

  const images = [
    [
      Hilton,
      Tekser,
      ODSlogo
    ],
    [
      Binbirdirek, Concept, CVKHotels, Divan, Meptur, Raffles
    ],
    [
      GoTurkiye, Spectrum, Airlines, Izzet, Elif, ATYEvents
    ],
  ];
 
  const links = [
    ['https://www.hilton.com/en/hotels/istbhhi-hilton-istanbul-bomonti-hotel-and-conference-center', 'https://www.tekser.com/', 'https://www.ods.com.tr/'],
    ['https://www.binbirdirek.com.tr/', 'https://conceptteam.org/', 'https://www.cvkhotelsandresorts.com/park-bosphorus-hotel-istanbul', 'https://www.divan.com.tr/toplanti-davet/divan-kurucesme', 'https://www.meptur.com.tr/', 'https://www.rafflesistanbul.com/'],
    ['https://goturkiye.com/','https://www.spectrum.web.tr/','https://www.turkishairlines.com/', 'http://www.izzetyakar.com/', 'https://elifceorganizasyon.com/', 'http://www.aty.com.tr/'],
  ];
  const headings = ['gold', 'silver', 'bronze'];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Europe Spring, Istanbul 2023: the rundown | m&i</title>
        <meta
          name="description"
          content="m&i Europe Spring, Istanbul 2023: the rundown "
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
                <h1 className="heading">m&i Europe Spring, Istanbul 2023:  <br/><span className="coral-underlined"> the rundown   {" "}
                   </span></h1>
                  <p className="blog-date">Published on May 18, 2023</p><br/><br/>
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

                    <p>Back in April, we kickstarted our 2023 calendar with 3 amazing days in Türkiye's business capital, Istanbul. UK and European buyers and global suppliers came together to meet, connect and explore everything the city has to offer the MICE industry. And was it a success? Judging by the fantastic response we’ve received, that would be a resounding yes! 
</p>
<br/><br/>
                    <img src={Graphic1} alt={" "} ></img><br/><br/>

                    <h3>So, what went down in Istanbul?  </h3>
                    <br />
                  
                    <p>We started the year with the largest of our events, our Flagship Forum. If you didn’t know, our Flagship’s larger capacity allows for a greater variety of meetings – it's why they’re such a cornerstone in our buyers' calendars. Delegates enjoyed a jam-packed schedule including 40 AI-matched meetings, destination activities, site visits of local neighbourhoods and top properties, and our signature m&i After Dark evenings. <br/><br/>

Of course, we couldn’t run our events without brilliant destinations and it’s fair to say Istanbul more than stepped up to the mark.    </p>  
<br></br>

                    <img src={Picture1} alt={" "} ></img><br/><br/>
                

                    <div className="pullquote"> <quote><span>"</span>This was one of the best events I have been to. Thank you very much to m&i for this fantastic Forum – really great!<span>"</span> </quote>

                    <h5>Tülay placed 8 RFPs during the Forum.  </h5>

                    <p>Tülay Tunaboylu, OVB Holding AG, Germany  </p><br/><br/></div>

                    <p>Our arrivals day was marked with an opening night at the elegant CVK Bosphorus Hotel where guests got dressed up to enjoy an evening of jazz music and delicious food. Following a successful first evening, guests took to the meeting room for our first meeting session. Then it was on to the riverfront venue, Divan Kuruçeşme, for Connect at m&i Bazaar. Guests enjoyed a themed afternoon full of henna, fortune telling and market stalls as well as a Bosphorus cruise. They also had the opportunity to raise money in aid of the Turkey-Syria Earthquake appeal, make children’s toys and buy products from producers based in the earthquake zone.    </p>  



<br/><br/>
<img src={Picture2} alt={" "} ></img><br/><br/>
                    <div className="pullquote"> <quote><span>"</span>Congratulations to the wonderful m&i team on another successful Forum in Istanbul!<span>"</span> </quote>

                    <h5>Olivier received 10 RFPs during the Forum.   </h5>

                    <p>Olivier Labat, Wyndham Hotels & Resorts, France  </p><br/><br/></div>

                    <p>Night two was a high-energy evening combining new and old at the stunning Raffles Istanbul. Guests enjoyed trumpet players, hanging dancers and traditional Poi dancers over a sit-down meal and drinks.  <br/><br/>

The highlight of day three was our afternoon of destination tours. After 1-2-1 meetings, guests were taken on one of our seven activities: Grand Bazaar tour, Discover Asia tour, Turkish Islamic Arts Museum & Hippodrome tour, Archaeology Museum & Hippodrome tour, Rüstem Pasha Mosque & Spice Market tour, Istiklal street tour and Leisure time at the Grand Bazaar. Guests got up close and personal with the city and everything it has to offer culturally.    </p>  
<br></br>


<img src={Picture3} alt={" "} ></img><br/><br/>

<div className="pullquote"> <quote><span>"</span>I would like to thank the entire team, you're all so good at what you do, so motivated, happy and super kind! I had so much fun and met so many interesting people, and thanks to you I met someone from the same company as me from a different country. This was such a great opportunity, so thank you for bringing us all together, and selecting very professional suppliers. Can't wait for the next one!<span>"</span> </quote>

<h5>Azina placed 3 RFPs during the Forum.   </h5>

<p>Azina Azizkhodjaeva, American Express GBT </p><br/><br/></div>


                

                    <p>Next up: our farewell evening at Binbirdirek Sarnıcı, an ancient underground cistern. Guests experienced modern twists on traditional entertainment from whirling dervishes and local drummers to light shows and a DJ that lasted long into the night.    </p>  
<br></br>


<img src={Picture4} alt={" "} ></img><br/><br/>
                  

                    <h3>What did our delegates think of the Forum?</h3>
                    <br />
                  
                    <p>The excitement for the first Forum of the year was undeniable. The atmosphere was fantastic throughout, from the buzz of business taking place in the meeting room to the friendships made on the dancefloor. And when our satisfaction survey data came through, it confirmed our thoughts exactly: m&i Europe Spring, Istanbul 2023 was one of our best Forums yet.   </p>  

<br></br>


                  <img src={Graphic2} alt={" "} ></img><br/><br/>

                  <div className="pullquote"> <quote><span>"</span>The m&i team took good care of me and I felt comfortable. This allowed me to fully concentrate on my meetings in addition to all the great excursions and gala events. I've discovered more new hotels and locations with the potential to negotiate good prices. I've also formed many new friendships.<span>"</span> </quote>

                  <h5>Claas placed 2 RFPs during the Forum.  </h5>

                  <p>Claas Rosenhagen, KPR Consult GmbH, Germany  </p><br/><br/></div>


                   



                    <img src={Graphic3} alt={" "} ></img><br/><br/>

                    <div className="pullquote"> <quote><span>"</span>Overall, it was an amazing experience in an amazing city and with amazing people. Congratulations to the m&i team – all of the team were exceptional!!!<span>"</span> </quote>

                    <h5>Guilherme received 3 RFPs during the Forum.  </h5>

                    <p>Guilherme Brito de Matos, Sofitel Legend The Grand Amsterdam, Netherlands </p><br/><br/></div>


                

             

<h3>Partner Zone   </h3>
                    <br />
                    <p>And we couldn’t end our round-up without mentioning the amazing partners that contributed to the success of this Forum. Without their support and insight, we couldn’t have showcased Istanbul to delegates at such a high standard – so thank you, partners!    
</p> 

<div className="site-half partnerSection" style={{textAlign:'center'}}>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                

                  <Carousel images={images} links={links} headings={headings} autoPlay />

                  <h3 className="site-section-heading font-secondary">
                    industry partner
                  </h3>
                  <a href="https://siteglobal.com/
">
                    <img
                      alt={" "}
                      src={SiteLogo}
                      style={{ width: "150px" }}
                      className={"partnerLogo"}
                    />
                  </a>
                  
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

export default ErinTierney
