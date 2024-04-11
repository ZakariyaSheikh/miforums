import React from "react"
import Carousel from "../../components/elements/Carousel"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Cover from "../../assets/images/blog/haguedebrief/cover.jpg"
import Louwmanpic from "../../assets/images/blog/haguedebrief/louwman.jpg"
import Meetings from "../../assets/images/blog/haguedebrief/meetings.jpg"
import Workshop from "../../assets/images/blog/haguedebrief/workshop.jpg"
import Sunset from "../../assets/images/blog/haguedebrief/sunset.jpg"
import TheHagueConvention from "../../assets/images/events/partner_logos/Sign_Off_Impact_Conference_CMYK.jpg";
import TheWorldForum from "../../assets/images/events/2023/Europe Healthcare/The_World_Forum.jpg";
import MARIOTT from "../../assets/images/events/2023/Europe Healthcare/MARIOTT.jpg";
import LRDH from "../../assets/images/events/2023/Europe Healthcare/LRDH.JPG";
import Louwman from "../../assets/images/events/partner_logos/louwman.jpg";
import House from "../../assets/images/events/partner_logos/houseoflords.jpg";
import ThreeSixty from "../../assets/images/events/partner_logos/3sixty.png"
import HealthcareVenues from "../../assets/images/events/partner_logos/healthcarevenues.jpg"
import AFKLGM from "../../assets/images/events/partner_logos/AFKL-GM-E-Logo.png"
import CoastalGym from "../../assets/images/events/partner_logos/coastalgym.png"
import FirstService from "../../assets/images/events/partner_logos/firstservice.png"
import Gadenhaag from "../../assets/images/events/partner_logos/gadenhaag.png"
import Postillion from "../../assets/images/events/partner_logos/logo-ph-oranje-rgb.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const HagueDebrief = () => {
  const { isShowing, toggle } = useModal();

  const images = [
    [
      TheHagueConvention
    ],
    [
      TheWorldForum, MARIOTT, LRDH, Louwman, House, ThreeSixty, HealthcareVenues
    ],
    [
      AFKLGM, CoastalGym, FirstService, Gadenhaag, Postillion
    ],
  ];
 
  const links = [
    ['https://thehague.com/conventionbureau/en'],
    ['https://www.worldforum.nl/en/', 'https://www.marriott.com/en-us/hotels/rtmmc-the-hague-marriott-hotel/overview/', 'https://www.leonardo-hotels.com/the-hague/leonardo-royal-hotel-den-haag-promenade/', 'https://www.louwmanmuseum.nl/en/', 'https://houseoflords.nl/','https://3sixtyeventconsulting.com/', 'https://www.healthcare-venues.com/'],
    ['https://wwws.airfrance.fr/en/information/offres/corporate/congres-seminaires-salons', 'https://coastalgym.nl/', 'https://www.firstservice.nl/', 'https://dagjedenhaag.nl/', 'https://www.postillionhotels.com/en-gb'],
  ];
  const headings = ['gold', 'silver', 'bronze'];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Healthcare, The Hague 2023: the debrief | m&i</title>
        <meta
          name="description"
          content="m&i Healthcare, The Hague 2023: the debrief"
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
              <div className="blog-banner" style={{ backgroundImage: `url(${Cover})`, backgroundSize:"contain", marginLeft:"5%" }}> </div>
                <h1 className="heading">m&i Healthcare, The Hague 2023: <br/>{" "} <span className="coral-underlined">the debrief {" "}
                   </span></h1> 
      
                  <p className="blog-date">Published on June 9, 2023</p><br/><br/>
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

              <p>Our healthcare events are quite literally one of a kind, meaning our attendees get a completely unique and unparalleled experience when attending. At this year’s Forum, we wanted to bring in some of our signature m&i magic – networking activities and m&i After Dark experiences – to our standard healthcare format. So, as you can imagine m&i Healthcare, The Hague 2023 was our best yet. </p>

  <br></br>

              <h3>What's healthcare all about?</h3>

  <br></br>

              <p>m&i Healthcare brings healthcare-compliant venues together with large healthcare companies, specialist healthcare agencies from across Europe and the UK, medical societies, and healthcare professionals. </p>

  <br></br>

              <div className="pullquote"> <quote><span>"</span>Thanks a lot for organising such a great event, overall we had great fun. I felt it was very successful and absolutely worth attending as we made valuable connections. We appreciate the hard work, effort and enthusiasm that you put into your events.<span>"</span> </quote>

              <h5>Zsuzsanna Juhasz, Amex HUN  </h5></div>

   <br></br>

              <p>Unlike our other Forums, our Healthcare Forum spans just two days, and its programme features education sessions and keynote speeches alongside the standard 1-2-1 meetings, destination discovery, networking activities and m&i After Dark nightlife experiences. Delegates can expect to forge lasting business connections while also engaging in knowledge exchange, developing their understanding of the current issues affecting the healthcare events ecosystem. </p>

   <br></br>

              <img src={Meetings} alt={" "} ></img><br></br>

  <br></br>

              <h3>What did we get up to?</h3>
    
  <br></br>

              <p>Back on the 6th June, healthcare professionals from all over Europe and the UK made their way to The Hague, Netherlands. Guests were spread between our two fantastic properties, <a target="_blank" href="https://www.marriott.com/en-us/hotels/rtmmc-the-hague-marriott-hotel/overview/">The Hague Marriot Hotel</a> and <a target="_blank" href="https://www.leonardo-hotels.com/the-hague/leonardo-royal-hotel-den-haag-promenade">Leonardo Royal Hotel Den Haag Promenade</a>, positioned just a short walk away from our meeting venue, <a target="_blank" href="https://www.worldforum.nl/">The World Forum</a>.</p>

  <br></br>

            <p>Once guests had settled into their rooms, it was time for the first buyer-focussed session, the Future Talent Summit. The session was a coming together of the most impactful minds in the healthcare events ecosystem. The hot topics were debated, and the industry status quo was challenged. Following the summit, the best practice guidelines were outlined and shared with attendees. </p>

  <br></br>

            <div className="pullquote"> <quote><span>"</span>It's always fantastic to be taken to a great destination to meet our business partners, suppliers or colleagues, share points of view and prepare for future events. Please keep the choice of buyers this high!<span>"</span> </quote>

            <h5>Olivier Bresson, Groupe +2COm </h5></div>

  <br></br>

            <p>Next up was the Supplier Question Time, an interactive session led by our facilitator, Simon Beard, where suppliers could ask questions to a panel of healthcare event experts. This was shortly followed by the Opening Keynote, a fast-paced session bringing together the keynote speaker and a group of industry experts. </p>

  <br></br>

            <p>Discussion at the keynote was focused on how we can create impactful educational experiences, the key influences affecting the future of healthcare meetings for stakeholders and how healthcare events have changed over the last five years. </p>

  <br></br>

            <div className="pullquote"> <quote><span>"</span>The connections made with healthcare-ready suppliers were key to our successful event experience. I also felt the educational content was thought-provoking and tackled essential questions for our industry.<span>"</span> </quote>

            <h5>Damian Pisanelli, ConferenceDirect, LLC </h5></div>

  <br></br>

            <img src={Sunset} alt={" "} ></img><br></br>

  <br></br>

            <p>After a morning of knowledge sharing, it was time for attendees’ first set of 1-2-1 meetings and then onto our opening night on the seafront at De Waterreus. It was a relaxed evening with a delicious BBQ and buffet-style dinner, exciting entertainment and that all-important connection – and all while taking in a stunning sunset from the beach. </p>

  <br></br>
    
            <p>The morning after the night before was met with a hefty hotel breakfast and a second round of 1-2-1 meetings. Guests could then attend the following educational workshops: best practice for meetings across the drug life cycle, ESG in event strategy, future talent share summit findings and compliance update Q&A. The sessions were all facilitated by our partners and/or speakers and attendees and fostered important conversations around the challenges the industry faces. </p>

  <br></br>

          <img src={Workshop} alt={" "} ></img><br></br>

  <br></br>

          <p>The afternoon was met with yet more networking as we went into our destination activities. There was a huge range for guests to choose from with 7 bookable activities in total, from walking tours and gallery visits to a fjords cruise and a rafting session. Guests got to explore The Hague from every perspective while continuing to strengthen the connections made in the meeting room. </p>

  <br></br>

          <p>After a busy afternoon, guests got back to their hotels to freshen up before making their way to a Gatsby-themed farewell dinner at the Louwman Museum. This spectacular venue is home to some of the world's most impressive collections of vintage cars, coaches and motorcycles and features a range of event spaces with unconventional features such as stained-glass ceilings and vintage memorabilia. We all shimmied away to the live jazz band well into the evening, ensuring that we saw out the Forum the only way we know how. </p>

  <br></br>

        <img src={Louwmanpic} alt={" "} ></img><br></br>

  <br></br>

        <p>And just like that, we got to our last set of pre-scheduled meetings before we waved our delegates off!  </p>

  <br></br>

        <h3>Partner Zone</h3>
          <br></br>
          <p>And of course, we have to mention the fantastic partners that helped make m&i Healthcare, The Hague 2023 a success. Without their support and insight, we couldn’t have showcased The Hague to our guests at such a high standard! </p>

          <div className="site-half partnerSection" style={{textAlign:'center'}}>
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                

                  <Carousel images={images} links={links} headings={headings} autoPlay />

                  <br></br>
                  <br></br>
                  
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

export default HagueDebrief