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
    const { channel: { id } } = context;

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
                <input 
                    type="text" 
                    id="message" 
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    placeholder="Type your message..." 
                    className="w-full border-t border-gray-300 py-2 px-4 text-gray-800 focus:outline-none"
                />
                <div className="flex h-10 flex-row">
                    <button 
                        type="submit"
                        className="w-1/2 text-center bg-yellow-500 hover:bg-yellow-600 focus:outline-none uppercase text-white font-semibold"
                    >Reply</button>
                    <button
                        type="button"
                        className="w-1/2 text-center bg-green-500 hover:bg-green-600 focus:outline-none uppercase text-white font-semibold"
                    >Media</button>
                </div>
            </form>
        </div>
    )
}

export default InputArea;