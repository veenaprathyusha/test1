
import React from "react"
import axios from 'axios'
class App14 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            newList: []
        }
        //this.handleChange = this.handleChange.bind(this);
        this.display=this.display.bind(this);
      }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => {
        const people=response.data;
      this.setState({ people, newList:people});
      console.log(this.state.people)
    })
    .catch(error => {
      console.log(error);
    });
      }
    
    display(e) {
    var value=e.target.value; 
    let currentList = [];
        
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.people;
      newList = currentList.filter(item => {
           const lc = item.name.toLowerCase();
           const fir = e.target.value.toLowerCase();
        return lc.includes(fir);
      })
    } else {
   
      newList = this.state.people;
    }
        
    this.setState({
      newList
    });
  }

      render() {
        return (
            <div>
                Enter the record to search <input type="text" onChange={(e)=>this.display(e)} placeholder="Search..." />

                <table border="1px">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                </tr>
                {this.state.newList.map((person,index)=>(
                    <tr key={index}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.username}</td>
                            <td>{person.email}</td>  
                    </tr>
                )
                )
                }
            </table>

          </div>
        );
      }
}

export default App14;







