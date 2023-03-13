import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsLinkedin, BsGithub, BsSun}  from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Idan Joshua</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className=" min-h-[100vh] h-full w-full dark:bg-black">
        <header className='w-full border flex justify-center pt-[15px] px-[15%]'>
          <nav className="mx-auto flex justify-center gap-x-8 md:gap-x-14 items-center min-w-[280px] md:min-w-[400px] min-h-[50px] h-[50px] border w-[400px] rounded-full text-sm font-semibold uppercase text-gray-700">
            <Link className='' href={"/"}>Projects </Link>
            <Link className='' href={"/"}>About</Link>
            <Link className='' href={"/"}>Contact</Link>
          </nav>
          <div className="nav-tools flex items-center border md:gap-x-3 ">
            <Link className='hidden md:block' href={'/'}><BsGithub size={25}/></Link>
            <Link className='hidden md:block' href={'/'}><BsLinkedin size={25}/></Link>
            <div className="rounded-full border h-[30px] w-[30px]">
              <BsSun size={25} className='m-auto'/>
            </div>
          </div>
        </header>

      </main>

      <footer className="">
      </footer>
    </div>
  )
}
