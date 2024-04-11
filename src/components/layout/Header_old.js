import React from 'react';
import Logo from '../../assets/mi-logo.svg';
import NavBar from './NavBar';
import SubscribeModal from '../elements/SubscribeModal';
import useModal from '../elements/useModal';

const Header = () => {
    const { isShowing, toggle } = useModal();

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
                                                style={{ width: '100px' }}
                                            />
                                        </a>
                                    </h2>
                                </div>
                                <div className='signupMobile'>
                                    <a href='/signup'>
                                        <span className='coral-underlined'>
                                            sign up
                                        </span>
                                    </a>
                                </div>

                                <div className='col-10'>
                                    <NavBar />
                                    <nav
                                        className='site-navigation'
                                        role='navigation'
                                        style={{
                                            width: "125%", marginLeft: "-20%"
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
                                                <li className='has-children'>
                                                    <a
                                                        href='/calendar'
                                                        className='nav'
                                                    >
                                                        events
                                                    </a>
                                                    <ul className='dropdown arrow-top'>
                                                        {/* <ul className='site-menu js-clone-nav d-none d-lg-block'>

                                                            <li className='digital-has-children'>
                                                                <input
                                                                    id='dropcheck'
                                                                    class='dropcheck'
                                                                    type='checkbox'
                                                                ></input>
                                                                <label
                                                                    for='dropcheck'
                                                                    class='dropcheckLabel'
                                                                >
                                                                    m&i Wyred
                                                                </label>

                                                                <ul className='dropdown arrow-top dropdownEvents'>
                                                                    <li>
                                                                        <a
                                                                            href='/wyred-showcase-wales'
                                                                            className='navEvents'
                                                                        >
                                                                           Wyred Showcase - Discover Wales 2021
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul> */}
                                                        <ul
                                                            className='site-menu js-clone-nav d-none d-lg-block'
                                                            style={{
                                                                marginTop:
                                                                    '-5%',
                                                            }}
                                                        >
                                                            <li className='digital-has-children personNav'>
                                                                <input
                                                                    id='dropcheckPerson'
                                                                    class='dropcheckPerson'
                                                                    type='checkbox'
                                                                ></input>
                                                                <label
                                                                    for='dropcheckPerson'
                                                                    class='dropcheckLabelPerson'
                                                                >
                                                                    m&i Forums
                                                                </label>
                                                                <ul className='dropdown arrow-top dropdownEventsPerson'>
                                                                    <li className='digital-has-children personNav'>
                                                                        <input
                                                                            id='dropcheckPerson2021'
                                                                            class='dropcheckPerson2021'
                                                                            type='checkbox'
                                                                        ></input>
                                                                        <label
                                                                            for='dropcheckPerson2021'
                                                                            class='dropcheckLabelPerson2021'
                                                                        >
                                                                            2021
                                                                        </label>
                                                                        <ul className='dropdown arrow-top dropdownEventsPerson2021'>





                                                                            <li>
                                                                                <a
                                                                                    href='/mi-europe-winter'
                                                                                    className='navEvents'
                                                                                >
                                                                                    m&i
                                                                                    Europe
                                                                                    Winter
                                                                                    2021
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className='digital-has-children personNav'>
                                                                        <input
                                                                            id='dropcheckPerson2022'
                                                                            class='dropcheckPerson2022'
                                                                            type='checkbox'
                                                                        ></input>
                                                                        <label
                                                                            for='dropcheckPerson2022'
                                                                            class='dropcheckLabelPerson2022'
                                                                        >
                                                                            2022
                                                                        </label>
                                                                        <ul className='dropdown arrow-top dropdownEventsPerson2022'>
                                                                            {/* 2022 events */}
                                                                            <li>
                                                                                <a
                                                                                    href='/mi-europe-healthcare-2022'
                                                                                    className='navEvents'
                                                                                >
                                                                                    m&i
                                                                                    Healthcare
                                                                                    2022
                                                                                </a>
                                                                            </li>

                                                                            {/* <li>
                                                                                <a
                                                                                    href='/mi-vip-connect'
                                                                                    className='navEvents'
                                                                                >
                                                                                    m&i
                                                                                    VIP
                                                                                    Connect
                                                                                    Americas
                                                                                    2022
                                                                                </a>
                                                                            </li> */}

                                                                            <li>
                                                                                <a
                                                                                    href='/mi-europe-spring-2022'
                                                                                    className='navEvents'
                                                                                >
                                                                                    m&i
                                                                                    Europe
                                                                                    Spring
                                                                                    2022
                                                                                </a>
                                                                            </li>

                                                                            <li>
                                                                                <a
                                                                                    href='/mi-private-europe-2022'
                                                                                    className='navEvents'
                                                                                >
                                                                                    m&i
                                                                                    Private
                                                                                    2022
                                                                                </a>
                                                                            </li>

                                                                            <li>
                                                                                <a
                                                                                    href='/mi-europe-autumn-2022'
                                                                                    className='navEvents'
                                                                                >
                                                                                    m&i
                                                                                    Europe
                                                                                    Autumn
                                                                                    2022
                                                                                </a>
                                                                            </li>

                                                                            <li>
                                                                                <a
                                                                                    href='/mi-americas-2022'
                                                                                    className='navEvents'
                                                                                >
                                                                                    m&i
                                                                                    Americas
                                                                                    2022
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a
                                                        href='/smart-meetings'
                                                        className='nav'
                                                    >
                                                        smart meetings
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href='/pricing'
                                                        className='nav'
                                                    >
                                                        pricing
                                                    </a>
                                                </li>

                                                <li>
                                                <span onClick={toggle}>
                                                            join our community
                                                        </span>
                                                </li>
                                                <li>
                                                <a href='https://www.wwideevents.com/future-hosting' target='_blank'
                                                className='nav'>
                                                host an event</a>
                                                </li>

                                                <li>
                                                    <a
                                                        href='/about'
                                                        className='nav'
                                                    >
                                                        about
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href='/contact'
                                                        className='nav'
                                                    >
                                                        contact
                                                    </a>
                                                </li>

                                                <li
                                                    style={{
                                                        position: 'absolute',
                                                        transform:'translateY(-5px)'
                                                    }}
                                                >
                                                    <a href='/signup'>
                                                        <span className='text-white btn btn-primary'>
                                                            sign up
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default Header;
