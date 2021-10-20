import React from "react";
import { NavLink } from "react-router-dom";
const Educa = (props) => {
    return(
        <>
        <div className="col-md-4 col-12 col-sm-6 my-4 mx-auto edu__box">
            <img className="edu__Img img-fluid" src = {props.img} alt="edu" />
            <h2 className="pt-4 title__edu"><span>{props.title1}</span> {props.title}</h2>
            <h3 className="mb-1">Year {props.yea}</h3>
            <h3 className="mb-4">GPA {props.gpa}</h3>
            <NavLink className="btn_Edu" exact to="/">See more</NavLink>
        </div>
        </>
    )
}
export default Educa;