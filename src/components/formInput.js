import React from 'react'

const FormInput = ({formik, label, id, type = 'text', placeholder = '', css = ''}) => {
    return (
        <>
            <label htmlFor="name" className="font-semibold block text-gray uppercase tracking-normal text-xs mb-1 mt-4">{label}:</label>
            <input 
                id={id}
                type={type}
                value={formik.values[id]}
                placeholder={placeholder}
                onChange={formik.handleChange}
                className={`${formik.touched[id] && formik.errors[id] ? 'border-red-500' : 'border-gray-700'} block w-full py-1 bg-dark-3 text-gray px-3 border focus:border-black focus:outline-none rounded outline-none ${css}`}
            />
            {formik.touched[id] && formik.errors[id] ? <p className="text-red-500">{formik.errors[id]}</p> : null}
        </>
    )
}

export default FormInput
