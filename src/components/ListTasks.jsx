import { useState } from 'react'
import './CardTasks.css'
import {CardTask} from './CardTask'

export const ListTasks = (props) => {

  const stage = props.stage || 'None'
  const [tasks,setTasks] = useState(props.tasks || []) 

  return (
    <div className="list-tasks">
      <h2 className='list-tasks--title'>{stage}</h2>
      <ul className='list-tasks--container'>
        {
          tasks.map((item,index) => (
            <CardTask key={index} title={item} stage={stage}  />
            )
          )
        }
      </ul>
    </div>
    )
}