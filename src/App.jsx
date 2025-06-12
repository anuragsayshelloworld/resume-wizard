import { FormProvider } from "./FormContext";
import Questions from "./Questions";
import { BrowserRouter } from "react-router-dom";
import Results from "./Results";

export default function App(){
return <FormProvider>
<div className="container">
<div className="row">
<div className="col-6">
<BrowserRouter>
<Questions />
</BrowserRouter>
</div>
<div className="col-6">
<Results />
</div>
</div>
</div>
</FormProvider>
}

