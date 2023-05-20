import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="fixed flex items-center justify-center h-screen p-5 bg-black w-screen z-50">
                <div className="flex space-x-5">
                    <div className="animate-ping w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="animate-ping w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div className="animate-ping w-3 h-3 bg-pink-500 rounded-full"></div>
                </div>
            </div>
        </>
    )
}

export default Loader