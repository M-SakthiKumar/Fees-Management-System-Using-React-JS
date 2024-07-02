import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const StudentEdit=()=>{
    const{studentid}=useParams();

    const[id,setid]=useState("")
    const[name,setname]=useState("")
    const[Course,setCourse]=useState("")
    const[courseFees,setCoursefees]=useState("")
    const[pendingFees,setpendingFees]=useState("")
    const[status,setstatus]=useState("")
    const navigation=useNavigate()

    useEffect(()=>{
        fetch("http://localhost:3000/Student_Details/"+studentid)
       
             .then((res) =>{
              return res.json()
             } )
            .then((data) => {
              setid(data.id)
              setname(data.name)
              setCourse(data.Course)
              setCoursefees(data.courseFees)
              setpendingFees(data.pendingFees)
              setstatus(data.status)
     
     
            })
             .catch((err) => console.error(err.message));
       
       },[])
    
    
       function handleSubmit(e) {
        e.preventDefault();
        const studentData = {
          id,
          name,
          Course,
          courseFees,
          pendingFees,
          status
        };
        fetch("http://localhost:3000/Student_Details/"+studentid, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(studentData) 
        })
          .then((res) => {
            alert('Saved Successfully');
            navigation('/');
          })
          .catch((err) => console.error(err.message));
      }
    
    
    

    return(
        <>
                <div className="row">
    <div className="offset-lg-3 col-lg-6">
        <div className="container">
            <div className="card" >
                <div className="card-title">
<h2 className="fs-3 fw-bold text-uppercase text-center mt-3"> Update Student Details</h2>
                </div>
<div className="card-body m-2">
<form className="row g-3 d-flex flex-column align-items-center " onSubmit={handleSubmit}>
<div className="col-md-7  ">
    <label htmlFor="inputAddress" className="form-label  text-uppercase fw-bolder">Register NO:</label>
    <input value={id} onChange={(e)=>setid(e.target.value)} disabled="disabled" type="number" className="form-control" id="inputAddress" placeholder="Enter the Register Number"/>
  </div>

  <div className="col-md-7 mt-2">
    <label htmlFor="inputAddress" className="form-labe text-uppercase fw-bolder">Enter the name</label>
    <input value={name} onChange={(e)=>setname(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="Enter the Student Name"/>
  </div>

  <div className="col-md-7 mt-2">
    <label htmlFor="inputState" className="form-label text-uppercase fw-bolder">Course:</label>
    <select value={Course} onChange={(e)=>setCourse(e.target.value)} id="inputState" className="form-select">
      <option  value="course">Select a Course</option>
      <option value="Front-end-development">Front-end-development</option>
      <option  value="Back-end-development">Back-end-development</option>
      <option  value="Full-stack-webdevelopment"> Full-stack-Webdevelopment</option>
      <option value="Automation-testing">Automation-testing</option>
      <option value="manual-testing">manual-testing</option>

    </select>
  </div>

  <div className="col-md-7 mt-2">
    <label htmlFor="inputAddress" className="form-label text-uppercase fw-bolder">Fees Amount:</label>
    <input value={courseFees} onChange={(e)=>setCoursefees(e.target.value)} type="number" className="form-control" id="inputAddress" placeholder="Enter the Fees Amount"/> 

  </div>

  <div className="col-md-7 mt-2">
    <label htmlFor="inputAddress" className="form-label text-uppercase fw-bolder">pending Amount:</label>
      <input value={pendingFees} onChange={(e)=>setpendingFees(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="Enter the pending Amount"/>
 
  </div>

  <div className="col-md-7 mt-2">
    <label htmlFor="inputState" className="form-label text-uppercase fw-bolder">Status:</label>
    <select value={status} onChange={(e)=>setstatus(e.target.value)} id="inputState" className="form-select">
      <option value="status" >Select a Status</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">complete</option>
      <option value="discontinued">DisContinued</option>
    </select>
  </div>
  <div className="col-12 d-flex justify-content-center ">
    <button type="submit" className="btn btn-success fw-bold text-light">Save</button>
    <Link to="/" className="btn btn-danger fw-bold text-light mx-1 "> Back  </Link>
  </div>
</form>
</div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default StudentEdit