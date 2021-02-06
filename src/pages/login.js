import React, { useState, useContext } from 'react';
import UserContext from '../context/userContext';
import { useHistory } from 'react-router-dom';
//Components
import FormInput from '../components/formInput';
import SubmitButton from '../components/submitButton';
import ParagraphLink from '../components/paragraphLink';
//Formik
import * as Yup from 'yup';
import { useFormik } from 'formik';
//Graphql
import { useMutation } from '@apollo/client';
import { LOG_IN } from '../graphql/mutations';

const Login = () => {

    const history = useHistory();
    const context = useContext(UserContext);
    const { loginUser } = context;
    const [error, setError] = useState(null);

    const [logIn] = useMutation(LOG_IN);

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
            setError(null);
            try {
                const { data } = await logIn({ variables: { input: values } });
                loginUser(data.user);
                setTimeout(() => {
                    history.push('/');
                }, [1500])
            } catch (err) {
                setError(err.message.replace('Error: ', ''));
            }
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