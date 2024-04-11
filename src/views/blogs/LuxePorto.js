import React from "react"
import { Helmet } from "react-helmet";
import Carousel from "../../components/elements/Carousel"
import "../../assets/scss/style.scss"
import Cover from "../../assets/images/blog/LuxePorto/cover.jpg"
import Image9695 from "../../assets/images/blog/LuxePorto/9695.png"
import Image96 from "../../assets/images/blog/LuxePorto/96.png"
import Regent from "../../assets/images/blog/LuxePorto/regent.jpg"
import GiftBag from "../../assets/images/blog/LuxePorto/gift_bag.jpg"
import Srdan from "../../assets/images/blog/LuxePorto/srdan.jpg"
import Image95 from "../../assets/images/blog/LuxePorto/95.png"
import Activity from "../../assets/images/blog/LuxePorto/activity.jpg"
import WellnessCruise from "../../assets/images/blog/LuxePorto/wellness_cruise.jpg"
import Awards from "../../assets/images/blog/LuxePorto/awards.jpg"
import RegentLogo from "../../assets/images/events/partner_logos/Regent Logo.jpg";
import Talas from "../../assets/images/events/partner_logos/talas.png";
import Portonovi from "../../assets/images/events/partner_logos/OO_Portonovi.png";
import Dukley from "../../assets/images/events/partner_logos/Dukley.png";
import Mamula from "../../assets/images/events/partner_logos/Mamula.png";
import Lifestyle from "../../assets/images/events/partner_logos/Lifestyle.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const LuxePorto = () => {
  const { isShowing, toggle } = useModal();

  const images = [
    [
      RegentLogo,
      Talas
    ],
    [
      Portonovi
    ],
    [
      Dukley, Mamula, Lifestyle
    ]
  ];
 
  const links = [
    ['https://www.ihg.com/regent/hotels/gb/en/porto-montenegro/tivpm/hoteldetail', 'https://www.talas-montenegro.com/'],
    ['https://www.oneandonlyresorts.com/portonovi'],
    ['https://www.dukleyhotels.com/en/', 'https://www.mamulaisland.com/en/', 'http://www.lifestylemne.me/']
  ];
  const headings = ['gold', 'silver', 'bronze'];

return (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>m&i Luxe, Porto Montenegro 2023: "One of the best Forums I have ever attended" | m&i</title>
      <meta
        name="description"
        content="m&i Luxe, Porto Montenegro 2023: “One of the best forums I have ever attended” "
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
              <h1 className="heading">m&i Luxe, Porto Montenegro 2023:  <br/>{" "} <span className="coral-underlined">"One of the best Forums I have ever attended" {" "}
                 </span></h1> 
    
                <p className="blog-date">Published on November 1, 2023</p><br/><br/>
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

            <p>In October we jetted a select group of high-end MICE professionals off to Montenegro’s most glamorous port and if we’re being honest, we’ve been thinking about it ever since. Our inaugural Luxe Forum went better than we could have ever imagined, with positive feedback streaming in during and after the event. </p>
<br></br>
            <p>You’ll be happy to know that while one Luxe Forum has come to an end, another is up ahead – and in the beautiful <a target="_blank" href="https://www.mi-forums.com/mi-luxe-costa-mujeres-2023">Costa Mujeres, Mexico</a> no less. As expected, spaces are filling up fast, so we recommend saving your space soon to avoid missing out.  </p>
<br></br>

<a href='/signup'>
                                   <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                        Save your space 
                                          </span>
                                           </a><br/><br/><br/>

            <p>Eager to find out what we got up to in Porto Montenegro? We’re not surprised – let's get into it! </p>

  <br></br>

            <h3>What is m&i Luxe? </h3>
<br></br>

            <p>Luxe is a select and intimate experience for suppliers with exquisite properties and buyers looking to book high-end board meetings, VIP MICE events and high-end incentive travel. One of only a handful of industry events like it, it’s an exclusive space in the MICE sphere with an exclusive guestlist to match.  </p>

<br></br>

            <img src={Image9695} alt={" "} ></img><br/><br/>

            <p>Similarly, the destinations and hotels we choose to host our Luxe Forums in have to meet the luxury criteria our buyers are searching for. From the destination’s activities and evening venues to the host hotel’s level of service and décor, every detail needs to be elevated – and that’s exactly why we choose Porto Montenegro in collaboration with <a target="_blank" href="https://www.talas-montenegro.com/">Talas Montenegro DMC.</a>  </p>

<br></br>

            <img src={Regent} alt={" "} ></img><br/><br/>

            <h3>What happened in Montenegro</h3>
        
<br></br>

            <p>Guests touched down on Wednesday 11th October and immediately got settled into the exquisite<a target="_blank" href="https://www.ihg.com/regent/hotels/gb/en/porto-montenegro/tivpm/hoteldetail"> Regent Porto Montenegro </a>for 3 days of high-end networking. Upon arrival at the hotel, our high-end delegates were welcomed with a gift bag full of mindfulness goodies, event information and their badge.  </p>

<br></br>

            <img src={GiftBag} alt={" "} ></img><br/><br/>

            <p>Later that afternoon, Srđan Vukčević, our resident mindfulness expert and business coach, ran his first optional session named, ‘The science behind mindfulness’ in which we took a dive into the scientific benefits of mindfulness. At this event, we really wanted to highlight the importance of mental clarity and presence and how it can strengthen your business and personal connections.</p>

<br></br>

            <p>Shortly after, those new to m&i were given a chance to get to know each other and the team at a first-timer welcome drink. This flowed seamlessly into m&i After Dark, an idyllic evening in the Regent's Italian Garden located on the banks of its sparkling super yacht marina. Guests enjoyed a relaxed evening filled with welcome speeches, a Montenegrin spread and a range of local entertainment.  </p>

<br></br>

           <div className="pullquote"> <quote><span>"</span>To kick-off m&i Luxe in Montenegro was a great choice. I really enjoyed the entire Forum and the very high level of showcased hotels in a very relaxed environment. I’m looking forward to attending the next m&i Luxe Forums.<span>"</span> </quote>

           <h5>David Bjaouix, Director of Global Accounts at HelmsBriscoe </h5></div>

<br></br>

          <p>Our first day began with some morning meditation, led by Srđan, where participants practised focussed attention to kick start a productive day of meaningful connection. Shortly after, our first round of pre-scheduled meetings began, split across two beautiful meeting spaces within the Regent.  </p>
<br></br>
          <img src={Srdan} alt={" "} ></img><br/><br/>

          <p>Our Luxe Forums feature 30 meetings across 3 days and are amongst the smallest of our roster with a focus on building stronger connections through a more intimate environment. Mid-way through morning meetings, we also offered delegates the chance to have a 10-minute ‘mindful refresh’ with Srđan which taught open monitoring as a means to mentally reset in-between meetings.  </p>

<br></br>


        <p>By the time the afternoon rolled around it was time for our destination discovery activities, giving our delegates vital time to grow their connections while experiencing everything that the destination had to offer luxury incentives. Our activities ranged from authentic village experiences, a speedboat trip to the private island of Mamula, off-road jeep adventures, painting masterclasses and more.   </p>

<br></br>

        <p>Next on the agenda: our second evening at the luxury Only & Only resort. Guests were whisked away to our evening venue in speedboats, starting as we meant to go on with an opulent evening from start to finish. A buffet filled with gourmet Asian fusion delights was served amongst glasses of local wine and, of course, plenty of connection. Finally, the evening ended with a spectacular fireworks display, rounding off an unforgettable night.  </p>


        <div className="pullquote"> <quote><span>"</span>I wanted to thank you for an outstanding Forum in Montenegro. It really ticked all the boxes, great venue, great suppliers, fabulous activities. I would say it was probably one of the best Forums I have ever attended, very bespoke. I look forward to attending future Luxe Forums.<span>"</span> </quote>

        <h5>David Reay-Scott, CEO and Founder at Blue Ice Enterprises Limited  </h5></div>

<br></br>

        <p>Day two began with our last set of pre-scheduled meetings (which meant no meetings on departure day – yay!) intercepted by another ‘mindful refresh’ and then lunch at the hotel. After lunch delegates got the chance to opt into 1 of our 2 networking cruises: ‘Catamaran cruise 1: Connect, indulge, relax’ and ‘Catamaran cruise 2: Meditate, release, relax’. The second option allowed delegates the chance to practice some mindful meditation while the first provided a livelier environment for guests to connect. </p>

<br></br>

        <img src={WellnessCruise} alt={" "} ></img><br/><br/>


        <p>And just like that, we reached our farewell evening at the exclusive Buddha-Bar, just 5 minutes’ walk along the marina from our host hotel. We tucked into a refined dinner featuring traditional flavours and were wowed by an array of entertainment including violinists, dancers and a house band that got everyone up and dancing until the early hours. Of course, our final evening also meant it was time for our Forum awards. This gives us the opportunity to celebrate the individuals who help make our events a success, the high-end delegates who sit at the heart of our events. </p>

<br></br>

        <img src={Awards} alt={" "} ></img><br/><br/>

<br></br>

        <h3>Partner Zone</h3>
        <br></br>
        <p>And we couldn’t end our round-up without mentioning the amazing partners that contributed to this fantastic Forum. Without their support and insight, we couldn’t have showcased Porto Montenegro to delegates at such a high standard! </p>

        <div className="site-half partnerSection" style={{textAlign:'center'}}>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
              
                
                <Carousel images={images} links={links} headings={headings} autoPlay />
              
                

                <br></br>
                <br></br>

                <p>Couldn’t make our inaugural Luxe event? Interested in gaining access to an exclusive group of luxury MICE professionals? Want to save yourself a month of work in just 3 days? </p>
    <br></br>
                <p>Join us in <a target="_blank" href="https://www.mi-forums.com/mi-luxe-costa-mujeres-2023">m&i Luxe, Costa Mujeres 2023</a> on 11-14 October for unrivalled access to the world of high-end incentives and VIP MICE groups, the opportunity to truly discover a new luxury destination and to benefit from our impressive ROI. </p>
                
              </div>
            </div>
          </div>
        </div>

      <a href='/signup'>
                                   <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                        I'm interested 
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

export default LuxePorto