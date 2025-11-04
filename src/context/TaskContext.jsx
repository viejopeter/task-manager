import { createContext,useState } from "react"

const TaskContext = createContext();

const TaskProvider = ({children}) => {
 
 const [listTasks,setListTasks] = useState([
    {id:1,task:"First Task",isDone:false},
    {id:2,task:"Second Task",isDone:true},
    {id:3,task:"Third Task",isDone:true},
    {id:4,task:"Forth Task",isDone:true},
 ])
 
 const done = (id) =>{

    setListTasks(
        (prevListTask) => prevListTask.map(task=>
            task.id === id ? {...task,isDone: !task.isDone} : task
        )
    )
 }

 const addTask =(newTask) =>{
     setListTasks(
        prev => [{...prev,newTask}]
     )
 }

 return (
    <>
      <TaskContext.Provider value={{listTasks,addTask,done}}>
         {children}
      </TaskContext.Provider>
    </>
  )
}

export default TaskProvider
export  { TaskContext }