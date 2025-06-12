import { useContext, useRef } from "react";
import { FormContext } from "./FormContext";

export default function Results() {
  const { formData } = useContext(FormContext);
  const printRef = useRef();
   function openInNewWindow() {
    const content = printRef.current.innerHTML;
    const newWindow = window.open("", "_blank", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title>Your CV</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
          <style>body { padding: 20px; }</style>
        </head>
        <body>${content}</body>
                <script>
          window.onload = function() {
            window.print();
          };
        </script>

      </html>
    `);
    newWindow.document.close();
    newWindow.focus();
    
  }

  return (
    <>
    <button className="btn btn-primary" onClick={openInNewWindow}>Print</button>
    <div ref={printRef} className="container mt-4 p-4 border rounded" style={{ maxWidth: "700px", backgroundColor: "#f8f9fa" }}>
      {/* Header with image and name */}
      <div className="d-flex align-items-center mb-4">
        {formData.image && (
          <img
            src={formData.image}
            alt={formData.name}
            className="rounded-circle me-3"
            style={{ width: 100, height: 100, objectFit: "cover" }}
          />
        )}
        <div>
          <h1 className="mb-0">{formData.name || "Your Name"}</h1>
          <p className="text-muted mb-1">{formData.email || "your.email@example.com"}</p>
          <p className="text-muted">{formData.phone || "Phone number"}</p>
        </div>
      </div>

      {/* Objective */}
      {formData.objective && (
        <>
          <h4>Objective</h4>
          <p>{formData.objective}</p>
        </>
      )}

      {/* Education */}
      {(formData.college || formData.address) && (
        <>
          <h4>Education</h4>
          <p>
            <strong>College:</strong> {formData.college || "N/A"}
            <br />
            <strong>Address:</strong> {formData.address || "N/A"}
          </p>
        </>
      )}

      {/* Experience */}
      {formData.experience && (
        <>
          <h4>Experience</h4>
          <p>{formData.experience}</p>
        </>
      )}

      {/* Skills */}
      {(formData.skill1 || formData.skill2 || formData.skill3) && (
        <>
          <h4>Skills</h4>
          <ul>
            {formData.skill1 && <li>{formData.skill1}</li>}
            {formData.skill2 && <li>{formData.skill2}</li>}
            {formData.skill3 && <li>{formData.skill3}</li>}
          </ul>
        </>
      )}

      {/* Projects */}
      {(formData.project1 || formData.project2 || formData.project3) && (
        <>
          <h4>Projects</h4>
          <ol>
            {formData.project1 && <li>{formData.project1}</li>}
            {formData.project2 && <li>{formData.project2}</li>}
            {formData.project3 && <li>{formData.project3}</li>}
          </ol>
        </>
      )}
    </div>
    </>
  );
}
