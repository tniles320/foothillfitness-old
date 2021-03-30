import "./style.css";

function AddFeatured(props) {
  const {
    handleUpload,
    handleFilechange,
    handleFeaturedSubmit,
    newFeatured,
    setNewFeatured,
  } = props;

  return (
    <div className="addFeaturedContainer">
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
      <div id="featuredContent">
        <form id="featuredForm" onSubmit={handleFeaturedSubmit}>
          <label htmlFor="addHeadline">Headline</label>
          <input
            id="addHeadline"
            type="text"
            placeholder="Headline"
            onChange={(e) =>
              setNewFeatured({ ...newFeatured, headline: e.target.value })
            }
          ></input>
          <label htmlFor="addDescription">Additional info</label>
          <input
            id="addDescription"
            type="text"
            placeholder="Additional info"
            onChange={(e) =>
              setNewFeatured({ ...newFeatured, description: e.target.value })
            }
          ></input>
          <button id="addFeaturedButton" onClick={handleFeaturedSubmit}>
            Add Featured Content
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFeatured;
