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


  // pantalla ingreso de datos
  
  if (pantallaActual === "registro") {
    return (
      <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
        <h2>Identificación del Votante</h2>
        <p>Por favor, ingresa tus datos para validar tu identidad:</p>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", marginTop: "20px" }}>
          <input 
            type="text" 
            placeholder="Nombre completo" 
            style={{ padding: "10px", width: "300px" }}
            onChange={(e) => setDatosVotante({ ...datosVotante, nombre: e.target.value })}
          />
          
          <input 
            type="text" 
            placeholder="RUT (ej: 12345678-9)" 
            style={{ padding: "10px", width: "300px" }}
            onChange={(e) => setDatosVotante({ ...datosVotante, rut: e.target.value })}
          />
          
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            style={{ padding: "10px", width: "300px" }}
            onChange={(e) => setDatosVotante({ ...datosVotante, correo: e.target.value })}
          />

          <button 
            style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", marginTop: "10px" }}
            onClick={() => setPantallaActual("votacion")}
          >
            Continuar a la Votación
          </button>
        </div>
      </div>
    );
  }
}
