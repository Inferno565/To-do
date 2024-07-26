import React, { useState } from 'react'

export default function Task(props) {
    const [completed, setcompleted] = useState(props.data.completed)
    const handleChange = (event) => {
        setcompleted(() => {
            if (completed === false) {
                return true

            }
            else {
                return false
            }

        })
    }
    const complete = () => {
        handleChange();
        return props.complete(props.data.id)
    }

    return (

        <li className="list-group-item d-flex justify-content-between align-items-start" style={{ margin: '7px', backgroundColor: '#1a4062',boxShadow:'5px 5px 5px black' }}>
            <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ fontSize: '20px',color:'white' }}>{props.data.task}</div>
            </div>
            <div className="form-check form-switch"> <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={completed} onChange={complete} />
            </div>
        </li>
    )
}
