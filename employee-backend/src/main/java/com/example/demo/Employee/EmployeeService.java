package com.example.demo.Employee;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
public class EmployeeService {

private final EmployeeRepository employeeRepository;
@Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
/*
    public List<Employee> getEmployees() {
        return List.of(new Employee("Emma","Gyening",
                "ema@gmail.com", LocalDate.of(1991,12,13),32,1));
    }
*/
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public void addNewEmployee(Employee employee){
    employeeRepository.save(employee);
    }
public  void deleteEmployee( long EmployeeId){
      employeeRepository.deleteById(EmployeeId);
}
@Transactional
    public void updateEmployee(long employeeId,String firstName,String lastName,String email,LocalDate dob) {
        Employee employee=employeeRepository.findById(employeeId).
                orElseThrow(()-> new IllegalStateException("Employee with id" + employeeId + "does not exist") );

    if(firstName != null && firstName.length()>0 &&
            !Objects.equals(employee.getFirstName(),firstName)){
        employee.setFirstName(firstName);
    }
    if(lastName != null && lastName.length()>0 &&
            !Objects.equals(employee.getLastName(),lastName)){
        employee.setLastName(lastName);
    }

    if(email != null && email.length()>0 &&
            !Objects.equals(employee.getEmail(),email)){
        employee.setEmail(email);
    }

    if(dob != null &&
            !Objects.equals(employee.getDOB(),dob)){
        employee.setDOB(dob);
    }

    }
}
