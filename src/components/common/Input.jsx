import React from 'react'

const Input = ({ label, placeholder, type, name, required }) => {
    type = type ? type : 'text';
    return (
        <>
            <div className="form-control w-full my-2">
                <label htmlFor={name} className="label">
                    <span className="text-sm sm:text-lg">{label}{required ? <span className='text-red-500 font-bold'> *</span> : ''}</span>
                </label>
                <input id={name} name={name} type={type} placeholder={placeholder} className="input input-bordered input-info w-80 sm:w-96" required={required} />
            </div>
        </>
    )
}

export default Input