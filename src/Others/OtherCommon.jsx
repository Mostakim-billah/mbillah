import React from "react";
const OtherCommon = (props) => {
    return(
        <>
        <div className="col-md-4 m-4 col-lg-4 col-xl-4 col-sm-6 col-11 mx-auto">
            <img src={props.imgsrc} className="img-fluid" alt="img..." />
        </div>
        </>
    )
}
export default OtherCommon;