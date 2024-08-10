import React from 'react';
import ReactDOM from 'react-dom';
import Portfolia from './Portfolia';
import Videocomponent from './Sec-1';
import App from './App';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './Login2';
import Erichal from './Profile';


import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    
<BrowserRouter>
<Header/>

</BrowserRouter>
 
 
  
    {/* <GridPage/> */}
    {/* <Uploading/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
