import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import EmployeeDirectory from "./components/EmployeeDirectory/App";

import LobbyLogin from "./components/LobbyLogin";
// import Employees from "./components/Employees/components/pages";
import VideoChat from "./components/ReactVideoChat/App";
import TouchlessLoginUrl from "./components/TouchlessLogin/TouchlessLoginUrl";
import VisitorUrl from "./components/VisitorConfirm/VisitorUrl";
import Signup from "./components/Users/Signup";
import Home from "./components/pages/Home";

import Footer from "./components/Footer";

import Login from "./components/Login";
import Signup from "./components/Signup";

import axios from 'axios';


function App() {

  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = () => {
    setAuthenticated(true)
  }

  const deAuthenticate = () => {
    setAuthenticated(false)
  }

  const logout = () => {
    axios.get('/api/users/logout')
      .then(function (data) {
        this.deAuthenticate();
        window.location.reload();
      }.bind(this)).catch(function (err) {
        console.log(err);
      });
  }

  return (
    <Router>
      {/* <ThemeProvider theme={lightTheme}> */}
      <>
        {/* <GlobalStyles /> */}
        <NavTabs authenticated={ authenticated }/>
        
        <Route exact path="/login" render={props => 
            <Login
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />}
          />
          <Route exact path="/signup" render={props => 
            <Signup
              {...props}
              authenticate={authenticate}
              deAuthenticate={deAuthenticate}
              authenticated={authenticated}
              logout={logout}
            />} 
          />

        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/visitorconfirm/:id" component={VisitorUrl} />
        <Route exact path="/touchlesslogin/:id" component={TouchlessLoginUrl} />
        <Route path="/lobbylogin" component={LobbyLogin} />
        <Route path="/videochat" component={VideoChat} />
        {/* <Route exact path="/books/:id">
          <Detail />
        </Route> */}
        <Route path="/employeedirectory" component={EmployeeDirectory} />
        {/* <Route path="/employees" component={Employees} /> */}

        {/* <Footer /> */}
      </>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
