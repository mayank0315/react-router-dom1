import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <div className='flex gap-4'>
        <NavLink style={(e) => e.isActive ? { textDecoration: 'underline' } : undefined} className={(e)=> e.isActive ? "text-red-500": ""} to="/">Home</NavLink>
        <NavLink  style={(e) => e.isActive ? { textDecoration: 'underline' } : undefined} className={(e)=> e.isActive ? "text-red-500": ""}  to="/about">About</NavLink>
        <NavLink  style={(e) => e.isActive ? { textDecoration: 'underline' } : undefined} className={(e)=> e.isActive ? "text-red-500": ""}  to="/service">service</NavLink>
    </div>
  )
}

export default Nav