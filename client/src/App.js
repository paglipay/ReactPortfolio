import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Todo from "./components/Todo/App";
import BookSearch from "./components/BookSearch/pages/Books";
import Detail from "./components/BookSearch/pages/Detail";
import EmployeeDirectory from "./components/EmployeeDirectory/App";
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
    axios.get('/apis/users/logout')
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
        <NavTabs authenticate={ authenticated }/>
        
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
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/todo" component={Todo} />
        <Route path="/booksearch" component={BookSearch} />
        <Route exact path="/books/:id">
          <Detail />
        </Route>
        <Route path="/employeedirectory" component={EmployeeDirectory} />
        <Footer />
      </>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
