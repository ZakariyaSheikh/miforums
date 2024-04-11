import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/erin/Erin.png"
import Picture1 from "../../assets/images/blog/erin/ErinandUrsa.png"
import Picture2 from "../../assets/images/blog/erin/Banff.jpg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const ErinTierney = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Meet our Director of Sales, the Americas, Erin Tierney | m&i</title>
        <meta
          name="description"
          content="Meet our Director of Sales, the Americas, Erin Tierney "
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
              <div className="blog-banner" style={{ backgroundImage: `url(${Banner})`, backgroundSize:"contain", marginLeft:"5%" }}> </div>
                <h1 className="heading">Meet our Director of Sales, the Americas, <span className="coral-underlined"> Erin Tierney  {" "}
                   </span></h1>
                  <p className="blog-date">Published on May 17, 2023</p><br/><br/>
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

                    <p>With two Forums taking place in the Americas this year, we felt it was only right to introduce (or reintroduce) our brilliant Director of Sales, the Americas, Erin Tierney. We picked her brains on everything from her extensive career in the industry to her favourite moments across her 11 years at m&i and her work with SITE (Society for Incentive Travel Excellence).
</p>
<br/><br/>

                    <h3>1. With over 20 years in the industry, it's fair to say you're an expert in your field. Could you tell us how those experiences have shaped your position today? </h3>
                    <br />
                  
                    <p>I have had the unique opportunity to not only work in the events industry but to also teach event management courses at the University of Massachusetts. While I have a PhD in Education/History from Trinity College Dublin, I have been planning events, whether in college, the music & film industries or for tourism boards for more than 20 years. My varied experience has provided deep expertise and knowledge in the meeting & incentive industry, strong strategic thinking skills, a vast network of contacts and opportunities for mentorship and leadership.    </p>  
<br></br>
                   

                    <h3>2. What sparked your interest in the industry? </h3>
                    <br />
                  
                    <p>When I first started working in the industry for the Hong Kong Tourism Board, I had no idea what meetings & incentives were let alone what a tourist board was. About a month into the job I was in love! I was so excited about the position because it brought together both my love for event planning and my love of history. I soon learned that there is nothing more rewarding than being able generate an interest in a particular destination for a meeting or incentive travel program than through highlighting a destination’s unique features, cultural attractions, historical sites, and local events. The industry also provides lots of opportunities to travel and explore, as well as to be creative and innovative.    </p>  
<br></br>
                    <img src={Picture1} alt={" "} ></img><br/><br/>
                    <p>SITE Global Conference attendees: Stella Ortiz, Brenda Edwards, Caterina Collodel and Erin Tierney</p><br/><br/>

                    <h3>3. Many will be interested to know that you're also the Vice President of Education for the SITE Northeast Chapter. Tell us how that came about. </h3>
                    <br />
                  
                    <p>While I have attended many SITE chapter events throughout my career it was only recently that I found myself connecting more and more with my local chapter. The 2022 board members were so welcoming when I volunteered to become a committee member. With my background in education, it only made sense to work on the education committee. It was a very rewarding experience both professionally and personally and therefore I raised my hand to take on the VP role for 2023.   <br/><br/>

What I love about the SITE Northeast Chapter is that it provides valuable access to industry resources, education, and networking opportunities. It’s a great mix of incentive planners, destination management companies, hotels, and other incentive travel professionals. Each of us in the chapter gets to assist in shaping the future of incentive travel and create new and lasting relationships.  </p>  
<br></br>


                    <h3>4. Tell us your favorite Forum memory. </h3>
                    <br />
                  
                    <p>One of my favorite Forum memories is from our m&i Transatlantic Forum that was held in Banff/Lake Louise in 2017. The variety of locations for the meetings, the unique and fun networking activities, the welcoming atmosphere and the scenic beauty of the destination were unforgettable. My favorite networking activity was the mini–Olympics team building afternoon on Lake Louise.   </p>  


<br></br>
<img src={Picture2} alt={" "} ></img><br/><br/>

<h3>5. How does working with SITE aid your work for m&i?   </h3>
                    <br />
                  
                    <p>SITE has a strong global presence with members all over the world. Collaborating with SITE creates opportunities to connect with a variety of travel and event professions worldwide which in turn expands both of our organizations. SITE is a trusted source for industry knowledge and allows me to stay up to date with the latest trends, best practices, and emerging technologies. SITE also provides a wealth of educational opportunities, such as the Global Conference, webinars, and certification programs to its members.   
</p>  <br/><br/>



<h3>6. We’ve got two exciting Americas Forums coming up this year. Could you tell us a bit about them and how they differ. </h3>
                    <br />
                  
                   
                  
                    <p>m&i Americas is an event that brings together buyers and suppliers from the meetings & events industry. This Forum is designed to optimize your business opportunities in an innovative environment with highly vetted, influential buyers with domestic and international business. Over three days attendees are immersed in one-to-one meetings, networking activities and our famous social program. This year we’re taking our guests to El Paso on 1-4 October for <a href="https://www.mi-forums.com/mi-americas-2023">m&i Americas, El Paso 2023.</a>
                    <br/><br/>
                    m&i Luxe is an exclusive event focusing on the luxury travel market. It’s designed for high-end travel buyers and suppliers who specialize in luxury travel products and services. With our new “luxury experience” format we can recruit a very high quality of buyer. These forums are held in luxury destinations around the world and feature pre-scheduled one-to-one appointments as well as networking opportunities. Look out for more information about our m&i Luxe Americas event taking place this December in Mexico. 
<br/><br/>
In summary, m&i Americas is a broader event for the American meetings and events industry, while m&i Luxe is more exclusive and focused on the luxury MICE travel market.  
</p>  
<br/><br/>

                    <h3>In your opinion, what gives our Forums the edge on the competition?    </h3>
                    <br />
                    <p>With our industry still facing many challenges, especially the increasing difficulty in getting in front of the right decision makers, attending the right industry networking event is vital to generating new business. m&i create business events with carefully vetted attendees. Attendees also get to personally curate their schedule by picking who they want to meet and removing anyone they may have previously met at another event. 
                    </p>

                    <br /><br />
                   
                   
                    <p>Want to get involved in the m&i fun across the pond? Register your interest in m&i Americas, El Paso 2023.</p>
                    
                    <br></br><br/>
                    <a href='/signup'>
                                                    <span className='text-white btn btn-primary'>
                                                    I'm in
                                                    </span>
                                                </a><br/><br/><br/>

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

export default ErinTierney
