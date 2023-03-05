import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";
// import file users di folder "routes". parameter bebas, tapi usersRoutes biar lebih enak trace dan bacanya berasa dari folder mana


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);
// perintah utk manggil seluruh path users pada folder routes pada import usersRoutes diatas


app.get("/", (req, res) => res.send ("Hello from my room!")); 
// bikin route, app.get("/", (req, res)=> {}) dan callback function dalam bentuk short arrow (param, param)=> {method nya})

app.listen(PORT,() => console.log (`Server running on port:http//localhost:${PORT}`)); 
