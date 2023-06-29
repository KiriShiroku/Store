import prisma from '../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await prisma.tienda.create({
        data: {
          id_str: 2,
          nom_str: 'TiendaABC',
          tel_str: '1234567890',
          email_str: 'tiendaabc@gmail.com',
          st_str: 'Calle Principal',
          cit_str: 'Ciudad ABC',
          stat_str: 'Estado ABC',
          cp_str: 12345,
        },
      });

      const updatedTiendas = await prisma.tienda.findMany();
      res.status(200).json({ tiendas: updatedTiendas });
    } catch (error) {
      res.status(500).json({ error: 'Error al realizar la transacción' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
