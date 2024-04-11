import React from "react"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"
import TopHalf from "../assets/images/terms-header.svg"
import ReferenceShape from "../assets/images/reference_shape.svg"
import RewardsShape from "../assets/images/rewards_shape.svg"

const TermsSuppliers = () => {
  return (
    <>
        <Helmet>
                <meta charSet='utf-8' />
                <title>T&Cs | m&i</title>
                <meta
                    name='description'
                    content="The fine print part. Here's everything you need to know about attending an m&i networking event."
                />
            </Helmet>
      <div className="site-wrap">
        <div className="terms-hero-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="contact-hero">
                  <span className="coral-underlined">supplier</span> terms{" "}
                  <br />& conditions.
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

        <div className="site-half block terms">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-9 mr-lg-auto py-3">
                <br />
                <br />
                <h3>1. general</h3>
                <p>
                  These are the terms and conditions on which we, Worldwide Events Group Limited doing business as Worldwide Events and/or m&i and/or
                  M&I Forums and/or Meeting & Incentive Forums ("We", "Us",
                  “Our"), enable you ("You", "Your") to make a booking in
                  respect of Our in-person event and digital event products
                  (hereinafter referred to as Our “Events”). Please read these
                  terms and conditions carefully before booking to attend Our
                  Events. You should understand that by booking to attend our
                  Events, You agree to be bound by these terms and conditions.
                  <br />
                  <br />
                  You should retain a copy of these terms and conditions for
                  future reference.
                  <br />
                  <br />
                  Please understand that if You refuse to accept these terms and
                  conditions, You will not be able to book or attend Our Events.
                  <br />
                  <br />
                  No terms or conditions endorsed on, delivered with or
                  contained in Your booking request, purchase order,
                  confirmation of order, specification or other document shall
                  form part of the Contract (as defined below).
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>2. information about us </h3>
                <p>
                  We are a company registered in England, with registered office
                  address 27 Furnival St, London EC4A 1JQ and registered
                  company number 3210436.
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
                <h3>3. how the contract is formed between you and us </h3>
                <p>
                  Should You wish to make a booking, You can do so online (for
                  our digital event products) or by filling and signing a copy
                  of Our Agreement for Participation (booking request form) and
                  returning it to your account manager, or email a copy to{" "}
                  <a class="blue" href="mailto:hkashema@mi-forums.com">
                    {" "}
                    hkashema@mi-forums.com,
                  </a>{" "}
                  . Note that receipt by Us of Your booking request form does
                  not mean that Your booking has been accepted and, in
                  particular, We accept no responsibility for booking requests
                  that do not reach Us for whatever reason. Your booking request
                  constitutes an offer to Us to secure a place at one of Our
                  Events. All bookings are subject to availability of the Event
                  and formal acceptance by Us, and We will confirm such
                  acceptance to You by sending You a letter or email stating
                  that the booking has been confirmed (the{" "}
                  <strong>"Booking Confirmation").</strong> The contract between
                  Us <strong>("Contract")</strong> will only be formed when We
                  send You the Booking Confirmation.
                  <br />
                  <br />
                  The Contract will relate only to those Events which We have
                  confirmed in the Booking Confirmation.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>4. event format and content</h3>
                <p>
                  When available, the format and content of the Events will be
                  displayed on our website.
                </p>
                <br />
                <p>
                  We reserve the right to make changes to the Event format and
                  content; should the Event format change from in-person to
                  hybrid or in-person to digital, participation fees will be
                  adjusted by a ratio confirmed with your account manager.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>5. event venue and digital platform</h3>
                <p>
                  You acknowledge that We may have to change the published venue
                  for the Event where it is an in-person event, or the published
                  delivery platform where it is a digital event, for reasons
                  beyond Our control and in such cases, You will not be entitled
                  to cancel.
                </p>
                <br />
                <p>
                  You are liable for any loss or damage which You may cause to
                  an Event venue and agree to adhere to all housekeeping rules,
                  procedures and policies (including policies as to behaviour
                  and conduct) that may be in place at any venue.
                </p>
                <br />
                <p>
                  If You have a disability or medical condition that requires
                  special arrangements to be made, please notify Us of Your
                  requirements when making Your booking.
                </p>{" "}
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>6. price and payment </h3>
                <p>
                  The price of any of Our Events (the <strong>“Price”</strong>)
                  will be as quoted on Our Website from time to time, except in
                  cases of obvious error. Unless otherwise stated the Price is
                  in Pound Sterling and is net of VAT and other local taxes (VAT
                  remains applicable in the United Kingdom).
                </p>
                <br />
                <p>
                  The Price is liable to change at any time, but changes will
                  not affect bookings in respect of which We have already sent
                  You a Booking Confirmation, except in cases of obvious error.
                </p>
                <br />
                <p>
                  If a booking request is made within 56 days of the date of the
                  Event to which the booking request relates, payment of the
                  Price shall be due immediately and should be made with the
                  booking request.
                </p>
                <br />
                <p>
                  If a booking request is made more than 56 days from the date
                  of the Event to which the booking request relates, We shall
                  send you an invoice with Your Booking Confirmation and payment
                  of the Price shall be due within 14 days of the date of such
                  invoice.
                </p>
                <br />
                <p>
                  Time shall be of the essence in respect of payment
                  obligations.
                </p>
                <br />
                <p>
                  No payment shall be deemed to have been received until We have
                  received cleared funds.
                </p>
                <br />
                <p>
                  All payments payable to Us under the Contract shall become due
                  immediately on its termination despite any other provision.
                </p>
                <br />
                <p>
                  You shall make all payments due under the Contract in full
                  without any deduction whether by way of set-off, counterclaim,
                  discount, abatement or otherwise.
                </p>
                <br />
                <p>
                  If You fail to pay Us any sum due pursuant to the Contract,
                  You shall be liable to pay interest to Us on such sum from the
                  due date for payment at the annual rate of 4% above the base
                  lending rate of The Bank of England, accruing on a daily basis
                  until payment is made, whether before or after any judgement.
                  We reserve the right to claim interest under the Late Payment
                  of Commercial Debts (Interest) Act 1998.
                </p>
                <br />
                <p>
                  If You enter into a booking which is on a shared table basis,
                  You shall be responsible to find a partner to share Your table
                  with. In the event that You fail to find a partner, Your
                  original booking shall be upgraded to a full table and You
                  shall be liable to pay the rate difference.
                </p>
                <br />
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <img
                  alt={" "}
                  src={RewardsShape}
                  className="rewardsShape"
                ></img>
                <h3>7. cancellation and refunds</h3>
                <p>
                  Upon signature or electronic signature of the contract, Your
                  booking is then confirmed and definitive. No cancellation
                  shall be allowed. Each booking is Event specific and shall not
                  be transferred to another Event without our knowledge and
                  written consent. For the avoidance of doubt, no refund shall
                  be payable.
                </p>
                <br />
                <p>
                  We shall be entitled to cancel Your booking where we need to
                  do so for Our operational or commercial reasons. Where we
                  cancel an Event for our operational or commercial reasons, We
                  shall have no liability for costs which You may incur due to
                  such cancellation but We shall offer You an alternative Event
                  if one is available, or where no alternative Event is
                  available, offer you credit valid for 24 months. Where we
                  cancel Your participation in an Event for our operational or
                  commercial reasons, and the Event itself goes ahead, We shall
                  have no liability for losses or costs which You may incur due
                  to such cancellation but We shall offer You a choice between
                  an alternative Event, if one is available, or a refund of Your
                  booking payment.
                </p>
                <br />
                <p>
                  If We are making a refund to You, We will usually refund any
                  money received from You using the same method originally used
                  by You to pay for Your purchase but reserve the right to
                  refund using an alternative method.{" "}
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>8. rights in materials</h3>
                <p>
                  All copyright and other rights (including all intellectual
                  property rights) in materials provided to You during or for
                  the purposes of any of Our Events (including, without
                  limitation, notes, slides, brochures, articles or case
                  studies) are Our property or that of our licensors. You are
                  entitled to use such materials only for Your own personal use.
                  You are not entitled to copy such materials (except as
                  permitted by law) nor are You entitled to use or authorise
                  others to use such materials for any commercial purposes.
                  Please note that materials (if any) shall only be made
                  available to You on the day of the relevant Event.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>9. our liability</h3>
                <p>
                  The following provisions set out Our entire financial
                  liability arising out of or in connection with a Contract.
                </p>
                <br /><div style={{fontSize:"18px"}}>
                <strong>
                  Nothing in these Terms and Conditions excludes or limits our
                  liability:
                </strong><br/>
                <br />
                <li>
                  for death or personal injury caused by the Our negligence; or
                </li>
                <li>under section 2(3), Consumer Protection Act 1987; or</li>
                <li>
                  for any matter which it would be illegal for Us to exclude or
                  attempt to exclude Our liability; or
                </li>
                <li>for fraud or fraudulent misrepresentation.</li></div>
                <br />
<p>
                  We shall not be liable to You for loss of profit, loss of
                  business, or depletion of goodwill in each case whether
                  direct, indirect or consequential, or any claims for
                  consequential compensation whatsoever (howsoever caused) which
                  arise out of or in connection with the Contract.
</p><br/><p>
                  All warranties, conditions and other terms implied by statute
                  or common law are, to the fullest extent permitted by law,
                  excluded from the Contract.
                </p><br/>
                <p>
                  Event attendees shall be required to keep their personal
                  belongings with them at all times and subject to condition
                </p><br/>
                <p>
                  We accept no liability for damage to, or loss of any of Your
                  property that You bring to an Event.
                </p>
              </div>
              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>10. notices</h3>
                <p>All notices given by You to Us must be given to:</p>
                <br />
                <p>Worldwide Events Group Limited 27 Furnival St, London EC4A 1JQ</p>
                <br />
                <p>
                  email:{" "}
                  <a class="blue" href="mailto:accounts@wwideevents.com">
                    accounts@wwideevents.com
                  </a>
                </p>
                <br />
                <p>
                  We may give notice to You at either the e-mail or postal
                  address You provide to Us when making a booking, or in any of
                  the ways specified in the written communications paragraph
                  above. Notice will be deemed received and properly served 24
                  hours after an e-mail is sent, or three days after the date of
                  posting of any letter. In proving the service of any notice,
                  it will be sufficient to prove, in the case of a letter, that
                  such letter was properly addressed, stamped and placed in the
                  post and, in the case of an e-mail that such e-mail was sent
                  to the specified e-mail address of the addressee.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>11. publicity</h3>
                <p>
                  We may use photographs and videos taken at Events for
                  publicity and marketing materials, including use on Our
                  website. Your attendance at an Event means that You may be
                  featured in such photographs and videos, and that You are not
                  deemed to object to the taking of such photographs and video
                  footage as detailed above. If You do not wish to be included
                  in any photograph or video, please notify the photographer and
                  videographer at the relevant Event prior to the footage being
                  taken.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>12. data and communications</h3>
                <p>
                  Your confirmed booking means You agree to participate in
                  sharing Your business information with Event attendees for the
                  purpose of business networking. Your contact and business
                  information is managed through Our matchmaking user software
                  from Our AI technology partners. This tool is how We
                  communicate any operational information about the Event and
                  includes important programme and preference information. Your
                  attendance at an Event means that You agree to create a
                  profile which, is accessible and editable. No contact
                  information listed in this contract other than the Main Point
                  of Contact may be provided to contracted 3rd parties and event
                  partners.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>13. transfer of rights and obligations</h3>
                <p>
                  The Contract is binding on You and Us and on our respective
                  successors and assigns.
                </p>
                <br />
                <p>
                  You may not transfer, assign, charge or otherwise dispose of a
                  Contract, or any of Your rights or obligations arising under
                  it, without Our prior written consent. We may transfer,
                  assign, charge, sub-contract or otherwise dispose of a
                  Contract, or any of Our rights or obligations arising under
                  it, at any time during the term of the Contract providing that
                  we give you sufficient warning.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>14. events outside our control</h3>
                <p>
                  We will not be liable or responsible for any failure to
                  perform, or delay in performance of, any of Our obligations
                  under a Contract that is caused by events outside Our
                  reasonable control (<strong>"Force Majeure Event"</strong>)
                  which includes any act, event, non-happening, omission or
                  accident beyond Our reasonable control and includes in
                  particular (without limitation): strikes, lock-outs or other
                  industrial action; civil commotion, riot, invasion, terrorist
                  attack or threat of terrorist attack, war (whether declared or
                  not) or threat or preparation for war; fire, explosion, storm,
                  flood, earthquake, subsidence, epidemic or other natural
                  disaster; impossibility of the use of railways, shipping,
                  aircraft, motor transport or other means of public or private
                  transport; and/or the acts, decrees, legislation, regulations
                  or restrictions of any government.
                </p>
                <br />
                <p>
                  Our performance under any Contract is deemed to be suspended
                  for the period that the Force Majeure Event continues, and We
                  will have an extension of time for performance for the
                  duration of that period and a period after it has ended of a
                  reasonably practicable length giving due consideration to the
                  timescales required to schedule Our Events. For the avoidance
                  of doubt, We shall have no obligation to refund fees already
                  paid to Us where We have been unable to perform Our
                  obligations due to a Force Majeure Event. We will use Our
                  reasonable endeavours to bring the Force Majeure Event to a
                  close or to find a solution by which Our obligations under the
                  Contract may be performed despite the Force Majeure Event.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>15. waiver</h3>
                <p>
                  If We fail, at any time during the term of a Contract, to
                  insist upon strict performance of any of Your obligations
                  under the Contract or any of these terms and conditions, or if
                  We fail to exercise any of the rights or remedies to which We
                  are entitled under the Contract, this shall not constitute a
                  waiver of such rights or remedies and shall not relieve You
                  from compliance with such obligations. A waiver by Us of any
                  default shall not constitute a waiver of any subsequent
                  default.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>16. severability</h3>
                <p>
                  If any of these terms and conditions or any provisions of a
                  Contract are determined by any competent authority to be
                  invalid, unlawful or unenforceable to any extent, such term,
                  condition or provision will to that extent be severed from the
                  remaining terms, conditions and provisions which will continue
                  to be valid to the fullest extent permitted by law.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>17. entire agreement</h3>
                <p>
                  These terms and conditions and any document expressly referred
                  to in them represent the entire agreement between us in
                  relation to the subject matter of any Contract and supersede
                  any prior agreement, understanding or arrangement between us,
                  whether oral or in writing.
                </p>
                <br />
                <p>
                  We each acknowledge that, in entering into a Contract, neither
                  of us has relied on any representation, undertaking or promise
                  given by the other or be implied from anything said or written
                  in negotiations between us prior to such Contract except as
                  expressly stated in these terms and conditions.
                </p>
                <br />
                <p>
                  Neither of us shall have any remedy in respect of any untrue
                  statement made by the other, whether orally or in writing,
                  prior to the date of any Contract (unless such untrue
                  statement was made fraudulently) and the other party's only
                  remedy shall be for breach of contract as provided in these
                  terms and conditions.
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>18. our right to vary these terms and conditions </h3>
                <p>
                  We have the right to revise and amend these terms and
                  conditions from time to time to reflect changes in technology,
                  changes in payment methods, changes in relevant laws and
                  regulatory requirements and changes in Our system's
                  capabilities.
                </p>
                <br />
                <p>
                  You will be subject to the policies and terms and conditions
                  in force at the time that You place a booking with Us, unless
                  any change to those policies or these terms and conditions is
                  required to be made by law or governmental authority (in which
                  case it will apply to bookings previously made by You), or if
                  We notify You of the change to those policies or these terms
                  and conditions before We send You the Booking Confirmation (in
                  which case We have the right to assume that You have accepted
                  the change to the terms and conditions, unless You notify Us
                  to the contrary within seven working days of receipt by You of
                  the Booking Confirmation).
                </p>
              </div>

              <div className="col-lg-9 mr-lg-auto py-3">
                <h3>19. law and jurisdiction </h3>
                <p>
                  Contracts for the booking of Our Events will be governed by
                  the law of England and Wales. Any dispute arising from, or
                  related to, such Contracts shall be subject to the
                  non-exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div
                className="col-lg-9 mr-lg-auto py-3"
                style={{ marginBottom: "70px" }}
              >
                <h3>20. privacy policy </h3>
                <p>
                  m&i is registered under the Data Protection Act. Worldwide Events Group Limited is required to process relevant personal data regarding
                  members of staff, event delegates (buyers and suppliers) and
                  other customers as part of its operation and shall take all
                  reasonable steps to do so in accordance with this Policy. The
                  Freedom of Information Act 2000 and the Protection of Freedoms
                  Act 2012 are also relevant to parts of this policy. To learn
                  more, please view our privacy policy in full
                  <a
                    class="blue"
                    href="https://www.wwideevents.com/privacy-policy.html"
                  >
                    {" "}
                    here.
                  </a>{" "}
                </p>
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsSuppliers
