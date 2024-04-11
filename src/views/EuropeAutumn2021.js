import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/europe_autumn/Event_Europe_Autumn_Hero_1920.png';
import HeroBanner1024 from '../assets/images/events/europe_autumn/Event_Europe_Autumn_Hero_1024.png';
import HeroBanner766 from '../assets/images/events/europe_autumn/Event_Europe_Autumn_Hero_766.png';
import HeroBanner320 from '../assets/images/events/europe_autumn/Event_Europe_Autumn_Hero_320.png';
import Network from '../assets/images/events/europe_autumn/itinerary_image_sibenik.png';
import Sibenik from '../assets/images/events/europe_autumn/spotlight_image_sibenik.png';
import CaptionPeople2 from '../assets/images/events/europe_autumn/europe_autumn 2021_venue_section.png';
import AmadriaPark from '../assets/images/events/partner_logos/amadria-park-logo.svg';
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"

const EuropeSpringSeville = () => {
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
                <title>m&i Europe Autumn 2021, Sibenik | m&i</title>
                <meta
                    name='description'
                    content='Global suppliers meet UK & European buyers at this Autumn Flagship MICE Forum. Learn more and sign up today.'
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
                                    <span className='coral-underlined'>
                                        Europe <br />
                                        Autumn 2021
                                    </span>
                                </h1>
                                <br />
                                <p style={{ fontSize: '25px' }}>
                                    26 - 29 september
                                    <br />
                                    šibenik, croatia
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
                                    Desperate to connect under the warm sun,
                                    with your favourite industry friends and
                                    ZERO video calls in sight? Us too. That’s
                                    why we’re hosting our Autumn Flagship event
                                    in a hidden gem location that will
                                    obliterate those wanderlust blues. m&i
                                    Europe Autumn promises to be big, bold and a
                                    great way to do lots of new business in
                                    2021.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='numbers-section eventNumbers coral-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-4 laptop'
                                style={{ color: '#fff' }}
                            >
                                <div className='inNumbers'>
                                    <h2 className='site-section-heading font-secondary '>
                                        <span className='yellow-underlined'>
                                            m&i Europe Autumn
                                        </span>{' '}
                                        in numbers.
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    3
                                                </h1>
                                                <p>exciting days</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    40
                                                </h1>
                                                <p>meetings</p>
                                            </div>
                                        </li>
                                        <li>
                                            {' '}
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    100
                                                </h1>
                                                <p>supplier tables</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
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
                            src={Sibenik}
                            className={'eventDestination'}
                            style={{ marginTop: '2%' }}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-6 ml-lg-auto py-5'>
                                <h2 className='site-section-heading font-secondary '>
                                    spotlight on{' '}
                                    <span className='coral-underlined'>
                                        šibenik.
                                    </span>
                                </h2>
                                <p
                                    style={{ paddingRight: '80px' }}
                                    className='mobilePadding-2'
                                >
                                    Close your eyes and imagine yourself sailing
                                    along the turquoise coast of a gleaming
                                    city; the sun gently warming your skin.
                                    Sounds good, doesn’t it? All this and more
                                    can become a reality in the charming
                                    Croatian city of Šibenik, which is
                                    conveniently nestled between Split and
                                    Zadar. Our event host, Amadria Park is a 4*
                                    resort with the perfect blend of traditional
                                    heritage and modern luxury, in a chic,
                                    elegant setting. Oh, and did we mention it
                                    has its own convention centre with 11
                                    meeting halls and a capacity of up to 2,500?
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className='event-venue yellow-bg '
                    style={{ height: '350px' }}
                >
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-5 ml-lg-auto py-5 '>
                                <h3
                                    className='site-section-heading font-secondary '
                                    style={{ textDecoration: 'underline' }}
                                >
                                    meeting and accommodation venue
                                </h3>
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink '
                                        href='https://www.amadriapark.com/location/sibenik'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        amadria park
                                    </a>
                                </h2>
                            </div>
                            <div className='col-lg-6 ml-lg-auto py-5 '>
                                <img
                                    alt={' '}
                                    src={CaptionPeople2}
                                    className={'twoPeople desktop'}
                                    style={{
                                        width: '300px',
                                        marginTop: '-5rem',
                                    }}
                                ></img>
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
                                    <TabList className='eventTabList'>
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
                                    <span className='blue-underlined'>
                                        supplier package
                                    </span>
                                </h2>
                                <ul className='packages'>
                                    <li>
                                        3 days of high-quality networking in a
                                        hidden gem MICE destination
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
                                    {/* <li>
                                        Book now, pay later with our{' '}
                                        <a href='/flexi-terms-promise'>
                                            Flexi-terms Promise.
                                        </a>
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
                                        Networking activities — experience
                                        Šibenik through the eyes of your clients
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

                <div className='event-footer-slider'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-8 ml-rg-auto py-5 laptop'
                                style={{ paddingLeft: '100px', color: '#fff' }}
                            >
                                <h2 style={{ color: '#fff' }}>
                                    don't miss your chance to be part of <br />
                                    our come-back{' '}
                                    <span className='blush-underlined'>
                                        Flagship event
                                    </span>
                                </h2>
                                <br />

                                <p className='eventFooterText'>
                                    Sign up for this event and a member of our{' '}
                                    <br />
                                    friendly team will be in touch to secure
                                    your place.
                                </p>
                                <a href='/signup'>
                                    <span className=' btn btn-secondary white'>
                                        sign up
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-10 ml-rg-auto py-5">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={CaptionPeople}
                className={"twoPeople desktop"}
                style={{ width: "270px", marginTop: "-27%" }}
              ></img>
            </div>
          </div> */}
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
                                    href='https://www.amadriapark.com/location/sibenik'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={AmadriaPark}
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

export default EuropeSpringSeville;
