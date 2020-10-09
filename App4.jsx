
import React from "react"
//import App3 from "./App3.jsx"
class App4 extends React.Component{
    render(){
        return(
            <div>
                <p>App4  Details</p>
                <h1>{this.props.name} {this.props.age}</h1>
            
            </div>
        );
    }
}

export default App4;