import React from "react";
import ProCommon from "./ProtfulioCommon";
import ProtfuliodAPI from './ProtfuliodAPI';
import { SRLWrapper } from "simple-react-lightbox";
const Protfulio2 = () => {
    return(
        <SRLWrapper>
             <>
        <div className="container-fluid mt-5 pt-5">
        <h1 className="text-center my-5 pb-4 protfulio__title">Prot<span>fulio</span></h1>
          <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row gy-4 Ecommerce__ justify-content-evenly">
                    {
                        ProtfuliodAPI.map((value, index)=>{
                            return <ProCommon 
                                imgS = {value.ImgSrc}
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
export default Protfulio2;