import { useState } from 'react';
import { supabase } from '../utils/supabase';

const CrearPedido = () => {
  const [nombreCliente, setNombreCliente] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('pedidos_li')
      .insert([{ nombre_cliente: nombreCliente, fecha_creacion: fechaCreacion, estado: estado }]);

    if (error) {
      console.error(error);
    } else {
      console.log('Pedido creado con éxito');
    }
  };

  return (
    <div>
      <h1>Crear Pedido</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre cliente:
          <input type="text" value={nombreCliente} onChange={(e) => setNombreCliente(e.target.value)} />
        </label>
        <br />
        <label>
          Fecha creación:
          <input type="date" value={fechaCreacion} onChange={(e) => setFechaCreacion(e.target.value)} />
        </label>
        <br />
        <label>
          Estado:
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="">Seleccione un estado</option>
            <option value="pendiente">Pendiente</option>
            <option value="en_proceso">En proceso</option>
            <option value="entregado">Entregado</option>
          </select>
        </label>
        <br />
        <button type="submit">Crear pedido</button>
      </form>
    </div>
  );
};

export default CrearPedido;
