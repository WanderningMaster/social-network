/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const pool = require('../db');
const {APIsignature} = require('../config.json');
const jwt = require('jsonwebtoken');

class AuthController {
  async reg(req, res) {
    const { username, passw } = req.body;
    console.log(passw);
    const salt = bcrypt.genSaltSync(10);
    const passwHash = bcrypt.hashSync(passw, salt);
    try {
      const newUser = await pool.query('INSERT INTO "user" (username, passw) values ($1, $2) RETURNING *', [username, passwHash]);
      res.json({ data: newUser.rows[0], status: 0 });
    } catch (err) {
      console.error(err);
      res.json({ data: null, status: 1 });
    }
  }

  // add API key
  async login(req, res) {
    const { username, passw } = req.body;
    try {
      const user = await pool.query('SELECT * FROM "user" WHERE username = ($1)', [username]);
      const result = await bcrypt.compare(passw, user.rows[0].passw);
      if (result) {
        const token = jwt.sign({ name: username, id: user.rows[0].id }, APIsignature);
        res
          .cookie("API_key", token, {
            maxAge: 900000,
            signed: true,
            httpOnly: true,             
          })
          .json({ data: user.rows [0].id, status: 0 });
      } else {
        res.json({ data: null, status: 10 });
      }
    } catch (err) {
      console.error(err);
      res.json({ data: null, status: 1 });
    }
  }

  async logout(req, res) {
    try {
      res
        .clearCookie("API_key")
        .json({ data: null, status: 0 });
    } catch (err) {
      console.error(err);
      res.json({ data: null, status: 1 });
    }
  }

  async me(req, res) {
    try {
      if (req.id) {
        const user = await pool.query('SELECT * FROM "user" WHERE id = ($1)', [req.id]);
        res.json({ data: user.rows[0], status: 0});
      } else {
        res.json({ data: null, status: 10 });
      }
    } catch (err) {
      console.error(err);
      res.json({ data: null, status: 1 });
    }
  }
}

module.exports = new AuthController();
