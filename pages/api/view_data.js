import prisma from '../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const viewData = await prisma.product_view.findMany(); 

      res.status(200).json({ viewData });
    } catch (error) {
      res.status(500).json({ error: 'Error al consultar la vista' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
