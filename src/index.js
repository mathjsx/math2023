import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Berpangkat from './Berpangkat';
// import MyForm from './MyForm.jsx';
// import Car from './Car.js';
//  const config = {
//    loader: { load: ["input/asciimath"] },
//    asciimath: {
//      displaystyle: true,
//      delimiters: [
//        ["$", "$"],
//        ["`", "`"]
//      ]
//    }
//  };
const root = ReactDOM.createRoot(document.getElementById('root'));
// const myFirstElement = <h1>Hello React!</h1>
// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root.render(
 <>
  <App />
  {/* <Berpangkat />    */}
   </>
 )
// root1.render(myFirstElement); 
// root3.render(<Car />);
// root2.render(<MyForm />);
;

