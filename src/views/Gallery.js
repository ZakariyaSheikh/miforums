import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet"
import '../assets/scss/style.scss';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import HeroBanner1920 from '../assets/images/gallerypage/gallery_heroimage_1920px.jpg';
import HeroBanner1024 from '../assets/images/gallerypage/gallery_heroimage_1024px.jpg';
import HeroBanner766 from '../assets/images/gallerypage/gallery_heroimage_766px.jpg';
import HeroBanner320 from '../assets/images/gallerypage/gallery_heroimage_320px.jpg';
import GstaadMain from "../assets/images/luxediamond/Gstaad_Palace/main_gstaadpalace.png"
import Thumbnail1 from "../assets/images/gallerypage/gallery-thumbnails/2017/gallerycover_banff2017.png"
import Thumbnail2 from "../assets/images/gallerypage/gallery-thumbnails/2017/gallerycover_cancun2017.png"
import Thumbnail3 from "../assets/images/gallerypage/gallery-thumbnails/2017/gallerycover_disneyland2017.png"
import Thumbnail4 from "../assets/images/gallerypage/gallery-thumbnails/2017/gallerycover_dubai2017.png"
import Thumbnail5 from "../assets/images/gallerypage/gallery-thumbnails/2017/gallerycover_helsinki2017.png"
import Thumbnail6 from "../assets/images/gallerypage/gallery-thumbnails/2017/gallerycover_seville2017.png"
//
import Thumbnail8 from "../assets/images/gallerypage/gallery-thumbnails/2018/gallerycover_abudhabi2018.png"
import Thumbnail9 from "../assets/images/gallerypage/gallery-thumbnails/2018/gallerycover_algarve2018.png"
import Thumbnail10 from "../assets/images/gallerypage/gallery-thumbnails/2018/gallerycover_dubrovnik2018.png"
import Thumbnail7 from "../assets/images/gallerypage/gallery-thumbnails/2018/gallerycover_montreal2018.png"
//
import Thumbnail11 from "../assets/images/gallerypage/gallery-thumbnails/2019/gallerycover_benidorm2019.png"
import Thumbnail15 from "../assets/images/gallerypage/gallery-thumbnails/2019/gallerycover_chicago2019.png"
import Thumbnail12 from "../assets/images/gallerypage/gallery-thumbnails/2019/gallerycover_muscat2019.png"
import Thumbnail13 from "../assets/images/gallerypage/gallery-thumbnails/2019/gallerycover_sibenik2019.png"
import Thumbnail14 from "../assets/images/gallerypage/gallery-thumbnails/2019/gallerycover_tenerife20219.png"
//
import Thumbnail19 from "../assets/images/gallerypage/gallery-thumbnails/2021/gallerycover_abudhabi2021.png"
import Thumbnail16 from "../assets/images/gallerypage/gallery-thumbnails/2021/gallerycover_budapest2021.png"
import Thumbnail18 from "../assets/images/gallerypage/gallery-thumbnails/2021/gallerycover_madrid2021.png"
import Thumbnail17 from "../assets/images/gallerypage/gallery-thumbnails/2021/gallerycover_sibenik2021.png"
//
import Thumbnail20 from "../assets/images/gallerypage/gallery-thumbnails/2022/gallerycover_berlin2022.png"
import Thumbnail24 from "../assets/images/gallerypage/gallery-thumbnails/2022/gallerycover_dubrovnik2022.png"
import Thumbnail22 from "../assets/images/gallerypage/gallery-thumbnails/2022/gallerycover_madeira2022.png"
import Thumbnail23 from "../assets/images/gallerypage/gallery-thumbnails/2022/gallerycover_porto2022.png"
import Thumbnail25 from "../assets/images/gallerypage/gallery-thumbnails/2022/gallerycover_puntacana2022.png"
import Thumbnail21 from "../assets/images/gallerypage/gallery-thumbnails/2022/gallerycover_seville2022.png"
//
import Thumbnail26 from "../assets/images/gallerypage/gallery-thumbnails/gallerycover_europeanroadshow.png"

//
import Thumbnail27 from "../assets/images/gallerypage/gallery-thumbnails/2023/istanbul-thumbnail.png"
import Thumbnail28 from "../assets/images/gallerypage/gallery-thumbnails/2023/ibiza-thumbnail.png"

import Thumbnail29 from "../assets/images/gallerypage/gallery-thumbnails/2023/thehague-thumbnail.png"

import Thumbnail30 from "../assets/images/gallerypage/gallery-thumbnails/2023/oslo-thumbnail.png"
import Thumbnail31 from "../assets/images/gallerypage/gallery-thumbnails/2023/limassol-thumbnail.png"
import Thumbnail32 from "../assets/images/gallerypage/gallery-thumbnails/2023/miamericas1.png"
import Thumbnail33 from "../assets/images/gallerypage/gallery-thumbnails/2023/luxe-thumbnail.jpg"
import Thumbnail34 from "../assets/images/gallerypage/gallery-thumbnails/2023/lakecomo-thumbnail.png"
import Thumbnail35 from "../assets/images/gallerypage/gallery-thumbnails/2023/luxe-montenegro.jpg"

import Thumbnail36 from "../assets/images/gallerypage/gallery-thumbnails/2024/mi-fest.png"

import CalendarCharacters from '../assets/images/calendarcharacter.svg';

const Gallery = () => {
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
        <title>gallery | m&i</title>
        <meta
          name="description"
          content="View our calendar of b2b MICE forums across Europe, USA and the Middle East."
        />
                <meta name="tags"
                content="MICE events for industry professionals around the world."/>
      </Helmet>
            <div className='site-wrap gallery-page'>
                <div
                    className='gallery-hero-slider mobileWyred'
                    style={{
                        backgroundImage: `url(${heroBannerUrl})`,
                        height: 'auto',
                        paddingBottom: ' 10%',
                    }}
                >
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div
                                className='col-lg-12 ml-rg-auto  '
                                style={{ color: '#131A33' }}
                            >
                                <h1 className='header-section-heading galleryHeader'>
                                   See our events 
                                    <span className='underlined'>
                                      {" "}  come to life.
                                    </span>
                                </h1>
                                <p style={{color:"#fff"}}>Get a taste for our events or simply download and share your favourite moments.</p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className='site-half gallerySection'>
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-12 ml-rg-auto '>
                                <br />

                                <Tabs defaultTab='six'>
                                    <div
                                        className={`sticky-wrapper${
                                            isSticky ? ' sticky' : ''
                                        }`}
                                        ref={ref}
                                    >
                                        <TabList className='sticky-inner gallerytabslist'>
                                        <Tab
                                                tabFor='twentyfour'
                                                className='galleryTabs'
                                            >
                                               2024
                                            </Tab>
                                        <Tab
                                                tabFor='zero'
                                                className='galleryTabs'
                                            >
                                               2023
                                            </Tab>
                                            <Tab
                                                tabFor='one'
                                                className='galleryTabs'
                                            >
                                               2022
                                            </Tab>
                                            <Tab
                                                tabFor='two'
                                                className='galleryTabs'
                                            >
                                                2021
                                            </Tab>
                                            <Tab
                                                tabFor='three'
                                                className='galleryTabs'
                                            >
                                                2019
                                            </Tab>
                                            <Tab
                                                tabFor='four'
                                                className='galleryTabs'
                                            >
                                                2018
                                            </Tab>
                                            <Tab
                                                tabFor='five'
                                                className='galleryTabs'
                                            >
                                                2017
                                            </Tab>
                                            <Tab
                                                tabFor='six'
                                                className='galleryTabs all'
                                            >
                                                all
                                            </Tab>
                                        </TabList>
                                    </div>

                                    <TabPanel tabId='twentyfour'>
                                    <div className="gallery-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">


            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Fest-Marrakesh-24 ">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail36}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Fest Marrakesh 24</h4>
                </div> 

                                 

</div></div></div>
                                    </TabPanel>

                                    <TabPanel tabId='zero'>
                                    <div className="gallery-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">


            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="  https://photos.mi-forums.com/Mi-Luxe-Costa-Mujeres-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail35}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Luxe, Costa Mujeres 2023 </h4>
                </div> 

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="  https://photos.mi-forums.com/Mi-Europe-Autumn-Lake-Como-2023">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail34}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Autumn, Lake Como 2023 </h4>
                </div> 


            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Luxe-Porto-Montenegro-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail33}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Luxe, Porto Montenegro 2023 </h4>
                </div> 

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-El-Paso-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail32}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas, El Paso 2023 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Summer-Limassol-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail31}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Summer, Limassol 2023 </h4>
                </div>



            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Summer-Oslo-2023/ ">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail30}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Summer, Oslo 2023 </h4>
                </div>


            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Healthcare-The-Hague-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail29}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Healthcare, The Hague 2023 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Private-Ibiza-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail28}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Private, Ibiza 2023 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Spring-Istanbul-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail27}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Spring, Istanbul 2023 </h4>
                </div>

                                 

</div></div></div>
                                    </TabPanel>


                                    <TabPanel tabId='one'>
                                    <div className="gallery-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

           

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-AMERICAS-2022-PUNTA-CANA">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail25}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas, Punta Cana 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-DUBROVNIK">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail24}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Private, Dubrovnik 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-europe-porto-full-album">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail23}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Autumn, Porto 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-VIP-CONNECT-2022-MADEIRA">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail22}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i VIP Connect, Madeira 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-EUROPE-SPRING-2022-SEVILLA">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail21}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Spring, Seville 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-HEALTHCARE-EUROPE-2022-BERLIN">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail20}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Healthcare Europe, Berlin 2022 </h4>
                </div>

</div></div></div>
                                    </TabPanel>

                                    <TabPanel tabId='two'>
                                    <div className="gallery-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">


                                 
            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-EUROPE-WINTER-2021-ABU-DHABI">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail19}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Winter, Abu Dhabi 2021 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-HEALTHCARE-EUROPE-2021-MADRID">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail18}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Healthcare Europe, Madrid 2021</h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-EUROPE-AUTUMN-2021-SIBENIK">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail17}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Autumn, Sibenik 2021 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-PRIVATE-EUROPE-2021-BUDAPEST">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail16}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Private Europe, Budapest 2021 </h4>
                </div>

                </div></div></div>

                                    </TabPanel>

                                    <TabPanel tabId='three'>

                                    <div className="gallery-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">
                                  
            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-Chicago-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail15}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas, Chicago 2019 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Tenerife-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail14}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Tenerife 2019 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Sibenik-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail13}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Sibenik 2019 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Muscat-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail12}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Muscat 2019 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Benidorm-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail11}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Benidorm 2019 </h4>
                </div>

                </div></div></div>
                                    </TabPanel>

                                    <TabPanel tabId='four'>

                                    <div className="gallery-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

               <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Abu-Dhabi-2018">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail8}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Abu Dhabi 2018</h4>
                </div>


                                    <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Dubrovnik-2018">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail10}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Dubrovnik 2018 </h4>
                </div>
              
               
            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Algarve-2018">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail9}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Algarve 2018 </h4>
                </div>
               
           
             
            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-Montreal-2018">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail7}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas, Montreal 2018</h4>
                </div>
                </div></div></div>
                                    </TabPanel>

                                    <TabPanel tabId='five'>

                                    <div className="gallery-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Dubai-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail4}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Dubai 2017</h4>
                </div>

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-Cancun-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail2}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas 2017 Cancun</h4>
                </div>

                                    <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Seville-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail6}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Seville 2017</h4>
                </div>

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-European-Roadshow">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail26}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i European Roadshow 2017</h4>
                </div>

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Helsinki-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail5}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Helsinki 2017</h4>
                </div>

               

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Disneyland-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail3}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Disneyland Paris 2017</h4>
                </div>


               

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-Banff-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail1}
                className={"hotel-thumbnails"}
              ></img></div></a>
              <h4>m&i Americas, Banff 2017</h4>
                </div>
                </div></div></div>
                                    </TabPanel>

                                    <TabPanel tabId='six'>
                                    <div className="gallery-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Fest-Marrakesh-24 ">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail36}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Fest Marrakesh 24</h4>
                </div> 


            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="  https://photos.mi-forums.com/Mi-Luxe-Costa-Mujeres-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail35}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Luxe, Costa Mujeres 2023 </h4>
                </div> 

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="  https://photos.mi-forums.com/Mi-Europe-Autumn-Lake-Como-2023">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail34}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Autumn, Lake Como 2023 </h4>
                </div> 

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Luxe-Porto-Montenegro-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail33}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Luxe, Porto Montenegro 2023 </h4>
                </div> 

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-El-Paso-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail32}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas, El Paso 2023 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Summer-Limassol-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail31}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Summer, Limassol 2023 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Summer-Oslo-2023/ ">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail30}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Summer, Oslo 2023 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Healthcare-The-Hague-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail29}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Healthcare, The Hague 2023 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Private-Ibiza-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail28}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Private, Ibiza 2023 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Spring-Istanbul-2023/">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail27}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Spring, Istanbul 2023 </h4>
                </div>


                                    <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-AMERICAS-2022-PUNTA-CANA">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail25}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas, Punta Cana 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-DUBROVNIK">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail24}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Private, Dubrovnik 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-europe-porto-full-album">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail23}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Autumn, Porto 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-VIP-CONNECT-2022-MADEIRA">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail22}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i VIP Connect, Madeira 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-EUROPE-SPRING-2022-SEVILLA">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail21}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Spring, Seville 2022 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-HEALTHCARE-EUROPE-2022-BERLIN">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail20}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Healthcare Europe, Berlin 2022 </h4>
                </div>

                                    <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-EUROPE-WINTER-2021-ABU-DHABI">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail19}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Winter, Abu Dhabi 2021 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-HEALTHCARE-EUROPE-2021-MADRID">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail18}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Healthcare Europe, Madrid 2021</h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-EUROPE-AUTUMN-2021-SIBENIK">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail17}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe Autumn, Sibenik 2021 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/MI-PRIVATE-EUROPE-2021-BUDAPEST">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail16}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Private Europe, Budapest 2021 </h4>
                </div>


                                    <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-Chicago-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail15}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas, Chicago 2019 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Tenerife-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail14}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Tenerife 2019 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Sibenik-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail13}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Sibenik 2019 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Muscat-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail12}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Muscat 2019 </h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Benidorm-2019">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail11}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Benidorm 2019 </h4>
                </div>


            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Abu-Dhabi-2018">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail8}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Abu Dhabi 2018</h4>
                </div>


                                    <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Dubrovnik-2018">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail10}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Dubrovnik 2018 </h4>
                </div>
              
               
            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Algarve-2018">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail9}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Algarve 2018 </h4>
                </div>
               
           
             
            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-Montreal-2018">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail7}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas, Montreal 2018</h4>
                </div>

            <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Dubai-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail4}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Dubai 2017</h4>
                </div>

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-Cancun-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail2}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Americas 2017 Cancun</h4>
                </div>

                                    <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Seville-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail6}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Seville 2017</h4>
                </div>

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-European-Roadshow">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail26}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i European Roadshow 2017</h4>
                </div>

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Helsinki-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail5}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Helsinki 2017</h4>
                </div>

               

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Europe-Disneyland-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail3}
                className={"hotel-thumbnails"}
              ></img></div></a>
               <h4>m&i Europe, Disneyland Paris 2017</h4>
                </div>


               

                <div
                className="col-lg-2 ml-rg-auto "
                style={{ paddingRight: "20px" }}
              >
                <a href="https://photos.mi-forums.com/Mi-Americas-Banff-2017">
                  <div className="peopleofmi-video-container">
                  <img
                alt={" "}
                src={Thumbnail1}
                className={"hotel-thumbnails"}
              ></img></div></a>
              <h4>m&i Americas, Banff 2017</h4>
                </div>
                </div></div></div>
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
                className="col-lg-8 ml-rg-auto  laptop"
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
          <div className="col-lg-10 ml-rg-auto ">
            <div className="img-bg-1">
              <img alt={" "} src={WyredWorldLogo} className={"wyredLogo"}></img>
            </div>
          </div>
        </div> */}
            </div>
        </>
    );
};

export default Gallery;
