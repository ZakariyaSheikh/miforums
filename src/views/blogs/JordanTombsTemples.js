import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/jordantombs/cover.jpeg";
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
import Picture1 from "../../assets/images/blog/jordantombs/Image1.jpeg"
import Picture2 from "../../assets/images/blog/jordantombs/Image2.jpeg"
import Picture3 from "../../assets/images/blog/jordantombs/Image3.jpg"
import Picture4 from "../../assets/images/blog/jordantombs/Image4.jpeg"
import Picture5 from "../../assets/images/blog/jordantombs/Image5.jpeg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const JordanTombsTemples = () => {
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
        <title>Jordan: tombs, temples and terrific MICE facilities | m&i</title>
        <meta
          name="description"
          content="Jordan: tombs, temples and terrific MICE facilities"
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
                <h1 className="heading">Jordan: tombs, temples and terrific<br/><span className="coral-underlined"> MICE facilities   {" "}
                   </span></h1>
                  <p className="blog-date">Published on June 5, 2023</p><br/><br/>
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

                    <p>Most people will know Jordan as the enchanting country at the heart of the Middle East, full of pink sandstone cliffs, the Dead Sea and a rich cultural heritage. But in recent years the destination has become increasingly popular with buyers looking to blend business with leisure and a little something special. Keep reading to find out why Jordan is doing MICE better and why we’re so excited for <a href="https://www.mi-forums.com/mi-vip-connect-europe-2023">m&i VIP Connect, Jordan 2023</a> on 19-22 November.  
</p>
<br/><br/>
                    <img src={Picture1} alt={" "} ></img><br/><br/>

                    <h3>1. Cultural and historical wonders   </h3>
                    <br />
                  
                    <p>Jordan is home to some of the world's most iconic historical and cultural sites. The ancient city of Petra, a UNESCO World Heritage Site, is an awe-inspiring rock-cut building surrounded by hidden tunnels and gorges built in the 3rd century. The Roman ruins at Jerash, the magnificent desert landscapes of Wadi Rum, and biblical sites like Mount Nebo and Madaba offer unique experiences that promise to provide an unrivalled programme for corporate groups.  </p>  
<br></br>

                    <img src={Picture2} alt={" "} ></img><br/><br/>

                    <h3>2. Modern infrastructure   </h3>
                    <br />
                  
                    <p>Jordan boasts state-of-the-art infrastructure, from world-class hotels and convention centres to exhibition spaces. The capital city Amman and its surrounding areas including the dead sea, are well-equipped with a range of luxurious hotels, including our host hotels Kempinski Hotel Amman and Kempinski Hotel Ishtar Dead Sea, that cater to a range of MICE requirements. In addition to this, the Amman International Convention and Exhibition Center, one of the largest in the region, offers excellent facilities for conferences, exhibitions, and trade shows. Additionally, the King Hussein Bin Talal Convention Centre, situated by the Dead Sea, provides a breathtaking setting for high-profile events.   </p>  
<br></br>

                    <img src={Picture3} alt={" "} ></img><br/><br/>

                    <h3>3. Impressive accessibility    </h3>
                    <br />
                  
                    <p>Jordan enjoys excellent connectivity, making it easily accessible for international attendees. The Queen Alia International Airport in Amman is a major regional hub, with direct flights to and from numerous destinations around the world. The country's efficient transportation network, including well-maintained roads and highways, ensures convenient travel within Jordan.    </p>  
<br></br>

<h3>4. Diverse landscapes    </h3>
                    <br />
                  
                    <p>From the stunning red sand dunes of Wadi Rum to the tranquil waters of the Dead Sea, Jordan offers diverse landscapes that guarantee to captivate visitors. These natural wonders provide an excellent backdrop for outdoor team-building activities and incentive programmes. Whether it's exploring the ancient city of Petra or embarking on a desert safari, Jordan offers endless opportunities to combine business with leisure.   </p>  
<br></br>

                    <img src={Picture4} alt={" "} ></img><br/><br/>

                    <h3>5. Warm hospitality </h3>
                    <br />
                  
                    <p>Jordanians are renowned for their genuine hospitality and warm welcome. Visitors to Jordan often remark on the friendliness and generosity of the locals, making every guest feel valued and appreciated. The country's dedication to excellent service ensures that MICE events in Jordan are met with professionalism and a high level of customer care.    </p>  
<br></br>

<h3>6. Safety and stability </h3>
                    <br />
                  
                    <p>Jordan is widely recognized as a safe and stable country in the region. Its commitment to security and political stability provides peace of mind to event organisers and attendees. The Jordanian government's efforts to promote tourism and business further contribute to the safety and comfort of MICE travellers.  </p>  
<br></br>

<h3>7. Unique experiences </h3>
                    <br />
                  
                    <p>Apart from the traditional MICE activities, Jordan offers a wide range of unique experiences that can be incorporated into any event itinerary. From cooking classes to traditional music performances, camel rides to hot air balloon adventures, attendees can immerse themselves in Jordanian culture and create unforgettable memories.   </p>  
<br></br>


                    <img src={Picture5} alt={" "} ></img><br/><br/>


                    <p>Have we sold Jordan to you yet? Join a select group of senior-level industry leaders at <a href="https://www.mi-forums.com/mi-vip-connect-europe-2023">m&i VIP Connect, Jordan 2023</a> for 4 days of immersive networking across Amman and the Dead Sea. </p>
                    
                    <br></br><br/>
                    <a href='/signup'>
                                                    <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                                    register your interest 
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

export default JordanTombsTemples
