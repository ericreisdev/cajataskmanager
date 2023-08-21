const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(express.json());

// Modelo do MongoDB
const FileSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const File = mongoose.model('File', FileSchema);

// Rotas
app.post('/upload', async (req, res) => {
  const { name, url } = req.body;
  const file = new File({ name, url });
  await file.save();
  res.send('Arquivo salvo com sucesso!');
});

app.get('/files', async (req, res) => {
  const files = await File.find();
  res.json(files);
});

// Iniciar servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
