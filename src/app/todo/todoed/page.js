
"use client"
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';

function EditTodo({ todos, editTodo }){

        const { id } = useParams();
        // const navigate = useNavigate();
        const todo = todos.find(todo => todo.id === parseInt(id));
      
        const [task, setTask] = useState(todo|| {title: '', description: '', priority: 1, startDate: '', endDate: '' });
        useEffect(() => {
          if (todo) {
            setTask(todo);
          }
        }, [todo]);
      
      
        const handleSubmit = (e) => {
          e.preventDefault();
          editTodo(todo.id, task);
          navigate('/Tasks');
        };
      
        return (
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
    Mettre à jour la tâche
  </button>
</form>

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
          //   <button type="submit" className="btn btn-primary">Mettre à jour la tâche</button>
          // </form>
        );
      };
      
      export default EditTodo;
