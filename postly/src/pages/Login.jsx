import React from 'react'
import { assets } from '../assets/assets.js'
import { Star } from 'lucide-react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row '>
      <img src={assets.logo} alt="" className="absolute top-0 left-0"/>
    </div>
  )
}

export default Login
