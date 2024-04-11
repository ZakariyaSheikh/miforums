import React from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import TopHalf from "../assets/images/terms-header.svg"
import ReferenceShape from "../assets/images/reference_shape.svg"
import RewardsShape from "../assets/images/rewards_shape.svg"
import SuppliersShape from "../assets/images/suppliers_shape.svg"
import OrganiseShape from "../assets/images/organise_shape.svg"
import PrivacyShape from "../assets/images/privacy_shape.svg"

const Terms = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>T&Cs | m&i</title>
        <meta
          name="description"
          content="The fine print part. Here's everything you need to know about attending an m&i networking event."
        />
         <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_TCs.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_TCs.png"} />
      </Helmet>
      <div className="site-wrap">
        <div className="terms-hero-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="contact-hero">
                  terms & conditions.
                  <br />
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center mb-3 mb-md-0">
              <img src={TopHalf} alt={"banner"} className={"terms-top-shape"} />
            </div>
          </div>
        </div>
        <div className="site-half block">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-9 mr-lg-auto py-3">
                <h2 class="blue-underlined">buyers</h2>
                <br />
                <h3>how it works</h3>
                <p>
                  m&i invites hosted buyers to attend our in-person, hybrid or
                  digital events. Once you are confirmed to attend one of our
                  events, either virtual or in-person, we take care of
                  everything for you, including flights and transfers to and
                  from the destination, accommodation, networking sessions,
                  meetings, cocktail receptions, exciting evenings and more. We
                  also have fantastic prizes to be won at each event.
                  <br />
                  <br />
                  By submitting your m&i Buyer Profile, you are agreeing to the
                  terms & conditions of m&i (the organiser) as set out below:
                </p>
              </div>
              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>data handling & protection</h3>
                <p>
                  By entering your details on your m&i Buyer Profile, (provided
                  that you are accepted onto the event), you agree to allow m&i
                  to electronically retain your business data, contact details &
                  personal information within our database, as well as
                  publishing your company profile on our digital networking
                  platform. Your contact details will not be displayed on the
                  platform; however, they will be shared with the suppliers you
                  have a meeting with at the event, so they can follow up.
                  <br />
                  <br />
                  This is a condition of attendance for all in-person, hybrid
                  and digital events. Should you not agree to this for any
                  reason, please write to{" "}
                  <a class="blue" href="mailto:infobuyers@mi-forums.com">
                    infobuyers@mi-forums.com.
                  </a>{" "}
                  Furthermore, your company name/logo may be used on our
                  website/s for information purposes only. No contact or
                  business information will be displayed on these websites.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <div className="img-bg-1 desktop">
                  <img
                    alt={" "}
                    src={ReferenceShape}
                    className="referenceShape"
                  ></img>
                </div>
                <h3>reference checking</h3>
                <p>
                  In most cases, it is necessary to check one or all of the
                  business references you provide via your m&i Buyer Profile.
                  This is to ensure the high standard of the buyer community
                  attending any of our events and to validate your participation
                  with the suppliers present. If you do not agree with this,
                  please contact us at
                  <a class="blue" href="mailto:infobuyers@mi-forums.com">
                    {" "}
                    infobuyers@mi-forums.com,
                  </a>{" "}
                  as we will need to seek an alternative method of reference
                  checking from you, which will be subject to m&i’s approval.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>travel and accommodation</h3>
                <p>
                  If you are attending an in-person event, your flights,
                  transfers to/from the airport where the event is due to take
                  place and accommodation will be provided by m&i during the
                  event dates. It is your responsibility to ensure that you can
                  travel on the dates you have selected and that you have the
                  necessary and valid travel documentation (passport, visas if
                  applicable). Travel to and from your local airport is not
                  included and will not be reimbursed.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>applications and cancellation policy</h3>
                <p>
                  Acceptance of your application will be confirmed by email. m&i
                  reserves the right to decline your application without reason,
                  although our Buyer Relations Team would normally communicate
                  honestly and directly on why any application for certain
                  event(s) may not be appropriate.
                </p>
                <br />
                <p>
                  As a participating buyer, you agree to undertake your provided
                  set of supplier meetings and any departure from the published
                  schedule will require the prior consent of m&i. Unilateral
                  decisions or non/participation in supplier meetings at any
                  time prior or during the event may result in cancellation of
                  your participation or the cancellation of your company’s
                  attendance at future in-person, hybrid or digital events
                  hosted by m&i.{" "}
                </p>
                <br />
                <p>
                  If you attend an in-person or hybrid event, such cancellations
                  may also entail financial implications for which you would be
                  held responsible. You will be liable to pay the cancellation
                  fee of 500 Euros for European events or 700 US dollars for
                  American events. For digital events, you will be liable to pay
                  the cancellation fee of 250 Euros or 300 US dollars.
                </p>{" "}
                <br />
                <p>
                  The only exception to this will be if you can find a suitable
                  replacement, subject to m&i's approval. In this instance, if
                  you attend an in-person event you may be charged the cost for
                  the replacement delegate's flight or, when possible, the name
                  change fee on your original flight ticket. It is advisable to
                  purchase travel insurance against cancellation for unforeseen
                  circumstances.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>event format & content</h3>
                <p>
                  When available, the format and content of the events will be
                  displayed on our website.
                </p>
                <br />
                <p>
                  We reserve the right to make changes to the event format and
                  content. Should the event format change from in-person to
                  hybrid or in-person to digital, your attendance will remain
                  unchanged and you will still be committed to attend all your
                  meetings.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <img
                  alt={" "}
                  src={RewardsShape}
                  className="rewardsShape"
                ></img>
                <h3>rewards programme</h3>
                <p>
                  Occasionally, m&i will offer rewards and incentives in the
                  form of travel vouchers to eligible participating buyers.
                  Travel vouchers are nominative and non-transferable. Rewards
                  such as travel vouchers are redeemed by fully participating in
                  our in-person, hybrid or digital events. This includes
                  attendance to your full set of supplier meetings, and any
                  educational or social activities that you are committed to.
                  Failure to attend these sessions will result in the
                  cancellation of your rewards programme. m&i also reserves the
                  right to revoke your participation in the rewards programme
                  for inappropriate behaviour or any other such reason raised by
                  the m&i community.
                </p>
                <br />
                <p>
                  These travel vouchers shall be redeemed exclusively through
                  our dedicated travel management company, CT Business Travel,
                  who will contact you directly once our Buyer Relations Team
                  confirms you are eligible for the rewards programme. Vouchers
                  need to be redeemed via a single transaction and can be used
                  for either flight or hotel bookings and must be redeemed
                  within 18 months of issue.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>in-person event venue and digital platform</h3>
                <p>
                  You acknowledge that we may have to change the published venue
                  for the event where it is an in-person event, or the published
                  delivery platform where it is a digital event, for reasons
                  beyond our control and in such cases, you will not be entitled
                  to cancel.
                </p>
                <br />
                <p>
                  You are liable for any loss or damage which you may cause to
                  an event venue and agree to adhere to all housekeeping rules,
                  procedures and policies (including policies as to behaviour
                  and conduct) that may be in place at any venue.
                </p>
                <br />
                <p>
                  If you have a disability or medical condition that requires
                  special arrangements to be made, please notify us of your
                  requirements when registering.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>publicity</h3>
                <p>
                  We may use photographs and videos taken at events for
                  publicity and marketing materials, including use on our
                  website(s). Your attendance at an event means that you may be
                  featured in such photographs and videos, and that you are not
                  deemed to object to the taking of such photographs and video
                  footage as detailed above. If you do not wish to be included
                  in any photographs or videos, please notify the photographer
                  and videographer at the relevant event prior to the footage
                  being taken.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>rights in materials</h3>
                <p>
                  All copyright and other rights (including all intellectual
                  property rights) in materials provided to you during or for
                  the purposes of any of our events (including, without
                  limitation, notes, slides, brochures, articles or case
                  studies) are m&i’s property or that of our licensors. You are
                  entitled to use such materials only for your own personal use.
                  You are not entitled to copy such materials (except as
                  permitted by law) nor are you entitled to use or authorise
                  others to use such materials for any commercial purposes.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>liability</h3>
                <p>
                  Event attendees shall be required to keep their personal
                  belongings with them at all times. We accept no liability for
                  damage to, or loss of any of your property that you bring to
                  an event.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>event cancellation</h3>
                <p>
                  In the case of event cancellation, the organiser will not be
                  liable for any consequential damages or costs incurred as a
                  result of such cancellation.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>events outside our control</h3>
                <p>
                  We will not be liable or responsible for any failure to
                  perform, or delay in performance that is caused by events
                  outside Our reasonable control ("Force Majeure Event") which
                  includes any act, event, non-happening, omission or accident
                  beyond our reasonable control and includes in particular
                  (without limitation): strikes, lock-outs or other industrial
                  action; civil commotion, riot, invasion, terrorist attack or
                  threat of terrorist attack, war (whether declared or not) or
                  threat or preparation for war; fire, explosion, storm, flood,
                  earthquake, subsidence, epidemic or other natural disaster;
                  impossibility of the use of railways, shipping, aircraft,
                  motor transport or other means of public or private transport;
                  and/or the acts, decrees, legislation, regulations or
                  restrictions of any government.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>privacy policy</h3>
                <p>
                  m&i is registered under the Data Protection Act. Worldwide Events Group Limited is required to process relevant personal data regarding
                  members of staff, event delegates (buyers and suppliers in
                  this case) and customers as part of its operation and shall
                  take all reasonable steps to do so in accordance with this
                  Policy. The Freedom of Information Act 2000 and the Protection
                  of Freedoms Act 2012 are also relevant to parts of this
                  policy. To learn more, please view our privacy policy in full{" "}
                  <a
                    class="blue"
                    href="https://www.wwideevents.com/privacy-policy.html"
                  >
                    here.
                  </a>
                </p>
              </div>

              <br />
              <div className="col-lg-9 mr-lg-auto py-3">
                <h2 class="coral-underlined">suppliers</h2>
                <br />

                <h2>what does your attendance fee include?</h2>
                <br />
                <br />
                <h3>your presentation table</h3>

                <p>
                  Tables are provided, complete with a personalised table sign
                  and standard stationary. Please note, table sharers will be
                  provided with one table between two independent suppliers.
                </p>
                <br />
                <h3>your personalised meetings schedule</h3>
                <img
                  alt={" "}
                  src={SuppliersShape}
                  className="referenceShape"
                ></img>
                <p>
                  Your meetings schedule will be available to view approx. one
                  week before the event takes place. At this point, you will
                  have the opportunity to highlight any major issues with our
                  team.
                </p>
                <br />
                <h3>wi-fi at the host venue</h3>
                <p>
                  Wi-fi will be provided to all attendees, but we recommend
                  having as much of your presentation available offline as
                  possible, to prevent disruption in the unlikely event of
                  internet outage.
                </p>
                <br />
                <h3>scheduled breaks</h3>
                <p>
                  Regular refreshment breaks will be scheduled throughout
                  meetings, which will include snacks and drinks.
                </p>
                <br />

                <h3>networking lunches and evenings</h3>
                <p>
                  If you have any specific dietary requirements, you will always
                  have the opportunity to declare them in advance.
                </p>
                <br />

                <h3>networking activities</h3>
                <p>
                  All professional equipment required for activities will be
                  provided on site. In some instances, we may recommend you
                  bring certain items of clothing or footwear for your own
                  comfort during activities (e.g. warm hats and gloves for
                  outdoor activities in colder climates).
                </p>
                <br />
              </div>

              <div className="col-lg-9 mr-lg-auto padding-bottom">
                <br />
                <h2>here’s what you need to organise</h2>
                <br />
                <br />
                <h3>your travel </h3>
                <img
                  alt={" "}
                  src={OrganiseShape}
                  className="rewardsShape"
                ></img>
                <p>
                  Suppliers are responsible for organising their own travel to
                  and from the host venue, including flights and transfers. Some
                  of our events may include free transfers. These will be
                  communicated to attending suppliers in due course.
                </p>
                <br />
                <h3>your accommodation</h3>
                <p>
                  As networking lunches and evenings are included in the event
                  package price, suppliers are only required to book
                  accommodation on a B&B (Bed & Breakfast) basis. We strongly
                  recommend booking your stay with the host venue, as this will
                  provide additional networking opportunities and will often
                  include a reduced rate for the duration of the event.
                </p>
                <br />
                <h3>your presentation</h3>
                <p>
                  Please ensure you bring your own presentation devices
                  (laptops, tablets etc.) with the correct power cables and
                  international socket adapters if needed.
                </p>
                <br />
                <br />
                <h2>other</h2>
                <br />
                <br />
                <h3>publicity</h3>
                <p>
                  We may use photographs and videos taken at events for
                  publicity and marketing materials, including use on our
                  website(s). Your attendance at an event means that you may be
                  featured in such photographs and videos, and that you are not
                  deemed to object to the taking of such photographs and video
                  footage as detailed above. If you do not wish to be included
                  in any photographs or videos, please notify the photographer
                  and videographer at the relevant event prior to the footage
                  being taken.
                </p>
                <p>Rights in materials</p>
                <br />
                <p>
                  All copyright and other rights (including all intellectual
                  property rights) in materials provided to you during or for
                  the purposes of any of our events (including, without
                  limitation, notes, slides, brochures, articles or case
                  studies) are m&i’s property or that of our licensors. You are
                  entitled to use such materials only for your own personal use.
                  You are not entitled to copy such materials (except as
                  permitted by law) nor are you entitled to use or authorise
                  others to use such materials for any commercial purposes.
                </p>
                <br />

                <h3>liability</h3>
                <p>
                  Event attendees shall be required to keep their personal
                  belongings with them at all times. We accept no liability for
                  damage to, or loss of any of your property that you bring to
                  an event.
                </p>
                <br />

                <h3>privacy policy</h3>
                <p>
                  m&i is registered under the Data Protection Act. Worldwide Events Group Limited is required to process relevant personal data regarding
                  members of staff, event delegates (buyers and suppliers in
                  this case) and customers as part of its operation and shall
                  take all reasonable steps to do so in accordance with this
                  Policy. The Freedom of Information Act 2000 and the Protection
                  of Freedoms Act 2012 are also relevant to parts of this
                  policy. To learn more, please view our privacy policy in full{" "}
                  <a
                    class="blue"
                    href="https://www.wwideevents.com/privacy-policy.html"
                  >
                    here.
                  </a>
                </p>
                <img
                  alt={" "}
                  src={PrivacyShape}
                  className="rewardsShape"
                ></img>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terms
