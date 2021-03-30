import { useContext } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import AdminNav from "../../components/AdminNav";
import FeaturedCarousel from "../../components/FeaturedCarousel";
import ServiceComponent from "../../components/ServiceComponent";
import ContactComponent from "../../components/ContactComponent";
import InstagramComponent from "../../components/InstagramComponent";
import Footer from "../../components/Footer";
import AdminContext from "../../utils/AdminContext";

function Home() {
  const { loggedIn } = useContext(AdminContext);

  return (
    <div>
      {loggedIn ? <AdminNav /> : <Nav />}
      <Header />
      <FeaturedCarousel />
      <ServiceComponent />
      <ContactComponent />
      <InstagramComponent />
      <Footer />
    </div>
  );
}

export default Home;
