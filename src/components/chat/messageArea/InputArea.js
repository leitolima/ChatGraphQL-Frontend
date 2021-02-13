import React, { useContext } from 'react';
import UserContext from '../../../context/userContext';
//Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//GraphQL
import { useMutation } from '@apollo/client';
import { SEND_NEW_MESSAGE } from '../../../graphql/mutations';

const InputArea = () => {

    const context = useContext(UserContext);
    const { image, channel: { id } } = context;

    const [sendNewMessage] = useMutation(SEND_NEW_MESSAGE);

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: Yup.object({
            message: Yup.string().required()
        }),
        onSubmit: async value => {
            try {
                await sendNewMessage({variables: {
                    input: value.message, id
                }})
                formik.resetForm();
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-row items-center mb-2">
                    <img src={image} className="rounded-full w-9 h-9 mr-2 object-cover" alt=""/>
                    <input 
                        type="text" 
                        id="message" 
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        placeholder="Type your message..." 
                        className="w-full cursor-text bg-input py-2 px-4 text-gray focus:outline-none rounded-full"
                    />
                </div>
                <button 
                    type="submit"
                    className="w-1/2 text-center bg-yellow-500 hover:bg-yellow-600 focus:outline-none uppercase text-white font-semibold hidden"
                >Reply</button>
            </form>
        </div>
    )
}

export default InputArea;