import Image from "next/image"
import Styles from "./Signup.module.css"

const page = () => {
  return (
    <div className={Styles.createAccountContainer}>
        <Image 
        src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo._CB611756372_.png"
        alt='Logo'
        width={150} 
        height={50} 
        className={Styles.logo}
        />
        <h1>Create Account</h1>
        <form>
            
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" placeholder="Your Name"/>
        
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email"/>
    
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="At least 6 characters"/>
            <p className={Styles.passwordInfo}>Password must be atleast 6 characters</p>

            <label htmlFor="password-again">Password Again</label>
            <input type="password" id="password-again" placeholder=""/>
    
            <button type="submit" className={Styles.createAccountButton}>Create your account</button> 
        </form>

        <p className={Styles.alreadyHaveAccount}>Already have an account? <a href="/login">Sign in</a></p>

    </div>
  )
}

export default page