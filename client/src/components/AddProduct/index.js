import { useState } from "react";
import "./style.css";

const strengthCategory = [
  "Barbells",
  "Dumbbells",
  "Plates",
  "Machines",
  "Racks",
  "Benches",
  "Multi-use Machines",
  "Kettlebells",
  "Cable Machines",
  "Accessories",
];

const cardioCategory = [
  "Treadmills",
  "Bikes",
  "Stair Climbers",
  "Rowing Machines",
  "Ellipticals",
  "Accessories",
];

const SubCategoryList = (props) => {
  const { content } = props;
  if (content === undefined) {
    return null;
  } else {
    return <option value={content.toLowerCase()}>{content}</option>;
  }
};

function AddProduct(props) {
  const {
    handleUpload,
    handleFilechange,
    handleProductSubmit,
    newProduct,
    setNewProduct,
  } = props;

  const [categoryList, setCategoryList] = useState([]);

  const handleCategoryList = (category) => {
    if (category === "strength") {
      setCategoryList(strengthCategory);
    } else if (category === "cardio") {
      setCategoryList(cardioCategory);
    }
  };

  const handleCategoryChange = (e) => {
    setNewProduct({ ...newProduct, category: e.target.value });
    handleCategoryList(e.target.value);
  };

  return (
    <div className="addProductContainer">
      <div id="uploadImage">
        <label htmlFor="uploadForm">Click choose file, then upload photo</label>
        <form id="uploadForm" onSubmit={handleUpload}>
          <input
            id="addImage"
            type="file"
            name="myImage"
            accept="image/*"
            onChange={handleFilechange}
          />
          <input type="submit" value="Upload Photo" />
        </form>
      </div>
      <div id="productContent">
        <form id="productForm" onSubmit={handleProductSubmit}>
          <div className="nameDiv">
            <label htmlFor="addName">Name</label>
            <input
              id="addName"
              type="text"
              placeholder="Product Name"
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            ></input>
          </div>
          <div className="categoryDiv">
            <label htmlFor="addCategory">Category</label>
            <select
              id="addCategory"
              name="category"
              onChange={(e) => {
                handleCategoryChange(e);
              }}
            >
              <option value="">Category</option>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength</option>
            </select>
          </div>
          <div className="subCategoryDiv">
            <label htmlFor="addSubCategory">Sub Category</label>
            <select
              id="addSubCategory"
              name="subCategory"
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  subCategory: e.target.value,
                })
              }
            >
              <option value="">Sub Category</option>
              {categoryList.map((content, index) => {
                return <SubCategoryList content={content} key={index} />;
              })}
            </select>
          </div>
          <div className="descriptionDiv">
            <label htmlFor="addDescription">Description</label>
            <textarea
              id="addDescription"
              type="text"
              placeholder="Product description"
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="brandDiv">
            <label htmlFor="addBrand">Brand</label>
            <input
              id="addBrand"
              type="text"
              placeholder="Brand"
              onChange={(e) =>
                setNewProduct({ ...newProduct, brand: e.target.value })
              }
            ></input>
          </div>
          <div className="priceDiv">
            <label htmlFor="addPrice">Price</label>
            <input
              id="addPrice"
              type="text"
              placeholder="Price"
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            ></input>
          </div>
          <div className="quantityDiv">
            <label htmlFor="addQuantity">Quantity</label>
            <input
              id="addQuantity"
              type="text"
              placeholder="Quantity"
              onChange={(e) =>
                setNewProduct({ ...newProduct, quantity: e.target.value })
              }
            ></input>
          </div>
          <button id="addProductButton" onClick={handleProductSubmit}>
            Add New Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
