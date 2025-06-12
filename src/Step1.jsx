import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";

export default function Step1() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/step2");
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Step 1: Your Information</h2>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          What is your full name?
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          What is your email address?
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="form-label">
          What is your phone number?
        </label>
        <input
          type="tel"
          id="phone"
          className="form-control"
          value={formData.phone}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, phone: e.target.value }))
          }
          required
          placeholder="Enter your phone number"
        />
      </div>

      <button className="btn btn-primary w-100">
        Next
      </button>
    </div>
    </form>
  );
}
