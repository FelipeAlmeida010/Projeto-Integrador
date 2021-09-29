const express = require("express");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports = {

  login: async (req, res) => {
    const { email, password } = req.body;

    // verificando email
    const userWithEmail = await User.findOne({ where: { email } }).then(
      (loggedUser) => {
        if (!loggedUser) {
          return res.status(400).json({ message: "Email ou senha incorretos!" });
        }

        // jwt token
        const token = jwt.sign(
          { id: loggedUser.id, name: loggedUser.name },
          process.env.JWT_SECRET);

        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })


        // Verificando a senha
        bcrypt.compare(password, loggedUser.password, (err, isMatch) => {
          if (err) throw err;

          if (isMatch) {
            return res.json({
              name: loggedUser.name,
              token: token,
            });
          } else {
            return res.status(400).json({ message: "Email ou senha incorretos!" });
          }
        });
      }
    );
  },

  loggedIn: (req, res) => {
    try {
      const token = req.cookies.token

      if (!token) return res.json(false)

      jwt.verify(token, process.env.JWT_SECRET)

      res.send(true)
    } catch (err) {
      res.json(false)
    }
  },


  getId: (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).send({ error: "Unauthorized" })
    }

    const [, token] = req.headers.authorization.split('Bearer ')

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).send({ error: "Token inválido!" })

      req.userId = decoded.id
      User.findByPk(decoded.id).then((user) => {
        if (!user) {
          return res.status(401).send({ error: "Usuário não existe" })
        }
        next()
      })

    })
  },

  loggedUserToken: (req, res) => {
    try {
      const token = req.cookies.token

      if (token) return res.json(token)

      jwt.verify(token, process.env.JWT_SECRET)
      res.send(token)
    } catch (err) {
      res.json("")
    }
  },

  logout: (req, res) => {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    }).send()
  }
}

// const authorize = (req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(401).send({ error: "Unauthorized" })
//   }

//   const token = req.headers.authorization.split(' ')[1]
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err){ return res.status(401).send({ error: "Token inválido" })}

//     req.decoded = decoded
//     User.findByPk(decoded.id).then((user) => {
//       if(!user){
//         return res.status(401).send({ error: "Usuário não existe"})
//       }
//       next()
//     })
//   })

// }

