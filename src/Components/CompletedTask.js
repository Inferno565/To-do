import React, { useState } from 'react'

export default function CompletedTask(props) {
    const [completed, setcompleted] = useState(props.data.completed)

    return (
        <li className="list-group-item d-flex align-items-start justify-content-between"  style={{
            margin: '7px', backgroundColor: '#1a4062', boxShadow: '5px 5px 5px black'
        }}>
            <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ fontSize: '20px', color: 'white' }}>{props.data.task}</div>
            </div>
            <div className="d-flex justify-content-around">
                <div className="form-check form-switch mx-3"> <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.data.completed} />
                </div>
                <button type="button" class="btn btn-dark mx-3" onClick={() => props.renew(props.data.id)}>Renew Task</button>
                <button type="button" class="btn btn-dark" onClick={() => props.delete(props.data.id)}>Delete Task</button>
            </div>
        </li>
    )
}
