import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/visitoslo/heroimage_visitoslo-min.png"
import Picture1 from "../../assets/images/blog/visitoslo/oslo_hotel-min.png"
import Picture2 from "../../assets/images/blog/visitoslo/oslo_food-min.png"
import Picture3 from "../../assets/images/blog/visitoslo/oslo_transport-min.png"
import Picture4 from "../../assets/images/blog/visitoslo/boattour.jpg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const VisitOslo = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Green Oslo: how the world’s most sustainable city is changing MICE | m&i</title>
        <meta
          name="description"
          content="Green Oslo: how the world’s most sustainable city is changing MICE"
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
                <h1 className="heading"><span className="coral-underlined"> Green Oslo:</span> how the world’s most sustainable city is changing MICE {" "}</h1>
                  <p className="blog-date">Published on Jan 16, 2023</p><br/><br/>
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
                    <p>Oslo, host to <a href="https://www.mi-forums.com/mi-europe-summer-oslo-2023">m&i Europe Summer 2023</a>, prides itself on its ambitious climate strategies, and for good reason. It’s no secret the city has more than kept its eco promises, being voted the number one most sustainable city in 2022 according to the Arcadis Sustainable Cities Index. We spoke to Anne-Signe Fagereng, Director of Marketing for <a href="https://www.visitoslo.com/en/">Visit Oslo</a>, about how the city is bringing sustainability to the forefront of meeting and events.  </p><br/><br/>

                
                    <h3>Accommodation </h3>
                    <br />
                    <p>Expect to find an array of eco-certified hotels offering eco-friendly operations. Anne-Signe explains, ‘sustainability is high on the agenda in Oslo, and 94% of hotels, venues and event spaces in Oslo have a third-party sustainability certification’. 
                    </p>
                    <div className="quote"> <quote>‘Another favourite is Asia, serving pan-Asian food with each dish’s O2 emissions printed on the menu’</quote></div>

                    <p>From sustainable treatment of waste, water and drainage to energy use and sourcing environmentally friendly suppliers, you can find numerous MICE-ready hotels with a green edge. Expect an impressive hotel offering with big names like Radisson Blu and our host hotel, <a href="https://www.nordicchoicehotels.no/hotell/norge/oslo/clarion-hotel-the-hub/">Hotel Clarion The Hub </a>– proving that sustainability is not a compromise for hotel chains anymore, it’s an expectation. </p>
                    <br/><br/>
                    <img src={Picture1} alt={" "}></img>
                    <br /><br />

                      <h3>Food </h3>
                    <br />
                    <p>Looking for locally grown organic produce and/or creative meat-free meals? You’re in luck. Oslo isn’t short of delicious options whether you’re after a Michelin Star experience or a casual bistro, there’s something for every occasion. <br/><br/>

For an innovative take on gourmet food, Anne-Signe, from Visit Oslo recommends Rest, meaning leftovers in Norwegian. And that’s precisely what they make use of on their menu – creating dishes from leftover food. Another favourite is Asia, serving pan-Asian food with each dish’s O2 emissions printed on the menu.  </p>
                    <br></br>
                    <img src={Picture2} alt={" "}></img>
                    <br /><br />

                    <h3>Transport</h3>
                    <br />
                    <p>It was reported in 2020 by Oslo Kommune that ‘Oslo has the most electric vehicles per capita of any major city in the world’ and that ‘the majority of new car sales in Oslo are plug-in electric vehicles’. But if you’d rather see the sights on the go then picking up a city bike at any one of the 270 stations around the city centre.  

                    <div className="quote"><quote>‘94% of hotels, venues and event spaces in Oslo have a third-party sustainability certification’ </quote></div>
                    A single trip costs just £2.90 (35 NOK) or you can purchase a day or monthly pass. You’ll also notice an abundance of electric scooters you can use to zip around the city centre at ease. 
                    </p>

                    <br></br>
                    <img src={Picture3} alt={" "}></img>

                    <div className="quote"><quote>‘Oslo is a compact and walkable city, full of low carbon activities’</quote></div>

                      <h3>Activities and attractions </h3><br/>
                   
                    <p>Anne-Signe tells us, ‘you can expect everything from saunas, swimming, kayaking, yoga, hiking, biking, art exhibitions in nature, and more.’ <br/>
                    A bounty of natural beauty makes it easy to find carbon-free or low-carbon options when looking for guilt-free fun. Viking Biking & Hiking tours offer a carbon-free way to witness everything that Oslo has to offer on two wheels or two legs.  <br/><br/>

If an electric boat tour sounds enticing, Anne-Signe recommends a group booking with Brim Explorer’s boat tours sailing you through the Oslo Fjord. Whether you’re travelling by bike, boat or foot, you’ll never get bored of Oslo’s stunning scenery. <br/><br/>

If you’d like to explore the most sustainable city of 2022 join us in Oslo on 25-28 June for 3 days of immersive networking.  </p>
<br></br>
                    <img src={Picture4} alt={" "}></img><br/><br/>

                    <a href='/signup'>
                    <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                                       sign me up
                                                    </span>
                                                </a>

                    <br></br>

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

export default VisitOslo
