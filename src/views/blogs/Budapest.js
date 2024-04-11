import React  from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/budapest/banner.png"
import Picture1 from "../../assets/images/blog/budapest/picture1.png"
import Picture2 from "../../assets/images/blog/budapest/picture2.png"
import Picture3 from "../../assets/images/blog/budapest/picture3.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const ViennaHouse = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i returns to live events in Budapest! | m&i</title>
        <meta
          name="description"
          content="m&i returns to live events in Budapest!"
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
                  <h1 className="heading">m&i returns to <span className="coral-underlined"> live events</span>{" "}in Budapest! </h1>
                  <p className="blog-date">Published on September 14, 2021</p><br/><br/>
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

                    <h3>Well, we did it; our first event since early 2020! </h3>
                    <br /><br/>
                    <p>It’s safe to say this was not an easy ride - we had to put all our efforts into making m&i Private Europe 2021 in Budapest a safe, responsible, but still enjoyable event for all, which in the midst of a global pandemic is no easy feat, let us tell you! And after 18 months of umm-ing and ahh-ing about whether we would actually be able to bring people together in 2021, it felt truly incredible to welcome our resilient industry to beautiful Budapest. Our comeback event was officially happening.</p>
                    <br /><br />

                    <h3>So, what was m&i Private Europe all about?</h3>
                    <br /><br />
                    <img src={Picture1} alt={""}></img>
                    <br /><br />

                    <p>We actually started with the smallest event in our roster. m&i Private Europe is designed to bring boutique & independent hotels and small hotel groups together with event planners who are looking for properties of character and out-of-the-box venues. Over the course of 3 days, delegates experienced smart-matched 1-2-1 meetings, along with a range of unique networking activities and social experiences. The defining characteristic of this event is its intimate size, which gives delegates a rare chance to network and connect with absolutely everyone, and form strong bonds that lead to lucrative business relationships.

                      <div className="quote"> <quote>“40 supplier meetings, memories made, relationships developed and Budapest explored. I’m flying home with a huge smile on my face. I wish I had the right words to express how good it feels to see the industry bounce back with so much positivity and optimism. Every meeting I had was greeted with huge smiles and relief for face to face contact.”</quote></div>

                      Bethany Orrow, Senior Account Executive at Make Happen, UK
                      <br /><br />
                      And where better to host an intimately sized Forum than in the charming city of Budapest, which has more incredible sights and places to explore than we could possibly fit into one event schedule! Thankfully, we did manage to include a wide variety of exciting activities for delegates, including bike tours, traditional cooking classes, spa trips, museum tours and, of course, a chance to experience the city’s famous ruin bars. Not to mention our insanely beautiful dinner venues, which included a Europa Boat trip along the Danube, EXTRA ruin bar, and the magnificent Lion’s Court at Buda Castle.

                      <div className="quote"> <quote>“I just told today my entire team how amazing m&i Private was in Budapest. I met so many new industry colleagues who weren't aware of our property, generated 2 strong new leads from my 1-2-1 meetings, and had a great time in general.”</quote></div>

                      Fabian Gruetter, Senior Group Sales Manager, The Dolder Grand, Switzerland
                    </p>
                    <br /><br />
                    <h3>What did delegates make of the event?</h3>
                    <br /><br />
                    <img src={Picture2} alt={""} ></img>
                    <br /><br />


                    <p>From start to finish, it was obvious that our industry had been craving the chance to reconnect face-to-face. For many people, this was not only their first industry event since the start of the COVID-19 pandemic, but the first time they’d travelled abroad full-stop.<br /><br />

                      There were, of course, some initial doubts and fears about whether it was the right time to return to travel, but we did everything in our power to reassure delegates of our enhanced health & safety policy, which had been planned to the very last detail. For example, all delegates were required to show proof of a negative PCR test and were encouraged to social distance and wear face masks. It seemed to have the right effect because every single person showed up to this event and we are so humbled by the faith and trust they put in us as a company, allowing us to pioneer, for many, their first live tradeshow in almost 2 years. Our CEO, Richard Barnes, really said it best:

                      <div className="quote"> <quote>“I was struck by the positivity, warmth and excitement that we felt from our clients - it felt like a big, beautiful family reunion.”</quote></div>

                      As part of our COVID-safe Policy, we highly recommended the use of facemasks, but it seemed clear that delegates felt safe in their environment and opted to show off their smiling faces instead. Everyone seemed to be having a great time! But don’t just take our word for it…

                      <div className="quote"> <quote>“A perfect format with quick meetings that helped me find new products. The processes & organisation were amazing and the whole event was a major success. I have to share my admiration that m&i had the guts to make this event happen. As the first to bring top industry players together again, you've been the pioneer of a 'post-war' situation. The world moves because of companies like you - history is not made by the ones who are afraid to be bold."</quote></div>

                      Natasha De Caiado Castro, CEO at Wish International Events Management, USA
                      <br /><br />
                    <img src={Picture3} alt={""}></img>
                    <br /><br />
                    </p>
                    <br></br>

                    <h3>Want to experience an m&i event?</h3>
                    <br />
                    <p>With three more events planned for 2021 and a full events line-up for 2022, there are plenty of opportunities to be part of our tribe, and we’d love to have you with us. <a href="https://www.mi-forums.com/calendar" target="_blank" rel="noopener noreferrer">Check out our events calendar</a> and sign up today.</p>
                    <br></br>
                    <p>The MICE industry is back, baby!</p>
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

export default ViennaHouse
