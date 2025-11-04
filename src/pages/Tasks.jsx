import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskForm from '../components/TaskForm'

const Tasks = () => {
  
  const {listTasks,done} = useContext(TaskContext)
  
  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {listTasks.map(
            (task,index) => (<li key={index}>{task.task} - 
               <input type="checkbox" name="isDone" checked={task.isDone} onChange={() => done(task.id)}/>
            </li>)
        )
        }
      </ul>
      <TaskForm />
    </>
  )
}

export default Tasks