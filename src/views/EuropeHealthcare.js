import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/healthcare/Event_Healthcare_Europe_Hero_1920.png';
import HeroBanner1024 from '../assets/images/events/healthcare/Event_Healthcare_Europe_Hero_1024.png';
import HeroBanner766 from '../assets/images/events/healthcare/Event_Healthcare_Europe_Hero_766.png';
import HeroBanner320 from '../assets/images/events/healthcare/Event_Healthcare_Europe_Hero_320.png';
import Itinerary from '../assets/images/events/healthcare/healthcare_europe_2021_itinerary.png';
import Spotlight from '../assets/images/events/healthcare/healthcare_europe_2021_spotlight.png';
import CaptionPeople from '../assets/images/events/americas_2021/conversational_characters.svg';
import RiuPlaza from '../assets/images/events/partner_logos/RIU_PLAZA.jpg';
import HealthcareVenue from '../assets/images/events/partner_logos/healthcarevenues.gif';
import ThreeSixty from '../assets/images/events/partner_logos/3Sixty.jpg';
import DMC from '../assets/images/events/partner_logos/TA_DMC_logo.png';
import CVB from '../assets/images/events/partner_logos/CVB_Madrid_Convention_Bureau_logo.jpg';
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"

const EuropeHealthcare = () => {
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
                <title>m&i Healthcare Europe 2021, Madrid | m&i</title>
                <meta
                    name='description'
                    content='A specialist healthcare networking event for meetings professionals within the pharmaceutical sector. Sign up now!'
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
                                        Healthcare <br />
                                        Europe 2021
                                    </span>
                                </h1>
                                <br />
                                <p style={{ fontSize: '25px' }}>
                                    5-7 october
                                    <br />
                                    madrid, spain
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
                                    Looking to meet healthcare compliant venues
                                    and vetted buyers with healthcare event
                                    briefs? Look no further because m&i
                                    Healthcare Europe has got you covered. This
                                    one-of-a-kind specialist event, taking place
                                    in sunny Spain, is definitely one you won’t
                                    want to miss.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='numbers-section eventNumbers raven-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-4 laptop'
                                style={{ color: '#fff' }}
                            >
                                <div className='inNumbers'>
                                    <h2 className='site-section-heading font-secondary white'>
                                        <span className='yellow-underlined'>
                                            m&i Healthcare Europe
                                        </span>{' '}
                                        in numbers.
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    2
                                                </h1>
                                                <p>exciting days</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    25
                                                </h1>
                                                <p>meetings</p>
                                            </div>
                                        </li>
                                        <li>
                                            {' '}
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    60
                                                </h1>
                                                <p>supplier tables</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    70
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
                                        madrid.
                                    </span>
                                </h2>
                                <p
                                    style={{ paddingRight: '80px' }}
                                    className='mobilePadding-2'
                                >
                                    Of all the places in the world, why have we
                                    chosen Madrid for our specialist healthcare
                                    event? Maybe it’s down to the hundreds of
                                    medical and healthcare conferences that take
                                    place in the Spanish capital every single
                                    year. It could be the wide array of
                                    conference centres this major city boasts,
                                    making it a top spot for healthcare events.
                                    Or maybe we just love good food and fancy
                                    dancing the flamenco. Whichever reason you
                                    prefer, one thing’s for sure - this event is
                                    absolutely made for Madrid!
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='event-venue bg-blue-caption'
                    style={{ height: '270px' }}
                >
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-5 ml-lg-auto py-5 '>
                                <h3
                                    className='site-section-heading font-secondary '
                                    style={{
                                        textDecoration: 'underline',
                                        color: '#fff',
                                    }}
                                >
                                    meeting and accommodation venue
                                </h3>
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink white'
                                        href='https://www.riu.com/en/hotel/spain/madrid/hotel-riu-plaza-espana/index.jsp'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        hotel riu plaza españa
                                    </a>
                                </h2>
                            </div>
                            <div className='col-lg-6 ml-lg-auto py-5 '>
                                <img
                                    alt={' '}
                                    src={CaptionPeople}
                                    className={'twoPeople desktop'}
                                    style={{
                                        width: '250px',
                                        marginTop: '-8rem',
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
                                    </TabList>
                                    <TabPanel tabId='one'>
                                        <ul className='itineraryList'>
                                            <li>You arrive </li>
                                            <li>Let's eat! Lunch is served</li>
                                            <li>
                                                Be fully prepared with an
                                                optional supplier briefing
                                            </li>
                                            <li>
                                                We start the night with a
                                                keynote presentation
                                            </li>
                                            <li>
                                                The event officially begins with
                                                a welcome reception
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='two'>
                                        <ul className='itineraryList'>
                                            <li>
                                                A quick briefing on the day
                                                ahead
                                            </li>
                                            <li>
                                                A morning of meetings and
                                                workshops
                                            </li>
                                            <li>
                                                Time for lunch - hope you’re
                                                hungry!
                                            </li>
                                            <li>
                                                Panel discussion with industry
                                                specialists
                                            </li>
                                            <li>
                                                Option 1: Get to know the city
                                                with Destination Discovery
                                            </li>
                                            <li>
                                                Option 2: Get to know other
                                                attendees during networking
                                                activities
                                            </li>
                                            <li>The closing dinner</li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='three'>
                                        <ul className='itineraryList'>
                                            <li>
                                                {' '}
                                                Another great morning of
                                                meetings and workshops
                                            </li>
                                            <li>
                                                {' '}
                                                A farewell lunch for everyone to
                                                enjoy
                                            </li>
                                            <li>
                                                Optional peer-to-peer discussion
                                                session for buyers
                                            </li>
                                            <li>
                                                Departures (until next time!)
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
                                    <span
                                        style={{
                                            color: '#FF5959',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        supplier package
                                    </span>
                                </h2>
                                <ul className='packages'>
                                    <li>
                                        2 days of high-quality networking in a
                                        popular, healthcare-relevant city
                                    </li>
                                    <li>
                                        25 guaranteed 1-2-1 meetings with
                                        healthcare specific buyers
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
                                        Venue accreditation and specialist
                                        delegate training provided via our event
                                        partner, HealthcareVenues.
                                    </li>
                                    <li>
                                        Educational sessions from key industry
                                        speakers
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
                                    <span
                                        style={{
                                            color: '#FF5959',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        hosted buyer package
                                    </span>
                                </h2>
                                <ul className='packages'>
                                    <li>
                                        1-2-1 meetings with healthcare-relevant
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
                                        city has to offer for healthcare events
                                    </li>
                                    <li>
                                        Educational sessions from key industry
                                        speakers
                                    </li>
                                    <li>
                                        Networking activities — experience
                                        Madrid through the eyes of your clients
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

                <div className='event-footer-slider raven-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-8 ml-rg-auto py-5 laptop'
                                style={{ paddingLeft: '100px', color: '#fff' }}
                            >
                                <h2 style={{ color: '#fff' }}>
                                    <span className='coral-underlined'>
                                        don't miss out{' '}
                                    </span>
                                    {''}on this unique <br />
                                    healthcare event.
                                </h2>
                                <br />

                                <p className='eventFooterText'>
                                    Sign up for m&i Healthcare Europe and we’ll
                                    get in touch to
                                    <br />
                                    tell you more about why you should be
                                    attending!
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
                style={{ width: "300px" }}
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
                                    href='https://www.riu.com/en/hotel/spain/madrid/hotel-riu-plaza-espana/index.jsp'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={RiuPlaza}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='http://www.healthcare-venues.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={HealthcareVenue}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='http://www.360eventconsulting.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={ThreeSixty}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='http://www.taspain.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={DMC}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                {/* <a
                                    href='https://elconvento.net/casa-burgos-espacio-bodas-eventos-corporativos-madrid/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Casa}
                                        className={'partnerLogo'}
                                    />
                                </a> */}
                                <a
                                    href='https://www.esmadrid.com/mcb/en/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={CVB}
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

export default EuropeHealthcare;
