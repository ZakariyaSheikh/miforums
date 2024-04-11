import React, {  useState } from 'react';
import { Helmet } from 'react-helmet';
import '../assets/scss/style.scss';
import MultiSelect from  'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'
import Shape from '../assets/images/signup_image.png';
import BuyerPopup from '../components/elements/BuyerPopup';
import SubscribeModal from '../components/elements/SubscribeModal';
import PlayBtn from '../assets/images/peopleofmi/play_button.png'
import useModal from '../components/elements/useModal';
import Hero from '../assets/images/campaign/Hero.png';
import Play from '../assets/images/campaign/Play.svg';
import Video from '../assets/images/campaign/video.mp4';
import PlayPurpleButton from '../assets/images/campaign/purple_playicon.svg';
// import tickBox from '../assets/images/completed_icon.svg';

const CampaignRegister = () => {
    const { isShowing, toggle } = useModal();
    const [videoLoading, setVideoLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
    // const scrollToRef = (ref) => window.scrollTo(0, 500, ref.current.offsetTop);
    // const executeScroll = () => scrollToRef(myRef);

    const [value, setvalue] = useState('')

  const  handleOnchange  =  val  => {
    setvalue(val)
  }

  const handleScroll = () => {
    const sectionElement = document.getElementById('scrollto');
    // If you want to scroll to a specific section by its ID

  // const percentageToScroll = 0.5;
  // const offset = window.innerHeight * percentageToScroll;
  // If you want to scroll a certain percentage down the page

  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
};

  const  options  = [

   
    { label: 'm&i Private Sorrento 24', value: 'm&i Private Sorrento 24' },
    { label: 'm&i Healthcare London 24', value:  'm&i Healthcare London 24'  },
    { label: 'm&i Americas Miami 24', value: 'm&i Miami 24' },
    { label: 'm&i Lisbon 24', value: 'm&i Lisbon 24' },
    { label: 'm&i Leaders Costa Mujeres 24', value: 'm&i Leaders Costa Mujeres 24' },
    { label: 'm&i Luxe Bodrum 24', value:  'm&i Luxe Bodrum 24'  },
    { label: 'm&i Sardinia 24', value:  'm&i Sardinia 24'  },
    
  ]

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>sign up | m&i</title>
                <meta
                    name='description'
                    content='Looking to meet MICE buyers and suppliers? Sign up to one of our digital and in-person global networking events today!'

                />
                <meta property="og:url" content={"https://www.mi-forums.com/images/ographs/OG_image_Sign_Up.png"} />
    <meta property="og:image" content={"https://www.mi-forums.com/images/ographs/OG_image_Sign_Up.png"} />
            </Helmet>
            <div className='site-wrap'>

<div className="campaign-page">
        <div className="row">
                        <div class="column leftSide" >
                        <div className='col-lg-12 ml-rg-auto py-5'>
                                <h2 className='signup-header'>
m&i means
                                    <span
                                        style={{
                                            color: '#fff',
                                            textDecoration: 'underline',
                                            textUnderlinePosition: 'under'
                                        }}
                                    >
                                        {' '}
                                        business
                                    </span>
                                </h2>
                                <p>Find out what it could mean for you in 2024.</p>
                                <div
      className="scroll-arrow"
      onClick={handleScroll}
    >
     <svg width="50" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" fill="#E0C7B2">
<g><path d="M500,10"/><path d="M500,990L108,598h784L500,990z"/></g>
</svg>
    </div>
                            </div>

            </div>
                <div className="column rightSide"  style={{ backgroundImage: `url(${Hero})` }}>
                            <div className='col-lg-12 ml-rg-auto py-5'>

                            <h1 className='signup-header'>
2024

<a onClick={openModal} >
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
               
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                     
                    </div>
                  ) : null}
                  
                            <iframe
                               title="People of MI"
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src={Video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
                  ) : null}
                  <div className="playButton">
                   Watch video<img src={PlayPurpleButton}></img>

                  </div>
                 </a>

                                </h1>

                               
                            




                            </div>
                </div>
        </div>
<div className="signup-section camel-bg">
        <div className='col-lg-12 ml-rg-auto py-5' id="scrollto">
                            <div className='container' >
                                <h1>Register today to join us in 2024</h1>
                                <h3 className='signup-caption'>
                                Simply fill in the form below and a member of our team will be in touch with more details.
                                    </h3>
                                    </div>


                                <form
                            action='https://www2.wwideevents.com/l/852593/2022-06-14/fdqph'
                            method='post'
                            id='sectionForm'>
                            <div className='form'>
                                <div className='container' >
                                    <div className='row no-gutters'>
                                                <div className='col-lg-12 mr-lg-auto py-5'>

                                                   

      <MultiSelect placeholder={"Choose your events"}
        onChange={handleOnchange}
                                                        options={options}
                                                        className="events"
                                                        name="event-names"
      />



                                                    <br/>
                                                    <div
                                                className='form-controls'
                                                style={{ fontSize: '22px' }}
                                            >
                                              <div className='radioclassName'>

<label>
<input
type="radio"
className="buyer"
name='Opportunity-Type'
value='Buyer'
required
/>
I'm a Buyer</label></div>

                                                <div className='radioclassName'>

                                                <label>
                                        <input
                                          type="radio"
                                          className="supplier"
                                          name='Opportunity-Type'
                                          value='Supplier'
                                          required
                                        />
                                      I'm a supplier</label>


                                                    
                                                </div>
                                                    </div><br/>
                                                   
                                            <div className='col signupform'>
                                            <p>
    <label for="id1">First Name</label>
    <input
                                                    id='FirstName'
                                                    maxlength='80'
                                                    name='FirstName'
                                                    size='20'
                                                    type='text'
                                                   
                                                    required
                                                        />
  </p>
  <p>
    <label for="id2">Last Name</label>
    <input
                                                    id='LastName'
                                                    maxlength='80'
                                                    name='LastName'
                                                    size='20'
                                                    type='text'
                                                   
                                                    required
                                                />
                                                <br />
  </p>

  <p>
    <label for="id2">Company</label>
    <input
                                                    id='Company'
                                                    maxlength='80'
                                                    name='Company'
                                                    size='20'
                                                    type='text'
                                                    
                                                    required
                                                />
                                                <br />
  </p>

  <p>
    <label for="id2">Country</label>
    <select
                                                    id='Country'
                                                    name='Country'
                                                    required
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

<p>   <label for="id2">Email</label> <input
                                                    id='email'
                                                    maxlength='80'
                                                    name='email'
                                                    size='20'
                                                    type='text'
                                                   
                                                    required
                                                        /></p>


                                               
                                              
                                                       

                                               

                                            </div>

                                            <div className='col signupform'>
                                               
                                                <br />
                                              <br /><br />
                                                         <textarea
                                                            name='event-names'
                                                            id='fill'
                                                                                class='fill'
                                                                                rows='12'
                                                            cols='50'
                                                            value={value}
                                                            style={{
                                                                                    display:
                                                                                        'none',
                                                                                }}


                                                                            ></textarea>
                                                                            <textarea
                                                                                name='Buyer-Territories'
                                                                                class='fillTerritories'
                                                                                rows='12'
                                                                                cols='50'
                                                                                style={{
                                                                                    display:
                                                                                        'none',
                                                                                }}
                                                                            ></textarea>

                                                                            <input
                                                                                type='hidden'
                                                                                value='MICE'
                                                                                name='Team-Type'
                                                                            />
                                                                            <input
                                                                                type='hidden'
                                                                                value=''
                                                                                name='Lead-Source'
                                                                                id='Lead-Source'
                                                                            />
                                                         <input
                                                                                type='submit'
                                                                                name='submitForm'
                                                                                value='Register'
                                                                                id='getValue'
                                                                            />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </form>

                                


                                <BuyerPopup
                                                isShowing={isShowing}
                                                hide={toggle}
                                            />


                            </div>
                            </div>

                </div>






            </div>


        </>
    );
};

export default CampaignRegister;
