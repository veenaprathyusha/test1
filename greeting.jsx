import React from "react"
function DemoComponent(props){
    return (
        <div>
            <h1>Hello {props.user}</h1>
        </div>
    );
}
class Greeting extends React.Component{
    render(){
        return(
            <div>
                   <h1> <mark>{this.props.message}</mark></h1>
                    <DemoComponent user ="eshan" />
                
           </div>
        );
    }
}
/*function greetMessage(props){
    return(props.message)
}*/
export default Greeting;
