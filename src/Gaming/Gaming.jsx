import React from "react";
import GamingCommon from './GamingCommon';
import GamingAPI from "./GaminAPI";
import { SRLWrapper } from "simple-react-lightbox";
const Gaming = () => {
    return(
        <SRLWrapper>
            <>
        <div className="container-fluid mt-5 pt-5">
        <h1 className="text-center my-5 protfulio__title">G<span>aming</span></h1>
          <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row gy-4 Ecommerce__ justify-content-evenly mx-auto">
                    {
                        GamingAPI.map((value, index)=>{
                            return <GamingCommon 
                            id = {index}
                            key = {index}
                            img = {value.imgSrc}
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
export default Gaming;