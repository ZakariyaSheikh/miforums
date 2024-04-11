import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/thehague/the-pier-with-logo.png"
import Picture1 from "../../assets/images/blog/thehague/boattour.jpg"
import Picture2 from "../../assets/images/blog/thehague/world-forum.jpg"
import Picture3 from "../../assets/images/blog/thehague/surfing-and-bike.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const TheHague = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Hague: from peace to MICE | m&i</title>
        <meta
          name="description"
          content="The Hague: from peace to MICE "
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
                <h1 className="heading">The Hague: from <span className="coral-underlined"> peace to MICE  {" "}
                   </span></h1>
                  <p className="blog-date">Published on Jan 25, 2023</p><br/><br/>
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
                    <p>Our host destination for <a href="https://www.mi-forums.com/mi-healthcare-2023">m&i Healthcare 2023</a> is not one to be sniffed at. Dubbed the International City of Peace and Justice and home to 64 MICE-ready venues, it’s no wonder buyers are looking to The Hague, Netherlands.  <br/><br/>

Most importantly, it’s a healthcare hotspot with a heavily developed world-class life sciences health and technology cluster dedicated to making the world a better place – is there anything it can’t do? <br/><br/>

 To find out how this city’s virtuous history has shaped it into the modern MICE destination we know today we spoke to Rosa Sipkema, the International Marketing Communications Advisor for <a href="https://thehague.com/conventionbureau/en">The Hague Convention Bureau</a>.   </p><br/><br/>

                    <h3>The Peace Palace  </h3>
                    <br />
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
  </div> <br /><br />
                    <p>It all started way back when in 1899 with the first-ever World Peace Conference held at the former Huis ten Bosh Palace.   <br /><br />

Following this monumental event, the destination gained notoriety, owed in part to philanthropist Andrew Carnegie who donated 1.5 million dollars to ensure Huis ten Bosh became the Peace Palace. He wanted it to become the Permanent Court of Arbitration as well as a public legal library of the highest standard – both of which he achieved with flying colours.  <br /><br />

Since then, the Peace Palace has also gained the United Nations International Court of Justice and The Hague Academy of International Law under its roof. </p>
                    <br /><br />

                    <img src={Picture1} alt={" "} ></img>
                    <br /><br />
                    
                   

                    <h3>The Hague today </h3>
                    <br />
                    <p>But what does The Hague look like today, and how has its history in peace-making shaped its future? <br/><br/>

Rosa Sipkema from The Hague Convention Bureau tells us the city still holds the same values: ‘The Hague is recognised globally as the International City of Peace and Justice and a city that offers thousands of people the chance to work on innovations that help secure a better, safer and just society.’ 
                    </p>
                    <div className="quote"> <quote>'Everything happens here: from discussing important issues to taking decisions and forming alliances.'</quote></div>

                   
                    <br />

                     
                    <p>As it stands, she continues, ‘the Hague is the only city outside of New York that is home to one of the six principal UN bodies, namely the International Court of Justice.’  <br/><br/>

It’s clear The Hague is seen as a catalyst for change, in Rosa’s own words, ‘everything happens here: from discussing important issues to taking decisions and forming alliances.’  <br/><br/>

And the figures don’t lie, people are flocking to The Hague to hold meetings with the number of international congresses held in the city jumping by 48% in the last year.  <br/><br/>

Previous conferences and events hosted in 2022 include the Invictus Games, the International Baccalaureate Global Conference, and the Business Traveller & MICE Fair to name just a few. And in 2023 its roster includes The International Summit of AI, the IRC Symposium and finally, the most important of them all (obviously), <a href="https://www.mi-forums.com/mi-healthcare-2023">m&i Healthcare, The Hague 2023</a>. </p>
                    <br></br>

                    <h3>How does healthcare fit in?</h3>
                    <br />
                    <p>Fortunately for healthcare professionals, The Hague is home to a high volume of pioneering medical tech companies, medical start-ups, and a wide network of life sciences and health & technology organisations. Expect to find the HQs of healthcare giants such as Siemens Healthcare Diagnostics, Toshiba Medical Systems, Draeger and PharmaPack. </p>
                    <br></br>

                     
                    <div className="quote"><quote>‘People are flocking to The Hague to hold meetings with the number of international congresses held in the city jumping by 48% in the last year.’</quote></div>
                    <br></br>

                    <p>Additionally, you’ll find first-class venue facilities suited perfectly for medical professionals, three renowned universities, two university medical centres, three dedicated science parks and four life science incubators and accelerators. It boasts state-of-the-art research facilities and logistics infrastructure and a highly educated and multilingual workforce. <br/><br/>

And The Hague’s own healthcare system is proof of its high standards, being ranked the number one healthcare system for the last five years by the Euro Health Consumer Index. </p>
                    <br></br>

                    <h3>m&i Healthcare, The Hague 2023 </h3>
                    <br/>
                    <p>So, now you know about our host destination’s incredible history and its commitment to innovation in the healthcare sector, how do we fit in? </p><br /><br />

                    <img src={Picture2} alt={" "}></img>
                    <br /><br />

                   
                    <p>From 6-8 June we’re bringing together healthcare event specialists and compliant venues for two days of immersive networking, educational sessions and knowledge sharing. The only event of its kind, all our suppliers are rigorously vetted to ensure they comply with healthcare standards.  <br/><br/>

And where better to hold this one-of-a-kind event? In a city famed for its congressional history and impeccable healthcare infrastructure and facilities, of course.  </p>
                    
                    <br></br><br/>
                    <a href='/signup'>
                                                    <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                                       register your interest
                                                    </span>
                                                </a><br/><br/><br/>

                                                <h3>m&i Healthcare, FAM trip 2023  </h3>
                    <br/>
                    <p>If you’re a buyer and you want to extend your Healthcare Forum by three days from 8-10 June, there’s also the option of our hosted FAM trip.  <br/><br/>

Immerse yourself in The Hague’s culture through food tours, gallery visits and museum tours, see its history mentioned above in action and enjoy its eco-activities such as bike tours, surfing and a boat trip.  </p><br /><br />

                    <img src={Picture3} alt={" "}></img>
                    <br /><br />

                   
                    <p>Want to secure your spot? get in touch to book your space on the FAM trip.    </p>
                    <br />

                    <a href="mailto:hello@mi-forums.com?subject=Tell me more about your event in The Hague...&body=Hi m%26i Team, I’d love to know more about this exclusive event in The Hague, The Netherlands. If you have any colleagues or industry friends that might also be interested, please list them below:">
                                                    <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                                    tell me more
                                                    </span>
                                                </a>

                    <br></br><br></br>

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

export default TheHague
