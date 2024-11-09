import Link from 'next/link'
import React from 'react'
import '@/public/styles/header.css'

const Header = () => {
  return (
    <div id='main'>
    <h1 id='logo'><Link href="/">NexMind</Link></h1>
    <div id='nav'>
      <div id='links'>
      <button><Link href="/">Home</Link></button>
      <button><Link href="/about" >About-Us</Link></button>
      <button><Link href="/contact">Contact-Us</Link></button>
      </div>
    </div>
  </div>
  )
}

export default Header