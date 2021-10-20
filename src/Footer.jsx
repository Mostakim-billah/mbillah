import React from "react";
import { NavLink } from "react-router-dom";
import FacebookOutlinedIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
    return(
        <>
        <div className="container-fluid footer mt-5 py-1">
          <div className="row">
            <div className="col-md-10 col-11 d-flex footer____ justify-content-center  align-items-center text-center mx-auto">
                <div>
                <ul>
                    <li><NavLink className="footer__icon" to=""><FacebookOutlinedIcon className="f__icon" /></NavLink></li>
                    <li><NavLink className="footer__icon" to=""><TwitterIcon className="f__icon" /></NavLink></li>
                    <li><NavLink className="footer__icon" to=""><LinkedInIcon className="f__icon" /></NavLink></li>
                    <li><NavLink className="footer__icon" to=""><YouTubeIcon className="f__icon" /></NavLink></li>
                </ul>
                </div>
            </div>
          </div>   
        </div>
        </>
    )
}
export default Footer;