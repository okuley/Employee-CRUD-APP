package com.example.demo.Employee;

import jakarta.persistence.Id;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path="api/vi/employee")
public class EmployeeController {
private final EmployeeService employeeService;

@Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @RequestMapping
   public List<Employee> getEmployees() {
            return employeeService.getEmployees();

        }
@PostMapping
        public String createNewEmployee(@RequestBody Employee employee){
    employeeService.addNewEmployee(employee);
       return "New Employee has been added";
        }
@DeleteMapping (path = "{employeeId}")
    public void deleteEmployee(@PathVariable("employeeId")  int employeeId){
employeeService.deleteEmployee(employeeId);
}

@PutMapping(path = "{employeeId}")
public void updateEmployee(@PathVariable ("employeeId") int employeeId,
                           @RequestParam (required = false) String firstName,
                           @RequestParam (required = false) String lastName,
                           @RequestParam (required = false) String email,
                           @RequestParam (required = false) LocalDate dob){
    employeeService.updateEmployee(employeeId,firstName,lastName,email,dob);

}

}

