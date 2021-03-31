import "./style.css";

function AddBrand(props) {
  const {
    handleUpload,
    handleFilechange,
    handleFeaturedSubmit,
    newBrand,
    setNewBrand,
  } = props;

  return (
    <div className="addBrandContainer">
      <div id="uploadImage">
        <label htmlFor="uploadForm">Upload Image</label>
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
      <div className="addBrandContent">
        <form className="brandForm" onSubmit={handleFeaturedSubmit}>
          <label htmlFor="addBrandName">Brand Name</label>
          <input
            id="addBrandName"
            type="text"
            placeholder="Name"
            onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
          ></input>
          <label htmlFor="addBrandLink">Link to brand website</label>
          <input
            id="addBrandLink"
            type="text"
            placeholder="Link to website"
            onChange={(e) => setNewBrand({ ...newBrand, link: e.target.value })}
          ></input>
          <button className="addBrandButton" onClick={handleFeaturedSubmit}>
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBrand;
