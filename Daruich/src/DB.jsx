const express = require('express');
const app = express();
const mysql = require('mysql');

// Reemplaza estos valores con tus propias credenciales de base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
});

connection.connect();

app.use(express.json());

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  connection.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    (error, results, fields) => {
      if (error) {
        res.status(500).send('Error al registrar al usuario');
      } else {
        res.status(200).send('Usuario registrado con éxito');
      }
    }
  );
});


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
