import React, { useState } from 'react';

const Operaciones = () => {
  const [tiendas, setTiendas] = useState([]);

  const handleTransaction = async () => {
    try {
      const response = await fetch('/api/transaction', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setTiendas(data.tiendas);
      } else {
        console.error('Error al realizar la transacción');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <button
        onClick={handleTransaction}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Realizar transacción
      </button>
      {tiendas.length > 0 && (
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Teléfono</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Dirección</th>
              <th className="px-4 py-2">Ciudad</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Código Postal</th>
            </tr>
          </thead>
          <tbody>
            {tiendas.map((tienda) => (
              <tr key={tienda.id_str}>
                <td className="border px-4 py-2">{tienda.id_str}</td>
                <td className="border px-4 py-2">{tienda.nom_str}</td>
                <td className="border px-4 py-2">{tienda.tel_str}</td>
                <td className="border px-4 py-2">{tienda.email_str}</td>
                <td className="border px-4 py-2">{tienda.st_str}</td>
                <td className="border px-4 py-2">{tienda.cit_str}</td>
                <td className="border px-4 py-2">{tienda.stat_str}</td>
                <td className="border px-4 py-2">{tienda.cp_str}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Operaciones;
