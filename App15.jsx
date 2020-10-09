import React from "react"
import axios from 'axios'
class App15 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            names: ["veena" , "prathyusha"]
        }
        
      }
    
    render(){
        return(
            <div><ul>{
                this.state.names.map(filteredName=>(
                <li key={filteredName}>
                    {filteredName}
                </li>    
            ))
                }
                </ul>
            </div>
        );
    }
}

export default App15;
