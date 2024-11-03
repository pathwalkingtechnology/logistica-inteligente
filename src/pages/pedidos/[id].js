import Link from 'next/link';

const PedidoPage = () => {
  return (
    <div>
      <h1>Pedido {id}</h1>
      <p>Nombre cliente: {pedido.nombre_cliente}</p>
      <p>Fecha creación: {pedido.fecha_creacion}</p>
      <p>Estado: {pedido.estado}</p>
      <Link href={`/pedidos/${id}/editar`}>
        <a>Editar pedido</a>
      </Link>
    </div>
  );
};
