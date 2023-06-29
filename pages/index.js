import React from 'react';
import Operaciones from '../src/components/Operaciones';

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ejemplo de llamadas a BD</h1>
      <Operaciones />
    </div>
  );
}