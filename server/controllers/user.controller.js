const pool = require('../db');
const bcrypt = require('bcrypt');

class UserController{
    
    async createUser(req, res){
        const {username, passw} = req.body;

        const salt = bcrypt.genSaltSync(10);
        console.log(salt);
        const passw_hash = bcrypt.hashSync(passw, salt);
        try {
            const newUser = await pool.query(`INSERT INTO "user" (username, passw) values ($1, $2) RETURNING *`, [username, passw_hash]);
            res.json(newUser.rows[0]);
        } catch (err) {
            console.error(err);
            res.json(err);
        }
        
    }

    async getUsers(req, res){
        try {
            const users = await pool.query(`SELECT * FROM "user"`);
            res.json(users.rows);
        } catch (err) {
            console.error(err);
            res.json(err);
        }
        
    }

    async getOneUser(req, res){
        const {id} = req.params;
        try {
            const user = await pool.query(`SELECT * FROM "user" WHERE id = ($1)`, [id]);
            
            //const passw = "root";

            //const result = await bcrypt.compare(passw, user.rows[0].passw);
            res.json(user.rows[0]);
        } catch (err) {
            console.error(err);
            res.json(err);       
        }
    }
    async updateUser(req, res){
        const {username, passw} = req.body;
        const {id} = req.params;
        try {
            const updatedUser = await pool.query(`UPDATE "user" set username = $1, passw = $2 WHERE id = $3 RETURNING *`, [username, passw, id]);
            res.json(updatedUser.rows[0]);
        } catch (err) {
            console.error(err);
            res.json(err);
        }
    }
    async deleteUser(req, res){
        const {id} = req.params;
        try {
            const deletedUser = await pool.query('DELETE FROM "user" WHERE id = $1', [id]);
            res.json('ok');
        } catch (err) {
            console.error(err);
            res.json(err);  
        }
    }
}

module.exports = new UserController();