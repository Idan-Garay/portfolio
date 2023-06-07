import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

const BlogPage = () => {
    return (
        <div className="mt-20 ">
            <Head>
                <title>Blog | Idan Joshua</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <header>
                <h1 className="text-5xl text-opacity-80 tracking-wide text-white font-bold">Blog</h1>
                <div className="h-3"></div>
                <p className="text-2xl font-medium tracking-wider text-[#A8ADB1]">This is my writing space, where I capture my insights. Stay tuned!</p>

            </header>

            <main>
                <div className="gap h-9"></div>

                <div className="post text-white text-opacity-80">
                    <h2 className="text-3xl tracking-wide hover:text-blue-500 "><Link href="blog/understanding-redux-synchronously">Understanding Redux Synchronously</Link></h2>
                    <div className="gap h-3"></div>
                    <p className="published-date tracking-wider font-mono">February 26, 2022 • 8 mins • Reading</p>
                </div>
            </main>
        </div>
    )
}

export default BlogPage
