import { useState } from "react";
import API from "../../utils/API";
import AddFeatured from "../../components/AddFeatured";
import FeaturedList from "../../components/FeaturedList";
import AdminNav from "../../components/AdminNav";

function AdminFeatured(props) {
  const [file, setFile] = useState();
  const [newFeatured, setNewFeatured] = useState({
    headline: "",
    description: "",
    link: "",
    image: "",
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    await API.addUpload(formData).then((res) => {
      if (res.status === 422) {
        alert("Error uploading image");
      } else {
        setNewFeatured({ ...newFeatured, image: res.data.filename });
        alert("Image uploaded!");
      }
    });
  };
  const handleFilechange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFeaturedSubmit = (e) => {
    e.preventDefault();
    API.addFeatured(newFeatured).then((res) => {
      if (res.status === 422) {
        console.log(res);
        alert("Error adding content");
      } else {
        alert("Featured Content added successfully!");
      }
    });
  };

  return (
    <div>
      <AdminNav handleLogout={props.handleLogout} />
      <AddFeatured
        handleUpload={handleUpload}
        handleFilechange={handleFilechange}
        handleFeaturedSubmit={handleFeaturedSubmit}
        newFeatured={newFeatured}
        setNewFeatured={setNewFeatured}
      />
      <FeaturedList />
    </div>
  );
}

export default AdminFeatured;
