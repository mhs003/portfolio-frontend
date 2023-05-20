import React, { useState } from 'react'
import RouteMotion from '../components/RouteMotion'
import PageTitle from '../components/PageTitle'
import Input from '../components/common/Input'
import Textarea from '../components/common/Textarea'
import Toast from '../components/Toast'
import axios from 'axios'
import Session from '../lib/Session'
import { useNavigate } from 'react-router-dom'
import Config from '../lib/Config'

// Image upload tutorial
// https://www.bezkoder.com/react-image-upload-preview/

function getCurrentTime() {
    var today = new Date();

    var hour = today.getHours();
    var minute = today.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12;
    hour = hour ? hour : 12;

    minute = minute < 10 ? '0' + minute : minute;

    var dayShortForms = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthShortForms = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    var formattedDate = dayShortForms[today.getDay()] + ' ' + today.getDate() + ' ' + monthShortForms[today.getMonth()] + ', ' + today.getFullYear();
    var currentTime = hour + ':' + minute + ' ' + ampm + ', ' + formattedDate;

    return currentTime;
}

const getFormData = (form) => {
    const formData = new FormData(form);
    return Object.fromEntries(formData);
}

const CreatePost = ({ setLoading }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [isError, setIsError] = useState(false);

    /* const createToast = (message) => {
        setIsVisible(true);
        setIsError(false);
        setAlertMsg(message);
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    } */

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

        axios.post(Config.BLOG_BASE + '/add', {
            token: Session.get('Token'),
            title: formData.title,
            time: getCurrentTime(),
            photo: formData.photo,
            body: formData.body
        }).then((res) => {
            subBtn.classList.remove('loading');
            navigate('/post/' + res.data.data._id);
        }).catch((err) => {
            subBtn.classList.remove('loading');
            console.log(err.response.data);
            createErrorToast(err.response.data.message);
        })
    }
    return (
        <RouteMotion>
            <PageTitle title="Create new post" />
            <Toast msg={alertMsg} visible={isVisible} error={isError} />
            <div className='flex justify-center items-center gap-5 flex-col max-w-3xl my-4 mx-auto'>
                <h1 className=''>Create a new blog post | <a target="_blank" rel="noopener noreferrer" href="https://imgbb.com/" className='link link-primary'>Upload photo here</a></h1>
                <form onSubmit={formController} className='flex flex-col justify-center items-center' method="post" action="/login">
                    <Input label="Blog title" name="title" required />
                    <Input label="Photo for post" name="photo" required />
                    <Textarea label="Blog content" name="body" required />
                    <button id="subBtn" type='submit' className='btn btn-info w-80 sm:w-96 mt-2 normal-case'>Create</button>
                </form>
            </div>
        </RouteMotion>
    )
}

export default CreatePost