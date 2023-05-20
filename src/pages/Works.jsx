import React, { useEffect, useState } from 'react'
import WorkCard from '../components/common/WorkCard'
import PageTitle from '../components/PageTitle'
import RouteMotion from '../components/RouteMotion'
import axios from 'axios'
import Config from '../lib/Config'
import { Link } from 'react-router-dom'

const Works = ({ setLoading, isLoggedIn }) => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        setLoading(true);
        axios
            .get(Config.WORK_BASE + '/get-all')
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
            <PageTitle title="MY WORKS" />
            {isLoggedIn && (
                <div className='max-w-2xl m-auto flex gap-3 flex-row justify-end'>
                    <Link className='p-1 text-sm transition-colors hover:bg-teal-900 bg-teal-700 rounded-md' to='/dashboard'>Dashboard</Link>
                    <Link className='p-1 text-sm transition-colors hover:bg-teal-900 bg-teal-700 rounded-md' to='/creatework'>Add a new work</Link>
                </div>
            )}
            <div className='flex justify-center items-center gap-5 flex-wrap max-w-6xl my-4 mx-auto'>
                {(datas === null || datas.length === 0) ? (
                    <div>[ No data found ]</div>
                ) : (
                    datas.map((data) => {
                        return <WorkCard id={data._id} details={data.details} />
                    })
                )}
            </div>
        </RouteMotion>
    )
}

export default Works