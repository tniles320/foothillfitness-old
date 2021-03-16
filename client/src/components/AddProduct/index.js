import { useState } from "react";

const strengthCategory = [
  "Barbells",
  "Dumbbells",
  "Plates",
  "Machines",
  "Racks",
  "Benches",
  "All-in-one Gym",
  "Kettlebells",
  "Cable Machines",
  "Accessories",
];

const cardioCategory = [
  "Treadmills",
  "Bikes",
  "Stair Climbers",
  "Rowing Machines",
  "Eliptcals",
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
    <div>
      <div id="uploadImage">
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
          <input
            id="addName"
            type="text"
            placeholder="Product Name"
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          ></input>
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
          <textarea
            id="addDescription"
            type="text"
            placeholder="Product description"
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          ></textarea>
          <input
            id="addBrand"
            type="text"
            placeholder="Brand"
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
            }
          ></input>
          <input
            id="addPrice"
            type="text"
            placeholder="Price"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          ></input>
          <input
            id="addQuantity"
            type="text"
            placeholder="Quantity"
            onChange={(e) =>
              setNewProduct({ ...newProduct, quantity: e.target.value })
            }
          ></input>
          <button id="addFeaturedButton" onClick={handleProductSubmit}>
            Add New Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
