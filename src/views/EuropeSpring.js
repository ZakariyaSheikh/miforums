import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/europe_summer/Event_Europe_Summer_Hero_1920.png';
import HeroBanner1024 from '../assets/images/events/europe_summer/Event_Europe_Summer_Hero_1024.png';
import HeroBanner766 from '../assets/images/events/europe_summer/Event_Europe_Summer_Hero_766.png';
import HeroBanner320 from '../assets/images/events/europe_summer/Event_Europe_Summer_Hero_320.png';
import Network from '../assets/images/events/europe_summer/event_europe summer_itinerary.png';
import Seville from '../assets/images/events/europe_summer/seville.png';
import CaptionPeople from '../assets/images/events/europe_summer/europesummercharcacters.svg';
import MeliaSevilla from '../assets/images/events/partner_logos/MeliaSevillaLogo.png';
import Barcelo from '../assets/images/events/partner_logos/barcelo_new.png';
import SCCBNew from '../assets/images/events/partner_logos/SCCB-new.png';
import Kenes from '../assets/images/events/partner_logos/Logo_Kenes_Rojo.png';
import Marca from '../assets/images/events/partner_logos/Marca_ANDALUCIA_&_EU_Fund_eng_2020.png';
import Turespana from '../assets/images/events/partner_logos/LOGO-TURESPAÑA-2-AGOSTO.jpg';
import Rendez from '../assets/images/events/partner_logos/rendeverse.png';
import SevillaCity from '../assets/images/events/partner_logos/SEVILLA_CITY_OFFICE.png';
import GC from '../assets/images/events/partner_logos/GC.jpg';
import VillaLuisa from '../assets/images/events/partner_logos/Villa_Luisa.jpg';
import Alda from '../assets/images/events/partner_logos/logo_aldaterry.jpg';
import Hacienda from '../assets/images/events/partner_logos/hacienda-la-soledad.png';
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
                <title>m&i Europe Spring 2022, Seville | m&i</title>
                <meta name='description' content='' />
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
                                        Spring 2022
                                    </span>
                                </h1>
                                <br />
                                <p style={{ fontSize: '25px' }}>
                                    8-11 may
                                    <br />
                                    seville, spain
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
                                    This is a big’un! One of our largest Forums
                                    of the year that will provide more
                                    connections than ever — oh, and did we
                                    mention it’s in stunning Seville? Yes, this
                                    is an event you don’t want to miss. As one
                                    of our Flagship Forums, m&i Europe Spring
                                    promises to be big, bold and full of
                                    business potential. Olé!
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
                                            m&i Europe Spring
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
                                                    150
                                                </h1>
                                                <p>supplier tables</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    165
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
                                    <span className='coral-underlined'>
                                        seville.
                                    </span>
                                </h2>
                                <p
                                    style={{ paddingRight: '80px' }}
                                    className='mobilePadding-2'
                                >
                                    As the Andalucía region’s capital, charming
                                    Seville has a history and artistry that’s
                                    impossible to escape. With more than 200
                                    hotels, this popular city sleeps almost
                                    10,000 guests (that’s a whole lot of
                                    siestas), and boasts a newly renovated
                                    airport with 150 direct connections. And did
                                    we mention that over the next three years,
                                    Seville will see another 30 hotels opened?
                                    <br />
                                    <br />
                                    Fusing the rustic charms of an ancient world
                                    with all the promise of a modern future,
                                    this culture-rich Spanish city, with a
                                    growing MICE reputation, is a must-see
                                    destination that provides the perfect canvas
                                    for events of every kind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='event-venue yellow-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-4 ml-lg-auto py-5 '>
                                <h3
                                    className='site-section-heading font-secondary '
                                    style={{ textDecoration: 'underline' }}
                                >
                                    meeting venue
                                </h3>
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.barcelo.com/en-gb/barcelo-sevilla-renacimiento/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        barceló sevilla <br />
                                        renacimiento{' '}
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
                                        href='https://www.barcelo.com/en-gb/barcelo-sevilla-renacimiento/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        barceló sevilla <br />
                                        renacimiento{' '}
                                    </a>
                                </h2>
                                <hr />
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.melia.com/en/hotels/spain/seville/melia-sevilla/index.htm'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Meliá Sevilla
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
                                        Make your money go further with our{' '}
                                        <a href='/pricing'>
                                            early booking discount
                                        </a>
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
                                        Seville through the eyes of your clients
                                    </li>
                                    <li>
                                        Glamorous dinners, parties and nightlife
                                        experiences
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
                                    want to know why you should <br />
                                    attend{' '}
                                    <span className='blush-underlined'>
                                        m&i Europe Spring?
                                    </span>
                                </h2>
                                <br />

                                <p className='eventFooterText'>
                                    Sign up for this event and a member of our{' '}
                                    <br />
                                    friendly team will come back to you with
                                    more info.
                                </p>
                                <a href='/signup'>
                                    <span className=' btn btn-secondary white'>
                                        sign up
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-10 ml-rg-auto py-5'>
                        <div className='img-bg-1'>
                            <img
                                alt={' '}
                                src={CaptionPeople}
                                className={'twoPeople desktop'}
                                style={{ width: '270px', marginTop: '-27%' }}
                            ></img>
                        </div>
                    </div>
                </div>

                <div className='site-half globalPartnerSection'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch partner2022' >
                            <div
                                className='col-lg-3 ml-rg-auto py-5 borderRight'
                                style={{ marginLeft: '40px' }}
                            >
                                <h3 className='site-section-heading font-secondary mobilePadding '>
                                    our global partner
                                </h3>
                                <a
                                    href='https://rendezverse.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Rendez}
                                        style={{width:'250px'}}
                                        className={'partnerLogo'}
                                    />
                                </a>


                            </div>
                            <div
                                className='col-lg-9 ml-rg-auto py-5 '
                                style={{ marginLeft: '50px' }}
                            >
                                <h3 className='site-section-heading font-secondary mobilePadding'>
                                    our local partners
                                </h3>
                                <a
                                    href='https://sevillacb.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={SCCBNew}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.andalucia.org/en/home'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Marca}
                                        style={{ width: '280px' }}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.spain.info/en'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Turespana}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a
                                    href='https://www.barcelo.com/en-gb/barcelo-sevilla-renacimiento/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Barcelo}
                                        className={'partnerLogo'}
                                    />
                                </a>


                                <a
                                    href='https://www.melia.com/en/hotels/spain/seville/melia-sevilla/index.htm'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={MeliaSevilla}
                                        className={'partnerLogo'}
                                    />
                                </a>





                                <a
                                    href='https://spain.kenes.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Kenes}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                 <a
                                    href='https://sevillacityoffice.es/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={SevillaCity}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a
                                    href='https://www.haciendalasoledad.es/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Hacienda}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a
                                    href='https://guadalquivircatering.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={GC}
                                        style={{ width: '170px' }}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a
                                    href='https://www.villaluisa.com/en'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={VillaLuisa}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a
                                    href='https://aldayterrycatering.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Alda}
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
