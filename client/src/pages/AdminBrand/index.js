import { useState } from "react";
import AdminNav from "../../components/AdminNav";
import AddBrand from "../../components/AddBrand";
import BrandPreview from "../../components/BrandPreview";
import BrandList from "../../components/BrandList";
import API from "../../utils/API";
import "./style.css";

function AdminBrand() {
  const [file, setFile] = useState();
  const [newBrand, setNewBrand] = useState({
    name: "",
    image: "",
    link: "",
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    await API.addUpload(formData).then((res) => {
      if (res.status === 422) {
        alert("Error uploading image");
      } else {
        setNewBrand({ ...newBrand, image: res.data });
        alert("Image uploaded!");
      }
    });
  };
  const handleFilechange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFeaturedSubmit = (e) => {
    e.preventDefault();
    API.addBrand(newBrand).then((res) => {
      if (res.status === 422) {
        console.log(res);
        alert("Error adding content");
      } else {
        alert("Brand added successfully!");
      }
    });
  };
  return (
    <div>
      <AdminNav />
      <div className="adminBrandContainer">
        <AddBrand
          handleUpload={handleUpload}
          handleFilechange={handleFilechange}
          handleFeaturedSubmit={handleFeaturedSubmit}
          newBrand={newBrand}
          setNewBrand={setNewBrand}
        />
        <BrandPreview newBrand={newBrand} />
      </div>
      <BrandList />
    </div>
  );
}

export default AdminBrand;
