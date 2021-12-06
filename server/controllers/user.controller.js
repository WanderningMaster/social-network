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
            res.json({data: newUser.rows[0]});
            res.status(0);
        } catch (err) {
            console.error(err);
            res.json({data: null});
            res.status(1);
        }
        
    }

    async getUsers(req, res){
        const {count} = req.params;
        try {
            const users = await pool.query(`SELECT * FROM "user" FETCH FIRST $1 ROWS ONLY`, [count]);
            res.json({data: users.rows});
            res.status(0);
        } catch (err) {
            console.error(err);
            res.json({data: null});
            res.status(1);
        }
    }

    async getOneUser(req, res){
        const {id} = req.params;
        try {
            const user = await pool.query(`SELECT * FROM "user" WHERE id = ($1)`, [id]);
            
            res.json({data: user.rows[0], status: 0});
        } catch (err) {
            console.error(err);
            res.json({data: null, status: 1});
        }
    }
    async updateUser(req, res){
        const {username, passw} = req.body;
        const {id} = req.params;
        
        const salt = bcrypt.genSaltSync(10);
        const passw_hash = bcrypt.hashSync(passw, salt);

        try {
            const updatedUser = await pool.query(`UPDATE "user" set username = $1, passw = $2 WHERE id = $3 RETURNING *`, [username, passw_hash, id]);
            res.json({data: updatedUser.rows[0], status: 0});
        } catch (err) {
            console.error(err);
            res.json({data: null, status: 1});
        }
    }
    async deleteUser(req, res){
        const {id} = req.params;
        try {
            const deletedUser = await pool.query('DELETE FROM "user" WHERE id = $1', [id]);
            res.json({data: null, status: 0});
        } catch (err) {
            console.error(err);
            res.json({data: null, status: 1});  
        }
    }
}

module.exports = new UserController();