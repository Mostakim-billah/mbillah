import React from "react";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Educa from './Education';
import Education from "./AboutAPI";
const About = () => {
    return(
        <>
        <div className="container-fluid mt-5 pt-5">
        <h1 className="text-center my-5 protfulio__title">Ab<span>out</span></h1>
          <div className="row">
            <div className="col-md-10 mx-auto">
                <h1  className="Edu__about mb-5"><CastForEducationIcon/> Educational <span>Qualification</span></h1>
                <div className="row justify-content-evenly gy-4">
                    {
                        Education.map((value, index) => {
                            return <Educa 
                                key = {index}
                                id = {index}
                                img = {value.imgsrc}
                                title = {value.title}
                                title1 = {value.title1}
                                btn = {value.btn}
                                yea = {value.year}
                                gpa = {value.gpa}
                            />
                        })
                    }
                    
                </div>
            </div>
          </div>   
        </div>
        </>
    )
}
export default About;