package com.example.EmplManage.Service;

import com.example.EmplManage.Model.Employee;
import com.example.EmplManage.Repositry.EmployeeRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepositry repo;

    public List<Employee> getEmplo()
    {
        return repo.findAll();

    }

    public void putEmploy(Employee emp) {

        repo.save(emp);
    }

    public Employee getEmployee(int id) {

        return repo.findById(id).orElse(null);
    }

    public void patchEmp(Employee emp) {

        repo.save(emp);
    }

    public void deleEmp(int id) {
        repo.deleteById(id);
    }
}
