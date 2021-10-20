import React from "react";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
const Skill = () => {
    return(
        <>
        <div className="container-fluid mt-5 pt-5">
        <h1 className="text-center my-5 protfulio__title">My Ski<span>ll's</span></h1>
          <div className="row justify-content-evenly  d-flex justify-content-lg-center align-items-center">
            
            <div className="col-md-7 mb-5 box_wraper mt-5 col-11 mx-auto">
            <h1  className="Edu__about mb-5"><CastForEducationIcon/> Web designe and<span> Development</span></h1>
                
                <div className="Box__Skill">
                    <h2>HTML</h2>
                </div>
                <div className="progress-Line html"><span></span></div>
                <div className="Box__Skill">
                    <h2>CSS</h2>
                </div>
                <div className="progress-Line css"><span></span></div>
                <div className="Box__Skill">
                    <h2>JavaScript</h2>
                </div>
                <div className="progress-Line javascript"><span></span></div>
                <div className="Box__Skill">
                    <h2>jQuery</h2>
                </div>
                <div className="progress-Line jquery"><span></span></div>
                <div className="Box__Skill">
                    <h2>Bootstrap</h2>
                </div>
                <div className="progress-Line bootstrap"><span></span></div>
                <div className="Box__Skill">
                    <h2>React</h2>
                </div>
                <div className="progress-Line react"><span></span></div>
               

            </div>
          </div>   
        </div>
        </>
    )
}
export default Skill;