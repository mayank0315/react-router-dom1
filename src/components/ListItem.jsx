import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const ListIem = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
  return (
    <div>
        <h1 className='text-3xl text-red-500'>{params.i}</h1>
        <button className='px-4 py-2 bg-slate-700 rounded' onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default ListIem