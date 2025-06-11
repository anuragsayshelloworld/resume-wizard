import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";

export default function Step1() {
  const { formData, setFormData } = useContext(FormContext); // ✅ lowercase
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
    const newData = {
      ...formData,
      name: name,
      email: email,
      phone: phone
    };

    setFormData(newData);
    navigate("/step2", { replace: true });
  };

  return (
    <>
      <label htmlFor="name">What is your full name?</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">What is your email address?</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="phone">What is your phone number?</label>
      <input type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button onClick={handleClick}>Next</button>
    </>
  );
}
