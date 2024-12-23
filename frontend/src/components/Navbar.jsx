import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import avataIMG from '../assets/avatar.png'

const navigation = [
    {name: "Dashboard", href: "/dashboard"},
    {name: "Orders", href: "/Order"},
    {name: "Cart Page", href: "/cart"},
    {name: "Check Out", href: "/checkout"},
]

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const CurrentUser = false;
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            { /* lef side */}
            <div className='flex items-center md:gap-15 gap-4'>
                <Link to="/">
                    <HiBars3CenterLeft className='size-6'/>
                </Link>

                {/* search input */}
                <div className='relative sm:w-72 w-40 space-x-2'>

                    <IoSearch className='absolute inline-block left-3 inset-y-2'/>

                    <input type='text' placeholder='Search here' 
                    className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md 
                    focus:outline-none' />
                </div>
            </div>

            {/* right side */}
            <div className='relative flex items-center md:space-x-3 space-x-2'>
                <div>
                    {
                        CurrentUser ? <>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <img src={avataIMG} alt='' className={`size-7 rounded-full 
                            ${CurrentUser ? 'ring-2 ring-blue-500' : ''}`} />
                        </button>
                        {/* show dropdown */}
                        {
                            isDropdownOpen && (
                                <div className='absolute right-0 mt-2 w-48 bg-white 
                                shadow-lg rounded-md z-40'>
                                    <ul className='py-2'>
                                        {
                                            navigation.map((item) => (
                                                <li key = {item.name} onClick={() => 
                                                    setIsDropdownOpen(false)
                                                }>
                                                    <Link to={item.href} className='block 
                                                    px-4 py-2 text-sm hover:bg-gray-100'>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        </> : <Link to="/login"><FaUserCircle className='size-6' /></Link>
                    }
                </div>

                <button className='hidden sm:block'>
                    <CiHeart className='size-6' />
                </button>

                <Link to="/cart" className='bg-primary flex p-1 sm:px-6 px-2 items-center 
                rounded-sm'>
                    <MdOutlineShoppingCart className='' />
                    <span className='text-sm font-semibold sm:ml-1'>0</span>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar