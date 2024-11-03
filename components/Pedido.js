import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

const Pedido = ({ id }) => {
  const [pedido, setPedido] = useState({});

  useEffect(() => {
    const fetchPedido = async () => {
      const { data, error } = await supabase
        .from('pedidos_li')
        .select('*')
        .eq('id', id);

      if (error) {
        console.error(error);
      } else {
        setPedido(data[0]);
      }
    };

    fetchPedido();
  }, [id]);

  return (
    <div>
      <h1>Pedido {id}</h1>
      <p>Nombre cliente: {pedido.nombre_cliente}</p>
      <p>Fecha creación: {pedido.fecha_creacion}</p>
      <p>Estado: {pedido.estado}</p>
    </div>
  );
};

export default Pedido;
