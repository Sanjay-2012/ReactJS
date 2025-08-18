import React, { Component } from 'react';

class TodoList extends Component {
  constructor() {
    super();
  }

  state = {
    tasks: [],
    newTask: ""
  };

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    const text = this.state.newTask.trim();
    if (text !== "") {
      this.setState((prev) => ({
        tasks: [...prev.tasks, { text, completed: false }],
        newTask: ""
      }));
    }
  };

  deleteTask = (index) => {
    this.setState((prev) => {
      const updated = [...prev.tasks];
      updated.splice(index, 1);
      return { tasks: updated };
    });
  };

  CompleteButton = (index) => {
    this.setState((prev) => {
      const Complete = prev.tasks.map((item) =>
        typeof item === 'string' ? { text: item, completed: false } : item
      );
      const updated = Complete.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      );
      return { tasks: updated };
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleChange}
          placeholder="Enter a task"
        />
        <br /><br />
        <button onClick={this.addTask}>Add</button>

        <ul>
          {this.state.tasks.map((task, index) => {
            const text = typeof task === 'string' ? task : task.text;
            const done = typeof task === 'string' ? false : task.completed;

            return (
              <li key={index} style={{ textDecoration: done ? 'line-through' : 'none' }}>
                {text}
                <button style={{ marginLeft: '10px' }} onClick={() => this.CompleteButton(index)}>
                  {done ? 'Undo' : 'Completed'}
                </button>
                <button style={{ marginLeft: '10px' }} onClick={() => this.deleteTask(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
