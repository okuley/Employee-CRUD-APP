import { useState,useEffect } from "react";
function Home(){
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [dob,setDob]=useState("");
  const [employees,setEmployees]=useState([]);
  
function senddata(){
const employee={firstName,lastName,email,dob}
console.log(employee)

fetch('http://localhost:8080/api/vi/employee',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(employee)
}).then(res => res.json())
.then(res => console.log(res));
 
}

useEffect(()=>{
fetch('http://localhost:8080/api/vi/employee')
.then(res=>res.json())
.then((result)=>{
  setEmployees(result);
  
}
)
},[])

  return(
    
     <div className="container ">
      <div className="row container">
      <div className="col-md-6" >
       <h2>Add Employee</h2> 
       <form  className="">
       <div className="">
       <label htmlFor="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} 
     onChange={(e)=>setFirstName(e.target.value)}/>
    </div>
  <div className="">
  <label htmlFor="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} 
    onChange={(e)=>setLastName(e.target.value)} />
  </div>
  <div className="">
  <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name="email" value={email} 
    onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className="">
  <label htmlFor="dob" className="form-label">Date 0f Birth</label>
    <input type="date" className="form-control" id="dob" name="dob" value={dob} 
    onChange={(e)=>setDob(e.target.value)} />
  </div>
  <br/>
  <div className="d-flex justify-content-center">
  <button type="submit" onClick={senddata} className="btn btn-primary" >Submit</button>
  </div>
 

</form>

    </div>

      </div>
      <div className="container">
         <h1 className="">Employee Details</h1>
        {employees.map(employee=> (<div className="container" key={employee.id}>
        <ul className="list-group">
        <li className="list-group-item"> First Name : {employee.firstName} </li>
        <li  className="list-group-item">  Last Name : {employee.lastName} </li>
        <li  className="list-group-item">  Email : {employee.email} </li>
        <li  className="list-group-item">  DOB : {employee.dob} </li>
        <li  className="list-group-item">   Age :{employee.age} </li>
           </ul>
           
           <br/>
           <div className="d-flex justify-content-center">
           <button type="button" className="btn btn-warning mr-3">Update </button>
           <button type="button" className="btn btn-danger">Delete</button>
           </div>
          
           <br/>
           <br/>
           <br/>
          </div>)
          
          )}
      </div>

     </div>
    
    
  )

}
export default Home