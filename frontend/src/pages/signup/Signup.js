import React from 'react'
import { PageWithNavbar } from '../../common/components'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../../common/apis/users'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/loaderReducer.js'

const Signup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const AddUser = async (e) => {
    e.preventDefault();

    if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
      return message.error('Please fill all the fields');
    }

    const body = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value
    }
    dispatch(setLoading(true));
    const data = await addUser(body)
    if (data.success) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user));
      message.success('User added successfully');
      navigate('/login');
    } else {
      message.error(data.message || 'Something went wrong');
    }
    dispatch(setLoading(false));
  }


  return (
    <PageWithNavbar>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold'>Signup</h1>
        <form className='flex flex-col items-center justify-center mt-8'
          onSubmit={AddUser}
        >
          <input type='text' placeholder='Name *' className='border-b-2 border-black w-80 p-2 my-4' />
          <input type='email' placeholder='Email *' className='border-b-2 border-black w-80 p-2 my-4' />
          <input type='password' placeholder='Password *' className='border-b-2 border-black w-80 p-2 my-4' />
          <button className='bg-black text-white rounded-3xl px-4 py-2 mt-4' type='submit'>Signup</button>
        </form>
        <div className='mt-4'>
          <span>Already have an account? </span>
          <Link to='/login' className='text-blue-500'>Login</Link>
        </div>
      </div>
    </PageWithNavbar>
  )
}

export default Signup