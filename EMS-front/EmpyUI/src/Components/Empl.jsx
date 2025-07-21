import React from 'react'
import m from "../Service/EmployeeService.js";
import { deletEmp } from '../Service/EmployeeService.js';
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
export const Empl = () => {

    const navigator = useNavigate()

    const [emp, setEmp] = useState([]);
    const [res, setRes] = useState([]);
    const delet = (id) => {
        deletEmp(id).then(() =>
            m().then((response) => setEmp(response.data)));
        // deletEmp(id);
        // navigator("/maga")

    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            m().then((response) => {
                setEmp(response.data)
            }).catch(error => {
                console.log(error);
            }
            )


        }, 100);

    }, [])

    if (!emp) {
        return (
            <>
                <h1>Loading....</h1>
            </>
        )
    }

    function noi() {
        navigator("/AddEmp")

    }
    const reDirect = (id) => {
        navigator(`/AddEmp/${id}`)

    }



    return (
        <div className='container'>
            <h1>{res}</h1>
            <button type="button" className="btn" onClick={noi}>Add Employee</button>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>First name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                    </tr>
                </thead>

                <tbody>
                    {emp.map((dat) => (
                        <tr key={dat.id}>
                            <td>{dat.id}</td>
                            <td>{dat.first_name}</td>
                            <td>{dat.last_name}</td>
                            <td>{dat.email}</td>
                            <td><button className='btn btn-success' onClick={() => reDirect(dat.id)}>Update</button></td>
                            <td><button type="button" className="btn btn-danger" onClick={() => delet(dat.id)}>DELETE</button></td>



                        </tr>

                    ))}




                </tbody>




            </table>




        </div>
    )
}
