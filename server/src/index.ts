const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

app.listen(3001, () => console.log(`server running on port ${3001}`));

app.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
})

app.post("/", async (req, res) => {
  const newUsers = await prisma.user.create({ data: req.body });
  res.json(newUsers);
})