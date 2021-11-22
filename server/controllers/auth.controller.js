const pool = require('../db');
const bcrypt = require('bcrypt');
const session = require('express-session');

class AuthController{
    async reg(req, res){
        const {username, passw} = req.body;

        const salt = bcrypt.genSaltSync(10);
        const passw_hash = bcrypt.hashSync(passw, salt);
        try {
            const newUser = await pool.query(`INSERT INTO "user" (username, passw) values ($1, $2) RETURNING *`, [username, passw_hash]);
            res.status(0);
            res.json({data: newUser.rows[0]});
        } catch (err) {
            console.error(err);
            res.status(1);
            res.json({data: null});
        }
    }
    async login(req, res){
        const {username, passw} = req.body;

        try {
            const user = await pool.query(`SELECT * FROM "user" WHERE username = ($1)`, [username]);
            const result = await bcrypt.compare(passw, user.rows[0].passw);
            if(result){
                
                req.session.userid = user.rows[0].id;
                res.json({data: user.rows[0].id});
                res.status(0);
            }
            else{
                res.json({data: null});
                res.status(10);
            }
        } catch (err) {
            console.error(err);
            res.status(1);
            res.json({data: null});
        }
    }

    async logout(req, res){
        try {
            req.session.destroy();
            //TODO: destroy session
            //res.redirect('//login');
            res.json({data: null})
            res.status(0);
        } catch (err) {
            console.error(err);
            res.json({data: null});
            res.status(1);
        }
    }

    async me(req, res){
        try {
            if(req.session.userid)
                res.json({data: req.session.userid});
            else res.json({data: null});    
            res.status(0);
        } catch (err) {
            console.error(err);
            res.json({data: null});
            res.status(1);
        }
    }
}

module.exports = new AuthController();