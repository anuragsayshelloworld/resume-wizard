// FormContext.jsx
import { createContext, useState } from 'react';

// Create the context
export const FormContext = createContext();

// Create the provider component
export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    address: '',
    experience: '',
    skill1: '',
    skill2: '',
    skill3: '',
    objective: '',
    image: '',
    project1: '',
    project2: '',
    project3: ''
    // add more fields as needed
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
