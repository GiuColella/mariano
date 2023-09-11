import React, { useState, useEffect } from 'react';

export default function Menu() {
  const [Contador, setContador] = useState(0);
  const [BotonVisible, setBotonVisible] = useState(true);

  const incrementarContador = () => {
    setContador(Contador + 1);
  };

  useEffect(() => {
    if (Contador > 0) {
      setBotonVisible(false);
    }
  }, [Contador]);

  return (
    <div>
      <h2>Visitas: {Contador}</h2>
      {BotonVisible ? (
        <button onClick={incrementarContador}>Visité este sitio</button>
      ) : (
        <h3>¡Gracias por visitar este sitio!</h3>
      )}
    </div>
  );
}


