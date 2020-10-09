import React from 'react';
export default class App8 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            ID:'',
            salary:'',
            Employees:[]
        };
        this.addEmployee=this.addEmployee.bind(this);
        this.listItems=this.listItems.bind(this);
    }

    setName(e){
        this.setState({
            name:e.target.value
        });
    }
    setID(e){
        this.setState({
            ID:e.target.value
        });
    }
    setSalary(e){
        this.setState({
            salary:e.target.value
        });
    }
    /*displayEmp(){
        let items=this.state.Employees;
        render()
         {
            return(
        <table>
            <tr>
                <td>Name</td>
                <td>{this.state.Employees.name}</td>
            </tr>
        </table>
            );}
        console.log(items);
    }*/
    listItems(){
        let Employees=this.state.Employees;
        console.log(Employees)
        return(
            <ul>
            {
                Employees.map((name,id,salary,index)=>{
                    return(
                        <li key={name}>
                            {this.state.name}
                            {this.state.ID}
                            {this.state.salary}
                        </li>
                    );
                })
            }
            </ul>
        )
    }

    addEmployee(){
        var emp={
            name:this.state.name,
            id:this.state.id,
            salary:this.state.salary
        };
        var Employees=this.state.Employees;
        Employees.push(emp);
        console.log(emp);
        this.setState({Employees});
    }

render(){
    return(
        <div>
            <table>
                <tbody>
            <tr>
            <td>Name</td>
            <td><input type="text" name="name" onChange={(e)=>this.setName(e)} /></td>
            </tr>
            <tr>
                <td>Emp ID</td>
                <td><input type="text" name="name" onChange={(e)=>this.setID(e)} /></td>
            </tr>
            <tr>
                <td>Salary</td>
                <td><input type="text" name="name" onChange={(e)=>this.setSalary(e)} /></td>
            </tr>
            </tbody>
            </table>
            <input type="button" value="add Employee" onClick={this.addEmployee}></input>
            
            {this.listItems()}
        </div>
    );
    }
}