import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/blogs/blog1-banner.png"
import Picture1 from "../../assets/images/blog/metaverse/2.png"
import Picture2 from "../../assets/images/blog/metaverse/3.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const Rendez = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>blog | m&i</title>
        <meta
          name="description"
          content="We're a tribe of passionate people who love what we do. Find out more about us and our global networking events."
        />


      </Helmet>
      <div className="site-wrap">
        <div className="blog-single-page">
        <div
          className="blog-single-hero-slider"
        >
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
              <div className="blog-banner" style={{ backgroundImage: `url(${Banner})` }}> </div>
                <h1 className="heading">the metaverse is coming to the meetings industry - <span className="coral-underlined">are<br/>{" "}
                  you ready?
                    </span></h1>
                  <p className="blog-date">Published on April 7, 2022</p><br/><br/>
              </div>
            </div>
          </div>
        </div>
<div className="article">
        <div
          className="site-half block no-top-padding"
        >
          <div className="container">
            <div className="row no-gutters">

              <div className="col-lg-9 mr-lg-auto py-4">
                {/* <h3>Our commitment</h3> */}
                    <p>We’ve all heard of the metaverse - it’s certainly been creating quite a buzz in the last year. But as members of the meetings & events industry, perhaps the word we should all be paying more attention to is ‘RendezVerse’.<br /><br/>

Having just partnered with m&i, we caught up with CEO, Peter Gould, for the lowdown on this exciting new project that will change how the hospitality industry meets and conducts business.
</p><br/><br/>

                    <h3>Before we dive into RendezVerse, can you tell us more about the metaverse and how it’s going to affect the MICE industry?</h3>
                    <br /><br/>
                    <p>The metaverse is a wide-ranging network of interoperable virtual environments, designed to facilitate social connections. It will transform the way hotels are marketed and the way enterprises meet.</p>
                    <div className="quote"> <quote>This is not a distant sci-fi prospect any more, it’s a reality that’s being built right now. These new technologies are combining to transform the way hotels will be marketed in the future.</quote></div>
                    <p>Together, Virtual Reality, Augmented Reality, AI, blockchain and 5G mobile will give birth to a new generation of digital environments. Whether you call it the metaverse, Web 3.0 or the ‘new internet’, that’s a matter of personal choice. </p><br/><br/>
                    <h3>What is RendezVerse and why should MICE professionals have it on their radar?</h3>
                    <br />
                    <p>RendezVerse is building a community in the metaverse for the hotel & events industry, bringing together buyers, venues, service providers & event specialists inside digital twins of some of the most iconic venues & hotels in the world. We envisage enabling meetings, site visits & eventually events in the metaverse through the use of VR technology to remove the obstacles of time and distance. This in turn will deliver real world efficiency, connect faces and places with visual realism and effortless conversation for the next generation of digital interaction.
<br/><br/>
We know that digital can never replace the magic of face-to-face meetings. However, at RendezVerse we believe that Web3.0 will allow the current digital experiences to be greatly improved. That is our mission; to make meetings as good as real life - virtually!<br/><br/>

                      So how will RendezVerse will be serving the meetings & events industry?</p><br /><br />
                      <h3>NGAGE Xplore for virtual site visits</h3>
                    <br />
                    <p>It's estimated buyers conduct 10 million hotel site visits every year. However, they are often expensive, time-consuming and pose a negative effect on the planet. NGAGE Xplore allows venues to engage face to face in shared experiences with buyers in an immersive 3D virtual twin of their properties. The twins are built in private metaverse settings that allow ‘on-site’ meetings to take place over the internet. No travel is required and no cost to the planet.  </p>
                    <br></br>
                    <img src={Picture1} alt={" "} ></img>
                    <br /><br />
                      <h3>NGAGE Arena and Podium for events in the metaverse</h3>
                    <br />
                    <p>An NGAGE Arena is being built to host virtual and hybrid events in the metaverse. With a particular focus on conferences and networking, our NGAGE Podium product suite will provide a range of features to bring conferences and events alive in digital environments that we will build for our hotel and venue partners.</p>
                    <br></br>
                    <h3>More events, more space</h3>
                    <br />
                    <p>Additionally, RendezVerse can expand the scope and format of existing live events. Twin metaverse events will run alongside live events, allowing hotels to sell more spaces, event planners and promoters to offer more creative solutions, and a higher volume of guests to attend events in a more sustainable way.</p>
                    <br></br>

                     <h3>What role will m&i play in this project?</h3>
                    <div className="quote"> <quote>We’re so thrilled to be partnered with m&i because as a major player in the MICE industry, they have the experience and expertise to help us shape the platform and the technology supporting it.</quote></div>
                    <p>They’re also able to help us reach out to a strong community of meetings and events professionals. In fact, we’ll be attending three m&i Flagship Forums in 2022: m&i Europe Spring in Seville, m&i Europe Autumn in Porto, and m&i Americas in Punta Cana. </p><br /><br />
                    <img src={Picture2} alt={" "}></img>
                    <br /><br />

                    <h3>What can the delegates expect to see at m&i flagship Forums in Seville, Porto, and Punta Cana this year?</h3>
                    <br />
                    <p>The demo in Seville will showcase our site inspection product, NGAGE Xplore, with our early development partner hotels: Madrid Marriott Auditorium, The Atlantis Dubai and The JW Marriott Marquis Dubai. We’ll be showing a range of spaces, including hotel lobbies, meeting rooms, and hotel suites.
                      <br/><br/>
                      In Porto and Punta Cana we plan to show the full launch of the RendezVerse platform where our virtual environments will be connected to the community we are building. We’ll also showcase other RendezVerse products, including the NGAGE Arena and NGAGE Podium virtual conference product suite.</p>
                    <br></br>

                    <h3>How can Meetings & Events professionals discover RendezVerse for themselves?</h3>
                    <br />
                    <p>Firstly, they’ll need to attend one of m&i’s 2022 Flagship Forums in Seville, Porto and Punta Cana.
                      <br/><br/>
                      As an attendee, they’ll be offered the option to book a demo with us where they can be one of the first MICE professionals to enter the RendezVerse and give us their feedback.</p>
                    <br></br>

                    <h3>Intrigued about how RendezVerse will change the way our industry meets and does business? </h3>
                    <br />
                    <p>Check out the <a href="https://www.rendezverse.com">RendezVerse website</a> or meet them in-person at m&i Europe Spring, m&i Europe Autumn or m&i Americas.</p>
                    <br></br>

              </div>



</div></div>
            </div>
            </div>


          <RelatedArticles />

          </div>
      </div>
      <SubscribeModal
                                    isShowing={isShowing}
                                    hide={toggle}
                                />
    </>
  )
}

export default Rendez
