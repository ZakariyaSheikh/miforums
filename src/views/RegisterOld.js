import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import '../assets/scss/style.scss';
import Monitor from '../assets/images/monitor.svg';
import inPerson from '../assets/images/inperson.svg';
// import tickBox from '../assets/images/completed_icon.svg';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

const Register = () => {
    // const scrollToRef = (ref) => window.scrollTo(0, 500, ref.current.offsetTop);
    // const executeScroll = () => scrollToRef(myRef);
    const myRef = useRef(null);

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
                <div
                    className='contact-hero-slider'
                    style={{ marginBottom: '10em' }}
                >
                    <div className='container'>
                        <div className='row no-gutters align-items-stretch'>
                            <div className='col-lg-12 ml-rg-auto py-5'>
                                <h2 className='contact-hero'>
                                    join the industry's <br />
                                    <span
                                        style={{
                                            color: '#FF5959',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        {' '}
                                        most unmissable events
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='first-step-section'>
                    <div>
                        <div className='site-half block'>
                            <div
                                className='container'
                                style={{ backgroundColor: '#fff' }}
                            >
                                <div className='row no-gutters center-content'>
                                    <div className='col-lg-8 mr-lg-auto py-5'>
                                        <h3 className='contact-caption'>
                                            <div class='numberCircle'>1</div>{' '}
                                            Fill out your details below to register your interest for an m&i event:
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='site-half block no-padding'>
                        <form
                            action='https://www2.wwideevents.com/l/852593/2020-09-17/24f7z'
                            method='post'
                            id='sectionForm'
                            style={{ marginTop: '-5rem', marginBottom: '0' }}
                        >
                            <div className='firstStep'>
                                <div
                                    className='container'
                                    style={{
                                        backgroundColor: '#fff',
                                        marginTop: '2rem',
                                    }}
                                >
                                    <div className='row no-gutters center-content'>
                                        <div className='col-lg-8 mr-lg-auto py-5'>
                                            <div
                                                className='form-controls'
                                                style={{ fontSize: '22px' }}
                                            >
                                                <div className='radioclassName'>
                                                    <span className='checkmark'></span>
                                                    <input
                                                        type='radio'
                                                        name='Opportunity-Type'
                                                        value='Buyer'
                                                        required
                                                    />
                                                    i'm a buyer
                                                </div>

                                                <div className='radioclassName'>
                                                    <input
                                                        type='radio'
                                                        name='Opportunity-Type'
                                                        value='Supplier'
                                                        required
                                                    />
                                                    i'm a supplier
                                                </div>
                                            </div>
                                            <div className='col signupform'>
                                                <input
                                                    id='FirstName'
                                                    maxlength='80'
                                                    name='FirstName'
                                                    size='20'
                                                    type='text'
                                                    placeholder='first name*'
                                                    required
                                                />
                                                <br />
                                                <input
                                                    id='LastName'
                                                    maxlength='80'
                                                    name='LastName'
                                                    size='20'
                                                    type='text'
                                                    placeholder='last name*'
                                                    required
                                                />
                                                <br />
                                                <input
                                                    id='Company'
                                                    maxlength='80'
                                                    name='Company'
                                                    size='20'
                                                    type='text'
                                                    placeholder='company name*'
                                                    required
                                                />
                                                <br />
                                                <input
                                                    id='JobTitle'
                                                    maxlength='80'
                                                    name='JobTitle'
                                                    size='20'
                                                    type='text'
                                                    placeholder='job title*'
                                                    required
                                                />
                                                <br />
                                            </div>

                                            <div className='col signupform'>
                                                <select
                                                    id='Country'
                                                    name='Country'
                                                    required
                                                >
                                                    <option value=''>
                                                        country*
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
                                                <input
                                                    id='email'
                                                    maxlength='80'
                                                    name='email'
                                                    size='20'
                                                    type='text'
                                                    placeholder='email*'
                                                    required
                                                />
                                                <br />
                                                <input
                                                    id='Phone'
                                                    maxlength='80'
                                                    name='Phone'
                                                    size='20'
                                                    type='number'
                                                    placeholder='phone number'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='second-step'>
                                    <div className='site-half block no-padding'>
                                        <div
                                            className='container'
                                            style={{ backgroundColor: '#fff' }}
                                        >
                                            <div className='second-step-events'>
                                                <div className='row no-gutters center-content'>
                                                    <div className='col-lg-8 mr-lg-auto py-3'>
                                                        <h3 className='contact-caption'>
                                                            <div class='numberCircle'>
                                                                2
                                                            </div>{' '}
                                                            please select which
                                                            event(s) you're
                                                            looking to attend:
                                                        </h3>

                                                        <div ref={myRef}>
                                                            <div className='site-half eventSignupSection'>
                                                                <div className='container'>
                                                                    <div className='row no-gutters align-items-stretch'>
                                                                        <div className='col-lg-12 ml-rg-auto py-5'>
                                                                            <br />

                                                                            <Tabs defaultTab='three'>
                                                                                <div>
                                                                                    <TabList className='calendar'>
                                                                                        <Tab
                                                                                            tabFor='one'
                                                                                            onClick={(
                                                                                                e
                                                                                            ) => {
                                                                                                e.preventDefault();
                                                                                            }}
                                                                                            className='eventTabs signup '
                                                                                        >
                                                                                            <span className='mobileHide'>
                                                                                               2022
                                                                                            </span>{' '}
                                                                                            {/* <img
                                                                                                src={
                                                                                                    Monitor
                                                                                                }
                                                                                                alt={
                                                                                                    'Virtual'
                                                                                                }
                                                                                                className={
                                                                                                    'virtual-monitor tab '
                                                                                                }
                                                                                            /> */}
                                                                                            <span className='showOnlyMobile'>
                                                                                                2022
                                                                                            </span>
                                                                                        </Tab>
                                                                                        <Tab
                                                                                            tabFor='two'
                                                                                            onClick={(
                                                                                                e
                                                                                            ) => {
                                                                                                e.preventDefault();
                                                                                            }}
                                                                                            className='eventTabs signup'
                                                                                        >
                                                                                            <span className='mobileHide'>
                                                                                              2023
                                                                                            </span>{' '}
                                                                                            {/* <img
                                                                                                src={
                                                                                                    inPerson
                                                                                                }
                                                                                                alt={
                                                                                                    'in-person events'
                                                                                                }
                                                                                                className={
                                                                                                    'inperson-icon tab mobileHide'
                                                                                                }
                                                                                            /> */}
                                                                                            <span className='showOnlyMobile'>
                                                                                               2023
                                                                                            </span>
                                                                                        </Tab>
                                                                                        <Tab
                                                                                            tabFor='three'
                                                                                            onClick={(
                                                                                                e
                                                                                            ) => {
                                                                                                e.preventDefault();
                                                                                            }}
                                                                                            className='eventTabs all signup'
                                                                                        >
                                                                                            <span className='mobileHide'>
                                                                                                all
                                                                                                events
                                                                                            </span>
                                                                                            <span className='showOnlyMobile'>
                                                                                                all
                                                                                            </span>
                                                                                        </Tab>
                                                                                    </TabList>
                                                                                </div>
                                                                                <TabPanel tabId='one'>
                                                                                    <table className='eventTable signupTable'>




                                                                                    <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i
                                                                                                Europe
                                                                                                Autumn
                                                                                                2022
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                    Porto,
                                                                                                    Portugal
                                                                                                    {/* <img
                                                                                                        src={
                                                                                                            inPerson
                                                                                                        }
                                                                                                        alt={
                                                                                                            'in-person'
                                                                                                        }
                                                                                                        className={
                                                                                                            'inperson-icon'
                                                                                                        }
                                                                                                    /> */}
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                                31
                                                                                                aug
                                                                                                -
                                                                                                3
                                                                                                sep{' '}
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                                Porto,
                                                                                                Portugal
                                                                                                {/* <img
                                                                                                    src={
                                                                                                        inPerson
                                                                                                    }
                                                                                                    alt={
                                                                                                        'in-person'
                                                                                                    }
                                                                                                    className={
                                                                                                        'inperson-icon'
                                                                                                    }
                                                                                                /> */}
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Europe Autumn 2022 - (Porto)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i
                                                                                                Private
                                                                                                2022
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                    Dubrovnik,
                                                                                                    Croatia
                                                                                                    {/* <img
                                                                                                        src={
                                                                                                            inPerson
                                                                                                        }
                                                                                                        alt={
                                                                                                            'in-person'
                                                                                                        }
                                                                                                        className={
                                                                                                            'inperson-icon'
                                                                                                        }
                                                                                                    /> */}
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                                9-12
                                                                                                oct
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                                Dubrovnik,
                                                                                                Croatia
                                                                                                {/* <img
                                                                                                    src={
                                                                                                        inPerson
                                                                                                    }
                                                                                                    alt={
                                                                                                        'in-person'
                                                                                                    }
                                                                                                    className={
                                                                                                        'inperson-icon'
                                                                                                    }
                                                                                                /> */}
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Private 2022 - (Dubrovnik)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i
                                                                                                Americas
                                                                                                2022
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                    Punta
                                                                                                    Cana,
                                                                                                    Dom.
                                                                                                    Rep
                                                                                                    {/* <img
                                                                                                        src={
                                                                                                            inPerson
                                                                                                        }
                                                                                                        alt={
                                                                                                            'in-person'
                                                                                                        }
                                                                                                        className={
                                                                                                            'inperson-icon'
                                                                                                        }
                                                                                                    /> */}
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                                16-19
                                                                                                nov{' '}
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                                Punta
                                                                                                Cana,
                                                                                                Dom.
                                                                                                Rep
                                                                                                {/* <img
                                                                                                    src={
                                                                                                        inPerson
                                                                                                    }
                                                                                                    alt={
                                                                                                        'in-person'
                                                                                                    }
                                                                                                    className={
                                                                                                        'inperson-icon'
                                                                                                    }
                                                                                                /> */}
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Americas 2022 - (Punta Cana)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>
                                                                                        {/* <tr
                        className="eventSignupRow"
                      >
                        <td className="eventName"> Wyred Meets: Spain & Portugal
<br/><span className="eventType">Digital<img
                          src={Monitor}
                          alt={"Virtual"}
                          className={"virtual-monitor"}
                        /></span></td>
                        <td className="date">2 June 2021 <br/></td>
                        <span className="eventType showOnlyMobile">Digital<img
                          src={Monitor}
                          alt={"Virtual"}
                          className={"virtual-monitor"}
                        /></span>
                        <td className="location"><input
                        type="checkbox"
                        name="section"
                        value="Wyred Meets – Spain & Portugal | Jun 2"
                        class="chk"
                      /></td>
                      </tr> */}
                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel tabId='two'>
                                                                                    <table className='eventTable signupTable'>

                                                                                        {/* 2023 events */}
                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Europe Spring 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                  watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date comingsoon'>
                                                                                            coming soon
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                           watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Europe Spring 2023 - (Istanbul)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                     

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i VIP Connect Americas 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                  watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date comingsoon'>
                                                                                            coming soon
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                           watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i VIP Connect Americas 2023'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                         <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Healthcare 2023
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                  the hague, netherlands
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                             6-8 jun
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                            the hague, netherlands
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Healthcare 2023 - (The Hague)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                       

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Europe Autumn 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                 watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                            30 aug - 2 sep
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                            watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Europe Autumn 2023 - (Cyprus)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Americas 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date comingsoon'>
                                                                                            coming soon
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                            watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Americas 2023 - (El Paso)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Europe Winter 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date comingsoon'>
                                                                                           coming soon
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                            watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Europe Winter 2023'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                         <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i VIP Connect Europe 2023
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                 amman, jordan
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                            19-23 nov
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                            amman, jordan
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i VIP Connect Europe 2023 - (Jordan)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                    </table>
                                                                                </TabPanel>
                                                                                <TabPanel tabId='three'>
                                                                                    <table className='eventTable signupTable'>


                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i
                                                                                                Europe
                                                                                                Autumn
                                                                                                2022
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                    Porto,
                                                                                                    Portugal
                                                                                                    {/* <img
                                                                                                        src={
                                                                                                            inPerson
                                                                                                        }
                                                                                                        alt={
                                                                                                            'in-person'
                                                                                                        }
                                                                                                        className={
                                                                                                            'inperson-icon'
                                                                                                        }
                                                                                                    /> */}
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                                31
                                                                                                aug
                                                                                                -
                                                                                                3
                                                                                                sep{' '}
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                                Porto,
                                                                                                Portugal
                                                                                                {/* <img
                                                                                                    src={
                                                                                                        inPerson
                                                                                                    }
                                                                                                    alt={
                                                                                                        'in-person'
                                                                                                    }
                                                                                                    className={
                                                                                                        'inperson-icon'
                                                                                                    }
                                                                                                /> */}
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Europe Autumn 2022 - (Porto)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i
                                                                                                Private
                                                                                                2022
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                    Dubrovnik,
                                                                                                    Croatia
                                                                                                    {/* <img
                                                                                                        src={
                                                                                                            inPerson
                                                                                                        }
                                                                                                        alt={
                                                                                                            'in-person'
                                                                                                        }
                                                                                                        className={
                                                                                                            'inperson-icon'
                                                                                                        }
                                                                                                    /> */}
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                                9-12
                                                                                                oct
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                                Dubrovnik,
                                                                                                Croatia
                                                                                                {/* <img
                                                                                                    src={
                                                                                                        inPerson
                                                                                                    }
                                                                                                    alt={
                                                                                                        'in-person'
                                                                                                    }
                                                                                                    className={
                                                                                                        'inperson-icon'
                                                                                                    }
                                                                                                /> */}
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Private 2022 - (Dubrovnik)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i
                                                                                                Americas
                                                                                                2022
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                    Punta
                                                                                                    Cana,
                                                                                                    Dom.
                                                                                                    Rep
                                                                                                    {/* <img
                                                                                                        src={
                                                                                                            inPerson
                                                                                                        }
                                                                                                        alt={
                                                                                                            'in-person'
                                                                                                        }
                                                                                                        className={
                                                                                                            'inperson-icon'
                                                                                                        }
                                                                                                    /> */}
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                                16-19
                                                                                                nov{' '}
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                                Punta
                                                                                                Cana,
                                                                                                Dom.
                                                                                                Rep
                                                                                                {/* <img
                                                                                                    src={
                                                                                                        inPerson
                                                                                                    }
                                                                                                    alt={
                                                                                                        'in-person'
                                                                                                    }
                                                                                                    className={
                                                                                                        'inperson-icon'
                                                                                                    }
                                                                                                /> */}
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Americas 2022 - (Punta Cana)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Europe Spring 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                  watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date comingsoon'>
                                                                                            coming soon
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                           watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Europe Spring 2023 - (Istanbul)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                    

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i VIP Connect Americas 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                  watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date comingsoon'>
                                                                                            coming soon
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                           watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i VIP Connect Americas 2023'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                         <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Healthcare 2023
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                  the hague, netherlands
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                             6-8 jun
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                            the hague, netherlands
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Healthcare 2023 - (The Hague)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                       
                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Europe Autumn 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                 watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                            30 aug - 2 sep
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                            watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Europe Autumn 2023 - (Cyprus)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Americas 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date comingsoon'>
                                                                                           coming soon
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                            watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Americas 2023 - (El Paso)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                        <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i Europe Winter 2023
                                                                                                <br />
                                                                                                <span className='eventType comingsoon'>
                                                                                                watch this space
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date comingsoon'>
                                                                                           coming soon
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile comingsoon'>
                                                                                            watch this space
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i Europe Winter 2023'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>

                                                                                         <tr className='eventSignupRow'>
                                                                                            <td className='eventName'>
                                                                                                {' '}
                                                                                                m&i VIP Connect Europe 2023
                                                                                                <br />
                                                                                                <span className='eventType'>
                                                                                                 amman, jordan
                                                                                                </span>
                                                                                            </td>
                                                                                            <td className='date'>
                                                                                            19-23 nov
                                                                                            </td>
                                                                                            <span className='eventType showOnlyMobile'>
                                                                                            amman, jordan
                                                                                            </span>
                                                                                            <td className='location'>
                                                                                                <input
                                                                                                    type='checkbox'
                                                                                                    name='section'
                                                                                                    value='m&i VIP Connect Europe 2023 - (Jordan)'
                                                                                                    class='chk'
                                                                                                />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </TabPanel>
                                                                            </Tabs>
                                                                            {/* <div style={{ display: isSupplierVisible ? "none" : "block" }}>
                                      <strong>let us know what makes you a good fit for this event(s) below.</strong>
                                      <textarea name="Sign_Up_Comment_Box" placeholder="feel free to type up a message here..." ></textarea></div> */}
                                                                            <textarea
                                                                                name='event-names'
                                                                                class='fill'
                                                                                rows='12'
                                                                                cols='50'
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
                                                                                value='sign me up!'
                                                                                id='getValue'
                                                                            />
                                                                            <br />
                                                                            <br />
                                                                            <p
                                                                                className='small'
                                                                                style={{
                                                                                    fontStyle:
                                                                                        'italic',
                                                                                }}
                                                                            >
                                                                               When signing up, you are opting in to receive our event updates. You can unsubscribe from our news at any time from the link in the footer of our emails. We'll always treat your information with respect, in line with our privacy policy here <a href='https://www.wwideevents.com/privacy-policy'>https://www.wwideevents.com/privacy-policy</a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
