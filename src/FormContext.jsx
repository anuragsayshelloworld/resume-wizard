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
    // add more fields as needed
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
