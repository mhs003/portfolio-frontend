import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
import Input from '../components/common/Input'
import Textarea from '../components/common/Textarea'
import CompTitle from '../components/CompTitle'
import { cellphone, location, mail } from '../icons/ContactIcons'
import Toast from '../components/Toast'
import emailjs from '@emailjs/browser';
import RouteMotion from '../components/RouteMotion'


const getFormData = (form) => {
    const formData = new FormData(form);
    return Object.fromEntries(formData);
}

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [isError, setIsError] = useState(false);

    const submitController = (e) => {
        const subBtn = document.querySelector('#subBtn');
        subBtn.classList.add('loading')

        e.preventDefault();
        const formData = getFormData(e.target);
        emailjs.send("service_3s7njxp", "template_s62bg2i", {
            from_name: formData.name,
            from_email: formData.email_address,
            subject: formData.subject,
            message: formData.message,
        }, "mN3iEuOLVNNlmFvrX").then(function (res) {
            subBtn.classList.remove('loading');
            if (res.status === 200) {
                setIsError(false);
                setAlertMsg('Message sent!');
            } else {
                setIsError(true);
                setAlertMsg('Could not send message!');
            }
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            e.target.reset();
        }, function (err) {
            subBtn.classList.remove('loading');
            setAlertMsg('Could not send message!');
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
            // e.target.reset();
        });
    }
    return (
        <RouteMotion>
            <PageTitle title="CONTACT" />
            <Toast msg={alertMsg} visible={isVisible} error={isError} />
            <div className='relative max-w-4xl my-4 mx-3 sm:mx-auto flex justify-start sm:justify-center flex-wrap gap-28 lg:gap-40'>
                <div className='flex flex-col'>
                    <CompTitle title="Send me a message" />
                    <div className=''>
                        <form method='post' action='/contact' onSubmit={submitController}>
                            <Input name="name" label="Your name" required="true" />
                            <Input name="email_address" label="Your email address" type="email" required="true" />
                            <Input name="subject" label="Subject" required="true" />
                            <Textarea name="message" label="Write down your email" required="true" />
                            <button id="subBtn" type='submit' className='btn btn-info w-80 sm:w-96 mt-2'>Send</button>
                        </form>
                    </div>
                </div>
                <div className='hidden lg:block absolute bg-cyan-500 h-96 w-2 rounded-full left-[54%] top-1/2 -translate-y-1/2'></div>
                <div className='flex flex-col'>
                    <CompTitle title="Social links" />
                    <div className='mb-14'>
                        <p className='flex gap-2'><p className='font-bold sm:text-lg'>Facebook:</p><a target="_blank" rel="noopener noreferrer" className="link link-info sm:text-lg" href="https://facebook.com/7ox1c.7">FB.com/7ox1c.7</a></p>
                        <p className='flex gap-2'><p className='font-bold sm:text-lg'>Github:</p><a target="_blank" rel="noopener noreferrer" className="link link-info sm:text-lg" href="https://github.com/mhs003">Github.com/mhs003</a></p>
                        <p className='flex gap-2'><p className='font-bold sm:text-lg'>Gitlab:</p><a target="_blank" rel="noopener noreferrer" className="link link-info sm:text-lg" href="https://gitlab.com/mhs003">Gitlab.com/mhs003</a></p>
                        <p className='flex gap-2'><p className='font-bold sm:text-lg'>Whatsapp:</p><a target="_blank" rel="noopener noreferrer" className="link link-info sm:text-lg" href="https://wa.me/8801630346830">wa.me/8801630346830</a></p>
                    </div>
                    <CompTitle title="Other contact methods" />
                    <div>
                        <div className='flex flex-row gap-3 items-center'><img src={cellphone} alt="Phone" className='w-7 h-7' /><div className='flex flex-col'><p className='font-bold sm:text-lg'>Phone</p><a className="link link-info sm:text-lg" href="tel:+8801630346830">+8801630346830</a></div></div>
                        <div className='flex flex-row gap-3 items-center mt-5'><img src={mail} alt="Email" className='w-7 h-7' /><div className='flex flex-col'><p className='font-bold sm:text-lg'>Email</p><a className="link link-info sm:text-lg" href="mailto:monzurulhasan1001@gmail.com">monzurulhasan1001@gmail.com</a></div></div>
                        <div className='flex flex-row gap-3 items-center mt-5'><img src={location} alt="Address" className='w-7 h-7' /><div className='flex flex-col'><p className='font-bold sm:text-lg'>Address</p><p className='text-sm sm:text-base'>Holding No. 31, Ward No. 2<br />Gorai, Attarampara, Mirzapore<br />Tangail, 1941<br />Bangladesh</p></div></div>
                    </div>
                </div>


            </div>
        </RouteMotion>
    )
}

export default Contact