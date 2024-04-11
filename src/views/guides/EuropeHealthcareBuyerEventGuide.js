import React from 'react';
import { Helmet } from 'react-helmet';
import '../../assets/scss/style.scss';
import Accordion from "../../components/elements/Accordion";

const EuropeHealthcareBuyerEventGuide = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Europe Healthcare 2022 Buyer Event Guide | m&i</title>
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
                                <h2 className='guide-hero'>
                               welcome to your{' '}
                                    <span className='blue-underlined'>
                                    m&i <br/>Healthcare event guide.
                                    </span>{' '}
                                    <br />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-6 text-center mb-3 mb-md-0'>
                            <img
                                src={TopHalf}
                                alt={'banner'}
                                className={'terms-top-shape'}
                            />
                        </div>
                    </div>
                </div> */}
                <br/><br/>
                <div className='site-half block covidProcedures' style={{paddingBottom:"5em"}}>
                    <div className='container'>
                        <div className='row no-gutters center-content'>
                            {/* <div className='col-lg-9 mr-lg-auto py-3'>
                                <br />
                                <p>
                                Joining us at m&i Europe Autumn, Sibenik? On this webpage, we’ll be covering everything you need to know about COVID-19 at this Forum and our procedures in the event of any positive cases.

                                </p>
                            </div> */}

                            <div className='col-lg-9 mr-lg-auto py-3'>
                            <Accordion
        title="covid requirements"
                                    content="<p class='accordion__caption'>Before you attend m&i Healthcare 2022, please read and action the following COVID-19 requirements:</p><br/>
                                    As per m&i covid-safe policy, upon arrival at the event, you will be required to produce one of the following:
        <br/>
        <li>Vaccination Certificate (fully vaccinated, at least two doses) or; </li>
        <li>Recovery Certificate (proving you have recovered from a Covid-19 infection in the last 6 months) or; </li>
        <li>Negative Covid-19 test result taken no longer than 48 hours (PCR) or 24 hours (Antigen) prior to arrival at the event. Please be aware your negative Covid-19 test will only be valid for 48 hours (PCR) or 24 hours (Antigen). </li>
        <li>To ensure a smooth registration upon your arrival at the event, please send your proof of vaccination, recovery certificate, or negative Covid test to <a class='email' href='eventsupport@mi-forums.com'>eventsupport@mi-forums.com</a></li><br>
        Vaccination Certificates: keep in mind that a minimum of 14 days and a maximum of 270 days must have passed since your last dose. If your second dose was received more than 270 days ago, your Vaccination Certificate must show the date your booster dose was received. <br>

        <br/>
        <h5>Face masks</h5>
        <li>The use of a medical or FFP2 masks is required on public transport. </li>
        <br/>
        <h5>Our Covid-safe Policy</h5>
        <li>Before the event, you must read and accept the m&i Covid-safe Policy, which we have sent to you by email. If you have not received your personal link to accept the m&i Covid-safe Policy, please contact us <a class='email' href='customersuccess@mi-forums.com'>customersuccess@mi-forums.com</a>.</li>
        <li>Please note, this policy may not always reflect local or international guidelines, but as an international events organiser, we feel it’s our responsibility to protect both our attendees and those working on-site to reduce the risk of spreading COVID-19.</li>
        <br/>
        As regulations change frequently, we recommend checking restrictions that will apply to you. View the latest regulations <a href='https://apply.joinsherpa.com/travel-restrictions'>here.</a>"
                                />

                                <Accordion
        title="accommodation"
                                    content="
        <li>Your accommodation is booked for you at <a href='https://www.viennahouse.com/en/andels-berlin/the-hotel/overview.html'>Vienna House Andel’s Berlin hotel</a> </li>
        <li>Your default reservation is for a single occupancy room from 11th April 2022 to 13th April 2022.</li>
        <li>Please note, any additional services not agreed upon your confirmation for the event, as well as hotel incidentals, will be charged to you. All charges must be settled with the hotel upon departure.</li>
        "
                                />

                                <Accordion
        title="flights"
                                    content="
        <li>Your travel is booked for you via our travel partner, CT Business Travel. If you still have not completed your traveller profile, please click <a href='https://travelmanager.ctbusinesstravel.co.uk/wwe/registrations/836/'>here.</a></li>
        "
                                />

<Accordion
        title="transfers"
                                    content="
        <li>Airport Transfers are provided on official arrival and departure event dates.</li>
        <li>Look out for the team member with the m&i sign at Berlin Brandenburg airport on your arrival.</li>
        "
                                />

<Accordion
        title="your meetings"
                                    content="
        <li>Your meetings schedule is now available in the My Schedule tab on the <a href='https://web.wyred.travel/healthcare2022/app/home/network/schedule'>Wyred platform.</a>
 </li>
 <li>Download the Wyred app so you can access your meetings schedule from your mobile device. </li>
 <li><a href='https://apps.apple.com/gh/app/wyred/id1487628138'>Download from the Apple store</a></li>
 <li><a href='https://play.google.com/store/apps/details?id=at.intros.mandiforum&hl=en_GB&gl=US'>Download from the Android store</a></li>
        "
                                />

<Accordion
        title="activities"
                                    content="
        <li>Activity selection will open approximately 2 weeks before the event. We will be in touch with you to let you know when these are available. </li>
        "
                                />

<Accordion
        title="dress code / what to pack?"
                                    content="
        <li>Meetings: For us, comfort is key to doing high-quality business. At m&i events, we actively encourage a more informal dress code during meetings, so you can put all your focus into making great connections. If in doubt, smart casual is always a good option!</li>
        <li>Evenings: Smart casual</li>
        <li>Activities: Comfortable clothing and footwear (please refer to the activity descriptions for specific dress codes)</li>
        "
                                />

                                <Accordion
        title="help/contact us"
                                    content="
        <li>For questions about flights, transfers, accommodation, COVID-19 testing and guidelines, please contact <a class='email'  href='eventsupport@mi-forums.com'>eventsupport@mi-forums.com</a></li>
        <li>For questions regarding meetings or your Wyred account, please contact <a class='email'  href='eventsupport@mi-forums.com'>customersuccess@mi-forums.com</a></li>
        "
                                />



                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EuropeHealthcareBuyerEventGuide;
