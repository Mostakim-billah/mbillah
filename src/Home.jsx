import React from "react";
import Img from './img/billah.jpg';
const Home = () => {
    return(
        <>
        <div className="container-fluid">
          <div className="row mt-5 pt-5 d-flex justify-content-lg-evenly align-items-center">
            <div className="col-md-4 col-11 my-5 mb-5 mx-auto text_div">
            <h1>Hello! I,m <br/>
                     <span>Mostakim</span> Billah</h1>
            <p>Welcome to visite my protfulio website...</p>
                    <button className="mt-5 home__btn">Khow me</button>
              </div>
              
              <div className="col-md-4 col-11 my-5 mb-5 mx-auto">
                <img src={Img} className="body_img img-fluid" alt="body img"/>
              </div> 
              </div>
            </div>
            
        
        </>
    )
}
export default Home;