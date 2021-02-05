import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/formInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required'),
            password: Yup.string()
                .required('Password is required')
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
                <FormInput formik={formik} label="Username" id="username" placeholder="Username"/>
                <FormInput formik={formik} label="Password" id="password" placeholder="Password" type="password"/>
                <button 
                    type="submit"
                    className="block w-full bg-green-400 text-white uppercase font-bold py-2 focus:outline-none focus:bg-green-500 rounded mt-4"
                >Enter</button>
                <p className="text-sm font-semibold text-gray mt-4">
                    Do not have an account? &nbsp; 
                    <span className="text-lightblue">
                        <Link to="/signup">Sign up</Link>
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Login;