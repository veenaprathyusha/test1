import React from "react"

class Technologies extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tech:[]
        }
        this.selectTech=this.selectTech.bind(this)
    }
    selectTech(e){
        if(e.target.checked){
            this.setState({
                tech:[...this.state.tech,e.target.value]
            },()=>{console.log(this.state.tech)
        });
    }
    }
    render(){
        return(
            <div>
                <form>
                    <input type="checkbox" id="cpp" name="cpp" onClick={this.selectTech}/> C++
                    <input type="checkbox" id="java" name="java" onClick={this.selectTech}/>JAVA
                    <input type="checkbox" id="ds" name="ds" onClick={this.selectTech}/>DS


                </form>

            </div>
        );
    }
}


export default Technologies;
