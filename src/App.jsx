import { useState } from 'react'
import './App.css'
import Item from './Item/Item'

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = (e) => {
    e.preventDefault()
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <>
      <div className='container'>

        <h1 className='zagolovka'>Todo List</h1>
        <form className='formm'>
        <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Введите задачу" 
        className='inputtext'
        maxLength={18}
      />
          <button type='submit' className='add' onClick={addTask}>Add</button>
        </form>

      <hr/>
        <div className="items">


        {tasks.map((t, index) => (
        <div key={index} className="item">
          <div className="left">
            <span>{t}</span>
            <span className="time">18:44</span>

          </div>
          <div className="right">
            <button className='subb' onClick={() => removeTask(index)}>
              <img src="/delete.svg" alt="" />
            </button>
          </div>
        </div>
        ))} 


        </div>

      </div>

    </>

  )

}

export default App
