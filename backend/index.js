import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"cars_db"
})

app.get("/cars", (req, res) => {
    const q = `select * from cars`
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        
        return res.json(data)
    })
})

app.post("/cars", (req, res) => {
    const q = 'insert into cars (`brand`, `color`, `year`) values (?)'
    const values = [
        req.body.brand,
        req.body.color,
        req.body.year
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)

        return res.json('ok! car created')
    })
})

app.delete("/cars/:id", (req, res) => {
    const carId = req.params.id
    const q = "delete from cars where id = ?"

    db.query(q, [carId], (err, data) => {
        if (err) return res.json(err)
        
        return res.json('ok! car deleted')
    })
})

app.put("/cars/:id", (req, res) => {
    const carId = req.params.id
    const q = "update cars set `brand`=?, `color`=?, `year`=? where id = ?"

    const values = [
        req.body.brand,
        req.body.color,
        req.body.year
    ]

    db.query(q, [...values, carId], (err, data) => {
        if (err) return res.json(err)
        
        return res.json('ok! car has been updated')
    })
})


// app.get("/", (req, res) => {
//     res.json('a')
// })

app.listen(8800, () => {
    console.log('connected to backend!');
})