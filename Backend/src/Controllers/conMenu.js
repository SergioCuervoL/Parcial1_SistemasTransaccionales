const Menu = {};

Menu.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM MENU', (err, MENU) => {
     if (err) {
      res.json(err);
     }
     res.render('MENU', {
        data: MENU
     });
    });
  });
};

Menu.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO MENU set ?', data, (err, MENU) => {
      console.log(MENU)
      res.redirect('/');
    })
  })
};

MENU.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM MENU WHERE id = ?", [id], (err, rows) => {
      res.render('MENU_edit', {
        data: rows[0]
      })
    });
  });
};

Menu.update = (req, res) => {
  const { id } = req.params;
  const newMENU = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE MENU set ? where id = ?', [newMENU, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

Menu.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM MENU WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = Menu;