import { useMediaQuery } from "react-responsive";
import Supplier from '../assets/images/referral/supplier.png'
import Buyer from '../assets/images/referral/buyer.png'
import React, { useState, createRef, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";

const Referral = () => {
  
  const [currentStep, setCurrentStep] = useState(1);

  const divContent = [
   
  ];

  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  const handleNext = () => {
    setCurrentDivIndex((prevIndex) => (prevIndex + 1) % divContent.length);
  };

  const handlePrevious = () => {
    setCurrentDivIndex((prevIndex) =>
      prevIndex === 0 ? divContent.length - 1 : prevIndex - 1
    );
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('sectionForm').submit();
  };

  
   
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>referral | m&i</title>
        <meta
          name="description"
          content=""
        />
     
      </Helmet>
      <div className="site-wrap referralPage camel-bg">

      <div className="site-half newHeader camel-bg" >
            <div className="container">
              <div className="row no-gutters center-content">
             
              <div className="col-lg-10 mr-lg-auto py-5" style={{paddingRight:'10%'}}>

              <h2></h2>
               
                <h1>Refer an industry friend to get rewarded!</h1>
                <p>
                We’re all about sharing the love and growing the m&i tribe, which is why we've introduced the new m&i referral scheme. We want to thank you for the amazing work you do in advocating for m&i and helping us bring the best MICE professionals to our events.
                
                <br/><br/>Our new referral scheme rewards you for helping us reach the best in the business.
                </p>


                <h2>Sounds good? We thought so.<br/>
                <span className="coral-underlined">Read on to see how it works.</span></h2>
                
          
              </div>

              </div>
            </div>
            <div className="anchorScroll" id="numbers"></div>
          </div>

          {/* <div className="site-half block scroll" >
        <div class="m-scroll">
  <div class="m-scroll__title">
    <div>
    <h1>Show me the money Show me the money Show me the money</h1>
    <h1>Show me the money Show me the money Show me the money</h1>
    </div>
  </div>
</div>

</div> */}

<div className="site-half block suppliers" >
          <div className="container">
          
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-7 ml-rg-auto afternoons">
                <h1 className="site-section-heading font-secondary ">
                Are you a <span className="underlined">supplier?</span>
                </h1>
                <p style={{ paddingRight: "180px" }}  >


                
                
              
                
               
                Refer a supplier that is new to m&i and qualified to attend. Once they’re confirmed to one of our events, <span className="coral"> you’ll both receive £500 in credit to use with us.  </span>
         
         <br/><br/> Or refer a hosted buyer that is new to m&i and qualified to attend. Once they’re confirmed to one of our events,  <span className="coral">you’ll receive £100 in credit to use with us. </span>
                 
                  </p>
              </div>

              <div className="col-lg-5 ml-rg-auto ">
              <div className="img-bg-1">
            <img alt={" "} src={Supplier} />
          </div>
              </div>
            </div>
         
          </div>
        
          </div>

<div className="site-half block buyers" >
          
            <div className="container">
          
              <div className="row no-gutters align-items-stretch buyers">
              <div className="col-lg-5 ml-lg-auto">

              <div className="img-bg-1">
              {" "}
              <img alt={" "} src={Buyer}  />
            </div>

                </div>
                <div className="col-lg-7 ml-rg-auto buyers py-5">
                <h1 className="site-section-heading font-secondary ">
                Are you a <span className="underlined">buyer?</span>
                </h1>
                <p style={{ paddingRight: "20px" }}  >

              
             
                Refer a hosted buyer that is new to m&i and qualified to attend. Once they’re confirmed to one of our events, you’ll receive a  <span className="coral"> £100 voucher.</span>
         
         <br/><br/> Or, refer a supplier that is new to m&i and qualified to attend. Once they’re confirmed to one of our events, you’ll receive a <span className="coral">£500 voucher. </span>
                
                  </p>
              </div>
              </div>
            </div>
            <div className="anchorScroll" id="meeting"></div>
            <div style={{textAlignLast:"center", marginTop:"8rem"}} className="termsbtn">
            <a href="/referral-terms-conditions">
                      <span className=" btn btn-secondary raven" style={{width:'220px'}}>
                      See the T&Cs →
                      </span>
                    </a></div>
          </div>
               
               
        <div
          className="footer-slider mint-bg"
          style={{ height: "auto", padding: "40px" }}
        >
          <div className="container">
          <div className="row no-gutters align-items-stretch">
                <div className="col-lg-12 ml-rg-auto py-5 laptop">
                  <div className="cta-content">
                  <div
                    className="footer-section-heading "
                 
                  >
                       
                   <h1>Refer your best MICE contact to us below.</h1>
                  
                  </div>

                  <div>
                
                  <form
        action='https://www2.wwideevents.com/l/852593/2023-08-14/ng345'
        method='post'
        id='sectionForm'
        encType='application/x-www-form-urlencoded'
      >
        
       <input type="radio" className="pagination1" name="div-switch" id="div1" defaultChecked />
        
       <input type="radio" className="pagination2" name="div-switch" id="div2" />
<label className="pagination" htmlFor="div2">Next</label>


      <div className="div-content" id="content1">
      <div className='form'>
           <div className='container' >
               <div className='row no-gutters'>
                           <div className='col-lg-12 mr-lg-auto py-5'>
                              <div
                           className='form-controls'
                           style={{ fontSize: '22px' }}  >
                         <h3>I am a</h3>
                         <div className='radioclassName'>
 <label>
 <input
 type="radio"
 className="buyer"
 name='referrerOpportunityType'
 value='Buyer'
    />
 Buyer</label></div>
                           <div className='radioclassName'>
                           <label>
                   <input
                     type="radio"
                     className="supplier"
                     name='referrerOpportunityType'
                     value='Supplier'
                    
                     
                   />
                 Supplier</label>
                           </div>
                               </div><br/> 
                              
                       <div className='col signupform'>
                       <p>
 <label for="id1">Your first name</label>
 <input
 type="text"
 name="referrerFirstName"
 
 />
                                   
 </p>
 <p>
 <label for="id2">Your last name</label>
 <input
 type="text"
 name="referrerLastName"
 
 />
 
                           <br />
 </p>
 
 <p>
 <label for="id2">Your company name</label>
 <input
  id='Company'
  maxLength='80' // Change 'maxlength' to 'maxLength'
  name='referrerCompany'
  size='20'
  type='text'
/>
                           <br />
 </p>
 
 <p>   <label for="id2">Your email</label> <input
                               id='email'
                               maxlength='80'
                               name='referrerEmail'
                               size='20'
                               type='text'
                                   /></p>
 
 <p>
     <label for="id2">Your country</label>
     <select
                                                     id='Country'
                                                     name='referrerCountry'
                                                     
                                                 >
                                                     <option value=''>
                                                         
                                                     </option>
                                                     <option value='Afghanistan'>
                                                         Afghanistan
                                                     </option>
                                                     <option value='Albania'>
                                                         Albania
                                                     </option>
                                                     <option value='Algeria'>
                                                         Algeria
                                                     </option>
                                                     <option value='American Samoa'>
                                                         American Samoa
                                                     </option>
                                                     <option value='Andorra'>
                                                         Andorra
                                                     </option>
                                                     <option value='Angola'>
                                                         Angola
                                                     </option>
                                                     <option value='Anguilla'>
                                                         Anguilla
                                                     </option>
                                                     <option value='Antigua and Barbuda'>
                                                         Antigua and Barbuda
                                                     </option>
                                                     <option value='Argentina'>
                                                         Argentina
                                                     </option>
                                                     <option value='Armenia'>
                                                         Armenia
                                                     </option>
                                                     <option value='Aruba'>
                                                         Aruba
                                                     </option>
                                                     <option value='Australia'>
                                                         Australia
                                                     </option>
                                                     <option value='Austria'>
                                                         Austria
                                                     </option>
                                                     <option value='Azerbaijan'>
                                                         Azerbaijan
                                                     </option>
                                                     <option value='Bahamas'>
                                                         Bahamas
                                                     </option>
                                                     <option value='Bahrain'>
                                                         Bahrain
                                                     </option>
                                                     <option value='Bangladesh'>
                                                         Bangladesh
                                                     </option>
                                                     <option value='Barbados'>
                                                         Barbados
                                                     </option>
                                                     <option value='Belarus'>
                                                         Belarus
                                                     </option>
                                                     <option value='Belgium'>
                                                         Belgium
                                                     </option>
                                                     <option value='Belize'>
                                                         Belize
                                                     </option>
                                                     <option value='Benin'>
                                                         Benin
                                                     </option>
                                                     <option value='Bermuda'>
                                                         Bermuda
                                                     </option>
                                                     <option value='Bhutan'>
                                                         Bhutan
                                                     </option>
                                                     <option value='Bolivia'>
                                                         Bolivia
                                                     </option>
                                                     <option value='Bonaire'>
                                                         Bonaire
                                                     </option>
                                                     <option value='Bosnia and Herzegovina'>
                                                         Bosnia and Herzegovina
                                                     </option>
                                                     <option value='Botswana'>
                                                         Botswana
                                                     </option>
                                                     <option value='Brazil'>
                                                         Brazil
                                                     </option>
                                                     <option value='British Indian Ocean Territory'>
                                                         British Indian Ocean
                                                         Territory
                                                     </option>
                                                     <option value='Brunei'>
                                                         Brunei
                                                     </option>
                                                     <option value='Bulgaria'>
                                                         Bulgaria
                                                     </option>
                                                     <option value='Burkina Faso'>
                                                         Burkina Faso
                                                     </option>
                                                     <option value='Burundi'>
                                                         Burundi
                                                     </option>
                                                     <option value='Cambodia'>
                                                         Cambodia
                                                     </option>
                                                     <option value='Cameroon'>
                                                         Cameroon
                                                     </option>
                                                     <option value='Canada'>
                                                         Canada
                                                     </option>
                                                     <option value='Cape Verde'>
                                                         Cape Verde
                                                     </option>
                                                     <option value='Caribbean Netherlands'>
                                                         Caribbean Netherlands
                                                     </option>
                                                     <option value='Cayman Islands'>
                                                         Cayman Islands
                                                     </option>
                                                     <option value='Central African Republic'>
                                                         Central African Republic
                                                     </option>
                                                     <option value='Chad'>
                                                         Chad
                                                     </option>
                                                     <option value='Chile'>
                                                         Chile
                                                     </option>
                                                     <option value='China'>
                                                         China
                                                     </option>
                                                     <option value='Christmas Island'>
                                                         Christmas Island
                                                     </option>
                                                     <option value='Cocos (Keeling) Islands'>
                                                         Cocos (Keeling) Islands
                                                     </option>
                                                     <option value='Colombia'>
                                                         Colombia
                                                     </option>
                                                     <option value='Comoros'>
                                                         Comoros
                                                     </option>
                                                     <option value='Congo'>
                                                         Congo
                                                     </option>
                                                     <option value='Congo'>
                                                         Congo
                                                     </option>
                                                     <option value='Cook Islands'>
                                                         Cook Islands
                                                     </option>
                                                     <option value='Costa Rica'>
                                                         Costa Rica
                                                     </option>
                                                     <option value="Cote d'Ivoire">
                                                         Cote d'Ivoire
                                                     </option>
                                                     <option value='Croatia'>
                                                         Croatia
                                                     </option>
                                                     <option value='Cuba'>
                                                         Cuba
                                                     </option>
                                                     <option value='Curacao'>
                                                         Curacao
                                                     </option>
                                                     <option value='Cyprus'>
                                                         Cyprus
                                                     </option>
                                                     <option value='Czech Republic'>
                                                         Czech Republic
                                                     </option>
                                                     <option value='Denmark'>
                                                         Denmark
                                                     </option>
                                                     <option value='Djibouti'>
                                                         Djibouti
                                                     </option>
                                                     <option value='Dominica'>
                                                         Dominica
                                                     </option>
                                                     <option value='Dominican Republic'>
                                                         Dominican Republic
                                                     </option>
                                                     <option value='Ecuador'>
                                                         Ecuador
                                                     </option>
                                                     <option value='Egypt'>
                                                         Egypt
                                                     </option>
                                                     <option value='El Salvador'>
                                                         El Salvador
                                                     </option>
                                                     <option value='Equatorial Guinea'>
                                                         Equatorial Guinea
                                                     </option>
                                                     <option value='Eritrea'>
                                                         Eritrea
                                                     </option>
                                                     <option value='Estonia'>
                                                         Estonia
                                                     </option>
                                                     <option value='Eswatini'>
                                                         Eswatini
                                                     </option>
                                                     <option value='Ethiopia'>
                                                         Ethiopia
                                                     </option>
                                                     <option value='Falkland Islands (Islas Malvinas)'>
                                                         Falkland Islands (Islas
                                                         Malvinas)
                                                     </option>
                                                     <option value='Faroe Islands'>
                                                         Faroe Islands
                                                     </option>
                                                     <option value='Fiji'>
                                                         Fiji
                                                     </option>
                                                     <option value='Finland'>
                                                         Finland
                                                     </option>
                                                     <option value='France'>
                                                         France
                                                     </option>
                                                     <option value='French Guiana'>
                                                         French Guiana
                                                     </option>
                                                     <option value='French Polynesia'>
                                                         French Polynesia
                                                     </option>
                                                     <option value='French Southern Territories'>
                                                         French Southern
                                                         Territories
                                                     </option>
                                                     <option value='Gabon'>
                                                         Gabon
                                                     </option>
                                                     <option value='Gambia'>
                                                         Gambia
                                                     </option>
                                                     <option value='Georgia'>
                                                         Georgia
                                                     </option>
                                                     <option value='Germany'>
                                                         Germany
                                                     </option>
                                                     <option value='Ghana'>
                                                         Ghana
                                                     </option>
                                                     <option value='Gibraltar'>
                                                         Gibraltar
                                                     </option>
                                                     <option value='Greece'>
                                                         Greece
                                                     </option>
                                                     <option value='Greenland'>
                                                         Greenland
                                                     </option>
                                                     <option value='Grenada'>
                                                         Grenada
                                                     </option>
                                                     <option value='Guadeloupe'>
                                                         Guadeloupe
                                                     </option>
                                                     <option value='Guam'>
                                                         Guam
                                                     </option>
                                                     <option value='Guatemala'>
                                                         Guatemala
                                                     </option>
                                                     <option value='Guernsey'>
                                                         Guernsey
                                                     </option>
                                                     <option value='Guinea'>
                                                         Guinea
                                                     </option>
                                                     <option value='Guinea-Bissau'>
                                                         Guinea-Bissau
                                                     </option>
                                                     <option value='Guyana'>
                                                         Guyana
                                                     </option>
                                                     <option value='Haiti'>
                                                         Haiti
                                                     </option>
                                                     <option value='Heard Island and McDonald Islands'>
                                                         Heard Island and
                                                         McDonald Islands
                                                     </option>
                                                     <option value='Honduras'>
                                                         Honduras
                                                     </option>
                                                     <option value='Hong Kong'>
                                                         Hong Kong
                                                     </option>
                                                     <option value='Hungary'>
                                                         Hungary
                                                     </option>
                                                     <option value='Iceland'>
                                                         Iceland
                                                     </option>
                                                     <option value='India'>
                                                         India
                                                     </option>
                                                     <option value='Indonesia'>
                                                         Indonesia
                                                     </option>
                                                     <option value='Iran'>
                                                         Iran
                                                     </option>
                                                     <option value='Iraq'>
                                                         Iraq
                                                     </option>
                                                     <option value='Ireland'>
                                                         Ireland
                                                     </option>
                                                     <option value='Israel'>
                                                         Israel
                                                     </option>
                                                     <option value='Italy'>
                                                         Italy
                                                     </option>
                                                     <option value='Jamaica'>
                                                         Jamaica
                                                     </option>
                                                     <option value='Japan'>
                                                         Japan
                                                     </option>
                                                     <option value='Jersey'>
                                                         Jersey
                                                     </option>
                                                     <option value='Jordan'>
                                                         Jordan
                                                     </option>
                                                     <option value='Kazakhstan'>
                                                         Kazakhstan
                                                     </option>
                                                     <option value='Kenya'>
                                                         Kenya
                                                     </option>
                                                     <option value='Kiribati'>
                                                         Kiribati
                                                     </option>
                                                     <option value='Kosovo'>
                                                         Kosovo
                                                     </option>
                                                     <option value='Kuwait'>
                                                         Kuwait
                                                     </option>
                                                     <option value='Kyrgyzstan'>
                                                         Kyrgyzstan
                                                     </option>
                                                     <option value='Laos'>
                                                         Laos
                                                     </option>
                                                     <option value='Latvia'>
                                                         Latvia
                                                     </option>
                                                     <option value='Lebanon'>
                                                         Lebanon
                                                     </option>
                                                     <option value='Lesotho'>
                                                         Lesotho
                                                     </option>
                                                     <option value='Liberia'>
                                                         Liberia
                                                     </option>
                                                     <option value='Libya'>
                                                         Libya
                                                     </option>
                                                     <option value='Liechtenstein'>
                                                         Liechtenstein
                                                     </option>
                                                     <option value='Lithuania'>
                                                         Lithuania
                                                     </option>
                                                     <option value='Luxembourg'>
                                                         Luxembourg
                                                     </option>
                                                     <option value='Macau'>
                                                         Macau
                                                     </option>
                                                     <option value='Madagascar'>
                                                         Madagascar
                                                     </option>
                                                     <option value='Malawi'>
                                                         Malawi
                                                     </option>
                                                     <option value='Malaysia'>
                                                         Malaysia
                                                     </option>
                                                     <option value='Maldives'>
                                                         Maldives
                                                     </option>
                                                     <option value='Mali'>
                                                         Mali
                                                     </option>
                                                     <option value='Malta'>
                                                         Malta
                                                     </option>
                                                     <option value='Marshall Islands'>
                                                         Marshall Islands
                                                     </option>
                                                     <option value='Martinique'>
                                                         Martinique
                                                     </option>
                                                     <option value='Mauritania'>
                                                         Mauritania
                                                     </option>
                                                     <option value='Mauritius'>
                                                         Mauritius
                                                     </option>
                                                     <option value='Mayotte'>
                                                         Mayotte
                                                     </option>
                                                     <option value='Mexico'>
                                                         Mexico
                                                     </option>
                                                     <option value='Micronesia'>
                                                         Micronesia
                                                     </option>
                                                     <option value='Moldova'>
                                                         Moldova
                                                     </option>
                                                     <option value='Monaco'>
                                                         Monaco
                                                     </option>
                                                     <option value='Mongolia'>
                                                         Mongolia
                                                     </option>
                                                     <option value='Montenegro'>
                                                         Montenegro
                                                     </option>
                                                     <option value='Montserrat'>
                                                         Montserrat
                                                     </option>
                                                     <option value='Morocco'>
                                                         Morocco
                                                     </option>
                                                     <option value='Mozambique'>
                                                         Mozambique
                                                     </option>
                                                     <option value='Myanmar (Burma)'>
                                                         Myanmar (Burma)
                                                     </option>
                                                     <option value='Namibia'>
                                                         Namibia
                                                     </option>
                                                     <option value='Nauru'>
                                                         Nauru
                                                     </option>
                                                     <option value='Nepal'>
                                                         Nepal
                                                     </option>
                                                     <option value='Netherlands'>
                                                         Netherlands
                                                     </option>
                                                     <option value='New Caledonia'>
                                                         New Caledonia
                                                     </option>
                                                     <option value='New Zealand'>
                                                         New Zealand
                                                     </option>
                                                     <option value='Nicaragua'>
                                                         Nicaragua
                                                     </option>
                                                     <option value='Niger'>
                                                         Niger
                                                     </option>
                                                     <option value='Nigeria'>
                                                         Nigeria
                                                     </option>
                                                     <option value='Norfolk Island'>
                                                         Norfolk Island
                                                     </option>
                                                     <option value='North Korea'>
                                                         North Korea
                                                     </option>
                                                     <option value='North Macedonia'>
                                                         North Macedonia
                                                     </option>
                                                     <option value='Northern Mariana Islands'>
                                                         Northern Mariana Islands
                                                     </option>
                                                     <option value='Norway'>
                                                         Norway
                                                     </option>
                                                     <option value='Oman'>
                                                         Oman
                                                     </option>
                                                     <option value='Pakistan'>
                                                         Pakistan
                                                     </option>
                                                     <option value='Palau'>
                                                         Palau
                                                     </option>
                                                     <option value='Palestine'>
                                                         Palestine
                                                     </option>
                                                     <option value='Panama'>
                                                         Panama
                                                     </option>
                                                     <option value='Papua New Guinea'>
                                                         Papua New Guinea
                                                     </option>
                                                     <option value='Paraguay'>
                                                         Paraguay
                                                     </option>
                                                     <option value='Peru'>
                                                         Peru
                                                     </option>
                                                     <option value='Philippines'>
                                                         Philippines
                                                     </option>
                                                     <option value='Pitcairn'>
                                                         Pitcairn
                                                     </option>
                                                     <option value='Poland'>
                                                         Poland
                                                     </option>
                                                     <option value='Portugal'>
                                                         Portugal
                                                     </option>
                                                     <option value='Puerto Rico'>
                                                         Puerto Rico
                                                     </option>
                                                     <option value='Qatar'>
                                                         Qatar
                                                     </option>
                                                     <option value='Reunion'>
                                                         Reunion
                                                     </option>
                                                     <option value='Romania'>
                                                         Romania
                                                     </option>
                                                     <option value='Russia'>
                                                         Russia
                                                     </option>
                                                     <option value='Rwanda'>
                                                         Rwanda
                                                     </option>
                                                     <option value='Saint Barthelemy'>
                                                         Saint Barthelemy
                                                     </option>
                                                     <option value='Saint Helena'>
                                                         Saint Helena
                                                     </option>
                                                     <option value='Saint Kitts and Nevis'>
                                                         Saint Kitts and Nevis
                                                     </option>
                                                     <option value='Saint Lucia'>
                                                         Saint Lucia
                                                     </option>
                                                     <option value='Saint Maarten (Dutch part)'>
                                                         Saint Maarten (Dutch
                                                         part)
                                                     </option>
                                                     <option value='Saint Martin (French part)'>
                                                         Saint Martin (French
                                                         part)
                                                     </option>
                                                     <option value='Saint Pierre and Miquelon'>
                                                         Saint Pierre and
                                                         Miquelon
                                                     </option>
                                                     <option value='Saint Vincent and the Grenadines'>
                                                         Saint Vincent and the
                                                         Grenadines
                                                     </option>
                                                     <option value='Samoa'>
                                                         Samoa
                                                     </option>
                                                     <option value='San Marino'>
                                                         San Marino
                                                     </option>
                                                     <option value='Sao Tome and Principe'>
                                                         Sao Tome and Principe
                                                     </option>
                                                     <option value='Saudi Arabia'>
                                                         Saudi Arabia
                                                     </option>
                                                     <option value='Senegal'>
                                                         Senegal
                                                     </option>
                                                     <option value='Serbia'>
                                                         Serbia
                                                     </option>
                                                     <option value='Seychelles'>
                                                         Seychelles
                                                     </option>
                                                     <option value='Sierra Leone'>
                                                         Sierra Leone
                                                     </option>
                                                     <option value='Singapore'>
                                                         Singapore
                                                     </option>
                                                     <option value='Slovakia'>
                                                         Slovakia
                                                     </option>
                                                     <option value='Slovenia'>
                                                         Slovenia
                                                     </option>
                                                     <option value='Solomon Islands'>
                                                         Solomon Islands
                                                     </option>
                                                     <option value='Somalia'>
                                                         Somalia
                                                     </option>
                                                     <option value='South Africa'>
                                                         South Africa
                                                     </option>
                                                     <option value='South Georgia and the South Sandwich Islands'>
                                                         South Georgia and the
                                                         South Sandwich Islands
                                                     </option>
                                                     <option value='South Korea'>
                                                         South Korea
                                                     </option>
                                                     <option value='South Sudan'>
                                                         South Sudan
                                                     </option>
                                                     <option value='Spain'>
                                                         Spain
                                                     </option>
                                                     <option value='Sri Lanka'>
                                                         Sri Lanka
                                                     </option>
                                                     <option value='Sudan'>
                                                         Sudan
                                                     </option>
                                                     <option value='Suriname'>
                                                         Suriname
                                                     </option>
                                                     <option value='Swaziland'>
                                                         Swaziland
                                                     </option>
                                                     <option value='Sweden'>
                                                         Sweden
                                                     </option>
                                                     <option value='Switzerland'>
                                                         Switzerland
                                                     </option>
                                                     <option value='Syria'>
                                                         Syria
                                                     </option>
                                                     <option value='Taiwan'>
                                                         Taiwan
                                                     </option>
                                                     <option value='Tajikistan'>
                                                         Tajikistan
                                                     </option>
                                                     <option value='Tanzania'>
                                                         Tanzania
                                                     </option>
                                                     <option value='Thailand'>
                                                         Thailand
                                                     </option>
                                                     <option value='Timor-Leste'>
                                                         Timor-Leste
                                                     </option>
                                                     <option value='Togo'>
                                                         Togo
                                                     </option>
                                                     <option value='Tokelau'>
                                                         Tokelau
                                                     </option>
                                                     <option value='Tonga'>
                                                         Tonga
                                                     </option>
                                                     <option value='Trinidad and Tobago'>
                                                         Trinidad and Tobago
                                                     </option>
                                                     <option value='Tunisia'>
                                                         Tunisia
                                                     </option>
                                                     <option value='Turkey'>
                                                         Turkey
                                                     </option>
                                                     <option value='Turkmenistan'>
                                                         Turkmenistan
                                                     </option>
                                                     <option value='Turks and Caicos Islands'>
                                                         Turks and Caicos Islands
                                                     </option>
                                                     <option value='Tuvalu'>
                                                         Tuvalu
                                                     </option>
                                                     <option value='Uganda'>
                                                         Uganda
                                                     </option>
                                                     <option value='Ukraine'>
                                                         Ukraine
                                                     </option>
                                                     <option value='United Arab Emirates'>
                                                         United Arab Emirates
                                                     </option>
                                                     <option value='United Kingdom'>
                                                         United Kingdom
                                                     </option>
                                                     <option value='United States'>
                                                         United States
                                                     </option>
                                                     <option value='United States Minor Outlying Islands'>
                                                         United States Minor
                                                         Outlying Islands
                                                     </option>
                                                     <option value='Uruguay'>
                                                         Uruguay
                                                     </option>
                                                     <option value='Uzbekistan'>
                                                         Uzbekistan
                                                     </option>
                                                     <option value='Vanuatu'>
                                                         Vanuatu
                                                     </option>
                                                     <option value='Vatican City State'>
                                                         Vatican City State
                                                     </option>
                                                     <option value='Venezuela'>
                                                         Venezuela
                                                     </option>
                                                     <option value='Vietnam'>
                                                         Vietnam
                                                     </option>
                                                     <option value='Virgin Islands'>
                                                         Virgin Islands
                                                     </option>
                                                     <option value='Virgin Islands'>
                                                         Virgin Islands
                                                     </option>
                                                     <option value='Wallis and Futuna'>
                                                         Wallis and Futuna
                                                     </option>
                                                     <option value='Western Sahara'>
                                                         Western Sahara
                                                     </option>
                                                     <option value='Yemen'>
                                                         Yemen
                                                     </option>
                                                     <option value='Zambia'>
                                                         Zambia
                                                     </option>
                                                     <option value='Zimbabwe'>
                                                         Zimbabwe
                                                     </option>
                                                 </select>
                                                 <br />
   </p> 
 
                       </div>
 
                     
                   </div>
               </div>
           </div>
         
                                                          
 
 <h4>Page 1 of 2</h4>
 
 </div>
      
      </div>
      <div className="div-content" id="content2">
      <div className='form'>
           <div className='container' >
               <div className='row no-gutters'>
                           <div className='col-lg-12 mr-lg-auto py-5'>

                               <div
                           className='form-controls'
                           style={{ fontSize: '22px' }}
                       >
                         <h3>I am referring a</h3>
                         <div className='radioclassName'>

<label>
<input
type="radio"
className="buyer"
name='opportunityType'
value='Buyer'

/>
Buyer</label></div>

                           <div className='radioclassName'>

                           <label>
                           <input
  type="radio"
  className="supplier"
  name="opportunityType"
  value="Supplier"
/>
                 Supplier</label>

                           </div>
                               </div><br/>
                              
                       <div className='col signupform'>
                       <p>
<label for="id1">Referral first name</label>
<input
                               id='firstName'
                               name='firstName'
                               type='text'
                               
                                   />
</p>
<p>
<label for="id2">Referral last name</label>
<input
                               id='lastName'
                               name='lastName'
                               type='text'
                              
                               
                           />
                           <br />
</p>

<p>
<label for="id2">Referral company name</label>
<input
                               id='company'
                               name='company'
                               type='text'
                               
                           />
                           <br />
</p>

<p>   <label for="id2">Referral email</label> <input
                               id='email'
                               name='email'
                               type='text'
                               
                                   /></p>

<p>
<label for="id2">Referral country</label>
<select
                               id='Country'
                               name='Country'
                           >
                               <option value=''>
                                   
                               </option>
                               <option value='Afghanistan'>
                                   Afghanistan
                               </option>
                               <option value='Albania'>
                                   Albania
                               </option>
                               <option value='Algeria'>
                                   Algeria
                               </option>
                               <option value='American Samoa'>
                                   American Samoa
                               </option>
                               <option value='Andorra'>
                                   Andorra
                               </option>
                               <option value='Angola'>
                                   Angola
                               </option>
                               <option value='Anguilla'>
                                   Anguilla
                               </option>
                               <option value='Antigua and Barbuda'>
                                   Antigua and Barbuda
                               </option>
                               <option value='Argentina'>
                                   Argentina
                               </option>
                               <option value='Armenia'>
                                   Armenia
                               </option>
                               <option value='Aruba'>
                                   Aruba
                               </option>
                               <option value='Australia'>
                                   Australia
                               </option>
                               <option value='Austria'>
                                   Austria
                               </option>
                               <option value='Azerbaijan'>
                                   Azerbaijan
                               </option>
                               <option value='Bahamas'>
                                   Bahamas
                               </option>
                               <option value='Bahrain'>
                                   Bahrain
                               </option>
                               <option value='Bangladesh'>
                                   Bangladesh
                               </option>
                               <option value='Barbados'>
                                   Barbados
                               </option>
                               <option value='Belarus'>
                                   Belarus
                               </option>
                               <option value='Belgium'>
                                   Belgium
                               </option>
                               <option value='Belize'>
                                   Belize
                               </option>
                               <option value='Benin'>
                                   Benin
                               </option>
                               <option value='Bermuda'>
                                   Bermuda
                               </option>
                               <option value='Bhutan'>
                                   Bhutan
                               </option>
                               <option value='Bolivia'>
                                   Bolivia
                               </option>
                               <option value='Bonaire'>
                                   Bonaire
                               </option>
                               <option value='Bosnia and Herzegovina'>
                                   Bosnia and Herzegovina
                               </option>
                               <option value='Botswana'>
                                   Botswana
                               </option>
                               <option value='Brazil'>
                                   Brazil
                               </option>
                               <option value='British Indian Ocean Territory'>
                                   British Indian Ocean
                                   Territory
                               </option>
                               <option value='Brunei'>
                                   Brunei
                               </option>
                               <option value='Bulgaria'>
                                   Bulgaria
                               </option>
                               <option value='Burkina Faso'>
                                   Burkina Faso
                               </option>
                               <option value='Burundi'>
                                   Burundi
                               </option>
                               <option value='Cambodia'>
                                   Cambodia
                               </option>
                               <option value='Cameroon'>
                                   Cameroon
                               </option>
                               <option value='Canada'>
                                   Canada
                               </option>
                               <option value='Cape Verde'>
                                   Cape Verde
                               </option>
                               <option value='Caribbean Netherlands'>
                                   Caribbean Netherlands
                               </option>
                               <option value='Cayman Islands'>
                                   Cayman Islands
                               </option>
                               <option value='Central African Republic'>
                                   Central African Republic
                               </option>
                               <option value='Chad'>
                                   Chad
                               </option>
                               <option value='Chile'>
                                   Chile
                               </option>
                               <option value='China'>
                                   China
                               </option>
                               <option value='Christmas Island'>
                                   Christmas Island
                               </option>
                               <option value='Cocos (Keeling) Islands'>
                                   Cocos (Keeling) Islands
                               </option>
                               <option value='Colombia'>
                                   Colombia
                               </option>
                               <option value='Comoros'>
                                   Comoros
                               </option>
                               <option value='Congo'>
                                   Congo
                               </option>
                               <option value='Congo'>
                                   Congo
                               </option>
                               <option value='Cook Islands'>
                                   Cook Islands
                               </option>
                               <option value='Costa Rica'>
                                   Costa Rica
                               </option>
                               <option value="Cote d'Ivoire">
                                   Cote d'Ivoire
                               </option>
                               <option value='Croatia'>
                                   Croatia
                               </option>
                               <option value='Cuba'>
                                   Cuba
                               </option>
                               <option value='Curacao'>
                                   Curacao
                               </option>
                               <option value='Cyprus'>
                                   Cyprus
                               </option>
                               <option value='Czech Republic'>
                                   Czech Republic
                               </option>
                               <option value='Denmark'>
                                   Denmark
                               </option>
                               <option value='Djibouti'>
                                   Djibouti
                               </option>
                               <option value='Dominica'>
                                   Dominica
                               </option>
                               <option value='Dominican Republic'>
                                   Dominican Republic
                               </option>
                               <option value='Ecuador'>
                                   Ecuador
                               </option>
                               <option value='Egypt'>
                                   Egypt
                               </option>
                               <option value='El Salvador'>
                                   El Salvador
                               </option>
                               <option value='Equatorial Guinea'>
                                   Equatorial Guinea
                               </option>
                               <option value='Eritrea'>
                                   Eritrea
                               </option>
                               <option value='Estonia'>
                                   Estonia
                               </option>
                               <option value='Eswatini'>
                                   Eswatini
                               </option>
                               <option value='Ethiopia'>
                                   Ethiopia
                               </option>
                               <option value='Falkland Islands (Islas Malvinas)'>
                                   Falkland Islands (Islas
                                   Malvinas)
                               </option>
                               <option value='Faroe Islands'>
                                   Faroe Islands
                               </option>
                               <option value='Fiji'>
                                   Fiji
                               </option>
                               <option value='Finland'>
                                   Finland
                               </option>
                               <option value='France'>
                                   France
                               </option>
                               <option value='French Guiana'>
                                   French Guiana
                               </option>
                               <option value='French Polynesia'>
                                   French Polynesia
                               </option>
                               <option value='French Southern Territories'>
                                   French Southern
                                   Territories
                               </option>
                               <option value='Gabon'>
                                   Gabon
                               </option>
                               <option value='Gambia'>
                                   Gambia
                               </option>
                               <option value='Georgia'>
                                   Georgia
                               </option>
                               <option value='Germany'>
                                   Germany
                               </option>
                               <option value='Ghana'>
                                   Ghana
                               </option>
                               <option value='Gibraltar'>
                                   Gibraltar
                               </option>
                               <option value='Greece'>
                                   Greece
                               </option>
                               <option value='Greenland'>
                                   Greenland
                               </option>
                               <option value='Grenada'>
                                   Grenada
                               </option>
                               <option value='Guadeloupe'>
                                   Guadeloupe
                               </option>
                               <option value='Guam'>
                                   Guam
                               </option>
                               <option value='Guatemala'>
                                   Guatemala
                               </option>
                               <option value='Guernsey'>
                                   Guernsey
                               </option>
                               <option value='Guinea'>
                                   Guinea
                               </option>
                               <option value='Guinea-Bissau'>
                                   Guinea-Bissau
                               </option>
                               <option value='Guyana'>
                                   Guyana
                               </option>
                               <option value='Haiti'>
                                   Haiti
                               </option>
                               <option value='Heard Island and McDonald Islands'>
                                   Heard Island and
                                   McDonald Islands
                               </option>
                               <option value='Honduras'>
                                   Honduras
                               </option>
                               <option value='Hong Kong'>
                                   Hong Kong
                               </option>
                               <option value='Hungary'>
                                   Hungary
                               </option>
                               <option value='Iceland'>
                                   Iceland
                               </option>
                               <option value='India'>
                                   India
                               </option>
                               <option value='Indonesia'>
                                   Indonesia
                               </option>
                               <option value='Iran'>
                                   Iran
                               </option>
                               <option value='Iraq'>
                                   Iraq
                               </option>
                               <option value='Ireland'>
                                   Ireland
                               </option>
                               <option value='Israel'>
                                   Israel
                               </option>
                               <option value='Italy'>
                                   Italy
                               </option>
                               <option value='Jamaica'>
                                   Jamaica
                               </option>
                               <option value='Japan'>
                                   Japan
                               </option>
                               <option value='Jersey'>
                                   Jersey
                               </option>
                               <option value='Jordan'>
                                   Jordan
                               </option>
                               <option value='Kazakhstan'>
                                   Kazakhstan
                               </option>
                               <option value='Kenya'>
                                   Kenya
                               </option>
                               <option value='Kiribati'>
                                   Kiribati
                               </option>
                               <option value='Kosovo'>
                                   Kosovo
                               </option>
                               <option value='Kuwait'>
                                   Kuwait
                               </option>
                               <option value='Kyrgyzstan'>
                                   Kyrgyzstan
                               </option>
                               <option value='Laos'>
                                   Laos
                               </option>
                               <option value='Latvia'>
                                   Latvia
                               </option>
                               <option value='Lebanon'>
                                   Lebanon
                               </option>
                               <option value='Lesotho'>
                                   Lesotho
                               </option>
                               <option value='Liberia'>
                                   Liberia
                               </option>
                               <option value='Libya'>
                                   Libya
                               </option>
                               <option value='Liechtenstein'>
                                   Liechtenstein
                               </option>
                               <option value='Lithuania'>
                                   Lithuania
                               </option>
                               <option value='Luxembourg'>
                                   Luxembourg
                               </option>
                               <option value='Macau'>
                                   Macau
                               </option>
                               <option value='Madagascar'>
                                   Madagascar
                               </option>
                               <option value='Malawi'>
                                   Malawi
                               </option>
                               <option value='Malaysia'>
                                   Malaysia
                               </option>
                               <option value='Maldives'>
                                   Maldives
                               </option>
                               <option value='Mali'>
                                   Mali
                               </option>
                               <option value='Malta'>
                                   Malta
                               </option>
                               <option value='Marshall Islands'>
                                   Marshall Islands
                               </option>
                               <option value='Martinique'>
                                   Martinique
                               </option>
                               <option value='Mauritania'>
                                   Mauritania
                               </option>
                               <option value='Mauritius'>
                                   Mauritius
                               </option>
                               <option value='Mayotte'>
                                   Mayotte
                               </option>
                               <option value='Mexico'>
                                   Mexico
                               </option>
                               <option value='Micronesia'>
                                   Micronesia
                               </option>
                               <option value='Moldova'>
                                   Moldova
                               </option>
                               <option value='Monaco'>
                                   Monaco
                               </option>
                               <option value='Mongolia'>
                                   Mongolia
                               </option>
                               <option value='Montenegro'>
                                   Montenegro
                               </option>
                               <option value='Montserrat'>
                                   Montserrat
                               </option>
                               <option value='Morocco'>
                                   Morocco
                               </option>
                               <option value='Mozambique'>
                                   Mozambique
                               </option>
                               <option value='Myanmar (Burma)'>
                                   Myanmar (Burma)
                               </option>
                               <option value='Namibia'>
                                   Namibia
                               </option>
                               <option value='Nauru'>
                                   Nauru
                               </option>
                               <option value='Nepal'>
                                   Nepal
                               </option>
                               <option value='Netherlands'>
                                   Netherlands
                               </option>
                               <option value='New Caledonia'>
                                   New Caledonia
                               </option>
                               <option value='New Zealand'>
                                   New Zealand
                               </option>
                               <option value='Nicaragua'>
                                   Nicaragua
                               </option>
                               <option value='Niger'>
                                   Niger
                               </option>
                               <option value='Nigeria'>
                                   Nigeria
                               </option>
                               <option value='Norfolk Island'>
                                   Norfolk Island
                               </option>
                               <option value='North Korea'>
                                   North Korea
                               </option>
                               <option value='North Macedonia'>
                                   North Macedonia
                               </option>
                               <option value='Northern Mariana Islands'>
                                   Northern Mariana Islands
                               </option>
                               <option value='Norway'>
                                   Norway
                               </option>
                               <option value='Oman'>
                                   Oman
                               </option>
                               <option value='Pakistan'>
                                   Pakistan
                               </option>
                               <option value='Palau'>
                                   Palau
                               </option>
                               <option value='Palestine'>
                                   Palestine
                               </option>
                               <option value='Panama'>
                                   Panama
                               </option>
                               <option value='Papua New Guinea'>
                                   Papua New Guinea
                               </option>
                               <option value='Paraguay'>
                                   Paraguay
                               </option>
                               <option value='Peru'>
                                   Peru
                               </option>
                               <option value='Philippines'>
                                   Philippines
                               </option>
                               <option value='Pitcairn'>
                                   Pitcairn
                               </option>
                               <option value='Poland'>
                                   Poland
                               </option>
                               <option value='Portugal'>
                                   Portugal
                               </option>
                               <option value='Puerto Rico'>
                                   Puerto Rico
                               </option>
                               <option value='Qatar'>
                                   Qatar
                               </option>
                               <option value='Reunion'>
                                   Reunion
                               </option>
                               <option value='Romania'>
                                   Romania
                               </option>
                               <option value='Russia'>
                                   Russia
                               </option>
                               <option value='Rwanda'>
                                   Rwanda
                               </option>
                               <option value='Saint Barthelemy'>
                                   Saint Barthelemy
                               </option>
                               <option value='Saint Helena'>
                                   Saint Helena
                               </option>
                               <option value='Saint Kitts and Nevis'>
                                   Saint Kitts and Nevis
                               </option>
                               <option value='Saint Lucia'>
                                   Saint Lucia
                               </option>
                               <option value='Saint Maarten (Dutch part)'>
                                   Saint Maarten (Dutch
                                   part)
                               </option>
                               <option value='Saint Martin (French part)'>
                                   Saint Martin (French
                                   part)
                               </option>
                               <option value='Saint Pierre and Miquelon'>
                                   Saint Pierre and
                                   Miquelon
                               </option>
                               <option value='Saint Vincent and the Grenadines'>
                                   Saint Vincent and the
                                   Grenadines
                               </option>
                               <option value='Samoa'>
                                   Samoa
                               </option>
                               <option value='San Marino'>
                                   San Marino
                               </option>
                               <option value='Sao Tome and Principe'>
                                   Sao Tome and Principe
                               </option>
                               <option value='Saudi Arabia'>
                                   Saudi Arabia
                               </option>
                               <option value='Senegal'>
                                   Senegal
                               </option>
                               <option value='Serbia'>
                                   Serbia
                               </option>
                               <option value='Seychelles'>
                                   Seychelles
                               </option>
                               <option value='Sierra Leone'>
                                   Sierra Leone
                               </option>
                               <option value='Singapore'>
                                   Singapore
                               </option>
                               <option value='Slovakia'>
                                   Slovakia
                               </option>
                               <option value='Slovenia'>
                                   Slovenia
                               </option>
                               <option value='Solomon Islands'>
                                   Solomon Islands
                               </option>
                               <option value='Somalia'>
                                   Somalia
                               </option>
                               <option value='South Africa'>
                                   South Africa
                               </option>
                               <option value='South Georgia and the South Sandwich Islands'>
                                   South Georgia and the
                                   South Sandwich Islands
                               </option>
                               <option value='South Korea'>
                                   South Korea
                               </option>
                               <option value='South Sudan'>
                                   South Sudan
                               </option>
                               <option value='Spain'>
                                   Spain
                               </option>
                               <option value='Sri Lanka'>
                                   Sri Lanka
                               </option>
                               <option value='Sudan'>
                                   Sudan
                               </option>
                               <option value='Suriname'>
                                   Suriname
                               </option>
                               <option value='Swaziland'>
                                   Swaziland
                               </option>
                               <option value='Sweden'>
                                   Sweden
                               </option>
                               <option value='Switzerland'>
                                   Switzerland
                               </option>
                               <option value='Syria'>
                                   Syria
                               </option>
                               <option value='Taiwan'>
                                   Taiwan
                               </option>
                               <option value='Tajikistan'>
                                   Tajikistan
                               </option>
                               <option value='Tanzania'>
                                   Tanzania
                               </option>
                               <option value='Thailand'>
                                   Thailand
                               </option>
                               <option value='Timor-Leste'>
                                   Timor-Leste
                               </option>
                               <option value='Togo'>
                                   Togo
                               </option>
                               <option value='Tokelau'>
                                   Tokelau
                               </option>
                               <option value='Tonga'>
                                   Tonga
                               </option>
                               <option value='Trinidad and Tobago'>
                                   Trinidad and Tobago
                               </option>
                               <option value='Tunisia'>
                                   Tunisia
                               </option>
                               <option value='Turkey'>
                                   Turkey
                               </option>
                               <option value='Turkmenistan'>
                                   Turkmenistan
                               </option>
                               <option value='Turks and Caicos Islands'>
                                   Turks and Caicos Islands
                               </option>
                               <option value='Tuvalu'>
                                   Tuvalu
                               </option>
                               <option value='Uganda'>
                                   Uganda
                               </option>
                               <option value='Ukraine'>
                                   Ukraine
                               </option>
                               <option value='United Arab Emirates'>
                                   United Arab Emirates
                               </option>
                               <option value='United Kingdom'>
                                   United Kingdom
                               </option>
                               <option value='United States'>
                                   United States
                               </option>
                               <option value='United States Minor Outlying Islands'>
                                   United States Minor
                                   Outlying Islands
                               </option>
                               <option value='Uruguay'>
                                   Uruguay
                               </option>
                               <option value='Uzbekistan'>
                                   Uzbekistan
                               </option>
                               <option value='Vanuatu'>
                                   Vanuatu
                               </option>
                               <option value='Vatican City State'>
                                   Vatican City State
                               </option>
                               <option value='Venezuela'>
                                   Venezuela
                               </option>
                               <option value='Vietnam'>
                                   Vietnam
                               </option>
                               <option value='Virgin Islands'>
                                   Virgin Islands
                               </option>
                               <option value='Virgin Islands'>
                                   Virgin Islands
                               </option>
                               <option value='Wallis and Futuna'>
                                   Wallis and Futuna
                               </option>
                               <option value='Western Sahara'>
                                   Western Sahara
                               </option>
                               <option value='Yemen'>
                                   Yemen
                               </option>
                               <option value='Zambia'>
                                   Zambia
                               </option>
                               <option value='Zimbabwe'>
                                   Zimbabwe
                               </option>
                           </select>
                           <br />
</p>
     

                       </div>

                     
                   </div>
               </div>
           </div>
       </div> 

       <input
                                                                                type='hidden'
                                                                                value='Yes'
                                                                                name='Referred2024'
                                                                            />

       <input
                                                                                type='hidden'
                                                                                name='Team-Type'
                                                                                id="Team-Type"
                                                                                value='MICE'
                                                                                
                                                                            />

      <input                                                                   type="hidden" 
                                                                               name="Lead-Source" 
                                                                               id="Lead-Source" 
                                                                               value="Referral"
                                                                               
                                                                            />
     
        <span className=" btn btn-secondary submit" onClick={handleSubmit}>Submit</span> 
      </div>
    
   
                 
      </form>


    
      </div>
                    {/* <a href="/roi-consultation">
                      <span className=" btn btn-secondary raven">
                   Book ROI consultation
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Referral;

