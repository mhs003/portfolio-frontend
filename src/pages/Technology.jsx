import React from 'react'
import TechCard from '../components/common/TechCard'
import { html, css, js, ts, react, tailwind } from '../icons/Frontend'
import { node, express, php } from '../icons/Backend'
import { github, git, linux, terminal, netlify, vercel, flyio } from '../icons/Tools'
import { mongodb, firebase, mysql } from '../icons/Database'
import PageTitle from '../components/PageTitle'
import CompTitle from '../components/CompTitle'
import RouteMotion from '../components/RouteMotion'


const Technology = () => {
    return (
        <RouteMotion>
            <PageTitle title="TECHNOLOGIES" />
            <div className='max-w-2xl my-4 mb-10 mx-3 sm:mx-auto'>
                <CompTitle title="Front End" />
                <div className='flex flex-wrap gap-6'>
                    <TechCard src={html} alt="HTML" />
                    <TechCard src={css} alt="CSS" />
                    <TechCard src={js} alt="JavaScript" />
                    <TechCard src={ts} alt="TypeScript" />
                    <TechCard src={react} alt="ReactJS" />
                    <TechCard src={tailwind} alt="TailwindCSS" />
                </div>
            </div>
            <div className='max-w-2xl my-4 mb-10 mx-3 sm:mx-auto'>
                <CompTitle title="Back End" />
                <div className='flex flex-wrap gap-6'>
                    <TechCard src={node} alt="NodeJS" />
                    <TechCard src={express} alt="ExpressJS" />
                    <TechCard src={php} alt="PHP" />
                </div>
            </div>
            <div className='max-w-2xl my-4 mb-10 mx-3 sm:mx-auto'>
                <CompTitle title="Database" />
                <div className='flex flex-wrap gap-6'>
                    <TechCard src={mongodb} alt="MongoDB" />
                    <TechCard src={mysql} alt="MySQL" />
                    <TechCard src={firebase} alt="Firebase" />
                </div>
            </div>
            <div className='max-w-2xl my-4 mx-3 sm:mx-auto'>
                <CompTitle title="Tools" />
                <div className='flex flex-wrap gap-6'>
                    <TechCard src={github} alt="Github" />
                    <TechCard src={git} alt="Git" />
                    <TechCard src={linux} alt="Linux OS" />
                    <TechCard src={terminal} alt="Bourne Shell" />
                    <TechCard src={flyio} alt="Fly.io" />
                    <TechCard src={netlify} alt="Netlify" />
                    <TechCard src={vercel} alt="Vercel" />
                </div>
            </div>
        </RouteMotion>
    )
}

export default Technology
