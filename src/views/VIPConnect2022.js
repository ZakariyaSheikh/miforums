import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/vip_connect_2022/Event_VIP_Connect_Europe_2022_Hero_1920.png';
import HeroBanner1024 from '../assets/images/events/vip_connect_2022/Event_VIP_Connect_Europe_2022_Hero_1024.png';
import HeroBanner766 from '../assets/images/events/vip_connect_2022/Event_VIP_Connect_Europe_2022_Hero_766.png';
import HeroBanner320 from '../assets/images/events/vip_connect_2022/Event_VIP_Connect_Europe_2022_Hero_320.png';
import Network from '../assets/images/events/vip_connect_2022/itinerary.png';
import Seville from '../assets/images/events/vip_connect_2022/spotlight_madeira.png';
import Edition from '../assets/images/events/vip_connect_2022/2022_edition.png'
import CaptionPeople from '../assets/images/events/vip_connect_2022/characters.png';
import SavoyPalace from '../assets/images/events/partner_logos/SavoyPalace_Positive.png';
import AbreuLogo from '../assets/images/events/partner_logos/abreu-Events_Global.png';
import Hermes from '../assets/images/events/partner_logos/hermes_group_logo.jpg';
import Climate from '../assets/images/events/partner_logos/climate_first_logo.png';
import Madeira from '../assets/images/events/partner_logos/En-logo-legenda-preto-14-03.jpg';
import DesignCentre from '../assets/images/events/partner_logos/designcentrenini.png';
import AnnaH from '../assets/images/events/vip_connect_2022/Anna_H.png';
import ErikH from '../assets/images/events/vip_connect_2022/Erik_H.png';
import Vianei from '../assets/images/events/vip_connect_2022/Vianei_H.png';
import Maria from '../assets/images/events/vip_connect_2022/Maria_S.png';

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
                <title>m&i VIP Connect 2022, Madeira | m&i </title>
                <meta name='description' content='Connect with the MICE industry’s elite buyers and suppliers at this invitation-only event in Portugal. Apply for your invite today.' />
                <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_VIP_Connect_2022.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_VIP_Connect_2022.png"} />
            </Helmet>
            <div className='site-wrap'>
                <div
                    className='madeira-hero-slider mobileSeville'
                    style={{
                        backgroundImage: `url(${heroBannerUrl})`,
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
                                        VIP Connect <br />
                                        2022
                                    </span>
                                </h1>
                                <br />
                                <p style={{ fontSize: '25px' }}>
                                    3-6 July
                                    <br />
                                    madeira, portugal
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
                                    As part of our VIP Connect series, this is not your average Forum. This exclusive event is a real meeting of minds, designed to bring the most elite buyers and suppliers of the MICE industry together for three days of top-tier networking and unrivalled relationship building. <br /><br />
                                    Strictly invitation only, our VIP Connect event in Madeira will feature a themed programme of intimate networking and high-end, destination-based experiences that will show off the truly breathtaking natural landscapes of this archipelago island - it’s the ultimate trip for senior-level MICE professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='numbers-section eventNumbers blush-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-4 laptop'
                                style={{ color: '#fff' }}
                            >
                                <div className='inNumbers'>
                                    <h2 className='site-section-heading font-secondary '>
                                        <span className='coral-underlined'>
                                            m&i VIP Connect
                                        </span>{' '}
                                        in numbers.
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    3
                                                </h1>
                                                <p> days</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    30
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
                                                <p>elite supplier tables</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    110
                                                </h1>
                                                <p>top-tier MICE buyers</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-half">
          <div className="img-bg-1">
            <img alt={" "} src={Edition} className={"edition"} />
          </div>
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "100px" }}
              >
                <h2 className="site-section-heading font-secondary">
                <span className='coral-underlined'>
                                        the sustainability edition
                                    </span>
                </h2>
                <p>
                This year’s edition of m&i VIP Connect will be centred around sustainable industry practices. We’re so excited to be partnering with Swedish sustainability experts, Hermes Group and Climate First, who will be providing attendees with some truly progressive insights into the environmentally friendly future of meetings & events. Of course, this event is all about sharing knowledge between major MICE players, which is why our VIP Connect guests will have the opportunity to share their ideas for growing a more sustainable industry and present what measures they’ve already put into effect.

                </p>
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
                                        madeira.
                                    </span>
                                </h2>
                                <p
                                    style={{ paddingRight: '80px' }}
                                    className='mobilePadding-2'
                                >
                                    With an almost tropical climate, it’s easy to forget that the island of Madeira is actually part of Europe! Boasting some seriously picturesque natural scenery, including Pico Ruivo, the island’s highest point, the traditional fishing village of Câmara de Lobos, and the magnificent waterfalls at Levada das 25 Fonts, Madeira is brimming with natural beauty and a whole host of diverse landscapes that are just begging to be explored.

                                    <br />
                                    <br />
                                    But what about Madeira’s MICE credentials? Well, this is where the island really shines. Featuring a wide variety of high-end properties with ample meeting space, the largest being Savoy Palace (our event host), and a 5,000sq.m conference centre with space for up to 750 guests, Madeira is well-equipped for meetings & events of all shapes and sizes.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='eventspeakers-section'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-5 laptop'

                            >
                                <h2 className='site-section-heading font-secondary' style={{textAlign:'center'}}>

                                        meet our event speakers

                                </h2>


                                <div
                    className='site-half block'
                    style={{ paddingBottom: '5rem' }}
                >
                    <div className='img-bg-1'>
                        {' '}
                        <img
                            alt={' '}
                            src={AnnaH}
                            className={'speakers'}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-8 ml-lg-auto' >
                                <h2 className=' font-secondary '>
                                    <span className='coral'>
                                        anna hermes
                                    </span>
                                </h2>
                                <h4 className='site-section-heading font-secondary '>
                                    <span className='raven'>
                                       Founder and CEO of Hermes Group AB
                                    </span>
                                </h4>
                                <p
                                    style={{ paddingRight: '180px' }}
                                    className='mobilePadding-2'
                                >
                                   With over 17 years of event management experience, Anna provides unique meetings & event experiences that help companies fulfil their personal and professional sustainability goals and increase employee happiness & engagement.

                                    <br />
                                    <br />
                                   <a href="https://www.linkedin.com/in/annahermes/" class="blue-underlined">Connect with Anna on LinkedIn</a>

                                </p>
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
                            src={Vianei}
                            className={'speakers'}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-8 ml-lg-auto' >
                                <h2 className=' font-secondary '>
                                    <span className='coral'>
                                        vianei hermes
                                    </span>
                                </h2>
                                <h4 className='site-section-heading font-secondary '>
                                    <span className='raven'>
                                    Founder of Climate First and Sustainability Manager at Hermes Group

                                    </span>
                                </h4>
                                <p
                                    style={{ paddingRight: '180px' }}
                                    className='mobilePadding-2'
                                >
                                 Born and raised in Brazil, Vianei is the founder of Climate First, a Swedish NGO striving to minimise negative human impact on the planet and increase knowledge on climate change and sustainability, particularly within the events industry.

                                    <br />
                                    <br />
                                   <a href="https://www.linkedin.com/in/vianei-hermes-13b1b4/" class="blue-underlined">Connect with Vianei on LinkedIn</a>

                                </p>
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
                            src={ErikH}
                            className={'speakers'}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-8 ml-lg-auto' >
                                <h2 className=' font-secondary '>
                                    <span className='coral'>
                                        erik huss
                                    </span>
                                </h2>
                                <h4 className='site-section-heading font-secondary '>
                                    <span className='raven'>
                                    Public speaker, expert on climate change and Earth system science


                                    </span>
                                </h4>
                                <p
                                    style={{ paddingRight: '180px' }}
                                    className='mobilePadding-2'
                                >
                                Erik has extensive experience in communications, public relations and Earth system science. His background as a geographer and science journalist, specialising in glaciology and climate research has given him a broad view of how to run a sustainable business.


                                    <br />
                                    <br />
                                   <a href="https://www.linkedin.com/in/erikhuss/" class="blue-underlined">Connect with Erik on LinkedIn</a>

                                </p>
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
                            src={Maria}
                            className={'speakers'}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-8 ml-lg-auto' >
                                <h2 className=' font-secondary '>
                                    <span className='coral'>
                                    maria svantemark

                                    </span>
                                </h2>
                                <h4 className='site-section-heading font-secondary '>
                                    <span className='raven'>
                                    Co-Founder & CEO at SustainLab
                                    </span>
                                </h4>
                                <p
                                    style={{ paddingRight: '180px' }}
                                    className='mobilePadding-2'
                                >
                                Maria is a sustainability expert & entrepreneur working to make businesses more sustainable. SustainLab is a SaaS Sustainability Management platform that automates collection, processing and visualization of sustainability data.
                                    <br />
                                    <br />
                                   <a href="https://www.linkedin.com/in/mariasvantemark/" class="blue-underlined">Connect with Maria on LinkedIn</a>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                            </div>
                        </div>
                    </div>
                </div>

                <div className='event-venue yellow-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-5 py-5 '>
                                <h3
                                    className='site-section-heading font-secondary '
                                    style={{ textDecoration: 'underline' }}
                                >
                                    meeting & accommodation venue
                                </h3>
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink'
                                        href='https://www.savoysignature.com/savoypalacehotel/en/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        savoy palace{' '}
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
                                            <li>Optional site visit (buyers only)</li>
                                            <li>
                                            Opening Night
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='two'>
                                        <ul className='itineraryList'>
                                            <li>
                                            Breakfast learning session - time to get an understanding about climate change and sustainability
                                            </li>
                                            <li>
                                            Connect with the earth - a morning of networking activities and destination experiences
                                            </li>
                                            <li>
                                            Feel inspired - a session for sustainable best practices within the MICE industry
                                            </li>
                                            <li>Time for some 1-2-1 meetings</li>
                                            <li>Get ready to mingle at our networking dinner</li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='three'>
                                        <ul className='itineraryList'>

                                            <li>A morning of 1-2-1 meetings
</li>
                                            <li>
                                            Lunch time (and a great chance to refuel for what’s ahead)
                                            </li>
                                            <li>Connect with the sea - high-end networking experiences in Madeira’s stunning natural surroundings</li>
                                            <li>
                                            High-end networking experiences in Madeira’s stunning natural surroundings

                                            </li>
                                            <li>Meeting of minds - time to put our heads together for the creation of a sustainability bible</li>
                                            <li>
                                            Farewell dinner

                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='four'>
                                        <ul className='itineraryList'>
                                            <li>
                                            A final morning of 1-2-1 meetings

                                            </li>
                                            <li>
                                            Lunch time

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
                                    3 days of exclusive networking with top-tier buyers

                                    </li>
                                    <li>
                                    Invitations only extended to buyers with real decision-making power

                                    </li>
                                    <li>
                                    Limited to 100 suppliers for enhanced connection-building

                                    </li>
                                    <li>In-depth sustainability programme from industry pioneers
</li>
                                    <li>
                                    Cutting-edge AI matchmaking technology to find your best meeting potential
                                    </li>
                                    <li>
                                    Exclusive activities for optimum networking

                                    </li>
                                    <li>
                                    Exceptional dinners and nightlife experiences

                                    </li>
                                    <li>
                                    Friendly Account Manager to guide you from start to finish</li>
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
                                    1-2-1 meetings with senior-level European MICE suppliers
                                    </li>
                                    <li>
                                    Truly exclusive opportunities to discover the best of Madeira

                                    </li>
                                    <li>In-depth sustainability programme from industry pioneers</li>
                                    <li>
                                    A VIP programme of high-end activities and experiences

                                    </li>
                                    <li>
                                    Cutting edge AI matchmaking technology to find your best meeting potential

                                    </li>
                                    <li>
                                    Bespoke buyer package, including accommodation and transfers, as well as airfare/train credits. 

                                    </li>
                                    <li>
                                    Breakfast, lunch and outstanding dinners provided

                                    </li>
                                    <li>
                                    Glamorous parties and nightlife experiences
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

                <div className='event-footer-slider blush-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-8 ml-rg-auto py-5 laptop'
                                style={{ paddingLeft: '100px' }}
                            >
                                <h2 >
                                    think you should be at
                                    {' '}
                                    <span className='blue-underlined'>
                                        m&i <br />VIP Connect 2022?
                                    </span>
                                </h2>
                                <br />

                                <p className='eventFooterText'>
                                This event is invitation only, but if you think you should be on<br/> our guestlist, let us know by applying below. A member of<br/> our friendly team will be in touch as soon as possible.
                                </p>
                                <a href='/signup'>
                                    <span className=' btn btn-secondary white'>
                                        apply now
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
                                    href='https://www.apmadeira.pt/pt/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Madeira}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.savoysignature.com/savoypalacehotel/en/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={SavoyPalace}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a
                                    href='https://www.abreuevents.com/Default.aspx'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={AbreuLogo}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a
                                    href='http://hermesgroup.se/en/home/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={''}
                                        src={Hermes}
                                        className={'partnerLogo'}
                                    />
                                    </a>



                                    <a
                                    href='http://climatefirst.se/en/home/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={Climate}
                                        className={'partnerLogo'}
                                    />
                                </a>

                                <a
                                    href='http://www.ninidesigncentre.com/en/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        alt={' '}
                                        src={DesignCentre}
                                        style={{width:'150px'}}
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
