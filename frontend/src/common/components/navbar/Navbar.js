import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const returnClassName = (path) => {
    return window.location.pathname === path ? 'bg-black rounded-3xl text-white px-4' : 'px-4 duration-300 hover:bg-black rounded-3xl hover:text-white';
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/login'
  }

  return (
    <div className="flex flex-row justify-between pl-24 pr-32 items-center py-8 font-medium text-xl backdrop-blur-sm">
      <div className='w-2/5'>
        <span>Wireone</span>
      </div>
      <div className='flex w-3/4 justify-between items-center'>
        <NavLink to={'/add'} className={returnClassName('/')}>Home</NavLink>
        <NavLink to={'/add'} className={returnClassName('/add')}>Add Configuration</NavLink>
        <NavLink to={'/add'} className={returnClassName('/logs')}>Logs</NavLink>
        <a href='https://www.varisrajak.tech/' target='_blank' rel='noreferrer' className={returnClassName('/github')}>Portfolio</a>
        <a href='https://github.com/Varis0282' target='_blank' rel='noreferrer' className={returnClassName('/github')}>Github</a>
        <a href='https://www.linkedin.com/in/varis-rajak' className={returnClassName('/linkedin')}>Linkedin</a>
        <button onClick={handleLogout} className={'duration-300 hover:bg-black rounded-3xl hover:text-white px-4'}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar