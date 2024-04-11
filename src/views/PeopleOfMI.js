import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/banners/People_of_m&i_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/People_of_m&i_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/People_of_m&i_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/People_of_m&i_Hero_320.png"
import PeopleOfMiCTA from "../assets/images/peopleofmi_panel_characters.png"
import SubscribeModal from '../components/elements/SubscribeModal';
import useModal from '../components/elements/useModal';
import PlayBtn from '../assets/images/peopleofmi/play_button.png'
import Thumbnail1 from "../assets/images/peopleofmi/thumbnail1.png"
import Thumbnail2 from "../assets/images/peopleofmi/thumbnail2.png"
import Thumbnail3 from "../assets/images/peopleofmi/thumbnail3.png"
import Stefanie from "../assets/images/peopleofmi/stefanie.png"
import Daniele from "../assets/images/peopleofmi/daniele.png"
import Christin from "../assets/images/peopleofmi/christin.png"
import Benjamin from "../assets/images/peopleofmi/benjamin.png"
import Julia from "../assets/images/peopleofmi/julia.png"
import Jessica from "../assets/images/peopleofmi/jessica.png"
import Fabian from "../assets/images/peopleofmi/fabian.png"
import Andreas from "../assets/images/peopleofmi/Andreas.png"
import Adrian from "../assets/images/peopleofmi/Adrian.png"
import Thijs from "../assets/images/peopleofmi/thijs.png"
import Randi from "../assets/images/peopleofmi/randi.png"
import Jens from "../assets/images/peopleofmi/Jens.png"
import Juho from "../assets/images/peopleofmi/Juho.png"
import Marc from "../assets/images/peopleofmi/Marc.png"
import Rhian from "../assets/images/peopleofmi/Rhian.png"





const PeopleOfMI = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { isShowing, toggle } = useModal();
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal9, setModal9] = useState(false);
  const [modal10, setModal10] = useState(false);
  const [modal11, setModal11] = useState(false);
  const [modal12, setModal12] = useState(false);
  const [modal13, setModal13] = useState(false);
  const [modal14, setModal14] = useState(false);
  const [modal15, setModal15] = useState(false);
  const [modal16, setModal16] = useState(false);
  const [modal17, setModal17] = useState(false);
  const [modal18, setModal18] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const openModal2 = () => {
    setModal2(!modal2);
  };
  const openModal3 = () => {
    setModal3(!modal3);
  };

  const openModal4 = () => {
    setModal4(!modal4);
  };

  const openModal5 = () => {
    setModal5(!modal5);
  };

  const openModal6 = () => {
    setModal6(!modal6);
  };

  const openModal7 = () => {
    setModal7(!modal7);
  };

  const openModal8 = () => {
    setModal8(!modal8);
  };

  const openModal9 = () => {
    setModal9(!modal9);
  };

  const openModal10 = () => {
    setModal10(!modal10);
  };

  const openModal11 = () => {
    setModal11(!modal11);
  };

  const openModal12 = () => {
    setModal12(!modal12);
  };

  const openModal13 = () => {
    setModal13(!modal13);
  };

  const openModal14 = () => {
    setModal14(!modal14);
  };

  const openModal15 = () => {
    setModal15(!modal15);
  };

  const openModal16 = () => {
    setModal16(!modal16);
  };

  const openModal17 = () => {
    setModal17(!modal17);
  };

  const openModal18 = () => {
    setModal18(!modal18);
  };


  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
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
        <title>people of m&i | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
        />
      </Helmet>
      <div className="site-wrap">
        <div
          className="peopleofmi-hero-slider"
          style={{ backgroundImage: `url(${heroBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="peopleofmi-hero-heading">
                 people
                  <br />
                    of m&i{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="site-half block">
          <div className="container">
            <div className="row no-gutters center-content">
              <div className="col-lg-8 mr-lg-auto py-5" style={{paddingRight:'20px', marginLeft:'5%'}}>
                <p>
                Meet the People of m&i. In this selection of short interviews, we’ll be shining a light on some MICE experts with incredible industry insight and experience. Why not take some time to get to know them and what they do by listening to their exciting business stories.
                </p>
              </div>
            </div>
          </div>
        </div>
        


        <div className="peopleofmi-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">



            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal18} >
        {modal18 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal18}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/PcxL5nSEyE0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Rhian}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 Get the lowdown on the client trends in high-end incentive travel and find out which top destination Rhian Morgan, Incentives & Events Manager for Abercombie & Kent, would choose to holiday in. 
                </h4>
                </div>


            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal17} >
        {modal17 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal17}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/_lOVqQe4nfY"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Marc}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 In this edition we speak to Marc Henri De Bryne, founder and general director of WMH Project, about what keeps him coming back to our Forums and his favourite spots in Brussels.  
                </h4>
                </div>


            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal16} >
        {modal16 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal16}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/x5ihkMtd1XM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Juho}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 “Do it well but don’t screw it up” <br/><br/>

Find out more about Juho Hiidenmaa’s life mantra and the sort of events he organises as a Production Director at Lataamo Group. </h4>              </div>

            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal15} >
        {modal15 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal15}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/WwhkOXYifUc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Jens}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 Jens Ihsen, Director of the Düsseldorf Convention Bureau, gives us some insight into why you should host your next meeting or event in Düsseldorf – spoiler alert: there’s a lot of beer involved! </h4>
              </div>

            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal14} >
        {modal14 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal14}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/AcBk0OOy9-U"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Randi}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 In this edition we’re speaking to Randi Lemmen, Director of Sales for Odyssey Hotel Group, about the role fun plays in the working day and the famous leading lady she would like to play her in a movie of her life. </h4>
              </div>


            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal13} >
        {modal13 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal13}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/aZdUnOrLaGE"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Thijs}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 This week we learn about the world of cybersecurity events from Thijs Vroegindeweij of SANS EMEA.</h4>
              </div>


            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal12} >
        {modal12 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal12}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/AOz-_kvRWMc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Adrian}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 We asked Adrian Vicente of Hotel Ercilla de Bilbao about what makes Bilbao special. Find out why it’s a destination to watch and which famous cast stayed in the hotel.                 </h4>
              </div>

            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal11} >
        {modal11 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal11}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/FwZgyTbuJeU"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Andreas}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 In this edition, we are talking to Andreas Krausz to find out how he handles challenging events and why he is looking forward to reconnecting with colleagues in the events industry.
                </h4>
              </div>



            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal10} >
        {modal10 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal10}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/LJjSwmT-D-M"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Julia}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 We're catching up with Julia Ahrens, Junior Project Manager for American Express Global Business Travel.
                </h4>
              </div>

              <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal9} >
        {modal9 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal9}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/uB3i2vkUmlI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Fabian}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 There's much more in Zurich, Switzerland for events than you might think, according to Fabian Gruetter.
                </h4>
              </div>

              <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal8} >
        {modal8 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal8}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/Pe92z_k4eCU"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Benjamin}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 In this edition, we're talking buyer quality, working for Thon Hotels, and life mantras with Benjamin Hunnestad.
                </h4>
              </div>

                            <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal7} >
        {modal7 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal7}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/cgVW9Ma7vsQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Jessica}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 Jessica Grifgnée of GOPA Com tells us what it's like to organise events within the public sector.
                </h4>
              </div>

                <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal6} >
        {modal6 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal6}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/68Q-tcm-3vU"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Daniele}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 A sneak peek into the career of Danielle Martens from Toyota Motor Europe.
                </h4>
              </div>

              <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal5} >
        {modal5 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal5}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/mNnxyuLenpM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Stefanie}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 Stefanie Funk, Director of Operations & Resources at MCI Deutschland, talks NYC events and the next 18 months for the MICE industry.
                </h4>
              </div>

              <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal2}>
        {modal2 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal2}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/I1EnNx9uspE"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Thumbnail2}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 João returns and talks self-improvement, MICE motivation and his new book.
                </h4>
              </div>

              <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal4} >
        {modal4 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal4}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/bZmBGeaKhlE"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Christin}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 An insight into sourcing the perfect suppliers and life in Munich with Christin Tschaeche, Event Specialist at Salesforce.
                </h4>
              </div>



              <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >
                <a href="#/" onClick={openModal3} >
        {modal3 ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal3}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/K9hpofW_5A0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Thumbnail3}
                className={"video-thumbnails"}
              ></img></div></a>
                 <h4 className="thumbnail-heading">
                 Pascal talks event partners, industry award wins and a healthy work-life balance.
                </h4>
              </div>


              <div
                className="col-lg-4 ml-rg-auto py-5"
                style={{ paddingLeft: "80px" }}
              >


<a href="#/" onClick={openModal} >
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                {/* <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                /> */}
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      {/* <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      /> */}
                    </div>
                  ) : null}
                  <iframe
                              className="modal__video-style"
                              title="People of MI"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/16LjBVU_voM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
        <div className="peopleofmi-video-container">
        <img alt={"play"}
                src={PlayBtn}
                className={"playBtn"}></img>
                  <img
                alt={" "}
                src={Thumbnail1}
                  className={"video-thumbnails"}
                  onClick={openModal}
              ></img></div></a>
                <h4 className="thumbnail-heading">
                João Pinto Coelho from Onyria Resorts lets us in on his secrets to success.
                </h4>
              </div>






















            </div>
          </div>
        </div>



        <div className="peopleofmi-footer-slider yellow-bg">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px" }}
              >
                <h2 class="raven">
                join our <span className="blue-underlined">people of m&i.{" "}</span>
                </h2>
                <br />

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                >
                  Sign up to one of our upcoming events today
                and <br /> { " "} join this club of elite MICE professionals.
                </p>

               <a href="/signup"> <span className=" btn btn-secondary white" style={{width:'200px'}}>
                   sign up
                  </span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-3">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={PeopleOfMiCTA}
                className={"PeopleOfMiCTA desktop"}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default PeopleOfMI
