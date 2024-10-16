import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import PageNotFound from './components/PageNotFound'
import List from './components/List'
import ListIem from './components/ListItem'


const App = () => {
  return (
    <div className='p-10 bg-zinc-300 w-[70%] m-auto mt-5'>
      <Nav/>
      
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path='/item' element={<List/>}/>
          <Route path='/item/:i' element={<ListIem/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App