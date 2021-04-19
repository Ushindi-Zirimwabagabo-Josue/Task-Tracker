import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  const [showAddTaskButton, setShowAddTaskButton] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Go to school',
      day: 'Feb 5th',
      reminder: true,
    },
    {
      id: 2,
      title: 'Go to Church',
      day: 'Feb 5th',
      reminder: true,
    },
    {
      id: 3,
      title: 'Doctor appointment',
      day: 'Feb 5th',
      reminder: true,
    },
    {
      id: 4,
      title: 'Do the dishes',
      day: 'Feb 5th',
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminer
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTaskButton(!showAddTaskButton)}
        showAdd={showAddTaskButton}
      />
      {showAddTaskButton && <AddTask onAdd={addTask} />}{' '}
      {/* && is a Shorter way of using a ternary without an else */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No task to show'
      )}
    </div>
  );
}

export default App;
