import Header from "../../components/Header";
import Nav from "../../components/Nav";
import FeaturedCarousel from "../../components/FeaturedCarousel";
import ServiceComponent from "../../components/ServiceComponent";
import PopularCategories from "../../components/PopularCategories";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <FeaturedCarousel />
      <ServiceComponent />
      <PopularCategories />
      <Footer />
    </div>
  );
}

export default Home;
