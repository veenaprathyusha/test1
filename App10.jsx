import React from 'react';
import ReactDOM from 'react-dom';

class App10 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            saying:''
        }
    }

update(e){
    this.setState({saying:e.target.value});
}
render(){
    return (
        <div>
            Veena <input type="text" onChange={this.update.bind(this)}></input>
            <h1>{this.state.saying}</h1>
        </div>
    );
}
}



export default App10;
/*import React from 'react';
import ReactDOM from 'react-dom';

class App5 extends React.Component{
    constructor(props){

        super(props)
        this.inValue = this.incrementValue.bind(this);
    }
    incrementValue (){
        console.log(this.refs)
        ReactDOM.findDOMNode(this.refs.Inc).value++;
    }
    render(){
        return (<div>
            <input type="text" ref="Inc" value="0"></input>
            <button onClick={this.inValue}>Increment</button>

        </div>);
    }
}

export default App5;


import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: ''
      }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   render() {
      return (
         <div>
            <input value = {this.state.data} onChange = {this.updateState} 
               ref = "myInput"></input>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default App;*/

