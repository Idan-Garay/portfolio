import Head from 'next/head'
import React from 'react'

const AboutPage = () => {
    return (
        <div className="mt-20">
            <Head>
                <title>About | Idan Joshua</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <main className='flex flex-col gap-6'>
                <h1 className="text-5xl text-opacity-80 tracking-wide text-white font-bold">Hey, I&apos;m Idan 👋🏼</h1>
                <p className="text-lg font-light tracking-wider text-[#A8ADB1]">
                    {"Started dabbling with front-end development at 2017 specifically HTML/CSS/JS for curiosity. At present, my main area of concentration revolves around Typescript and React."}
                </p>
                <p className="text-lg font-light tracking-wider text-[#A8ADB1]">
                    {"By the year 2019, I’ve started to dive deep in the Javascript Programming Language through coding mini-projects to test my insights from reading the book “You Don’t Know JS Yet” book series until I was able to make full-stack web applications using the MERN stack"}
                </p>
                <p className="text-lg font-light tracking-wider text-[#A8ADB1]">
                    {"Right now, I am focusing in frontend development side project utilizing Storybook.js. This tool allows me to isolate UI components and ensure their responsiveness as I develop them, taking into account the separation of concerns."}
                </p>

                <h3 className="tracking-wide uppercase text-xl font-mono ">Previously</h3>
                <p className="text-lg font-light tracking-wider text-[#A8ADB1]">For a duration of 7 months, I held the position of a frontend software engineer at an IT Consulting Company. During this time, my main focus was on utilizing React.js for web development and Flutter for mobile development. Additionally, I had the opportunity to work collaboratively in a team setting.</p>

            </main>
        </div >
    )
}

export default AboutPage