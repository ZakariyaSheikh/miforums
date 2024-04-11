import React from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import Thumbnail1 from "../assets/images/ambassador/Ambassador_social_media_story.png"
import Thumbnail2 from "../assets/images/advisor/advisor_email_mockup.jpg"
import Thumbnail3 from "../assets/images/ambassador/Ambassador_social_feed.png"

const Advisor = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>advisor | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
        />

      </Helmet>
      <div className="site-wrap" style={{backgroundColor:'#121A36'}}>
        <div
          className="ambassador-hero-slider"   style={{marginBottom:'-13rem'}}

        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="ambassador-hero-heading">
                welcome to the
                  <br />
                 {" "} <span className="yellow">m&i Advisor</span>  club.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half"  style={{padding:'0'}} >
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-8 mr-lg-auto py-5 ambassador-caption" >
                <p>
                We’re thrilled that you’ve chosen to become an m&i Advisor, a title reserved only for a select few industry trailblazers like you. Here are your exclusive advisor assets. Simply download to use on your social channels and emails.
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
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
 share this one on your social media story
                    </h2>
                  <p><a href="/images/advisor/mi_Advisor_social_story.png" download><span className="coral-underlined">Download</span></a> story image</p></div>

              </div>


              <div
                className="col-lg-4 ml-rg-auto py-5"

              >

                  <div className="ambassador-box-container">

                  <img
                alt={" "}
                src={Thumbnail2}
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
 add this one to your email signature
                    </h2>
                  <p><a href="/images/advisor/signatures.zip" download><span className="coral-underlined">Download</span></a>  signature</p></div>

              </div>





              <div
                className="col-lg-4 ml-rg-auto py-5"

              >

                  <div className="ambassador-box-container">

                  <img
                alt={" "}
                src={Thumbnail3}
                  className={"video-thumbnails"}

              ></img>  <h2 className="heading">
include this one in your social feed
                    </h2>
                  <p><a href="/images/ambassador/mi_Ambassador_social_post.png" download><span className="coral-underlined">Download</span></a> social post</p></div>

              </div>




            </div>
          </div>
        </div>



      </div>

    </>
  )
}

export default Advisor
