import React from "react";
import SideBarPregrado from "./SideBarPregrado";



const CalendarioPregrado = () =>{
    return(
    <>
    
    <div className="d-flex">
        <SideBarPregrado/>
        <div className="card shadow-lg ms-3">
            <div className="card-body">
                <h1 className="card-title">Calendario Pregrado</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
        </div>
    </div>
    </>
    )
}



export default CalendarioPregrado;