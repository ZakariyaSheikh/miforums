import React from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import Thumbnail1 from "../assets/images/ldsassets/lds_story.png"
import Thumbnail2 from "../assets/images/ldsassets/lds_emailsignature.png"
import Thumbnail3 from "../assets/images/ldsassets/lds_socialpost.png"
import Thumbnail4 from "../assets/images/ldsassets/lds_promovideo.png"


const LDSAssets = () => {



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>luxe diamond suppliers club | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
        />
      </Helmet>
      <div className="site-wrap" style={{backgroundColor:'#FCF2EB'}}>
        <div
          className="lds-hero-slider"

        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="lds-hero-heading">
                Welcome to the
                  <br />
                 {" "} <span className="LDSHeader">m&i Luxe Diamond Suppliers</span> club <br />  {" "}
                  - we're happy to have you.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half ">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-8 mr-lg-auto py-5 lds-caption" >
                <p>
                We’re honoured to have you join us as an m&i Luxe Diamond Supplier, a title reserved for a select few in the industry. Here are your exclusive supplier assets. Simply download to use on your social channels and emails. 
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="lds-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch " style={{textAlign:"-webkit-center"}}>

              <div
                className="col-lg-6 ml-rg-auto py-5"

              >


        <div className="lds-box-container">

                  <img
                alt={" "}
                src={Thumbnail1}
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
 share this one on your social media story
                    </h2>
                  <p><a href="/images/ldsassets/downloadable/LDS_social_story.mp4" download><span className="coral-underlined">Download</span></a> story image</p></div>

              </div>





              <div
                className="col-lg-6 ml-rg-auto py-5"

              >

                  <div className="lds-box-container">

                  <img
                alt={" "}
                src={Thumbnail2}
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
 add this one to your email signature
                    </h2>
                  <p><a href="/images/ldsassets/downloadable/LDS_email_signature.gif" download><span className="coral-underlined">Download</span></a>  signature</p></div>

              </div>





              <div
                className="col-lg-6 ml-rg-auto py-5"

              >

                  <div className="lds-box-container">

                  <img
                alt={" "}
                src={Thumbnail3}
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
include this one in your social feed
                    </h2>
                  <p><a href="/images/ldsassets/downloadable/LDS_social_post.mp4" download><span className="coral-underlined">Download</span></a> social post</p></div>

              </div>

              <div
                className="col-lg-6 ml-rg-auto py-5"

              >

                  <div className="lds-box-container">

                  <img
                alt={" "}
                src={Thumbnail4}
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
show this one to your network
                    </h2>
                  <p><a href="/images/ldsassets/downloadable/lds_promo_video.mp4" download><span className="coral-underlined">Download</span></a> promo video</p></div>

              </div>




            </div>
          </div>
        </div>



      </div>

    </>
  )
}

export default LDSAssets
