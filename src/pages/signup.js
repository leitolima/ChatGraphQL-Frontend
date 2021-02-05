import React from 'react';
//components
import FormInput from '../components/formInput';
import SubmitButton from '../components/submitButton';
import ParagraphLink from '../components/paragraphLink';
//Formik
import * as Yup from 'yup';
import { useFormik } from 'formik';

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
                <SubmitButton text="Create account"/>
                <ParagraphLink text="Do you have an account?" href="/login" linkText="Log In"/>
            </form>
        </div>
    )
}

export default SignUp;