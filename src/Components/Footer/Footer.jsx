import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className='Footer'>
            <div>
                <div>
                    <div className='footerFlex'>
                        <div>Connect with Me on <br />
                            <div className='SocialMedia'>

                                <div>
                                    <span className='bi bi-instagram'></span>
                                </div>
                                <div>
                                    <span className='bi bi-facebook'></span>
                                </div>
                                <div>
                                    <span className='bi bi-threads'></span>
                                </div>
                                <div>
                                    <span className='bi bi-twitter-x'></span>
                                </div>
                                <div>
                                    <span className='bi bi-linkedin'></span>
                                </div>
                            </div>
                        </div>
                        <div className='FooterEmail'>Write an Email to: <br /><span className='bi bi-envelope-at'> Xyz@abc.com</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer