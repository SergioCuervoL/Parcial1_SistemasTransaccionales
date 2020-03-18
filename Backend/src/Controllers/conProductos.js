const Productos = {};

Productos.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM PRODUCTO', (err, PRODUCTO) => {
     if (err) {
      res.json(err);
     }
     res.render('PRODUCTO', {
        data: PRODUCTO
     });
    });
  });
};

Productos.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO PRODUCTO set ?', data, (err, PRODUCTO) => {
      console.log(PRODUCTO)
      res.redirect('/');
    })
  })
};

Productos.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM PRODUCTO WHERE id = ?", [id], (err, rows) => {
      res.render('PRODUCTO_edit', {
        data: rows[0]
      })
    });
  });
};

Productos.update = (req, res) => {
  const { id } = req.params;
  const newPRODUCTO = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATEPRODUCTO set ? where id = ?', [newPRODUCTO, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

Productos.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM PRODUCTO WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = Productos;