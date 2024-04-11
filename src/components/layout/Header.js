import React, { useState } from 'react';
import Logo from '../../assets/mi-logo.svg';
import LogoInverted from '../../assets/mi-logo-inverted.png'
import NavBar from './NavBar';
import SubscribeModal from '../../components/elements/SubscribeModal';
import useModal from '../../components/elements/useModal';
import Instagram from '../../assets/images/Instagram.svg'
import Facebook from '../../assets/images/Facebook.svg'
import Twitter from '../../assets/images/Twitter.svg'
import Linkedin from '../../assets/images/Linkedin.svg'
import Youtube from '../../assets/images/Youtube.svg'
import Tiktok from '../../assets/images/Tiktok.svg'


const Header = () => {
    const { isShowing, toggle } = useModal();

    const [isOpen, setIsOpen] = useState(false);
  const [showSubMenus, setShowSubMenus] = useState(true); // Set showSubMenus to true initially
  const [showSubMenus2, setShowSubMenus2] = useState(false);
  const [showSubMenus3, setShowSubMenus3] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Events');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowSubMenus(false);
    setShowSubMenus2(false);
    setShowSubMenus3(false);
  };
  const handleMenuHover = (menuItem) => {
    setActiveMenuItem(menuItem);
    setShowSubMenus(menuItem === 'Events');
    setShowSubMenus2(menuItem === 'How it works');
    setShowSubMenus3(menuItem === 'Past events' || menuItem === 'Supplier pricing' || menuItem === 'Join our community' || menuItem === 'Blog');
  };
  
    return (
        <div>
            {/* <div className="topBar"><div className="text"><span className="yellow-underlined"><a href="/signup">get 5% off any of our 2021 events</a></span> when you book before 31st december! </div></div> */}
            <div className='site-navbar-wrap'>
                <div className='container'>
                    <div className='site-navbar'>
                        <div className='row align-items-center'>
                            <div className='col-2'>
                                <h2 className='mb-0 site-logo'>
                                    <a href='/'>
                                        <img
                                            src={Logo}
                                            alt={'logo'}
                                            style={{ width: '76px' }}
                                        />
                                    </a>
                                </h2>
                            </div>

                            <div className='col-10'>
                                <NavBar />
                                <nav
                                    className='site-navigation'
                                    role='navigation'
                                    style={{
                                        width: '125%',
                                        marginLeft: '60%',
                                    }}
                                >
                                    <div className='container'>
                                        <div className='d-inline-block d-lg-none ml-md-0 mr-auto py-3'>
                                            <a
                                                href='/#'
                                                className='site-menu-toggle js-menu-toggle text-black'
                                            >
                                                <span className='icon-menu h3'></span>
                                            </a>
                                        </div>

                                        <ul className='site-menu js-clone-nav d-none d-lg-block'>
                                      
                                          
                                        <li
                                                style={{
                                                    position: 'absolute',
                                                    transform:
                                                        'translate(-90%, -25px)',
                                                }}
                                            >
                                                <a href='/calendar'>
                                                    <span className='text-white btn btn-primary transparentBrown'>
                                                       View calendar
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                style={{
                                                    position: 'absolute',
                                                    transform:
                                                        'translate(0%, -25px)',
                                                }}
                                            >
                                                <a href='/signup'>
                                                    <span className='text-white btn btn-primary'>
                                                      Register your interest
                                                    </span>
                                                </a>
                                            </li>


                                           
                                            <SubscribeModal
                                                isShowing={isShowing}
                                                hide={toggle}
                                            />
                                        </ul>
                                    </div>
                                </nav>

                                <div className="burger-menu">
      <button className="burger-icon" onClick={toggleMenu}>
        <div className={`burger-line ${isOpen ? 'open' : ''}`} />
        <div className={`burger-line ${isOpen ? 'open' : ''}`} />
        <div className={`burger-line ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className="menu-overlay">
          <button className="close-button" onClick={closeMenu}>
            X
          </button>
         
                              
          <div className="menu-columns">
            <ul className="menu-column show">
            <h2 className='menu-logo'>
                                    <a href='/'>
                                        <img
                                            src={LogoInverted}
                                            alt={'logo'}
                                            style={{ width: '100px' }}
                                        />
                                    </a>
                                </h2>
            <li className={`menuHeading ${
                  activeMenuItem === 'Events' ? 'active' : ''
                }`}
                onMouseEnter={() => handleMenuHover('Events')}
              >
               <a href="/calendar">Events</a> 
              </li>

              <li className={`menuHeading ${
                  activeMenuItem === 'How it works' ? 'active' : ''
                }`}
                onMouseEnter={() => handleMenuHover('How it works')}
              >
               <a href="/how-it-works">How it works</a> 
              </li>

              <li className={`menuHeading ${
                  activeMenuItem === 'Supplier pricing' ? 'active' : ''
                }`}
                onMouseEnter={() => handleMenuHover('Supplier pricing')}
              >
               <a href="/pricing">Supplier pricing</a> 
              </li>

              <li className={`menuHeading ${
                  activeMenuItem === 'Past events' ? 'active' : ''
                }`}
                onMouseEnter={() => handleMenuHover('Past events')}
              >
                
              <a href="/past-events">Past events</a> 
              </li>

              

            

              <li className={`menuHeading ${
                  activeMenuItem === 'Blog' ? 'active' : ''
                }`}
                onMouseEnter={() => handleMenuHover('Blog')}
              >
              <a href="/blog">Blog</a>  
              </li>
             
            </ul>
            {showSubMenus && (
              <>
              
                <ul className={`menu-column show`}>
                    <h2 className="subMenuHeading">2024</h2>
                    <li className='sub-menu'><a href='/mi-private-sorrento-24' >m&i Private Sorrento 24 </a> </li>
                    <li className='sub-menu'><a href='/mi-healthcare-london-24' >m&i Healthcare London 24</a> </li>
                   
                  <li className='sub-menu'><a href='/mi-americas-miami-24' >m&i Miami 24 </a> </li>
                  <li className='sub-menu'><a href='/mi-tbilisi-georgia-24' >m&i Tbilisi 24</a> </li>
                  <li className='sub-menu'><a href='/mi-lisbon-24' > m&i Lisbon 24</a> </li>
                  <li className='sub-menu'><a href='/mi-sardinia-24'> m&i Sardinia 24 </a> </li>
                  <li className='sub-menu'><a href='/mi-luxe-bodrum-24'> m&i Luxe Bodrum 24</a> </li>
                  <li className='sub-menu'><a href='/mi-vip-costa-mujeres-24'> m&i VIP Costa Mujeres 24</a> </li>

                  
                      
                </ul>
                <ul className={`menu-column show`}>
                    <h2 className="subMenuHeading">2025</h2>
                
                
                 
                 
                  <li className='sub-menu'><a href='/mi-luxe-lake-louise-25' > m&i Luxe Lake Louise 25 </a> </li>
                                                                
                                                               
                                                               
                                                              
                </ul>
              </>
            )}
            {!showSubMenus}

            {showSubMenus2 && (
              <>
                <ul className={`menu-column show`}>
                  <li className='sub-menu'><a href='/buyer-experience'>Buyer experience</a> </li>
                  <li className='sub-menu'><a href='/supplier-experience'>Supplier experience </a> </li>
                  <li className='sub-menu'><a href='/smart-meetings' >Smart meetings </a> </li>
                  <li className='sub-menu'><a href='/tell-me-more' > Tell me more</a> </li>                                      
                </ul>
                <ul className={`menu-column show nothinghere`}>
                                          
                </ul>
              </>
            )}
            {!showSubMenus2 }

            {showSubMenus3 && (
              <>
                <ul className={`menu-column show `}>
                                                   
                </ul>
                <ul className={`menu-column show nothinghere`}>
                                          
                </ul>
              </>
            )}
            {!showSubMenus3 }
          
          </div>
          <div className="menu-footer">
            <div className="footer-columns">
            <ul className="footer-column">
            <li className="footerHeading"
              >
             Follow us on our socials
              </li>
              
                </ul>

                <ul className="footer-column">
                <li><a href='https://www.instagram.com/miforums/'>
                  <img
                                            src={Instagram}
                                            className={'socialIcon'}
                                        />
                                    </a></li>
                                    <li><a href='https://www.facebook.com/MIForums/'>
                  <img
                                            src={Facebook}
                                            className={'socialIcon'}
                                           
                                        />
                                    </a></li>
                                    <li><a href='https://www.twitter.com/miforums'>
                  <img
                                            src={Twitter}
                                            className={'socialIcon'}
                                        />
                                    </a></li>
                                    <li><a href='ttps://www.linkedin.com/company/m&i-forums\n'>
                  <img
                                            src={Linkedin}
                                            className={'socialIcon'}
                                        />
                                    </a></li>
                                    <li><a href='https://www.youtube.com/user/meetingforums'>
                  <img
                                            src={Youtube}
                                            className={'socialIcon'}
                                        />
                                    </a></li>
                                    <li><a href='https://www.tiktok.com/@miforums?lang=en'>
                  <img
                                            src={Tiktok}
                                            className={'socialIcon'}
                                        />
                                    </a></li>
              
                </ul>

                <ul className="footer-column">
                    <li>   <a href='/signup'>
                                                    <span className='btn btn-secondary grey'>
                                                       Register your interest
                                                    </span>
                                                </a></li>
                </ul>

                

            </div>
            </div>
        </div>
      )}
    </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
