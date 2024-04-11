import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Sticky from 'react-sticky-el';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/Private Europe 2022/private2022_dubrovnik_hero_image_1920px.jpg';
import HeroBanner1024 from '../assets/images/events/Private Europe 2022/private2022_dubrovnik_hero_image_1024px.jpg';
import HeroBanner766 from '../assets/images/events/Private Europe 2022/private2022_dubrovnik_hero_image_766px.jpg';
import HeroBanner320 from '../assets/images/events/Private Europe 2022/private2022_dubrovnik_hero_image_320px.jpg';
import CTABanner from '../assets/images/events/Private Europe 2022/private2022_dubrovnik_cta_image_1920px.jpg';
import TestBG from '..//assets/images/events/Private Europe 2022/heroshape_dubrovnik.png';
import Itinerary from '../assets/images/events/Private Europe 2022/Private_Europe_2022_itinerary.png';
import Spotlight from '../assets/images/events/Private Europe 2022/Private_Europe_2022_Spotlight.png';
import CaptionPeople from '../assets/images/events/americas_2021/conversational_characters.svg';
import SunGardens from '../assets/images/events/partner_logos/DSG-logo.JPG';
import KORKYRA from '../assets/images/events/partner_logos/KORKYRA.jpg';
import Insider from '../assets/images/events/partner_logos/Dubrovnik - Insider Holidays.jpg';
import Gradska from '../assets/images/events/partner_logos/Gradska kavana Arsenal Restaurant.png';
import Posat from '../assets/images/events/partner_logos/Posat Restaurant.png';
import RMHLopudLafodia from '../assets/images/events/partner_logos/RMHLopudLafodia.png';

// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const Private2022 = () => {
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
                <title>m&i Private 2022, Dubrovnik | m&i </title>
                <meta
                    name='description'
                    content="This ‘no hard brands' specialist networking event is perfect for independent venues and local hotel groups. Sign up today.
"
                />
                <meta
                    property='og:url'
                    content={
                        'https://www.mi-forums.com/images/ographs/OG_image_Private_2022.png'
                    }
                />
                <meta
                    property='og:image'
                    content={
                        'https://www.mi-forums.com/images/ographs/OG_image_Private_2022.png'
                    }
                />
            </Helmet>
            <div className='site-wrap'>
                <div className='event-page'>
                    <div
                        className='sprint-hero-slider'
                        style={{
                            backgroundImage: `url(${heroBannerUrl})`,
                        }}
                    >
                        <div className='container'>
                            <div className='row no-gutters align-items-stretch'>
                                <div className='col-lg-12 ml-rg-auto py-5'>
                                    <h1
                                        className='header-section-heading blush'
                                        style={{
                                            backgroundImage: `url(${TestBG})`,
                                        }}
                                    >
                                        network with independent <br /> brands
                                        and planners <br></br>
                                        <span className='coral-underlined'>
                                            alongside the glistening <br />{' '}
                                            waters of the adriatic.
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Sticky>
                        <div className='event-under-banner'>
                            <div className='container'>
                                <div className='row no-gutters align-items-stretch'>
                                    <div className='col-lg-7 ml-rg-auto  '>
                                        <h3>love the sound of this event?</h3>
                                    </div>
                                    <div className='col-lg-5 ml-rg-auto  '>
                                        <a href='/tell-me-more'>
                                            <span className=' btn btn-secondary transparentBlush'>
                                                tell me more
                                            </span>
                                        </a>
                                        <a href='/signup'>
                                            <span className=' btn btn-secondary blush'>
                                                attend
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Sticky>

                    <div className='site-half eventInformationSection'>
                        <div className='container'>
                            <div className='row no-gutters align-items-stretch'>
                                <div className='col-lg-11 ml-rg-auto'>
                                    <div className='eventTitle'>
                                        <h2 className='site-section-heading font-secondary'>
                                            m&i Private 2022
                                        </h2>
                                        <span>
                                            9-12 oct <br />
                                            dubrovnik, croatia
                                        </span>
                                        <br />
                                        <br />
                                        <p>
                                            Sick of feeling stuck in the
                                            overpowering shadow of the hard
                                            hotel brands? Trying to find event
                                            venues with something special to win
                                            your clients over? You’ve landed on
                                            the right webpage! m&i Private is
                                            all about connecting independent &
                                            boutique hotels and local hotel
                                            groups with event planners on the
                                            hunt for out-of-the-box properties.
                                            And because this Forum has a strict
                                            limit on attendees, you’ll have the
                                            chance to meet and do business in an
                                            intimate environment that places a
                                            strong focus on forging strong
                                            professional relationships.
                                            <br />
                                            <br />
                                            Sound good? Keep on reading and hit
                                            that ‘sign up’ button.
                                        </p>
                                    </div>
                                </div>

                                {/* <div
                                className='col-lg-5 ml-rg-auto py-3'
                            >

                    <div className='eventNavigation'>

                                <h4
                                    className='site-section-heading font-secondary'
                                >
                                   Click to jump to:
                                    </h4>
                                    <a href="#numbers"><p>This event in numbers </p></a>
                                    <a href="#spotlight"><p>Spotlight on Istanbul </p></a>
                                    <a href="#meeting"><p>Meeting & accommodation venue </p></a>
                                    <a href="#itinerary"><p>Sample itinerary</p></a>
                                    <a href="#packages"><p>Your package</p></a>
                                    <a href="#signup"><p>Sign up</p></a>

                                </div>
                            </div> */}
                            </div>
                        </div>
                        <div className='anchorScroll' id='numbers'></div>
                    </div>

                    <div className='numbers-section eventNumbers yellow-bg'>
                        <div className='container'>
                            <div className='row no-gutters align-items-stretch'>
                                <div
                                    className='col-lg-12 ml-rg-auto py-4 laptop'
                                    style={{ color: '#fff' }}
                                >
                                    <div className='inNumbers'>
                                        <h2 className='site-section-heading font-secondary '>
                                            <span className='blue-underlined'>
                                                m&i Private
                                            </span>{' '}
                                            in numbers.
                                        </h2>
                                        <ul>
                                            <li>
                                                <div className='numbers-caption'>
                                                    <h1 className='eventNumbers blue'>
                                                        3
                                                    </h1>
                                                    <p>exciting days</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='numbers-caption'>
                                                    <h1 className='eventNumbers blue'>
                                                        40
                                                    </h1>
                                                    <p>meetings</p>
                                                </div>
                                            </li>
                                            <li>
                                                {' '}
                                                <div className='numbers-caption'>
                                                    <h1 className='eventNumbers blue'>
                                                        100
                                                    </h1>
                                                    <p>supplier tables</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='numbers-caption'>
                                                    <h1 className='eventNumbers blue'>
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
                                src={Spotlight}
                                className={'eventDestination2'}
                            />
                        </div>
                        <div className='container'>
                            <div className='row no-gutters align-items-stretch'>
                                <div className='col-lg-6 ml-lg-auto py-5'>
                                    <h2 className='site-section-heading font-secondary '>
                                        spotlight on dubrovnik, <br />{' '}
                                        <span className='blue-underlined'>
                                            the pearl of the adriatic.
                                        </span>
                                    </h2>
                                    <p
                                        style={{ paddingRight: '40px' }}
                                        className='mobilePadding-2'
                                    >
                                        With its incredible historic scenery,
                                        almost like something out of a medieval
                                        fantasy, it’s no wonder the hit show,
                                        Game of Thrones, was so heavily filmed
                                        in the Croatian city of Dubrovnik.
                                        Expect to find heaps of history at every
                                        turn of the city’s winding streets, a
                                        rich food scene, the glistening waters
                                        of the Adriatic Sea and a sprawling,
                                        hidden gem island just a 600m ferry ride
                                        from the main city.
                                        <br />
                                        <br />
                                        For the MICE experts, Dubrovnik is a
                                        dream come true. Not only is it
                                        extremely accessible to all of Europe,
                                        but it’s also a UNESCO protected city,
                                        which means plenty of history to absorb.
                                        Planning a large event? Our host venue,
                                        Sun Gardens, is a Leading Hotels of the
                                        World property and has everything you
                                        could need, including eight meeting
                                        rooms that equal 1800 square metres of
                                        luxury event space.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='event-venue bg-blue-caption'
                        style={{ height: '350px' }}
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
                                            href='https://www.dubrovniksungardens.com/?gclid=CjwKCAjw8cCGBhB6EiwAgORey8-8510fUZtTYhkDw7QdK18PaQGl7TMOtpEUlekY02ArRvEoIqL21hoCICsQAvD_BwE&gclsrc=aw.ds'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            sun gardens dubrovnik
                                        </a>
                                    </h2>
                                </div>
                                <div className='col-lg-6 ml-lg-auto py-5 '>
                                    <img
                                        alt={' '}
                                        src={CaptionPeople}
                                        className={'twoPeople desktop'}
                                        style={{
                                            width: '300px',
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
                                            <Tab
                                                tabFor='one'
                                                className='eventTabs'
                                            >
                                                arrival
                                            </Tab>
                                            <Tab
                                                tabFor='two'
                                                className='eventTabs'
                                            >
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
                                                <li>
                                                    A delicious welcome dinner
                                                </li>
                                                <li>
                                                    Time to get some sleep after
                                                    a busy evening of mingling
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
                                                    Lunch time! A great
                                                    opportunity to chat with
                                                    other attendees (and refuel
                                                    for the afternoon ahead)
                                                </li>
                                                <li>
                                                    An afternoon of your chosen
                                                    networking activities
                                                </li>
                                                <li>
                                                    Get dressed up and join us
                                                    for the networking dinner
                                                </li>
                                            </ul>
                                        </TabPanel>
                                        <TabPanel tabId='three'>
                                            <ul className='itineraryList'>
                                                <li>
                                                    Pre-scheduled 1-2-1 meetings
                                                    in the morning
                                                </li>
                                                <li>A quick break for lunch</li>
                                                <li>
                                                    A chance to relax and carry
                                                    on talking during the Social
                                                    Afternoon or set off on the
                                                    optional destination
                                                    discovery tour
                                                </li>
                                                <li>
                                                    Get your party shoes on -
                                                    tonight's closing party is
                                                    all about delicious food and
                                                    letting loose on the
                                                    dancefloor
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
                                                    Farewell lunch - one last
                                                    chance for some final
                                                    networking
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
                                    style={{
                                        paddingLeft: '100px',
                                        color: '#fff',
                                    }}
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
                                            3 days of high-quality networking in
                                            a popular MICE paradise
                                        </li>
                                        <li>
                                            40 meetings with buyers looking for
                                            independent and boutique hotels,
                                            unusual properties and venues of
                                            character
                                        </li>
                                        <li>
                                            Limited to only 100 suppliers - this
                                            is our most intimate event in the
                                            calendar
                                        </li>
                                        <li>No hard brands</li>
                                        <li>
                                            Cutting edge AI matchmaking
                                            technology to find your best meeting
                                            potential
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
                                            Friendly Account Manager to guide
                                            you from start to finish
                                        </li>
                                        <li>
                                            Make your money go further with our{' '}
                                            <a href='/pricing'>
                                                early booking discount
                                            </a>
                                        </li>

                                        
                                        <li>
                                            Find out how we're{' '}
                                            <a href='https://www.mi-forums.com/covid-safe-events'>
                                                keeping you safe
                                            </a>{' '}
                                            at this event
                                        </li>
                                        <li>
                                            New to m&i? Wondering what to expect
                                            at our events ? see{' '}
                                            <a href='/how-it-works'>
                                                how it works
                                            </a>
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
                                            1-2-1 meetings with suppliers
                                            offering tailor-made services in
                                            venues of character
                                        </li>
                                        <li>
                                            An intimate event with a limit of
                                            100 suppliers
                                        </li>
                                        <li>No hard brands</li>
                                        <li>
                                            Cutting edge AI matchmaking
                                            technology to find your best meeting
                                            potential
                                        </li>
                                        <li>
                                            Accommodation, flights and transfers
                                            included
                                        </li>
                                        <li>
                                            Breakfast, lunch and exciting
                                            networking dinners provided
                                        </li>
                                        <li>
                                            Destination discovery — discover
                                            Dubrovnik’s great MICE
                                            infrastructure
                                        </li>
                                        <li>
                                            Networking activities — experience
                                            Dubrovnik’s top attractions with
                                            fellow attendees
                                        </li>
                                        <li>
                                            Glamorous dinners, parties and
                                            nightlife experiences
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

                    <div
                        className='cta-banner'
                        style={{ backgroundImage: `url(${CTABanner})` }}
                    >
                        <div className='container'>
                            <div className='row no-gutters align-items-stretch'>
                                <div className='col-lg-12 ml-rg-auto py-5 laptop'>
                                    <div className='cta-content'>
                                        <h2>
                                            want your name on the guestlist?
                                            <br /> hurry -{' '}
                                            <span className='underlined'>
                                                spaces are strictly limited!
                                            </span>{' '}
                                            <br />{' '}
                                        </h2>
                                        <a href='/signup'>
                                            <span className=' btn btn-secondary white'>
                                                sign up
                                            </span>
                                        </a>
                                    </div>
                                </div>
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
                                    <a href='https://www.dubrovniksungardens.com/'>
                                        <img
                                            alt={' '}
                                            src={SunGardens}
                                            className={'partnerLogo'}
                                        />
                                    </a>
                                    <a href='https://www.korkyra-dubrovnik.com/'>
                                        <img
                                            alt={' '}
                                            src={KORKYRA}
                                            className={'partnerLogo'}
                                        />
                                    </a>
                                    <a href='https://www.insiderholidays.eu'>
                                        <img
                                            alt={' '}
                                            src={Insider}
                                            className={'partnerLogo'}
                                        />
                                    </a>
                                    <a href='https://www.nautikarestaurants.com/gradska-kavana-arsenal'>
                                        <img
                                            alt={' '}
                                            src={Gradska}
                                            className={'partnerLogo'}
                                        />
                                    </a>
                                    <a href='https://www.posat-dubrovnik.com/'>
                                        <img
                                            alt={' '}
                                            src={Posat}
                                            className={'partnerLogo'}
                                        />
                                    </a>
                                    <a href='https://www.lafodiahotel.com/en/'>
                                        <img
                                            alt={' '}
                                            src={RMHLopudLafodia}
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
            </div>
        </>
    );
};

export default Private2022;
