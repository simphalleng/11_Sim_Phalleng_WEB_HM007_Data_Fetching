import React from 'react'
import NavbarComponent from './NavbarComponent'
import Link from 'next/link'
const HomepageComponent = () => {
  return (
  <div>
    <NavbarComponent/>
    <div className="relative w-full h-svh">
  <Link href={`/`}>
    <img src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x" className=" image w-full h-full absolute top-0 left-0 ">
    </img>
  </Link>
  <div className="overlay absolute h-full bg-black opacity-35 z-50 w-full" ></div>
</div>
  </div>
  
  
  )
}

export default HomepageComponent
