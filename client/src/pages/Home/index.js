import { useContext } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import AdminNav from "../../components/AdminNav";
import FeaturedCarousel from "../../components/FeaturedCarousel";
import ServiceComponent from "../../components/ServiceComponent";
import PopularCategories from "../../components/PopularCategories";
import Footer from "../../components/Footer";
import AdminContext from "../../utils/AdminContext";

function Home(props) {
  const { loggedIn } = useContext(AdminContext);

  return (
    <div>
      {loggedIn ? <AdminNav handleLogout={props.handleLogout} /> : <Nav />}
      <Header />
      <FeaturedCarousel />
      <ServiceComponent />
      <PopularCategories />
      <Footer />
    </div>
  );
}

export default Home;
