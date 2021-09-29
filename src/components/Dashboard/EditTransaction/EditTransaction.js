import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useFormik } from "formik"
import { useState, useContext, useEffect } from "react"
import api from "../../../api"
import { Bar, Container, ErrorMsg, FieldContainer, MeuBotao, SucessMsg } from '../../StyledComponents';
import { useHistory, withRouter } from 'react-router-dom';

const EditTransaction = ({ id, valor, moeda, tipo, categoria, descricao}) => {
  const history = useHistory()
  const [error, setError] = useState(null)
  const [sucess, setSucess] = useState(null)

  // let id = props.match.params.id

  const onSubmit = async (values) => {
    const { ...data } = values

    const response = await api.put(`transaction/update`, data)
      .catch((err) => {
        if (err && err.response) {
          setError(err.response.data.message)
          setSucess(null)
          
        }
      })
    if (response && response.data) {
      setError(null)
      setSucess(response.data.message)
      history.push("/dashboard")
      window.location.reload()
      formik.resetForm()
    }

  }

  const formik = useFormik({
    initialValues: { tipo: "", valor: "", categoria: "", moeda: "", descricao: "", id: id },
    validateOnBlur: true,
    onSubmit,
    // validationSchema: validationSchema,
  })

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <a variant="outlined" color="primary" onClick={handleClickOpen}>
      <i className="fa fa-edit"></i>
      </a>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar transação:</DialogTitle>
        <DialogContent>
          <DialogContentText>

          {sucess ? <Bar><SucessMsg>{sucess ? sucess : ""}</SucessMsg></Bar> : ""}
          {error ? <Bar><ErrorMsg>{error ? error : ""}</ErrorMsg></Bar> : ""}

          <form onSubmit={formik.handleSubmit}>

          <FieldContainer>
            <input
             
              hidden
              required
              value={formik.values.id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FieldContainer>

          <FieldContainer>
            <label>Descrição</label>
            <input
              type="text"
              placeholder={descricao}
              name="descricao"
              required
              value={formik.values.descricao}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FieldContainer>

          <FieldContainer>
            <label>Valor</label>
            <input
              type="text"
              placeholder={valor}
              name="valor"
              required
              value={formik.values.valor}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FieldContainer>

          <FieldContainer>
            <label>Moeda</label>
            <select
              name="moeda"
              value={formik.values.moeda}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Selecione a moeda">
                Selecione a moeda
              </option>
              <option value="Dolar" label="Dolar">
                Dolar
              </option>
              <option value="Euro" label="Euro">
                Euro
              </option>
              <option value="Real" label="Real">
                Real
              </option>
            </select>
          </FieldContainer>

          <FieldContainer>
            <label>Categoria</label>
            <select
              name="categoria"
              value={formik.values.categoria}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Selecione a categoria">
                Selecione{" "}
              </option>
              <option value="Recebimento de venda" label="Recebimento de venda">
                Recebimento de venda
              </option>
              <option value="Pagamento de dívida" label="Pagamento de dívida">
                Pagamento de dívida
              </option>
              <option value="Pagamento de fornecedor" label="Pagamento de fornecedor">
                Pagamento de fornecedor
              </option>
              <option value="Pagamento de funcionários" label="Pagamento de funcionários">
                Pagamento de funcionários
              </option>
              <option value="Viagem de trabalho" label="Viagem de trabalho">
                Viagem de trabalho
              </option>
            </select>
          </FieldContainer>

          <FieldContainer>
            <label>Entrada ou Saída</label>
            <select
              name="tipo"
              value={formik.values.tipo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Selecione o tipo da transação">
                Selecione
              </option>
              <option value="Entrada" label="Entrada">
                Entrada
              </option>
              <option value="Saída" label="Saída">
                Saída
              </option>
            </select>
          </FieldContainer>

          <MeuBotao type="submit">Enviar</MeuBotao>
        </form>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
        
    </>
  );
}


export default withRouter(EditTransaction)