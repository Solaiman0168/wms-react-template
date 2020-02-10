import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from "./components/landingpage";
import Aboutus from "./components/aboutus";
import Product from "./components/product";
import Solution from "./components/solution";
import Support from "./components/support";



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Landingpage} />
                    <Route exact path="/aboutus" component={Aboutus} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/solution" component={Solution} />
                    <Route exact path="/support" component={Support} />
                </div>
            </Router>
        )
    }
}



export default App;
