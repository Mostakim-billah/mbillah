import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Protfulio from "./Protfulio";
import Skill from "./Skill";
import Err from "./Err";
import {Switch,Route } from 'react-router-dom';
import Footer from "./Footer";
import Ecommerce from "./EcommerceImg/Ecommerce";
import Protfulio2 from "./Protfulio/Protfulio2";
import Religion from "./Religion/Religion";
import Gaming from "./Gaming/Gaming";
import Educationed from "./Education/Educationed";
import Others from "./Others/Others";
const App = () => {
    return(
        <>
        
            <Navbar />
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/about" component = {About} />
                <Route exact path = "/contact" component = {Contact} />
                <Route exact path = "/protfulio" component = {Protfulio} />
                <Route exact path = "/skill" component = {Skill} />
                <Route exact path = "/protfulio/ecommerce" component = {Ecommerce} />
                <Route exact path = "/protfulio/protfulio2" component = {Protfulio2} />
                <Route exact path = "/protfulio/religion" component = {Religion} />
                <Route exact path = "/protfulio/gaming" component = {Gaming} />
                <Route exact path = "/protfulio/educationed" component = {Educationed} />
                <Route exact path = "/protfulio/other" component = {Others} />
                <Route exact component = {Err} />
            </Switch>
            <Footer />
        </>
    )
}
export default App;