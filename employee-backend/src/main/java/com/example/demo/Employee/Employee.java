/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Employee;

import jakarta.persistence.*;


import java.time.LocalDate;
import java.time.Period;

/**
 *
 * @author gyening
 */
@Entity
@Table
public class Employee {
    @jakarta.persistence.Id
    @SequenceGenerator(
            name="employee_sequence",
            sequenceName="employee_sequence",
            allocationSize =1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator="employee_sequence"
    )
    private int Id;
    private String FirstName;
    private String LastName;
    private String Email;
    private LocalDate DOB;
@Transient
    private int Age;

    public Employee() {
    }

    public Employee(String firstName, String lastName, String email, LocalDate DOB,  int id) {
        FirstName = firstName;
        LastName = lastName;
        Email = email;
        this.DOB = DOB;

        Id = id;
    }

    public Employee(String firstName, String lastName, String email, LocalDate DOB) {
        FirstName = firstName;
        LastName = lastName;
        Email = email;
        this.DOB = DOB;

    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public LocalDate getDOB() {
        return DOB;
    }

    public void setDOB(LocalDate DOB) {
        this.DOB = DOB;
    }

    public int getAge() {
        return Period.between(this.DOB,LocalDate.now()).getYears();
    }

    public void setAge(int age) {
        Age = age;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "FirstName='" + FirstName + '\'' +
                ", LastName='" + LastName + '\'' +
                ", Email='" + Email + '\'' +
                ", DOB='" + DOB + '\'' +
                ", Age='" + Age + '\'' +
                '}';
    }
    public  int getId(){
        return this.Id;
    }
}
