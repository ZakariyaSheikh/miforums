import React from 'react';
import RendezThumbnail from '../../assets/images/blog/metaverse/thumbnail.png'
import OurPlanetThumbnail from '../../assets/images/blog/our-planet/thumbnail.png'
import SevilleThumbnail from '../../assets/images/blog/seville/thumbnail.png'


const RelatedArticles = () => {

    return (

        <div className="related-articles">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-12 ml-rg-auto py-5 laptop"
              >
                <h2 style={{textAlign:'center'}} > related articles </h2>
                <br />


               <div className="blog-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

              <div
                className="col-lg-4 ml-rg-auto py-5 relatedArticle"
              >


<a href="/metaverse-coming-meetings-industry-you-ready-m-i-forums">

        <div className="blog-thumbnail-container">

                  <img
                alt={" "}
                src={RendezThumbnail}
                  className={"blog-thumbnails"}

                          ></img></div>
                        
                <div className="blog-thumbnail-caption">
                <h4 className="blog-heading">
                The metaverse is coming to the meetings industry - are you ready?
                </h4>
                <br></br>
                  <p>We’ve all heard of the metaverse - it’s certainly been creating quite a buzz in the last year. But as members of the meetings & events industry, perhaps the word we should all be paying more attention to is ‘RendezVerse’.</p>
                                            </div>
                                            </a>
              </div>





              <div
                className="col-lg-4 ml-rg-auto py-5 relatedArticle"
              >
                <a href="/impact-events-our-planet-m-i-forums">

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
                  <p>In the build-up to m&i VIP Connect 2022 in Madeira, we asked Vianei Hermes, CEO and Co-Founder of Climate First, to explain the environmental impacts of the events industry and how we can make positive, actionable changes towards a more sustainable future…</p>
                                            </div>
                                            </a>
              </div>





              <div
                className="col-lg-4 ml-rg-auto py-5 relatedArticle"
              >
                <a href="/back-so-soon-why-were-hosting-our-second-event-seville-5-years">

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
                  <p>This year, we’re hosting our second Forum in Seville within just 5 years! To help you understand what makes this unique Spanish city so perfect for hosting events, we asked Manuel Macias, Director of Seville Congress & Convention Bureau, to tell us everything a planner might want to know, from how the city’s changed since our last event in 2017, to where the city is heading in the next 20 years (plus lots more in between). </p>
                                            </div>
                                            </a>
              </div>




            </div>
          </div>
        </div>

              </div>
            </div>
          </div>

          </div>
    );
};

export default RelatedArticles;
