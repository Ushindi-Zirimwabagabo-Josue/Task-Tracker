import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    //   setTasks([...tasks, {id: 5, title: 'Stay Home', day: 'today', reminder: false,}])
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
