import React from 'react'

const Textarea = ({ label, placeholder, name, required }) => {
    return (
        <>
            <div className="form-control my-2">
                <label htmlFor={name} className="label">
                    <span className="text-sm sm:text-lg">{label}{required ? <span className='text-red-500 font-bold'> *</span> : ''}</span>
                </label>
                <textarea id={name} name={name} className="textarea textarea-bordered textarea-info w-80 sm:w-96 h-24" placeholder={placeholder} required={required}></textarea>
            </div>
        </>
    )
}

export default Textarea