import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { edit_comment } from '../reducers/actions';



const Notes = ({ readNote, id }) => {

    const distpatch = useDispatch()

    const [viewEditNote, setViewEditNote] = useState(false);
    const [note, setNote] = useState("");
    // console.log(note)

    const enviarNotaEditada = (e) => {
        e.preventDefault()

        distpatch(edit_comment({ id: id, nota: note }))
    }


    return (
        <>
            {/* notas creadas */}
            <div className="my-3 notes-container border-bottom pb-2">

                <div className="info-notes">
                    <p className="badge bg-secondary">2:00</p>
                </div>

                {viewEditNote ? (
                    <form 
                    className="notes-details d-flex justify-content-between" 
                    onSubmit={(e)=>{
                        enviarNotaEditada(e)
                        setViewEditNote(false)
                    }}
                    >
                        <input
                            type="text"
                            className="form-control w-100"
                            onChange={(e) => setNote(e.target.value)}
                            defaultValue={readNote}
                        />
                        <div className="notes-button d-block d-md-flex align-items-start ">
                            <button
                                className="btn btn-primary ms-2"
                                type="submit"
                            >
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button
                                className="btn btn-outline-primary ms-2"
                                onClick={() => setViewEditNote(false)}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="notes-details d-flex justify-content-between">
                        <p>{readNote}</p>
                        <div className="notes-button d-block d-md-flex align-items-start">
                            <button
                                className="btn btn-outline-primary ms-2"
                                onClick={() => setViewEditNote(true)}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                                className="btn btn-outline-danger ms-2"
                                onClick={() => setViewEditNote(false)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Notes