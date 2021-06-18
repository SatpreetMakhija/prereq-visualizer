import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import CreateGraph from './components/CreateGraph';
// import './App.css';
import NavBar from './components/NavBar';
import Test from './components/Test';
import { data } from "./components/data";

function App() {
  


  return (
    <div className="App">
     <Router>
      <NavBar/>
      <Switch>
       <Route path="/" exact>
         <h1>Welcome to Prerequisites visualiser.</h1>
         {console.log(data.computer_science)}
       </Route>
       <Route path = "/computer-science" exact >
        <Test data={data} />
       </Route>
       
     </Switch>
     </Router>
     



     {/* <NavBar/>
     <Test/> */}
    </div>
  );
}

export default App;
