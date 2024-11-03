import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      const { data, error } = await supabase
        .from('pedidos_li')
        .select('*')
        .order('fecha_creacion', { ascending: true });

      if (error) {
        console.error(error);
      } else {
        setPedidos(data);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div>
      <h1>Pedidos</h1>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            <Link href={`/pedidos/${pedido.id}`}>
              <a>{pedido.nombre_cliente}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pedidos;
