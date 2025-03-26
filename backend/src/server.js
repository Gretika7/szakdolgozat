import express from "express";
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database:"gamersmarket"
});

app.get("/games", async(req, res) => {
    try {
        const [games] = await pool.query("SELECT * FROM games");
        res.json(games);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Valami hiba történt." });
    }
});

//megvásárolt játékok -> get
//cart -> post
//módosítás -> put 

app.get("/mygames", async(req, res) => {
    try{
        const [mygames] = await pool.query("SELECT title, price FROM games WHERE id = ?;");
        res.json(mygames);
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: "Valami hiba történt."});
    }
});

app.post("/cart", async(req, res) => {
    try{
        const body = req.body;
        const [mycart] = await pool.query("INSERT INTO shopping(date) VALUES (?);", [body.date]);
        if(mycart.affectedRows < 1){
            res.status(500).json({message: "Sikertelen vásárlás!"});
        }
        res.status(201).json({message: "Sikeres vásárlás!"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: "Valami hiba történt."});
    }
});

app.put("/user", async(req, res) => {
try {
    const body = req.body;
    const [update] = await pool.query("UPDATE users SET username = ?, email = ? WHERE id = ?", [body.username, body.email, body.id]);
    if(update.affectedRows < 1){
        res.status(500).json({message: "Sikertelen módosítás!"});
    }
    res.status(201).json({message: "Sikeres módosítás!"});
} catch (error) {
    
}
});

app.post("/register", async (req, res) =>{
    try {
        const body = req.body;

        if (Object.keys(body).length !== 3) {
            throw new Error(
                "A kérésnek tartalmaznia kell a felhasználónevet , az emailt és a jelszót!"
            );
        }

        if (!body.username || typeof body.username !== "string") {
            throw new Error(
                "A felhasználó névnek szövegnek kell lennie!"
            );
        }

        if (!body.email || typeof body.email !== "string") {
            throw new Error(
                "Az email címnek szövegnek kell lennie!"
            );
        }

        if (!body.password || typeof body.password !== "string") {
            throw new Error(
                "A jelszónak névnek szövegnek kell lennie!"
            );
        } 


        const [takenUser] = await pool.query('SELECT * FROM users WHERE username LIKE ?;', body.username);

        if(takenUser.length !== 0){
            throw new Error("Ez a felhasználónév már foglalt!");
        }

        const secretPassword = await bcrypt.hash(body.password, 14);
        const [newUser] = await pool.query('INSERT INTO users(username, email, password) VALUES (?,?,?);',[body.username, body.email, secretPassword]);
        
        if(newUser.affectedRows < 1){
            res.status(500).json({message: "Sikertelen regisztráció!"});
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
            message: "valami hiba történt!"
        });
    }
});

app.get("/user", async (req, res) =>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            res.status(403).json({message: "Nem vagy bejelentkezve!"});
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const [loginUser] = await pool.query("SELECT username, email FROM users WHERE id=?", [payload._id]);
        if(loginUser.length < 1){
            res.status(500).json({message: "Nincs ilyen felhsználó!"});
        }
        res.status(200).json(loginUser[0]);
    } catch (error) {
        console.log({message: error.message});
    }
});


app.post("/login", async (req, res) => {
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
            "SELECT * FROM users WHERE username LIKE ?;",
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
        else {
            const Token = jwt.sign(
                { _id: user[0].id },
                process.env.JWT_SECRET,
                { expiresIn: "1h"}
            );
    
            res.json({ token: Token });
        }
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