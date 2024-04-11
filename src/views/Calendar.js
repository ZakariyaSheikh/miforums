import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet"
import '../assets/scss/style.scss';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import HeroBanner1920 from '../assets/images/banners/Event_Calendar_Hero_1920.png';
import HeroBanner1024 from '../assets/images/banners/Event_Calendar_Hero_1024.png';
import HeroBanner766 from '../assets/images/banners/Event_Calendar_Hero_766.png';
import HeroBanner320 from '../assets/images/banners/Event_Calendar_Hero_320.png';
import CalendarCharacters from '../assets/images/calendarcharacter.svg';

const Calendar = () => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

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
        <meta charSet="utf-8" />
        <title>event calendar | m&i</title>
        <meta
          name="description"
          content="View our calendar of b2b MICE forums across Europe, USA and the Middle East."
        />
                <meta name="tags"
                content="MICE events for industry professionals around the world."/>
      </Helmet>
            <div className='site-wrap calendar raven-bg'>
              

            <div className="site-half newHeader raven-bg" >
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" style={{paddingRight:'10%'}}>

              <h2></h2>
               
               <h3>Looking for your next MICE event?</h3>
                <h1>Look no further.</h1>
               
                
          
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

                    
               
                <div className='site-half itinerarySection' style={{paddingTop:'0'}}>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-12 ml-rg-auto '>
                                <br />

                                <Tabs defaultTab='two'>
                                    <div
                                        className={`sticky-wrapper${
                                            isSticky ? ' sticky' : ''
                                        }`}
                                        ref={ref}
                                    >
                                        <TabList className='sticky-inner calendar'>
                                           
                                            <Tab
                                                tabFor='two'
                                                className='eventTabs'
                                            >
                                                2024 events
                                            </Tab>
                                            <Tab
                                                tabFor='one'
                                                className='eventTabs'
                                            >
                                               2025 events
                                            </Tab>
                                            <Tab
                                                tabFor='three'
                                                className='eventTabs all'
                                            >
                                                all
                                            </Tab>
                                        </TabList>
                                    </div>
                                    <TabPanel tabId='one'>
                                        {/* 2025 EVENTS */}
                                        <table className='eventTable'>

                                     
                                       

                                            <tr
                                                className='eventRow'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href =
                                                        '/mi-luxe-lake-louise-25';
                                                }}
                                            >
                                                <td className='eventName'>
                                                    {' '}
                                                    m&i Luxe Lake Louise 25
                                                </td>
                                                <td className='date'>
                                             24-27 Mar{' '}
                                                </td>
                                                <td className='location'>
                                               Canada
                                                </td>
                                            </tr>




                                          
                                        </table>
                                    </TabPanel>
                                    <TabPanel tabId='two'>
                                        {/* 2024 EVENTS */}
                                        <table className='eventTable'>
                                     
                                       

                                            <tr
                                                className='eventRow'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href =
                                                    '/mi-private-sorrento-24';
                                                }}
                                            >
                                                <td className='eventName'>
                                                    {' '}
                                                    m&i Private Sorrento 24
                                                </td>
                                                <td className='date'>
                                                21-24 Apr
                                                </td>
                                                <td className='location'>
                                                Italy
                                                </td>
                                            </tr>

                                            <tr
                                                className='eventRow'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href =
                                                    '/mi-healthcare-london-24';
                                                }}
                                            >
                                                <td className='eventName'>
                                                    {' '}
                                                    m&i Healthcare London 24
                                                </td>
                                                <td className='date'>
                                                6-8 May
                                                </td>
                                                <td className='location'>
                                                England
                                                </td>
                                            </tr>
                                          
                                            <tr
                                                className='eventRow'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href =
                                                    '/mi-americas-miami-24';
                                                }}
                                            >
                                                <td className='eventName'>
                                                    {' '}
                                                    m&i Miami 24
                                                </td>
                                                <td className='date'>
                                               23-26 Jun 
                                                </td>
                                                <td className='location'>
                                                USA
                                                </td>
                                            </tr>
                                            <tr
                                                className='eventRow'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href =
                                                    '/mi-tbilisi-georgia-24';
                                                }}
                                            >
                                                <td className='eventName'>
                                                    {' '}
                                                    m&i Tbilisi 24
                                                </td>
                                                <td className='date'>
                                               30 Jun - 4 Jul
                                                </td>
                                                <td className='location'>
                                                Georgia
                                                </td>
                                            </tr>
                                            <tr
                                                className='eventRow'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href =
                                                    '/mi-lisbon-24';
                                                }}
                                            >
                                                <td className='eventName'>
                                                    {' '}
                                                    m&i Lisbon 24
                                                </td>
                                                <td className='date'>
                                               25-28 Aug 
                                                </td>
                                                <td className='location'>
                                                Portugal
                                                </td>
                                            </tr>

<tr
                                                className='eventRow'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href =
                                                    '/mi-sardinia-24';
                                                }}
                                            >
                                                <td className='eventName'>
                                                    {' '}
                                                    m&i Sardinia 24
                                                </td>
                                                <td className='date'>
                                              25-29 Sep
                                                </td>
                                                <td className='location'>
                                                Italy
                                                </td>
                                            </tr>

                                            <tr
                                                className='eventRow'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href =
                                                    '/mi-luxe-bodrum-24';
                                                }}
                                            >
                                                <td className='eventName'>
                                                    {' '}
                                                    m&i Luxe Bodrum 24
                                                </td>
                                                <td className='date'>
                                             2-5 Oct
                                                </td>
                                                <td className='location'>
                                            Türkiye
                                                </td>
                                            </tr>

                                            <tr
                                                className='eventRow'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href =
                                                    '/mi-vip-costa-mujeres-24';
                                                }}
                                            >
                                                <td className='eventName'>
                                                    {' '}
                                                    m&i VIP Costa Mujeres 24
                                                </td>
                                                <td className='date'>
                                            17-20 Nov
                                                </td>
                                                <td className='location'>
                                                Mexico
                                                </td>
                                            </tr>

                                            
                                         

                                         


                  


              

                

                 


                





                                          


                                        </table>
                                    </TabPanel>
                                    <TabPanel tabId='three'>
                                    <table className='eventTable'>
                                     
                                    
                                         <tr
                                             className='eventRow'
                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href =
                                                 '/mi-private-sorrento-24';
                                             }}
                                         >
                                             <td className='eventName'>
                                                 {' '}
                                                 m&i Private Sorrento 24
                                             </td>
                                             <td className='date'>
                                             21-24 Apr
                                             </td>
                                             <td className='location'>
                                             Italy
                                             </td>
                                         </tr>

                                         <tr
                                             className='eventRow'
                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href =
                                                 '/mi-healthcare-london-24';
                                             }}
                                         >
                                             <td className='eventName'>
                                                 {' '}
                                                 m&i Healthcare London 24
                                             </td>
                                             <td className='date'>
                                             6-8 May
                                             </td>
                                             <td className='location'>
                                             England
                                             </td>
                                         </tr>
                                       
                                         <tr
                                             className='eventRow'
                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href =
                                                 '/mi-americas-miami-24';
                                             }}
                                         >
                                             <td className='eventName'>
                                                 {' '}
                                                 m&i Miami 24
                                             </td>
                                             <td className='date'>
                                            23-26 Jun 
                                             </td>
                                             <td className='location'>
                                             USA
                                             </td>
                                         </tr>
                                         <tr
                                             className='eventRow'
                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href =
                                                 '/mi-tbilisi-georgia-24';
                                             }}
                                         >
                                             <td className='eventName'>
                                                 {' '}
                                                 m&i Tbilisi 24
                                             </td>
                                             <td className='date'>
                                            30 Jun - 4 Jul
                                             </td>
                                             <td className='location'>
                                             Georgia
                                             </td>
                                         </tr>
                                         <tr
                                             className='eventRow'
                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href =
                                                 '/mi-lisbon-24';
                                             }}
                                         >
                                             <td className='eventName'>
                                                 {' '}
                                                 m&i Lisbon 24
                                             </td>
                                             <td className='date'>
                                            25-28 Aug 
                                             </td>
                                             <td className='location'>
                                             Portugal
                                             </td>
                                         </tr>

<tr
                                             className='eventRow'
                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href =
                                                 '/mi-sardinia-24';
                                             }}
                                         >
                                             <td className='eventName'>
                                                 {' '}
                                                 m&i Sardinia 24
                                             </td>
                                             <td className='date'>
                                           25-29 Sep
                                             </td>
                                             <td className='location'>
                                             Italy
                                             </td>
                                         </tr>

                                         <tr
                                             className='eventRow'
                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href =
                                                 '/mi-luxe-bodrum-24';
                                             }}
                                         >
                                             <td className='eventName'>
                                                 {' '}
                                                 m&i Luxe Bodrum 24
                                             </td>
                                             <td className='date'>
                                          2-5 Oct
                                             </td>
                                             <td className='location'>
                                         Türkiye
                                             </td>
                                         </tr>

                                         <tr
                                             className='eventRow'
                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href =
                                                 '/mi-vip-costa-mujeres-24';
                                             }}
                                         >
                                             <td className='eventName'>
                                                 {' '}
                                                 m&i VIP Costa Mujeres 24
                                             </td>
                                             <td className='date'>
                                         17-20 Nov
                                             </td>
                                             <td className='location'>
                                             Mexico
                                             </td>
                                         </tr>

                                         <tr
                                             className='eventRow'
                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href =
                                                     '/mi-luxe-lake-louise-25';
                                             }}
                                         >
                                             <td className='eventName'>
                                                 {' '}
                                                 m&i Luxe Lake Louise 25
                                             </td>
                                             <td className='date'>
                                          24-27 Mar{' '}
                                             </td>
                                             <td className='location'>
                                            Canada
                                             </td>
                                         </tr>

                                      

                                     </table>
                                    </TabPanel>
                                </Tabs>
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

export default Calendar;
