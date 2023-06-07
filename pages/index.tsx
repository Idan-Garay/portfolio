import Head from 'next/head'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import useDownloader from "react-use-downloader";
import { scroller } from "react-scroll";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
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
    <div>
      <Head>
        <title>Idan Joshua</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div id="outer-container">
        <aside className={"sm:hidden sm:w-0 absolute z-50 w-full h-full bg-black text-white text-opacity-80 " + `${open ? "block" : "hidden"}`}>
          <ul className='flex relative top-24 px-[5%] flex-col gap-y-6 tracking-wider text-3xl font-semibold '>
            <li className="">About</li>
            <li className="">Blog</li>
            <li className="">Resume</li>
          </ul>

          <div className=" flex sm:hidden absolute right-[10%] top-12 h-[20px] w-[30px] " onClick={() => { setOpen(open => !open) }}>
            <span className={"absolute block h-[12%] rounded-sm w-full left-0 right-0 top-[40%] bg-[#A8ADB1] rotate-45"}></span>
            <span className={"absolute block h-[12%] rounded-sm w-full left-0 right-0 bg-[#A8ADB1] top-[40%] -rotate-45"} ></span>
          </div>
        </aside>

        <main id="page-wrap" className="min-h-screen bg-black px-[10%] md:px-[25%] text-white " >
          <nav className="pt-12 flex justify-between items-center text-[#A8ADB1]">
            <h1 className="text-xl font-semibold spacing tracking-widest uppercase">Idan Joshua</h1>
            <ul className=' gap-x-6 text-xl font-light tracking-wider hidden sm:flex'>
              <li className="">About</li>
              <li className="">Blog</li>
              <li className="">Resume</li>
            </ul>

            <div className="flex sm:hidden relative h-[20px] w-[30px]" onClick={() => { setOpen(open => !open) }}>
              <span className={"absolute block h-[10%] rounded-sm w-full left-0 right-0 top-[0%] bg-[#A8ADB1] "}></span>
              <span className={"absolute block h-[10%] rounded-sm w-full left-0 right-0 top-[40%] bg-[#A8ADB1] transition-all "}></span>
              <span className={"absolute block h-[10%] rounded-sm w-full left-0 right-0 bg-[#A8ADB1] top-[80%]"} ></span>
            </div>

          </nav>

          <section className="introduction flex flex-col sm:flex-row gap-9 items-center mt-14 sm:mt-28">
            <Image src="/large_logo.png" alt="logo" width={150} height={150} />
            <div className="flex flex-col gap-9 sm:gap-6">
              <h2 className="text-3xl text-[#A8ADB1] font-semibold tracking-wide">
                <a href="/about" className="text-white hover:text-blue-500 cursor-pointer">Hello, I&apos;m Idan. </a>
                A software engineer and a front-end developer.
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-9 text-lg tracking-wider text-[#A8ADB1]">
                <a href="https://twitter.com/GarayIdan" target="_blank" className="flex gap-1 items-center cursor-pointer hover:text-white"><AiOutlineTwitter color='#86BFF7' size={20} /> Twitter</a>
                <a href="https://www.linkedin.com/in/idan-joshua-garay-1a4657176/" target="_blank" className="flex gap-1 items-center cursor-pointer hover:text-white"><AiFillLinkedin color='#2967BC' size={20} /> LinkedIn</a>
                <a href="https://github.com/Idan-Garay" target="_blank" className="flex gap-1 items-center cursor-pointer hover:text-white"><AiFillGithub color='#D4D4D4' size={20} /> Github</a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}
