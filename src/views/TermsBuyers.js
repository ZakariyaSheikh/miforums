import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/scss/style.scss';
import TopHalf from '../assets/images/terms-header.svg';
import ReferenceShape from '../assets/images/reference_shape.svg';
import RewardsShape from '../assets/images/rewards_shape.svg';

const TermsBuyers = () => {
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
            <div className='site-wrap'>
                <div className='terms-hero-slider'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-12 ml-rg-auto py-5'>
                                <h2 className='contact-hero'>
                                    <span className='blue-underlined'>
                                        buyer
                                    </span>{' '}
                                    terms <br />& conditions.
                                    <br />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-6 text-center mb-3 mb-md-0'>
                            <img
                                src={TopHalf}
                                alt={'banner'}
                                className={'terms-top-shape'}
                            />
                        </div>
                    </div>
                </div>
                <div className='site-half block' style={{paddingBottom:"5em"}}>
                    <div className='container'>
                        <div className='row no-gutters center-content'>
                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <br />
                                <p>
                                    m&i invites hosted buyers to attend our
                                    in-person, hybrid or digital events. Once
                                    you are confirmed to attend one of our
                                    events, we take care of everything for you,
                                    including flights and transfers to and from
                                    the destination, accommodation, networking
                                    sessions, meetings, cocktail receptions,
                                    exciting evenings and more. We also have
                                    fantastic prizes to be won at each event.
                                    <br />
                                    <br />
                                    By submitting your m&i Buyer Profile, you
                                    are agreeing to the terms & conditions of
                                    m&i (the organiser) as set out below:
                                </p>
                            </div>
                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>data handling & protection</h3>
                                <p>
                                    By entering your details on your m&i Buyer
                                    Profile, you agree to allow m&i to
                                    electronically retain your business data,
                                    contact details & personal information
                                    within our database, as well as publishing
                                    your company profile on our digital
                                    networking platform. Your contact details will not be displayed on the platform; however, they will be shared with local suppliers who are organising services for you in the destination and the suppliers you have a pre-scheduled meeting with at the event, so they can follow up.
                                    <br />
                                    <br />
                                    This is a condition of attendance for all
                                    in-person, hybrid and digital events. Should
                                    you not agree to this for any reason, please
                                    write to{' '}
                                    <a
                                        class='blue'
                                        href='mailto:infobuyers@mi-forums.com'
                                    >
                                        infobuyers@mi-forums.com.
                                    </a>{' '}
                                    Furthermore, your company name/logo may be
                                    used on our website/s for information
                                    purposes only. No contact or business
                                    information will be displayed on these
                                    websites.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <div className='img-bg-1 desktop'>
                                    <img
                                        alt={' '}
                                        src={ReferenceShape}
                                        className='referenceShape'
                                    ></img>
                                </div>
                                <h3>reference checking</h3>
                                <p>
                                    In most cases, it is necessary to check one
                                    or all of the business references you
                                    provide via your m&i Buyer Profile. This is
                                    to ensure the high standard of the buyer
                                    community attending any of our events and to
                                    validate your participation with the
                                    suppliers present. If you do not agree with
                                    this, please contact us at
                                    <a
                                        class='blue'
                                        href='mailto:infobuyers@mi-forums.com'
                                    >
                                        {' '}
                                        infobuyers@mi-forums.com,
                                    </a>{' '}
                                    as we will need to seek an alternative
                                    method of reference checking from you, which
                                    will be subject to m&i’s approval.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>travel and accommodation</h3>
                                <p>
                                    If you are attending an in-person event,
                                    your flights, transfers to/from the airport
                                    where the event is due to take place and
                                    accommodation will be provided by m&i during
                                    the event dates. It is your responsibility
                                    to ensure that you can travel on the dates
                                    you have selected and that you have the
                                    necessary and valid travel documentation
                                    (passport, visas if applicable). Travel to
                                    and from your local airport is not included
                                    and will not be reimbursed.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>applications and cancellation policy</h3>
                                <p>
                                    Acceptance of your application will be
                                    confirmed by email. m&i reserves the right
                                    to decline your application without reason,
                                    although our Buyer Relations Team would
                                    normally communicate honestly and directly
                                    on why any application for certain event(s)
                                    may not be appropriate.
                                </p>
                                <br />
                                <p>
                                    As a participating buyer, you agree to
                                    undertake your provided set of supplier
                                    meetings and any departure from the
                                    published schedule will require the prior
                                    consent of m&i. Unilateral decisions or
                                    non/participation in supplier meetings at
                                    any time prior or during the event may
                                    result in cancellation of your participation
                                    or the cancellation of your company’s
                                    attendance at future in-person, hybrid or
                                    digital events hosted by m&i.{' '}
                                </p>
                                <br />
                                <p>
                                    If you attend an in-person or hybrid event,
                                    such cancellations may also entail financial
                                    implications for which you would be held
                                    responsible. You will be liable to pay the
                                    cancellation fee of 500 Euros for European
                                    events or 700 US dollars for American
                                    events.
                                </p>{' '}
                                <br />
                                <p>
                                    If you attend a digital event, such
                                    cancellations may also entail financial
                                    implications for which you would be held
                                    responsible. You will be liable to pay the
                                    cancellation fee of 250 Euros for European
                                    events or 300 US dollars for American
                                    events. Your participation is governed by
                                    English law.
                                </p>{' '}
                                <br />
                                <p>
                                    The only exception to this will be if you
                                    can find a suitable replacement or attend
                                    your meetings virtually, subject to m&i's
                                    approval. In this instance, if you attend an
                                    in-person event you may be charged the cost
                                    for the replacement delegate's flight or,
                                    when possible, the name change fee on your
                                    original flight ticket. Please also note that appropriate travel insurance and any visa arrangements are your own responsibility.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>COVID-safe events
</h3>
                                <p>
                                At m&i events, we're committed to ensuring the safety of all attendees, event partners and staff on-site. For more information about how we're keeping you safe at our events, please read and familiarise yourself with our full <a href="https://www.mi-forums.com/covid-safe-events">COVID-19 policy</a> including delegate duties for event safety.

                                </p>
                                <br />
                                <p>
                                Please note that by signing up to and attending our events, you automatically accept the terms of our COVID-19 Policy.

                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>event format & content</h3>
                                <p>
                                    When available, the format and content of
                                    the events will be displayed on our website.
                                </p>
                                <br />
                                <p>
                                    We reserve the right to make changes to the
                                    event format and content. Should the event
                                    format change from in-person to hybrid or
                                    in-person to digital, your attendance will
                                    remain unchanged and you will still be
                                    committed to attend all your meetings.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <img
                                    alt={' '}
                                    src={RewardsShape}
                                    className='rewardsShape'
                                ></img>
                                <h3>rewards programme</h3>
                                <p>
                                    Occasionally, m&i will offer rewards and
                                    incentives in the form of travel vouchers to
                                    eligible participating buyers. Travel
                                    vouchers are nominative and
                                    non-transferable. Rewards such as travel
                                    vouchers are redeemed by fully participating
                                    in our in-person, hybrid or digital events.
                                    This includes attendance to your full set of
                                    supplier meetings and any educational or
                                    social activities that you are committed to.
                                    Failure to attend these sessions will result
                                    in the cancellation of your rewards
                                    programme. m&i also reserves the right to
                                    revoke your participation in the rewards
                                    programme for inappropriate behaviour or any
                                    other such reason raised by the m&i
                                    community.
                                </p>
                                <br />
                                <p>
                                    These travel vouchers shall be redeemed
                                    exclusively through our dedicated travel
                                    management company, CT Business Travel, who
                                    will contact you directly once our Buyer
                                    Relations Team confirms you are eligible for
                                    the rewards programme. Vouchers need to be
                                    redeemed via a single transaction and can be
                                    used for either flight or hotel bookings and
                                    must be redeemed within 18 months of issue.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>
                                    in-person event venue and digital platform
                                </h3>
                                <p>
                                    You acknowledge that we may have to change
                                    the published venue for the event where it
                                    is an in-person event, or the published
                                    delivery platform where it is a digital
                                    event, for reasons beyond our control and in
                                    such cases, you will not be entitled to
                                    cancel.
                                </p>
                                <br />
                                <p>
                                    You are liable for any loss or damage which
                                    you may cause to an event venue and agree to
                                    adhere to all housekeeping rules, procedures
                                    and policies (including policies as to
                                    behaviour and conduct) that may be in place
                                    at any venue.
                                </p>
                                <br />
                                <p>
                                    If you have a disability or medical
                                    condition that requires special arrangements
                                    to be made, please notify us of your
                                    requirements when registering.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>publicity</h3>
                                <p>
                                    We may use photographs and videos taken at
                                    events for publicity and marketing
                                    materials, including use on our website(s).
                                    Your attendance at an event means that you
                                    may be featured in such photographs and
                                    videos, and that you are not deemed to
                                    object to the taking of such photographs and
                                    video footage as detailed above. If you do
                                    not wish to be included in any photographs
                                    or videos, please notify the photographer
                                    and videographer at the relevant event prior
                                    to the footage being taken.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>rights in materials</h3>
                                <p>
                                    All copyright and other rights (including
                                    all intellectual property rights) in
                                    materials provided to you during or for the
                                    purposes of any of our events (including,
                                    without limitation, notes, slides,
                                    brochures, articles or case studies) are
                                    m&i’s property or that of our licensors. You
                                    are entitled to use such materials only for
                                    your own personal use. You are not entitled
                                    to copy such materials (except as permitted
                                    by law) nor are you entitled to use or
                                    authorise others to use such materials for
                                    any commercial purposes.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>liability</h3>
                                <p>
                                    Event attendees shall be required to keep
                                    their personal belongings with them at all
                                    times. We accept no liability for damage to,
                                    or loss of any of your property that you
                                    bring to an event.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>event cancellation</h3>
                                <p>
                                    In the case of event cancellation, the
                                    organiser will not be liable for any
                                    consequential damages or costs incurred as a
                                    result of such cancellation.
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>events outside our control</h3>
                                <p>
                                    We will not be liable or responsible for any
                                    failure to perform, or delay in performance
                                    that is caused by events outside Our
                                    reasonable control ("Force Majeure Event")
                                    which includes any act, event,
                                    non-happening, omission or accident beyond
                                    our reasonable control and includes in
                                    particular (without limitation): strikes,
                                    lock-outs or other industrial action; civil
                                    commotion, riot, invasion, terrorist attack
                                    or threat of terrorist attack, war (whether
                                    declared or not) or threat or preparation
                                    for war; fire, explosion, storm, flood,
                                    earthquake, subsidence, epidemic or other
                                    natural disaster; impossibility of the use
                                    of railways, shipping, aircraft, motor
                                    transport or other means of public or
                                    private transport; and/or the acts, decrees,
                                    legislation, regulations or restrictions of
                                    any government.
                                </p>
                            </div>

                            <div
                                className='col-lg-9 mr-lg-auto py-3'
                                style={{ paddingBottom: '75px' }}
                            >
                                <h3>privacy policy</h3>
                                <p>
                                    m&i is registered under the Data Protection
                                    Act. Worldwide Events Group Limited is required to
                                    process relevant personal data regarding
                                    members of staff, event delegates (buyers
                                    and suppliers in this case) and customers as
                                    part of its operation and shall take all
                                    reasonable steps to do so in accordance with
                                    this Policy. The Freedom of Information Act
                                    2000 and the Protection of Freedoms Act 2012
                                    are also relevant to parts of this policy.
                                    To learn more, please view our privacy
                                    policy in full{' '}
                                    <a
                                        class='blue'
                                        href='https://www.wwideevents.com/privacy-policy.html'
                                    >
                                        here.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsBuyers;
