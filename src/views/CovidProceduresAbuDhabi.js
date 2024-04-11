import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/scss/style.scss';

const CovidProceduresAbuDhabi = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>covid procedures | m&i</title>
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
                                    m&i Europe Winter<br/>
                                    </span>{' '}
                                    2021 COVID-19 Procedures
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
                <div className='site-half block covidProcedures' style={{paddingBottom:"5em"}}>
                    <div className='container'>
                        <div className='row no-gutters center-content'>
                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <br />
                                <p>
                                Joining us at m&i Europe Winter, Abu Dhabi? On this webpage, we’ll be covering everything you need to know about COVID-19 at this Forum and our procedures in the event of any positive cases.

                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>What do I need to do before the event?</h3>
                                <p>

                                    <li>Abu Dhabi protocol states that all event attendance is restricted to fully vaccinated individuals only. This includesa single dose of the Johnson & Johnson vaccine or a double dose of all other vaccinations: You must be able toprovide evidence of two doses of a COVID-19 vaccination to enter Abu Dhabi.</li>
                                    <li>One week prior to your outbound flight, you must register your trip by logging into <a href='https://smartservices.ica.gov.ae/echannels/web/client/guest/index.html#/registerArrivals'>Smart Service.</a></li>
                                    <li>On arrival into Abu Dhabi, you will be required to show proof of a negative PCR test. This needs to be taken within 48hrs of departing your country of residence.</li>
                                    <li>You will also be required to take another PCR test on arrival, before leaving Abu Dhabi International airport. This will be organised by airport staff.</li>
                                    <li>Finally, you will need to download the <strong>AlHosn App:</strong></li>
                                    <ul><br/>
                                    <p><strong>Apple:</strong> <a href='https://apps.apple.com/us/app/alhosn-uae/id1505380329'>https://apps.apple.com/us/app/alhosn-uae/id1505380329</a></p>
                                            <p><strong>Android:</strong> <a href='https://play.google.com/store/apps/details?id=doh.health.shield&hl=en_GB&gl=US'>https://play.google.com/store/apps/details?id=doh.health.shield&hl=en_GB&gl=US</a></p><br />
                                        </ul>
                                    <p>You will be requested to show this app at all event venues, restaurants, and hotels. This App highlights your vaccination status as Green if you have had a double vaccination (or single J&J vaccination) and a valid PCR test.</p>
                                    <li>We recommend you pack a laptop or tablet in case any delegates are unexpectedly unable to attend their face-to-face meetings and virtual meetings are required.</li>
                                    <li>If you have a positive test result, feel unwell or have come into close contact with someone with COVID-19, please do not travel and inform our team as soon as possible.</li>
                                    <li>Remember to pack your face mask, it is mandatory to wear a mask on transport, enclosed public spaces and the meeting room. </li>



                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>What happens if I show symptoms or test positive for COVID-19 during the event?</h3>
                                <p>

                                    <li>In the event of a positive test result, we will follow instructions from the destination’s Health & Safety department. </li>
                                    <li>If you show symptoms or test positive for COVID-19 during the event, you will be required to self-isolate until a negative test result can be provided.
</li>
                                    <li>Testing service will be organised via the hotel and the local government authorities. We advise you to contact your travel insurance company for any unforeseen costs.</li>
                                    <li>Should you be required to self-isolate, and feel well enough to carry out your meetings, our dedicated tech team will transfer your face-to-face meetings to a virtual format. Therefore we strongly recommend you bring your own laptop or tablet to use in this instance.

</li>
                                    <li>As per our <a class='blue' href="https://www.mi-forums.com/covid-safe-events">COVID-safe policy</a> that you have accepted, you agree to release m&i, a division of Big Worldwide, from any and all liability for harm and expenses due to exposure to COVID-19.
</li>
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>What if there is a positive case of COVID-19 during the event?</h3>
                                <p>
                                    <li>Should an attendee test positive for COVID-19, we will follow instructions from the destination’s Health & Safety department and inform all attendees accordingly.

 </li>
                                    <li>If you are required to self isolate due to contact with someone who has tested positive, you will be able to conduct your meetings virtually and will need to use your own laptop or tablet.

</li>
                                    <li>Should you be required to self-isolate due to close contact with someone who has tested positive, you can stop isolating on producing a negative Covid test result.

</li>
                                    <li>If you are exposed to someone who has tested positive for COVID-19, there will be a dedicated first aid and testing service available at the hotel.
                                    </li>
                                    <li>Should you need to self isolate and make changes to your travel plans, we advise you to contact your travel insurance company.</li>
                                    <li>As per our <a class='blue' href="https://www.mi-forums.com/covid-safe-events">COVID-safe policy</a> that you have accepted, you agree to release m&i, a division of Big Worldwide, from any and all liability for harm and expenses due to exposure to COVID-19.</li>
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>What should I do if my travel and accommodation are affected by a positive COVID-19 result or exposure to COVID-19</h3>
                                <p>
                                    <li><strong>Buyers: </strong>As m&i has made the travel booking on your behalf, we will assist you with rebooking accommodation and travel if required. Please contact  <a
                                        class='blue'
                                        href='mailto:eventsupport@mi-forums.com'
                                    >
                                       eventsupport@mi-forums.com
                                    </a>{' '} for assistance.

                                    </li>
                                    <li><strong>Suppliers: </strong>As you have made your own travel bookings, you will need to contact your travel agency or airline for rebooking any flights. However, we will be able to assist with rebooking accommodation if required. Please contact <a
                                        class='blue'
                                        href='mailto:eventsupport@mi-forums.com'
                                    >
                                       eventsupport@mi-forums.com
                                    </a>{' '} for assistance.
</li>
                                </p>
                            </div>

                            <div className='col-lg-9 mr-lg-auto py-3'>
                                <h3>   Who can I contact if I’m unsure about COVID-19 procedures at this event?</h3>
                                <p>
                                    If you have any COVID related questions either before or during the event, or require assistance from a member of our team, please don’t hesitate to contact us by emailing <a
                                        class='blue'
                                        href='mailto:eventsupport@mi-forums.com'
                                    >
                                       eventsupport@mi-forums.com
                                    </a>{' '} or send a Whatsapp message to Charlotte on <a  class='blue' href="tel:07701287010">+44 (0) 7701 287 010 </a>
                                </p>
                            </div>










                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CovidProceduresAbuDhabi;
