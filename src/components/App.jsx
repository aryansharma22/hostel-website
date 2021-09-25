import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./navbar/Navbar";
import Contact from "./Team/Team";
import Gallery from "./Gallery/Gallery";
import Notice from "./Notice/Notice";

function App() {
    return (
        <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/team" exact component={Contact}/>
                    <Route path="/gallery" exact component={Gallery}/>
                    <Route path="/noticeboard" exact component={Notice}/>
                </Switch>
        </Router>
    );
}

export default App;