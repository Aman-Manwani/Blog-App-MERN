import React, { useState } from 'react'
import './Login.css'

const signUpInitialvalues = {
  name:'',
  username:'',
  password:'',
}

function Login() {
  const [isLogin,setIsLogin] = useState(false);
  const [signUp,setSignUp] = useState(signUpInitialvalues);
  const img_url = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png'

  const handleClick = () => {
    setIsLogin(!isLogin);
  }

  const onInputChange = (e) => {
    setIsLogin({...signUp,[e.target.name]:e.target.value})
  }

  return (
    <div className='main_div'>
        <img className='login_blog_img' src={img_url} alt='Blog' />

        {
          isLogin === true 
          ?
            <div>
              <input type='text' className='username' placeholder='Enter Username' name='username' />
              <input type='password' className='password' placeholder='Enter Password' name='password' />
              <button className='login_btn'>Login</button>
              <p className='or_singup'>OR</p>
              <button className='create_account_btn' onClick={handleClick}>Create An Account</button>
            </div>
          :
          <div>
          <input type='text' className='username' onChange={onInputChange} placeholder='Enter Name' name='name' />
          <input type='text' className='username' onChange={onInputChange} placeholder='Enter Username' name='username' />
          <input type='password' className='password' onChange={onInputChange} placeholder='Enter Password' name='password' />
          <button className='create_account_btn'>Sign Up</button>
          <p className='or_singup'>OR</p>
          <button className='login_btn' onClick={handleClick}>Already Have An Account</button>
        </div>
        }
    </div>
  )
}

export default Login
