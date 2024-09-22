import React from 'react'
import Image from 'next/image'
import Styles from './Login.module.css'

const page = () => {
  return (
    <div className={Styles.signInContainer}>
      <Image 
        src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo._CB611756372_.png"
        alt='Logo'
        width={150} 
        height={50} 
        className={Styles.logo}
      />
      <h1>Sign In</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email"/>

        <div style={{
          display: 'flex', 
          justifyContent: 'space-between',
          width:'100%',
          alignItems: 'end'
          }}>
          <label htmlFor="password">Password</label>
          <a href="/#" className={Styles.fp}>Forgot Password?</a>
        </div>
        
        <input type="password" id="password" placeholder="Password"/>

        <button type="submit" className={Styles.signInButton}>Sign In</button>  
      </form>
      <p className={Styles.dontHaveAccount}>
        Don&apos;t have an account? 
        <a href="/signup" className={Styles.signupLink}>Sign Up</a>
      </p>
    </div>
  )
}

export default page