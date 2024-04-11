import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/jordan/Header.jpg"
import Picture2 from "../../assets/images/blog/jordan/image2.png"
import Picture3 from "../../assets/images/blog/jordan/image3.jpg"
import Picture4  from "../../assets/images/blog/jordan/image4.jpg"
import StRegis from "../../assets/images/blog/jordan/St_regis_amman.jpg"
import Palladium from "../../assets/images/blog/jordan/palladium.jpeg"
import RitzCarlton from "../../assets/images/blog/jordan/ritz_carlton_amman.jpg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const JordanBlog = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i VIP 2024: what to expect | m&i</title>
        <meta
          name="description"
          content="m&i VIP Connect 2024: what to expect "
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
                <h1 className="heading">m&i VIP 2024: <span className="coral-underlined">what to expect  {" "}
                   </span></h1>
                  <p className="blog-date">Published on Jan 15, 2024</p><br/><br/>
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

                    <p>Unsure about whether you qualify for our VIP Forum in Costa Mujeres? Maybe you’re curious about the VIP concept, formally VIP Connect, or you’d like to know what we’ve got in store for you in our Forum programme. Whatever you’re after, keep reading for a sneak peek into the world of a MICE VIP.
</p>
<br></br>
                                              <a href='/signup'>
                                                    <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                                    Register your interest
                                                    </span>
                                                    </a>
<br/><br/>

                    <h3>What is VIP? </h3>
                    <br />
                  
                    <p>VIP is an exclusive Forum for a select group of top industry leaders. It’s a space for senior-level buyers and suppliers, featuring a programme packed full of intimate networking and destination-specific lifestyle experiences. <br/><br/>

                    To establish a more intimate environment we only recruit a select group of MICE professionals. Costa Mujeres is set to have 70 international suppliers and 80 American hosted buyers. This smaller, exclusive environment allows delegates to maximise relationship building and create more meaningful networking experiences on a human-to-human level. </p>  

                    <div className="quote"> <quote>‘We’re searching for buyers in positions of leadership who’ve been in the industry for over 10 years. Usually they’ll have high purchasing power, budget authority, and they’ll organise lots of international events. It’s the event that the very best buyers across m&i attend.’ </quote></div>

                    <p>As with all our Forums, we’ll be using our cutting-edge matchmaking technology to recommend only the most relevant meetings to delegates for the best connections possible.  <br/><br/></p>
                    <br></br>

                 
                   
                    <h3>Who you’ll meet </h3>
                    <br />
                    <p>VIP Connect is all about seniority. The focus is on the people with the power as opposed to the properties themselves. Of course, that’s not to say that their properties aren’t vetted to meet our high standards – that's a given! <br/><br/>

                    Suppliers can expect to meet high-quality buyers across the following levels: Operations manager/director, procurement managers, owners of small-medium agencies, corporate or association buyers with decision making power and budget control.
                    </p>


<br></br>
                    <img src={Picture3} alt={" "} ></img><br/><br/>

<p>In our Head of Buyer Experience, Urša Nered’s, own words: ‘We’re searching for buyers in positions of leadership who’ve been in the industry for over 10 years. Usually they’ll have high purchasing power, budget authority, and they’ll organise lots of international events. It’s the event that the very best buyers across m&i attend.’ <br/><br/>

Buyers can expect to meet senior-level suppliers made up of MICE-dedicated senior sales managers, sales and marketing directors and business owners. </p>
                   <br></br> 
                   
                   <p>Below are just a few of our confirmed suppliers for m&i Costa Mujeres 24: <p></p> 

                   <br></br>
 


<li>The Waldorf London    </li>

<li>Accor    </li>

<li>Meliá Hotels International Urban South of Spain   </li>

<li>London Hilton On Park Lane </li>

<li>Virgin Voyages </li>
</p>
                 
<br/><br/>
                    <h3>What to expect in 2024 </h3>
<br></br>

                    <h5>Costa Mujeres</h5>
                    <br></br>

                    <p>Delegates can expect to grow their MICE connections in Northern Cancun’s stunning coastline across 3 days from 17-20 November. Guests will be hosted at <a target="_blank" href="https://www.palladiumhotelgroup.com/en/hotels/mexico/costamujerescancun/grand-palladium-costa-mujeres-resort-spa">Grand Palladium Costa Mujeres</a>, a high-end resort and much-applauded host to m&i Luxe Costa Mujeres 2023.</p>
                    <br></br>

                    <p>You can expect 30 AI-matched meetings, evening entertainment showcasing the capital's best evening venues, gourmet dining experiences and a host of destination activities and site inspections. </p>
                    <br></br>

                    <img src={Palladium} alt={" "} ></img><br/><br/>

<h3>Hear from our attendees </h3>
<br />
                    <p><span style={{fontStyle:'italic'}}>‘The meetings were brilliant. I've made some great contacts that will hopefully help me with lots of upcoming business. I can't thank you enough for putting me in touch with them all. I also loved the hotel; my room was gorgeous, and the F&B was good – a brilliant use of my time.’ </span>Stacey Karlsson, Founder and Managing Director, Goho </p>
<br></br>
                    <img src={Picture2} alt={" "} ></img><br/><br/>

                   
                    <p><span style={{fontStyle:'italic'}}>‘I think this event is the best fit for my property as the buyers were top level and the event schedule allowed us to mix and mingle perfectly.’</span> Monica Martell, Director of Sales, Aguas De Ibiza Grand Luxe Hotel <br /><br />

                    Want to join high-level MICE professionals and grow your MICE network in the Americas?</p>
                    
                    <br></br><br/>
                    <a href='/signup'>
                                                    <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                                    Register your interest
                                                    </span>
                                                </a><br/><br/><br/>

              </div>



</div></div>
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

export default JordanBlog
