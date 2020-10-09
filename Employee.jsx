import Axios from "axios";
import React from "react"
import axios from 'axios'
class Employee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            people: [],
        }
      }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.setState({ people: response.data });
      console.log(this.state.people)
    })
    .catch(error => {
      console.log(error);
    });
      }
    
      display(e)
{
    var arr2=[]
    if(e.target.value){
        arr1=this.state.persons;
        arr2=arr1.filter(item=>{
                const list1=item.name;
                const list2=e.target.value;
                return list1.includes(list2);
        })
    }
    
}      render() {
        return (
            <div>
                Enter the record to search <input type="text" className="input" onChange={(e)=>this.display(e)} id="search" onKeyUp="func1()" placeholder="Search..." />

            <ul>
            { this.state.people.map(person => <li>{person.id}   {person.name}    {person.username}  {person.email}</li> )}
          </ul>

          </div>

        )
      }
}

export default Employee;
