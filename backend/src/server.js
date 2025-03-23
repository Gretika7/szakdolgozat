import express from "express";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const port = 5000;
const app = express();
app.use(express.json());

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database:"szakdolgozat"
});

app.get("/games/:game_name", async (req, res) => {
    try {
        const [game] = await pool.query("SELECT * FROM games WHERE game_name LIKE ?;");
        res.json(game);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Nem sikerült lekérdezni a játékokat!" });
    }
});

app.get("/game_info", async (req, res) => {
    try {
        const [Game_info] = await pool.query("SELECT * FROM game_info;");
        res.json(Game_info);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Nem sikerült lekérdezni a játékokat!" });
    }
});

app.post("/regisztracio", async (req, res) =>{
    try {
        const body = req.body;
        const [takenUser] = await pool.query('select * from customers where username like ?;', body.username);

        if(takenUser.length !== 0){
            res.json({message: "A felhasználónév foglalt!"});
        }

        const secretPassword = await bcrypt.hash(body.password, 14);
        const [newUser] = await pool.query('insert into customers(username, email, password) values (?,?,?);',[body.username, body.email, secretPassword]);
        if(newUser.affectedRows < 1){
            res.status(500).json({message: "Sikertelen regisztráció!"});
        }

        res.status(201).json({message: "Sikeres regisztráció!"});
    }
    catch (err) {
        console.log(err);
        if(err.message.includes("Érvénytelen!")){
            res.status(400).json({
                message: err.message
            });
            return;
        }
        res.status(500).json({
            message: "valami hiba történt!"
        });
    }
});

app.post("/Bejelentkezes", async (req, res) => {
    try {
        const body = req.body;

        if (Object.keys(body).length !== 2) {
            throw new Error(
                "Érvénytelen kérelem törzsre, tartalmaznia kell a „felhasználónév” és a „jelszó” mezőket"
            );
        }

        if (!body.username || typeof body.username !== "string") {
            throw new Error(
                "Érvénytelen kérelem törzsre, a „felhasználónév” mezőnek karakterláncnak kell lennie."
            );
        }

        if (!body.password || typeof body.password !== "string") {
            throw new Error(
                "Érvénytelen kérelem törzsre, a „felhasználónév” mezőnek karakterláncnak kell lennie."
            );
        }

        const [user] = await pool.query(
            "SELECT * FROM users WHERE username like ?;",
            [body.username]
        );
        if (user.length === 0) {
            throw new Error("Érvénytelen hitelesítő adatok.");
        }

        const validPassword = await bcrypt.compare(
            body.password,
            user[0].password
        );
        if (!validPassword) {
            throw new Error("Érvénytelen hitelesítő adatok.");
        }

        const Token = jwt.sign(
            { _id: user[0].id },
            "secret",
            {}
        );

        res.json({ token: Token });
    } catch (err) {
        console.error(err);
        if (err.message.includes("Érvénytelen!")) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.status(500).json({ error: "Valami hiba történt." });
    }
});



app.listen(port, () =>{
    console.log("A szerver elindult localhost:"+port+"-on!");
})