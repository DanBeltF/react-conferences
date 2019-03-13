import React, { Component } from 'react';
import './App.css';
import {Login} from "./components/Login";
import ResponsiveDrawer from "./components/Drawer";
import EventTabs from "./components/EventTabs";
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Login}/>
                    <Route path="/main" component={ResponsiveDrawer}/>
                    <Route path="/events" component={EventTabs}/>
                </div>
            </Router>
        );
    }
}

export default App;
