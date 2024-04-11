import React, { Component } from 'react';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SocialBar extends Component {
    render() {
        return (
            <div>
                <ul className='social-bar'>
                    <li>
                        <a
                            href=' https://www.instagram.com/miforums/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fa fa-instagram'></i>
                        </a>
                    </li>{' '}
                    <li>
                        <a
                            href='https://www.facebook.com/MIForums/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fa fa-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://twitter.com/miforums'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fa fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.linkedin.com/company/m&i-forums
'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fa fa-linkedin'></i>
                        </a>
                    </li>{' '}
                    <li>
                        <a
                            href='https://www.youtube.com/user/meetingforums'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fa fa-youtube-play'></i>
                        </a>
                        
                    </li>
                    <li>
                    <a
                                                            href='https://www.tiktok.com/@miforums?lang=en'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                             <FontAwesomeIcon icon={ faTiktok }/>
                                                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SocialBar;
