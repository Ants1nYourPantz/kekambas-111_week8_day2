import React, { useEffect, useState } from 'react';

export default function PokeAPI() {

  const [name, setName] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();


  useEffect(() => {
    console.log("Hello Effect")
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const pokeHeight = data.height
        const pokeWeight = data.weight
        setName(pokeHeight, pokeWeight);
      })
  }, [name]);

  const handleFormSubmit = event => {
    event.preventDefault();
    let name = event.target.name.value;
    setName(name);
    // event.target.name.value = '';
  }

  return (
    <div>
        <h1 className='text-center'>PokeAPI</h1>

        <form action="" className='row' onSubmit={handleFormSubmit}>
          <div className='col-8'>
            <input type="text" className="text form-control" name='pokemon' />
          </div>
          <div className='col'>
            <input type="submit" value='Search' className='btn btn-dark w-100'/>
          </div>
        </form>

        <div class="card text-left">
          <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <p class="card-text">Height: {height} Weight: {weight}</p>
          </div>
        </div>
    </div>
  )
}
