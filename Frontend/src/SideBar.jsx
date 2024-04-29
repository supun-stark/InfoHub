import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faUserGraduate, faUserTie, faUserPlus, faUserGroup, faRightFromBracket, faUser} from "@fortawesome/free-solid-svg-icons";


function SideBar() {

        const [activeLink, setActiveLink] = useState("Home");
      
        const handleLinkClick = (link) => {
          setActiveLink(link);
        };

    const linkClassName ="text-xl text-gray-400 mb-5 p-3 hover:text-white flex items-center justify-start transition-colors duration-300";

    const activeLinkClassName ="text-xl text-white mb-5 p-3 flex items-center justify-start transition-colors duration-300";

    const activeIconClassName = "text-xl text-purple-500 mx-2";


  return (
    <div className="side-body-wrapper flex flex-col float-left w-1/6 p-[10px] bg-[#4b477a] h-[95vh]">
        <div className="flex flex-col p-6 h-[95vh] side-option-panel1">
                <a
                href="/"
                className={
                    activeLink === "Home" ? activeLinkClassName : linkClassName
                }
                onClick={() => handleLinkClick("Home")}
                >
                <FontAwesomeIcon
                    icon={faHouse}
                    className={activeLink === "Home" ? activeIconClassName : "mx-2"}
                />
                Home
                </a>
                <a
                href="/Lecturers"
                className={
                    activeLink === "Academic Staff" ? activeLinkClassName : linkClassName
                }
                onClick={() => handleLinkClick("Academic Staff")}
                >
                <FontAwesomeIcon
                    icon={faUserTie}
                    className={
                    activeLink === "Academic Staff" ? activeIconClassName : "mx-2"
                    }
                />
                Academic Staff
                </a>
                <a
                href="/NonAcademic"
                className={
                    activeLink === "Non Academic" ? activeLinkClassName : linkClassName
                }
                onClick={() => handleLinkClick("Non Academic")}
                >
                <FontAwesomeIcon
                    icon={faUser}
                    className={
                    activeLink === "Non Academic" ? activeIconClassName : "mx-2"
                    }
                />
                Non Academic
                </a>

                <a
                href="/Students"
                className={
                    activeLink === "Students" ? activeLinkClassName : linkClassName
                }
                onClick={() => handleLinkClick("Students")}
                >
                <FontAwesomeIcon
                    icon={faUserGroup}
                    className={
                    activeLink === "Students" ? activeIconClassName : "mx-2"
                    }
                />
                Students
                </a>
                <a
                href="/Lecturers/CreateLecturer"
                className={
                    activeLink === "Add Academic" ? activeLinkClassName : linkClassName
                }
                onClick={() => handleLinkClick("Add Academic")}
                >
                <FontAwesomeIcon
                    icon={faUserPlus}
                    className={
                    activeLink === "Add Academic" ? activeIconClassName : "mx-2"
                    }
                />
                Add Academic
                </a>
                <a
                href="/NonAcademic/CreateNonAcademic"
                className={
                    activeLink === "Add Non Academic" ? activeLinkClassName : linkClassName
                }
                onClick={() => handleLinkClick("Add Non Academic")}
                >
                <FontAwesomeIcon
                    icon={faUser}
                    className={
                    activeLink === "Add Non Academic" ? activeIconClassName : "mx-2"
                    }
                />
                Add Non Academic
                </a>
                <a
                href="/Students/CreateStudent"
                className={
                    activeLink === "Add Students" ? activeLinkClassName : linkClassName
                }
                onClick={() => handleLinkClick("Add Students")}
                >
                <FontAwesomeIcon
                    icon={faUserGraduate}
                    className={
                    activeLink === "Add Students" ? activeIconClassName : "mx-2"
                    }
                />
                Add Students
                </a>
                <div className="flex-grow"></div>
                <hr className="border-slate-400" />
                <div className="flex flex-col p-6 side-option-panel ">
                    {/* <a
                    href="#"
                    className="p-2 mb-4 text-gray-800 bg-purple-500 rounded-md hover:shadow-md hover:text-white"
                    >
                    {" "}
                    <FontAwesomeIcon icon={faCircleQuestion} className="mx-2" />
                    Help
                    </a> */}
                    {/* <a
                    href="#"
                    className="p-2 mb-4 text-gray-800 bg-purple-500 rounded-md hover:shadow-md hover:text-white"
                    >
                    {" "}
                    <FontAwesomeIcon icon={faPhone} className="mx-2" />
                    Contact Us
                    </a> */}
                    <a
                    href="#"
                    className="p-2 mb-3 text-gray-800 bg-purple-500 rounded-md hover:shadow-md hover:text-white"
                    >
                    {" "}
                    <FontAwesomeIcon icon={faRightFromBracket} className="mx-2" />
                    Logout
                    </a>
                </div>
            
        </div>
    </div>

  )
}

export default SideBar;