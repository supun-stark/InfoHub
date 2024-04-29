import './App.css'
import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Students from './Students'
import NavBar from './components/NavBar'
import SideBar from './SideBar'
import Dashboard from './components/Dashboard'
import Lecturers from './Lecturers'
import CreateStudent from './CreateStudent'
import CreateLecturer from './CreateLecturer'
import UpdateStudent from './UpdateStudent'
import UpdateLecturer from './UpdateLecturer'
import NonAcademic from './NonAcademic'
import CreateNonAcademic from './CreateNonAcademic'
import UpdateNonAcademic from './UpdateNonAcademic'


function App() {

  return (
    <>
      <NavBar/>
      <SideBar/>
      
      <BrowserRouter>
        <Routes>
            <Route index element={<Dashboard/>} />
            <Route path='/Students' element={<Students/>}></Route>
            <Route path='/Lecturers' element={<Lecturers/>}></Route>
            <Route path='/Students/CreateStudent' element={<CreateStudent/>}></Route>
            <Route path='/Lecturers/CreateLecturer' element={<CreateLecturer/>}></Route>
            <Route path='/Students/UpdateStudent/:id' element={<UpdateStudent/>}></Route>
            <Route path='/Lecturers/UpdateLecturer/:id' element={<UpdateLecturer/>}></Route>
            <Route path='/NonAcademic' element={<NonAcademic/>}></Route>
            <Route path='/NonAcademic/CreateNonAcademic' element={<CreateNonAcademic/>}></Route>
            <Route path='/NonAcademic/UpdateNonAcademic/:id' element={<UpdateNonAcademic/>}></Route>
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
