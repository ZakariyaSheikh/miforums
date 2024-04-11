import React from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import Thumbnail1 from "../assets/images/festambassador/socialmedia.png"
import Thumbnail2 from "../assets/images/festambassador/signature.png"
import Thumbnail3 from "../assets/images/festambassador/feed.png"
import FestLogo from "../assets/images/festambassador/mifestlogo.png"

const FestAmbassador = () => {



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ambassador | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
        />
      </Helmet>
      <div className="site-wrap" style={{backgroundColor:'#FBEFE7'}}>
        <div
          className="ambassador-hero-slider bambi-bg"

        >
          <div className="container" style={{textAlign:'center'}}>
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <img src={FestLogo} style={{width:'600px' }}/>
                <h3 className="ambassador-hero-heading">
                Ambassadors
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half ">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-8 mr-lg-auto ambassador-caption" style={{color:'#352E35'}} >
                <p>
                We’re thrilled that you’ve chosen to become an m&i Fest Ambassador, a title reserved for only a select few industry influencers like yourself. Having you on board will be invaluable in getting the word out about our latest event – m&i fest Marrakesh 24. Below you’ll find your Ambassador assets. Simply download to use on your social channels and emails.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="ambassador-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

              <div
                className="col-lg-4 ml-rg-auto py-5"

              >


        <div className="ambassador-box-container">

                  <img
                alt={" "}
                src={Thumbnail1}
                width={"250px"}
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
Share this one on your social media story
                    </h2>
                  <p><a href="/images/festambassador/ig_story_fest_ambassador.png" download><span className="cobalt-underlined">Download</span></a> story image</p></div>

              </div>





              <div
                className="col-lg-4 ml-rg-auto py-5"

              >

                  <div className="ambassador-box-container">

                  <img
                alt={" "}
                src={Thumbnail2}
                width={"250px"}
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
Add this one to your email signature
                    </h2>
                  <p><a href="/images/festambassador/mi_fest_ambassador_email_signature.gif" download><span className="cobalt-underlined">Download</span></a>  signature</p></div>

              </div>





              <div
                className="col-lg-4 ml-rg-auto py-5"

              >

                  <div className="ambassador-box-container">

                  <img
                alt={" "}
                src={Thumbnail3}
                width={"250px"}
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
Include this one in your social feed
                    </h2>
                  <p><a href="/images/festambassador/social_post_fest_ambassador.png" download><span className="cobalt-underlined">Download</span></a> social post</p></div>

              </div>




            </div>
          </div>
        </div>



      </div>

    </>
  )
}

export default FestAmbassador
