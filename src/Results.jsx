import {useContext} from 'react';
import { FormContext } from './FormContext';

export default function Results(){
    const { formData } = useContext(FormContext);
  return <h1>{formData.name}</h1>  
}