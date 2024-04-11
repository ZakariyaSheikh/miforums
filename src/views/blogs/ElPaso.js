import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/elpaso/heroimage_nightlife.png"
import Picture1 from "../../assets/images/blog/elpaso/elpaso_conventioncenter.png"
import Picture2 from "../../assets/images/blog/elpaso/elpaso_natatorium.png"
import Picture3 from "../../assets/images/blog/elpaso/elpaso_scenery2.png"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const ElPaso = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>El Paso, Texas: the unlikely new destination for your meetings and events | m&i</title>
        <meta
          name="description"
          content="El Paso, Texas: the unlikely new destination for your meetings and events   "
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
                <h1 className="heading">El Paso, Texas: the unlikely new destination for your <span className="coral-underlined"> meetings and events {" "}
                   </span></h1>
                  <p className="blog-date">Published on Jan 16, 2023</p><br/><br/>
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
                    <p>In recent years El Paso has been infused with a new lease of life; a myriad of new hotels, a bustling downtown and a MICE-ready infrastructure have made it a business hotspot. Not to mention its eclectic food scene and cultural tapestry which draws tourists for business and leisure alike. We spoke to Rene Wong, Director of Marketing and Communications for Visit El Paso, to get the lowdown on the area. </p><br/><br/>

                    <h3>1. An impressive MICE infrastructure  </h3>
                    <br />
                    <p>At the forefront of the area’s MICE regeneration is the meeting venue for <a href="https://www.mi-forums.com/mi-americas-2023">m&i Americas, El Paso 2023</a>, the newly-renovated El Paso Convention Center. As Rene tells us, the upgrades and renovations have ‘transformed the convention center into a modern meeting space surpassing the industry’s standards and expectations.’ This upgrade has been fundamental in the surge of high-level events it’s attracted. Last year it hosted The Annual Conference & Design Expo and Connect Texas, and this year it’s playing host to The Bridal Quince Expo and El Paso Comic Con among numerous other events. </p>
                    <br /><br />

                    <img src={Picture1} alt={" "} ></img>
                    <br /><br />
                    
                    <p>Hotels in the downtown area have doubled since its <a href="https://visitelpaso.com/meetinep">regeneration</a> which means two things: you’ll have way more to choose from and you’ll get competitive rates. When it comes to getting around, you can choose between taxi apps (Uber and Lyft), tour operators or its restored tram service, the El Paso Streetcar. And for jetting in and out, El Paso International Airport, the border’s newest and largest passenger terminal, offers nonstop flights to 15 major destinations from Las Vegas to LA.  </p>
                    <br/><br/>

                    <h3>2. A range of culinary delights </h3>
                    <br />
                    <p>First and foremost, Texas is the birthplace of Tex-Mex, a hybrid of Texan and Mexican cuisine now famed around the world. Expect dishes like loaded nachos, chili con carne and fajitas – all with a healthy serving of cheese, guac and salsa. But that’s not all, the revival of the downtown means diners will be spoilt for choice in this foodie's paradise. You can enjoy Italian or Lebanese; a steakhouse or a bistro. Your options are endless! 
                    </p>
                    <div className="quote"> <quote>'Hotels in the downtown area have doubled since its <a href="https://visitelpaso.com/meetinep">regeneration'</a></quote></div>

                   
                    <br />

                      <h3>3. It’s the home of the margarita! </h3>
                    <br />
                    <p>You heard us right, El Paso is the birthplace of the sour, refreshing (and sometimes a little spicy) margarita. Legend has it that in 1942 famed bartender Pancho Morales mistakenly made the first-ever <a href="https://visitelpaso.com/trip_ideas/el-paso-s-margarita-trail">margarita</a> after a woman asked for a magnolia. Since then, the drink has become a favourite around the world. Of course, a trip to El Paso wouldn’t be complete without taking a trip down the margarita trail, a tour of the best margarita spots in town. Want to know a local’s favourite? Rene recommends Los Bandido’s de Carlos & Mickey’s and L&J Café for ‘good food, great drinks and a good time’. </p>
                    <br></br>

                    <h3>4. It’s one of the safest cities in the US</h3>
                    <br />
                    <p>In 2021, El Paso was ranked as the 3rd safest large city in the US owing to its low rates of crime and its low risk of severe weather. The study conducted by <a href="https://advisorsmith.com/data/safest-cities-in-america/">AdvisorSmith</a> used data provided by the Federal Bureau of Investigation’s Uniform Crime Reporting Data Set. This data set contains crime reports including every type of crime possible from cities and counties across the US.   </p>
                    <br></br>

                      <h3>5. You’ll get a sunshine guarantee </h3>
                   
                   
                    <p>On a lighter note (quite literally), you’ll find the destination to be a winner for its weather. Boasting a whole 302 days of sunshine each year, El Paso has been nicknamed ‘Sun City’. This lends itself perfectly to hosting indoor and outdoor events for corporate groups and for incentive trips. Just remember to bring sunscreen!  </p>
                    <div className="quote"><quote>‘Boasting a whole 302 days of sunshine each year, El Paso has been nicknamed ‘Sun City’'</quote></div>
                    <br></br>


                    <h3>6. It’s wild west country  </h3>
                    <br />
                    <p>El Paso’s name comes from ‘El Paso del Norte’ – Spanish for ‘the passageway to the north’ – because of its location on the border of Mexico. This led to a rich history of trade between the two countries and in turn made it prime cowboy territory. Today in El Paso you can opt to have bespoke cowboy boots made at one of the area’s numerous <a href="https://visitelpaso.com/explore/things_to_do/shopping/categories/boots/places">cowboy boot makers</a>, or visit the only jail Billy the Kid broke into.  </p>
                    <br></br>

                    <h3>7. The top-of-the-range sports facilities   </h3>
                    <br/>
                    <p>Want to offer your clients or employees some healthy downtime while you’re away in El Paso? You’re in luck, the area has a range of <a href="https://visitelpaso.com/sports">state-of-the-art sports facilities</a> from an Olympic-sized swimming pool to 2 new outdoor sports complexes measuring at 42 acres and 57 acres. And as Rene reminds us, ‘the average temperature is between 70-85 degrees, making it the perfect destination for year-round sports’. </p><br /><br />

                    <img src={Picture2} alt={" "}></img>
                    <br /><br />

                    <h3>8. A truly unique landscape</h3>
                    <br />
                    <p>Its location at the western tip of Texas and the southernmost tip of the Rocky Mountains makes for <a href="https://visitelpaso.com/blog/7-amazing-ways-to-enjoy-the-outdoors-in-el-paso">bountiful hiking trails</a>. Choose between numerous trails measuring 100 miles in total. Head to the Aztec caves to witness a piece of living history, witness panoramic views at the peak of the Franklin Mountains or discover ancient native American pictographs at Hueco Tanks State Park. <br/>
                    <div className="quote"><quote>‘Choose between numerous trails measuring 100 miles in total’ </quote></div>While exploring you’ll see the typical desert plants – Texas is home to more than 100 species of cacti – but you’ll also see colourful flora and fauna along the way, adding to the area’s unique beauty. </p>
                    
                    <br></br>

                    <img src={Picture3} alt={" "}></img>
                    <br /><br />

                    
                    <p>Have we whetted your appetite for El Paso, Texas? Join global suppliers and buyers from the Americas from 1-4 October for an immersive networking experience like no other. Register your interest for m&i Americas, El Paso 2023 today.</p>
                    <br></br>

                    <a href='/signup'>
                                                    <span className='text-white btn btn-primary' style={{transform:'translateX(180%)'}}>
                                                       register your interest
                                                    </span>
                                                </a>

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

export default ElPaso
