
/*import React from "react";
//import './App.css';
//import MainForm from './MainForm.jsx';
//import { Container } from 'semantic-ui-react';
import Employee from './Employee.jsx';

class App extends React.Component{
    render(){
        return(
            
        //<MainForm />
      
            <div>
                <Employee id="101" name="eshan" salary="10000"></Employee>
            </div>

        );
    }
}

export default App;*/
import React from "react"
import Employee from './Employee.jsx'
import Technologies from './technologies.jsx'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:101,
            name:"Eshan",
            salary:10000,
            date:new Date()
        }
    }
    render(){
        return(

            <div>
               <h1> {this.state.date.toLocaleTimeString()}</h1>
            <table border="5px">
                
                <tr><Employee id={this.state.id} name={this.state.name} salary={this.state.salary}></Employee></tr>
                <tr><Employee id="102" name="Manish" salary="200000"></Employee></tr>
                <tr><Employee id="103" name="Tanish" salary="300000"></Employee></tr>
            </table>

           <Technologies></Technologies>
           </div>
        );
    }
}

export default App;
