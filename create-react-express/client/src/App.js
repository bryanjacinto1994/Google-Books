import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Saved from './components/pages/Saved'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;




// import React, { Component } from "react";
// import Wrapper from "./components/Wrapper";
// import NavBar from "./components/NavBar";
// import Jumbotron from "./components/Jumbotron";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
// <Wrapper> 
//   <div>
//     <NavBar />
//     <Jumbotron />
//       <Switch>
//         <Route exact path="/" com
//       </Switch>
//   </div>
// </Wrapper>
//     );
//   }
// }

// export default App;


