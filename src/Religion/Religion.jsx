import React from "react";
import ReligionCommon from './ReligionCommon';
import ReligionAPI from "./ReligionAPI";
import { SRLWrapper } from "simple-react-lightbox";
const Religion = () => {
    return(
        <SRLWrapper>
             <>
        <div className="container-fluid mt-5 pt-5">
        <h1 className="text-center my-5 pb-4 protfulio__title">Relig<span>ion</span></h1>
          <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row gy-5 Ecommerce__ justify-content-evenly">
                    {
                        ReligionAPI.map((value, index)=>{
                            return <ReligionCommon 
                                imgReli = {value.ImgSrc}
                                id = {index}
                                key = {index}
                            />
                        })
                    }
                    
                </div>
            </div>
          </div>   
        </div>  
        </>
        </SRLWrapper>
    )
}
export default Religion;