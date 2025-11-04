import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskForm = () => {
    
    const {addTask} = useContext(TaskContext);

    const formStructure = {id:"",task:"",isDone:false}

    const[formData,setFormData] = useState(formStructure)
  
    const handleDataTask = (e) =>{

         const {name,value,type,checked} = e.target;
         setFormData(
            prev => ({...prev,[name]: type === "checkbox" ? checked : value})
         )
    }

    const handleFormTask = (e) => {
        e.preventDefault()
        addTask(formData)
        setFormData(formStructure)
    }
  
    return (
    <>
      <form onSubmit={handleFormTask}>
           <label htmlFor="task">
                Task
           </label>
           <input 
               type="text"
               name="task"
               value={formData.task}
               onChange={(e) =>handleDataTask(e) }
           />
           <label htmlFor="isDone">
              Done
           </label>
           <input 
              type="checkbox"
              name="isDone"
              checked={formData.isDone}
              onChange={(e) => handleDataTask(e)}
           /><button type="submit">New Task</button>
      </form>
    </>
  )
}

export default TaskForm