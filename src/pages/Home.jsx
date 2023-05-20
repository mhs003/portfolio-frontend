import React from 'react'
import { motion } from 'framer-motion';
import home from '../images/home.png';
import { facebook, github, linkedin, twitter, whatsapp } from '../icons/SocialIcons'
import RouteMotion from '../components/RouteMotion';

const Home = () => {
    return (
        <RouteMotion>
            <div className='flex justify-center items-center lg:h-[calc(100vh-112px)] flex-wrap gap-8 pt-12'>
                <div className=''>
                    <img className='w-72 sm:w-96' alt='Home avater' src={home} />
                </div>
                <div className='flex justify-center items-center flex-col gap-8'>
                    <div className='flex justify-center items-center gap-1 flex-col text-white'>
                        <p className='text-sm sm:text-lg'>Hello World</p>
                        <p className='text-3xl mb-2 sm:text-5xl'><span className='text-base sm:text-xl'>I'm</span> <span className='text-cyan-500 font-bold'>Monzurul Hasan Shihab</span></p>
                        <p className='text-lg sm:text-2xl'>A <span className='text-red-500 font-bold'>MERN Stack</span> Web Develper</p>
                    </div>
                    <div className='text-white text-center text-sm sm:text-lg max-w-xl my-4 mb-1 mx-3'>
                    As an accomplished MERN stack web developer, I possess a solid understanding of Node.js, Express.js, React.js, and MongoDB. With my expertise in full-stack development, I am committed to delivering seamless web and mobile experiences that surpass expectations. Let's connect to discuss how I can contribute to your project's success ;)
                    </div>
                    <motion.div
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.8,
                            ease: "easeOut"
                        }}
                    >
                        <a className='block text-white sm:text-lg border-b-2 w-28 text-center border-cyan-500' href="mailto:monzurulhasan1001@gmail.com">Hire me</a>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.15, }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <a className='block text-sm sm:text-lg text-white border border-cyan-600 rounded-full px-4 py-2 hover:bg-cyan-500' href="#download">Download my resume</a>
                    </motion.div>
                    <div className='flex flex-row gap-5 mt-3 lg:-mt-2'>
                        <a target="_blank" rel="noopener noreferrer" href='https://facebook.com/7ox1c.7'><img className='w-5 transition hover:scale-125' src={facebook} alt='facebook' /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/mhs003'><img className='w-5 transition hover:scale-125' src={github} alt='github' /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/monzurul-hasan-shihab-132299155/'><img className='w-5 transition hover:scale-125' src={linkedin} alt='linkedin' /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/BK5D30MT'><img className='w-5 transition hover:scale-125' src={twitter} alt='twitter' /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://wa.me/8801630346830'><img className='w-5 transition hover:scale-125' src={whatsapp} alt='whatsapp' /></a>
                    </div>
                </div>
            </div>
        </RouteMotion>
    )
}

export default Home
