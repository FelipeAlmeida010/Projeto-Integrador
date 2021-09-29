const express = require("express");
const Transaction = require("../../models/Transaction");


module.exports = {
  create: async (req, res) => {
    try {
      const { valor, tipo, categoria, moeda, descricao } = req.body

      const newTransaction = await Transaction.create({ valor, tipo, categoria, moeda, descricao, userId: req.userId });

      res.status(201).json(newTransaction)
    } catch (err) {
      console.log(err)
      res.status(400).json({ error: "Não foi possível cadastrar a transação!" });
    }
  },


  findAll: async (req, res) => {
    try {
      const findAll = await Transaction.findAll({ where: { userId: req.userId } })
      return res.json(findAll)
    }
    catch (err) {
      return res.status(400).send({ error: "Erro ao buscar evento!" })
    }

  },


  findLatest: async (req, res) => {
    try {
      const findLatest = await Transaction.findAll({ limit: 4, order: [['createdAt', 'DESC']], where: { userId: req.userId } })

      return res.json(findLatest)
    }
    catch (err) {
      return res.status(400).send({ error: "Erro ao buscar ultima transação!" })
    }

  },


  delete: async (req, res) => {
    try {
      await Transaction.destroy({ where: { id: req.params.id } })

      return res.json({ message: "Transação deletada com sucesso!" })
    } catch (err) {
      return res.status(400).send({ error: "Não foi possível deletar a transação!" })
    }
  },


  update: async (req, res) => {
    const { valor, tipo, descricao, categoria, moeda, id } = req.body
    try {
      const update = await Transaction.update({
        valor: valor,
        tipo: tipo,
        descricao: descricao,
        moeda: moeda,
        categoria: categoria
      },
        {
          where: { id: id }
        })

      res.json({ message: "Atualizado com sucesso" })

    } catch (err) {
      return res.status(400).send({ error: "Não foi possível atualizar os dados da transação!" })
    }
  }

  // const updateTransaction = async (req, res) => {
  //   const { valor, tipo, descricao, categoria, moeda } = req.body
  //   try {
  //     const update = await Transaction.update({
  //       valor: valor,
  //       tipo: tipo,
  //       descricao: descricao,
  //       moeda: moeda,
  //       categoria: categoria
  //     },
  //     {
  //       where: { id: req.params.id}
  //     })

  //     res.json({ message: "Transação atualizada com sucesso!" })

  //   } catch (err) {
  //     return res.status(400).send({ error: "Não foi possível atualizar os dados da transação!" })
  //   }
  // }

}