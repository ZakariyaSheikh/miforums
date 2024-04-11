import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/private_europe/Event_Private_Europe_Hero_1920.png';
import HeroBanner1024 from '../assets/images/events/private_europe/Event_Private_Europe_Hero_1024.png';
import HeroBanner766 from '../assets/images/events/private_europe/Event_Private_Europe_Hero_766.png';
import HeroBanner320 from '../assets/images/events/private_europe/Event_Private_Europe_Hero_320.png';
import Itinerary from '../assets/images/events/private_europe/private_europe_2021_itinerary.png';
import Spotlight from '../assets/images/events/private_europe/private_europe_2021_spotlight.png';
import CaptionPeople from '../assets/images/events/americas_2021/conversational_characters.svg';
import MatlidPalace from '../assets/images/events/partner_logos/Matlid_Palace_Logo.jpg';
import MarriottBudapest from '../assets/images/events/partner_logos/MarriottBudapest.jpg';
import Budapest from '../assets/images/events/partner_logos/budapest.png';
import BUDRZ from '../assets/images/events/partner_logos/BUDRZ_RGB.jpg';
import HCBLogo from '../assets/images/events/partner_logos/hcb_logo.png';
import LiveBrandingLogo from '../assets/images/events/partner_logos/live_branding.png'
import MauriDMC from '../assets/images/events/partner_logos/MauriDMC.png'
import SpecialEffect from '../assets/images/events/partner_logos/Special_Effect.png'
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"

const PrivateEurope = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const heroBannerUrl =
        windowWidth <= 479
            ? HeroBanner320
            : windowWidth <= 768
            ? HeroBanner766
            : windowWidth <= 1024
            ? HeroBanner1024
            : HeroBanner1920;
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>m&i Private Europe 2021, Budapest | m&i</title>
                <meta
                    name='description'
                    content="Our 'no hard brands' specialist networking event is perfect for unique venues and small hotel groups. Sign up today."
                />
            </Helmet>
            <div className='site-wrap'>
                <div
                    className='seville-hero-slider mobileSeville'
                    style={{
                        backgroundImage: `url(${heroBannerUrl})`,
                        height: 'auto',
                        paddingBottom: ' 10%',
                    }}
                >
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-5 wyredleft mobileBanner'
                                style={{ color: '#131A33' }}
                            >
                                <h1 className='header-section-heading sevilleheader'>
                                    m&i{' '}
                                    <span className='blue-underlined'>
                                        Private <br />
                                        Europe 2021
                                    </span>
                                </h1>
                                <br />
                                <p style={{ fontSize: '25px' }}>
                                    31 august - 3 september
                                    <br />
                                    budapest, hungary
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='site-half block eventCaption'>
                    <div className='container'>
                        <div className='row no-gutters center-content'>
                            <div className='col-lg-8 mr-lg-auto'>
                                <p>
                                    Are you struggling to meet the right buyers
                                    for your boutique hotel? Does finding that
                                    ‘diamond in the rough’, full-of-character
                                    venue for your event feel a bit hopeless?
                                    m&i Private Europe is for you!
                                    <br />
                                    <br />
                                    Created specifically to connect
                                    out-of-the-box event planners with
                                    independent properties, away from the shadow
                                    of the hard hotel brands, m&i Private Europe
                                    is the ultimate MICE event for doing great
                                    business and meeting those challenging
                                    goals.
                                    <br />
                                    <br />
                                    Sound good? Don’t be shy, keep scrolling!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='numbers-section eventNumbers blue-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-4 laptop'
                                style={{ color: '#fff' }}
                            >
                                <div className='inNumbers'>
                                    <h2 className='site-section-heading font-secondary white'>
                                        <span className='blush-underlined'>
                                            m&i Private Europe
                                        </span>{' '}
                                        in numbers.
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers blush'>
                                                    3
                                                </h1>
                                                <p>exciting days</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers blush'>
                                                    40
                                                </h1>
                                                <p>meetings</p>
                                            </div>
                                        </li>
                                        <li>
                                            {' '}
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers blush'>
                                                    70
                                                </h1>
                                                <p>supplier tables</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers blush'>
                                                    80
                                                </h1>
                                                <p>UK & european buyers</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className='site-half block'
                    style={{ paddingBottom: '5rem' }}
                >
                    <div className='img-bg-1'>
                        {' '}
                        <img
                            alt={' '}
                            src={Spotlight}
                            className={'eventDestination'}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-6 ml-lg-auto py-5'>
                                <h2 className='site-section-heading font-secondary '>
                                    spotlight on{' '}
                                    <span className='blue-underlined'>
                                        budapest.
                                    </span>
                                </h2>
                                <p
                                    style={{ paddingRight: '80px' }}
                                    className='mobilePadding-2'
                                >
                                    Nothing beats the drama, history and
                                    extravagant architecture of Hungary’s
                                    capital city, Budapest. As well as being one
                                    of the food capitals of the world, Budapest
                                    is a highly popular destination for exciting
                                    nightlife and relaxation breaks (think
                                    bubbling hot springs and historic
                                    bathhouses). This vibrant city welcomes more
                                    than five million visitors every year and
                                    plays host to over 100 international
                                    conventions, making it the ideal location
                                    for Meetings & Events experts to discover.
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='event-venue blush-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-5 ml-lg-auto py-5 '>
                                <h3
                                    className='site-section-heading font-secondary '
                                    style={{ textDecoration: 'underline' }}
                                >
                                    meeting venue
                                </h3>
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.marriott.com/budhu'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        budapest <br />
                                        marriott hotel{' '}
                                    </a>
                                </h2>
                            </div>
                            <div className='col-lg-6 ml-lg-auto py-5 '>
                                <h3
                                    className='site-section-heading font-secondary '
                                    style={{ textDecoration: 'underline' }}
                                >
                                    accommodation venues
                                </h3>
                                <h2
                                    className='accommodation'
                                    style={{ lineHeight: '45px' }}
                                >
                                    <a
                                        className='venueLink'
                                        href='https://www.marriott.com/budhu'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        budapest <br />
                                        marriott hotel{' '}
                                    </a>
                                </h2>
                                <hr />
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.ritzcarlton.com/en/hotels/europe/budapest'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        ritz carlton budapest
                                    </a>
                                </h2>
                                <hr />
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.marriott.com/hotels/travel/budlc-matild-palace-a-luxury-collection-hotel-budapest/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        matild palace
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='site-half eventItinerarySection'>
                    <div className='img-bg-1'>
                        <img
                            alt={' '}
                            src={Itinerary}
                            className={'network'}
                            style={{ width: '400px', marginTop: '5%' }}
                        />
                    </div>
                    <div className='container itineraryTitle'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-9 ml-rg-auto py-5'
                                style={{ paddingLeft: '80px' }}
                            >
                                <h2
                                    className='site-section-heading font-secondary'
                                    style={{ paddingBottom: '40px' }}
                                >
                                    here's a sample of <br />
                                    what you can expect.
                                </h2>
                                <Tabs defaultTab='one'>
                                    <TabList className='eventTabList'>
                                        <Tab tabFor='one' className='eventTabs'>
                                            arrival
                                        </Tab>
                                        <Tab tabFor='two' className='eventTabs'>
                                            day 1
                                        </Tab>
                                        <Tab
                                            tabFor='three'
                                            className='eventTabs'
                                        >
                                            day 2
                                        </Tab>
                                        <Tab
                                            tabFor='four'
                                            className='eventTabs'
                                        >
                                            day 3
                                        </Tab>
                                    </TabList>
                                    <TabPanel tabId='one'>
                                        <ul className='itineraryList'>
                                            <li>You arrive (yay!)</li>
                                            <li>A delicious welcome dinner</li>
                                            <li>
                                                Time to get some sleep after a
                                                busy evening of mingling
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='two'>
                                        <ul className='itineraryList'>
                                            <li>
                                                A morning of pre-scheduled
                                                meetings
                                            </li>
                                            <li>
                                                Lunch time! A great opportunity
                                                to chat with other attendees
                                                (and refuel for the afternoon
                                                ahead)
                                            </li>
                                            <li>
                                                An afternoon of your chosen
                                                networking activities
                                            </li>
                                            <li>
                                                Get dressed up and join us for
                                                the networking dinner
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='three'>
                                        <ul className='itineraryList'>
                                            <li>
                                                Pre-scheduled 1-2-1 meetings in
                                                the morning
                                            </li>
                                            <li>A quick break for lunch</li>
                                            <li>
                                                A chance to relax and carry on
                                                talking during the Social
                                                Afternoon or set off on the
                                                optional destination discovery
                                                tour
                                            </li>
                                            <li>
                                                Get your party shoes on -
                                                tonight's closing party is all
                                                about delicious food and letting
                                                loose on the dancefloor
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='four'>
                                        <ul className='itineraryList'>
                                            <li>
                                                Your final morning of
                                                pre-scheduled meetings
                                            </li>
                                            <li>
                                                Farewell lunch - one last chance
                                                for some final networking
                                            </li>
                                            <li>Departures (boo!)</li>
                                            <li>
                                                Time to book your next m&i
                                                event!
                                            </li>
                                        </ul>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='packages-section'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-5 laptop'
                                style={{ paddingLeft: '100px', color: '#fff' }}
                            >
                                <h2 className='site-section-heading font-secondary'>
                                    <span className='coral-underlined'>
                                        supplier package
                                    </span>
                                </h2>
                                <ul className='packages'>
                                    <li>
                                        3 days of high-quality networking in a
                                        popular MICE paradise
                                    </li>
                                    <li>
                                        40 meetings with buyers looking for
                                        independent and boutique hotels, unusual
                                        properties and venues of character
                                    </li>
                                    <li>
                                        Limited to only 100 suppliers - no hard
                                        brands
                                    </li>
                                    <li>
                                        Cutting-edge AI matchmaking technology
                                        to find your best meeting potential
                                    </li>
                                    <li>
                                        Networking activities for extra
                                        relationship-building with attending
                                        buyers
                                    </li>
                                    <li>
                                        Outstanding networking dinners and
                                        social nightlife experiences
                                    </li>
                                    <li>
                                        Friendly Account Manager to guide you
                                        from start to finish
                                    </li>
                                    {/* <li>
                    Book now, pay later with our{" "}
                    <a href="/flexi-terms-promise">Flexi-terms Promise.</a>
                  </li> */}
                                    
                                    <li>
                                        Find out how we're{' '}
                                        <a href='https://www.mi-forums.com/covid-safe-events'>
                                            keeping you safe
                                        </a>{' '}
                                        at this event
                                    </li>
                                    <li>
                                    New to m&i? wondering what to expect at our events? see {" "}
                    <a href="/how-it-works">how it works</a>
                  </li>
                                </ul>
                                <br />
                                <hr />
                                <br />
                                <h2 className='site-section-heading font-secondary'>
                                    <span className='coral-underlined'>
                                        hosted buyer package
                                    </span>
                                </h2>
                                <ul className='packages'>
                                    <li>
                                        1-2-1 meetings with suppliers offering
                                        venues of character
                                    </li>
                                    <li>
                                        Cutting edge AI matchmaking technology
                                        to find your best meeting potential
                                    </li>
                                    <li>
                                        Accommodation, flights and transfers
                                        included
                                    </li>
                                    <li>
                                        Breakfast, lunch and exciting networking
                                        dinners provided
                                    </li>
                                    <li>
                                        Destination discovery — see what the
                                        city has to offer for MICE events
                                    </li>
                                    <li>
                                        Networking activities — experience
                                        Budapest through the eyes of your
                                        clients
                                    </li>
                                    <li>
                                        Glamorous dinners, parties and nightlife
                                        experiences
                                    </li>
                                    <li>
                                        Find out how we're{' '}
                                        <a href='https://www.mi-forums.com/covid-safe-events'>
                                            keeping you safe
                                        </a>{' '}
                                        at this event
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='event-footer-slider blue-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-8 ml-rg-auto py-5 laptop'
                                style={{ paddingLeft: '100px', color: '#fff' }}
                            >
                                <h2 style={{ color: '#fff' }}>
                                    spaces for this event are strictly <br />
                                    limited,{' '}
                                    <span className='yellow-underlined'>
                                        so don't miss out!
                                    </span>
                                </h2>
                                <br />

                                <p className='eventFooterText'>
                                    Sign up for m&i Private Europe below and a
                                    member of our <br />
                                    team will come back to you with all the
                                    great details you’ll <br />
                                    need for this intimate, one-of-a-kind event.
                                </p>
                                <a href='/signup'>
                                    <span className=' btn btn-secondary white'>
                                        sign up
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-10 ml-rg-auto py-5 mobileHide'>
                        <div className='img-bg-1'>
                            <img
                                alt={' '}
                                src={CaptionPeople}
                                className={'twoPeople desktop'}
                                style={{ width: '250px' }}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className='site-half partnerSection'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-5'
                                style={{ paddingLeft: '80px' }}
                            >
                                <h3 className='site-section-heading font-secondary mobilePadding'>
                                    our partners
                                </h3>
                                <a
                                    href='https://hcb.hu/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={HCBLogo}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://hcb.hu/'>
                                    <img
                                        alt={' '}
                                        src={Budapest}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a
                                    href='https://www.marriott.com/hotels/travel/budhu-budapest-marriott-hotel/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={MarriottBudapest}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.marriott.com/hotels/travel/budlc-matild-palace-a-luxury-collection-hotel-budapest'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={MatlidPalace}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a
                                    href='https://www.ritzcarlton.com/en/hotels/europe/budapest'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={BUDRZ}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.bolive.hu'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={LiveBrandingLogo}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='http://mauridmc.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={MauriDMC}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='http://speceffect.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={SpecialEffect}
                                        className={'partnerLogo'}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="wyred-footer-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2 style={{ fontSize: "36px" }}>
                  connect anytime, anywhere <br />
                  with{" "}
                  <span className="blue-underlined">wyred world on demand</span>
                </h2>
                <br />

                <p
                  style={{
                    lineHeight: "28px",
                    paddingBottom: "40px",
                  }}
                >
                  Enjoy the benefits of a virtual event 24/7, 365 days a year
                  <br /> with our online digital networking platform.
                </p>
                <a href="/on-demand">
                  <span className=" btn btn-cta">find out more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-5">
            <div className="img-bg-1">
              <img alt={" "} src={WyredWorldLogo} className={"wyredLogo"}></img>
            </div>
          </div>
        </div> */}
            </div>
        </>
    );
};

export default PrivateEurope;
