import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/luxe/hero.png"
import Picture1 from "../../assets/images/blog/luxe/Luxe_body_image_1.png"
import Picture2 from "../../assets/images/blog/luxe/porto.png"
import Picture3 from "../../assets/images/blog/luxe/loscabos.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const LuxeBlog = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Luxe: the story behind the concept | m&i</title>
        <meta
          name="description"
          content="We asked Vienna House Andel's Berlin about what makes them the perfect host for our upcoming healthcare event"
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
                <h1 className="heading">m&i Luxe: <span className="coral-underlined"> the story behind the concept <br/>{" "}

                    </span></h1><br/>
                  <p className="blog-date">Published on December 8, 2022</p><br/><br/>
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
                    <p>

                    With the year coming to a close, it’s only right we look forward to the exciting things we’ve got planned for next year, namely our new venture into the world of high-end incentive travel.

                    </p><br />

                    
                    <p>
In 2023 we’ll be welcoming global suppliers offering luxury experiential products and exceptional
properties together with high-end buyers to a 3-day networking experience like no other. But why
did we decide to do this, and why now?
</p>
                    <br />

                    
                    <p>We spoke to our Commercial Director, Heri Kashema, about what brought us to this new forum.
‘We’ve identified a gap in the market between the most exclusive high-end properties and their
ideal target audience. There are only a few platforms offering a solution to this and, naturally,
they’re not as well versed in creating the unique experiences that accompany the traditional
networking format.’</p>
                      <br />
                     
                   
                    <img src={Picture1} alt={" "} ></img>
                    <br /><br />

                      
                    <p>Not only had the m&i team discerned an ever-growing segment of the MICE industry and
subsequently an interest in incentive travel within our audience, but we knew we were the right
people for the job as a collective.<br /><br />

With 15 years of experience under our belts, you’d be hard-pressed to find a more reliable name in
MICE tourism. And, as our CEO Richard Barnes will tell you, this is why the incentive market can trust
us – the stats speak for themselves.<br /><br />

‘I think I’m right in saying that we’ve staged more MICE tradeshows than any other event company
in the world over the last two decades. Since 2005 we’ve staged over 150 m&i events across five
continents and the reason the best in the industry want to be at our events is because we’ve evolved
the way industry comes together and we put delegates first.’<br /><br />

So, now you know how we got here, we need to tell you where we’re going.<br /><br />

OOn the 11-14 October you’ll find our delegates on the yacht-flanked marinas of <a href="https://mi-forums.com/mi-luxe-porto-montenegro-2023">Porto Montenegro</a>, Montenegro for 3 days of immersive networking like no other.<br /><br />

Porto Montenegro was an obvious choice because as Richard explains, ‘despite its ever-increasing
popularity, it’s still relatively undiscovered’. The location has ‘huge appeal for high-end incentives
and is a destination that’s on the radar of all serious incentive planners’.<br /><br />

                    </p>
                    <img src={Picture2} alt={" "} ></img>
                    <br/><br/>

                   
                   

                    <p>Likewise, our host venue, the <a href="https://www.ihg.com/regent/hotels/gb/en/porto-montenegro/tivpm/hoteldetail">Regent Porto Montenegro</a> in Tivat, is an impressive property, known
for its exclusive clientele, Venetian-Renaissance architecture and its convenient proximity to one of
the Adriatic’s most prestigious marinas.</p>
                    <br></br>

<p>Think you’re the right fit for our exclusive guestlist? Register your interest and one of our team will
be in touch.</p><br/>
<a href="/signup-mi-luxe-2023" style={{fontSize:'20px'}}>Count me in</a>


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

export default LuxeBlog
