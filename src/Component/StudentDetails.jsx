import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const StudentDetails=()=>{
    const{studentid}=useParams();
const[studentData,setStudentData]=useState({})
const navigation=useNavigate();


useEffect(()=>{

  fetch("http://localhost:3000/Student_Details/"+studentid)
  .then((res) => res.json())
  .then((resp)=>{
  console.log(resp)

    setStudentData(resp)
  }).catch((err)=>{
    console.log(err.message)
  })
  
},[])

const handelEdit=(id)=>{
  navigation(`/Student/Edit/${id}`)
}
    return(
        <>

<div className="d-flex w-100  align-item-center justify-content-center my-5  bg-light">

<div className=" card text-dark w-50 border bg-white shadow text-capitalize pb-2 rounded">
<div className="card-header bg-light text-dark fs-3  fw-bold p-2 text-center">Student Details</div>
<div className="card-body text-center fw-bold">
   <p className="card-text">Register Number:{studentData.id} </p>
  <p className="card-text">Name:{studentData.name}</p>
  <p className="card-text">Course:{studentData.Course}</p>
  <p className="card-text">Fees Amount (RS):{studentData.courseFees}</p>
  <p className="card-text">pending Amount (RS):{studentData.pendingFees}</p>
  <p className="card-text">Status:{studentData.status}</p>
  
 

<Link to="/" className="btn btn-danger fw-bold text-light mx-2 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></Link>

<button onClick={()=>handelEdit(studentData.id)} className="btn btn-success fw-bold mx-1 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg></button>

</div>
</div>
</div>

        </>
    )
}
export default StudentDetails