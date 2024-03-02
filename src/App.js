// App.js
import React, { useState } from 'react';
import classes from './App.module.css';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Remercier Christ en chantant', done: false },
    { id: 2, description: 'Aller chercher les courses', done: false },
    { id: 3, description: 'Aller chercher les enfants', done: false }
  ]);
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      description: newTaskDescription,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskDescription(''); // Réinitialiser le champ après l'ajout
  };

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className={classes.App}>
      <header>
        <span>TO-DO</span>
      </header>

      <div className={classes.add}>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Que souhaitez-vous ajouter ?"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>

      <Task tasks={tasks} onToggleTaskDone={toggleTaskDone} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
