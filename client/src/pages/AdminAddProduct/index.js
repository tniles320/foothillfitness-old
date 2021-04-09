import { useState } from "react";
import API from "../../utils/API";
import AddProduct from "../../components/AddProduct";
import AdminNav from "../../components/AdminNav";
import ProductPreview from "../../components/ProductPreview";

function AdminAddProduct() {
  const [file, setFile] = useState();
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    subCategory: "",
    image: "",
    description: "",
    brand: "",
    price: "",
    quantity: "",
    sale: false,
    salePrice: "",
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    await API.addUpload(formData).then((res) => {
      if (res.status === 422) {
        alert("Error uploading image");
      } else {
        setNewProduct({ ...newProduct, image: res.data });
        alert("Image uploaded!");
      }
    });
  };
  const handleFilechange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (newProduct.category === "strength") {
      API.addStrength(newProduct).then((res) => {
        if (res.status === 422) {
          alert("Error adding product");
        } else {
          alert("New Product added successfully!");
        }
      });
    } else if (newProduct.category === "cardio") {
      API.addCardio(newProduct).then((res) => {
        if (res.status === 422) {
          alert("Error adding product");
        } else {
          alert("New Product added successfully!");
        }
      });
    } else {
      alert("Please choose a category");
      return;
    }
  };

  return (
    <div>
      <AdminNav />
      <AddProduct
        handleUpload={handleUpload}
        handleFilechange={handleFilechange}
        handleProductSubmit={handleProductSubmit}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
      />
      <ProductPreview newProduct={newProduct} />
    </div>
  );
}

export default AdminAddProduct;
