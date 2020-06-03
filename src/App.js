import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Title from './Component/Title'
import Buscador from './Component/SerchFom.js'



function App() {

  return (
    <div className="App">
        <Title>Buscador de Peliculas</Title>
        <div className ="searchForm"> 
          <Buscador />
        </div>
    </div>
  );
}

export default App;
