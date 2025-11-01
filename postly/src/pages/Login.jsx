import React from 'react'
import { assets } from '../assets/assets.js'
import { Star } from 'lucide-react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row '>
      <img src={assets.bgImage} alt="" className="absolute top-0 left-0" />
      <div className='flex-1 flex flex-col items-start justify-between lg pl-40 p-6 md:p-10'>
        <img src={assets.logo} alt="" className='h-12 object-contain' />
        </div>
        <div>
          <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
            <img src={assets.group_users} alt="" className="h-8 md:h-10"/>
            <div>
              <div className="flex">
                {Array(5).fill(0).map((_,i)=><Star key={i} className='size-4 md:size-4.5 text-transparent fill-amber-500'/>)}
              </div>
              <p>Used by 12k+ developers</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Login
