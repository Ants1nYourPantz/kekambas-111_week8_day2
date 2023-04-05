import React, { useEffect, useState } from 'react';

export default function PokeAPI() {
  const [name, setName] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    if (!name) {
      return;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        setHeight(data.height);
        setWeight(data.weight);
      })
      .catch(err => console.error(err));
  }, [name]);

  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.pokemon.value;
    setName(name);
    form.reset();
  }

  return (
    <div>
      <h1 className='text-center'>PokeAPI</h1>

      <form className='row' onSubmit={handleFormSubmit}>
        <div className='col-8'>
          <input type='text' className='text form-control' name='pokemon' />
        </div>
        <div className='col'>
          <input type='submit' value='Search' className='btn btn-dark w-100'/>
        </div>
      </form>

      {name && (
        <div className='card text-left'>
          <div className='card-body'>
            <h4 className='card-title'>{name}</h4>
            <p className='card-text'>Height: {height} Weight: {weight}</p>
          </div>
        </div>
      )}
    </div>
  )
}