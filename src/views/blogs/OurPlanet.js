import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/our-planet/thumbnail.png"
import Picture1 from "../../assets/images/blog/our-planet/picture1.png"
import Picture2 from "../../assets/images/blog/our-planet/picture2.png"
import Picture3 from "../../assets/images/blog/our-planet/picture3.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const OurPlanet = () => {
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
                <br></br>
                <h1 className="heading">The <span className="coral-underlined">impact of events</span> on our planet.</h1>
                  <p className="blog-date">Published on May 27, 2022</p><br/><br/>
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
                    <strong>In the build-up to m&i VIP Connect 2022 in Madeira, we asked Vianei Hermes, CEO and Co-Founder of Climate First, to explain the environmental impacts of the events industry and how we can make positive, actionable changes towards a more sustainable future…<br /><br/>

                    </strong>
                    <p>Right now, there’s a clear and profound change taking place across businesses around the world - the climate pledge. Companies of all sizes across different business sectors are starting to do their bit in the race against climate change: Apple will sell products with “zero climate impact” by 2030, Amazon plans to have 100,000 electric vans on the road, Volvo will only sell electric cars, Google made history as the first major company to reach carbon neutrality and is becoming one of the biggest corporate buyers of renewable energy. The list of companies goes on, covering different aspects of sustainability and including their own version of sustainable development goals (SDGs).</p>
                    <br></br>
                    <img src={Picture1} alt={""}></img>
                    <br /><br />


                    <p>So, naturally, those companies wouldn’t want to be associated with un-sustainable events. They must stand for their sustainability strategies and goals which, in some cases, are now part of their products, values and culture. It’s therefore more important than ever for these companies to show customers, employees, suppliers and shareholders that they’re truly committed, especially when organising events.</p><br/><br/>
                    <p>This was much simpler during the Covid pandemic in 2020 and 2021, when events were mostly digital. But physical events are back on the rise with a brand-new requirement: they must be as sustainable as possible.  </p><br /><br />

                    <h3>So, how do we go from “the old norms” to “the sustainable”? </h3>
                    <br />
                    <p>What makes an event sustainable or not? It’s certainly not a simple yes or no question.
<br/><br/>
                      A good place to start is understanding the fundamentals of sustainability, climate change, SDG goals and the main event emissions. Ask yourself questions like: what is it that’s making a negative impact on the planet? How far have my customers come in this area? How can we contribute to their commitments? What about the social & economic aspects? A combination of both knowledge and sustainability solutions will enable event suppliers to adapt and respond to their clients delivering more sustainable events.<br /><br /> </p>

                      <br></br>
                    <img src={Picture2} alt={""}></img>
                    <br /><br />

                    <p>Many of us are stuck on well-established environmental issues, such as the use of plastic straws, plastic in general, red meat and the idea that flights are always bad. But how unsustainable is red meat that’s coming from an organic farm nearby the hotel? How dangerous is plastic if re-used or made from recycled materials? Are flights that bad if they can use fossil-free fuels? Once you start understanding sustainability, it becomes easier to find and propose solutions. We’re already seeing great leaps in technology - it’s even possible now to capture carbon from the air to become carbon neutral. </p>

                    <br></br>
                    {/* <img src={Picture3} alt={""}></img> */}
                    <br /><br />

                      <h3>What can you do to make a bigger environmental impact at events?</h3>
                    <br />
                    <p>Remember that every individual is responsible for their own CO2 footprint, so providing education on their personal impact is key. For example, skipping red meat at an event might feel like a positive action, but it’s more important to create an understanding about how industrial-scale red meat impacts the planet. This, in turn, could lead to an extended period of better environmental choices for attendees, and the education they gain might even be passed down to their friends and families.</p>

                    <br></br>
                    <img src={Picture3} alt={""}></img>
                    <br /><br />


                    <p>Your environmental efforts could also greatly impact local communities, where events might have a high economic and social impact beyond just the initial event dates. Using more local suppliers and services will leave a positive sustainable footprint.</p>
                    <br></br>

                    <p>Don’t hold back on communication! Be transparent and honest with attendees about your event’s footprint. Communicate the actions taken to minimise, reduce and compensate for the emissions caused. The right communication will give credibility to the sustainability efforts and better engage the participants.</p><br /><br />



                    <h3>Discover more about how to run sustainable events</h3>
                    <br />
                    <p>From 3-6 July 2022, I’ll be working alongside m&i at their VIP Connect 2022 event in Madeira, Portugal. Together with Hermes Group, my NGO, Climate First will be at the event, providing plenty of practical tips and education on everything you need to make your events more sustainable and inspire your attendees to reduce their carbon footprint. </p>
                    <br></br>


                    <p>Sign up today right <a href="https://bit.ly/3wPB2cd">here</a>!
                      <br/><br/>
                      I hope to see you there! </p>
                    <br></br>


                    <p><strong>Vianei Hermes</strong> – CEO & Founder of NGO, Climate First. Sustainability Manager at Stockholm-based event agency, Hermes Group AB.</p>
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

export default OurPlanet
