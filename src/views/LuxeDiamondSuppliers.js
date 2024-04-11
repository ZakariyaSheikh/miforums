import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import Sticky from "react-sticky-el";
import DigitalAssetsModal from '../components/elements/DigitalAssetsModal';
import HeroBanner1920 from "../assets/images/banners/People_of_m&i_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/People_of_m&i_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/People_of_m&i_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/People_of_m&i_Hero_320.png"
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';
import StregisMain from "../assets/images/luxediamond/Stregis_Florence/cover.png"
import StregisLogo from "../assets/images/luxediamond/Stregis_Florence/logo_stregis_florence.png"
import StregisValentina from "../assets/images/luxediamond/Stregis_Florence/valentina_stregis_florence.png"
import GstaadMain from "../assets/images/luxediamond/Gstaad_Palace/main_gstaadpalace.png"
import GstaadLogo from "../assets/images/luxediamond/Gstaad_Palace/logo_gstaadpalace.png"
import GstaadLucy from "../assets/images/luxediamond/Gstaad_Palace/lucy_frohlich_gstaadpalace.png"
import ParkHyattMain from "../assets/images/luxediamond/Park_Hyatt_Vienna/main_parkhyattvienna.png"
import ParkHyattLogo from "../assets/images/luxediamond/Park_Hyatt_Vienna/logo_parkhyattvienna.png"
import QuoteMarks from "../assets/images/luxediamond/quotemarks.svg"
import HotelCala from "../assets/images/luxediamond/Hotel_Cala/main_hotel_cala_di_volpe.png"
import HotelCalaLogo from "../assets/images/luxediamond/Hotel_Cala/logo_hotel_cala_di_volpe.png"
import MoreToCome from "../assets/images/luxediamond/moretocome.png"
import Stefan from "../assets/images/luxediamond/stefan_wesonig_parkhyattvienna.png"
import Christiana from "../assets/images/luxediamond/cristiana_goddi_hotel_cala_di_volpe.png"
import PalazzoMain from "../assets/images/luxediamond/Palazzo_Ripetta/main_palazzo_ripetta.png"
import PalazzoLogo from "../assets/images/luxediamond/Palazzo_Ripetta/logo_palazzo_ripetta.png"
import MicolZarfati from "../assets/images/luxediamond/Palazzo_Ripetta/micol_zarfati_palazzo_ripetta.png"
import Palazzo1 from "../assets/images/luxediamond/Palazzo_Ripetta/gallery_palazzo_ripetta1.png"
import Palazzo2 from "../assets/images/luxediamond/Palazzo_Ripetta/gallery_palazzo_ripetta2.png"
import Palazzo3 from "../assets/images/luxediamond/Palazzo_Ripetta/gallery_palazzo_ripetta3.png"
import Palazzo4 from "../assets/images/luxediamond/Palazzo_Ripetta/gallery_palazzo_ripetta4.png"
import AgataPaco from "../assets/images/luxediamond/Le_Negresco/agata_paco_lenegresco.png"
import LenegrescoMain from "../assets/images/luxediamond/Le_Negresco/main_lenegresco.png"
import Lenegresco1 from "../assets/images/luxediamond/Le_Negresco/lenegresco1.png"
import Lenegresco2 from "../assets/images/luxediamond/Le_Negresco/lenegresco2.png"
import Lenegresco3 from "../assets/images/luxediamond/Le_Negresco/lenegresco3.png"
import Lenegresco4 from "../assets/images/luxediamond/Le_Negresco/lenegresco4.png"
import Lenegresco5 from "../assets/images/luxediamond/Le_Negresco/lenegresco5.png"
import LenegrescoLogo from "../assets/images/luxediamond/Le_Negresco/logo_lenegresco.png"
import Rebbeca from "../assets/images/luxediamond/LOscar/rebbecakircos_loscarlondon1.png"
import LoscarMain from "../assets/images/luxediamond/LOscar/main_loscarlondon.png"
import Loscar1 from "../assets/images/luxediamond/LOscar/gallery_loscarlondon1.png"
import Loscar2 from "../assets/images/luxediamond/LOscar/gallery_loscarlondon2.png"
import Loscar3 from "../assets/images/luxediamond/LOscar/gallery_loscarlondon3.png"
import Loscar4 from "../assets/images/luxediamond/LOscar/gallery_loscarlondon4.png"
import Loscar5 from "../assets/images/luxediamond/LOscar/356707888copy25.png"
import LoscarLogo from "../assets/images/luxediamond/LOscar/logo_loscarlondon1.png"
import Oneandonly1 from "../assets/images/luxediamond/oneandonly/gallery_one&only1.jpg"
import Oneandonly2 from "../assets/images/luxediamond/oneandonly/gallery_one&only2.jpg"
import Oneandonly3 from "../assets/images/luxediamond/oneandonly/gallery_one&only3.jpg"
import Oneandonly4 from "../assets/images/luxediamond/oneandonly/gallery_one&only4.jpg"
import Oneandonly5 from "../assets/images/luxediamond/oneandonly/gallery_one&only5.jpg"
import Oneandonlylogo from "../assets/images/luxediamond/oneandonly/logo_one&only.png"
import Oneandonlymain from "../assets/images/luxediamond/oneandonly/main_one&only.jpg"
import Oneandonlystanko from "../assets/images/luxediamond/oneandonly/stanko_one&only.png"
import Sigrun from "../assets/images/luxediamond/Reykjavik/sigrun_reykjavik.png"
import Reykjavikmain from "../assets/images/luxediamond/Reykjavik/main_reykjavik_edition.png"
import Reykjavik1 from "../assets/images/luxediamond/Reykjavik/gallery_reykjavik_edition1.jpg"
import Reykjavik2 from "../assets/images/luxediamond/Reykjavik/gallery_reykjavik_edition2.jpg"
import Reykjavik3 from "../assets/images/luxediamond/Reykjavik/gallery_reykjavik_edition3.jpg"
import Reykjavik4 from "../assets/images/luxediamond/Reykjavik/gallery_reykjavik_edition4.jpg"
import Reykjavik5 from "../assets/images/luxediamond/Reykjavik/gallery_reykjavik_edition5.jpg"
import Reykjaviklogo from "../assets/images/luxediamond/Reykjavik/logo_reykjavik_edition.png"
import MarinaS from "../assets/images/luxediamond/NordicLuxury/marina_nordicluxury.png"
import Nordicmain from "../assets/images/luxediamond/NordicLuxury/main_nordicluxury.png"
import Nordic1 from "../assets/images/luxediamond/NordicLuxury/gallery_nordicluxury1.jpg"
import Nordic2 from "../assets/images/luxediamond/NordicLuxury/gallery_nordicluxury2.jpg"
import Nordic3 from "../assets/images/luxediamond/NordicLuxury/gallery_nordicluxury3.jpg"
import Nordic4 from "../assets/images/luxediamond/NordicLuxury/gallery_nordicluxury4.jpg"
import Nordic5 from "../assets/images/luxediamond/NordicLuxury/gallery_nordicluxury5.jpg"
import Nordiclogo from "../assets/images/luxediamond/NordicLuxury/logo_nordicluxury.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ImageGallery from 'react-image-gallery';

const LuxeDiamondSuppliers = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [videoLoading, setVideoLoading] = useState(true);
  const { isShowing, toggle } = useModal();
  const [modal, setModal] = useState(false);
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

 

  const testimonials = [
    {
      id: 1,
      quote: ' Overlooking the surrounding Saanenland, The Gstaad Palace rises from the forest like a fairy-tale castle. Yet the delights and pleasure that await the traveller within its walls are real.',
      author: 'Lucy Fröhlich',
      position: 'Groups and Events Manager, Gstaad Palace',
      image: GstaadLucy
    },
    {
      id: 2,
      quote: 'We’re so excited to attend m&i Luxe, Porto Montenegro as we´ll be able to connect with high-quality buyers, securing business for us in 2023 and beyond!',
      author: 'Stefan Wesonig',
      position: 'Assistant Sales Manager, Park Hyatt Vienna',
      image: Stefan
    },
    {
      id: 3,
      quote: ' Being a Luxe Diamond Supplier is an exclusive occasion to experiment with a new concept and connect with high-end players in the industry. Each m&i is unique and successful!',
      author: 'Cristiana Goddi',
      position: 'Sales Manager, Hotel Cala Di Volpe',
      image: Christiana
    },
    {
      id: 5,
      quote: "Participating in an m&i Forum provides networking opportunities with industry professionals, fosters knowledge exchange, and facilitates business collaborations. Palazzo Ripetta can be showcased in all its beauty while attracting potential clients.",
      author: 'Micol Zarfati',
      position: 'Director of Sales, Palazzo Ripetta',
      image: MicolZarfati
    },
    {
      id: 6,
      quote: "It will be a pleasure to connect with everyone and showcase Le Negresco, its amazing story and its great event capacity for unique events in Nice, Southern France.",
      author: 'Agata Paco',
      position: 'Sales Executive, Le Negresco',
      image: AgataPaco
    },
    {
      id: 7,
      quote: "We are thrilled to be an m&i Luxe Diamond Supplier as we will be able to connect with high-quality buyers across Europe.",
      author: 'Rebbeca Kircos',
      position: 'Sales Manager, L’oscar',
      image: Rebbeca
    },
    {
      id: 8,
      quote: "It's a pleasure to participate in m&i Luxe, Costa Mujeres 2023 and introduce like-minded professionals to our Adriatic haven, One & Only Portonovi. We are looking forward to connecting over three days in the unique tropical setting of Costa Mujeres!",
      author: 'Stanko Baraksadic',
      position: 'Associate Director, Sales',
      image: Oneandonlystanko
    },
    {
      id: 9,
      quote: "I wanted to join this event as I have always loved attending m&i Forums. I believe their format is the future and I'm very excited to see how they incorporate the luxury MICE segment.",
      author: 'Sigrún Gunnarsdóttir',
      position: 'Director of Sales',
      image: Sigrun
    },
    {
      id: 10,
      quote: "Nordic Luxury is very excited to join the event – we're expanding into luxury events and high-end groups (groups we've increasingly hosted in the last 2 years, post-COVID) and we've received amazing recommendations for m&i Forums from colleagues in the industry.",
      author: 'Marina Safonova',
      position: 'Owner & CEO',
      image: MarinaS
    }
  ];

  
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTestimonial(currentTestimonial => (currentTestimonial + 1) % testimonials.length);
      }, 7000);
      return () => clearInterval(intervalId);
    }, []);
    
  const [modalState, setModalState] = useState("close");
      
      const handleShowModalOne = () => {
       setModalState("modal-one")
      }
      
      const handleShowModalTwo = () => {
       setModalState("modal-two")
      }

      const handleShowModalThree = () => {
        setModalState("modal-three")
       }

       const handleShowModalFive = () => {
        setModalState("modal-five")
       }

       const handleShowModalSix = () => {
        setModalState("modal-six")
       }

       const handleShowModalSeven = () => {
        setModalState("modal-seven")
       }

       const handleShowModalEight = () => {
        setModalState("modal-eight")
       }

       const handleShowModalNine = () => {
        setModalState("modal-nine")
       }

       const handleShowModalTen = () => {
        setModalState("modal-ten")
       }

      const handleClose = () => {
        setModalState("close")
       }

  
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  



  const images = [
    {
      original: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace1.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace1.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace2.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace2.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace3.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace3.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace4.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace4.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace5.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Gstaad_Palace/gallery_gstaadpalace5.png',
    },
  ];

  const images2 = [
    {
      original: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna1.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna1.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna2.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna2.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna3.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna3.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna4.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna4.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna5.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Park_Hyatt_Vienna/gallery_parkhyattvienna5.png',
    },
  ];

    const images3 = [
    {
      original: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe1.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe1.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe2.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe2.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe3.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe3.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe4.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe4.png',
    },
    {
      original: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe5.png',
      thumbnail: 'https://www.mi-forums.com/luxediamond/Hotel_Cala/gallery_hotel_cala_di_volpe5.png',
    },
  ];

  const images5 = [
    {
      original: (Palazzo1),
      thumbnail: (Palazzo1),
    },
    {
      original: (Palazzo2),
      thumbnail: (Palazzo2),
    },
    {
      original: (Palazzo3),
      thumbnail: (Palazzo3),
    },
    {
      original: (Palazzo4),
      thumbnail: (Palazzo4),
    },
  ];

  const images6 = [
    {
      original: (Lenegresco1),
      thumbnail: (Lenegresco1),
    },
    {
      original: (Lenegresco2),
      thumbnail: (Lenegresco2),
    },
    {
      original: (Lenegresco3),
      thumbnail: (Lenegresco3),
    },
    {
      original: (Lenegresco4),
      thumbnail: (Lenegresco4),
    },
    {
      original: (Lenegresco5),
      thumbnail: (Lenegresco5),
    },
  ];

  const images7 = [
    {
      original: (Loscar1),
      thumbnail: (Loscar1),
    },
    {
      original: (Loscar2),
      thumbnail: (Loscar2),
    },
    {
      original: (Loscar3),
      thumbnail: (Loscar3),
    },
    {
      original: (Loscar4),
      thumbnail: (Loscar4),
    },
    {
      original: (Loscar5),
      thumbnail: (Loscar5),
    },
  ];

  const images8 = [
    {
      original: (Oneandonly1),
      thumbnail: (Oneandonly1),
    },
    {
      original: (Oneandonly2),
      thumbnail: (Oneandonly2),
    },
    {
      original: (Oneandonly3),
      thumbnail: (Oneandonly3),
    },
    {
      original: (Oneandonly4),
      thumbnail: (Oneandonly4),
    },
    {
      original: (Oneandonly5),
      thumbnail: (Oneandonly5),
    },
  ];

  const images9 = [
    {
      original: (Reykjavik1),
      thumbnail: (Reykjavik1),
    },
    {
      original: (Reykjavik2),
      thumbnail: (Reykjavik2),
    },
    {
      original: (Reykjavik3),
      thumbnail: (Reykjavik3),
    },
    {
      original: (Reykjavik4),
      thumbnail: (Reykjavik4),
    },
    {
      original: (Reykjavik5),
      thumbnail: (Reykjavik5),
    },
  ];

  const images10 = [
    {
      original: (Nordic1),
      thumbnail: (Nordic1),
    },
    {
      original: (Nordic2),
      thumbnail: (Nordic2),
    },
    {
      original: (Nordic3),
      thumbnail: (Nordic3),
    },
    {
      original: (Nordic4),
      thumbnail: (Nordic4),
    },
    {
      original: (Nordic5),
      thumbnail: (Nordic5),
    },
  ];
  
  
  const heroBannerUrl =
    windowWidth <= 479
      ? HeroBanner320
      : windowWidth <= 768
      ? HeroBanner766
      : windowWidth <= 1024
      ? HeroBanner1024
      : HeroBanner1920

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>luxe diamond suppliers | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
        />
      </Helmet>
      <div className="site-wrap diamondPage">
        <div
          className="diamond-hero-slider"
          
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="diamond-hero-heading">
                Introducing <br/>{" "}m&i Luxe Diamond<br/>{" "}Suppliers...
                 
                </h2>
                <p className="caption">m&i Luxe Diamond Suppliers are a select group offering exquisite properties and products. Acting as champions of our new venture into the world of high-end incentives, you can expect to see them at either or both of the m&i Luxe Forums.  </p>
              </div>
            </div>
          </div>
        </div>
       
       

     
     



        <div className="luxeDiamond-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

           


      

              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
                <a href="#/" onClick={handleShowModalOne}>
      
                  <div className="peopleofmi-video-container">
      
                  <img
                alt={" "}
                src={GstaadMain}
                className={"hotel-thumbnails"}
              ></img></div></a>
                  <h2 className="thumbnail-heading">
                 Gstaad Palace </h2>
                 <a href="https://www.palace.ch/en/?gclid=CjwKCAiArY2fBhB9EiwAWqHK6nMxWBXd-DfIn74Lr2nX0D_WCvJUiodlkP59SFwJBfjm4qxAxv4jfRoChNkQAvD_BwE" target="_blank">Visit hotel website</a>
                 <img
                alt={" "}
                src={GstaadLogo}
                className={"hotel-logo-thumbnails"}></img>
                </div>




              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
                <a href="#/" onClick={handleShowModalTwo}>
                  <div className="diamond-container">
                  <img
                alt={" "}
                src={ParkHyattMain}
                className={"hotel-thumbnails"}
              ></img></div></a>
                 <h2 className="thumbnail-heading">
                 Park Hyatt Vienna </h2>
                 <a href="https://www.hyatt.com/en-US/hotel/austria/park-hyatt-vienna/vieph" target="_blank">Visit hotel website</a>
                 <img
                alt={" "}
                src={ParkHyattLogo}
                className={"hotel-logo-thumbnails"}></img>
              </div>


              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
                <a href="#/" onClick={handleShowModalThree}>
                  <div className="diamond-container">
                  <img
                alt={" "}
                src={HotelCala}
                className={"hotel-thumbnails"}
              ></img></div></a>
                 <h2 className="thumbnail-heading">
                 Hotel Cala Di Volpe </h2>
                 <a href="https://www.destinationcostasmeralda.com/en/" target="_blank" >Visit hotel website</a>
                 <img
                alt={" "}
                src={HotelCalaLogo}
                className={"hotel-logo-thumbnails"}></img>
              </div>
              
              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
                <a href="#/" onClick={handleShowModalFive}>
                  <div className="diamond-container">
                  <img
                alt={" "}
                src={PalazzoMain}
                className={"hotel-thumbnails"}
              ></img></div></a>
                 <h2 className="thumbnail-heading">
                 Palazzo Ripetta </h2>
                 <a href="https://www.palazzoripetta.com/en/index" target="_blank" >Visit hotel website</a>
                 <img
                alt={" "}
                src={PalazzoLogo}
                className={"hotel-logo-thumbnails"}></img>
              </div>

              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
                <a href="#/" onClick={handleShowModalSix}>
                  <div className="diamond-container">
                  <img
                alt={" "}
                src={LenegrescoMain}
                className={"hotel-thumbnails"}
              ></img></div></a>
                 <h2 className="thumbnail-heading">
                 Le Negresco </h2>
                 <a href="https://www.hotel-negresco-nice.com/en" target="_blank" >Visit hotel website</a>
                 <img
                alt={" "}
                src={LenegrescoLogo}
                className={"hotel-logo-thumbnails"}></img>
              </div>

              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
                <a href="#/" onClick={handleShowModalSeven}>
                  <div className="diamond-container">
                  <img
                alt={" "}
                src={LoscarMain}
                className={"hotel-thumbnails"}
              ></img></div></a>
                 <h2 className="thumbnail-heading">
                 L’oscar London </h2>
                 <a href="https://www.loscarlondon.com/" target="_blank" >Visit hotel website</a>
                 <img
                alt={" "}
                src={LoscarLogo}
                className={"hotel-logo-thumbnails"}></img>
              </div>

              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
                <a href="#/" onClick={handleShowModalEight}>
                  <div className="diamond-container">
                  <img
                alt={" "}
                src={Oneandonlymain}
                className={"hotel-thumbnails"}
              ></img></div></a>
                 <h2 className="thumbnail-heading">
                 One&Only Portonovi</h2>
                 <a href="https://www.oneandonlyresorts.com/portonovi" target="_blank" >Visit hotel website</a>
                 <img
                alt={" "}
                src={Oneandonlylogo}
                className={"hotel-logo-thumbnails"}></img>
              </div>

              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
                <a href="#/" onClick={handleShowModalNine}>
                  <div className="diamond-container">
                  <img
                alt={" "}
                src={Reykjavikmain}
                className={"hotel-thumbnails"}
              ></img></div></a>
                 <h2 className="thumbnail-heading">
                 Reykjavik EDITION</h2>
                 <a href="https://www.editionhotels.com/reykjavik/" target="_blank" >Visit hotel website</a>
                 <img
                alt={" "}
                src={Reykjaviklogo}
                className={"hotel-logo-thumbnails"}></img>
              </div>

              <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
                <a href="#/" onClick={handleShowModalTen}>
                  <div className="diamond-container">
                  <img
                alt={" "}
                src={Nordicmain}
                className={"hotel-thumbnails"}
              ></img></div></a>
                 <h2 className="thumbnail-heading">
                 Nordic Luxury</h2>
                 <a href="https://www.nordicluxury.is/" target="_blank" >Visit hotel website</a>
                 <img
                alt={" "}
                src={Nordiclogo}
                className={"hotel-logo-thumbnails"}></img>
              </div>

              {/* <div
                className="col-lg-6 ml-rg-auto py-5"
                style={{ paddingLeft: "40px" }}
              >
              
                  <div className="diamond-container">
                  <img
                alt={" "}
                src={MoreToCome}
                className={"hotel-thumbnails"}
              ></img></div>
               
              </div> */}


              <Modal show={modalState === "modal-one"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={"luxeModal"}
      >
        <Modal.Header onClick={handleClose} closeButton> 
        {/* <span  onClick={() => handleShow(true)}>close</span> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <ImageGallery items={images} />
        <div className="hotelModalHeading">
        <h3>gstaad palace</h3>
        <p>Overlooking the surrounding Saanenland, the Gstaad Palace’s castle-like architecture is spectacular. Inside you’ll find beautiful rooms with mountain views, an Olympic-sized heated pool and a spa complete with a hammam, relaxation garden and even a second private spa for hire. 
</p></div>
        </Modal.Body>
       
      </Modal>

      <Modal show={modalState === "modal-two"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={"luxeModal"}
      >
        <Modal.Header onClick={handleClose} closeButton> 
        {/* <span  onClick={() => handleShow(true)}>close</span> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <ImageGallery items={images2} />
        <div className="hotelModalHeading">
        <h3>park hyatt vienna</h3>
        <p>Indulge in first-class service, fine dining and luxurious spa moments surrounded by exquisite interiors and high-quality products at the former vault of the historic bank building. 
</p></div>
        </Modal.Body>
       
      </Modal>

      <Modal show={modalState === "modal-three"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={"luxeModal"}
      >
        <Modal.Header onClick={handleClose} closeButton> 
        {/* <span  onClick={() => handleShow(true)}>close</span> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <ImageGallery items={images3} />
        <div className="hotelModalHeading">
        <h3> hotel cala di volpe </h3>
        <p>Located on the quiet bay of Cala Di Volpe in northeast Sardinia, Italy, the Hotel Cala di Volpe boasts an Olympic-sized saltwater pool, an exclusive beach club and views made famous by 007. 
</p></div>
        </Modal.Body>
       
      </Modal>

      <Modal show={modalState === "modal-five"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={"luxeModal"}
      >
        <Modal.Header onClick={handleClose} closeButton> 
        {/* <span  onClick={() => handleShow(true)}>close</span> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <ImageGallery items={images5} />
        <div className="hotelModalHeading">
        <h3> palazzo ripetta </h3>
        <p>Located in the heart of Rome between Piazza del Popolo and Piazza di Spagna is Palazzo Ripetta, a 5-star property with 78 rooms and suites in a former 17th-century convent. Its magnificent rooftop offers breathtaking views, its restaurants offer refined Italian cuisine and its meeting rooms sit within deconsecrated chapels.
</p></div>
        </Modal.Body>
       
      </Modal>
           
      <Modal show={modalState === "modal-six"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={"luxeModal"}
      >
        <Modal.Header onClick={handleClose} closeButton> 
        {/* <span  onClick={() => handleShow(true)}>close</span> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <ImageGallery items={images6} />
        <div className="hotelModalHeading">
        <h3> Le Negresco </h3>
        <p>A legendary 5-star hotel founded in 1913, in Nice, Southern France, Le Negresco houses a stunning art collection, 6 private meeting rooms, a Michelin-starred restaurant and a private beach club to welcome guests for a range of high-end MICE events.
</p></div>
        </Modal.Body>
       
      </Modal>     

        <Modal show={modalState === "modal-seven"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={"luxeModal"}
      >
        <Modal.Header onClick={handleClose} closeButton> 
        {/* <span  onClick={() => handleShow(true)}>close</span> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <ImageGallery items={images7} />
        <div className="hotelModalHeading">
        <h3> L’oscar London </h3>
        <p>L’oscar London, located in the famous Covent Garden, is a haven for high-end incentive groups. Its 39 ornately decorated rooms and suites sit within a historic building just a stone’s throw from the West End. Its gourmet restaurant features modern dishes in a Parisian setting, while its event space adds an elegant touch to every meeting.
</p></div>
        </Modal.Body>
       
      </Modal>  


      <Modal show={modalState === "modal-eight"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={"luxeModal"}
      >
        <Modal.Header onClick={handleClose} closeButton> 
        {/* <span  onClick={() => handleShow(true)}>close</span> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <ImageGallery items={images8} />
        <div className="hotelModalHeading">
        <h3> One&Only Portonovi</h3>
        <p>Situated at the entrance of Boka Bay, a fjord-like idyll on Montenegro’s Adriatic Sea, One & Only Portonovi is the jewel of Europe’s most fashionable new riviera. It's 123 chic rooms, suites and villas provide a luxury experience for every guest. 
</p></div>
        </Modal.Body>
       
      </Modal>  

      <Modal show={modalState === "modal-nine"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={"luxeModal"}
      >
        <Modal.Header onClick={handleClose} closeButton> 
        {/* <span  onClick={() => handleShow(true)}>close</span> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <ImageGallery items={images9} />
        <div className="hotelModalHeading">
        <h3> Reykjavik EDITION</h3>
        <p>The Reykjavik EDITION brings the first 5-star modern luxury experience to one of the world’s most sustainable capitals. Located in the historical, scenic heart of downtown Reykjavik, the hotel is conveniently located 45 minutes from the airport and just steps away from the city’s vibrant shopping district.
</p></div>
        </Modal.Body>
       
      </Modal>  

      <Modal show={modalState === "modal-ten"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={"luxeModal"}
      >
        <Modal.Header onClick={handleClose} closeButton> 
        {/* <span  onClick={() => handleShow(true)}>close</span> */}
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <ImageGallery items={images10} />
        <div className="hotelModalHeading">
        <h3> Nordic Luxury</h3>
        <p>Nordic Luxury is a boutique DMC specialising in the bespoke exploration of Iceland and Scandinavia. Delve into the unfamiliar and marvel at the majestic landscapes and culture of the Nordic countries. With over a decade of experience, our expertise and personalised service ensure an immersive and exceptional journey.
</p></div>
        </Modal.Body>
       
      </Modal> 

            </div>
          </div>
        </div>

     
        <div
          className="diamond-quote-block" style={{paddingBottom:"0px"}}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
              <img
                alt={" "}
                src={QuoteMarks}
               ></img>
              <div className="testimonial-carousel">
                
      <div className="testimonial">
      <h2 className="diamond-quote-heading">
      {testimonials[currentTestimonial].quote}
                </h2>
                <img
                alt={" "}
                src={testimonials[currentTestimonial].image}
                className={"quote-thumbnail"}></img>
        <div class="quote-author">
        <span className="author">{testimonials[currentTestimonial].author}</span><br/>
        <span className="position">{testimonials[currentTestimonial].position}</span>
        </div>
      </div>
    </div>
             
              
              </div>
            </div>
          </div>
        </div>


     

       
        <div className="cta-footer">
      <div className="container" style={{textAlign:"center"}}>
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="diamond-footer-heading">
               Be part of m&i's latest event dedicated to the high-end incentive market.
                </h2>
                
                <a href='/signup-mi-luxe-2023'>
                                                    <span className='text-white btn btn-secondary white'>
                                                      I'm in
                                                    </span>
                                                </a>
              </div>
            </div>
          </div>
          </div>
      </div>
      

      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
                                <DigitalAssetsModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default LuxeDiamondSuppliers
