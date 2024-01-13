import { useState,useEffect } from "react";
function Home(){
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [dob,setDob]=useState("");
  const [employees,setEmployees]=useState([]);
  const [newFirstName,setNewFirstName]=useState("");
  const [newLastName,setNewLastName]=useState("");
  const [newEmail,setNewEmail]=useState("");
  const [newDob,setNewDob]=useState("");
  const [newEmployee,setNewEmployee]=useState([]);
  

  
  
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
.then(() => {
  setEmployees(employees)
});
 
}

useEffect(()=>{
fetch('http://localhost:8080/api/vi/employee')
.then(res=>res.json())
.then((result)=>{
  setEmployees(result);
  
}
)
},[])

function getEmployee(id){
  
  fetch(`http://localhost:8080/api/vi/employee/${id}`)
  .then(res=>res.json())
  .then((result)=>{
    setNewEmployee(result)
    console.log(result)
})
}  
  
  
  

function deleteemp(id){
   
  if (window.confirm("Are you sure you want to delete this employee?"))
  {
    fetch(`http://localhost:8080/api/vi/employee/${id}`,
  {
    method: 'DELETE'
}).then(() => {
  setEmployees(employees.filter(em => em.id !== id))
})
.then(res => console.log(res));

alert("Employee with ID " + id + " was deleted successfully");
  }

  

}

function editemployee(id){
  const employee = {id,firstName,lastName,email,dob} 
  console.log(employee)
  if (window.confirm("Are you sure you want to edit this employee?"))
  {
    fetch(`http://localhost:8080/api/vi/employee/${id}`,
  {
    method:'PUT',
    body: JSON.stringify(employee),
      headers: {
        "Content-type": "application/json",
      },
}).then(() => {
  setEmployees(employees)
})
.then(res => console.log(res));

alert("Employee with ID " + id + " was updated successfully");
  }

}



  return(
    
     <div className="container ">
      <div className="row justify-content-center">
      <div className="" >
       <h2 className="">Add Employee</h2> 
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
  <button type="submit" onClick={senddata} className="btn btn-primary" >Add Employee</button>
  </div>
 

</form>

    </div>

      </div>
      <br/>
      <div className="container-fluid">
         <h1 className="text-center">Employee Details</h1>
        
        <table className="table ">
        <thead>
          <tr>
            <th>Id</th>
            <th>FistName</th>
            <th>FistName</th>
            <th >Email</th>
            <th >DOB</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {employees.map(employee=> (<tr className="container-fluid" key={employee.id}>
          
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td >{employee.email}</td>
            <td >{employee.dob}</td>
            <td>{employee.age}</td>
            <td><button type="button" className="btn btn-warning m-3" data-toggle="modal" data-target="#modal1" onClick={()=>getEmployee(employee.id)} >Edit</button>
            
            <div className="modal" id="modal1"  role="dialog" aria-labelledby="modallabel1" aria-hidden= "true">
            <div className="row justify-content-center">
              <div className="col-md-4">
      <div className="modal-content" >
       <h2 className="modal-header">Edit Employee</h2> 
       <form  className="">
       <div className="">
       <label htmlFor="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" name="firstName" defaultValue={newEmployee.firstName} 
     onChange={(e)=>setFirstName(e.target.value)}/>
    </div>
  <div className="">
  <label htmlFor="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" name="lastName" defaultValue={newEmployee.lastName} 
    onChange={(e)=>setLastName(e.target.value)} />
  </div>
  <div className="">
  <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name="email" defaultValue={newEmployee.email} 
    onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className="">
  <label htmlFor="dob" className="form-label">Date 0f Birth</label>
    <input type="date" className="form-control" id="dob" name="dob" defaultValue={newEmployee.dob} 
    onChange={(e)=>setDob(e.target.value)} />
  </div>
  <br/>
  <div className="d-flex justify-content-center modal-footer">
  <button type="submit"  className="btn btn-primary" onClick={()=>editemployee(newEmployee.id)} >Update Employee</button>
  </div>
 

</form>

    </div>

      </div>
      </div>
      </div>


            &nbsp;
            <button type="button" className="btn btn-danger" onClick={()=>deleteemp(employee.id)}>Delete</button>
            </td>

          </tr>

          
          )
          
          )}
        </tbody>
         </table>
          
          
             
       
      </div>

     </div>
    
    
  )

}
export default Home