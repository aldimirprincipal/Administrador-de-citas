import React from 'react';

const Cita = ({cita, eliminarCita}) => {
    return ( 
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span> </p>
            <p>Propietario: <span>{cita.propietario}</span> </p>
            <p>Fecha: <span>{cita.fecha}</span> </p>
            <p>Hora: <span>{cita.hora}</span> </p>
            <p>Sintomas: <span>{cita.sintomas}</span> </p>

            <button
                onClick={() => eliminarCita(cita.id)}
                className="button eliminar u-full-width"
            >Eliminar x</button>
        </div>
     );
}
 
export default Cita;