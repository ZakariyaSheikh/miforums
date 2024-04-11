import React from "react"
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss"
import Banner from "../../assets/images/blog/thehaguehealthcare/imagecover.jpg"
import Picture1 from "../../assets/images/blog/thehaguehealthcare/image1.jpg"
import Picture2 from "../../assets/images/blog/thehaguehealthcare/image2.jpg"
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import RelatedArticles from "../../components/layout/RelatedArticles";

const TheHagueHealthcare = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>m&i Healthcare, The Hague 2023: what to expect | m&i</title>
        <meta
          name="description"
          content="m&i Healthcare, The Hague 2023: what to expect"
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
                <h1 className="heading">m&i Healthcare, The Hague 2023: <span className="coral-underlined">what to expect  {" "}
                   </span></h1>
                  <p className="blog-date">Published on Feb 6, 2023</p><br/><br/>
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
                    <p>The only event of its kind, m&i Healthcare provides healthcare event professionals with two days of immersive networking (quite literally) like no other. We spoke to Andrew Winterburn, Director of 3sixty Event Consulting and curator of the healthcare educational programme, about what guests can expect from the 2023 edition.  <br/><br/>

Whether you’re new to m&i Healthcare or you’ve been before and you’re eager to find out about <a href="https://www.mi-forums.com/mi-healthcare-2023">m&i Healthcare, The Hague 2023</a>, keep reading to get a taste of what to expect.  

</p><br/><br/>

                    <h3>What is m&i Healthcare </h3>
                    <br />
                  
                    <p>m&i Healthcare brings healthcare-compliant venues together with large healthcare companies, specialist healthcare agencies from across Europe and the UK, medical societies, and healthcare professionals.</p>  
                    <div className="quote"> <quote>'‘over the past 5 years m&i Healthcare Forums have brought together the great and the good from across the industry’. This, he continues, includes big names like ‘Lundbeck, Bayer, Janssen and GSK.’ </quote></div>

                    <p>Unlike our other Forums, our Healthcare Forum spans just two days, and its programme features education sessions and keynote speeches alongside the standard 1-2-1 meetings. Delegates can expect to forge lasting business connections while also engaging in a knowledge exchange, developing their understanding of the current issues affecting the healthcare events ecosystem.</p>
                    <br></br>
                    <img src={Picture1} alt={" "} ></img><br/><br/>
                    <p>(m&i Healthcare, Berlin 2022)</p>
                    <br /><br />
                    
                   
                    <h3>Who you’ll meet </h3>
                    <br />
                    <p>Suppliers can expect to meet a range of buyers from medical event agencies, corporates, MedComms, PCO’s and medical associations, and compliant venues suitable for hosting complex healthcare events. <br /><br />

Andrew explains, ‘over the past 5 years m&i Healthcare Forums have brought together the great and the good from across the industry’. This, he continues, includes big names like ‘Lundbeck, Bayer, Janssen and GSK.’ 
                    </p>
<br/>
                    <p>This year suppliers will connect with high-quality buyers from: <br/><br/>

<li>SWM Partners  </li>

<li>Activate Event Management  </li>

<li>Agiito  </li>

<li>BCD M&E  </li>

<li>EGG Events  </li>

<li>American Express  </li>

<li>LDR </li> 

<li>MCI  </li>

<li>Go Up Events  </li>

<li>Triumph Group </li><br/>

And buyers can expect to meet global suppliers such as: <br/><br/>

<li>Pullman Paris  </li>

<li>FIBES Seville  </li>

<li>Hilton Paris Charles de Gaulle </li>

<li>Jaarbeurs  </li>

<li>Madrid Marriott Auditorium </li>

<li>Conference Hotel De Ruwenberg </li>

<li>Messe Congress Graz  </li>

<li>Novotel Amsterdam Schiphol Airport </li> 

<li>Thon Hotels  </li>

<li>Postillion Hotels </li></p>
                 
<br/><br/>
                    <h3>What to expect in 2023 </h3>
                    <br />
                    <p>In 2023 we’re working to align our Healthcare Forum programme with our other Forums. Simply put, this means more networking opportunities for delegates and more time to gain a greater understanding of The Hague as a MICE destination. As per usual venue accreditation and specialist delegate training will be provided via our event partner, HealthcareVenues.  </p>

                    <div className="quote"><quote>'The education themes have been built around "The Future of Healthcare Events", bringing together experts to share best practices with a focus on the trends and challenges that are facing the industry.’ </quote></div>
                    

                    <p><strong>Education sessions </strong><br/><br/>

Andrew Winterburn, our educational programme curator, told us what to expect: 'The education themes have been built around "The Future of Healthcare Events", bringing together experts to share best practices with a focus on the trends and challenges that are facing the industry.’ <br/><br/>

He continues: 'This year we'll be bringing together healthcare experts to discuss "healthcare events: creating educational experiences with a real impact", we'll focus on topics around optimising meeting design, extending the reach of educational content, how corporates are looking at ESG strategy and how meeting management strategies are changing.’ <br/><br/>

Additionally, we can look forward to a new development in the programme: ‘2023 will also see the inaugural " future talent summit" involving a group of talented individuals making an impact in their business across all areas of the healthcare ecosystem.'  <br/><br/>

And The Hague’s own healthcare system is proof of its high standards, being ranked the number one healthcare system for the last five years by the Euro Health Consumer Index. </p>
<br></br>
                    <img src={Picture2} alt={" "} ></img><br/><br/>
                    <p>(m&i Healthcare, Berlin 2022)</p>
                    <br /><br />

                    <h3>m&i Healthcare, FAM trip 2023 </h3>
                    <br/>
                    <p>Buyers will also have the option to further immerse themselves in The Hague’s culture on our hosted 8-10 June.  <br /><br />
 
 Discover The Hague’s wider MICE potential outside of the healthcare sector. Your packed programme will include food tours, gallery visits and museum tours, see its history mentioned above in action and enjoy its eco-activities such as bike tours, surfing and a boat trip.  </p><br /><br />

 <h3>Why you should attend </h3>
 <br />
                  
                    <p>Since its inception in 2018, our Healthcare Forum continues to leave its mark on the industry and our delegates. So, instead of telling you why you should attend, we'll let them do it for us. <br /><br />

<span style={{fontStyle:'italic'}}>‘The connections made with healthcare-ready suppliers were key to our successful event experience. I also felt the educational content was thought-provoking and tackled essential questions for our industry.’</span> ConferenceDirect, LLC, Damian Pisanelli <br /><br />

<span style={{fontStyle:'italic'}}>‘Ashfield Event Experiences have partnered with the m&i Healthcare Forums for the past five years. Our senior management have contributed to the workshop content and have been panellists on the supplier question time. Members of our team have also attended as delegates, benefitting from the mix of 1-2-1 meetings and educational sessions providing them with lots to take back and implement with their clients.’</span> Ashfield Event Experiences, Andrew Moore <br /><br />

Join healthcare-compliant venues and healthcare event professionals in The Hague, the MICE hotspot at the heart of the Netherlands.   </p>
                    
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

export default TheHagueHealthcare
