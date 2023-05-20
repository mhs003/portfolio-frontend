import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import RouteMotion from '../components/RouteMotion';
import axios from 'axios';
import Config from '../lib/Config';
import Session from '../lib/Session';
import { motion } from "framer-motion";

const show = {
    opacity: 1,
    display: "block"
};

const hide = {
    opacity: 0,
    transitionEnd: {
        display: "none"
    }
};

const SinglePost = ({ setLoading, isLoggedIn }) => {
    const navigate = useNavigate();
    const [toastVisible, setToastVisible] = useState(false)
    const [data, setData] = useState([])
    const param = useParams();
    const id = param.id;
    const token = Session.get('Token');
    const postUrl = window.location.origin + '/post/' + id;

    const copyLink = () => {
        try {
            navigator.clipboard.writeText(postUrl) && setToastVisible(true);
        } catch (err) {
            var textField = document.createElement('textarea');
            textField.innerText = postUrl;
            document.body.appendChild(textField);
            textField.select();
            document.execCommand('copy');
            textField.remove();
            setToastVisible(true);
        }
        setTimeout(() => {
            setToastVisible(false);
        }, 2000);
    }

    const editPost = () => {

    }

    const deletePost = () => {
        setLoading(true);
        axios
            .delete(Config.BLOG_BASE + '/delete/' + id, {
                data: {
                    token: token
                }
            })
            .then((res) => {
                navigate('/blogs')
                setLoading(false)
            }).catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true);
        axios
            .get(Config.BLOG_BASE + '/get/' + id)
            .then((res) => {
                setLoading(false)
                setData(res.data.data);
            }).catch((err) => {
                //error
                setData(null)
                setLoading(false)
            })
    })

    return (
        <RouteMotion>
            <div className='max-w-5xl mb-10 mx-auto'>
                <div className="navbar bg-info-content">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-lg" to='/blogs'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 stroke-current mr-1" height="512px" version="1.1" viewBox="0 0 512 512" ><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " fill="#ffffff" /></svg>
                            Back
                        </Link>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current rotate-90"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><button>Share</button></li>
                                <li><button onClick={copyLink}>Copy link</button></li>
                                {isLoggedIn && (
                                    <>
                                        <li><button onClick={editPost}>Edit</button></li>
                                        <li><button onClick={deletePost}>Delete</button></li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col mt-8 mx-4'>
                    {data === null ? (
                        <div>[ No Post Found ]</div>
                    ) : (
                        <>
                            <div className='w-10/12 sm:w-8/12 rounded-lg overflow-hidden'>
                                <img className='' src={data.photo} alt="title" />
                            </div>
                            <h1 className='text-2xl text-bold mt-5'>{data.title}</h1>
                            <p className='text-sm text-gray-500 my-2'>{data.time}</p>
                            <div className='mt-3 rounded-full w-36 h-1 bg-cyan-500'></div>
                            <div className='text-md mt-6 whitespace-pre-line'>
                                {data.body}
                            </div>
                        </>
                    )}
                </div>
                <motion.div animate={toastVisible ? show : hide} className='fixed bottom-24 left-1/2 -translate-x-1/2 text-black bg-slate-400 rounded-full text-sm sm:text-base p-3 px-6 z-[45]'>Copied to clipboard</motion.div>
            </div>

        </RouteMotion>
    )
}

export default SinglePost