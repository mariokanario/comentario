import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack, faBan } from '@fortawesome/free-solid-svg-icons'
// id aleatorio
import { nanoid } from 'nanoid'
import Notes from './Notes';

const Layout = () => {

    //Read
   


    //Create

    
    return (
        <>
            <div className='container-comment mx-auto p-4 shadow rounded mt-3' style={{ maxWidth: "500px" }}>
                {/* formulario crear notas */}
                <div className="chat-footer w-100 d-flex ">
                    
                        <form
                            className="w-100 bg-gray p-2"
                        >
                            <div className="info-notes">
                                <p className="badge bg-purple">
                                </p>
                            </div>

                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Escribe tu nota"
                                />
                                <div className="d-block d-md-flex align-items-start">
                                    <button
                                        className="btn btn-primary mt-2 mt-md-0 ms-0 ms-md-2"
                                        type="submit"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-send width-15 height-15"
                                        >
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </button>

                                    <button
                                        className="btn btn-outline-primary ms-2  mt-2 mt-md-0"
                                        type="submit"
                                    >
                                        <FontAwesomeIcon icon={faBan} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    
                        {/* <button
                            className="btn btn-primary mx-auto"
                            onClick={() => setCreateNote(true)}
                        >
                            <FontAwesomeIcon icon={faThumbTack} />
                            <span className="ms-3">Crear nota</span>
                        </button> */}
                  
                </div>

               
                        <Notes 
                        />

            </div>
        </>
    )
}

export default Layout