import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/viennahouse/banner.png"
import Picture1 from "../../assets/images/blog/viennahouse/picture1.png"
import Picture2 from "../../assets/images/blog/viennahouse/picture2.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const ViennaHouse = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>We asked Vienna House Andel's Berlin about what makes them the perfect host for our upcoming healthcare event | m&i</title>
        <meta
          name="description"
          content="We asked Vienna House Andel's Berlin about what makes them the perfect host for our upcoming healthcare event"
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
                <h1 className="heading">We asked Vienna House Andel's Berlin about what makes them the perfect host for our upcoming <span className="coral-underlined"> healthcare event<br/>{" "}

                    </span></h1><br/>
                  <p className="blog-date">Published on March 7, 2022</p><br/><br/>
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
                    <p>This year, we're taking a closer look at some of the incredible hosts and partners for our 2022 events. So, it only makes sense that we kick off with the host partner for our first event of the year, right?
                      <br /><br />

                      We asked <a href="http://www.viennahouse.com/en/andels-berlin/the-hotel/overview.html">Vienna House Andel's Berlin</a> a few questions ahead of m&i Healthcare 2022 in April. Whether you'll be joining us in Berlin or not, this is the perfect opportunity to get to know this fantastic hotel and the wonderful city surrounding it!

                    </p><br /><br />

                    <h3>1. Why did you choose to partner with us?</h3>
                    <br /><br/>
                    <p>As a hotel, we knew that m&i’s strong relationship with the Pharma & Healthcare industries would provide the right mix of clients and guests for us. m&i’s global networking events are such a welcome break from the traditional industry tradeshow. They share our values and mission for building lasting business relationships, as well as unforgettable memories. </p>
                    <br /><br />

                    <h3>2.   Why should buyers choose Berlin over another major European city?</h3>
                    <br />
                    <p>Berlin is the place to be! The German capital never sleeps and has become much trendier in recent years. The record number of visitors and tourists continues to increase every year. As a city, Berlin is extremely welcoming and tolerant of all types of people, which is why so many people from abroad want to live here.
                      <br /><br />
                      Despite being a big city, Berlin is actually one of the greenest places in Europe! We have lots of cool urban locations, and every neighbourhood has its own individual character. As a once-divided city, Berlin has an impressive history that still has hidden anecdotes around every corner.
                      <br /><br />
                      The city places a focus on innovative industries, including technology, healthcare, life sciences, service economy, mobility and logistics.
                    </p>
                    <br /><br />
                    <img src={Picture1} alt={" "} ></img>
                    <br /><br />

                      <h3>3. What makes your property ideal for healthcare events?</h3>
                    <br />
                    <p>We have 10 years’ experience within the Pharma & Healthcare market, and our team incorporates Pharma codex certified hotel & events staff members. We’re a conference hotel that exceeds all expectations, combining the best of business and leisure. <br /><br />

                      With 37 well-lit conference rooms and meeting suites that make up 4,400 sq. m, we can provide event possibilities that go above and beyond. A 2,000-square-metre event hall for up to 1,500 guests is sequestered as a multifunctional off-site location in the hotel’s lower level. A ballroom with 570 square metres and floor-to-ceiling windows completes the enormous range of showpiece conference venues with individual foyer areas for exhibitions and a separate convention entrance.


                    </p>
                    <br></br>

                    <h3>4.  Of the healthcare events you host, what proportion are internal and external meetings?</h3>
                    <br />
                    <p>Our meetings are a 50/50 mix of internal & external. </p>
                    <br></br>

                      <h3>5.  What events do you already host in Berlin?</h3>
                    <br />
                    <p>We currently host product launches, kick-off events, internal training, and strategy meetings. We’ll also host side meetings and room-only groups for larger pharmaceutical congresses around Berlin.</p>
                    <br></br>

                    <img src={Picture2} alt={" "}></img>
                    <br /><br />


                    <h3>6. What makes Berlin perfect for hosting healthcare events?</h3>
                    <br />
                    <p>Berlin is an international destination, which is already well established for hosting large healthcare & pharmaceutical events. The sheer variety of event & conference locations makes this city suitable for all types of congresses, seminars and fairs.<br /><br />

                    Also, Berlin's pharmaceutical companies generate around 13 percent of Germany's total pharmaceutical sales, making Berlin the pharmaceutical capital. The sustained success of the pharmaceutical industry in Berlin is based on innovative products and a history that goes back to the 19th century. Global players such as Bayer, Berlin-Chemie (Menarini), Pfizer, Sanofi and Takeda as well as about 30 medium-sized pharmaceutical companies are located in the wider Berlin area.</p>
                    <br></br>

                    <h3>7.    m&i Healthcare is the only networking event that combines 1-2-1 meetings, destination discovery and educational workshops - how valuable is this for the industry?</h3>
                    <br/>
                    <p>m&i Healthcare is the most important event for our industry because it combines business meetings with compelling networking experiences, which helps to forge stronger relationships with healthcare events professionals. The educational elements provide the perfect platform for talking honestly about challenges, new ideas or future business. </p><br /><br />


                    <h3>8.    Tell us a secret about Berlin that most visitors wouldn't know</h3>
                    <br />
                    <p>Berlin is known for its underground culture and secret spots. When it comes to quirks and hidden gems, the city’s balance of urban cool and green, open spaces makes it the perfect place for secret escapes, hidden watering holes and underground art and culture.<br/><br />

                    There are so many secrets about Berlin just waiting to be discovered, so it’s best to come and see for yourself…</p>
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

export default ViennaHouse
