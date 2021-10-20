import React from "react";
import OtherAPI from './OtherAPI';
import OtherCommon from "./OtherCommon";
import { SRLWrapper } from "simple-react-lightbox";
const Others = () => {
    return(
        <SRLWrapper>
            <>
        <div className="container-fluid mt-5 pt-5">
        <h1 className="text-center my-5 protfulio__title">Oth<span>ers</span></h1>
          <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row justify-content-evenly">
                <div className="row gy-5 justify-content-evenly mx-auto Ecommerce__">
                    {
                        OtherAPI.map((value, index)=>{
                            return <OtherCommon 
                                id = {index}
                                imgsrc = {value.image}
                            
                            />
                        })
                    }
                   
                </div>      
                </div>
            </div>
          </div>   
        </div>  
        </>
        </SRLWrapper>
        
    )
}
export default Others;