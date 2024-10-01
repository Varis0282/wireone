import React from 'react'
import { PageWithNavbar } from '../../common/components'
import { Link, useNavigate } from 'react-router-dom'
import { setLoading } from '../../redux/loaderReducer.js'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../common/apis/users.js'
import { message } from 'antd'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogin = async (e) => {
    e.preventDefault();
    const key = e.target[0].value;
    const password = e.target[1].value;

    if (!key || !password) {
      return alert('Please fill all the fields');
    }

    dispatch(setLoading(true));

    const data = await loginUser({ key, password });
    if (data.success) {
      localStorage.setItem('token', data.data);
      dispatch(setLoading(false));
      message.success('User logged in successfully');
      navigate('/add');
    } else {
      dispatch(setLoading(false));
      message.error(data.message || 'Something went wrong');
    }
  }


  return (
    <PageWithNavbar>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold'>Login</h1>
        <form className='flex flex-col items-center justify-center mt-8' onSubmit={handleLogin}>
          <input type='text' placeholder='Email or Username*' className='border-b-2 border-black w-80 p-2 my-4' />
          <input type='password' placeholder='Password *' className='border-b-2 border-black w-80 p-2 my-4' />
          <button className='bg-black text-white rounded-3xl px-4 py-2 mt-4' type='submit'>Login</button>
        </form>
        <div className='mt-4'>
          <span>Don't have an account? </span>
          <Link to='/signup' className='text-blue-500'>Signup</Link>
        </div>
      </div>
    </PageWithNavbar>
  )
}

export default Login