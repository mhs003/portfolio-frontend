import React from 'react'
import PageTitle from '../components/PageTitle'
import CompTitle from '../components/CompTitle'
import me from '../images/me.png'
import RouteMotion from '../components/RouteMotion';

const About = () => {
    return (
        <RouteMotion>
            <PageTitle title="About me" />
            <div className='max-w-6xl my-4 mb-10 mx-3 sm:mx-auto flex justify-center items-center flex-col'>
                <div className='flex justify-center items-center flex-col'>
                    <img className="mask mask-hexagon w-56 p-[13px] bg-slate-900" src={me} alt="ME" />
                    <h4 className='text-lg sm:text-xl text-slate-300'>Hello there,</h4>
                    <h1 className='text-3xl sm:text-5xl my-5 mt-3'><span className='text-base sm:text-xl'>I'm</span> <span className='text-cyan-500 font-bold'>Monzurul Hasan</span></h1>
                    <h5 className='text-md sm:text-lg text-slate-300 text-center mb-4'> an accomplished app developer specializing in <span className='text-cyan-500 font-bold'>Web</span> and <span className='text-cyan-500 font-bold'>Android</span> developments.</h5>
                    <h6 className='text-sm sm:text-lg text-center mt-7'>As an experienced developer, my expertise lies in leveraging the MERN stack for web development and Native for Android applications. I have a genuine passion for coding and a strong drive to stay updated with the latest trends in computer and internet technology. I take pride in delivering creative and challenging projects while prioritizing 100% customer satisfaction and meeting project deadlines. With my skills and experience, I believe I am well-equipped to excel in any project. I am excited about exploring new opportunities and contributing my expertise to innovative endeavors. Let's connect and discuss how I can help bring your ideas to fruition.</h6>
                </div>
                <div className='mt-12'>
                    <PageTitle title="Specializations" md />
                    <div className='flex justify-between items-center gap-3 sm:gap-16 flex-row'>
                        <div className='flex justify-center items-center flex-col gap-2 p-4 bg-black transition-colors hover:bg-cyan-950 rounded-xl'><h1 className='font-bold text-5xl sm:text-8xl'>10+</h1><h2 className='font-bold text-center text-[15px] sm:text-lg'>Projects completed</h2></div>
                        <div className='flex justify-center items-center flex-col gap-2 p-4 bg-black transition-colors hover:bg-cyan-950 rounded-xl'><h1 className='font-bold text-5xl sm:text-8xl'>1+</h1><h2 className='font-bold text-center text-[15px] sm:text-lg'>Learning years</h2></div>
                        <div className='flex justify-center items-center flex-col gap-2 p-4 bg-black transition-colors hover:bg-cyan-950 rounded-xl'><h1 className='font-bold text-5xl sm:text-8xl'>1.5+</h1><h2 className='font-bold text-center text-[15px] sm:text-lg'>Practicing years</h2></div>
                    </div>
                    <div className='mt-7 max-w-xl m-auto flex flex-col gap-10'>
                        <div className='group flex flex-row gap-6 sm:gap-9 items-center'>
                            <div>
                                <div className="radial-progress text-green-500 text-3xl" style={{ "--value": 80, "--size": "10rem" }}>80%</div>
                            </div>
                            <div className='flex flex-col transition-colors group-hover:bg-cyan-900 p-5 rounded-xl'>
                                <CompTitle title="Front-end" />
                                <h3 className='text-base'>Skilled in creating engaging user interfaces using modern front-end technologies. Transforming designs into functional websites.</h3>
                            </div>
                        </div>

                        <div className='group flex flex-row gap-6 sm:gap-9 items-center'>
                            <div>
                                <div className="radial-progress text-purple-500 text-3xl" style={{ "--value": 90, "--size": "10rem" }}>90%</div>
                            </div>
                            <div className='flex flex-col transition-colors group-hover:bg-cyan-900 p-5 rounded-xl'>
                                <CompTitle title="Back-end" />
                                <h3 className='text-base'>Proficient in building robust server-side apps with Node.js, PHP. Creating secure APIs, managing databases, optimizing server performance.</h3>
                            </div>
                        </div>

                        <div className='group flex flex-row gap-6 sm:gap-9 items-center'>
                            <div>
                                <div className="radial-progress text-cyan-500 text-3xl" style={{ "--value": 68, "--size": "10rem" }}>68%</div>
                            </div>
                            <div className='flex flex-col transition-colors group-hover:bg-cyan-900 p-5 rounded-xl'>
                                <CompTitle title="Problem Solving" />
                                <h3 className='text-base'>Skilled in problem-solving. Analyze challenges, optimize algorithms, deliver effective solutions with efficiency and precision.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RouteMotion>
    )
}

export default About