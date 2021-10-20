import React from "react";

const ProCommon = (props) => {
    return(
        <>
        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-11 justify-content-evenly mx-auto">
            <img src={props.imgS} className="img-fluid" alt="imgpro..." />
        </div>
        </>
    )
}
export default ProCommon;