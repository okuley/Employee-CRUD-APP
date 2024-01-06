package com.example.demo.Employee;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class EmployeeConfig {
    @Bean
    CommandLineRunner commandLineRunner(EmployeeRepository repository){
        return args ->{
           Employee emma= new Employee(
                    "Emma","Gyening",
                    "ema@gmail.com", LocalDate.of(1991,12,13)
            );
            Employee emma1= new Employee(
                    "Emma1","Gyening",
                    "ema1@gmail.com", LocalDate.of(1991,12,13)
            );
            Employee emma2= new Employee(
                    "Emma2","Gyening",
                    "ema2@gmail.com", LocalDate.of(1991,12,13)
            );
            repository.saveAll(
                    List.of(emma, emma1, emma2)
            );
        };
    }

}
