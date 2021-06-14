import "./App.css";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import VehicleApp from "./components/vehicleName";
import Productlist from "./components/productlist";
import MathsApp from "./components/Mathmetics";
function App() {
 return(
<Router>
      <div>
      <div className="container">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Vehicle Names</Link>
            </li>
            <li>
              <Link to="/product">Product Names</Link>
            </li>
            <li>
              <Link to="/maths">Mathmetical Operations</Link>
            </li>
          </ul>
        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"> <Link to="/">Vehicle Names</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/product">  <Link to="/product">Product Names</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/maths"> <Link to="/maths">Mathmetical Operations</Link></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/product">
            <Productlist />
          </Route>
          <Route path="/maths">
            <MathsApp />
          </Route>
          <Route path="/">
            <VehicleApp />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
 )
}

export default App;
