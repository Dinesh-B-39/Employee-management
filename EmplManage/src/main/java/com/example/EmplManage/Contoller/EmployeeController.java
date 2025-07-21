package com.example.EmplManage.Contoller;

import com.example.EmplManage.Model.Employee;
import com.example.EmplManage.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
public class EmployeeController {

    @Autowired
    EmployeeService serv;


    @GetMapping("/")
    public List<Employee> getEmplo()
    {
        return serv.getEmplo();
    }

    @PostMapping("/api/employees")
    public void putEmploy(@RequestBody Employee emp)
    {
        serv.putEmploy(emp);

    }
    @GetMapping("/id/{id}")
    public Employee getEmployee(@PathVariable("id") int id)
    {
        return serv.getEmployee(id);

    }
    @PutMapping("/api/employees")
    public void editEmploy(@RequestBody Employee emp)
    {
        serv.patchEmp(emp);

    }

    @DeleteMapping("/{id}")
    public void delEmpl(@PathVariable("id") int id)
    {
        serv.deleEmp(id);
    }

}
