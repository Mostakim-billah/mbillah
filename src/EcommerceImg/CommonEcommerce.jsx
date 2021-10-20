import React from 'react';
const CommonEcom = (props) => {
    return(
        <>
            <div className="col-md-4 col-lg-4 col-xl-4 m-4 col-sm-6 col-11 mx-auto">
                <img src={props.imgSrc} className="img-fluid" alt="img__" />
            </div> 
        </>
    )
}
export default CommonEcom;