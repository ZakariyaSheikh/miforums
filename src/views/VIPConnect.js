import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/VIP Connect Americas 2022/Event_VIP_Connect_Americas_2022_Hero_1920.png';
import HeroBanner1024 from '../assets/images/events/VIP Connect Americas 2022/Event_VIP_Connect_Americas_2022_Hero_1024.png';
import HeroBanner766 from '../assets/images/events/VIP Connect Americas 2022/Event_VIP_Connect_Americas_2022_Hero_766.png';
import HeroBanner320 from '../assets/images/events/VIP Connect Americas 2022/Event_VIP_Connect_Americas_Hero_320.png';
import Itinerary from '../assets/images/events/VIP Connect Americas 2022/VIP_Connect_Americas_2022_itinerary.png';
import Spotlight from '../assets/images/events/VIP Connect Americas 2022/VIP_Connect_Americas_2022_Spotlight.png';
// import WyredWorldLogo from "../assets/images/wyredworldlogo.svg"

const VIPConnect = () => {
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
                <title>m&i VIP Connect Americas 2022, Whistler | m&i </title>
                <meta
                    name='description'
                    content='Connect with the MICE industry’s elite buyers and suppliers at this invitation-only event in Canada. Apply for your invite today.'
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
                                        VIP Connect <br />
                                        Americas 2022
                                    </span>
                                </h1>
                                <br />
                                <p style={{ fontSize: '25px' }}>
                                    summer - dates TBC
                                    <br />
                                    whistler, bc, canada
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
                                    As part of our VIP Connect series, this is
                                    not your average Forum. This exclusive event
                                    is a real meeting of minds, designed to
                                    bring the most elite buyers and suppliers of
                                    the MICE industry together for four days of
                                    top-level networking and relationship
                                    building. Strictly invitation only, our VIP
                                    Connect event in Whistler, Canada will
                                    feature a themed programme of thought
                                    leadership, intimate networking and
                                    destination-based experiences - the ultimate
                                    trip for senior-level MICE professionals.
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
                                            m&i VIP Connect
                                        </span>{' '}
                                        in numbers...
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    4
                                                </h1>
                                                <p>exclusive days</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    35
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
                                                <p>global suppliers</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers'>
                                                    110
                                                </h1>
                                                <p>top buyers</p>
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
                            <div className='col-lg-6 ml-lg-auto py-4'>
                                <h2 className='site-section-heading font-secondary '>
                                    spotlight on{' '}
                                    <span className='blue-underlined'>
                                        whistler.
                                    </span>
                                </h2>
                                <p
                                    style={{ paddingRight: '40px' }}
                                    className='mobilePadding-2'
                                >
                                    Breathtaking beauty, incredible mountain
                                    scenery and a buzzing, pedestrian-only
                                    village - welcome to magical Whistler in
                                    British Columbia, Canada. Not every
                                    destination in the world can boast a huge
                                    variety of things to do in both the summer
                                    and winter months, but Whistler truly does
                                    have it all. Not only is it strikingly
                                    beautiful, like something off of a postcard,
                                    but this versatile destination can provide
                                    everything from skiing, snowboarding,
                                    bobsledding and sleigh rides in the winter,
                                    to hiking, golf, ziplining and off-road
                                    adventures in the summer.
                                    <br />
                                    <br />
                                    Whistler is already home to multiple
                                    festivals, large-scale events and races,
                                    which gives it the perfect infrastructure
                                    for hosting events. You’ll also find
                                    accommodation to suit every need here, from
                                    high-end, luxury properties to moderate,
                                    budget-friendly hotels.
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='event-venue blue-bg'>
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
                                    meeting venue
                                </h3>
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a className='venueLink white' href='/'>
                                        TBC
                                    </a>
                                </h2>
                            </div>
                            <div className='col-lg-6 ml-lg-auto py-5 '>
                                <h3
                                    className='site-section-heading font-secondary '
                                    style={{
                                        textDecoration: 'underline',
                                        color: '#fff',
                                    }}
                                >
                                    accommodation venues
                                </h3>
                                <h2
                                    className='accommodation'
                                    style={{ lineHeight: '45px' }}
                                >
                                    <a
                                        className='venueLink white'
                                        href='/#'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        TBC
                                    </a>
                                </h2>
                                {/* <hr />
                                <h2 style={{ lineHeight: '45px' }}>
                                    <a
                                        className='venueLink white'
                                        href='https://www.hilton.com/en/hotels/ywsvrhf-hilton-whistler-resort-and-spa/'
                                        target="_blank" rel="noopener noreferrer" >
                                        hilton whistler resort & spa
                                    </a>
                                </h2> */}
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
                                        <Tab
                                            tabFor='five'
                                            className='eventTabs'
                                        >
                                            day 4
                                        </Tab>
                                    </TabList>
                                    <TabPanel tabId='one'>
                                        <ul className='itineraryList'>
                                            <li>You arrive (yay!)</li>
                                            <li>Optional site visits</li>
                                            <li>
                                                A welcome dinner for buyers only
                                            </li>
                                            <li>
                                                Time to get some sleep after a
                                                busy day of travelling
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='two'>
                                        <ul className='itineraryList'>
                                            <li>
                                                Start the day strong with our
                                                optional Forum fitness classes
                                            </li>
                                            <li>
                                                A morning of unique networking
                                                experiences
                                            </li>
                                            <li>
                                                Time to do business during your
                                                1-2-1 meetings
                                            </li>
                                            <li>
                                                Get ready to mingle during our
                                                fantastic dinner
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='three'>
                                        <ul className='itineraryList'>
                                            <li>
                                                {' '}
                                                Stay in shape with our Forum
                                                fitness classes
                                            </li>
                                            <li>
                                                {' '}
                                                A morning of 1-2-1 meetings
                                            </li>
                                            <li>
                                                Lunch time (and a great chance
                                                to refuel for what’s ahead)
                                            </li>
                                            <li>
                                                An afternoon of VIP roundtables,
                                                talks, thought leader insights,
                                                and keynote speeches from
                                                experienced Meetings & Events
                                                insiders
                                            </li>
                                            <li>
                                                Discuss the incredible day
                                                you’ve had over dinner
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='four'>
                                        <ul className='itineraryList'>
                                            <li>
                                                {' '}
                                                Connect with mind, body and soul
                                                during a Forum fitness class
                                            </li>
                                            <li>
                                                {' '}
                                                Your final morning of 1-2-1
                                                meetings
                                            </li>
                                            <li>Let’s eat</li>
                                            <li>
                                                A final afternoon of networking
                                                excursions in the great outdoors
                                            </li>
                                            <li>
                                                Closing dinner with your new
                                                business partners
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel tabId='five'>
                                        <ul className='itineraryList'>
                                            <li> Departures (boo!)</li>
                                            <li>
                                                {' '}
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
                                        4 days of exclusive networking with the
                                        industry’s most senior buyers
                                    </li>
                                    <li>Invitation only guestlist</li>
                                    <li>
                                        Limited to 100 suppliers for enhanced
                                        connection-building
                                    </li>
                                    <li>
                                        Cutting-edge AI matchmaking technology
                                        to find your best meeting potential
                                    </li>
                                    <li>
                                        Unique, destination-based activities for
                                        optimum networking
                                    </li>
                                    <li>
                                        Outstanding dinners and social nightlife
                                        experiences
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
                                        1-2-1 meetings with elite members of the
                                        MICE property world
                                    </li>
                                    <li>
                                        A chance to discover the wonders of
                                        Whistler, Canada
                                    </li>
                                    <li>
                                        Truly exclusive networking experiences,
                                        giving you plenty of additional time to
                                        build strong connections with the
                                        industry’s finest
                                    </li>

                                    <li>
                                        Knowledge sharing, peer-to-peer learning
                                        and educational opportunities
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
                                        Breakfast, lunch and outstanding dinners
                                        provided
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
                                    think you should be at{' '}
                                    <span className='coral-underlined'>
                                        m&i VIP <br />
                                        Connect Americas 2022?{' '}
                                    </span>
                                </h2>
                                <br />

                                <p className='eventFooterText'>
                                    This event is invitation only, but if you
                                    think you should be <br />
                                    on our guestlist, let us know by applying
                                    below. A member of <br />
                                    our friendly team will be in touch as soon
                                    as possible.
                                </p>
                                <a href='/signup'>
                                    <span className=' btn btn-secondary white'>
                                        apply now
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
                                {/* <a href='https://www.riu.com/en/hotel/spain/madrid/hotel-riu-plaza-espana/index.jsp' target="_blank" rel="noopener noreferrer" >
                                    <img
                                        alt={' '}
                                        src={RiuPlaza}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a href='http://www.healthcare-venues.com/'>
                                    <img
                                        alt={' '}
                                        src={HealthcareVenue}
                                        className={'partnerLogo'}
                                    />
                                </a>
                                <a href='http://www.360eventconsulting.com/'>
                                    <img
                                        alt={' '}
                                        src={ThreeSixty}
                                        className={'partnerLogo'}
                                    />
                                </a> */}
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

export default VIPConnect;
