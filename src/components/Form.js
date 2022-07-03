import React from 'react'
import Alert from './Alert';
import { useState } from 'react';
function Form(props) {
    const [alert, setAlert] = useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();
     const data = new FormData(event.target);
     const name=data.get("name");
     const email=data.get("email");
     const websiteUrl=data.get("websiteUrl");
     const imageUrl=data.get("imageUrl");
     const gender=data.get("gender");
     const java=data.get("java");
     const html=data.get("html");
     const css=data.get("css");
     const newStudent={
        name:name,
        email:email,
        websiteUrl:websiteUrl,
        imageUrl:imageUrl,
        gender:gender,
        java:java===null?"off":java,
        html:html===null?"off":html,
        css:css===null?"off":css
     }
     setTimeout(() => {
       setAlert(false); 
     }, 1500);
     setAlert(true);
      event.target.reset();
      props.handleClick(newStudent);
    }
    return (
        <div className="container input-form">
            <form  onSubmit={handleSubmit} >
            <div className="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label text">Name:</label>
                <div className="col-sm-10 ">
                    <input type="text" className="form-control" id="name" name='name' placeholder='Enter your name' required autoComplete='off'/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label text">Email:</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" name='email' placeholder='Enter your email' required autoComplete='off'/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="website" className="col-sm-2 col-form-label text">Website:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="websiteUrl" id="website" placeholder='Enter your website url' required autoComplete='off' />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="image" className="col-sm-2 col-form-label text">Image Url:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"name='imageUrl' id="image" placeholder='Enter your image url' required autoComplete='off'/>
                </div>
            </div>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0 text">Gender:</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="male" required />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="female" required />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                </div>
            </fieldset>

            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0 text">Skills:</legend>
                <div className="col-sm-10 d-flex ">
                <div className="form-check mx-1">
                    <input className="form-check-input" type="checkbox" id="java" name="java" />
                    <label className="form-check-label"  htmlFor="java">Java</label>
                </div>

                <div className="form-check mx-1">
                    <input className="form-check-input" type="checkbox" id="html" name="html" />
                    <label className="form-check-label"  htmlFor="html">HTML</label>
                </div>
                <div className="form-check mx-1">
                    <input  className="form-check-input" type="checkbox" id="css" name="css" />
                    <label  className="form-check-label" htmlFor="css">CSS</label>
                </div>
                </div>
            </fieldset>

            <button type="submit" className="btn btn-primary mx-3 my-4">Enroll Student</button>
            <button type='reset' className="btn btn-danger mx-3 my-4">Clear</button>
        </form>
        {alert===true?<Alert/>:null}
        </div>
    )
}

export default Form