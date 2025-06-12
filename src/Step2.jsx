import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";

export default function Step2() {
  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/step3");
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Step 2: Education & Experience</h2>
      <form onSubmit={handleSubmit} className="needs-validation">
        <div className="mb-3">
          <label htmlFor="college" className="form-label">
            What is the name of your college?
          </label>
          <input
            type="text"
            id="college"
            className="form-control"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                college: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            What is your address?
          </label>
          <input
            type="text"
            id="address"
            className="form-control"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Your Prior Experience
          </label>
          <textarea
            id="experience"
            className="form-control"
            rows="4"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                experience: e.target.value,
              }))
            }
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </form>
    </div>
  );
}
