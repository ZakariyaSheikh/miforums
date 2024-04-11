import React, { useState, useEffect } from 'react';
import '../assets/scss/style.scss';
import HeroBanner1920 from '../assets/images/events/fest/Event_Fest_2021_Hero_1920.png';
import HeroBanner1024 from '../assets/images/events/fest/Event_Fest_2021_Hero_1024.png';
import HeroBanner766 from '../assets/images/events/fest/Event_Fest_2021_Hero_766.png';
import HeroBanner320 from '../assets/images/events/fest/Event_Fest_2021_Hero_320.png';
import Afternoons from '../assets/images/events/fest/afternoons.png';
import Mornings from '../assets/images/events/fest/mornings.png';
import Evenings from '../assets/images/events/fest/evenings.png';
import Venue from '../assets/images/events/fest/venue.png';
import Meetings from '../assets/images/events/fest/event_fest_characters.png';
import CaptionPeople from '../assets/images/events/fest/event_fest_footer.png';
import AmadriaPark from '../assets/images/events/partner_logos/amadria_park_logo.png';

const Fest = () => {
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
            <div className='site-wrap'>
                <div
                    className='fest-hero-slider mobileFest'
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
                                        <br />
                                        Fest 2021
                                    </span>
                                </h1>
                                <br />
                                <p style={{ fontSize: '25px' }}>
                                    26-30 september
                                    <br />
                                    sibenik, croatia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5 grey' style={{ paddingTop: '1.5rem' }}>
                    <div className='container'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-md-8  mb-md-0'>
                                <h2
                                    className='mb-4'
                                    style={{
                                        fontSize: '34px',
                                        lineHeight: '45px',
                                        width: '800px',
                                    }}
                                >
                                    it's time to{' '}
                                    <span className='coral-underlined'>
                                        rewrite the rules
                                    </span>{' '}
                                    of the tradeshow.
                                </h2>
                                <p className='festCaption'>
                                    Welcome to m&i Fest, the one and only
                                    meetings & events industry festival! Forget
                                    everything you thought you knew about MICE
                                    tradeshows because this event is about to
                                    completely change how you connect.
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
                            src={Meetings}
                            style={{ width: '500px', marginTop: '10%' }}
                            className={'meetingsBanner'}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-6 ml-lg-auto py-5'>
                                <h2 className='site-section-heading font-secondary festSubHeading'>
                                    a{' '}
                                    <span className='fawn-underlined'>
                                        brand-new way
                                    </span>{' '}
                                    to connect.
                                </h2>
                                <p
                                    style={{ paddingRight: '80px' }}
                                    className='mobilePadding-2'
                                >
                                    At m&i, we’ve always believed that the best
                                    business relationships are made in a more
                                    relaxed and flexible environment. Now, we’re
                                    taking our tried and true event formula a
                                    step further by bringing you m&i Fest.
                                    <br />
                                    <br />
                                    Fusing some elements of the classic Forum
                                    with the electrifying atmosphere of a proper
                                    festival, m&i Fest is a large-scale
                                    gathering of the meetings & events industry,
                                    where buyers and suppliers can do great
                                    business in a more personal way.
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
                                <div className='festNumbers'>
                                    <h2 className='site-section-heading font-secondary white'>
                                        <span className='raven-underlined'>
                                            m&i Fest
                                        </span>{' '}
                                        in numbers.
                                    </h2>
                                    <ul>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers white'>
                                                    4
                                                </h1>
                                                <p>exciting days</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers white'>
                                                    40
                                                </h1>
                                                <p>meetings</p>
                                            </div>
                                        </li>
                                        <li>
                                            {' '}
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers white'>
                                                    200
                                                </h1>
                                                <p>supplier tables</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className='numbers-caption'
                                                style={{ paddingRight: '20px' }}
                                            >
                                                <h1 className='eventNumbers white'>
                                                    225
                                                </h1>
                                                <p>vetted buyers</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='numbers-caption'>
                                                <h1 className='eventNumbers white'>
                                                    15
                                                </h1>
                                                <p>outstanding speakers</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-5 no-mobile-bottom-padding'>
                    <div className='container'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-md-8  mb-md-0'>
                                <h2
                                    className='mb-4 festDifferent'
                                    style={{
                                        fontSize: '34px',
                                        lineHeight: '45px',
                                        width: '800px',
                                    }}
                                >
                                    how is{' '}
                                    <span className='coral-underlined'>
                                        m&i Fest
                                    </span>{' '}
                                    different, you ask?
                                </h2>
                                <p className='festCaption'>
                                    Take a look at what a typical day at our
                                    festival looks like and judge for yourself…
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='site-half  no-mobile-padding '>
                    <div className='img-bg-1'>
                        {' '}
                        <img
                            alt={' '}
                            src={Mornings}
                            className={'morningBanner'}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-6 ml-lg-auto py-5'>
                                <h2 className='site-section-heading font-secondary '>
                                    your{' '}
                                    <span className='blue-underlined'>
                                        mornings.
                                    </span>
                                </h2>
                                <ul className='morning'>
                                    <li>
                                        Pre-scheduled meetings tailored to your
                                        personal needs.
                                    </li>
                                    <br />
                                    <li>
                                        Exclusive workshops held by specialist
                                        suppliers.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='site-half no-mobile-bottom-padding'>
                    <div className='img-bg-1'>
                        <img
                            alt={' '}
                            src={Afternoons}
                            className={'network'}
                            style={{ width: '450px' }}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-6 ml-rg-auto py-5'
                                style={{ paddingLeft: '80px' }}
                            >
                                <h2 className='site-section-heading font-secondary mobilePadding'>
                                    your{' '}
                                    <span className='fawn-underlined'>
                                        afternoons.
                                    </span>
                                </h2>
                                <ul className='morning'>
                                    <li>
                                        Freeflow meetings: Continue the
                                        conversation with extra meetings in a
                                        relaxed and casual atmosphere.
                                    </li>
                                    <br />
                                    <li>
                                        Circles: Discover and discuss a wide
                                        range of topics and trends with industry
                                        influencers in our interactive Circles.
                                    </li>
                                    <br />
                                    <li>
                                        Social Zone: Catch up and have fun with
                                        other festival goers during some high
                                        energy activities.
                                    </li>
                                    <br />
                                    <li>
                                        Zen Den: Re-energise your mind, body and
                                        soul with our experts in spiritual
                                        wellbeing.
                                    </li>
                                </ul>
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
                            src={Evenings}
                            className={'morningBanner'}
                            style={{ marginTop: '-5%' }}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-6 ml-lg-auto py-5'>
                                <h2 className='site-section-heading font-secondary '>
                                    your{' '}
                                    <span className='coral-underlined'>
                                        evenings.
                                    </span>
                                </h2>
                                <ul className='morning'>
                                    <li>
                                        Exceptional entertainment: Spectacular
                                        themed nights and a whole host of
                                        surprises.
                                    </li>
                                    <br />
                                    <li>
                                        High energy parties with delicious food
                                        and dancing.
                                    </li>
                                    <br />
                                    <li>
                                        Low key evening experiences in a
                                        location of your choice.
                                    </li>
                                    <br />
                                    <li>
                                        A great night’s sleep: A comfortable
                                        sanctuary of your own to relax in after
                                        a productive day.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className='site-half fawn'
                    style={{ paddingBottom: '5rem' }}
                >
                    <div className='img-bg-1'>
                        <img
                            alt={' '}
                            src={Venue}
                            className={'network'}
                            style={{ width: '450px', marginTop: '-5%' }}
                        />
                    </div>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-6 ml-rg-auto py-5'
                                style={{ paddingLeft: '80px' }}
                            >
                                <h2 className='site-section-heading font-secondary'>
                                    <span className='blue-underlined'>
                                        festival, yes.
                                    </span>{' '}
                                    camping, no.
                                </h2>
                                <p>
                                    Yes, m&i Fest is a festival, but you won’t
                                    need to buy a tent! We appreciate the
                                    importance of a good night’s sleep (you’ll
                                    need it after a jam-packed day), which is
                                    why you’ll be staying at{' '}
                                    <a href='https://www.amadriapark.com/hotel/amadria-park-hotel-jure-ex-solaris-sibenik'>
                                        Amadria Park, a 4* resort in Šibenik
                                    </a>
                                    , where you’ll experience a blend of
                                    traditional heritage and modern luxury in a
                                    chic, elegant setting - not a sleeping bag
                                    in sight!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='packages-section white-bg'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto py-5 laptop'
                                style={{ paddingLeft: '100px', color: '#fff' }}
                            >
                                <h2 className='site-section-heading font-secondary'>
                                    <span className='coral-underlined'>
                                        supplier package
                                    </span>
                                </h2>
                                <ul className='packages'>
                                    <li>
                                        Highest buyer exposure of all m&i events
                                    </li>
                                    <li>
                                        4 days of festival-style networking in a
                                        hidden gem location
                                    </li>
                                    <li>
                                        40 guaranteed 1-2-1 meetings with vetted
                                        key UK & European buyers
                                    </li>
                                    <li>
                                        Additional Freeflow meetings at a
                                        flexible time to suit you
                                    </li>
                                    <li>
                                        Optional workshop hosting opportunities
                                        at an additional charge
                                    </li>
                                    <li>
                                        Cutting edge AI matchmaking technology
                                        to find your best meeting potential
                                    </li>
                                    <li>
                                        All Access Pass to festival elements
                                        (including Zen Den and Social Zone)
                                    </li>
                                    <li>
                                        Networking activities for extra
                                        relationship-building with attending
                                        buyers
                                    </li>
                                    {/* <li>
                                        Book now, pay later with our{' '}
                                        <a href='/flexi-terms-promise'>
                                            Flexi-terms Promise.
                                        </a>
                                    </li> */}
                                </ul>
                                <br />
                                <hr />
                                <br />
                                <h2 className='site-section-heading font-secondary'>
                                    <span className='coral-underlined'>
                                        hosted buyer package
                                    </span>
                                </h2>
                                <ul className='packages'>
                                    <li>
                                        4 days of festival-style networking in a
                                        hidden gem location
                                    </li>
                                    <li>
                                        1-2-1 meetings and workshops with our
                                        largest ever gathering of global
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
                                        Learning opportunities from influential
                                        speakers at our discussion Circles
                                    </li>
                                    <li>
                                        All Access Pass to festival elements
                                        (including Zen Den and Social Zone)
                                    </li>
                                    <li>
                                        Destination discovery - see what the
                                        area has to offer for MICE events
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
                                    be part of the{' '}
                                    <span className='raven-underlined'>
                                        first ever MICE festival.
                                    </span>
                                </h2>
                                <br />

                                <p className='eventFooterText'>
                                    Want to know more about m&i Fest and why you
                                    can’t afford to miss
                                    <br /> it? Sign up below and a member of our
                                    team will come back to you
                                    <br />
                                    with all the juicy details.
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
                                style={{ width: '200px', marginTop: '-27%' }}
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
                                {
                                    <a
                                        href='https://www.amadriapark.com/hotel/amadria-park-hotel-jure-ex-solaris-sibenik'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img
                                            alt={' '}
                                            src={AmadriaPark}
                                            className={'partnerLogo'}
                                        />
                                    </a>
                                }
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

export default Fest;
