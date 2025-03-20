import express from "express";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = 3000;
const app = express();
app.use(express.json());

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database:"szakdolgozat"
});

app.get("/games", async (req, res) => {
     const body = req.body;

     /*
     if(!body){
        throw new Error("A kérésnek tartalmaznia kell a törzset!");
     }
     if(!body.id || typeof(body.id) !== "number"){
        throw new Error("A kérésnek tartalmaznia kell az 'id'-t!");
     }
     if(!body.info_id || typeof(body.info_id) !== "number"){
        throw new Error("A kérésnek tartalmaznia kell az 'info_id'-t!");
     }
     if(!body.game_name || typeof(body.game_name) !== "string"){
        throw  new Error("A kérésnek tartalmaznia kell a játék nevét!")
     }
     if(!body.description || typeof(body.description) !== "string"){
        throw  new Error("A kérésnek tartalmaznia kell a játék leírását!")
     }
     if(!body.price || typeof(body.price) !== "number"){
        throw new Error("A kérésnek tartalmaznia kell a játék árát!");
     }

     const [getGame, ] = await connection.query(["SELECT * FROM `games` WHERE game_name LIKE ?;", body.id, body.info_id, body.game_name, body.description, body.price]);

     console.log(getGame);*/

    try {
        let name = req.query.name;
        let gameName;

        if(!name || typeof(name)!== "string")
        {
            throw new Error("A névnek 'string'-nek kell lennie");
        }



        
    } catch (err) {
        if (err.message.includes("'id' paraméter")) {
            res.status(400).json({
                error: err.message,
            });
            return;
        }

        res.status(500).json({
            error: "Nem sikerült lekérdezni a játékokat!",
        });
    }
});

app.get("/game_info", async (req, res) => {
    
});

app.post("/regisztracio", async (req, res) =>{
    try {
        const body = req.body;
        const [takenUser] = await pool.query('select * from customers where username like ?;', body.username);

        if(takenUser.length !== 0){
            throw new Error("Ez a felhasználónév már foglalt!");
        }

        const secretPassword = await bcrypt.hash(body.password, 14);
        const [newUser] = await pool.query('insert into customers(library_id, username, email, password) values (?,?,?,?);',[body.library_id, body.username, body.email, secretPassword]);
        if(newUser.affectedRows < 1){
            throw new Error("Sikertelen regisztráció!");
        }

        res.status(201).json({message: "Sikeres regisztráció!"});
    }
    catch (err) {
        console.log(err);
        if(err.message.includes("Érvénytelen!")){
            res.status(400).json({
                error: err.message
            });
            return;
        }
        res.status(500).json({
            error: "valami hiba történt!"
        });
    }
});

app.post("/bejelentkezes", async (req, res) => {

})



app.listen(port, () =>{
    console.log("A szerver elindult localhost:"+port+"-on!");
})