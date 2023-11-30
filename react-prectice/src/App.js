import React from 'react'
import Counter from './Components/Counter';
import Form from './Components/Form';
import { CardOne } from './Components/Props';
import Crud from './Components/Crud';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Result from './Components/Result';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Crud /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <CardOne name="React JS" btnText="Click Me" /> */}
      {/* <CardOne name="Node JS" btnText="Visit Me" /> */}
      <Navbar />
      {/* <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} /> */}
      {/* <Route path="/:title" exact element={<Result />} /> */}
      {/* </Routes> */}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' exact element={<About />} />
        <Route path='/Contact' exact element={<Contact />} />
        <Route path="/:title" exact element={<Result />} />

      </Routes>

    </div>
  )
}

export default App;