import { FormProvider } from "./FormContext";
import Questions from "./Questions";
import Results from "./Results";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Questions />
            </div>
            <div className="col-6">
              <Results />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </FormProvider>
  );
}
