import React from 'react'
import { useNavigate } from 'react-router-dom'

const service = () => {
  const navigate = useNavigate()
  const SubmitHandler = (e) =>{
    e.preventDefault()
    navigate("/")
  }
  return (
    <>
    <div>service</div>

    <form onSubmit={SubmitHandler}>
      <button className='px-2 py-1 bg-red-500 rounded'>Submit</button>
    </form>
    </>
  )
}

export default service