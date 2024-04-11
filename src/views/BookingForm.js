import React from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"

const BookingForm = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exhibitor Airport Transfer Booking Disclaimer | m&i</title>
        <meta
          name="description"
          content="Book airport transfer services here."
        />
         <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_TCs.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_TCs.png"} />
      </Helmet>
      <div className="site-wrap">
      <div className="terms-hero-slider">  
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              
              
                <h2 className="contact-hero-booking">
                  m&i: {" "} <span className="coral-underlined">Supplier Airport Transfers{" "}</span> 

                </h2>
                  
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center mb-3 mb-md-0">
            </div>
          </div>
        </div>
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-9 mr-lg-auto py-3">
      
                <h2>terms and conditions</h2>
                <br></br>

                <br></br>

                <h4>Service inclusions:</h4> 

                <ul>
                  <li>Your airport transfer fee corresponds to a group round-trip service for the cost of £80. It is only possible to purchase a round trip. </li>
                  <li>Transportation services are provided exclusively on the official arrival and departure days of the event.</li>
                  <li>Transfers are not private and may be shared with other delegates.</li>
                  <li>This service is not available for m&i Healthcare London 2024.</li>
                </ul>

                <br></br>

                <h4>Non-refundable service:</h4>

                <ul>
                  <li>The airport transfer service fee is non-refundable. </li>
                  <li>If you do not use the provided arrival or departure transfer, you will not be entitled to a refund.</li>
                </ul>

                <br></br>

                <h4>Transfer to another colleague:</h4>

                <ul>
                  <li>If you are no longer the person attending the event, the booked transfer bundle can be transferred to another colleague within your organisation.</li>
                  <li>Please inform us as soon as possible if you are no longer the person attending the event. It is important that the person replacing you shares their flight details before the deadline (4 weeks before the event) so we can rearrange the service accordingly.</li>
                </ul>

                <br></br>

                <h4>Booking confirmation:</h4>

                <ul>
                  <li>We consider your booking confirmed once payment is successfully processed through our secure payment gateway, and we have received your travel details.</li>
                </ul>

                <br></br>

                <p>Your booking is considered confirmed once payment is successfully processed through our secure payment gateway.</p>
                <br></br>

                <h4>Contact us:</h4>
                <br></br>
                <p>For any queries or modifications related to your airport transfer booking, please contact us at 
                <a class="blue" href="mailto:customersuccess@mi-forums.com">
                    {" "}
                    customersuccess@mi-forums.com
                  </a>{" "}
                  </p>

                <br></br>
                <p>By proceding with the booking, you indicate that you have read, understood, and agreed to the terms outlined here.</p>
                <br></br>
                <br></br>
              </div>

              
            </div>
          </div>

    </>
  )
}

export default BookingForm