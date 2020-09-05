import React from 'react';
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
import ModalPage from "./components/MDB/ModalPage/ModalPage";
import LobbyLogin from "./components/LobbyLogin";
import VideoChat from "./components/ReactVideoChat/App";
import Chat from "./components/Chat";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      {/* <ThemeProvider theme={lightTheme}> */}
      <>
        {/* <GlobalStyles /> */}
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/todo" component={Todo} />
        <Route path="/modalpage" component={ModalPage} />
        <Route path="/booksearch" component={BookSearch} />
        <Route path="/lobbylogin" component={LobbyLogin} />
        <Route path="/videochat" component={VideoChat} />
        <Route path="/chat" component={Chat} />
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
