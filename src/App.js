import React, { Component } from 'react';
import './App.css';
import {Login} from "./components/Login";
import ResponsiveDrawer from "./components/Drawer";
import EventTabs from "./components/EventTabs";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MyEvents from "./components/MyEvents";
import RecordedEventDetail from "./components/RecordedEventDetail";
import LiveEventDetail from "./components/LiveEventDetail";
import CalendarDnD from "./components/CalendarDnD";
import Register from "./components/Register";
import {NewConference} from "./components/NewConference";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/main" component={ResponsiveDrawer}/>
                    <Route path="/main/events" component={EventTabs}/>
                    <Route path="/main/newconference" component={NewConference}/>
                    <Route path="/main/live" component={LiveEventDetail}/>
                    <Route path="/main/recorded" component={RecordedEventDetail}/>
                    <Route path="/main/myevents" component={MyEvents}/>
                    <Route path="/main/calendar" component={CalendarDnD}/>
                </div>
            </Router>
        );
    }
}

export default App;
