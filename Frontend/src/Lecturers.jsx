import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

function Lecturers() {

  const [lecturers, setLecturers] = useState([])

  
  useEffect(() =>{
     axios.get('http://localhost:8000/lecturer/all')
     .then((results) =>{
      setLecturers(results.data);
     })
     .catch((err) =>{
        console.log(err);
     })
  },[])


  const handleDelete = (id) =>{
      axios.delete('http://localhost:8000/lecturer/delete/' +id)
      .then((result) =>{
        console.log(result)
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      })
  }

  
  return (
    <div className="main-body-wrapper w-5/6 bg-white float-right p-[10px] h-[95vh]">
      <div className="main-body p-[10px] flex flex-col w-full">
        <h2 className="uppercase text-[#25233f] font-bold text-[24px]">All Academic Staff</h2>

        <div className='p-1 mt-10 shadow-2xl mainContent'>
          <div className='flex justify-end mr-2'>
          <Link to='/Lecturers/CreateLecturer'><button className='bg-blue-500 hover:bg-blue-900 px-3 py-2 mt-2 rounded-lg text-[17px] text-white font-bold'>Add New<FontAwesomeIcon icon={faPlus} className="mx-2"/></button></Link>
          </div>
            <table className="w-full p-10 mt-5 font-semibold border border-collapse table-fixed border-slate-500">
              <thead>
                  <tr>
                    <th className='w-1/6 p-2 bg-gray-300 border border-slate-600'>Name</th>
                    <th className='w-1/6 p-2 bg-gray-300 border border-slate-600'>Gender</th>
                    <th className='w-1/6 p-2 bg-gray-300 border border-slate-600'>Address</th>
                    <th className='w-1/6 p-2 bg-gray-300 border border-slate-600'>Contact No/ Email</th>
                    <th className='w-1/6 p-2 bg-gray-300 border border-slate-600'>Position</th>
                    <th className='w-1/6 p-2 bg-gray-300 border border-slate-600'>Action</th>
                  </tr>
                </thead>
                <tbody>
                   {
                      lecturers.map((lecturer) => {
                        return <tr key={lecturer._id}>
                                  <td className="p-2 border border-slate-600">{lecturer.name}</td>
                                  <td className="p-2 border border-slate-600">{lecturer.gender}</td>
                                  <td className="p-2 border border-slate-600">{lecturer.address}</td>
                                  <td className="p-2 border border-slate-600">{lecturer.contact} | {lecturer.email}</td>
                                  <td className="p-2 border border-slate-600">{lecturer.position}</td>
                                  <td className="p-2 border border-slate-600"><Link to={`/Lecturers/UpdateLecturer/${lecturer._id}`}><button className='bg-[#5D76A9] hover:bg-[#4C516D] px-2 py-2 mt-2 rounded-lg text-[15px] text-white font-bold'>Update<FontAwesomeIcon icon={faPen} className="mx-2"/></button></Link><button className='bg-red-400 hover:bg-red-900 px-2 py-2 mt-2 ml-2 rounded-lg text-[15px] text-white font-bold' onClick={(e) =>{handleDelete(lecturer._id)}}>Delete<FontAwesomeIcon icon={faTrashCan} className="mx-2"/></button></td>
                               </tr>
                      })
                   }
                  
                </tbody>
            </table> 
            </div>                    

        </div>
    </div>
  )
}

export default Lecturers