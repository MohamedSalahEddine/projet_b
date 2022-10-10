const mysql = require('mysql2')
const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "",
    database : "api"
}).promise()

export async function insertUser(fname, lname, email, password, phone, type){
    const user = await pool.query('insert into users(firstname, lastname, email, password, phone, type) values(?,?,?,?,?,?)',
    [fname, lname, email, password, phone, type]);
    console.log(user)
}
