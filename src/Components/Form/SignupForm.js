import React from 'react';
import { useFormik } from 'formik';

import {createUser} from "../../apiCall/user"
import * as yup from 'yup';
import { Button, TextField } from '@material-ui/core';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    FirstName: yup
        .string('Enter your Name'),
    LastName: yup
        .string('Enter your Name'),
    
    phone: yup
         .number('enter your number')
         .min(10, 'phone number should be length.10')
        .required('number is required')
});

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            FirstName:'',
            LastName:'',
            phone:'',
            

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            console.log({ values })

            createUser(values).then((res) => {
                console.log({ res })
            }).catch((err) => {
                console.log(err)
            })
            

        },
           
     
       
    });
    

    return (
        <div>
        <div className="container mx-auto my-auto bg-dark border border-dark-4px d-grid gap-5">
        <div className="container p-5">
            <h1 className="p-10 pt-3 d-flex flex-column align-items-center justify-content-center mx-auto my-auto bg-primary border border-dark d-grid gap-5">REGISTRATION FORM</h1>
            <div className="container p-2 bg-light border order border-dark">
                
                <form className="p-10 d-flex flex-column align-items-center justify-content-center" onSubmit={formik.handleSubmit} >
                
                <TextField
                        className="pt-3"
                        fullWidth
                        id="FirstName"
                        name="FirstName"
                        label="FirstName"
                        type="FirstName"
                        value={formik.values.FirstName}
                        onChange={formik.handleChange}
                        error={formik.touched.FirstName && Boolean(formik.errors.FirstName)}
                        helperText={formik.touched.FirstName && formik.errors.FirstName}
                    />
                    <TextField
                        className="pt-3"
                        fullWidth
                        id="LastName"
                        name="LastName"
                        label="LastName"
                        type="LastName"
                        value={formik.values.LastName}
                        onChange={formik.handleChange}
                        error={formik.touched.LastName && Boolean(formik.errors.LastName)}
                        helperText={formik.touched.LastName && formik.errors.LastName}
                    />
                    <TextField
                    className="pt-3"
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                    className="pt-4"
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    
                    <TextField
                    className="pt-4"
                        fullWidth
                        id="phone"
                        name="phone"
                        label="phone"
                        type="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />


                    <Button className="btn border order border-dark"  color="primary" variant="contained" type="submit">
                        Submit
                    </Button>
                   
                </form>
           
                </div>
                <footer className="foo p-18 d-flex flex-column align-items-center justify-content-center bg-primary" color="primary" >© 2021 Upali</footer>
            </div>
        </div>
        </div>

    );
};


export default SignupForm;





