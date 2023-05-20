import React, { useState } from 'react'
import RouteMotion from '../components/RouteMotion'
import PageTitle from '../components/PageTitle'
import Input from '../components/common/Input'
import axios from 'axios'
import Toast from '../components/Toast'
import Session from '../lib/Session'
import Config from '../lib/Config'

const getFormData = (form) => {
    const formData = new FormData(form);
    return Object.fromEntries(formData);
}

const Login = ({ setIsLoggedIn }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [isError, setIsError] = useState(false);

    const createToast = (message) => {
        setIsVisible(true);
        setIsError(false);
        setAlertMsg(message);
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    }

    const createErrorToast = (message) => {
        setIsVisible(true);
        setIsError(true);
        setAlertMsg(message);
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    }

    const formController = (e) => {
        const subBtn = document.querySelector('#subBtn');
        subBtn.classList.add('loading')
        e.preventDefault();

        const formData = getFormData(e.target);
        axios.post(Config.SERVER_URL + '/api/v1/login', {
            passwd: formData.password
        }).then((res) => {
            subBtn.classList.remove('loading');
            createToast(res.data.message);
            console.log(res.data);
            Session.set('loggedIn', true);
            Session.set('Token', res.data.token);
            setIsLoggedIn(true);
        }).catch((err) => {
            subBtn.classList.remove('loading');
            createErrorToast("Something went wrong. Could not login.");
        })
    }
    return (
        <RouteMotion>
            <PageTitle title="Login" />
            <Toast msg={alertMsg} visible={isVisible} error={isError} />
            <div className='flex justify-center items-center gap-5 flex-col max-w-3xl my-4 mx-auto'>
                <h1 className=''>Hello there! Please login to continue...</h1>
                <form onSubmit={formController} className='flex flex-col justify-center items-center' method="post" action="/login">
                    <Input label="Enter your password" type="password" name="password" required />
                    <button id="subBtn" type='submit' className='btn btn-info w-40 sm:w-52 mt-2 normal-case'>Login</button>
                </form>
            </div>
        </RouteMotion>
    )
}

export default Login