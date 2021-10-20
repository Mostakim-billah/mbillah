import React from "react";
import CommonEcom from './CommonEcommerce';
import Ecomeapi from "./EcommerceAPI";
import { SRLWrapper } from "simple-react-lightbox";
const Ecommerce = () => {
    return(
        <SRLWrapper>
            <>
        <div className="container-fluid mt-5 pt-5">
        <h1 className="text-center my-5 pb-4 protfulio__title">E-<span>commerce</span></h1>
          <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row gy-5 justify-content-evenly mx-auto Ecommerce__">
                    {
                        Ecomeapi.map((value,index)=>{
                            return <CommonEcom 
                                imgSrc = {value.ImgSrc}
                                id = {index}
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
export default Ecommerce;