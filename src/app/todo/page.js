"use client"
import { useState, useEffect } from "react";
import Link from "next/link"
import MyNavbar from "./navbar.js";
import '../index.css'
import '../bootstrap-5.0.2-dist/css/bootstrap.min.css';
// import '../bootstrap-5.0.2-dist/js/bootstrap.min.js';
import{
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
  useParams,
  useNavigate
} from 'react-router-dom'


function Todo() {

    
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // Filtre pour les tâches

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = (todo) => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = [...storedTodos, todo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedTask) => {
    const updatedTodos = todos.map(todo => todo.id === id ? updatedTask : todo);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const toggleTodoState = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.state = todo.state === 0 ? 1 : 0;
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.state === 1;
    } else if (filter === 'pending') {
      return todo.state === 0;
    } else {
      return true;
    }
  });

  return (
    // <div className="grand">
         
    <div className="container">
     <MyNavbar/>

      <h1 className="my-4">Liste de Tâches</h1>
      <TodoForm addTodo={addTodo} className="mb-4"/>
      <div className="mb-3">
        <label className="form-label">Filtrer par état :</label>
        <select className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Toutes</option>
          <option value="completed">Complétées</option>
          <option value="pending">En attente</option>
        </select>
      </div>
      <TodoList todos={filteredTodos} removeTodo={removeTodo} editTodo={editTodo} toggleTodoState={toggleTodoState} />
      
    </div>
    // </div>
  );
}

function TodoList({ todos, removeTodo, editTodo, toggleTodoState }) {
  // const navigate=useNavigate()
  const handleEdit = (id) => {
    const todo = todos.find(todo => todo.id === id);
    // navigate(`/EditTodo/${id}`, { state: { todo } });
  };
//   const navigateToAbout = () => {
//     navigate('/EditTodo');
// };
  return (
    
    <div className="table-responsive small">
  <table className="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">Tâches</th>
        <th scope="col">Description</th>
        <th scope="col">Priorité</th>
        <th scope="col">Départ</th>
        <th scope="col">Fin</th>
        <th scope="col">État</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <tr key={todo.id}>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td>{todo.priority}</td>
          <td>{todo.startDate}</td>
          <td>{todo.endDate}</td>
          <td>
            <input
              type="checkbox"
              checked={todo.state === 1 || new Date(todo.endDate) < new Date()}
              onChange={() => toggleTodoState(todo.id)}
            />
          </td>
          <td>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => removeTodo(todo.id)}
            >
            <Link href={`/edit?id=${todo.id}`}>
            </Link>
              
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  className="w-6 h-6"
>
  <path
    d="M3 6h18l-2 12H5L3 6zm5 2h8M12 17v-5"
  />
</svg>

              {/* Supprimer */}
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleEdit(todo.id)}
            >
              
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  className="w-6 h-6"
>
  <path
    d="M3 18l6-6-2-2 6-6M13 8l6 6-2 2-6 6"
  />
</svg>

              {/* Éditer */}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    
  );
}

function TodoForm({ addTodo }) {
  
  const [task, setTask] = useState({
    id: Math.floor(Math.random() * 1000) + 1,
    title: '',
    description: '',
    priority: 1,
    startDate: '',
    endDate: '',
    state: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask({
      id: Math.floor(Math.random() * 1000) + 1,
      title: '',
      description: '',
      priority: 1,
      startDate: '',
      endDate: '',
      state: 0,
    });
  };

  return (
    // <form onSubmit={handleSubmit} className="needs-validation" noValidate>
    //   <div className="mb-3">
    //     <label className="form-label">Titre :</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       value={task.title}
    //       onChange={(e) => setTask({ ...task, title: e.target.value })}
    //       required
    //     />
    //     <div className="invalid-feedback">Veuillez entrer un titre.</div>
    //   </div>
    //   <div className="mb-3">
    //     <label className="form-label">Description :</label>
    //     <textarea
    //       className="form-control"
    //       value={task.description}
    //       onChange={(e) => setTask({ ...task, description: e.target.value })}
    //       required
    //     />
    //     <div className="invalid-feedback">Veuillez entrer une description.</div>
    //   </div>
    //   <div className="mb-3">
    //     <label className="form-label">Priorité :</label>
    //     <select
    //       className="form-select"
    //       value={task.priority}
    //       onChange={(e) => setTask({ ...task, priority: e.target.value })}
    //       required
    //     >
    //       <option value="1">1</option>
    //       <option value="2">2</option>
    //       <option value="3">3</option>
    //     </select>
    //     <div className="invalid-feedback">Veuillez sélectionner une priorité.</div>
    //   </div>
    //   <div className="mb-3">
    //     <label className="form-label">Date de début :</label>
    //     <input
    //       type="datetime-local"
    //       className="form-control"
    //       value={task.startDate}
    //       onChange={(e) => setTask({ ...task, startDate: e.target.value })}
    //       required
    //     />
    //     <div className="invalid-feedback">Veuillez entrer une date de début.</div>
    //   </div>
    //   <div className="mb-3">
    //     <label className="form-label">Date de fin :</label>
    //     <input
    //       type="datetime-local"
    //       className="form-control"
    //       value={task.endDate}
    //       onChange={(e) => setTask({ ...task, endDate: e.target.value })}
    //       required
    //     />
    //     <div className="invalid-feedback">Veuillez entrer une date de fin.</div>
    //   </div>
    //   <button type="submit" className="btn btn-primary">Ajouter la tâche</button>
    // </form>
    <form onSubmit={handleSubmit} className="space-y-4">
  <div>
    <label htmlFor="title" className="block font-medium">Titre :</label>
    <input
      type="text"
      id="title"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      value={task.title}
      onChange={(e) => setTask({ ...task, title: e.target.value })}
      required
    />
    <div className="text-red-500">Veuillez entrer un titre.</div>
  </div>
  <div>
    <label htmlFor="description" className="block font-medium">Description :</label>
    <textarea
      id="description"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      value={task.description}
      onChange={(e) => setTask({ ...task, description: e.target.value })}
      required
    />
    <div className="text-red-500">Veuillez entrer une description.</div>
  </div>
  <div>
    <label htmlFor="priority" className="block font-medium">Priorité :</label>
    <select
      id="priority"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      value={task.priority}
      onChange={(e) => setTask({ ...task, priority: e.target.value })}
      required
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <div className="text-red-500">Veuillez sélectionner une priorité.</div>
  </div>
  <div>
    <label htmlFor="startDate" className="block font-medium">Date de début :</label>
    <input
      type="datetime-local"
      id="startDate"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      value={task.startDate}
      onChange={(e) => setTask({ ...task, startDate: e.target.value })}
      required
    />
    <div className="text-red-500">Veuillez entrer une date de début.</div>
  </div>
  <div>
    <label htmlFor="endDate" className="block font-medium">Date de fin :</label>
    <input
      type="datetime-local"
      id="endDate"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      value={task.endDate}
      onChange={(e) => setTask({ ...task, endDate: e.target.value })}
      required
    />
    <div className="text-red-500">Veuillez entrer une date de fin.</div>
  </div>
  <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
    Ajouter la tâche
  </button>
</form>

  );
}

export default Todo;
