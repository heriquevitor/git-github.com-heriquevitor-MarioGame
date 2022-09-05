const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb+srv://heriquevitor:Lcnavi19031950@samsungmario2022.yd0q9ih.mongodb.net/test";

const dbName = "jornada-fullstack-agosto";



async function main() {
console.log("Conectando ao banco de dados");
const client = await MongoClient.connect(url);
const db = client.db(dbName);
const collection = db.collection("pontuacoes");
console.log("Banco de dados conectado com sucesso");

const app = express();

app.get("/", function (req, res){
  res.send("Hello, World!");
});

app.get("/oi", function(req, res){
  res.send("Olá, mundo!");
});
//Lista com as pontuações

const lista = [
  {
    id: 1,
    nome: "Herique",
    pontos: 200,
  },
  {
    id: 2,
    nome: "Daniel",
    pontos: 300,
  },
  {
    id: 3,
    nome: "Bia",
    pontos: 400,
  }];

app.post("/pontuacoes", function(req, res){
  const item = req.body;
  lista.push({
    id: lista.length + 1,
    nome: item.nome,
    pontos: item.pontos,
  });
  
  res.send("Criado com sucesso");
});

app.listen(3000);
}
//Executando a função
main();