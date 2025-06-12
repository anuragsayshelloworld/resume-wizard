import { Routes, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Finished from './finished';

function Questions(){

  return <>
          <Routes>
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/step4" element={<Step4 />} />
            <Route path="/finished" element={<Finished />} />
            <Route path="*" element={<Step1 />} />
          </Routes>

         </>
}
export default Questions;

