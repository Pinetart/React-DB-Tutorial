import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
