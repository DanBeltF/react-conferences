import React, { Component } from 'react';
import './App.css';
import {Login} from "./components/Login";
import ResponsiveDrawer from "./components/Drawer";
import EventTabs from "./components/EventTabs";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RecordedEventDetail from "./components/RecordedEventDetail";
import MyEvents from "./components/MyEvents";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Login}/>
                    <Route path="/main" component={ResponsiveDrawer}/>
                    <Route path="/events" component={EventTabs}/>
                    <Route path="/main/events/recorded" component={RecordedEventDetail}/>
                    <Route path="/myevents" component={MyEvents}/>
                </div>
            </Router>
        );
    }
}

export default App;
