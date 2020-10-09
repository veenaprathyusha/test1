/*import React from 'react';
 
class App3 extends React.Component {
  constructor(props){
      super(props)
     }
  handleClick() {
   alert(this); // null
  }
  render() {
    return (
      <div onClick={this.handleClick}>CLICK</div>
    );
  }
}
 
export default App3;
*/
import React from 'react'
const names=['EShan','Tanish','James','Paul','George','Esha'];
/*const people=[
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
]*/

/*function App3(){
    return (
        <div>
            {
            names.filter(name=>name.includes('E')).map(filteredName=>(
                <li>
                    {filteredName}
                </li>    
            ))

            }
            <br></br>
            {people.filter(person=>person.age>=30).map(filteredPerson=>(
                <li>
                    {filteredPerson.name}
                </li>
            ))}
            

        </div>
    )
}*/
class App3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name : "Eshan",
            age: "20"
            
        }
        /*{this.state.name.includes('E').map(filteredName=>(
                <li>
                    {filteredName}
                </li>    
            ))

            }*/
    }
    
    render(){
        return(
            <div>
               {this.state.name}.includes('E').map(filteredName => (
                    {this.state.name}
               ))
            </div>
        );
    }
}


export default App3;
