import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './assets/css/App.css';
import Landingpage from "./components/landingpage";
import Products from "./components/products";
import Maps from "./components/maps";
import Discover from "./components/discover";
import Support from "./components/support";



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Landingpage} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/support" component={Support} />
                    <Route exact path="/discover" component={Discover} />
                </div>
            </Router>
        )
    }
}



export default App;
