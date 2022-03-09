import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch> */}
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </BrowserRouter>
      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
