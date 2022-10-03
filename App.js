import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Components/Message'
import Counter from './Components/Counter'
import Product from './Product/Product'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App=()=>{
  return(
    <div>
      <Router>
        <Navbar/ >
          <Product/>
      </Router>
    </div>
  )
}
export default App