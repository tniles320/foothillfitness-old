import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cardio from "./pages/Cardio";
import Strength from "./pages/Strength";
import Brands from "./pages/Brands";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import AdminFeatured from "./pages/AdminFeatured";
import AdminAddProduct from "./pages/AdminAddProduct";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/brands">
            <Brands />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/cardio">
            <Cardio />
          </Route>
          <Route exact path="/strength">
            <Strength />
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
          <Route exact path="/admin/add-product">
            <AdminAddProduct />
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
