const express = require("express");
const User = require("../../models/User");
const Transaction = require("../../models/Transaction");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports = {
    
    getUsers: async (req, res) => {
        try {
            const users = await User.findAll()

            return res.json(users)

        } catch (err) {
            res.status(400).json({ error: "Não foi possível localizar os usuários" })
        }
    },

    updateUser: async (req, res) => {
        const { name, email } = req.body

        try {
            const users = await User.update(
                {
                    name: name,
                    email: email,
                }, {
                where: { id: req.body.id }
            })

            return res.json({ message: "Usuário atualizado!" })

        } catch (err) {
            res.status(400).json({ error: "Não foi possível atualizar" })
        }
    },

    deleteUser: async (req, res) => {
        try {
            await User.destroy({ where: { id: req.params.id } })

            return res.json({ message: "Usuário excluído deletado com sucesso!" })
        } catch (err) {
            return res.status(400).send({ error: "Não foi possível deletar o usuário!" })
        }
    }

}
