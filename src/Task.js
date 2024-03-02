// Task.js
import React from 'react';
import classes from './App.module.css';

const Task = ({ tasks, onToggleTaskDone, onDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className={classes.task}>
          <div className={classes.content} onClick={() => onToggleTaskDone(task.id)}>
            {task.done ? <strike>{task.description}</strike> : task.description}
          </div>
          <button onClick={() => onDeleteTask(task.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default Task;
