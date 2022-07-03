import React from 'react'
import Header from './components/Header'
import './App.css';
import Form from './components/Form';
import Details from './components/Details';
import Separator from './components/Separator';
import { useState } from 'react';
function App() {
  const obj=[{
    name:"Suvendu Hatua",
    email:"suvenduhatua01@gmail.com",
    websiteUrl:"https://www.linkedin.com/in/suvendu-hatua/",
    imageUrl:"https://www.biowritingservice.com/wp-content/themes/tuborg/images/Executive%20Bio%20Sample%20Photo.png",
    gender:"male",
    java:"on",
    html:"on",
    css:"on"
  }];
  const [student, setStudent] = useState(obj);
  const handleClick=(newStudent)=>{
   console.log(newStudent);
  setStudent([...student,newStudent]);
  }
  return (
    <div>
      <Header title="Haldia Institute Of Technology" />
      <div className=' content container my-5'>
        <Form handleClick={handleClick}/>
        <Separator/>
        <Details student={student}/> 
       
      </div>
    </div>
  )
}

export default App