import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase';

const apiRoutes = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  switch (slug[0]) {
    case 'pedidos':
      switch (req.method) {
        case 'GET':
          return await getPedidos(req, res);
        case 'POST':
          return await createPedido(req, res);
        default:
          return res.status(405).json({ error: 'Método no permitido' });
      }
    default:
      return res.status(404).json({ error: 'Ruta no encontrada' });
  }
};

const getPedidos = async (req, res) => {
  const { data, error } = await supabase
    .from('pedidos_li')
    .select('*')
    .order('fecha_creacion', { ascending: true });

  if (error) {
    return res.status(500).json({ error: 'Error al obtener pedidos' });
  }

  return res.status(200).json(data);
};

const createPedido = async (req, res) => {
  const { body } = req;
  const { data, error } = await supabase
    .from('pedidos_li')
    .insert([body]);

  if (error) {
    return res.status(500).json({ error: 'Error al crear pedido' });
  }

  return res.status(201).json(data);
};

export default apiRoutes;
