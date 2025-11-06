import React, { useState } from 'react'
import '../ForgotPassword/ForgotPassword.css'
const Forgotpassword = () => {
  const [email, setEmail] = useState('')

   const handleSubmit = (evt)=>{
      evt.preventDefault();
      // console.log(email);
    }
  return (

 <>
 <div className="main">
 <div className="Forget-card">
 <h1>Forgot Password</h1>
        <p>Enter your email address and we'll send you instructions to reset your password.</p>
        <form onSubmit={handleSubmit}>
        <label className='label-tag'>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} className='input' type="email" placeholder="Enter your email" value={email} />
                <button className='btn' type='submit'>Send Reset Instructions</button>
</form>
 </div>
 </div>
 </>
  )
}

export default Forgotpassword
