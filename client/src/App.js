import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Cardio from "./pages/Cardio";
import Strength from "./pages/Strength";
import Brands from "./pages/Brands";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CardioProduct from "./pages/CardioProduct";
import StrengthProduct from "./pages/StrengthProduct";
import NoMatch from "./pages/NoMatch";
import AdminFeatured from "./pages/AdminFeatured";
import AdminAddProduct from "./pages/AdminAddProduct";
import ADMIN from "./utils/ADMIN";
import AdminContext from "./utils/AdminContext";

function App() {
  const [adminLogin, setAdminLogin] = useState({
    loggedIn: true,
  });

  const handleAdminLogin = () => {
    ADMIN.getUser().then((res) => {
      if (res.data._id) {
        setAdminLogin({
          loggedIn: true,
        });
      }
    });
  };
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
          <Route exact path="/cardio/:id">
            <CardioProduct />
          </Route>
          <Route exact path="/strength/:id">
            <StrengthProduct />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      <AdminContext.Provider value={adminLogin}>
        <Router>
          {adminLogin.loggedIn ? (
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
              <Route exact path="/admin/cardio">
                <Cardio />
              </Route>
              <Route exact path="/admin/strength">
                <Strength />
              </Route>
              <Route exact path="/admin/cardio/:id">
                <CardioProduct />
              </Route>
              <Route exact path="/admin/strength/:id">
                <StrengthProduct />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          ) : (
            <Route exact path="/admin">
              <Home />
            </Route>
          )}
        </Router>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
