import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ToDo from './views/ToDo';
import PokeAPI from './views/PokeAPI';

export default function App() {
    return (
        <>
            <Navbar />
            
            <div className='container'>
                <Routes>
                  <Route path='/' element={ <ToDo /> } /> 
                  <Route path='/poke' element={ <PokeAPI />} /> 
                </Routes>
            </div>
        </>
    )
}