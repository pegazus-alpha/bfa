"use client"
import React, { useState } from 'react';
import '../bootstrap-5.0.2-dist/css/bootstrap.min.css';
import '../index.css'
// import '../bootstrap-5.0.2-dist/js/bootstrap.min.js';
function LoginPage() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Gérer la soumission du formulaire ici
    console.log('Formulaire soumis :', { name, firstName, email });

    
  };

  return (
    // <div className="container">
    //   <h1>Connexion</h1>

    //   <form onSubmit={handleSubmit}>
    //     <label className="form-label">Nom:</label>
    //     <input
    //     className="form-control"
    //       type="text"
    //       value={name}
    //       onChange={(event) => setName(event.target.value)}
    //     />

    //     <label className="form-label">Prénom:</label>
    //     <input
    //     className="form-control"
    //       type="text"
    //       value={firstName}
    //       onChange={(event) => setFirstName(event.target.value)}
    //     />

    //     <label className="form-label">Email:</label>
    //     <input
    //     className="form-control"
    //       type="email"
    //       value={email}
    //       onChange={(event) => setEmail(event.target.value)}
    //     />

    //     <button className='btn btn-primary' type="submit">Se connecter</button>
    //   </form>
    // </div>
    <div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">Connexion</h1>

  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-white font-medium mb-2">
        Nom :
      </label>
      <input
        id="name"
        type="text"
        className="form-input w-full rounded-md h-10"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>

    <div>
      <label htmlFor="firstName" className="block text-white font-medium mb-2">
        Prénom :
      </label>
      <input
        id="firstName"
        type="text"
        className="form-input w-full rounded-md h-10"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-white font-medium mb-2">
        Email :
      </label>
      <input
        id="email"
        type="email"
        className="form-input w-full rounded-md h-10"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>

    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
    >
      Se connecter
    </button>
  </form>
</div>


  );
}

export default LoginPage;

