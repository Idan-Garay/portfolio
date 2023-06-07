import Head from 'next/head'
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  
  return (
    <div className="bg-black">
      <Head>
        <title>Idan Joshua</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>


      <section className="introduction flex flex-col sm:flex-row gap-9 items-center mt-14 sm:mt-28">
        <Image src="/large_logo.png" alt="logo" width={150} height={150} />
        <div className="flex flex-col gap-9 sm:gap-6">
          <h2 className="text-3xl text-[#A8ADB1] font-semibold tracking-wide">
            <Link href="/about" className="text-white hover:text-blue-500 cursor-pointer">Hello, I&apos;m Idan. </Link>
            A software engineer and a front-end developer.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-9 text-lg tracking-wider text-[#A8ADB1]">
            <Link href="https://twitter.com/GarayIdan" target="_blank" className="group flex gap-1 items-center cursor-pointer text-[#86BFF7] hover:text-[#86BFF7]"><AiOutlineTwitter size={20} /> <span className="group text-[#A8ADB1] group-hover:text-[#86BFF7]">Twitter</span></Link>
            <Link href="https://www.linkedin.com/in/idan-joshua-garay-1a4657176/" target="_blank" className="group flex gap-1 items-center cursor-pointer text-[#2967BC] hover:text-[#2967BC]"><AiFillLinkedin size={20} /> <span className="group text-[#A8ADB1] group-hover:text-[#2967BC]">LinkedIn</span></Link>
            <Link href="https://github.com/Idan-Garay" target="_blank" className="group flex gap-1 items-center cursor-pointer text-[#A8ADB1] hover:text-white"><AiFillGithub size={20} /> <span className="group text-[#A8ADB1] group-hover:text-white ">Github</span></Link>
          </div>
        </div>
      </section>

      <section className="posts-section flex flex-col mt-28">
        <h3 className="tracking-wide uppercase text-xl font-mono ">Recent Posts</h3>

        <div className="post flex flex-col mt-6">
          <h2 className="text-3xl tracking-wide hover:text-blue-500 "><Link href="blog/understanding-redux-synchronously">Understanding Redux Synchronously</Link></h2>
          <p className="published-date tracking-wider">February 26, 2022 • 8 mins • Reading</p>
          <div className="gap h-3"></div>
          <p className="description tracking-wider line-clamp-3">{'Passing data to a component is exhausting especially when the data is needed several components deep. This is called prop drilling, the same data passes through nested components to a specific child component, in between, the components receive the data just to pass it to another child component. It can be very tedious if you have deep nested components.'}</p>

        </div>
      </section>

    </div >
  )
}
