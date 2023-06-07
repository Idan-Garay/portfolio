import Link from 'next/link'
import React, { ReactNode, useEffect, useState } from 'react'
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import useDownloader from 'react-use-downloader';

type LayoutProps = {
    children: ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [open, setOpen] = useState(false)

    const { size, elapsed, percentage, download,
        cancel, error, isInProgress } =
        useDownloader();
    const [fileUrl, fileName] = ["/resume.pdf", "resume.pdf"];

    const handleClickResume = () => {
        download(fileUrl, fileName)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setOpen(false)
            }
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div id="outer-container">
            <aside className={"sm:hidden sm:w-0 absolute z-50 w-full h-full bg-black  text-white text-opacity-80 " + `${open ? "block" : "hidden"}`}>
                <ul className='flex relative top-24 px-[5%] flex-col gap-y-6 tracking-wider text-3xl font-semibold '>
                    <Link href="/about" className='hover:text-blue-500'>About</Link>
                    <Link href="/blog" className='hover:text-blue-500'>Blog</Link>
                    <li className="hover:text-blue-500 cursor-pointer" onClick={handleClickResume}>Resume</li>
                </ul>

                <div className="cursor-pointer flex sm:hidden absolute right-[10%] top-12 h-[20px] w-[30px] " onClick={() => { setOpen(open => !open) }}>
                    <span className={"absolute block h-[12%] rounded-sm w-full left-0 right-0 top-[40%] bg-[#A8ADB1] rotate-45"}></span>
                    <span className={"absolute block h-[12%] rounded-sm w-full left-0 right-0 bg-[#A8ADB1] top-[40%] -rotate-45"} ></span>
                </div>
            </aside>

            <main id="page-wrap" className="min-h-screen bg-black px-[10%] md:px-[25%] text-white flex flex-col" >
                <nav className="pt-12 flex justify-between items-center text-[#A8ADB1]">
                    <h1 className="text-xl font-semibold spacing tracking-widest uppercase hover:text-blue-500">
                        <Link href="/">Idan Joshua</Link>
                    </h1>
                    <ul className=' gap-x-6 text-xl font-light tracking-wider hidden sm:flex'>
                        <Link href="/about" className='hover:text-blue-500'>About</Link>
                        <Link href="/blog" className='hover:text-blue-500'>Blog</Link>
                        <li className="hover:text-blue-500 cursor-pointer" onClick={handleClickResume}>Resume</li>
                    </ul>

                    <div className="cursor-pointer flex sm:hidden relative h-[20px] w-[30px]" onClick={() => { setOpen(open => !open) }}>
                        <span className={"absolute block h-[10%] rounded-sm w-full left-0 right-0 top-[0%] bg-[#A8ADB1] "}></span>
                        <span className={"absolute block h-[10%] rounded-sm w-full left-0 right-0 top-[40%] bg-[#A8ADB1] transition-all "}></span>
                        <span className={"absolute block h-[10%] rounded-sm w-full left-0 right-0 bg-[#A8ADB1] top-[80%]"} ></span>
                    </div>

                </nav>

                {children}

                <footer className="flex justify-between text-[#A8ADB1] mt-auto py-12">
                    <p>© Idan Joshua Garay</p>
                    <div className="platforms flex gap-6">
                        <Link href="https://twitter.com/GarayIdan" target="_blank" className="flex gap-1 items-center cursor-pointer text-[#A8ADB1] hover:text-[#86BFF7]"><AiOutlineTwitter size={25} /> </Link>
                        <Link href="https://www.linkedin.com/in/idan-joshua-garay-1a4657176/" target="_blank" className="flex gap-1 items-center cursor-pointer text-[#A8ADB1] hover:text-[#2967BC]"><AiFillLinkedin size={25} /> </Link>
                        <Link href="https://github.com/Idan-Garay" target="_blank" className="flex gap-1 items-center cursor-pointer text-[#A8ADB1] hover:text-white"><AiFillGithub size={25} /> </Link>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default Layout