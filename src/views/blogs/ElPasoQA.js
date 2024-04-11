import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Cover from "../../assets/images/blog/elpasoqa/cover.png"
import Food from "../../assets/images/blog/elpasoqa/food.jpeg"
import Franklin from "../../assets/images/blog/elpasoqa/franklinmountain.jpeg"
import HotelPaso from "../../assets/images/blog/elpasoqa/hotelpasodelnorte.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const ElPasoQA = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Margaritas, guac and the Franklin Mountains: find out what our event managers loved in El Paso | m&i</title>
        <meta
          name="description"
          content="Margaritas, guac and the Franklin Mountains: find out what our event managers loved in El Paso"
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
              <div className="blog-banner" style={{ backgroundImage: `url(${Cover})`, backgroundSize:"contain", marginLeft:"5%" }}> </div>
                <h1 className="heading">Margaritas, guac and the Franklin Mountains: find out what our event managers loved in El Paso {" "}
                   </h1>
                  <p className="blog-date">Published on July 25, 2023</p><br/><br/>
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

                    <p>Upon arriving back to the UK our event managers Marta Bomprezzi and Loïc Connier couldn't wait to tell us about all the amazing things they got to experience on their site visit to El Paso. Of course, we couldn’t wait to pick their brains about what they got up to and what our m&i-ers can look forward to at <a target="_blank" href="https://www.mi-forums.com/mi-americas-2023">m&i Americas, El Paso 2023.</a>  
</p>
<br/><br/>

              <h3>1. Tell us about some of the exciting experiences you had on your site visit to El Paso?  </h3>
                    <br />
                  
                    <p>Marta: For such a small city there are thousands of things to do! From wandering around the city and admiring the murals made by local artists, to the Texan/Mexican cooking classes, hiking through the Franklin Mountain, visiting one of the vineyards nearby and best of all, trying a Margarita – did you know that El Paso is the home of the Margarita? </p>  
  <br></br>
              <img src={Franklin} alt={" "} ></img><br/><br/>

  <br></br>
              <h3>2. Which parts of El Paso’s culture really stood out for you?  </h3>
                    <br />
                  
                    <p> Marta: It’s a melting pot of cultures. It has a strong Mexican influence intertwined with its Texan roots. The people are very open, welcoming, and hospitable, and there is a strong sense of community – everyone knows each other and supports each other. They are 100% American, but they will never forget their background and they embrace that part of the culture and bring it to their day-to-day life. </p>  

                    <br></br>

                    <p>Loïc: The food and hospitality, it’s the perfect mix of US and Mexico. El Paso has managed to create its own culture and food, different from the traditional TexMex widely spread in Texas. The people were so welcoming which is just the environment you want for a great meeting and events destination.   </p>
  <br></br>

              <h3>3. El Paso is the home of the margarita…did you try one and if so, was it the best you’ve ever had?   </h3>
                    <br />
                  
                    <p>Marta: We tried loads!! But the first one I had will stay in our heart forever. It was a beautiful spicy margarita just a 2-minute walk from our host hotels, at the Anson 11! The key is to choose a good quality Tequila so that you won’t have headache the day after. </p>  

                    <br></br>

                    <p>Loïc: My favourite was the jalapeno margarita with cilantro as a garnish! </p>
  <br></br>

              <h3>4. What was your food highlight of the trip?  </h3>
                    <br />
                  
                    <p>Marta: The food is fantastic and is a great combination of Mexican and Texan flavours! The Guac! Everyone loves a good plate of nachos with guacamole. Then there were the spicy beans, pork ribs with homemade BBQ sauce, quesadillas...I could go on. </p>  

                    <br></br>

                    <p>Loïc: The arrachera and mushroom tacos that we made ourselves at the <a target="_blank" href="https://www.txculinary.com/">Texas Culinary Institute</a> during our cooking class and the ribs with homemade BBQ sauce at our host hotel, <a target="_blank" href="https://www.marriott.com/en-us/hotels/elpak-hotel-paso-del-norte-autograph-collection/overview/">Hotel Paso Del Norte, Autograph Collection.</a></p>
  <br></br>

              <img src={Food} alt={" "} ></img><br/><br/>

              <br></br>

              <h3>5. How has El Paso made the destination more welcoming for MICE visitors in the past 10 years? </h3>
              <br />

              <p>Loïc: New hotels are opening – doubling the downtown room inventory. Downtown is home to over 1,200 new state-of-the-art rooms within walking distance of the El Paso Convention Center, our meeting venue. In the last two years, the beautiful convention center has received renovations which were completed in early 2022. The center underwent over $3,135,000 in restorations and improvements which included new banquet chairs, lobby furniture, rubbish bins, carpet, wall finishes, paint, and a new digital marquee. Its improvements have transformed the center as it now offers state-of-the-art meeting rooms and high-quality services to make your next meeting, convention, or banquet the perfect event. </p>

              <br></br>

              <p>Marta: Back in 2021, El Paso was actually ranked as the 3rd safest large city in the US because of its low crime rate and its low risk of severe weather. </p>

              <br></br>
              
              <img src={HotelPaso} alt={" "} ></img><br/><br/>

              <br></br>

              <h3>6. Should guests be super excited for m&i Americas in October? </h3>
              <br />

              <p>Marta: Definitely! I was pleasantly surprised by what the destination has to offer. Also, it’s in a great location for a little trip to Juarez (Mexico) in case you didn’t have enough Margaritas! </p>

              <br></br>

              <p>Loïc: Yes! El Paso is an underrated MICE destination which has so much to offer to the professionals in the industry. The people, the culture and the MICE facilities all make for successful and exciting events. </p>

              <br></br>
              <br></br>

              <p>Want to experience El Paso for yourself and make quality connections with top MICE professionals? </p>

                    <br></br><br/> 
        <a href='/signup'>
                                     <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                          register your interest 
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

    export default ElPasoQA