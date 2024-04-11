import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/europe_winter/Event_Europe_Winter_Hero_1920.png';
import HeroBanner1024 from '../assets/images/events/europe_winter/Event_Europe_Winter_Hero_1024.png';
import HeroBanner766 from '../assets/images/events/europe_winter/Event_Europe_Winter_Hero_766.png';
import HeroBanner320 from '../assets/images/events/europe_winter/Event_Europe_Winter_Hero_320.png';
import Network from '../assets/images/events/europe_winter/Europe_Winter_Abu_dhabi_Itinerary.png';
import Seville from '../assets/images/events/europe_winter/Europe_Winter_Abu_dhabi_Spotilight.png';
import CaptionPeople from '../assets/images/events/europe_winter/Europe_Winter_Abu_dhabi_Artboard.png';
import Shangri from '../assets/images/events/partner_logos/Shangri.png';
import FairmontBab from '../assets/images/events/partner_logos/FairmontBab.jpg';
import ADNEC from '../assets/images/events/partner_logos/ADNEC.png';
import ADCB from '../assets/images/events/partner_logos/ADCB.png';
import Traders from '../assets/images/events/partner_logos/THAD-Logo.png';
import Etihad from '../assets/images/events/partner_logos/EYAIRWAYS_1019_CMYK-01.jpg'
import EmiratesPalace from '../assets/images/events/partner_logos/Emirates Palace Abu Dhabi_gold logo.jpg'
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const EuropeWinter = () => {
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
                <title>m&i Europe Winter 2021, Abu Dhabi | m&i</title>
                <meta
                    name='description'
                    content="Global suppliers meet UK & European buyers for a Flagship MICE Forum in the Middle East. Don't miss out!"
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
                                    <span className='fawn-underlined'>
                                        Europe <br />
                                        Winter 2021
                                    </span>
                                </h1>
                                <br />
                                <p style={{ fontSize: '25px' }}>
                                    5-9 december
                                    <br />
                                    abu dhabi, UAE
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
                                    How does 4 days of great business meetings,
                                    exciting Middle Eastern experiences and
                                    countless memories in one of the world’s
                                    most cosmopolitan cities sound? Good? Then
                                    you simply can’t afford to miss out on m&i
                                    Europe Winter in stunning Abu Dhabi. (Oh,
                                    don’t let the ‘winter’ label put you off,
                                    the UAE is hot, hot, hot all year round!)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='numbers-section eventNumbers fawn'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-4 laptop'
                                style={{ color: '#ff5959' }}
                            >
                                <div className='inNumbers'>
                                    <h2 className='site-section-heading font-secondary '>
                                        <span className='coral-underlined'>
                                            m&i Europe Winter
                                        </span>{' '}
                                        in numbers.
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className='numbers-caption '>
                                                <h1 className='eventNumbers coral'>
                                                    4
                                                </h1>
                                                <p>exciting days</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers coral'>
                                                    40
                                                </h1>
                                                <p>meetings</p>
                                            </div>
                                        </li>
                                        <li>
                                            {' '}
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers coral'>
                                                    100
                                                </h1>
                                                <p>supplier tables</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers coral'>
                                                    110
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
                            src={Seville}
                            className={'eventDestination'}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-6 ml-lg-auto py-5'>
                                <h2 className='site-section-heading font-secondary '>
                                    spotlight on{' '}
                                    <span className='fawn-underlined'>
                                        abu dhabi.
                                    </span>
                                </h2>
                                <p
                                    style={{ paddingRight: '80px' }}
                                    className='mobilePadding-2'
                                >
                                    With its chic, modern appearance and big
                                    plans for even more growth, the UAE capital
                                    city, Abu Dhabi is the perfect adventure for
                                    both business and pleasure. Boasting some of
                                    the world’s most forward-thinking
                                    architecture and rich cultural achievements,
                                    including the newly opened art museum, The
                                    Louvre Abu Dhabi, and a cutting-edge
                                    conference centre, ADNEC, this city is
                                    definitely one to watch for global event
                                    planners. Did we mention that Abu Dhabi is
                                    also home to some truly incredible
                                    coastline? Beach escape or city break, this
                                    place is truly the best of both worlds.
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='event-venue coral-bg'>
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
                                        href='https://www.adnec.ae/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        ADNEC
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
                                        href='https://www.fairmont.com/abu-dhabi/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        fairmont bab al bahr
                                    </a>
                                </h2>
                                <hr />
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.shangri-la.com/en/abudhabi/shangrila/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        shangri-la qaryat al beri
                                    </a>
                                </h2>
                                <hr />
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.shangri-la.com/en/abudhabi/traders/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        traders hotel, qaryat al beri
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
                            src={Network}
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
                                    <TabList
                                        className='eventTabList'
                                        style={{ display: 'contents' }}
                                    >
                                        <Tab
                                            tabFor='one'
                                            className='eventTabs raven'
                                        >
                                            arrival
                                        </Tab>
                                        <Tab
                                            tabFor='two'
                                            className='eventTabs raven'
                                        >
                                            day 1
                                        </Tab>
                                        <Tab
                                            tabFor='three'
                                            className='eventTabs raven'
                                        >
                                            day 2
                                        </Tab>
                                        <Tab
                                            tabFor='four'
                                            className='eventTabs raven'
                                        >
                                            day 3
                                        </Tab>
                                        <Tab
                                            tabFor='five'
                                            className='eventTabs raven'
                                        >
                                            day 4
                                        </Tab>
                                    </TabList>
                                    <TabPanel tabId='one'>
                                        <ul className='itineraryList'>
                                            <li>You arrive (yay!)</li>
                                            <li>
                                                Time to get some sleep after a
                                                busy day of travelling
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
                                                Get dressed up and join us for a
                                                welcome dinner
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
                                                tonight's networking party is
                                                all about delicious food and
                                                letting loose on the dancefloor
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='four'>
                                        <ul className='itineraryList'>
                                            <li>
                                                Your final morning of
                                                pre-scheduled meetings
                                            </li>
                                            <li>An afternoon at leisure</li>
                                            <li>
                                                A farewell gala dinner with your
                                                new made friends
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='five'>
                                        <ul className='itineraryList'>
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
                                    <span className='blue-underlined'>
                                        supplier package
                                    </span>
                                </h2>
                                <ul className='packages'>
                                    <li>
                                        4 days of high-quality networking in a
                                        modern, popular MICE destination
                                    </li>
                                    <li>
                                        40 guaranteed 1-2-1 meetings with vetted
                                        key UK & European buyers
                                    </li>
                                    <li>
                                        Cutting edge AI matchmaking technology
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
                                    <span className='blue-underlined'>
                                        hosted buyer package
                                    </span>
                                </h2>
                                <ul className='packages'>
                                    <li>
                                        1-2-1 meetings with high-quality global
                                        suppliers
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
                                        Networking activities — experience Abu
                                        Dhabi through the eyes of your clients
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

                <div className='event-footer-slider fawn'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-8 ml-rg-auto py-5 laptop'
                                style={{ paddingLeft: '100px' }}
                            >
                                <h2>
                                    the guestlist is growing and <br />{' '}
                                    <span className='coral-underlined'>
                                        you could be part of it!
                                    </span>
                                </h2>
                                <br />

                                <p className='eventFooterText'>
                                    Don’t miss out - sign up for m&i Europe
                                    Winter and a member <br />
                                    of our team will come back to you with more
                                    exciting details.
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
                                style={{ width: '300px' }}
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
                                    href='https://www.fairmont.com/abu-dhabi/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={FairmontBab}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.shangri-la.com/en/abudhabi/shangrila/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Shangri}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.adnec.ae/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={ADNEC}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://visitabudhabi.ae/en-gb/abu-dhabi-convention-and-exhibition-bureau'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={ADCB}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.shangri-la.com/en/abudhabi/traders/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Traders}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.etihad.com/en-gb/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Etihad}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.mandarinoriental.com/abu-dhabi/emirates-palace/luxury-hotel'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={EmiratesPalace}
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

export default EuropeWinter;
