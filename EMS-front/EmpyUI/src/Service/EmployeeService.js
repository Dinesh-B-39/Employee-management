import axios from 'axios';



// export  m=()=>axios.get(API);
function m()
{
    return axios.get("http://localhost:8080/");
}

export const insertEmp=(employee)=>
{
    return axios.post("http://localhost:8080/api/employees",employee);

}

export const getempbyid=(id)=>
{
    return axios.get(`http://localhost:8080/id/${id}`)
}
export const updateEmp=(id,employee)=>
{
    return axios.put("http://localhost:8080/api/employees",
        {
            id:id,
            first_name:employee.first_name,
            last_name:employee.last_name,
            email:employee.email
        }
    )

}

export const deletEmp=(id)=>
{
    return axios.delete(`http://localhost:8080/${id}`)
}
export default m;
