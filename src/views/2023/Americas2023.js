import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Carousel from "../../components/elements/Carousel"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Sticky from 'react-sticky-el';
import '../../assets/scss/style.scss';
import HeroBanner1920 from '../../assets/images/events/2023/Americas/americas_el_paso_heroimage_1920px.jpg';
import HeroBanner1024 from '../../assets/images/events/2023/Americas/americas_el_paso_heroimage_1024px.jpg';
import HeroBanner766 from '../../assets/images/events/2023/Americas/americas_el_paso_heroimage_766px.jpg';
import HeroBanner320 from '../../assets/images/events/2023/Americas/americas_el_paso_heroimage_320px.jpg';
import CTABanner from '../../assets/images/events/2023/Americas/americas_el_paso_ctaimage_1920px.jpg';
import Network from '../../assets/images/events/2023/Americas/americas_el_paso_spotlight.png';
import Seville from '../../assets/images/events/2023/Americas/americas_el_paso_what_to_expect.png';
import TestBG from '../../assets/images/events/2023/Americas/elpaso_hero.png';
import HotelPaso from '../../assets/images/events/partner_logos/Hotel Paso Del Norte.jpg';
import VisitElPasoLogo from '../../assets/images/events/partner_logos/VisitElPasoLogo.jpg';
import Panel from '../../assets/images/panel_image_advisory_board.png';
import CaptionPeople from '../../assets/images/events/americas_2021/conversational_characters.svg';
import Torre from '../../assets/images/events/2023/Europe Private/LOGOTORREDELMAR.gif';
import Courtyard from '../../assets/images/events/partner_logos/courtyardbymarriott.jpg'; 
import Plaza from '../../assets/images/events/partner_logos/PLAZA_LOGO.png';
import GAIN from '../../assets/images/events/partner_logos/gain_logo.jpg'
import Ncdjproductions from '../../assets/images/events/partner_logos/ncdjproductions.jpg'
import CountyLine from '../../assets/images/events/partner_logos/countyline.png'
import EpicRailyard from '../../assets/images/events/partner_logos/epicrailyard.png'

// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"
const Americas2023 = () => {
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



  const images = [
    [
      VisitElPasoLogo, HotelPaso, 
    ],
    [
        Plaza, Courtyard, Ncdjproductions, CountyLine, EpicRailyard
    ],

    
  ];
 
  const links = [
    ['https://visitelpaso.com/', 'https://www.marriott.com/en-us/hotels/elpak-hotel-paso-del-norte-autograph-collection'],
    ['https://www.plazahotelelpaso.com/','https://www.marriott.com/en-us/hotels/elpcv-courtyard-el-paso-downtown-convention-center/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0', 'https://ncdjproductions.com/']
  ];
  const headings = ['gold', 'bronze']



    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>m&i Americas, El Paso 2023 | m&i</title>
                <meta
                    name='description'
                    content='This Flagship event is all about connecting American planners in the MICE industry with top global suppliers in sunny El Paso. Sound good to you? Apply now. '
                />
                <meta
                    property='og:url'
                    content={
                        'https://www.mi-forums.com/images/ographs/OG_image_Europe_Autumn_2022.png'
                    }
                />
                <meta
                    property='og:image'
                    content={
                        'https://www.mi-forums.com/images/ographs/OG_image_Europe_Autumn_2022.png'
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
                                        className='header-section-heading yellow'
                                        style={{
                                            backgroundImage: `url(${TestBG})`,
                                        }}
                                    >
                                        <span className='coral-underlined'>
                                            explore a brand new
                                            <br /> MICE infrastructure{' '}
                                        </span>{' '}
                                        and
                                        <br />
                                        new business potential
                                        <br /> in the sun city.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Sticky>
                        <div className='event-under-banner'>
                            <div className='container'>
                                <div className='row no-gutters align-items-stretch'>
                                    <div className=' ml-rg-auto event-sticky-text'>
                                        <h3>love the sound of this event?</h3>
                                    </div>
                                    <div className='ml-rg-auto event-buttons'>
                                        <a href='/tell-me-more'>
                                            <span className=' btn btn-secondary transparentYellow'>
                                                tell me more
                                            </span>
                                        </a>
                                        <a href='/signup'>
                                            <span className=' btn btn-secondary yellowBtn'>
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
                                <div className='col-lg-7 ml-rg-auto'>
                                    <div className='eventTitle'>
                                        <h2 className='site-section-heading font-secondary'>
                                            m&i Americas, El Paso 2023
                                        </h2>
                                        <span>
                                            1-4 october <br /> texas
                                        </span>
                                        <br />
                                        <br />
                                        <p>
                                            Take a trip with us to the American
                                            Southwest. El Paso, Texas to be
                                            exact. At this 3 night Americas
                                            Flagship Forum, you’ll have the
                                            opportunity to connect with American
                                            buyers and global suppliers through
                                            smart 1-2-1 meetings. Outside of the
                                            meeting hall, you can expect a whole
                                            host of unforgettable El Paso
                                            networking experiences and the
                                            chance to discover some of the
                                            city’s most popular locations and
                                            venues.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-lg-5 ml-rg-auto py-3'>
                                    <div className='eventNavigation'>
                                        <h4 className='site-section-heading font-secondary'>
                                            Click to jump to:
                                        </h4>
                                        <a href='#numbers'>
                                            <p>This event in numbers </p>
                                        </a>
                                        <a href='#spotlight'>
                                            <p>Spotlight on El Paso </p>
                                        </a>
                                        <a href='#meeting'>
                                            <p>
                                                Meeting & accommodation venue{' '}
                                            </p>
                                        </a>
                                        <a href='#itinerary'>
                                            <p>Sample itinerary</p>
                                        </a>
                                        <a href='#packages'>
                                            <p>Your package</p>
                                        </a>
                                        <a href='#signup'>
                                            <p>Sign up</p>
                                        </a>
                                    </div>
                                </div>
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
                                    <div className='container'>
                                        <div className='inNumbers'>
                                            <h2 className='site-section-heading font-secondary '>
                                                <span className='underlined'>
                                                    m&i Americas
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
                                                            160
                                                        </h1>
                                                        <p>american buyers</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div
                                                className='anchorScroll'
                                                id='spotlight'
                                            ></div>
                                        </div>
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
                                <div className='col-lg-5 ml-lg-auto py-5'>
                                    <h2 className='site-section-heading font-secondary '>
                                        spotlight on{' '}
                                        <span className='blue-underlined'>
                                            el paso.
                                        </span>
                                    </h2>
                                    <p
                                        style={{ paddingRight: '60px' }}
                                        className='mobilePadding-2'
                                    >
                                        Whilst it’s technically part of Texas,
                                        the city of El Paso is a hard one to
                                        place. Why? Because it actually borders
                                        three states and two countries: Texas
                                        and New Mexico in the USA and Chihuahua,
                                        Mexico. This unusual intersection has
                                        resulted in a US state with a
                                        distinctively Mexican feel (not to
                                        mention its Spanish name, which comes
                                        from ‘El Paso del Norte’, meaning ‘the
                                        passageway to the north’).
                                        <br />
                                        <br />
                                        El Paso has been nicknamed ‘Sun City’,
                                        thanks to its glorious 302 days of
                                        sunshine each year. This makes it a
                                        pretty reliable location for hosting
                                        both indoor and outdoor events. Speaking
                                        of events, did you know that El Paso has
                                        a newly remodelled convention centre
                                        offering state-of-the-art meeting rooms
                                        and services? Plus, in the last 18
                                        months, the city has doubled its hotel
                                        inventory!
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='anchorScroll' id='meeting'></div>
                    </div>

                    <div className='event-venue coral-bg'>
                        <div className='container'>
                            <div className='row no-gutters align-items-stretch'>
                                <div className='col-lg-6 ml-lg-auto py-5 '>
                                    <h3
                                        className='site-section-heading font-secondary '
                                        style={{ textDecoration: 'underline' }}
                                    >
                                        meeting venue
                                    </h3>
                                    <h2 style={{ lineHeight: '45px' }}>
                                        <a
                                            className='venueLink'
                                            rel='noopener noreferrer'
                                            href='https://www.asmglobal.com/p/our-portfolio/convention-exhibition-centers/judson-f-williams-convention-center'
                                        >
                                            williams convention centre
                                        </a>
                                    </h2>
                                </div>

                                <div className='col-lg-5 ml-lg-auto py-5 '>
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
                                            href='https://www.marriott.com/en-us/hotels/elpak-hotel-paso-del-norte-autograph-collection'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            hotel paso del norte, autograph
                                            collection
                                        </a>    
                                        <hr></hr>


                                          <a
                                            className='venueLink'
                                            href='https://www.marriott.com/en-us/hotels/elpcv-courtyard-el-paso-downtown-convention-center/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0'
                                            target='_blank'     
                                            rel='noopener noreferrer'
                                        >
                                            courtyard by marriott el paso downtown
                                        </a>
                                        <hr></hr>

                                        
                                        <a
                                            className='venueLink'
                                            href='https://www.plazahotelelpaso.com'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            plaza hotel at pioneer park
                                        </a>   
                                    </h2>

                                    {/* <hr />

                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.all.accor.com/hotel/5389/index.en.shtml'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        novotel den haag world forum
                                        </a>
                                        <div className="anchorScroll"  id="itinerary"></div>
                                </h2> */}
                                </div>
                            </div>
                            <div className='anchorScroll' id='itinerary'></div>
                        </div>
                    </div>

                    <div className='site-half eventItinerarySection'>
                        <div className='container'>
                            <div className='row no-gutters align-items-stretch'>
                                <div className='col-lg-5 ml-lg-auto py-5 '>
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
                                    <div
                                        className='anchorScroll'
                                        id='packages'
                                    ></div>
                                </div>
                                <div className='col-lg-6 ml-lg-auto py-5 '>
                                    <div className='img-bg-1'>
                                        <img
                                            alt={' '}
                                            src={Network}
                                            className={'itineraryPicture'}
                                        />
                                    </div>
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
                                <div className='col-lg-5 ml-lg-auto py-5 '>
                                    <h2 className='site-section-heading font-secondary'>
                                        <span className='blue-underlined'>
                                            what's in it for you?
                                        </span>
                                    </h2>
                                    <p>
                                        Take a look at our exciting packages for
                                        this event:
                                    </p>
                                    <br />
                                    <h2 className='site-section-heading font-secondary supplierPackageTitle'>
                                        supplier package
                                    </h2>
                                    <div class='accordion'>
                                        <div>
                                            <input
                                                type='checkbox'
                                                name='panel'
                                                id='panel-1'
                                            />
                                            <label for='panel-1'>
                                                read more
                                            </label>
                                            <div class='accordion__content accordion__content--large'>
                                                {/* <h2 class="accordion__header"></h2> */}
                                                <p class='accordion__body'>
                                                    {' '}
                                                    <ul className='packages'>
                                                        <li>
                                                            3 days of
                                                            high-quality
                                                            networking in a
                                                            popular MICE
                                                            paradise
                                                        </li>
                                                        <li>
                                                            40 guaranteed 1-2-1
                                                            meetings with key
                                                            American buyers
                                                        </li>

                                                        <li>
                                                            Cutting edge AI
                                                            matchmaking
                                                            technology to find
                                                            your best meeting
                                                            potential
                                                        </li>
                                                        <li>
                                                            Networking
                                                            activities for extra
                                                            relationship-building
                                                            with attending
                                                            buyers
                                                        </li>
                                                        <li>
                                                            Outstanding
                                                            networking dinners
                                                            and social nightlife
                                                            experiences
                                                        </li>
                                                        <li>
                                                            Friendly Account
                                                            Manager to guide you
                                                            from start to finish
                                                        </li>
                                                        <li>
                                                            Make your money go
                                                            further with our{' '}
                                                            <a href='/pricing'>
                                                                early payment
                                                                discount
                                                            </a>
                                                        </li>

                                                        <li>
                                                            Multi-Forum
                                                            discounts available
                                                        </li>
                                                        <li>
                                                            Find out how we're{' '}
                                                            <a href='https://www.mi-forums.com/covid-safe-events'>
                                                                keeping you safe
                                                            </a>{' '}
                                                            at this event
                                                        </li>
                                                        <li>
                                                            New to m&i?
                                                            Wondering what to
                                                            expect at our events
                                                            ? See{' '}
                                                            <a href='https://mi-forums.com/supplier-experience'>
                                                                how it works
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <br />
                                    <hr />
                                    <br />
                                    <div
                                        className='anchorScroll'
                                        id='signup'
                                    ></div>

                                    <h2 className='site-section-heading font-secondary buyerPackageTitle'>
                                        hosted buyer package
                                    </h2>
                                    <div class='accordion'>
                                        <div>
                                            <input
                                                type='checkbox'
                                                name='panel'
                                                id='panel-2'
                                            />
                                            <label for='panel-2'>
                                                read more
                                            </label>
                                            <div class='accordion__content accordion__content--large'>
                                                {/* <h2 class="accordion__header"></h2> */}
                                                <p class='accordion__body'>
                                                    {' '}
                                                    <ul className='packages'>
                                                        <li>
                                                            1-2-1 meetings with
                                                            high-quality global
                                                            suppliers
                                                        </li>

                                                        <li>
                                                            Cutting edge AI
                                                            matchmaking
                                                            technology to find
                                                            your best meeting
                                                            potential
                                                        </li>
                                                        <li>
                                                            Accommodation,
                                                            flights and
                                                            transfers included
                                                        </li>
                                                        <li>
                                                            Breakfast, lunch and
                                                            exciting networking
                                                            dinners provided
                                                        </li>
                                                        <li>
                                                            Destination
                                                            discovery — see what
                                                            the city has to
                                                            offer for MICE
                                                            events
                                                        </li>
                                                        <li>
                                                            Networking
                                                            activities —
                                                            experience El Paso
                                                            through the eyes of
                                                            your clients
                                                        </li>
                                                        <li>
                                                            Glamorous dinners,
                                                            parties and
                                                            nightlife
                                                            experiences
                                                        </li>
                                                        <li>
                                                            Find out how we're{' '}
                                                            <a href='https://www.mi-forums.com/covid-safe-events'>
                                                                keeping you safe
                                                            </a>{' '}
                                                            at this event
                                                        </li>
                                                        <li>
                                                            New to m&i?
                                                            Wondering what to
                                                            expect at our events
                                                            ? see{' '}
                                                            <a href='https://mi-forums.com/buyer-experience'>
                                                                how it works
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 ml-lg-auto py-5 '></div>
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
                                            sign up to m&i Americas 2023 <br />{' '}
                                            and{' '}
                                            <span className='underlined'>
                                                gain lots of new MICE <br />{' '}
                                                connections and business leads.
                                            </span>{' '}
                                            <br />{' '}
                                        </h2>
                                        <a href='/signup'>
                                            <span className=' btn btn-secondary white'>
                                                sign me up
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-half partnerSection">
            <div className="container">
              <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5">
                  <h3 className="site-section-heading font-secondary">
                    host partners
                  </h3>

                  <Carousel images={images} links={links} headings={headings} autoPlay />

                  <h3 className="site-section-heading font-secondary">
                    strategic partner
                  </h3>

                  <a
                                    href='https://gainadvisors.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={GAIN}
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

export default Americas2023;
