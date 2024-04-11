import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/rendezmi/banner.png"
import Picture1 from "../../assets/images/blog/rendezmi/picture1.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const RendezPartnersMI = () => {
  const { isShowing, toggle } = useModal();


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i partners with RendezVerse to bring the corporate metaverse to the  hospitality industry | m&i</title>
        <meta
          name="description"
          content="m&i partners with RendezVerse to bring the corporate metaverse to the  hospitality industry"
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
                <h1 className="heading">m&i partners with RendezVerse to bring the corporate metaverse to the <span className="coral-underlined"> hospitality industry</span></h1>
                  <p className="blog-date">Published on March 8, 2022</p><br/><br/>
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


                    <h3>It’s time to step into the hotel and events metaverse.</h3>
                    <br /><br/>
                    <p>We’re very excited to announce that we’re investing in the future of the events industry by partnering with <a href="https://rendezverse.com/">RendezVerse</a> on a project that will help shape the corporate metaverse.
                      <br /><br />

                      Catering to hotels and venues around the world, RendezVerse makes it easier for the hospitality industry to showcase and view properties in the Metaverse. We’re taking an active role in the development of this pioneering platform, which aims to provide a greener, more cost-effective and time-saving solution to site inspections.
                      <br /><br />

                      Rendezverse will be showcasing their demo to attendees throughout our 2022 Flagship Forums: m&i Europe Spring in Seville, m&i Europe Autumn 2022 in Porto and m&i Americas in Punta Cana.
                      <br /><br />

                      During these events, <strong>Peter Gould, CEO of RendezVerse</strong>, will introduce how RendezVerse will leverage Web 3.0 technologies to transform the way hotels and destinations market themselves.
                      <br /><br />

                      Attendees will have the opportunity to virtually inspect a range of hotel environments and view specific areas of iconic properties, such as the Madrid Marriott Auditorium Hotel & Conference Center, JW Marriott Marquis Dubai, Atlantis The Palm Dubai, and Four Seasons Resort Bali, all of whom are signed up to the RendezVerse Development Partner Programme.
                    </p>
                    <br /><br />
                    <img src={Picture1} alt={" "}></img>
                    <br /><br />

                    <h3>So, what does our CEO, Richard Barnes make of the partnership?</h3>
                    <br />
                    <p>“We are very excited about the possibilities that RendezVerse is going to uncover for our industry. m&i has always been on the front line of innovation, both by challenging the traditional event format and incorporating new technology to shape our industry for a more efficient future. Our collaboration with RendezVerse further solidifies this ambition.”
                      <br /><br />
                      We also caught up with Peter Gould, CEO of RendezVerse, who said: “We are delighted to work with m&i and have the opportunity to showcase our hotel and events metaverse platform. The feedback we’ve received so far from major players in the hotel sector has been overwhelming, and we can’t wait to show what RendezVerse can do for the m&i community.”
                    </p>
                    <br /><br />

                      <h3>Want to be one of the first event professionals to experience how RendezVerse will revolutionise the industry? </h3>
                    <br />
                    <p>Come to one of our Flagship Forums: m&i Europe Spring 2022 in Seville, m&i Europe Autumn 2022 in Porto and m&i Americas in Punta Cana. </p>
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

export default RendezPartnersMI
