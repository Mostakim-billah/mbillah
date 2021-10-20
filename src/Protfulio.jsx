import React from "react";
import ProtfulioAPI from './ProtfulioAPI';
import Common from './Common';
const Protfulio = () => {
    return(
        <>
        <div className="container-fluid pt-5 mt-5 mb-4">
            <h1 className="text-center my-5 protfulio__title">Designe Q<span>ueality</span></h1>
            <div className="row justify-content-evenly">
            <div className="col-md-10 mx-auto">
            <div className="row gy-3 justify-content-evenly protfulio__section">
                {
                    ProtfulioAPI.map((value, index)=>{
                        return <Common 
                                id = {index}
                                key = {index}
                                imgsrc = {value.imgsrc}
                                viw = {value.view}
                                link = {value.link}
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
export default Protfulio;