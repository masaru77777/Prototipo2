"use client";
import { useState } from "react";

export default function AppVotaciones() { 
  const [pantallaActual, setPantallaActual] = useState("inicio"); //con esto cambiamos de pantalla, inicio, registro y votacion

  
  const [datosVotante, setDatosVotante] = useState({ //guardar datos simplemente
    nombre: "",                             
    rut: "",
    correo: ""
  });


  const [votos, setVotos] = useState({ // memoria de los votos
    Lunes: 0,
    Miercoles: 0,
    Viernes: 0,
  });

  const registrarVoto = (opcionSeleccionada) => { // funcion para registrar voto
    setVotos({
      ...votos,
      [opcionSeleccionada]: votos[opcionSeleccionada] + 1,
    });
  };

  //pantalla inicio
  if (pantallaActual === "inicio") {
    return (
      <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
        <h1>Bienvenido al Sistema de Votaciones</h1>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
          <button 
            style={{ padding: "10px 20px", cursor: "pointer" }}
            onClick={() => setPantallaActual("registro")}
          >
            Ingresar a Votar
          </button>
        </div>
      </div>
    );
  }
}