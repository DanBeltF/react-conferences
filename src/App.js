import React, { Component } from 'react';
import './App.css';
import {Login} from "./components/Login";
import ResponsiveDrawer from "./components/Drawer";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Login}/>
                    <Route path="/main" component={ResponsiveDrawer}/>
                </div>
            </Router>
        );
    }
}

export default App;
