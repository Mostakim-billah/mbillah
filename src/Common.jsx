import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
    return(
        <>
            <div className="col-md-4 col-sm-6 col-lg-4 col-xl-3 col-11 mx-auto">
                <div className="Img___div">
                <img src = {props.imgsrc} className="img-fluid" alt="protfulio"/>
                {/* <div className="Blur___"></div> */}
                <span>
                    <NavLink 
                        exact 
                        className="Prot___fulio" 
                        to = {props.link}> {props.viw}
                        
                    </NavLink>
                </span>
                </div>      
            </div>
        </>
    )
}
export default Common;