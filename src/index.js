import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import SimpleReactLightbox from 'simple-react-lightbox'
ReactDOM.render(

  <BrowserRouter>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </BrowserRouter>,
  
  document.getElementById('root')
)


