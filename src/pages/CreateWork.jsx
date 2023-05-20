import React, { useState } from 'react'
import RouteMotion from '../components/RouteMotion'
import PageTitle from '../components/PageTitle'
import Input from '../components/common/Input'
import Textarea from '../components/common/Textarea'
import Toast from '../components/Toast'
import axios from 'axios'
import Session from '../lib/Session'
import { Navigate, useNavigate } from 'react-router-dom'
import Config from '../lib/Config'

// Image upload tutorial
// https://www.bezkoder.com/react-image-upload-preview/

const getFormData = (form) => {
    const formData = new FormData(form);
    return Object.fromEntries(formData);
}

const CreateWork = ({ setLoading }) => {
    const navigate = useNavigate();
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
        console.log(formData);

        axios.post(Config.WORK_BASE + '/add', {
            token: Session.get('Token'),
            details: formData
        }).then((res) => {
            subBtn.classList.remove('loading');
            navigate('/works');
        }).catch((err) => {
            subBtn.classList.remove('loading');
            console.log(err.response.data);
            createErrorToast(err.response.data.message);
        })
    }
    return (
        <RouteMotion>
            <PageTitle title="Create new work" />
            <Toast msg={alertMsg} visible={isVisible} error={isError} />
            <div className='flex justify-center items-center gap-5 flex-col max-w-3xl my-4 mx-auto'>
                <h1 className=''>Create a new work post | <a target="_blank" rel="noopener noreferrer" href="https://imgbb.com/" className='link link-primary'>Upload photo here</a></h1>
                <form onSubmit={formController} className='flex flex-col justify-center items-center' method="post" action="/login">
                    <Input label="Work title" name="title" required />
                    <Input label="Work subtitle" name="subtitle" required />
                    <Input label="Work photo" name="img" required />
                    <Input label="Website link" name="link" required />
                    <Textarea label="Description for the work" name="description" required />
                    <button id="subBtn" type='submit' className='btn btn-info w-80 sm:w-96 mt-2 normal-case'>Create</button>
                </form>
            </div>
        </RouteMotion>
    )
}

export default CreateWork