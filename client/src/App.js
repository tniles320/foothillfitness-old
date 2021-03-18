import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
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
import AdminLogin from "./pages/AdminLogin";
import ADMIN from "./utils/ADMIN";
import AdminContext from "./utils/AdminContext";

function App() {
  // look into setting res.data[0].session to state and using getUserSession to compare the two
  const [adminId, setAdminId] = useState({
    id: "",
  });
  const [adminLogin, setAdminLogin] = useState({
    loggedIn: true,
  });

  const handleAdminLogin = (username, password, e) => {
    e.preventDefault();
    ADMIN.login(username, password).then((res) => {
      console.log(res.data);
      if (res.data.user) {
        setAdminId({
          id: res.data.user,
        });
      }
      alert(res.data.message);
    });
  };

  const handleLogout = async () => {
    await ADMIN.logout(adminLogin.id).then((res) => {
      console.log("successfully logged out!");
      if (res.status === 200) {
        setAdminId({
          id: "",
        });
      }
      alert(res.data.message);
    });
  };

  useEffect(() => {
    ADMIN.getUserSession(adminId.id).then((res) => {
      console.log(res.data);
      if (res.data[0].userId === adminId.id) {
        setAdminLogin({
          loggedIn: true,
        });
      }
    });
  }, [adminId]);

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
                <Home handleLogout={handleLogout} />
              </Route>
              <Route exact path="/admin/featured">
                <AdminFeatured handleLogout={handleLogout} />
              </Route>
              <Route exact path="/admin/add-product">
                <AdminAddProduct handleLogout={handleLogout} />
              </Route>
              <Route exact path="/admin/cardio">
                <Cardio handleLogout={handleLogout} />
              </Route>
              <Route exact path="/admin/strength">
                <Strength handleLogout={handleLogout} />
              </Route>
              <Route exact path="/admin/cardio/:id">
                <CardioProduct handleLogout={handleLogout} />
              </Route>
              <Route exact path="/admin/strength/:id">
                <StrengthProduct handleLogout={handleLogout} />
              </Route>
              <Route exact path="/admin/login">
                <AdminLogin
                  handleAdminLogin={handleAdminLogin}
                  handleLogout={handleLogout}
                />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          ) : (
            // <Route exact path="/admin/login">
            //   <AdminLogin handleAdminLogin={handleAdminLogin} />
            // </Route>
            <Route>
              <NoMatch />
            </Route>
          )}
        </Router>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
