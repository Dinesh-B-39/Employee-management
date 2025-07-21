import React, { useEffect } from 'react'
import { useState } from 'react';
import { getempbyid, insertEmp, updateEmp } from '../Service/EmployeeService';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
const AddEmp = () => {


    const navigator = useNavigate();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState(
        {
            first_name: '',
            last_name: '',
            email: ''
        }
    )
    const { id } = useParams();

    useEffect(()=>
    {
        if(id)
        {
            getempbyid(id).then((response)=>
            {
                setFirstName(response.data.first_name)
                setLastName(response.data.last_name)
                setEmail(response.data.email)

                
            })
        }
    },[id])
   
    



    function firsname(event) {
        setFirstName(event.target.value);
    }
    function lasname(event) {
        setLastName(event.target.value);
    }
    function mailu(event) {
        setEmail(event.target.value);
    }
    function vaildate() {
        let valid = true;
        let errorscopy = { ...errors }
        if (!first_name.trim()) {
            valid = false;
            errorscopy.first_name = "First Name is Required";
        }
        if (!last_name.trim()) {
            valid = false;
            errorscopy.last_name = "Last Name is Required";
        }
        if (!email.trim()) {
            valid = false;
            errorscopy.email = "E-mail is required";
        }
        setErrors(errorscopy);
        return valid;
    }
    function sub(event) {
        event.preventDefault();
        if (vaildate()) {
            const k = {
                first_name: first_name,
                last_name: last_name
                , email: email
            }

            if(id)
            {
                 updateEmp(id,k)
                navigator('/maga')

            }
            else{
                insertEmp(k)
            navigator('/maga')

            }
            

        }

    }
    function titleCheck() {
        if (id) {
            return (<h1>UPDATE EMPLOYEE</h1>)
        }
        else {
            return (<h1>ADD EMPLOYEE</h1>)

        }
    }
    return (
        <div>
            {titleCheck()}
            <form action="">
                <div>
                    <label htmlFor="">First_NAME:</label>
                    <input type="text"
                        placeholder='Enter Your First Name'
                        value={first_name}
                        className='form-control'
                        onChange={firsname} />
                    {errors.first_name && <div style={{ color: "red" }}>{errors.first_name}</div>}
                </div>
                <div>
                    <label htmlFor="">Last Name:</label>
                    <input type="text"
                        placeholder='Enter Your Last Name'
                        className='form-control'
                        value={last_name}
                        onChange={lasname} />
                    {errors.last_name && <div style={{ color: "red" }}>{errors.last_name}</div>}
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text"
                        placeholder='Enter Your E-mail'
                        className='form-control'
                        value={email}
                        onChange={mailu} />
                    {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                </div>
                <button type='submit' className='btn btn-success' onClick={sub}>SUBMIT</button>











            </form>








        </div>
    )
}

export default AddEmp