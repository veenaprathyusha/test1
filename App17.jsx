import React, { Component } from 'react'
import { Router, Route, IndexRoute,hashHistory,Link} from 'react-router'

class App11 extends Component {
    constructor(){
        super()
        this.state={
            name: '',
            password :''

        }
    }
    render () {

        return (
          <Router history={hashHistory}>
            <Route path='/' component={Container}>
              <IndexRoute component={Home} />
              <Route path='register' component={register}>
                  <IndexRoute component={signin}/>
                    </Route>
              <Route path='about(/:name)' component={About} />
              
              <Route path='*' component={NotFound} />
            </Route>
            </Router>
        )
      }
}
const About=(props) =>(
    <div>
        <h1>welcome</h1>
        <h2>{props.params.name}</h2>
    </div>
)
function App1(){
    const isBackgroundRed=true;
}
const signin = () => <h1>signin
    Enter ur name <input type="text" name=""></input><br></br>
    Enter Password<input type="password" name=""></input>
    <input type="button" name="submit" onSubmit={(e)=>this.display(e)} value="submit"></input>
</h1>
const Home = () => <h1>Hello from Home!</h1>
const register = (props) => 
<div>
    <h1>Register Page</h1>
    
<br>
</br>
<Link to="/register">Signin</Link>

{props.children}
</div>

const NotFound=()=><h1> 404 ERROR PAGE NOT FOUND </h1>

const Nav = () => (
    <div>
      <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
      
    <Link to ='/register'>Register</Link>
    
    </div>
  )

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>
  


export default App11

