import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      BY MP 
      <FaInstagram className='logo'/>
      <FaTwitter className='logo'/>
      <FaFacebookSquare className='logo'/>
    </div>
  )
}

export default Footer
