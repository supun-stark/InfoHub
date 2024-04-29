import React from 'react'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUserGroup, faUser} from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';

function Dashboard() {
  return (
    <div className="float-right w-5/6 p-[10px] h-[95vh] main-body-wrapper bg-white">
        <div className="flex flex-col px-[35px] py-[15px] mx-auto main-body w-90">
        <h3 className=" text-[#25233f] font-bold text-[20px] italic">Hello!</h3>
        <h2 className=" uppercase text-[#25233f] font-bold text-[22px]">Welcome to InfoHub</h2>
             <div className='flex flex-row w-full gap-2 p-2 mt-5 mainContainer'>
                <div className="w-2/3 p-1 cols-2 option-panel">  

                    <div className="w-full gap-5 p-2 option-panel">
                        
                        <div className="w-[500px] p-3 text-center shadow-xl option-card m-auto">
                            <Link to="/Lecturers">
                                <div className="flex items-center justify-center p-1 mx-auto text-center transition-colors duration-1000 shadow-md card shadow-slate-400 bg-gradient-to-tr from-indigo-300 via-indigo-300 to-purple-400 hover:from-pink-300 hover:via-purple-300 hover:to-indigo-400">
                                    <div className="w-1/3 text-white border-[2px] border-white text-[100px]">
        
                                        <FontAwesomeIcon icon={faUserTie} className="" />
                                    </div>
                                    <div className="w-2/3">
                                        <span className="text-white text-[20px] font-bold">Academic Staff</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="w-[500px] p-3 m-auto text-center shadow-xl option-card">
                            <Link to="/NonAcademic">
                                <div className="flex items-center justify-center p-1 mx-auto text-center transition-colors duration-1000 shadow-md card shadow-slate-400 bg-gradient-to-tr from-indigo-300 via-indigo-300 to-purple-400 hover:from-pink-300 hover:via-purple-300 hover:to-indigo-400">
                                    <div className="w-1/3 text-white border-[2px] border-white text-[100px]">
        
                                        <FontAwesomeIcon icon={faUser} className="" />
                                    </div>
                                    <div className="w-2/3">
                                        <span className="text-white text-[20px] font-bold">Non-Academic Staff</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="w-[500px] p-3 m-auto text-center shadow-xl option-card">
                            <Link to="/Students">
                            <div className="flex items-center justify-center p-1 mx-auto text-center transition-colors duration-1000 shadow-md card shadow-slate-400 bg-gradient-to-tr from-indigo-300 via-indigo-300 to-purple-400 hover:from-pink-300 hover:via-purple-300 hover:to-indigo-400">
                                {/* <div className="card p-1 text-center flex mx-auto shadow-md shadow-slate-300 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% justify-center items-center hover:bg-gradient-to-tr hover:from-blue-400 hover:to-emerald-400"> */}
                                    <div className="w-1/3 text-white border-[2px] border-white text-[100px]">
                                     
                                        <FontAwesomeIcon icon={faUserGroup} className="" />
                                    </div>
                                    <div className="w-2/3">
                                        <span className="text-white text-[20px] font-bold" >Students</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                </div>



                
            </div>
            <div className='w-1/3 p-3 calenderContainer'>
              <div className="hidden w-full calendar-card lg:block">
                <div className="p-6 mx-auto shadow-md cal-body shadow-slate-400">
                  <Calendar />
                </div>
              </div>
                        
            </div>
                    


              


        </div>

            
        </div>
    </div>

  )
}

export default Dashboard;