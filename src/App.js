// Dependancies
import { useState } from 'react' // useState is a method that allows a functional component to use the state object

// Importing components being nested into our App
import './App.css'; // App styling
import Header from './Components/Header' // Header component
import Tasks from './Components/Tasks'  // Tasks component
import AddTask from './Components/AddTask' // AddTask component


// Main component: App
function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  // Setting data called 'tasks' to be accessible by state object,
  // Declaring setTasks as a method to manip data
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb.5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])

// - Add Task Function -
const addTask = (task) => {
  console.log(task);

  // Generates a random number to assign to id for new tasks and logs the id to console
  const id = Math.floor(Math.random() * 10000) + 1;
  console.log(id);

  // new task stores id and other tasks
  const newTask = { id, ...task }

  // set state of tasks to have all previous tasks as well as the newTask being added
  setTasks([...tasks, newTask])
}

// - Delete Task Function -
// Takes in id of task
// Calls on 'setTasks' to manipulate tasks data
// Call on ES6 .filter() method to look through each task,
// then find the id of the task id being passed in,
// and create a new array of tasks based on the condition, which is:
// The task.id should have an id equal to the id that was passed in (b/c it's being deleted)
const deleteTask = (id) => {
  console.log('delete', id)

  setTasks(tasks.filter((task) => task.id !== id ))
}

// - Toggle Reminder Function -
// Passes in task.id, catching task as a prop
// Calls on setTasks to manipulate the tasks useState data
// Call on ES6 .map() method to take in and apply a function to each task, which is:
// if the task's id in the current iteration is equal to id being passed in,
// then return an object that copies/ spreads all the properties and values of the tasks,
// but change the 'reminder:' property to set it to the opposite of what it already is
// otherwise return the task (no change)
const toggleReminder = (id) => {
  console.log(id)

  setTasks(
    tasks.map((task) =>
     task.id === id ? { ...task, reminder:
     !task.reminder } : task
    )
  )
}

  // You can define variables within the component and use them in curly braces within the return (see h2)
  const name = 'Dazrin'

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
       <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
       ) : (
      'No tasks To Show'
      )}
    </div>
  );
}

export default App;
