import { ChevronRight } from "lucide-react"
import { useState } from "react";
import { Link } from "react-router-dom"


const AuthScreen = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="hero-bg relative">
            <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <img src="/netflix-logo.png" alt="logo" className="w-52" />

                <button className="p-5 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
                    <Link to={'/login'}>

                        Sign In
                    </Link>
                </button>

            </header>

            <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlimited movies, TV<br></br>  shows and more</h1>
                <p className="text-lg mb-4">Starts at ₹149. Cancel at any time.</p>
                <p className="mb-4">ready to watch? enter your email to create or restart your membership</p>

                <form className="flex flex-col md:flex-row gap-4 w-1/2 ">
                    <input type="email" placeholder="Email address" className="p-2 rounded flex-1" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">Get Started
                        <ChevronRight classNameName="size-8 md:size-10" />
                    </button>
                </form>
            </div>
            <div className="h-2 w-full bg-[#232323] " aria-hidden='true' />

            <div className="py-10 bg-black text-white">
                <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">enjoy on your TV</h2>
                        <p className="text-lg md:text-xl">watch on smart Tv</p>

                    </div>
                    <div className="flex-1 relative">
                        <img src="/tv.png" alt="tv image" className="mt-4 z-20" />
                        <video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
                            playsInline
                            autoPlay={true}
                            muted
                            loop
                        >
                            <source src='/hero-vid.m4v' type='video/mp4' />
                        </video>
                    </div>
                </div>

            </div>
            <div className="h-2 w-full bg-[#232323] " aria-hidden='true' />


            <div className="py-10 bg-black text-white">
                <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">

                    <div className="flex-1 ">
                        <div className="relative">
                            <img src="/stranger-things-lg.png" alt="stranger" className="mt-4" />

                            <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                                <img src="stranger-things-sm.png" alt="stranger sm" className="h-full" />
                                <div className="flex justify-between items-center w-full">

                                    <div className="flex gap-0 flex-col">
                                        <span className="text-md lg:text-lg">Stranger things</span>
                                        <span className="text-sm text-blue-500">Downloading....</span>
                                    </div>
                                    <img src="/download-icon.gif" alt="" className="h-12" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 ">

                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">Download your shows to watch offline</h2>
                        <p className="text-lg md:text-xl">save your easily and always have something to watch</p>


                    </div>


                </div>
                <div className="h-2 w-full bg-[#232323] " aria-hidden='true' />
                <div className="py-10 bg-black text-white">
                    <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Watch Everywere</h2>
                            <p className="text-lg md:text-xl">stream unlimited movie shows on your phone,tablet,laptop ,and tv;</p>

                        </div>
                        <div className="flex-1 relative overflow-hidden">
                            <img src="device-pile.png" alt="device image" className="mt-4 z-20" />
                            <video className="absolute top-1/2 left-2  -translate-y-1/2 h-4/6 z-10 max-[63%]:"
                                playsInline
                                autoPlay={true}
                                muted
                                loop
                            >
                                <source src='/video-devices.m4v' type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-[#232323] " aria-hidden='true' />

                </div>
                <div className="py-10 bg-black text-white">
                    <div className="flex max-w-6xl items-center justify-center flex-col-reverse px-4 md:px-2  mx-auto md:flex-row">
                        <div className="flex-1 relative">
                            <img src="/kids.png" alt="enjoy tv" className="mt-4" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Create profiles for kids</h2>
                            <p className="text-lg md:text-xl">send kids for adventures with their favourite character in a space made just for them -free with your membership;</p>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-[#232323] " aria-hidden='true' />
                </div>
            </div>








            <footer className="bg-black">
                <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-teal-300 sm:justify-start">
                                <svg
                                    className="h-8"
                                    viewBox="0 0 118 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                </svg>
                            </div>

                            <p
                                className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left"
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                                consequuntur amet culpa cum itaque neque.
                            </p>

                            <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
                                <li>
                                    <a
                                        href="/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-teal-500 transition hover:text-teal-500/75"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >

                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-teal-500 transition hover:text-teal-500/75"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >

                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-teal-500 transition hover:text-teal-500/75"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >

                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-teal-500 transition hover:text-teal-500/75"
                                    >
                                        <span className="sr-only">GitHub</span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >

                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-teal-500 transition hover:text-teal-500/75"
                                    >
                                        <span className="sr-only">Dribbble</span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >

                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4"
                        >
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">About Us</p>

                                <nav className="mt-8">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                Company History
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                Meet the Team
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                Employee Handbook
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                Careers
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">Our Services</p>

                                <nav className="mt-8">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                Web Development
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                Web Design
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                Marketing
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                Google Ads
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">Helpful Links</p>

                                <nav className="mt-8">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                FAQs
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-white transition hover:text-white/75" href="/">
                                                Support
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="flex group justify-center sm:justify-start gap-1.5"
                                                href="/"
                                            >
                                                <span className="text-white transition group-hover:text-white/75">
                                                    Live Chat
                                                </span>

                                                <span className="relative flex w-2 h-2 -mr-2">
                                                    <span
                                                        className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"
                                                    ></span>
                                                    <span
                                                        className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"
                                                    ></span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">Contact Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a
                                            className="flex items-center justify-center sm:justify-start gap-1.5 group"
                                            href="/"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-white shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"

                                            >

                                            </svg>

                                            <span className="text-white transition group-hover:text-white/75">
                                                john@doe.com
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="flex items-center justify-center sm:justify-start gap-1.5 group"
                                            href="/"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-white shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"

                                            >

                                            </svg>

                                            <span className="text-white transition group-hover:text-white/75">
                                                0123456789
                                            </span>
                                        </a>
                                    </li>

                                    <li
                                        className="flex items-start justify-center gap-1.5 sm:justify-start"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-white shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"

                                        >

                                        </svg>

                                        <address className="-mt-0.5 not-italic text-white">
                                            213 Lane, London, United Kingdom
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 mt-12 border-t border-gray-800">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-400">
                                <span className="block sm:inline">All rights reserved.</span>

                                <a
                                    className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                    href="/"
                                >
                                    Terms & Conditions
                                </a>

                                <span>&middot;</span>

                                <a
                                    className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                    href="/"
                                >
                                    Privacy Policy
                                </a>
                            </p>

                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                                &copy; Netflix india
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>


    )
}

export default AuthScreen