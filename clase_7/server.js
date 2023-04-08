const express = require('express');
const multer = require('multer');
const router = express.Router();

const app = express();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Ruta para subir archivos
router.post('/upload', upload.single('file'), (req, res) => {
  res.send('Archivo subido correctamente');
});

// Agrega el router a la aplicación
app.use('/', router);

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});


