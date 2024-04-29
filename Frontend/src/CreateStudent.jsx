import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function CreateStudent() {

  const [name, setName] = useState()
  const [gender, setGender] = useState()
  const [address, setAddress] = useState()
  const [contact, setContact] = useState()
  const [email, setEmail] = useState()
  const [faculty, setFaculty] = useState()
  const navigate = useNavigate()

  const handleRadioChange = (e)=>{
      setGender(e.target.value);
  };

  const submitStudentData = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:8000/student/add',{name, gender, address, contact, email, faculty})
      .then((result) =>{
         console.log(result);
         navigate('/Students');
      })
      .catch(err =>{
        console.log(err);
      })
      
  };

  
  return (
    <div className="main-body-wrapper w-5/6 bg-slate-200 float-right p-[10px] h-[95vh]">
      <div className="main-body p-[10px] flex flex-col w-full h-auto">
        <h2 className="uppercase text-[#25233f] font-bold text-[24px]">Add Students</h2>
        
                <div className='p-5 mx-5 my-2 formContainer'>
            
                <form onSubmit={submitStudentData} className="p-7 bg-white w-[800px] mx-auto my-0 rounded-lg shadow-xl">
                  
                  
                  
                <div className="w-full px-3">
                  <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-name">
                    Name
                  </label>
                  <input className="block w-full px-4 py-3 mb-4 text-xl leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value)}/>
            
                  <span className="block mb-1 text-sm font-bold tracking-wide text-gray-700 uppercase mt-7">
                    Gender
                  </span>

                  <div className="flex flex-row gap-16 px-4 py-2 mb-5">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" checked={gender === 'Male'} onChange={handleRadioChange}/>
                            <label className="form-check-label text-[18px] text-gray-500" htmlFor="inlineRadio1"> Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" checked={gender === 'Female'} onChange={handleRadioChange}/>
                            <label className="form-check-label text-[18px] text-gray-500" htmlFor="inlineRadio2"> Female</label>
                        </div>
                  </div>
                  <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-address">
                    Address
                  </label>
                  <input className="block w-full px-4 py-3 mb-4 text-xl leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)}/>
                  
                  <div className="flex flex-wrap mt-6 mb-4">
                    <div className="w-1/2 pr-3">
                      <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-contact">
                        Contact No
                      </label>
                      <input className="block w-full px-4 py-3 mb-3 text-xl leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white" id="grid-contact" type="text" placeholder="Enter contact no" onChange={(e) => setContact(e.target.value)}/>
                    
                    </div>
                  <div className="w-1/2 pl-3">
                    <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-email">
                      Email
                    </label>
                    <input className="block w-full px-4 py-3 text-xl leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  </div>
                  <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-faculty">
                    Faculty
                  </label>
                  <input className="block w-full px-4 py-3 text-xl leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-faculty" type="text" placeholder="Enter faculty" onChange={(e) => setFaculty(e.target.value)}/>

                  <div className='flex justify-center mt-6'>
                  <button className="px-4 py-2 font-bold text-white bg-green-600 rounded shadow hover:bg-green-900 focus:shadow-outline focus:outline-none" type="submit">
                    Submit
                    <FontAwesomeIcon icon={faPaperPlane} className="mx-2" /></button>
                  </div>

                 
      
                  
                </div>
                    
               </form>
          </div>



      </div>
    </div>
  )
}

export default CreateStudent