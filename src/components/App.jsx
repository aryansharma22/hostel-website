import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./navbar/Navbar";
import Contact from "./Team/Team";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";

function App() {
    return (
        <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/team" exact component={Contact}/>
                    <Route path="/gallery" exact component={Gallery}/>
                </Switch>
                <Footer/>
        </Router>
    );
}

export default App;