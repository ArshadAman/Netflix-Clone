import React from 'react'
import "./SignInScreen.css"

function SignInScreen() {
  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit'>Sign In</button>

            <h4>New to Netflix? <span><a href="/">Sign Up Now.</a></span></h4>
        </form>
    </div>
  )
}

export default SignInScreen