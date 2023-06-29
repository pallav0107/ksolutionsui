import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/loginContainer";
import Header from "./components/Header/Header";

function App({ history }) {
  return (
    <Router>
      <div className="App">
        <Header></Header>
      </div>
      <Switch>
        <Route path="/quotes">
        <HomeContainer history={history} quotes="quotes"></HomeContainer>
        </Route>
        <Route path="/home">
          <HomeContainer history={history}></HomeContainer>
        </Route>
        <Route path="/services">
          <HomeContainer history={history} services="services"></HomeContainer>
        </Route>  
        <Route path="/capabilities">
          <HomeContainer history={history} services="capabilities"></HomeContainer>
        </Route>    
        <Route path="/">
          <HomeContainer history={history}></HomeContainer>
        </Route>
      </Switch>
      <div className="App">
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
