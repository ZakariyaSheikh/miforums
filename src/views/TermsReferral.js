import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/scss/style.scss';
import TopHalf from '../assets/images/terms-header.svg';
import ReferenceShape from '../assets/images/reference_shape.svg';
import RewardsShape from '../assets/images/rewards_shape.svg';

const TermsReferral = () => {
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
                        <div className='row no-gutters justify-content-center'>
                            <div className='col-lg-9 ml-rg-auto py-3'>
                                <h2 className='contact-hero'>
                                    <h1> Terms and Conditions</h1>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-6 text-center mb-3 mb-md-0'>
                           
                        </div>
                    </div>
                </div>
                <div className='site-half block' style={{paddingBottom:"5em"}}>
                    <div className='container'>
                        <div className='row no-gutters center-content'>
                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <br />
                               
                                <ol>
                                <li>The m&i referral scheme is open to existing, returning and non m&i clients.</li>
                                <br></br>

                                <li>To make a valid referral, you must complete the online form at: <a target="_blank" href="https://www.mi-forums.com/referral-programme">https://www.mi-forums.com/referral-programme</a>. </li>
                                <br></br>

                                <li>Referrals will only be eligible if the referred company is not already in conversation with m&i via other direct channels.</li>
                                <br></br>

                                <li>There is only one reward for each Referred company/organisation referred. m&i will notify the Referrer if the Referred company/organisation has previously been referred.</li>
                                <br></br>

                                <li>If a Referred company is sent by multiple Referrers, whichever Referrer submitted the referral first will be deemed as the Referrer.</li>
                                <br></br>

                                <li>Referrals will be deemed as ineligible if an existing client refers their own company.</li>
                                <br></br>

                                <li>To constitute a successful referral, the referred business must confirm their attendance to at least one m&i forum (hosted buyers) or confirm and pay for at least one full table or equivalent (suppliers).</li>
                                <br></br>

                                <li>If the referred business qualifies as a hosted buyer and fulfils the referral criteria, the referrer will receive a £100 Gift Card or £100 of Forum attendance related credit per successful referral. If the referred business qualifies as a supplier and fulfils the referral criteria, the referrer and the referee will both receive £500 of Forum attendance related credit per referral.</li>
                                <br></br>

                                <li>There is no limit to the number of businesses a referrer can refer in our m&i referral scheme.</li>
                                <br></br>

                                <li>The Referrer may be named in communication between m&i and the Referred business.</li>
                                <br></br>

                                <li>The Gift Card and/or attendance credit will only be issued for valid referrals, once the new client has confirmed participation to an event (hosted buyers) or paid for their invoice (suppliers).</li>
                                <br></br>

                                <li>The Gift Card and/or attendance credit will be issued within 90 days of the referred company fulfilling their relevant referral criteria.</li>
                                <br></br>

                                <li>Gift cards/attendance credit must be used within 12 months of being issued.</li>
                                <br></br>

                                <li>In the event of any disputes regarding any Referred company/organisation, the decision of m&i is final.</li>
                                <br></br>

                                <li>Gift card rewards from this scheme should be declared in your annual tax return or declared as a benefit in kind.</li>
                                <br></br>

                                <li>In the event of a Referrer not receiving a referral fee, a claim must be raised for consideration to <a href="mailto:referrals@mi-forums.com">referrals@mi-forums.com</a> within 90 days of the referral form submission. Any claims made after 90 days will not be eligible for a Referral fee.</li>
                                <br></br>

                                <li>If you require any further information regarding the m&i referral scheme, please email <a href="mailto:referrals@mi-forums.com">referrals@mi-forums.com</a>. </li>
                                <br></br>
                                </ol>


                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsReferral;