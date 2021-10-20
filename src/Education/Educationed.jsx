import React from "react";
import EducationCommon from './EducationCommon';
import EducationAPI from './EducationAPI';
import { SRLWrapper } from "simple-react-lightbox";
const Educationed = () => {
    return(
        <SRLWrapper>
            <>
        <div className="container-fluid mt-5 pt-5">
        <h1 className="text-center my-5 protfulio__title">Edu<span>cation</span></h1>
          <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row gy-5 justify-content-evenly mx-auto Ecommerce__">
                    {
                        EducationAPI.map(
                            (value, index)=>{
                                return <EducationCommon 
                                    imgsrc = {value.image}
                                    id = {index}
                                />   
                            }
                        )
                    }
                       
                </div>
            </div>
          </div>   
        </div>  
        </>
        </SRLWrapper>
        
    )
}
export default Educationed;