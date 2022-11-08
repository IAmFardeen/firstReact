import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import FormInput from './Components/formInput';
import NewUser from './Components/NewUser';

function App() {
  const [formData,setFormData]=useState("")
   const formInput=(inputData)=>{
         setFormData(prev=>{
          return [inputData,...prev]
         })    
   }
   
   

  return(<div>
    <FormInput onSubmition={formInput}></FormInput>
   <NewUser Data={formData}></NewUser>
  </div>


  )
}

export default App;
