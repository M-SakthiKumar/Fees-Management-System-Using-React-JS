import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentListing=()=>{
    const[data,setData]=useState("")
  const navigation=useNavigate();



    useEffect(() => {
        fetch("http://localhost:3000/Student_Details")
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setData(data);
          })
          .catch((err) => console.error(err.message));
      }, []);

      const handelDetails=(id)=>{
        navigation("/Student/Details/"+id)
          }
        
          const handelEdit=(id)=>{
            navigation(`/Student/Edit/${id}`)
          }
        
          const handelDelete=(id)=>{
            if(window.confirm("Do You Want to Remove?"))
            {
              fetch("http://localhost:3000/Student_Details/"+id, {
                method: "DELETE",
               
              })
                .then((res) => {
                  alert('Removed Successfully');
                  window.location.reload()
                })
                .catch((err) => console.error(err.message));
            }
            }
    return(
        <>
                <div className="card">
          <div className="card-title">
            <h2 className="text-center mt-2">List of Students </h2>
          </div>
          <div className="card-body">
            <div className="Divbtn mx-2 mb-1" style={{float:"right"}}>
              <Link to="/Student/Create" className="btn btn-success m-2 fs-6 fw-bold">Add New Record (+)</Link>
            </div>
            
            <table className="table  text-center table-bordered align-middle  table-hover">
              <thead className="table-light">
                <tr>
                {/* <th>S.No</th> */}
                  <th>Reg-No</th>
                  <th >Name</th>
                  <th>Course</th>
                  <th>Fees Amount (RS)</th>
                  <th>pending Amount (RS)</th>
                  <th>Status</th>
                  <th>Read</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  
                </tr>
              </thead>
            
              <tbody>
                {data && data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.Course}</td>
                    <td>{item.courseFees}</td>
                    <td>{item.pendingFees}</td>
                    <td>{item.status}</td>
                    <td>
                       <button onClick={()=>handelDetails(item.id)} className="btn btn-primary mx-1 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg></button> 

                    </td>
                    <td>
                      <button onClick={()=>handelEdit(item.id)} className="btn btn-success mx-1 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg></button>

                    </td>
                    <td>
                    <button onClick={()=>handelDelete(item.id)} className="btn btn-danger mx-1 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg></button>

                    </td>
                  </tr>
                ))}

                
              </tbody>

            </table>
          </div>
        </div>
        </>
    )
}
export default StudentListing