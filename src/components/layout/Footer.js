import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import invertedLogo from "../../assets/mi-logo-inverted-2.png"

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='site-footer bg-dark desktop'>
                    <div className='container'>
                        {/* <div className="row mb-5">
                <div className="col-md-12">

                  <form action="#" className="d-flex footer-subscribe" />
                  <input
                    type="text"
                    className="form-control email-round"
                    placeholder="enter email"
                  />
                  <input
                    type="submit"
                    className="btn btn-primary btn-round"
                    value="send me updates"
                  />
                </div>
              </div> */}
                        <div className='row'>
                            <div className='col-md-12 mb-4 mb-md-0'>
                                <div className='row'>
                                    <div className='col-md-6 company'>
                                        <ul className='list-unstyled'>
                                            
                                            <li><a href='/about'>About</a></li>
                                            <li><a href='/contact'>Contact</a></li>
                                            <li><a href='/calendar'>Event Calendar</a></li>
                                            <li><a href='/referral-programme'>Referral Programme</a></li>
                                            <li><a href='https://www.wwideevents.com/privacy-policy'>Privacy Policy</a></li>
                                            <li><a href="https://www.wwideevents.com/future-hosting" target='_blank' rel="noopener noreferrer">Host An Event</a></li>
                                        </ul>
                                        
                                <p className='footer-bottom-text'>
                                    © m&i is part of <a href="https://wwideevents.com/" target="_blank" >Worldwide Events</a>, a
                                    division of <a href="https://wwideevents.com/"  target="_blank">Worldwide Events Group Ltd</a>, 27 Furnival St, London EC4A 1JQ<br/><br/>
                     <a href="https://white-label-travel.com/"  target="_blank">White Label Travel Ltd</a>, a <a href="https://wwideevents.com/"  target="_blank">Worldwide Events Group Ltd</a> company.
                                </p>

                                        <div className='footer-social'>
                                                    <p>
                                                        <a
                                                            href=' https://www.instagram.com/miforums/'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-instagram'></i>
                                                        </a>

                                                        <a
                                                            href='https://www.facebook.com/MIForums/'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-facebook'></i>
                                                        </a>

                                                        <a
                                                            href=' https://twitter.com/miforums'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-twitter'></i>
                                                        </a>

                                                        <a
                                                            href='https://www.linkedin.com/company/m&i-forums
'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-linkedin'></i>
                                                        </a>

                                                        <a
                                                            href='https://www.youtube.com/user/meetingforums'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-youtube-play'></i>
                                                        </a>

                                                        <a
                                                            href='https://www.tiktok.com/@miforums?lang=en'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                           <FontAwesomeIcon icon={ faTiktok }/>
                                                        </a>

                                                    </p>
                                                </div>
                                    </div>

                                    <div className='col-md-2 footer-column'>
                                        <ul className='list-unstyled'>
                                        <span className="footer-titles">Buyer overview</span>
                                            <li><a href='/buyer-experience'>Buyer experience</a></li>
                                            <li>
                                                <a href='/terms-conditions-buyers'>
                                                    {' '}
                                                    Hosted buyer T&Cs
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-2 footer-column'>
                                        <ul className='list-unstyled'>
                                        <span className="footer-titles">Supplier overview</span>
                                            <li><a href='/supplier-experience'>Supplier experience</a></li>
                                            {/* <li>
                                                <a href='/pricing'>
                                                    {' '}
                                                    pricing
                                                </a>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <div className='col-md-2 footer-column'>
                                    <ul className='list-unstyled'>
                                    
                                        <span className="footer-titles">Discover</span>
                                        
                                            <li><a href='/people-of-mi'>People of m&i</a></li>
                                            <li><a href='/blog'>Blog</a></li>
                                            <li>
                                                <a
                                                    href='/past-events'
                                                   
                                                >
                                                    Past events
                                                </a>
                                            </li>

                                        </ul>
                                     
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                    <img alt={" "} src={invertedLogo} className={"footer-logo"} />
                </footer>

                <footer className='site-footer bg-dark showOnlyMobile'>
                    <div className='container'>
                       
                        <div className='row' >
                            <div className='col-md-12 mb-4 mb-md-0'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <ul className='list-unstyled'>
                                            
                                            <li><a href='/about'>About</a></li>
                                            <li><a href='/contact'>Contact</a></li>
                                            <li><a href='/calendar'>Event Calendar</a></li>
                                            <li><a href='https://www.wwideevents.com/privacy-policy'>Privacy Policy</a></li>
                                            <li><a href="https://www.wwideevents.com/future-hosting" target='_blank' rel="noopener noreferrer">Host An Event</a></li>
                                        </ul>
                                        
                               
                                    </div>

                                    <div className='col-md-6 '>
                                        <ul className='list-unstyled'>
                                            <li><a href='/buyer-experience'>Buyer experience</a></li>
                                            <li>
                                                <a href='/terms-conditions-buyers'>
                                                    {' '}
                                                    Hosted buyer T&Cs
                                                </a>
                                            </li>
                                            <li><a href='/supplier-experience'>Supplier experience</a></li>
                                            <li><a href='/people-of-mi'>People of m&i</a></li>
                                            <li><a href='/blog'>Blog</a></li>
                                            <li>
                                                <a
                                                    href='/past-events'
                                                   
                                                >
                                                    Past events
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                  
                                 
                                </div>
                            </div>
                         
                        </div>

                        <p className='footer-bottom-text'>
                                    © m&i is part of Worldwide Events, a
                                    division of Worldwide Events Group Limited 27 Furnival St, London EC4A 1JQ
                                </p>
                                        <div className='footer-social'>
                                                    <p>
                                                        <a
                                                            href=' https://www.instagram.com/miforums/'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-instagram'></i>
                                                        </a>

                                                        <a
                                                            href='https://www.facebook.com/MIForums/'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-facebook'></i>
                                                        </a>

                                                        <a
                                                            href=' https://twitter.com/miforums'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-twitter'></i>
                                                        </a>

                                                        <a
                                                            href='https://www.linkedin.com/company/m&i-forums
'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-linkedin'></i>
                                                        </a>

                                                        <a
                                                            href='https://www.youtube.com/user/meetingforums'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            <i className='fa fa-youtube-play'></i>
                                                        </a>

                                                        <a
                                                            href='https://www.tiktok.com/@miforums?lang=en'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                           <FontAwesomeIcon icon={ faTiktok }/>
                                                        </a>

                                                    </p>
                                                </div>
                    </div>
                    <img alt={" "} src={invertedLogo} className={"footer-logo"} />
                </footer>
            </div>
        );
    }
}

export default Footer;
