import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet";
import "../assets/scss/style.scss"
import HeroBanner1920 from "../assets/images/banners/Advisory_Hero_1920.png"
import HeroBanner1024 from "../assets/images/banners/Advisory_Hero_1024.png"
import HeroBanner766 from "../assets/images/banners/Advisory_Hero_766.png"
import HeroBanner320 from "../assets/images/banners/Advisory_Hero_320.png"
import HomeCTA from "../assets/images/advisor/CTA.png"
import SubscribeModal from '../components/elements/SubscribeModal';
import Kelly from '../assets/images/advisor/Kelly.png';
import Benoit from '../assets/images/advisor/Benoit.png';
import Cherryl from '../assets/images/advisor/Cherryl.png';
import Karen from '../assets/images/advisor/Karen.png';
import Nell from '../assets/images/advisor/Nell.png';
import Joe from '../assets/images/advisor/Joe.png';
import useModal from '../components/elements/useModal';

const AdvisoryBoard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { isShowing, toggle } = useModal();
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
        <title>advisory board | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
        />
         <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_About.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_About.png"} />

      </Helmet>
      <div className="site-wrap">
        <div
          className="advisory-hero-slider"
          style={{ backgroundImage: `url(${heroBannerUrl})` }}
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="about-hero-heading">
                 meet our
                  <br /> {" "}
                  <span class="coral-underlined">
                    {" "}
                    americas <br />advisory board{" "}
                  </span>
                </h2>
                <p>Our advisory board is made up of leading professionals
who make signifcant contributions to the MICE
industry. This independent body works alongside our
team and helps shape m&i Americas as one of the
leading events in the MICE calendar.</p>
              </div>
            </div>
          </div>
        </div>

<br/><br/>
<br/><br/>

        <div className="advisory-block">
          <div className="container">
            <div className="row no-gutters align-items-stretch ">

            {/* Kelly */}
            <div
                className="col-lg-5 ml-rg-auto py-5"
                style={{ marginLeft:'10%' }}
              >
                  <img
                alt={" "}
                src={Kelly}
                className={"video-thumbnails"}
              ></img>
              <div className="advisory-description">
                <h2>Kelly <br/>Gallagher</h2>
                <h4>Vice President, Marketing<br></br>Canvas Meetings & Incentives</h4><br></br>
                <p>Working in the hospitality industry since
                the age of just 15, Kelly Gallagher hails
                from Pennsylvania, USA, where she
                started her career as a Sales Manager at
                The Westin Philadelphia Hotel. In 2010,
                she took on the role of Group Sales
                Manager for Four Seasons Hotels &
                Resorts before moving up to Director of
                Sales for Site Search & Select Inc in 2015.
                These days, you’ll find Kelly working for
                Canvas Meetings + Incentives, where
                she’s risen through the ranks from Senior
                Meeting Planner to her current role as
                Vice President of Marketing. In Kelly’s
                own words: ‘I’m taking my passion for
                travel and hospitality, and doing what I
                love every single day.’<br></br><br></br>
                <a href='https://www.linkedin.com/in/destinationkelly/' target="_blank">Connect with Kelly on LinkedIn</a></p>
                </div></div>

                 {/* Benoit */}
            <div
                className="col-lg-5 ml-rg-auto py-5"
                style={{ marginLeft:'5%' }}
              >
                  <img
                alt={" "}
                src={Benoit}
                className={"video-thumbnails"}
              ></img>
              <div className="advisory-description">
                <h2>Benoit <br/>Cavard</h2>
                <h4>Vice President of Global Sales<br></br>Global DMC Partners</h4><br></br>
                <p>Benoit Cavard started his career in France
                    as a freelance event manager before
                    moving on to become Project Manager for
                    Holt Paris Welcome Service in 2007. He
                    then progressed his career to the Tumlare
                    Corporation, where he started as a Sales
                    Manager in Paris before relocating to
                    Boston, Massachusetts to take on the role
                    of Director of Sales for North America,
                    Meetings & incentives. Benoit is now Vice
                    President of Global Sales for Global DMC
                    Partners, providing destination
                    recommendations and sourcing the best
                    DMCs from their network. He likes to
                    think of himself as a one-stop shop for
                    meeting, program and event needs.<br></br><br></br>
                <a href='https://www.linkedin.com/in/benoit-cavard-3259b4/' target="_blank">Connect with Benoit on LinkedIn</a></p>
                </div></div>



                 {/* Karen */}
            <div
                className="col-lg-5 ml-rg-auto py-5"
                style={{ marginLeft:'10%' }}
              >
                  <img
                alt={" "}
                src={Karen}
                className={"video-thumbnails"}
              ></img>
              <div className="advisory-description">
                <h2>Karen <br/>Hudson</h2>
                <h4>Account Executive<br></br>Creative Group, Inc</h4><br></br>
                <p>Karen Hudson attended The University of
                California, Berkeley and after graduation,
                began her career in the hospitality
                industry working for Four Seasons Hotels
                and Resorts. She developed and managed
                the corporate and incentive sales market
                that included California and the Western
                Region of the US. After moving to the
                Monterey Peninsula, she helped lead two
                successful DMCs as Director of Sales.
                During this time, Karen also developed a
                successful speaker series as a radio cohost, tackling topics that support women
                in their personal and professional lives.
                Karen is now an Account Exec. for
                Creative Group, a Direct Travel company
                specialising in engagement, incentive and
                recognition solutions, and end-to-end
                meeting and event management.<br></br><br></br>
                <a href='https://www.linkedin.com/in/karen-hudson-b871ba42/' target="_blank">Connect with Karen on LinkedIn</a></p>
                </div></div>

                 {/* Cherryl */}
            <div
                className="col-lg-5 ml-rg-auto py-5"
                style={{ marginLeft:'5%' }}
              >
                  <img
                alt={" "}
                src={Cherryl}
                className={"video-thumbnails"}
              ></img>
              <div className="advisory-description">
                <h2>Cherryl <br/>Brazier CIS, SEPC</h2>
                <h4>President<br></br>Anchor Collection</h4><br></br>
                <p>Cherryl Brazier began her career in the UK
                and was educated at the Leeds
                Polytechnic School of Hospitality
                Management. She moved to the US in the
                late ’90s to take on the position of Senior
                Marketing Executive with the British
                Tourist Authority in Los Angeles. After
                holding global sales positions with Thistle
                Hotels, Millennium Hotels and Radisson
                Hotels, Anchor Collection was launched in
                2018 to represent independent hotels,
                venues and DMC’s around the world who
                want to increase their group, meeting and
                incentive business from the US market.
                She’s an active member in MPI and SITE
                and previously served on the international
                board of directors.<br></br><br></br>
                <a href='https://www.linkedin.com/in/cherrylbrazier/' target="_blank">Connect with Cherryl on LinkedIn</a></p>
                </div></div>

                      {/* Nell */}
            <div
                className="col-lg-5 ml-rg-auto py-5"
                style={{ marginLeft:'10%' }}
              >
                  <img
                alt={" "}
                src={Nell}
                className={"video-thumbnails"}
              ></img>
              <div className="advisory-description">
                <h2>Nell <br/>Nichols</h2>
                <h4>Senior Director Global Accounts<br></br>HelmsBriscoe</h4><br></br>
                <p>Nell Nicholas joined HelmsBriscoe as
                  Manager, Global Accounts in 2002. Based
                  out of Cornwall, Connecticut, Nell has
                  risen to the role of Senior Director, Global
                  Accounts, and has received nine
                  President’s Club awards during her time
                  with HB.<br></br><br></br>
                  With more than 30 years of industry
experience, Nell has worked in several
sales roles at a variety of hotels, and prior
to joining HB, she owned a recruiting
company for the hotel industry. Nell also
worked for a Swiss hospitality college,
which required traveling to properties
across the United States. Nell is a past
board member of the Connecticut chapter
of MPI, and currently supports them in a
development role.<br></br><br></br>
                <a href='https://www.linkedin.com/in/nell-nicholas-a2b2703/' target="_blank">Connect with Nell on LinkedIn</a></p>
                </div></div>

                  {/* Joe */}
            <div
                className="col-lg-5 ml-rg-auto py-5"
                style={{ marginLeft:'5%' }}
              >
                  <img
                alt={" "}
                src={Joe}
                className={"video-thumbnails"}
              ></img>
              <div className="advisory-description">
                <h2>Joe<br/>
Fijol, DMCP </h2>
                <h4>Founder and Principle
<br></br>
ETHOS Event Collective</h4><br></br>
                <p>With more than 30 years of experience, Joe Fijol has a swathe of industry knowledge. Currently, Joe’s a Principal at the ETHOS Event Collective, a destination and event management company he founded ETHOS Event Collective aims to enhance personal connections through technology and research while accepting social responsibility within the communities they serve. The collective has produced thousands of award-winning programmes across the United States. Joe’s depth in the industry includes experience working at Pebble Beach Resorts, Royal Caribbean, and Universal Studios. Joe’s own words, it’s all about ‘making the impossible possible, while serving in a way that makes others feel important.’ <br></br><br></br>
                <a href='https://www.linkedin.com/in/joe-fijol-dmcp-5a17307/' target="_blank">Connect with Joe on LinkedIn</a></p>
                </div></div>



               
              </div>
              </div></div>



       

        <div className="home-footer-slider yellow-bg">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div
                className="col-lg-8 ml-rg-auto py-5 laptop"
                style={{ paddingLeft: "100px", color: "#fff" }}
              >
                <h2>
                  want to be part of{" "}<br />
                  <span className='blue-underlined'>m&i Americas?</span>
                </h2>
                
<br/>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    color:'inherit'
                  }}
                >
                 Join us in El Paso, Texas<br />
                { " "} from 1-4 October 2023
                </p>
                <a href='/mi-americas-2023'>
                <span className=" btn btn-secondary white" style={{width:'200px'}}>
                 find out more
                  </span></a> 
              </div>
            </div>
          </div>
          <div className="col-lg-10 ml-rg-auto py-3">
            <div className="img-bg-1">
              <img
                alt={" "}
                src={HomeCTA}
                className={"homeCTA desktop"}
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

export default AdvisoryBoard
