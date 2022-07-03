import React from 'react'
function Details(props) {
  return (
    <div className="container detail" >
      <h2 className='text-center mb-3' style={{ color: "#0AA1DD" }}>Enrollments Students</h2>
      <div className='students-detail'>
        <div className="description">
          <p>Description</p>
          <p>Image</p>
        </div>
        {props.student.map((stu, index) => {
  
          return (<div className='student' key={index} >
            <div className='my-2'>
              <h5>{stu.name}</h5>
              <p>{stu.gender}</p>
              <p>{stu.email}</p>
              <p><a href={stu.websiteUrl}>{stu.websiteUrl.slice(0,25)}...</a></p>
              <p>{stu.java==="on"?(<i class="fa-solid fa-circle-check"><span className='mx-1'>Java</span></i>):null}  {stu.html==="on"?(<i class="fa-solid fa-circle-check"><span className='mx-1'>html</span></i>):null} {stu.css==="on"?(<i class="fa-solid fa-circle-check"><span className='mx-1'>css</span></i>):null}</p>
            </div>
            <div >
              <img className='card-image my-3' src={stu.imageUrl} alt="" />
            </div>
          </div>);
        })}

      </div>
    </div>
  )
}

export default Details