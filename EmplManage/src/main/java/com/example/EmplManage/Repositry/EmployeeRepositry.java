package com.example.EmplManage.Repositry;

import com.example.EmplManage.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepositry extends JpaRepository<Employee,Integer> {


}
