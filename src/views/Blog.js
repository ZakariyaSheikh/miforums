import React from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';
import RendezThumbnail from '../assets/images/blog/metaverse/thumbnail.png'
import LuxeThumbnail from '../assets/images/blog/luxe/hero.png'
import OurPlanetThumbnail from '../assets/images/blog/our-planet/thumbnail.png'
import SevilleThumbnail from '../assets/images/blog/seville/thumbnail.png'
import RendezPartnersThumbnail from '../assets/images/blog/rendezmi/banner.png'
import ViennaHouseThumbnail from '../assets/images/blog/viennahouse/banner.png'
import BudapestThumbnail from '../assets/images/blog/budapest/banner.png'
import BerlinThumbnail from '../assets/images/blog/berlin/banner.png'
import ElPasoThumbnail from '../assets/images/blog/elpaso/heroimage_nightlife.png'
import VisitOsloThumbnail from '../assets/images/blog/visitoslo/heroimage_visitoslo-min.png'
import TheHagueThumbnail from '../assets/images/blog/thehague/the-pier-with-logo.png'
import Featured1 from '../assets/images/blog/featured/mi_blog_feature_rendezverse_1.png'
import IstanbulThumbnail from '../assets/images/blog/istanbul/istanbul_bloghero-min.png'
import TheHagueHealthcareThumbnail from '../assets/images/blog/thehaguehealthcare/imagecover.jpg'
import JordanThumbnail from '../assets/images/blog/jordan/Header.jpg'
import IbizaThumbnail from '../assets/images/blog/visitibiza/ibiza_cover.png'
import IncentiveThumbnail from '../assets/images/blog/incentives/cover_image.jpg'
import LimassolThumbnail from '../assets/images/blog/limassol/cover_image.png';
import ErinTierneyThumbnail from '../assets/images/blog/erin/Erin.png';
import IstanbulRundownThumbnail from '../assets/images/blog/istanbulrundown/banner.png';
import IbizaBlogThumbnail from '../assets/images/blog/ibiza/banner.jpg'
import JordanTombs from '../assets/images/blog/jordantombs/jordantombs.png'
import LakeComoThumbnail from '../assets/images/blog/lakecomo/lake_como.jpeg'
import ElPasoQAThumbnail from '../assets/images/blog/elpasoqa/cover.png'
import MichaelCohenThumbnail from "../assets/images/blog/michaelcohen/thumbnail.png"
import GeorgiaThumbnail from "../assets/images/blog/Georgia/coverimage.jpeg"
import Cruise from "../assets/images/blog/oslorecap/cruise.jpg"
import HagueCover from "../assets/images/blog/haguedebrief/cover.jpg"
import LuxeCover from "../assets/images/blog/LuxeTouch/Cover1.png"
import PortoCover from "../assets/images/blog/LuxePorto/porto_cover.jpg"
import WrappedCover from "../assets/images/blog/Wrapped23/blog_hero.png"
import RichardCover from "../assets/images/blog/RichardB/COVER.png"
import WebinarCover from "../assets/images/blog/webinar/cover.png"
import TheFutureCover from "../assets/images/blog/thefutureisgreen/cover.png"


const Blog = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>blog | m&i</title>
        <meta
          name="description"
          content="Keep up to date with current trends on the m&i blog."
        />


      </Helmet>
      <div className="site-wrap">
        <div
          className="blog-hero-slider"
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-7 ml-rg-auto py-5">
                <h2 className="featured">featured</h2>
                <a target="_blank" href="/richard-barnes-gives-the-lowdown-on-mi " rel="noopener noreferrer">
                <h2 className="blog-hero-heading">
                m&i Fest: Richard Barnes gives the lowdown on our new event
                  </h2>
                  </a>
                {/* <a href="/metaverse-coming-meetings-industry-you-ready-m-i-forums" target="_blank" rel="noopener noreferrer"><span class=" btn btn-primary " style={{ marginTop: '2%', marginLeft: '2%' }}>view now</span></a> */}
              </div>
              <div style={{ backgroundImage: `url(${RichardCover})` }} className="featured-article-image" ></div>
            </div>

          </div>

        </div>

{/* <div className="featured-articles">
        <div className="blog-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

                           <div
                className="col-lg-4 ml-rg-auto py-5 relatedArticle"
              >
                <a target="_blank" href="/impact-events-our-planet-m-i-forums">

                  <div className="blog-thumbnail-container">

                  <img
                alt={" "}
                src={OurPlanetThumbnail}
                className={"blog-thumbnails"}
              ></img></div>
                  <div className="blog-thumbnail-caption">
                <h4 className="blog-heading">
                The impact of events on our planet
                </h4>
                <br></br>
                                            </div>
                                            </a>
              </div>





              <div
                className="col-lg-4 ml-rg-auto py-5 relatedArticle"
              >
                <a target="_blank" href="/back-so-soon-why-were-hosting-our-second-event-seville-5-years">

                  <div className="blog-thumbnail-container">

                  <img
                alt={" "}
                src={SevilleThumbnail}
                className={"blog-thumbnails"}
              ></img></div>
                  <div className="blog-thumbnail-caption">
                <h4 className="blog-heading">
                Back so soon? Why we're hosting our second event in Seville in 5 years.
                </h4>
                <br></br>
                                            </div>
                                            </a>
              </div>

              <div
                className="col-lg-4 ml-rg-auto py-5 relatedArticle"
              >


<a target="_blank" href="/perfect-city-healthcare-events-m-i-forums">

        <div className="blog-thumbnail-container">

                  <img
                alt={" "}
                src={BerlinThumbnail}
                  className={"blog-thumbnails"}

                    ></img></div>
                <div className="blog-thumbnail-caption">
                <h4 className="blog-heading">
                The perfect city for healthcare events
                </h4>
                <br></br>
                                            </div>
                                            </a>
              </div>




            </div>
          </div>
          </div>
          </div> */}


        <div className="all-articles">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
              >
                <h2 > all articles </h2>
                <br />

                <hr/>
                <a target="_blank" href="/the-future-is-green">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={TheFutureCover}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>The future is green: Anna Peters from Evolve Events on how sustainability is reshaping MICE </h2>
                    <p>The events industry is embracing a monumental shift towards sustainability and eco-conscious practices as 2024 ushers in an undeniable call to climate action. According to Anna Peters, Creative Director of Evolve Events and a CN Awards Event Influencer of the Year, 
                  </p>
                    </div>
                  </div>
                  </a>


                <hr/>
                <a target="_blank" href="/the-key-issues-affecting-miceprofessionals-today">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={WebinarCover}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>The key issues affecting MICE professionals today </h2>
                    <p>Following our highly successful MICE webinar, “Navigating the MICE Landscape: Buyers, Trends, Success”, we’ve put together a summary of the common industry challenges that our webinar attendees are facing going into 2024, how their jobs are changing in response to these challenges and the potential solutions going forward.
                  </p>
                    </div>
                  </div>
                  </a>


                <hr/>
                <a target="_blank" href="/richard-barnes-gives-the-lowdown-on-mi">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={RichardCover}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i Fest: Richard Barnes gives the lowdown on m&i's new event in Marrakesh  </h2>
                    <p>With the new year underway and March in our sights, we felt a chat with our CEO, Richard Barnes, about m&i Fest Marrakesh 24 would be just the antidote for the January blues. If you didn’t know, Fest is our biggest event yet, combining the choice of an exhibition with the personalisation of our smaller Forums. Behind the scenes, we’ve been putting together a programme that promises to enhance your opportunities to connect, show you the very best of the beautiful Marrakesh and its MICE capabilities, and create meaningful moments.  
                  </p>
                    </div>
                  </div>
                  </a>

                <hr/>
                <a target="_blank" href="/mi-wrapped-2023">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={WrappedCover}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i wrapped 2023: A year in review </h2>
                    <p>It’s that time of the year again – the festive period is approaching, the nights are drawing in and here at m&i we’re reflecting on the unbelievable year we’ve had. From the launch of a brand-new Forum and our first-ever live stream event reveal to some of our best attendee feedback and highest event ratings. 
                  </p>
                    </div>
                  </div>
                  </a>

               

                <hr/>
                <a target="_blank" href="/mi-luxe-porto-montenegro-recap">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={PortoCover}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i Luxe, Porto Montenegro 2023: "One of the best Forums I have ever attended" </h2>
                    <p>In October we jetted a select group of high-end MICE professionals off to Montenegro’s most glamorous port and if we’re being honest, we’ve been thinking about it ever since. Our inaugural Luxe Forum went better than we could have ever imagined, with positive feedback streaming in during and after the event.
                  </p>
                    </div>
                  </div>
                  </a>

                <hr/>

                <a target="_blank" href="/the-luxe-touch">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={LuxeCover}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>The Luxe touch: get to know the guestlist </h2>
                    <p> As m&i Luxe, Porto Montenegro 2023 inches ever closer, we felt it was about time you got to know one of our Luxe buyers, and our host hotel, a little better. If you didn’t know, m&i Luxe, is our new event designed specifically for high-end incentives and MICE VIP events, and on the 11-14 October, we’ll be taking our new venture to Montenegro’s most luxurious port. Discover more about our event here or keep reading to get a taste of the Luxe guestlist. 
                  </p>
                    </div>
                  </div>
                  </a>

                <hr/>
                <a target="_blank" href="/what-happened-in-oslo">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={Cruise}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i Europe summer, Oslo 2023: what happened in Oslo</h2>
                    <p> Back in June, we jetted off to Norway’s capital for 3 days of signature m&i connection, Nordic exploration and memory-making. We had a great time and overwhelmingly our feedback proved that our attendees did too. Want to know what we got up to at m&i Europe Summer, Oslo 2023? Keep reading to find out.
                  </p>
                    </div>
                  </div>
                  </a>

                <hr/>
                <a target="_blank" href="/discover-georgia-powered-by-mi-forums">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={GeorgiaThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>Discover Georgia Powered by m&i: the recap</h2>
                    <p>At the start of the month m&i embarked on a trip to Georgia for Discover Georgia Powered by m&i in partnership with Georgia National Tourism Administration. A little different from our regular Forums, at this event we flew out a group of European buyers to the destination to show them the best of Georgia’s capital, Tbilisi. Curious as to how it all went? Keep reading to find out what our delegates got up to. 
                    
                  </p>
                    </div>
                  </div>
                  </a>

                <hr/>
                <a target="_blank" href="/michael-cohen-on-our-gaintalks-partnership">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={MichaelCohenThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>Michael Cohen on our GAINTalks partnership, m&i Americas and how AI is changing MICE </h2>
                    <p>Here at m&i we’re constantly trying to enrich our attendees’ experience. Whether it’s improving your meetings or the quality of food and beverage at events, we aim to respond to your feedback effectively while finding innovative ways of boosting your Forum.  
                  </p>
                    </div>
                  </div>
                  </a>



                <hr/>
                <a target="_blank" href="/find-out-what-our-event-managers-loved-in-elpaso">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={ElPasoQAThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>Margaritas, guac and the Franklin Mountains: find out what our event managers loved in El Paso </h2>
                    <p>Upon arriving back to the UK our event managers Marta Bomprezzi and Loïc Connier couldn't wait to tell us about all the amazing things they got to experience on their site visit to El Paso. Of course, we couldn’t wait to pick their brains about what they got up to and what our m&i-ers can look forward to at <a target="_blank" href="https://www.mi-forums.com/mi-americas-2023">m&i Americas, El Paso 2023.</a>
                  </p>
                    </div>
                  </div>
                  </a>




                <hr/>
                <a target="_blank" href="/6-unique-lake-como-venues-worth-watching">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={LakeComoThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>6 unique Lake Como venues worth watching</h2>
                    <p>Nestled in the breathtaking Italian Alps is a destination famed for its unparalleled natural beauty...and rather unique MICE properties. Yes, we’re talking about Lake Como, the idyllic location frequented by tourists and business tourists alike.<br/><br/>Whether you're planning an incentive trip, a team-building event, or a conference, Lake Como presents an impressive fusion of modern facilities and timeless elegance. In this article, we’ll unveil some of the most exciting MICE venues that Lake Como has to offer ahead of <a href="https://www.mi-forums.com/mi-europe-autumn-2023">m&i Europe Autumn, Lake Como 2023.</a>
                  </p>
                    </div>
                  </div>
                  </a>

                  <hr/>
                <a target="_blank" href="/the-hague-debrief">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={HagueCover}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i Healthcare, The Hague 2023: the debrief </h2>
                    <p>Our healthcare events are quite literally one of a kind, meaning our attendees get a completely unique and unparalleled experience when attending. At this year’s Forum, we wanted to bring in some of our signature m&i magic – networking activities and m&i After Dark experiences – to our standard healthcare format. So, as you can imagine m&i Healthcare, The Hague 2023 was our best yet.
                  </p>
                    </div>
                  </div>
                  </a>


                <hr/>
                <a target="_blank" href="/jordan-tombs-temples-and-terrific-mice-facilities">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={JordanTombs}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>Jordan: tombs, temples and terrific MICE facilities</h2>
                    <p>Most people will know Jordan as the enchanting country at the heart of the Middle East, full of pink sandstone cliffs, the Dead Sea and a rich cultural heritage. But in recent years the destination has become increasingly popular with buyers looking to blend business with leisure and a little something special. Keep reading to find out why Jordan is doing MICE better and why we’re so excited for <a href="https://www.mi-forums.com/mi-vip-connect-europe-2023">m&i VIP Connect, Jordan 2023</a> on 19-22 November.  </p>
                    </div>
                  </div>
                  </a>

                <hr/>
                <a target="_blank" href="/mi-private-ibiza-2023">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={IbizaBlogThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i Private, Ibiza 2023: how it went down</h2>
                    <p>In April we whisked a select group of buyers and suppliers off to the Balearic coasts of Ibiza for 3 days of immersive networking in the sunshine. Together guests connected over good food, incredible evenings and even better meetings at our annual Private Forum.  </p>
                    </div>
                  </div>
                  </a>



                <hr/>
                <a target="_blank" href="/istanbul-2023-the-rundown">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={IstanbulRundownThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i Europe Spring, Istanbul 2023: the rundown </h2>
                    <p>Back in April, we kickstarted our 2023 calendar with 3 amazing days in Türkiye's business capital, Istanbul. UK and European buyers and global suppliers came together to meet, connect and explore everything the city has to offer the MICE industry. And was it a success? Judging by the fantastic response we’ve received, that would be a resounding yes! </p>
                    </div>
                  </div>
                  </a>



                <hr/>
                <a target="_blank" href="/meet-our-director-of-sales-for-north-america">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={ErinTierneyThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>Meet our Director of Sales, the Americas, Erin Tierney</h2>
                    <p> With two Forums taking place in the Americas this year, we felt it was only right to introduce (or reintroduce) our brilliant Director of Sales for North America, Erin Tierney. We picked her brains on everything from her extensive career in the industry to her favourite moments across her 11 years at m&i and her work with SITE (Society for Incentive Travel Excellence).</p>
                    </div>
                  </div>
                  </a>

                <hr/>

                <a target="_blank" href="/why-limassol-should-be-the-MICE-destination">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={LimassolThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>Why Limassol should be the MICE destination on your radar</h2>
                    <p>  The answer to all your MICE needs may well be sat on the southern coast of Cyprus. That’s right, Limassol, Cyprus, is the up-and-coming city combining rich Cypriot culture with impressive MICE infrastructure. </p>
                    </div>
                  </div>
                  </a>

                <hr/>
                <a target="_blank" href="/the-incentive-trip-is-having-a-comeback">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={IncentiveThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>The incentive trip is having a comeback, here’s everything you need to know </h2>
                    <p> It’s fair to say that the meetings and events industry has been through a lot in recent years. The arrival of COVID-19 shut down international travel and as a result, incentive travel suffered massively.  </p>
                    </div>
                  </div>
                  </a>


                <hr/>
                <a target="_blank" href="/discover-the-real-ibiza">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={IbizaThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>Discover the real Ibiza: beaches, markets and more</h2>
                    <p>Known as a party island to some and a unique MICE venue to others, Ibiza has many different faces but whichever one you’re after, the Balearic Island never fails to deliver. Away from the busy nightclubs in Ibiza Town and San Antonio, MICE professionals can delight in sunset hikes, take trips to the Old Town and enjoy its meeting room offering. To get the lowdown on the real Ibiza ahead of  </p>
                    </div>
                  </div>
                  </a>


                <hr/>
                <a target="_blank" href="/vip-what-to-expect">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={JordanThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i VIP 2024: what to expect</h2>
                    <p>Unsure about whether you qualify for our VIP Forums in Amman and Costa Mujeres? Maybe you’re curious about the VIP concept, or you’d like to know what we’ve got in store for you at both Forums. Whatever you’re after, keep reading for a sneak peek into the world of a MICE VIP.

</p>
                    </div>
                  </div>
                  </a>


                <hr/>
                <a target="_blank" href="/the-hague-what-to-expect">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={TheHagueHealthcareThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i Healthcare, The Hague 2023: what to expect</h2>
                    <p>The only event of its kind, m&i Healthcare provides healthcare event professionals with two days of immersive networking (quite literally) like no other. We spoke to Andrew Winterburn, Director of 3sixty Event Consulting and curator of the healthcare educational programme, about what guests can expect from the 2023 edition.</p>
                    </div>
                  </div>
                  </a>


                <hr/>
                <a target="_blank" href="/whats-so-good-about-istanbul">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={IstanbulThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>What’s so good about Istanbul? </h2>
                    <p>Istanbul, our host destination for m&i Europe Spring Istanbul, 2023. For some, it’s simply a major city in Türkiye, far from the beach resorts and clubs of popular holiday destinations like Belek or Bodrum. But for others, Istanbul is a treasure trove of culture, architecture, art, and business</p>
                    </div>
                  </div>
                  </a>



                <hr/>
                <a target="_blank" href="/the-hague-from-peace-to-mice">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={TheHagueThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>The Hague: from peace to MICE </h2>
                    <p>Our host destination for m&i Healthcare 2023 is not one to be sniffed at. Dubbed the International City of Peace and Justice and home to 64 MICE-ready venues, it’s no wonder buyers are looking to The Hague, Netherlands. </p>
                    </div>
                  </div>
                  </a>


                <hr/>
                <a target="_blank" href="/green-oslo">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={VisitOsloThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>Green Oslo: how the world’s most sustainable city is changing MICE</h2>
                    <p>Oslo, host to m&i Europe Summer 2023, prides itself on its ambitious climate strategies, and for good reason. It’s no secret the city has more than kept its eco promises, being voted the number one most sustainable city in 2022 according to the Arcadis Sustainable Cities Index. </p>
                    </div>
                  </div>
                  </a>


                <hr/>
                <a target="_blank" href="/8-reasons-you-should-visit-el-paso">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={ElPasoThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>El Paso, Texas: the unlikely new destination for your meetings and events</h2>
                    <p>In recent years El Paso has been infused with a new lease of life; a myriad of new hotels, a bustling downtown and a MICE-ready infrastructure have made it a business hotspot. </p>
                    </div>
                  </div>
                  </a>


<hr/>
<a target="_blank" href="/the-story-behind-the-concept">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={LuxeThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i Luxe: the story behind the concept</h2>
                    <p>With the year coming to a close, it’s only right we look forward to the exciting things we’ve got planned for next year, namely our new venture into the world of high-end incentive travel.</p>
                    </div>
                  </div>
                  </a>
                <hr />
                <a target="_blank" href="/metaverse-coming-meetings-industry-you-ready-m-i-forums">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={RendezThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>The metaverse is coming to the meetings industry - are you ready?</h2>
                    <p>We’ve all heard of the metaverse - it’s certainly been creating quite a buzz in the last year. But as members of the meetings & events industry, perhaps the word we should all be paying more attention to is ‘RendezVerse’.</p>
                    </div>
                  </div>
                  </a>

                 <hr />
<a target="_blank" href="/impact-events-our-planet-m-i-forums">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={OurPlanetThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>The impact of events on our planet</h2>
                    <p>In the build-up to m&i VIP Connect 2022 in Madeira, we asked Vianei Hermes, CEO and Co-Founder of Climate First, to explain the environmental impacts of the events industry and how we can make positive, actionable changes towards a more sustainable future…</p>
                    </div>
                  </div>
                  </a>

                 <hr />
<a target="_blank" href="/back-so-soon-why-were-hosting-our-second-event-seville-5-years">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={SevilleThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>Back so soon? Why we're hosting our second event in Seville in 5 years.</h2>
                    <p>This year, we’re hosting our second Forum in Seville within just 5 years! To help you understand what makes this unique Spanish city so perfect for hosting events, we asked Manuel Macias, Director of Seville Congress & Convention Bureau, to tell us everything a planner might want to know, from how the city’s changed since our last event in 2017, to where the city is heading in the next 20 years (plus lots more in between). </p>
                    </div>
                  </div>
                </a>

                <hr />
<a target="_blank" href="/perfect-city-healthcare-events-m-i-forums">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={BerlinThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2> The perfect city for healthcare events</h2>
                    <p>Ahead of m&i Healthcare 2022 in Berlin, we caught up with Visit Berlin to ask them why Germany’s capital city is the perfect destination for hosting healthcare events. </p>
                    </div>
                  </div>
                </a>

                <hr />
<a target="_blank" href="/mi-partners-rendezverse-bring-corporate-metaverse-hospitality">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={RendezPartnersThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2> m&i partners with RendezVerse to bring the corporate metaverse to the  hospitality industry</h2>
                    <p>We’re very excited to announce that we’re investing in the future of the events industry by partnering with RendezVerse on a project that will help shape the corporate metaverse. </p>
                    </div>
                  </div>
                </a>

                <hr />
<a target="_blank" href="/we-asked-vienna-house-andels-berlin-what-makes-them-perfect">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={ViennaHouseThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>We asked Vienna House Andel's Berlin about what makes them the perfect host for our upcoming healthcare event</h2>
                    <p>This year, we're taking a closer look at some of the incredible hosts and partners for our 2022 events. So, it only makes sense that we kick off with the host partner for our first event of the year, right? </p>
                    </div>
                  </div>
                </a>

                <hr />
<a target="_blank" href="/mi-returns-live-events-budapest-m-i-forums">
                <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-4 ml-rg-auto py-5 laptop"
                  >
                    <img
                alt={" "}
                src={BudapestThumbnail}
                className={"blog-thumbnails"}
              ></img>
                  </div>
                  <div
                className="col-lg-7 ml-rg-auto py-5 laptop blog-list-caption"
                  >
                    <h2>m&i returns to live events in Budapest!</h2>
                    <p>It’s safe to say this was not an easy ride - we had to put all our efforts into making m&i Private Europe 2021 in Budapest a safe, responsible, but still enjoyable event for all, which in the midst of a global pandemic is no easy feat, let us tell you! And after 18 months of umm-ing and ahh-ing about whether we would actually be able to bring people together in 2021, it felt truly incredible to welcome our resilient industry to beautiful Budapest. Our comeback event was officially happening. </p>
                    </div>
                  </div>
                  </a>



              </div>
            </div>
          </div>

        </div>
      </div>
      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default Blog
