import React from 'react'
import RouteMotion from '../components/RouteMotion'
import PageTitle from '../components/PageTitle'
import { Link, Navigate } from 'react-router-dom'
import Session from '../lib/Session'

const Dashboard = ({ setIsLoggedIn }) => {
    const logOut = () => {
        Session.remove('loggedIn');
        Session.remove('Token');
        setIsLoggedIn(false);
        <Navigate to='/login' />
    }
    return (
        <RouteMotion>
            <PageTitle title="Dashboard" />
            <div className='flex justify-center items-center gap-5 flex-col max-w-3xl my-4 mx-auto'>
                <div className='flex justify-center items-center gap-1 flex-col'>
                    <h1 className='text-xl'>Hello, <b>Admin</b></h1>
                    <h1 className='text-base'>Welcome back</h1>
                </div>
                <div className='flex flex-col gap-1 my-2'>
                    <Link className='link link-info sm:text-lg' to='/createpost'>Create a new blog post</Link>
                    <Link className='link link-info sm:text-lg' to='/creatework'>Create a new work post</Link>
                </div>
                <button className='btn btn-error text-base normal-case' onClick={logOut}>LogOut</button>
            </div>
        </RouteMotion>
    )
}

export default Dashboard