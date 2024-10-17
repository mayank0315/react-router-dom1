import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const List = () => {
  return (

    <>
      <div>
        <NavLink className='list-item' to='/item/listitem1'>ListItem1</NavLink>
        <NavLink className='list-item' to='/item/listitem2'>ListItem2</NavLink>
        <NavLink className='list-item' to='/item/listitem3'>ListItem3</NavLink>




      </div>
      <hr className='h-[2px] border-none bg-red-500 my-3' />
      <Outlet />
    </>
  )
}

export default List