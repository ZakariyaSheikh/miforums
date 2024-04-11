import React from 'react';
import styled from 'styled-components';
import Instagram from '../../assets/images/Instagram.svg'
import Facebook from '../../assets/images/Facebook.svg'
import Twitter from '../../assets/images/Twitter.svg'
import Linkedin from '../../assets/images/Linkedin.svg'
import Youtube from '../../assets/images/Youtube.svg'
import Tiktok from '../../assets/images/Tiktok.svg'
import LogoInverted from '../../assets/mi-logo-inverted.png'

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  li {
    padding: 15px 5px;
    margin-top: 5%;
  }
  .menu-logo {
    top: 3%;
}
  .btn-secondary.grey{
    padding: 0.5rem 1.2rem 0rem 1.2rem!important;
    font-family: 'CircularStd-Book';
  }
  a.arrow-down:after {
    content: "";
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    position: absolute;
    margin: 8px;
    margin-left: 5%;
}
a.navEvents{
  margin:0;
  font-family: 'CircularStd-Book';
    font-size: 16px!important;

}

  @media (max-width: 992px) {

.dropdown
{
    visibility: hidden;
    opacity: 0;
    top: 100%;
    position: absolute;
    text-align: left;
    width: 400px;
    padding: 10px 0;
    margin-left: -10px;
    background: #fff;
    -webkit-transition: 0.2s 0s;
    -o-transition: 0.2s 0s;
    transition: 0.2s 0s;
}
.site-navbar
    .site-navigation
    .site-menu
    .has-children
    .dropdown
    > li
    > a:hover {
    color: #fff;
}
// .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children > a:before {
//   content: "\e315";
//   right: 20px; }
.site-navbar
    .site-navigation
    .site-menu
    .has-children
    .dropdown
    > li.has-children
    > .dropdown,
.site-navbar
    .site-navigation
    .site-menu
    .has-children
    .dropdown
    > li.has-children
    > ul {
    left: 100%;
    top: 0;
}
.site-navbar
    .site-navigation
    .site-menu
    .has-children
    .dropdown
    > li.has-children:hover
    > a,
.site-navbar
    .site-navigation
    .site-menu
    .has-children
    .dropdown
    > li.has-children:active
    > a,
.site-navbar
    .site-navigation
    .site-menu
    .has-children
    .dropdown
    > li.has-children:focus
    > a {
    color: #121a36;
}
.has-children:active > .dropdown,
.dropcheckMobile:checked ~ .dropdownEvents,
.dropcheckPersonMobile:checked ~ .dropdownEventsPerson,
.dropcheckMobile2:checked ~ .dropdownEvents2{
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
    margin-top: -15px;
    visibility: visible;
    opacity: 1;
}

.dropcheckMobile,
.dropcheckPersonMobile,
.dropcheckMobile2 {
    position: absolute;
    left: -9999px;
}

.dropcheckMobile:checked ~ .dropdownEvents,
.dropcheckPersonMobile:checked ~ .dropdownEventsPerson,
.dropcheckMobile2:checked ~ .dropdownEvents2 {
  display: contents!important;
}
.digitalNav{
        padding: 6px 0px!important;
        font-size: 16px!important;
}

label.dropcheckLabelMobile,
label.dropcheckLabelMobile2,
label.dropcheckLabelPersonMobile{
    margin:0;
}
label.dropcheckLabelPersonMobile,
label.dropcheckLabelMobile2{
    margin-bottom:5px;
}
label.dropcheckLabelMobile:before,
label.dropcheckLabelPersonMobile:before,
label.dropcheckLabelMobile2:before
 {
    content: '';
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(-45deg);
    margin: 9px;
    float: right;
}

.menu-footer {
    margin-left: -5%;
        margin-top: 3rem;
        position:relative;
    
}
.activeMenu:before{
    content: ''!important;
    border: solid #fff!important;
    border-width: 0 2px 2px 0!important;
    display: inline-block!important;
    padding: 3px!important;
    transform: rotate(45deg)!important;
    -webkit-transform: rotate(45deg)!important;
    margin: 9px!important;
    float: right!important;
}


    flex-flow: column nowrap;
    background-color: #362E36;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-400%)')};
    overflow:auto;
    top: 0;
    display: flex;
    font-family: CircularStd-Bold;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 5rem;
    padding-bottom:0rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    list-style: none;
    font-size: 19px;
    padding: 12px 15px 0px 0px!important;
    text-decoration: none!important;
    font-family: 'CircularStd-Bold';
    }
    .btn-primary{
    width: 200px;
    margin-top: 5%;
    }
label{
  font-size:19px!important;
  color:#fff;
  font-family: 'CircularStd-Medium';
}
    a {
    color: #fff;
    font-size: 19px!important;
    font-family: 'CircularStd-Medium';
    &:hover{
  text-decoration: none!important;
  color:#ff5959;
  &:hover::after{
    display:none;
  }
    }
  &:active {
    margin: 0;
    text-decoration: none !important;
    border-bottom: 2px solid #ff5959;
    width: fit-content;
    color:#ff5959;
}
}

    br {
    display: block;
}


  @media (max-width: 425px) {
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-180%)')};
  }
  @media (max-width: 375px) {
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-180%)')};
  }
  @media (max-width: 325px) {
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-180%)')};
  }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
              <h2 className='menu-logo'>
                                    <a href='/'>
                                        <img
                                            src={LogoInverted}
                                            alt={'logo'}
                                            style={{ width: '100px' }}
                                        />
                                    </a>
                                </h2>
            <li className='has-children'>




                <li className='digital-has-children personNav'>
                    <input
                        id='dropcheckPersonMobile'
                        class='dropcheckPersonMobile'
                        type='checkbox'
                    ></input>
                    <label
                        for='dropcheckPersonMobile'
                        class='dropcheckLabelPersonMobile'
                    >
                        Events
                    </label>
                    <ul className='dropdown arrow-top dropdownEventsPerson'>


                        {/* 2022 events */}

                        <li className='has-children'>
                    <a href='/calendar' className='navEvents underlined'>
                        full calendar
                    </a>
                </li>

               
                                                                <li className='has-children'>
                    <a href='/#' className='navEvents underlined'>
                       2025
                    </a>
                </li>
              
              
                                                              
                                                        
                                                                <li>
                                                                    <a
                                                                        href='/mi-luxe-lake-louise-25'
                                                                        className='navEvents light'
                                                                    >
                                                                     m&i Luxe Lake Louise 25
                                                                    </a>
                                                                </li>

                                                                <li className='has-children'>
                    <a href='/#' className='navEvents underlined'>
                       2024
                    </a>
                </li> 

                
              
                                             
                    <li ><a href='/mi-private-sorrento-24' className='navEvents light'>m&i Private Sorrento 24 </a> </li>
                    <li ><a href='/mi-healthcare-london-24' className='navEvents light'>m&i Healthcare London 24</a> </li>
                  
                  <li ><a href='/mi-americas-miami-24' className='navEvents light'>m&i Miami 24 </a> </li>
                  <li ><a href='/mi-tbilisi-georgia-24' className='navEvents light'>m&i Tbilisi 24</a> </li>
                  <li ><a href='/mi-lisbon-24' className='navEvents light'> m&i Lisbon 24</a> </li>
                  <li ><a href='/mi-sardinia-24' className='navEvents light'> m&i Sardinia 24 </a> </li>
                  <li ><a href='/mi-luxe-bodrum-24' className='navEvents light'> m&i Luxe Bodrum 24</a> </li>
                  <li ><a href='/mi-vip-costa-mujeres-24' className='navEvents light'> m&i VIP Costa Mujeres 24</a> </li>
                    </ul>
                </li>
            </li>{' '}

            {'' /* {
                    <li className='digital-has-children'>
                    <input
                        id='dropcheckMobile'
                        class='dropcheckMobile'
                        type='checkbox'
                    ></input>
                    <label for='dropcheckMobile' class='dropcheckLabelMobile'>
                       products
                    </label>

                    <ul className='dropdown arrow-top dropdownEvents'>
                        <li>
                            <a href='/#' className='navEvents light'>
                           m&i Flagship
                            </a>
                        </li>
                        <li>
                            <a href='/#' className='navEvents light'>
                           m&i Private
                            </a>
                        </li>
                        <li>
                            <a href='/#' className='navEvents light'>
                           m&i Healthcare
                            </a>
                        </li>
                        <li>
                            <a href='/#' className='navEvents light'>
                           m&i VIP Connect
                            </a>
                        </li>


                    </ul>
                </li>
            } */}

            {
                    <li className='digital-has-children'>
                    <input
                        id='dropcheckMobile2'
                        class='dropcheckMobile2'
                        type='checkbox'
                    ></input>
                    <label for='dropcheckMobile2' class='dropcheckLabelMobile2'>
                       How it works
                    </label>

                    <ul className='dropdown arrow-top dropdownEvents2'>
                        <li>
                            <a href='/buyer-experience' className='navEvents light'>
                           Buyer experience
                            </a>
                        </li>
                        <li>
                            <a href='/supplier-experience' className='navEvents light'>
                           Supplier experience
                            </a>
                        </li>
                        <li>
                            <a href='/smart-meetings' className='navEvents light'>
                           Smart meetings
                            </a>
                        </li>
                        <li>
                            <a href='/tell-me-more' className='navEvents light'>
                           Tell me more
                            </a>
                        </li>


                    </ul>
                </li>
                }



            <li>
                <a href='/pricing' className='nav'>
                    Supplier pricing
                </a>
            </li>

            <li>
                <a href='/past-events' className='nav'>
                   Past events
                </a>
            </li>
            <li>
                <a href='/blog' className='nav'>
                    Blog
                </a>
            </li>

         

            <li>
                <a href='/signup'>
                <span className='btn btn-secondary grey'>Register your interest</span>
                </a>
            </li>

            <div className="menu-footer">
            <div className="footer-columns">
           

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
                                    <li><a href='https://twitter.com/miforums'>
                  <img
                                            src={Twitter}
                                            className={'socialIcon'}
                                        />
                                    </a></li>
                                    <li><a href='https://www.linkedin.com/company/m&i-forums'>
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

            
                

            </div>
            </div>
        </Ul>
    );
};

export default RightNav;
