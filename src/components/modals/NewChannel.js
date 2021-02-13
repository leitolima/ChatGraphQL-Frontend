import React, { useContext, useState } from 'react';
import UserContext from '../../context/userContext';
import { useHistory } from 'react-router-dom';
//Components
import FormInput from '../formInput';
import SubmitButton from '../submitButton';
//Formik
import * as Yup from 'yup';
import { useFormik } from 'formik';
//GraphQL
import client from '../../config/apollo';
import { useMutation } from '@apollo/client';
import { CREATE_NEW_CHANNEL } from '../../graphql/mutations';
import { GET_USER } from '../../graphql/querys';

const NewChannel = ({show, closeModal}) => {

    const history = useHistory();

    const context = useContext(UserContext);
    const { newChannel } = context;

    const [error, setError] = useState(null);
    const [createNewChannel] = useMutation(CREATE_NEW_CHANNEL);

    const updateCacheChannels = async newch => {
        var { user } = await client.cache.readQuery({ 
            query: GET_USER
        });
        client.cache.writeQuery({ 
            query: GET_USER,
            data: { 
                user: { channels: [...user.channels, newch] }
            }
        });
        closeModal();
        history.push(`/channel/${newch.id}`);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            description: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            description: Yup.string()
        }),
        onSubmit: async values => {
            setError(null);
            try {
                const { data: { channel: newchannel } } = await createNewChannel({
                    variables: {
                        input: values
                    }
                });
                newChannel(newchannel);
                updateCacheChannels(newchannel);
            } catch (err) {
                setError(err.message.replace('Error: ', ''));
            }
        }
    })

    return (
        <div className={`${show ? 'flex' : 'hideen'} fixed w-full h-screen top-0 left-0 justify-center items-center`}>
            <div className={`${show ? 'block' : 'hidden'} w-full h-full bg-black opacity-50 z-20`} onClick={closeModal}></div>
            <form 
                onSubmit={formik.handleSubmit} 
                className="fixed bg-dark-modal w-full sm:w-3/4 md:w-1/2 lg:w-1/3 border border-gray-700 py-6 px-5 rounded z-30"
            >
                <FormInput formik={formik} label="Name to your channel" id="name"/>
                <FormInput formik={formik} label="Description" id="description"/>
                <SubmitButton text="Create"/>
            </form>
        </div>
    )
}

export default NewChannel;