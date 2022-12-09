import { useRef, useState } from 'react'
import './CardTask.css'

export const CardTask = (props) => {

  const stage = props.stage || 'None'
  const title = props.title || 'None'

  function getStyleTask(stage) {
    switch(stage){
      case 'To do':
        return 'card-task--to-do'
      case 'In progress':
        return 'card-task--in-progress'
      case 'Done':
        return 'card-task--done'
    }
  }

  return (
    <li className={`card-task ${getStyleTask(stage)}`}>{title}</li>
  )

}

