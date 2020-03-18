const Usuarios = {};

Usuarios.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM USUARIO', (err, USUARIO) => {
     if (err) {
      res.json(err);
     }
     res.render('USUARIO', {
        data: USUARIO
     });
    });
  });
};

Usuarios.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO USUARIO set ?', data, (err, USUARIO) => {
      console.log(USUARIO)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM USUARIO WHERE id = ?", [id], (err, rows) => {
      res.render('USUARIO_edit', {
        data: rows[0]
      })
    });
  });
};

Usuarios.update = (req, res) => {
  const { id } = req.params;
  const newUSUARIO = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE USUARIO set ? where id = ?', [newUSUARIO, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

Usuarios.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM USUARIO WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = Usuarios;