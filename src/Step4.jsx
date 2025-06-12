import { useContext } from "react";
import { FormContext } from "./FormContext";
import { useNavigate } from "react-router-dom";

export default function Step4() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
        imageFile: file,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // You can navigate or trigger final submission logic
    navigate("/finished");
    // navigate("/summary"); // optional
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Step 4: Projects & Image</h2>

      <div className="mb-3">
        <label htmlFor="image" className="form-label">Upload your image</label>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          id="image"
          onChange={handleImageUpload}
        />
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            className="img-thumbnail mt-2"
            style={{ maxHeight: "150px" }}
          />
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="project1" className="form-label">Your Top Project</label>
        <textarea
          id="project1"
          className="form-control"
          rows="3"
          value={formData.project1 || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, project1: e.target.value }))}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="project2" className="form-label">Your Second Project</label>
        <textarea
          id="project2"
          className="form-control"
          rows="3"
          value={formData.project2 || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, project2: e.target.value }))}
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="project3" className="form-label">Your Third Project</label>
        <textarea
          id="project3"
          className="form-control"
          rows="3"
          value={formData.project3 || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, project3: e.target.value }))}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Finish
      </button>
    </form>
  );
}
