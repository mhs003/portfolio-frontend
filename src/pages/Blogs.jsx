import React, { useEffect, useState } from 'react'
import BlogCard from '../components/common/BlogCard'
import PageTitle from '../components/PageTitle'
import CompTitle from '../components/CompTitle'
import RouteMotion from '../components/RouteMotion'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Config from '../lib/Config'

const Blogs = ({ isLoggedIn, setLoading }) => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        setLoading(true);
        axios
            .get(Config.BLOG_BASE + '/get/_all_')
            .then((res) => {
                setLoading(false)
                setDatas(res.data.data);
            }).catch((err) => {
                //error
                setDatas(null);
                setLoading(false)
            })
    }, [setLoading])

    return (
        <RouteMotion>
            <PageTitle title="BLOGS" />
            <div className='max-w-2xl my-4 mb-10 mx-3 sm:mx-auto flex flex-row items-center justify-between'>
                <CompTitle title="Recent blog posts" />
                {isLoggedIn && (
                    <div className='flex gap-3 flex-wrap justify-end'>
                        <Link className='p-1 text-sm transition-colors hover:bg-teal-900 bg-teal-700 rounded-md' to='/dashboard'>Dashboard</Link>
                        <Link className='p-1 text-sm transition-colors hover:bg-teal-900 bg-teal-700 rounded-md' to='/createpost'>Create a post</Link>
                    </div>
                )}
            </div>
            <div className='max-w-6xl my-4 mb-10 mx-3 sm:mx-auto flex justify-center items-center gap-5 flex-wrap'>
                {(datas === null || datas.length === 0 ) ? (
                    <div>[ No posts found! ]</div>
                ) : (
                    datas.map((data) => {
                        return <BlogCard key={data._id} link={"/blog/" + data._id} title={data.title.length > 45 ? data.title.substr(0, 45) + ' ...' : data.title} img={data.photo} time={data.time} />
                    })
                )}
            </div>
            {(datas === null || datas.length === 0 ) && (
                <div className='max-w-xl mx-auto flex justify-center items-center'>
                    <button className="btn btn-outline btn-info normal-case">Load more</button>
                </div>
            )}
        </RouteMotion>
    )
}

export default Blogs