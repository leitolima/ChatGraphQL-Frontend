import React from 'react';
//Components
import FormInput from '../components/formInput';
import SubmitButton from '../components/submitButton';
import ParagraphLink from '../components/paragraphLink';
//Formik
import * as Yup from 'yup';
import { useFormik } from 'formik';

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
                <SubmitButton text="Enter"/>
                <ParagraphLink text="Don't you have an account?" href="/signup" linkText="Sign Up"/>
            </form>
        </div>
    )
}

export default Login;