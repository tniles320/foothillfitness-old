import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import AdminFeatured from "./pages/AdminFeatured";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      <Router>
        <Switch>
          <Route exact path="/admin">
            <Home />
          </Route>
          <Route exact path="/admin/featured">
            <AdminFeatured />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
