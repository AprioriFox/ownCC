import React from "react";
import {ReactComponent as LinkLogo} from '../../images/footerImages/Linkedin.svg'
import {ReactComponent as FaceLogo} from '../../images/footerImages/Facebook.svg'
import {ReactComponent as TwitLogo} from '../../images/footerImages/Twitter.svg'
import './style.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="cont">
                    <din className = "line" />
                    <div className="footerCont">
                        <div className="footerLogo">
                            <span className="footerIcon"></span>
                            <div className="iconText">
                                <h3>CUSTOM CAPS</h3>
                                <p>Магазин кепок</p>
                            </div>
                        </div>
                        <div className="socIcons">
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className="socCircles">
                                <LinkLogo className="link"/>
                            </a>
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className="socCircles">
                                <FaceLogo className="link"/>
                            </a>
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className="socCircles">
                                <TwitLogo className="link"/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="copyright">© Copyright 2019 - Lift Media</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;
