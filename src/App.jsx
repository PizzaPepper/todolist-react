import './App.css'
import { ListTasks } from './components/ListTasks'
function App() {



  return (
    <div className="center">
        <header className='header'>
            <div className="container right-items"> 
              <button className='btn'>New Task</button>
            </div>
        </header>
        <main>

        <div className="container container-cards ">
          <div className="grid-cards">
            <ListTasks stage="To do" tasks={['Buy medicines', 'Go to the dentist','Do shopping','Call to the car service']}/>
            <ListTasks stage="In progress" />
            <ListTasks stage="Done"/>
          </div>
        </div>
        </main>
    </div>
  )
}

export default App
