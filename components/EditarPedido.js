import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { useRouter } from 'next/router';

const EditarPedido = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pedido, setPedido] = useState({
    nombre_cliente: '',
    fecha_creacion: '',
    estado: '',
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('pedidos_li')
      .update({
        nombre_cliente: pedido.nombre_cliente,
        fecha_creacion: pedido.fecha_creacion,
        estado: pedido.estado,
      })
      .eq('id', id);

    if (error) {
      console.error(error);
    } else {
      console.log('Pedido actualizado con éxito');
      router.push('/pedidos');
    }
  };

  const handleChange = (e) => {
    setPedido({ ...pedido, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Editar Pedido {id}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre cliente:
          <input
            type="text"
            name="nombre_cliente"
            value={pedido.nombre_cliente}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha creación:
          <input
            type="date"
            name="fecha_creacion"
            value={pedido.fecha_creacion}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Estado:
          <select name="estado" value={pedido.estado} onChange={handleChange}>
            <option value="">Seleccione un estado</option>
            <option value="pendiente">Pendiente</option>
            <option value="en_proceso">En proceso</option>
            <option value="entregado">Entregado</option>
          </select>
        </label>
        <br />
        <button type="submit">Actualizar pedido</button>
      </form>
    </div>
  );
};

export default EditarPedido;
