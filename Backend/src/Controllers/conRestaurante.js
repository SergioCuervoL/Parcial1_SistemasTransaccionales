const Restaurante = {};

Restaurante.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM RESTAURANTE', (err, RESTAURANTE) => {
     if (err) {
      res.json(err);
     }
     res.render('RESTAURANTE', {
        data: RESTAURANTE
     });
    });
  });
};

Restaurante.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO RESTAURANTE set ?', data, (err, RESTAURANTE) => {
      console.log(RESTAURANTE)
      res.redirect('/');
    })
  })
};

Restaurante.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM RESTAURANTE WHERE id = ?", [id], (err, rows) => {
      res.render('RESTAURANTE_edit', {
        data: rows[0]
      })
    });
  });
};

Restaurante.update = (req, res) => {
  const { id } = req.params;
  const newRESTAURANTE = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE RESTAURANTE set ? where id = ?', [newRESTAURANTE, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

Restaurante.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM RESTAURANTE WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = Restaurante;