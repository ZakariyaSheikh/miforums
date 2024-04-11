import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Sticky from 'react-sticky-el';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/americas_2021/americas2022_puntacana_hero_image_1920px.jpg';
import HeroBanner1024 from '../assets/images/events/americas_2021/americas2022_puntacana_hero_image_1920px.jpg';
import HeroBanner766 from '../assets/images/events/americas_2021/americas2022_puntacana_hero_image_1920px.jpg';
import HeroBanner320 from '../assets/images/events/americas_2021/americas2022_puntacana_hero_image_320px.jpg';
import CTABanner from '../assets/images/events/americas_2021/americas2022_puntacana_cta_image_1024px.jpg';
import TestBG from '..//assets/images/events/americas_2021/heroshape_puntacana.png';
import Itinerary from '../assets/images/events/americas_2021/americas_2021_itinerary.png';
import Spotlight from '../assets/images/events/americas_2021/americas_2021_spotlight.png';
import ParadiseParma from '../assets/images/events/partner_logos/PARADISUS_PALMAREAL.png';
import BarceloPalace from '../assets/images/events/partner_logos/Barcelo_pos_logo.png';
import AquaBeach from '../assets/images/events/partner_logos/LOGOTIPO_LA_PUNTACANA_RGB.PNG';
import Panel from '../assets/images/panel_image_advisory_board.png';
import Amstar from '../assets/images/events/partner_logos/Amstar.jpg';
import Paradisus from '../assets/images/events/partner_logos/logo_ParadisusGrandCana.png';
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const AmericasPuntaCana = () => {
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
                <title>m&i Americas 2022, Punta Cana | m&i</title>
                <meta
                    name='description'
                    content='Global suppliers meet American buyers at this unmissable MICE event. Join us in Punta Cana in 2022.'
                />
                 <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_Americas_2022.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_Americas_2022.png"} />
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
                            <div
                                className='col-lg-12 ml-rg-auto py-5'
                            >
                                <h1 className='header-section-heading blush raven' style={{
                                     backgroundImage: `url(${TestBG})`,
                                }}>
build new business <br/> relationships{" "}
                                    <span className='coral-underlined'>
                                       in the <br />
                                        {" "}caribbean's most{" "} <br/>{" "} 
                                   diverse destination</span>
                                 

                                </h1>

                            </div>
                        </div>
                    </div>
                    </div>

                    <Sticky>
                    <div className="event-under-banner">
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-7 ml-rg-auto  '
                            >
                                <h3>love the sound of this event?</h3>
                            </div>
                            <div
                                className='col-lg-5 ml-rg-auto  '
                        >
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


                </div></Sticky>

                <div className='site-half eventInformationSection'>
                    <div className='container'>
                <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-11 ml-rg-auto'
                            >

                    <div className='eventTitle'>

                                <h2
                                    className='site-section-heading font-secondary'
                                >
                                    m&i Americas 2022
                                    </h2>
                                    <span>16-19 nov <br />punta cana, dom. rep</span>
                                    <br /><br/>
                                    <p>
                                    What could be better than having 40
                                    face-to-face meetings that have been
                                    specifically tailored to your business
                                    needs? Well, how about those same
                                    meetings...but in the Dominican Republic?
                                    That got your attention, didn’t it! <br />
                                    <br />
                                    That’s right, from 16-19 November 2022, you
                                    could be jetting off to the tropical
                                    Caribbean city of Punta Cana for 3 days of
                                    sun, fun and let’s not forget plenty of
                                    networking with Meetings & Events
                                    professionals. Read on if you dare…
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
                        <div className="anchorScroll"  id="numbers"></div>
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
                                            m&i Americas
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
                                                    150
                                                </h1>
                                                <p>supplier tables</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers blue'>
                                                    165
                                                </h1>
                                                <p>american buyers</p>
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
                                    spotlight on the <br />
                                    <span className='blue-underlined'>
                                        dominican republic.
                                    </span>
                                </h2>
                                <p
                                    style={{ paddingRight: '80px' }}
                                    className='mobilePadding-2'
                                >
                                    Ah, the Caribbean. It’s hard to avoid images
                                    of fresh coconuts, turquoise seas and softly
                                    swaying palm trees, isn’t it? If you listen
                                    really closely, you might even hear the
                                    rich, friendly tones of a steel drum. But,
                                    of course, there’s plenty more to the
                                    Dominican Republic than picture perfect
                                    beaches and amazing weather. Did you know
                                    that this top MICE destination has 36,000
                                    hotel rooms and the best connected airport
                                    in the Caribbean? This makes it the ideal
                                    spot for global gatherings and business
                                    travel. Don’t forget to pack your snorkel!
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='event-venue blue-bg'

                style={{ height: '350px'}}>

                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-5 ml-lg-auto py-5 '>
                                <h3
                                    className='site-section-heading font-secondary '
                                    style={{ textDecoration: 'underline', color:'#fff'  }}
                                >
                                    meeting venue
                                    
                                </h3>
                                <h2 style={{ lineHeight: '45px' }}>
                                <a
                                        className='venueLink white'
                                        href='https://www.melia.com/en/hotels/dominican-republic/punta-cana/paradisus-palma-real-golf-and-spa-resort/index.htm'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        paradisus palma real golf <br />& spa
                                        resort{' '}
                                    </a>
                                </h2>
                            </div>
                            <div className='col-lg-6 ml-lg-auto py-5 '>
                                <h3
                                    className='site-section-heading font-secondary '
                                    style={{ textDecoration: 'underline', color:'#fff'  }}
                                >
                                    accommodation venues
                                </h3>
                                <h2
                                    className='accommodation'
                                    style={{ lineHeight: '45px' }}
                                >
                                    <a
                                        className='venueLink white'
                                        href='https://www.melia.com/en/hotels/dominican-republic/punta-cana/paradisus-grand-cana/index.htm'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        paradisus grand cana
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


                <div className="advisoryboard-block">
          <div className="img-bg-1">
            <img alt={" "} src={Panel} className={"panelImage"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch ">
              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <h2 className="site-section-heading font-secondary">
                  meet our <span class="coral-underlined"> americas <br></br>
                  advisory board.</span>
                </h2>
                <p>
                Our advisory board is made up of leading professionals who make significant contributions to the MICE industry. 
                </p>
                <a href='/advisory-board'>
                <span className=' btn btn-secondary white'>
                                      meet our board members
                                    </span></a>
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
                                        3 days of high-quality networking in a
                                        popular MICE paradise
                                    </li>
                                    <li>
                                        40 guaranteed 1-2-1 meetings with key
                                        American buyers
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
                                        Networking activities — experience Punta
                                        Cana through the eyes of your clients
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

                <div className='cta-banner' style={{ backgroundImage: `url(${CTABanner})`, backgroundPosition:'unset' }}>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-5 laptop'
                            ><div className='cta-content'>
                                <h2>history, culture, high tech meetings<br/>
                                          {" "}unmissable memories, and exciting<br/>
                                          partnerships.  <span className="underlined">are you in?</span> <br />{" "}
                                    </h2>
                                    <a href='/signup'>
                                    <span className=' btn btn-secondary white'>
                                      count me in
                                    </span>
                                </a></div>

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
                                <a
                                    href='https://www.melia.com/en/hotels/dominican-republic/punta-cana/paradisus-grand-cana?utm_medium=organic&utm_source=uberall&utm_content=dynamic'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Paradisus}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.melia.com/en/hotels/dominican-republic/punta-cana/paradisus-grand-cana/index.htm'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={ParadiseParma}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.amstardmc.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Amstar}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.liveaqua.com/destinations/punta-cana'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={AquaBeach}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.barcelo.com/en-us/barcelo-bavaro-palace/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={BarceloPalace}
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

export default AmericasPuntaCana;
