import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/formInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            lastname: Yup.string()
                .required('Lastname is required'),
            username: Yup.string()
                .required('Username is required'),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Your password must have at least 6 characters')
        }),
        onSubmit: async values => {
            console.log(values);
        }
    })

    return (
        <div className="w-full bg-dark-1 h-screen flex justify-center items-center">
            <form
                onSubmit={formik.handleSubmit} 
                className="bg-dark-2 w-1/3 border border-gray-700 py-10 px-5 rounded"
            >
                <FormInput formik={formik} label="Name" id="name" placeholder="Name" css="capitalize"/>
                <FormInput formik={formik} label="Lastname" id="lastname" placeholder="Lastname" css="capitalize"/>
                <FormInput formik={formik} label="Username" id="username" placeholder="Username"/>
                <FormInput formik={formik} label="Password" id="password" placeholder="Password" type="password"/>
                <button 
                    type="submit"
                    className="block w-full bg-green-400 text-white uppercase font-bold py-2 focus:outline-none focus:bg-green-500 rounded mt-4"
                >Create account</button>
                <p className="text-sm font-semibold text-gray mt-4">
                    Do you have an account? &nbsp; 
                    <span className="text-lightblue">
                        <Link to="/login">Log In</Link>
                    </span>
                </p>
            </form>
        </div>
    )
}

export default SignUp;