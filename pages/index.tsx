import Head from 'next/head'
import Link from 'next/link'
import {BsLinkedin, BsGithub, BsSun, BsMoon}  from 'react-icons/bs'
import {useTheme} from 'next-themes'

export default function Home() {
  const {theme, setTheme} = useTheme()

  return (
    <div>
      <Head>
        <title>Idan Joshua</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className=" min-h-[100vh] h-full w-full dark:bg-black">
        <header className='w-full relative flex justify-center pt-[15px] px-[15%]'>
          <nav className="mx-auto flex justify-center gap-x-8 md:gap-x-14 items-center min-w-[280px] md:min-w-[400px] min-h-[50px] h-[50px] border w-[400px] rounded-full text-sm font-semibold uppercase text-gray-700 dark:text-white dark:text-opacity-90">
            <Link className=' hover:text-highlight' href={"/"}>Projects </Link>
            <Link className='hover:text-highlight' href={"/"}>About</Link>
            <Link className='hover:text-highlight' href={"/"}>Contact</Link>
          </nav>
          <div className="nav-tools absolute flex self-center  right-5 sm:right-10 md:right-30 lg:right-40 md:gap-x-3 ">
            <Link className='hover:text-highlight hidden md:block' href={'/'}><BsGithub size={25}/></Link>
            <Link className='hover:text-highlight hidden md:block mr-3' href={'/'}><BsLinkedin size={25}/></Link>
            <div className="hover:text-highlight hover:cursor-pointer rounded-full h-[28x] w-[28px]" onClick={() => theme === 'dark'? setTheme('light'):  setTheme('dark')}>
              {
                theme === 'dark'
                ? <BsMoon size={25} className='m-auto' />
                :<BsSun size={25} className='m-auto' />
              }
            </div>
          </div>
        </header>

      </main>

      <footer className="">
      </footer>
    </div>
  )
}
