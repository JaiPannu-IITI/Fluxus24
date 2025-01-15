import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return (
        <>
            <div className="nav-container flex-none h-auto sticky top-0 z-10">
                <nav className="flex justify-between items-center flex-nowrap relative w-screen bg-[rgba(31,31,31,0.5)] h-[85px] opacity-100 px-[60px] backdrop-blur-[20px]">
                    <div className="logo">
                        <Link href="/">
                            <Image width={200} height={200} src="/logo/white_logo.png" alt='logo'/>
                        </Link>
                    </div>
                    <div className="flex flex-none flex-nowrap gap-[35px] h-min overflow-visible p-0 relative w-min">
                        <div className='flex flex-nowrap w-max' style={{fontFamily:"var(--font-aileron-bold)"}}><Link href="#">Home</Link></div>
                        <div className='flex flex-nowrap w-max' style={{fontFamily:"var(--font-aileron-bold)"}}><Link href="#AU">About Us</Link></div>
                        <div className='flex flex-nowrap w-max' style={{fontFamily:"var(--font-aileron-bold)"}}><Link href="#whyCA">Why CA</Link></div>
                        <div className='flex flex-nowrap w-max' style={{fontFamily:"var(--font-aileron-bold)"}}><Link href="#incentives">Incentives</Link></div>
                        <div className='flex flex-nowrap w-max' style={{fontFamily:"var(--font-aileron-bold)"}}><Link href="#responsibilities">Responsibilities</Link></div>
                        <div className='flex flex-nowrap w-max' style={{fontFamily:"var(--font-aileron-bold)"}}><Link href="#FAQ">FAQ</Link></div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav