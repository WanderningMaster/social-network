const pool = require('../db');
const bcrypt = require('bcrypt');


class AuthController{
    async reg(req, res){
        const {username, passw} = req.body;
        console.log(passw);
        const salt = bcrypt.genSaltSync(10);
        const passw_hash = bcrypt.hashSync(passw, salt);
        try {
            const newUser = await pool.query(`INSERT INTO "user" (username, passw) values ($1, $2) RETURNING *`, [username, passw_hash]);
            res.json({data: newUser.rows[0], status: 0});
        } catch (err) {
            console.error(err);
            res.json({data: null, status: 1});
        }
    }
    async login(req, res){
        const {username, passw} = req.body;
        try {
            const user = await pool.query(`SELECT * FROM "user" WHERE username = ($1)`, [username]);
            const result = await bcrypt.compare(passw, user.rows[0].passw);
            if(result){
                
                req.session.userid = user.rows[0].id;
                res.json({data: user.rows[0].id, status: 0});
            }
            else{
                res.json({data: null, status: 10});
            }
        } catch (err) {
            console.error(err);
            res.json({data: null, status: 1});
        }
    }

    async logout(req, res){
        try {
            req.session.destroy();
            res.json({data: null, status: 0})
        } catch (err) {
            console.error(err);
            res.json({data: null, status: 1});
        }
    }

    async me(req, res){
        try {
            if(req.session.userid){
                res.json({data: req.session.userid, status: 0});
            }
            else{
                res.json({data: null, status: 1});    
            }
        } catch (err) {
            console.error(err);
            res.json({data: null, status: 1});
        }
    }
}

module.exports = new AuthController();