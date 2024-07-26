
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import "../index.css"

// import { Link } from 'react-router-dom';
import { useNavigate,BrowserRouter as Router, } from 'react-router-dom';


function HomePage() {
  // const navigate = useNavigate();

  const navigateToAbout = () => {
    // navigate('/Tasks');
  };
  return (
    
    // <div className="HomePage">
    //   <header className="HomePage-header">
    //     <h1>Bienvenue sur TodoList !</h1>
    //     <p>Organisez vos tâches et gagnez en productivité.</p>
    //     <img src="https://picsum.photos/200/300?image=1005" alt="Image TodoList" />
    //   </header>

    //   <div className="HomePage-content">
    //     <p>Créez des listes de tâches, définissez des priorités et des dates d'échéance, et suivez votre progression pour atteindre vos objectifs.</p>
    //   </div>

    //   <div className="HomePage-action">
    //     <button onClick={navigateToAbout} className="btn btn-primary">
    //     <Link href="../todo" className='text-white'>Créer votre TodoList</Link>
        
    //     </button>
    //   </div>
    // </div>
    <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center">
      {/* Grande image de fond */}
      <img
        src="./r.jpg"
        alt="Background Image"
        className="w-full h-full absolute inset-0 opacity-50"
      />
      <div className="relative z-10 text-white text-center">
        {/* Texte de bienvenue */}
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre site !</h1>
        <p className="text-lg mb-8">Découvrez notre contenu incroyable.</p>
        {/* Bouton pour la suite */}
        <a className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300">
        <Link href="/todo">
            Découvrir
        </Link>
        </a>
        </div>
        </div>
  );
}

export default HomePage;
























