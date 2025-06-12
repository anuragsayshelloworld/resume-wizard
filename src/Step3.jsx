import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";

export default function Step3() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/step4");
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Step 3: Skills & Objective</h2>

      <div className="mb-3">
        <label htmlFor="skill1" className="form-label">Skill 1</label>
        <input
          type="text"
          id="skill1"
          className="form-control"
          value={formData.skill1 || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, skill1: e.target.value }))}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="skill2" className="form-label">Skill 2</label>
        <input
          type="text"
          id="skill2"
          className="form-control"
          value={formData.skill2 || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, skill2: e.target.value }))}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="skill3" className="form-label">Skill 3</label>
        <input
          type="text"
          id="skill3"
          className="form-control"
          value={formData.skill3 || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, skill3: e.target.value }))}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="objective" className="form-label">Objective</label>
        <textarea
          id="objective"
          className="form-control"
          rows="4"
          value={formData.objective || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, objective: e.target.value }))}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-success w-100">
        Submit
      </button>
    </form>
  );
}
