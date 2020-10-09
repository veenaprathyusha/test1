/*import React from 'react';
var config = require('./model/records.json');

const App=() => {
    return(
        <div><h1>{config.greetText}</h1></div>

    );
}
export default App;
*/


import React from "react";
import { Stocks } from "./stocks.jsx";
//import App16 from "./App16.jsx"
import './style/app.css'
import './style/header.css'
function App() {
  return (
    <div>
      <Stocks />
      
    </div>
  );
}

export default App;