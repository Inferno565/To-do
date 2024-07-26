import React, { useState } from 'react'
import '../Styles/Panel.css'
import Task from './Task'
import CompletedTask from './CompletedTask'
import { useEffect } from 'react'
import TodoForm from './TodoForm'



const getInitialData = () => {
    const intialTask = JSON.parse(localStorage.getItem("todos"))
    if (!intialTask) return []
    return intialTask

}


export default function Todos() {

    const [tasks, settasks] = useState(getInitialData)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(tasks))
    }, [tasks])


    function handleRenew(id) {
        console.log(tasks);
        const testTasks = tasks.map(item => item.id === id ? { ...item, completed: false } : item)
        settasks(testTasks)
        //creating a copy of initial array and updating completed status 
    }
    function handleDelete(id) {
        const testTasks = tasks.filter(item => item.id !== id)
        settasks(testTasks)
        console.log(testTasks);
        console.log("deleted")
        //creating a copy of initial array and updating completed status 
    }

    function handleCompletion(id) {
        console.log(tasks);
        const testTasks = tasks.map(item => item.id === id ? { ...item, completed: true } : item)
        settasks(testTasks)

        //creating a copy of initial array and updating completed status 
    }
    const addTodo = (text) => {
        settasks(prevtask => {
            return [...prevtask, { id: crypto.randomUUID(), task: text, completed: false }]
        })
    }

    // const [renew, setrenew] = useState(false)
    return (
        <>

            <div className="panel">
                <TodoForm addTodo={addTodo} />
                <ol className="list-group list-group-numbered">
                    {tasks.map((task) => {
                        if (task.completed !== true) {
                            return (
                                <Task data={task} key={task.id} complete={id => handleCompletion(id)} />
                            )
                        }
                        else {
                            return (<CompletedTask data={task} key={task.id} renew={id => handleRenew(id)} delete={id => handleDelete(id)} />)

                        }
                    })}
                </ol>

            </div>
        </>
    )
}
