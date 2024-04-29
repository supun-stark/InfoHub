import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
        
        <div className="flex items-center justify-between w-full h-[103px] p-5 bg-[#25233f]">
            <div className="ml-5 logo">
                <h1 className="flex items-center text-4xl text-white cursor-pointer">
                    <FontAwesomeIcon icon={faPeopleGroup} className="p-2 mr-1" />
                    InfoHub
                </h1>
            </div>

            <div className="flex items-center mr-5 profile">
                <div className="mx-10 search">
                    <form>
                        <div className="flex items-center p-1 bg-white rounded-md">
                            <input
                                className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                                type="text"
                                placeholder="Search Here.."
                                // value={query}
                                // onChange={handleChange}
                            />
                            <button
                                className="flex-shrink-0 px-2 py-1 text-sm text-purple-900 rounded hover:bg-gray-300"
                                type="submit"
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mr-5 notify-panel">
                    <FontAwesomeIcon icon={faBell} className="text-2xl text-white cursor-pointer hover:text-gray-300"/>
                </div>

                <div className="text-xl text-white cursor-pointer profile-name">
                    <span className='hover:text-gray-300'>Jack Tailar</span>
                </div>
            </div>
        </div>


  )
}

export default NavBar