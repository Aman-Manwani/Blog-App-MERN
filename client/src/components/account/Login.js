import React, { useState,useContext } from 'react'
import './Login.css'
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const signUpInitialvalues = {
  name:'',
  username:'',
  password:'',
}

const loginInitialvalues = {
  username:'',
  password:'',
}

function Login() {
  const [isLogin,setIsLogin] = useState(true);
  const [signUp,setSignUp] = useState(signUpInitialvalues);
  const [login,setLogin] = useState(loginInitialvalues);
  const [error,setError] = useState('');

  const {setAccount} = useContext(DataContext)
  const navigate = useNavigate();

  const img_url = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png'

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  }

  const onInputChange = (e) => {
    setSignUp({...signUp,[e.target.name]:e.target.value})
  }

  const signUpUser =async () => {
    let res = await API.userSignUp(signUp)
    if(res.isSuccess){
      setError('');
      setSignUp(signUpInitialvalues);
      setIsLogin(!isLogin);
    }else{
      setError('Something Went Wrong! Please try again Later');
    }
  }

  const onValueChange = (e) => {
    setLogin({...login,[e.target.name]:e.target.value})
  }

  const loginUser = async() => {
    let res = await API.userLogin(login);
    if(res.isSuccess)
    {
      setError('');
      sessionStorage.setItem('accessToken',`Bearer ${res.data.accessToken}`)
      sessionStorage.setItem('refreshToken',`Bearer ${res.data.refreshToken}`)
      setAccount({username:res.data.username,name:res.data.name})
      navigate('/');
    }else{
      setError('Something Went Wrong! Please try again Later');
    }
  }

  return (
    <div className='main_div'>
        <img className='login_blog_img' src={img_url} alt='Blog' />

        {
          isLogin === true 
          ?
            <div>
              <input type='text' className='username' onChange={onValueChange} placeholder='Enter Username' name='username' />
              <input type='password' className='password' placeholder='Enter Password' onChange={onValueChange} name='password' />
              <button className='login_btn' onClick={loginUser}>Login</button>
              <p className='or_singup'>OR</p>
              <button className='create_account_btn' onClick={toggleLogin}>Create An Account</button>
            </div>
          :
          <div>
          <input type='text' className='username' onChange={onInputChange} placeholder='Enter Name' name='name' />
          <input type='text' className='username' onChange={onInputChange} placeholder='Enter Username' name='username' />
          <input type='password' className='password' onChange={onInputChange} placeholder='Enter Password' name='password' />
          {error && <p>{error}</p>}
          <button className='create_account_btn' onClick={signUpUser}>Sign Up</button>
          <p className='or_singup'>OR</p>
          <button className='login_btn' onClick={toggleLogin}>Already Have An Account</button>
        </div>
        }
    </div>
  )
}

export default Login
