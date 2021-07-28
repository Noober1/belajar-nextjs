import { IconButton } from "../../elements/"
import { FaBell, FaAngleDown } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import clsx from "clsx"
import { useState } from "react"

const menus = [
    {link:'/', label:'Home'},
    {link:'/blog', label:'Blog'},
    {link:'/projects', label:'Projects'},
    {link:'/about', label:'About'},
]

const RenderMenu = ({type}) => {
    return(
        <>
            {menus.map(item => {
                return(
                    <Link href={item.link} key={item.label}>
                        <a
                            className={clsx(
                                "text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium",
                                type == 'small' ? 'block' : ''
                            )}
                        >
                            {item.label}
                        </a>
                    </Link>
                )
            })}
        </>
    )
}

const Navbar = () => {

    const [mobileMenuShow, setmobileMenuShow] = useState(false)

    const toggleMobileMenu = () => {
        console.log('terigger')
        setmobileMenuShow(mobileMenuShow ? false : true)
    }

    return (
        <nav className="w-full fixed bg-white">
            <div className="max-w-7xl md:container md:mx-auto">
                <div className="relative flex items-center justify-between h-16">

                    {/* for mobile */}
                    <div className="absolute inset-y-0 left-0 mx-3 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleMobileMenu}
                        >
                            <GiHamburgerMenu/>
                        </button>
                    </div>

                    {/* menus */}
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        <Link href='/'>
                            <a className="flex-shrink-0 flex items-center ml-3">
                                <img className="block sm:hidden lg:block h-8 w-auto" src="/logo-wide.png" alt="Brand" />
                                <img className="hidden sm:block md:block lg:hidden h-8 w-auto" src="/logo.png" alt="Brand" />
                            </a>
                        </Link>
                        <div className="hidden sm:block sm:ml-5">
                            <div className="flex space-x-4">
                                <RenderMenu/>
                            </div>
                        </div>
                    </div>

                    {/* right-side navbar */}
                    <div className="absolute inset-y-0 right-0 flex items-center mx-3 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <IconButton>
                            <FaBell/>
                        </IconButton>
                        <IconButton>
                            <FaAngleDown/>
                        </IconButton>
                    </div>
                </div>

                <div className={clsx(mobileMenuShow ? 'block' : 'hidden',"sm:hidden pb-2 shadow-xl")}>
                    <div className="px-2 pt-2 space-y-1">
                        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
                        <RenderMenu type="small"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
