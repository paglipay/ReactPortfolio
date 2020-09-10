import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import EmployeeDirectory from "./components/EmployeeDirectory/App";
import LobbyLogin from "./components/LobbyLogin";
// import Employees from "./components/Employees/components/pages";
import TouchlessLogin from "./components/TouchlessLogin";
import VisitorConfirm from "./components/VisitorConfirm";
import Signup from "./components/Users/Signup";
import Home from "./components/pages/Home";
function App() {
  return (
    <Router>
      {/* <ThemeProvider theme={lightTheme}> */}
      <>
        {/* <GlobalStyles /> */}
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/visitorconfirm/:id" component={VisitorConfirm} />
        <Route exact path="/touchlesslogin/:id" component={TouchlessLogin} />
        <Route path="/lobbylogin" component={LobbyLogin} />
        {/* <Route path="/videochat" component={VideoChat} />
        <Route exact path="/books/:id">
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
