function AddFeatured(props) {
  const {
    handleUpload,
    handleFilechange,
    handleFeaturedSubmit,
    newFeatured,
    setNewFeatured,
  } = props;

  return (
    <div>
      <div id="uploadImage">
        <form id="uploadForm" onSubmit={handleUpload}>
          <input
            id="imageInput"
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
          <input
            id="healineInput"
            type="text"
            placeholder="Headline"
            onChange={(e) =>
              setNewFeatured({ ...newFeatured, headline: e.target.value })
            }
          ></input>
          <input
            id="description"
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
