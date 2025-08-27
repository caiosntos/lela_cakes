const express = require("express");
const path = require("path");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
app.use(express.json());


app.post('/usuarios', async (req, res) => {  
  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      address: req.body.address
    }
  });

  res.status(201).json(req.body);
});

app.get('/usuarios', async (req, res) => {

  const users = await prisma.user.findMany()
  res.status(200).json(users);
});

app.put('/usuarios/:id', async (req, res) => {  
  await prisma.user.update({
    where:{
      id: req.params.id
    },
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      address: req.body.address
    }
  });

  res.status(201).json(req.body);
});


app.delete('/usuariosq:id', async (req, res) =>{
  await prisma.user.delete({
    where:{
      id: req.params.id
    }
  })
  res.status(200).json({message:'Usuario deletado com sucesso!'});
})

app.use(express.static(path.join(__dirname)));
app.get("/api/hello", (req, res) => {
});

app.listen(5000, () => {
  console.log(`Servidor rodando em http://localhost:${5000}`);
});