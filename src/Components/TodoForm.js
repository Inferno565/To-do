import React from 'react'
import { useState } from 'react'
import '../Styles/form.css'
export default function TodoForm(props) {
    const [text, settext] = useState("")

    const handleChange = (event) => {
        settext(event.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.addTodo(text)
        settext("")
    }
 
    return (
        <>
            <div className="form-container">
                <form action="" onSubmit={handleSubmit} >
                    <label htmlFor="task">Enter Your Task</label>
                    <input type="text" name='task' onChange={handleChange} value={text} placeholder='Walk the dog..' required/>
                    <button>✏️</button>
                </form>
            </div>
        </>
    )
}
