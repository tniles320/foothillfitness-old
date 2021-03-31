import Nav from "../../components/Nav";
import BrandList from "../../components/BrandList";
import EmailComponent from "../../components/EmailComponent";
import Footer from "../../components/Footer";
import "./style.css";

function Brands() {
  return (
    <div>
      <Nav />
      <div className="brandPageContainer">
        <BrandList />
        <div className="brandEmail">
          <div className="brandEmailHeader">
            Have a question about any of these brand's products?
          </div>
          <EmailComponent subject="a brand" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Brands;
