import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/berlin/banner.png"
import Picture1 from "../../assets/images/blog/berlin/picture1.png"
import Picture2 from "../../assets/images/blog/berlin/picture2.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const Berlin = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The perfect city for healthcare events | m&i</title>
        <meta
          name="description"
          content="The perfect city for healthcare events"
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
                <h1 className="heading">The perfect city for <span className="coral-underlined"> healthcare events{" "}
                   </span></h1>
                  <p className="blog-date">Published on March 16, 2022</p><br/><br/>
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
                    <p>Ahead of m&i Healthcare 2022 in Berlin, we caught up with <a href="https://convention.visitberlin.de/en">Visit Berlin</a> to ask them why Germany’s capital city is the perfect destination for hosting healthcare events.</p><br/><br/>

                    <h3>1. Tell us a secret about Berlin that most visitors wouldn't know.</h3>
                    <br /><br/>
                    <p>Berlin is a relatively young city – only some 780 years old. However, always stylish – archaeologists have just carved out Berlin’s oldest catwalk in the heart of the old medieval city.</p>
                    <br /><br />

                    <h3>2. What makes Berlin perfect for hosting healthcare events?</h3>
                    <br />
                    <p>Berlin and the metropolitan region around the city has emerged as the most important location for scientific research in Europe. Leading global players, experienced professionals, young scientists, public and private hospitals, innovative start-ups, and specialists from all over the world form a unique network that event organisers can benefit from.
                    </p>
                    <br /><br />

                      <h3>3. What healthcare events do you already host and which events are you hoping to host in the foreseeable future?</h3>
                    <br />
                    <p>Berlin is hosting healthcare flagship events such as the annual World Health Summit, international and national medical congresses of all sizes, company events and scientific meetings. We want to continue to connect all stakeholders and offer them a platform to interact and exchange knowledge whilst meeting in Berlin.</p>
                    <br></br>

                    <h3>4. Sell Berlin in one sentence.</h3>
                    <br />
                    <p>Berlin is the City of Freedom.</p>
                    <br></br>

                    <img src={Picture1} alt={" "} ></img>
                    <br /><br />

                      <h3>5. Why should buyers choose Berlin over another major European city?</h3>
                    <br />
                    <p>Berlin combines German efficiency and quality with a relaxed atmosphere and lifestyle.</p>
                    <br></br>


                    <h3>6. Describe your idea of a perfect incentive trip in Berlin?</h3>
                    <br />
                    <p>Introduction to the historic city centre by boat, dinner in an edgy venue on the banks of the river Spree, a bike tour through the historic district, lunch at the Reichstag rooftop restaurant, a visit to the new Humboldt Forum and the catacombs of former Tempelhof airport, followed by an exclusive dinner and a night in one of Berlin’s clubs.</p>
                    <br></br>

                    <h3>7. How well is Berlin recovering from the Pandemic?</h3>
                    <br/>
                    <p>Thanks to the comprehensive support of companies and organisations by the state authorities, as well as the passion and dedication of the people engaged in the meetings business, our industry as well as our society has overcome this severe situation in a good way. And Berlin is still an attractive MICE destination as ever. We are well prepared for providing safe and inspiring events!</p><br /><br />

                    <img src={Picture2} alt={" "}></img>
                    <br /><br />

                    <h3>8. As a city, where do you see Berlin in 20 years? e.g. what will it best be known for?</h3>
                    <br />
                    <p>We would like Berlin to be seen as one of the most innovative, sustainable and reliable destinations in Berlin – with meetings made in Berlin!</p>
                    <br></br>

                    <h3>9. m&i Healthcare is the only networking event that combines 1-2-1 meetings, destination discovery and educational workshops - how valuable is this for the industry?</h3>
                    <br />
                    <p>Nothing can replace face-to-face meetings to exchange knowledge and ideas, to work on future strategies, and to start planning events together. We are proud to be welcoming the m&i Healthcare attendees in Berlin and to kickstart what will hopefully be a new chapter for live events in the healthcare industry.
                      <br/><br/>
                      Not going to be joining us for m&i Healthcare this year? See what you’re missing by following the event on our Instagram story. </p>
                    <br></br>

                    <h3>Follow: <a href="https://www.instagram.com/miforums">@miforums</a></h3>

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

export default Berlin
