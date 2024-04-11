import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import eightyeight from "../../assets/images/blog/oslorecap/88.png"
import Attendees from "../../assets/images/blog/oslorecap/attendees.png"
import Cruise from "../../assets/images/blog/oslorecap/cruise.jpg"
import Meetings from "../../assets/images/blog/oslorecap/meetings.jpg"
import Night1 from "../../assets/images/blog/oslorecap/night1.jpg"
import Operahouse from "../../assets/images/blog/oslorecap/operahouse.jpg"
import Sno from "../../assets/images/blog/oslorecap/sno.jpg"
import Carousel from "../../components/elements/Carousel"
import Clarion from "../../assets/images/events/partner_logos/Clarion_Hotel.png";
import Norway from "../../assets/images/events/partner_logos/Visit Norway.png";
import Oslo from "../../assets/images/events/partner_logos/visitoslo.png";
import Apriil from "../../assets/images/events/partner_logos/Apriil Event & Congress.png";
import Flytoget from "../../assets/images/events/partner_logos/Flytoget_logo.png";
import SNO from "../../assets/images/events/partner_logos/sno_logo_hvit_blaa_rgb.png";
import Thon from "../../assets/images/events/partner_logos/Thon_hotels.png";
import Furset from "../../assets/images/events/partner_logos/furset_gruppen.png";
import Opera from "../../assets/images/events/partner_logos/opera_house.jpg";
import Eik from "../../assets/images/events/partner_logos/eik_norg.png";
import Den from "../../assets/images/events/partner_logos/DNOB.jpg"
import WalletPass from "../../assets/images/events/partner_logos/Wallet_Pass.png";
import Needmusic from "../../assets/images/events/partner_logos/Needmusiclogo.jpg";
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

  const OsloRecap = () => {
    const { isShowing, toggle } = useModal();
  
    const images = [
      [
        Clarion,
        Norway,
        Oslo
      ],
      [
        Apriil, Flytoget, SNO, Thon, Furset,
      ],
      [
        Opera, Eik, WalletPass,
      ],
      [
        Needmusic
      ],
    ];
   
    const links = [
      ['https://www.nordicchoicehotels.no/hotell/norge/oslo/clarion-hotel-the-hub/', 'https://www.visitnorway.fr/', 'https://www.visitoslo.com/'],
      ['https://www.apriil-pco-dmc.no/', 'https://flytoget.no/en/', 'https://snooslo.no/', 'https://www.thonhotels.com/', 'https://www.fursetgruppen.no/',    'https://operaen.no/en/'], 
      ['https://operaen.no/en/'], 'https://www.eikservering.no/', 'https://www.rengroup.no/',
      ['https://www.needmusic.no/']
    ];
    const headings = ['gold', 'silver', 'silver', 'bronze'];
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Europe Summer, Oslo 2023: what happened in Oslo | m&i</title>
        <meta
          name="description"
          content="m&i Europe summer, Oslo 2023: what happened in Oslo"
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
              <div className="blog-banner" style={{ backgroundImage: `url(${Cruise})`, backgroundSize:"contain", marginLeft:"5%" }}> </div>
                <h1 className="heading">m&i Europe Summer, Oslo 2023:  <br/>{" "} <span className="coral-underlined">what happened in Oslo {" "}
                   </span></h1> 
      
                  <p className="blog-date">Published on July 31, 2023</p><br/><br/>
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

              <p>Back in June, we jetted off to Norway’s capital for 3 days of signature m&i connection, Nordic exploration and memory-making. We had a great time and overwhelmingly our feedback proved that our attendees did too. Want to know what we got up to at m&i Europe Summer, Oslo 2023? Keep reading to find out. </p>
  <br></br>

              <h3>What did we get up to?</h3>
  <br></br>

              <p>Our Flagship Forums are a reliable cornerstone in our attendees’ calendars. They offer a wider choice of meetings while also retaining a personalised experience, from our destination activities and our curated evenings to our bookable site visits and Rise & Shine sessions. If you’re new to m&i and you’re not sure where to begin, our Flagships are a good place to start. </p>

  <br></br>

              <img src={Attendees} alt={" "} ></img><br/><br/>

              <p>Right, let’s get into it! Because some of our buyers arrived early to Oslo, we thought we’d treat them to a private session at one of our upcoming networking activities including sauna boats, the Viking Planet or a morning at leisure using the Oslo Pass. And the treats didn’t stop there – we also invited them to choose a hosted dinner at one of four fantastic restaurants. Buyers could choose from Radisson, The Top, Amerikalinjen, Sommero and The Thief, giving them the opportunity to experience the venues and get to know their fellow buyers before the Forum started. </p>

  <br></br>

              <p>With our arrivals day came our delegates first set of their 40 pre-scheduled meetings at our meeting and accommodation venue, <a target="_blank" href="https://www.strawberryhotels.com/hotels/norway/oslo/clarion-hotel-the-hub/">Hotel Clarion the Hub</a>. Guests filed into the largest of the hotel’s event spaces measuring at approximately 900 sq. M with capacity for up to 1,150 people. After an afternoon of meetings, it was time to freshen up and make our way to our opening evening at Taket, a central rooftop venue on top of the luxury department store, Steen & Strøm. The night was all about relaxing in a low-key atmosphere with delicious street food dishes, a saxophonist and city views to kick-start that connection.  </p>

  <br></br>

              <img src={Night1} alt={" "} ></img><br/><br/>


             <div className="pullquote"> <quote><span>"</span>Attending m&i is a huge networking opportunity and at the same time a great opportunity to get familiar with a destination. On top of this, the ambience is great!<span>"</span> </quote>

             <h5>Lieve Daniëls, Imagine Travel </h5></div>

  <br></br>

            <img src={Meetings} alt={" "} ></img><br/><br/>

            <p>Next up: day two. Delegates jumped straight into their meetings intercepted with yet more opportunities to experience Oslo. Suppliers and buyers were able to choose between optional walking tours, alpine skiing, ice wall climbing and snowboarding before going into their second evening at one of the world’s largest ski halls, SNØ. The venue provided jackets for us to explore their cold zone while guests were wowed by a surprise ski show followed by some traditional Nordic cuisine. </p>

  <br></br>

          <img src={Sno} alt={" "} ></img><br/><br/>

  <br></br>

          <p>Our final full day saw delegates complete their final session of meetings and then head off on their chosen networking activities after lunch. Our networking activities are a great way for our buyers and suppliers to get to know a destination and each other – because connection isn’t restricted to the meeting room after all! Attendees picked from 9 activities from a fjords cruise and the boat museums tour to abseiling and a fjord clean (our CSR option). </p>

  <br></br>

          <div className="pullquote"> <quote><span>"</span>In addition to the success you can expect from this Forum, the team and forum are truly SUPERB! Everything is very well thought through, and you can tell each member of the m&i team love to see the attendees having the best time while also making this event the greatest success.<span>"</span> </quote>

          <h5>Alisja Ibenthal, Hilton Hotel Mainz / Frankfurt </h5></div>

  <br></br>

          <p>Then it was time for our farewell evening at the striking Oslo Opera House where we enjoyed an evening of sophistication from the entertainment – a live opera singer and brass pop band – to the delicious sit-down meal we tucked into. But the evening didn’t stop there! We then headed to the optional afterparty at Brød & Sirkus, just a 15-minute walk away. The venue is a vibrant, multilevel space featuring an optional open-air area with an edgy interior. </p>

  <br></br>

          <img src={Operahouse} alt={" "} ></img><br/><br/>

  <br></br>

          <p>And just like that, m&i Europe Summer, Oslo 2023 was over. We all had a case of the Forum blues after this one! It was a comprehensive guide to Norway’s sustainable, innovative and MICE-ready capital city and a successful 3 days of immersive networking. </p>

  <br></br>

          <img src={eightyeight} alt={" "} ></img><br/><br/>

  <br></br>

          <h3>Partner Zone</h3>
          <br></br>
          <p>And we couldn’t end our round-up without mentioning the amazing partners that contributed to this fantastic Forum. Without their support and insight, we couldn’t have showcased Oslo to delegates at such a high standard! </p>

          <div className="site-half partnerSection" style={{textAlign:'center'}}>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                
                  
                  <Carousel images={images} links={links} headings={headings} autoPlay />
                
                  

                  <br></br>
                  <br></br>

                  <p>Sound like something you’d be interested in? Take a look at our full calendar for our 2023 and 2024 events. </p>
                  
                </div>
              </div>
            </div>
          </div>

        <a href='/calendar'>
                                     <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                          view our calendar 
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

export default OsloRecap

