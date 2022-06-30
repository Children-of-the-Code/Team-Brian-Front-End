import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './component/navbar';
import {HashRouter, Route, Routes} from 'react-router-dom'
import {Addpost} from './pages/createpost';
import {Addcomment} from './pages/addcomment';
import { Register } from './pages/adduser';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Addpost />
    <Addcomment />
    <Register /> */}
    <HashRouter>
      <div>
        {/* a navbar that exists independently of any routes and does not need to be rerendered */}
        <Navbar></Navbar>
        {/* my set of routes that we will swap between */}
        <Routes>
          {/* each route needs a path and the element (page component) that it will load */}
          <Route path="/Addpost" element = {<Addpost/>}/>
          <Route path="/Addcomment" element = {<Addcomment/>}/>
          <Route path="/Register" element = {<Register/>}/>
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
