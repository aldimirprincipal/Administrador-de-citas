import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('listaCitas'))
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState([]);

  useEffect(() => {
    if(citasIniciales) localStorage.setItem('citas', JSON.stringify(citas));
    else localStorage.setItem('citas', JSON.stringify([]));
  }, [citas, citasIniciales])

  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  };

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  const titulo = citas.length > 0 ? <h2>Administra tus citas</h2> : <h2>No hay citas</h2>;

  return (
    <Fragment>

      <h1>Administrador de pacientes</h1>

      <div className="container">

        <div className="row">

          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>

          <div className="one-half column">
            {titulo}

            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>

        </div>

      </div>
      

    </Fragment>
  );
}

export default App;