
import React from 'react'
const people=[
    {
        name:"Eshan",
        age:10
    },
    {
        name:"Tanish",
        age:20
    },
    {
        name:"Manish",
        age:30
    },
    {
        name:"CHiku",
        age:40
    }
]

class App7 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            names : ['EShan','Tanish','James','Paul','George','Esha','Eagle'],
        };
    }
    
    render(){
        return(
            <div><ul>{
                this.state.names.filter(name=>name.includes('E')).map(filteredName=>(
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
export default App7;
