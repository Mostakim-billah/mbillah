import React from "react";
import Img from './img/billah.jpg';
import About from "./About";
import Protfulio from './Protfulio';
import Skill from './Skill';
import Contact from './Contact.jsx'
const Home = () => {
    return(
        <>
        <div className="container-fluid Home__page">
          <div className="row mt-5 pt-5 d-flex justify-content-lg-evenly align-items-center">
            <div className="col-md-4 col-lg-4 col-xl-4 col-11 my-5 mb-5 mx-auto text_div">
            <h1 className="mt-5">Hello! I,m <br/>
                     <span>Mostakim</span> Billah</h1>
            <p>Welcome to visite my protfulio website...</p>
                    <button className="mt-5 home__btn">Khow me</button>
              </div>
              
              <div className="col-md-4 col-lg-4 col-xl-4 col-11 my-5 mb-5 mx-auto">
                <img src={Img} className="body_img img-fluid" alt="body img"/>
              </div> 
              </div>
            </div>

            <div className="home__view2 home__view3 home__view">
                <Protfulio/>
            </div>
            <div className="home__view3 home__view">
                <About/>
            </div>
            
            <div className="home__view4 home__view">
                <Skill/>
            </div>
              <div className="home__view4 home__view">
                <Contact/>
              </div>
            
        
        </>
    )
}
export default Home;