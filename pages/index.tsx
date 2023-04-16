import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { BsLinkedin, BsGithub, BsSun, BsMoon, BsArrowDownShort, BsEnvelopeAt } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useRef, useState } from 'react'
import useDownloader from "react-use-downloader";
import { scroller } from "react-scroll";

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [toggleToast, setToggleToast] = useState(false)
  const [downloadToast, setDownloadToast] = useState(false)
  const delayToggle = (seconds: number) => {
    setTimeout(() => {
      setToggleToast(false)
      setDownloadToast(false)
    }, seconds * 1000)
  }
  const { size, elapsed, percentage, download,
    cancel, error, isInProgress } =
    useDownloader();
  const [fileUrl, fileName] = ["/resume.pdf", "resume.pdf"];

  const onScrollTo = (to: string) => {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
    })
  }

  return (
    <div>
      <Head>
        <title>Idan Joshua</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className=" min-h-[100vh] h-full w-full dark:bg-black">
        <header id="top" className='w-full relative flex justify-center pt-[15px] px-[15%]'>
          <nav className="list-none mx-auto flex justify-center gap-x-8 md:gap-x-14 items-center min-w-[280px] md:min-w-[400px] min-h-[50px] h-[50px] border w-[400px] rounded-full text-sm font-semibold uppercase text-gray-700 dark:text-white dark:text-opacity-90">
            <li onClick={() => onScrollTo("projects")} className='no hover:text-highlight hover:cursor-pointer'>Projects</li>
            <li onClick={() => onScrollTo("about")} className=' hover:text-highlight hover:cursor-pointer'>About</li>
            <li onClick={() => onScrollTo("letsconnect")} className=' hover:text-highlight hover:cursor-pointer'>Contact</li>
          </nav>
          <div className="nav-tools absolute flex self-center  right-5 sm:right-10 md:right-30 lg:right-40 md:gap-x-3 ">
            <Link target="_blank" className='hover:text-highlight hidden md:block' href={'https://github.com/Idan-Garay'}><BsGithub size={25} /></Link>
            <Link target="_blank" className='hover:text-highlight hidden md:block mr-3' href={'https://www.linkedin.com/in/idan-joshua-garay-1a4657176/'}><BsLinkedin size={25} /></Link>
            <div className="hover:text-highlight hover:cursor-pointer rounded-full h-[28x] w-[28px]" onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
              {
                theme === 'dark'
                  ? <BsMoon size={25} className='m-auto' />
                  : <BsSun size={25} className='m-auto' />
              }
            </div>
          </div>
        </header>

        <div className="w-full h-[91.8vh] pb-[10vw] flex items-center justify-center gap-x-40 px-[10vw]">
          <div className="text_content -mt-10 cursor-default">
            <h3 className="text-xl font-bold text-black text-opacity-70 dark:text-white dark:text-opacity-70">Hi,</h3>
            <h1 className="text-5xl font-bold">I’M IDAN JOSHUA</h1>
            <h2 className="-mt-2 text-3xl font-bold text-black text-opacity-50 dark:text-white dark:text-opacity-50">FRONTEND DEVELOPER</h2>
            <div className="active:cursor-pointer mt-3 text_buttons flex gap-x-2 text-bas font-semibold tracking-wide">
              <button onClick={() => onScrollTo("projects")} className="hover:bg-dark-highlight hover:border-dark-highlight border-[3px] border-highlight py-2 px-3 rounded-full text-white bg-highlight">PROJECTS</button>
              <button onClick={() => onScrollTo("letsconnect")} className="hover:border-[3px] border-2 py-2 px-3 rounded-full text-highlight border-highlight">CONNECT</button>
            </div>
          </div>

          <div className="self-center hidden md:block min-h-[400px] w-[400px]"></div>
        </div>

        <div id="projects" className="w-full h-[100vh] bg-secondary dark:bg-black flex px-[10vw] flex-col  gap-y-6 items-center justify-center ">
          <div className="group content w-full flex flex-col-reverse md:flex-row justify-center gap-x-24 h-[75%] sm:h-[80%] md:h-[45%] lg:h-[60%] -mt-[5vh]">
            <div className="showcase w-full self-start">
              <Link className='flex flex-col items-end gap-y-3' href="https://nextjs-typescript.d3k5bbpd7nkhfg.amplifyapp.com/" target="_blank">
                <Image src="/handyhome.png" className=' duration-500 group-hover:outline group-hover:outline-offset-2 group-hover:outline-highlight group-hover:rounded-md' alt="handyhome_preview" width={780} height={1024} />
                <BsArrowDownShort size={40} className='border border-slate-400 rounded-full -rotate-45 group-hover:-rotate-90 group-hover:border group-hover:rounded-full group-hover:bg-highlight group-hover:text-white duration-500  ' />
              </Link>
            </div>

            <div className="text_content w-full h-full">
              {/* <h3 className="text-xl font-bold text-black text-opacity-70 dark:text-white dark:text-opacity-70">Hi,</h3> */}
              <h1 className="text-3xl font-bold">HandyHome Website</h1>
              <h3 className="text-lg w-3/4 mt-3">A customized landing page that I designed and developed for one of my undergraduate coursework assignments.</h3>
              {/* <h2 className="-mt-2 text-3xl font-bold text-black text-opacity-50 dark:text-white dark:text-opacity-50">FRONTEND DEVELOPER</h2> */}
              <ul className="technologies mt-6 flex gap-x-3 flex-wrap">
                <li className='text-xl font-bold text-black text-opacity-70 dark:text-white dark:text-opacity-70'>REACT</li>
                <li className='text-xl font-bold text-black text-opacity-70 dark:text-white dark:text-opacity-70'>NEXTJS</li>
                <li className='text-xl font-bold text-black text-opacity-70 dark:text-white dark:text-opacity-70'>TAILWIND</li>
                <li className='text-xl font-bold text-black text-opacity-70 dark:text-white dark:text-opacity-70'>TYPESCRIPT</li>
                <li className='text-xl font-bold text-black text-opacity-70 dark:text-white dark:text-opacity-70'>AWS</li>
              </ul>
            </div>
          </div>

          <ul onClick={e => { setToggleToast(true); delayToggle(3) }} className="bullets hover:cursor-pointer flex gap-x-[3px] items-center">
            <li className="h-3 w-3 rounded-full bg-highlight"></li>
            <li className="h-2 w-2 rounded-full bg-highlight bg-opacity-70"></li>
          </ul>

        </div>

        <div id="toast-default" className={`${toggleToast ? '' : 'hidden'} duration-300 fixed top-3 right-3 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`} role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            <svg aria-hidden="true" className="w-5 h-5" fill="#4D3EED" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Warning icon</span>
          </div>
          <div className="ml-3 text-sm font-normal">Development in progress.</div>
          <button type="button" onClick={e => { setToggleToast(false) }} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>

        <div id="about" className="full px-[10vw] h-[100vh] flex flex-col gap-y-6 md:gap-y-0 md:flex-row justify-center md:items-center">
          <div className="content md:-mt-[10vh]">
            <h1 className="text-3xl font-bold">ABOUT ME</h1>
            <p className="text-lg w-3/4 mt-3">A front-end developer with almost a year of experience with website and mobile development. I like to make things simple and concise in expressing my work.</p>
            <p className="text-lg w-3/4 mt-3">As a computer science undergrad, I am knowledgeable in fundamentals of programming, data structures, and Object-Oriented Programming</p>
            <p className="text-lg w-3/4 mt-3">My goal is to be a principal software engineer in my career with a specific goal of becoming a senior software engineer in 4 years</p>
          </div>

          <div onClick={() => { setDownloadToast(true); download(fileUrl, fileName); delayToggle(3) }} className="cv h-[20%] md:h-[40%] w-full md:-mt-[10vh] flex flex-col md:items-center group hover:cursor-pointer">
            <div className="cv_content border-4 pb-3 border-highlight duration-500 group-hover:bg-highlight rounded-md w-3/4 h-full md:h-[50%] lg:h-full">
              <BsEnvelopeAt className='m-auto text-highlight duration-500 group-hover:text-white w-full h-full' size={300} />
            </div>
            <h3 className="hover:cursor-pointer ml-16 sm:ml-32 md:ml-0 text-xl underline text-highlight font-medium text-opacity-70 duration-500 group-hover:text-opacity-100">Download Resume</h3>
          </div>

          <div id="toast-default" className={`${downloadToast ? '' : 'hidden'} animate-slideLeft fixed top-3 right-3 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`} role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
              <svg aria-hidden="true" className="w-5 h-5" fill="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Warning icon</span>
            </div>
            <div className="ml-3 text-sm font-normal ">Resume downloaded</div>
            <button type="button" onClick={e => { setDownloadToast(false); }} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
              <span className="sr-only" >Close</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>

        </div>

        <div id="letsconnect" className="h-[100vh] bg-secondary dark:bg-black flex flex-col justify-center items-center">
          <h3 className="text-5xl font-medium text-black text-opacity-70 dark:text-white dark:text-opacity-70">Let&apos;s Connect!</h3>
          <h1 className="text-xl font-bold underline">garayidan@gmail.com</h1>
          <div className="links flex gap-x-3 mt-3">
            <Link target="_blank" className='hover:text-highlight' href={'https://github.com/Idan-Garay'}><BsGithub size={35} /></Link>
            <Link target="_blank" className='hover:text-highlight mr-3' href={'https://www.linkedin.com/in/idan-joshua-garay-1a4657176/'}><BsLinkedin size={35} /></Link>
          </div>
        </div>
      </main>

      <footer className="h-[10vh] px-[10vw] flex justify-between items-center border-t-[1px]">
        <p onClick={() => {
          scroller.scrollTo('top', {
            duration: 500,
            delay: 0,
          })
        }} className='hover:cursor-pointer hidden md:block dark:text-slate-200 text-slate-800 text-xl before:pr-3 before:content-["_↑"]'>Back To Top</p>
        <p className=' text-gray-500'>© Idan Joshua Garay. All rights reserved.</p>
      </footer>
    </div>
  )
}
