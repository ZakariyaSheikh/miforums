import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/Europe Autumn 2022/Event_Europe_Autumn_2022_Hero_1920.png';
import HeroBanner1024 from '../assets/images/events/Europe Autumn 2022/Event_Europe_Autumn_2022_Hero_1024.png';
import HeroBanner766 from '../assets/images/events/Europe Autumn 2022/Event_Europe_Autumn_2022_Hero_766.png';
import HeroBanner320 from '../assets/images/events/Europe Autumn 2022/Event_Europe_Autumn_2022_Hero_320.png';
import Network from '../assets/images/events/Europe Autumn 2022/Europe_Autumn_2022_itinerary.png';
import Seville from '../assets/images/events/Europe Autumn 2022/Europe_Autumn_2022_Spotlight.png';
import CaptionPeople from '../assets/images/events/europe_winter/Europe_Winter_Abu_dhabi_Artboard.png';
import SheratonLogo from '../assets/images/events/partner_logos/Sheraton_Porto_Black.jpg';
import PortoLogo from '../assets/images/events/partner_logos/LOGOS_PORTOPALACIO-1.jpg';
import Crowne from '../assets/images/events/partner_logos/crowne-plaza.png';
import PortoCVB from '../assets/images/events/partner_logos/LogoVisitPorto&North_rbg_pos.png';
import Turismo from '../assets/images/events/partner_logos/VisitPortugal.png';
import Alfandega from '../assets/images/events/partner_logos/Alfandega-Porto-Congress-Centre.png';
import Leading from '../assets/images/events/partner_logos/Leading_horizontal_JPEG-02.jpg';
import Terminal from '../assets/images/events/partner_logos/Logo_Terminal_ING_cores.png';
import BaronsHall from '../assets/images/events/partner_logos/LOGOBARONSHALLGALLERY.png';
import Tipos from '../assets/images/events/partner_logos/LOGOTIPOS_ACP_PB  COMBINADOS.JPG';
import WOW from '../assets/images/events/partner_logos/WOW-01.png';
import Rendez from '../assets/images/events/partner_logos/rendeverse.png';
import Anetours from '../assets/images/events/partner_logos/Anetours.png';
import AudioVisuals from '../assets/images/events/partner_logos/Audiovisuals logo.jpeg';
import Griffin from '../assets/images/events/partner_logos/Griffin Events.jpg';
import Iberobus from '../assets/images/events/partner_logos/Iberobus.bmp'
import IberIMAGINARTECONOMATOIMG from '../assets/images/events/partner_logos/IMAGINARTECONOMATOIMG-03.jpg'



// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const EuropeAutumn2022 = () => {
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
                <title>m&i Europe Autumn 2022, Porto | m&i </title>
                <meta
                    name='description'
                    content='Global suppliers meet UK & European buyers at this unmissable Flagship MICE Forum. Join us in sunny Porto and sign up now.'
                />
                <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_Europe_Autumn_2022.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_Europe_Autumn_2022.png"} />
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
                                        Autumn 2022
                                    </span>
                                </h1>
                                <br />
                                <p style={{ fontSize: '25px' }}>
                                    31 august - 3 september
                                    <br />
                                    porto, portugal
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
                                    Pack your bags because m&i is whisking you
                                    off to sunny Porto for another fantastic
                                    Flagship Forum! Taking place over 3
                                    thrilling days, you’ll join the industry’s
                                    finest on a trip that will provide not only
                                    exceptional new connections and business
                                    leads but great memories that will last a
                                    lifetime. So read on and discover more about
                                    what this in-person event has to offer. We
                                    promise you won’t be disappointed…
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
                                            m&i Europe Autumn
                                        </span>{' '}
                                        in numbers.
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className='numbers-caption '>
                                                <h1 className='eventNumbers coral'>
                                                    3
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
                                                    150
                                                </h1>
                                                <p>supplier tables</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers coral'>
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
                                    <span className='fawn-underlined'>
                                        porto.
                                    </span>
                                </h2>
                                <p
                                    style={{ paddingRight: '40px' }}
                                    className='mobilePadding-2'
                                >
                                    It’s tough not to fall for Porto’s rustic
                                    yet contemporary charms. This enticing
                                    Portuguese city is the perfect pairing of
                                    tradition (think winding, step-lined
                                    alleyways, washing-lines with laundry
                                    billowing in the wind, and seagulls
                                    squawking overhead as you stroll along the
                                    docks of the Douro) mixed with a modern
                                    twist that has propelled it firmly into the
                                    21st Century (picture avant-garde
                                    architecture, trendy bars & restaurants,
                                    plus the stunning art museum and concert
                                    hall).
                                    <br />
                                    <br />
                                    With a city centre that’s been listed as a
                                    UNESCO World Heritage Site, an international
                                    airport just 15 minutes away, a congress
                                    centre with up to 36,000m², and an
                                    impressive choice of accommodation, Porto is
                                    perfect for MICE events of every kind.
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
                                        href='https://www.ccalfandegaporto.com/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        alfandega congress center
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
                                        href='https://www.marriott.co.uk/hotels/travel/oposi-sheraton-porto-hotel-and-spa/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        sheraton porto hotel & spa
                                    </a>
                                </h2>
                                <hr />
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.ihg.com/crowneplaza/hotels/gb/en/porto/opocp/hoteldetail'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        crowne plaza porto
                                    </a>
                                </h2>
                                <hr />
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.editoryhotels.com/porto-palacio/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        porto palácio hotel & spa
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
                                        stunning Portuguese city
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
                                        Destination discovery — discover Porto’s
                                        MICE infrastructure
                                    </li>
                                    <li>
                                        Networking activities — experience
                                        Porto’s top attractions with fellow
                                        attendees
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
                                    <span className='coral-underlined'>
                                        are you ready to make new
                                        <br />{ ' '}
                                        business connections
                                    </span>{' '}
                                    and { ' '}
                                    <br />
                                    discover the delights of porto?
                                </h2>
                                <br />

                                <p className='eventFooterText'>
                                    Sign up for m&i Europe Autumn 2022 and a
                                    member of our <br />
                                    friendly team will be in touch to discuss
                                    the next steps.{' '}
                                </p>
                                <a href='/signup'>
                                    <span className=' btn btn-secondary white'>
                                        sign me up
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
                                <a href='https://www.visitportugal.com/en/destinos/porto-e-norte'>
                                    <img
                                        alt={' '}
                                        src={Turismo}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.portocvb.com/'>
                                    <img
                                        alt={' '}
                                        src={PortoCVB}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.marriott.co.uk/hotels/travel/oposi-sheraton-porto-hotel-and-spa/'>
                                    <img
                                        alt={' '}
                                        src={SheratonLogo}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a href='https://www.editoryhotels.com/porto-palacio/'>
                                    <img
                                        alt={' '}
                                        src={PortoLogo}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a href='https://www.ihg.com/crowneplaza/hotels/gb/en/porto/opocp/hoteldetail'>
                                    <img
                                        alt={' '}
                                        src={Crowne}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.ccalfandegaporto.com/en/'>
                                    <img
                                        alt={' '}
                                        src={Alfandega}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.leading.pt/'>
                                    <img
                                        alt={' '}
                                        src={Leading}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.apdl.pt/en_US/terminal-passageiros-sul'>
                                    <img
                                        alt={' '}
                                        src={Terminal}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://barons-hall.com/?utm_source=Google&utm_medium=Organic&utm_campaign=GMB'>
                                    <img
                                        alt={' '}
                                        src={BaronsHall}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://palaciodabolsa.com/'>
                                    <img
                                        alt={' '}
                                        src={Tipos}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://wow.pt/?gclid=EAIaIQobChMIpNXqvJbu9wIVEb_tCh06pgCFEAAYASAAEgLKH_D_BwE'>
                                    <img
                                        alt={' '}
                                        src={WOW}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='http://www.newaudiovisuais.pt/'>
                                    <img
                                        alt={' '}
                                        src={AudioVisuals}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://anetours.pt/'>
                                    <img
                                        alt={' '}
                                        src={Anetours}
                                        className={'partnerLogo'}
                                    />
                                </a>


                                <a href='https://www.imagin-art.pt/'>
                                    <img
                                        alt={' '}
                                        src={IberIMAGINARTECONOMATOIMG}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://www.instagram.com/griffin_events_/'>
                                    <img
                                        alt={' '}
                                        src={Griffin}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a href='https://iberobus.com/'>
                                    <img
                                        alt={' '}
                                        src={Iberobus}
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

export default EuropeAutumn2022;
