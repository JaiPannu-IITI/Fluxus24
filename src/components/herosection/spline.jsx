import Spline from '@splinetool/react-spline/next';

import Link from 'next/link'

export default function Home() {

  const scrolls = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
  ]
  return (
    <div >
    
      <Spline
        scene="https://prod.spline.design/F3-FHsfqj4t-hIH7/scene.splinecode" 
        className= "  absolute w-[100dvw] h-[100dvh] "
      />
     

      <div className=' absolute    h-[70px] bottom-[18px]  z-10 w-full flex justify-end px-[18px]' >

<Link href="#">
<div className=' flex items-center justify-center font-bold h-[70px] rounded-xl  w-[140px]   bg-[rgba(20,20,20,1)] hover:scale-[1.05] transition-all duration-300 '>
      <img src="/logo/fluxus.png" alt="Fluxus 24" className=" h-[3rem] brightness-0 invert"/>
</div>
</Link>


</div>

    </div>
  );
}
