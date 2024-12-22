import React from 'react';
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
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
                        <button>
                            <img src='' alt='' />
                        </button>
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