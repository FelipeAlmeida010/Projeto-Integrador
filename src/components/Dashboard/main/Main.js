
import { useContext } from "react";
import hello from "../../../assets/hello3.svg";
import AuthContext from "../../../Context/AuthContext";
import Table from "./Table";
import "./Main.css";
import { useGetCotations } from "../../../hooks/useGetCotations";

const Main = () => {

  const { loading, error, dolar } = useGetCotations()

  const { userName, totalTransacoes, totalEarnings, totalCategories, lastTransaction } = useContext(AuthContext)


  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Olá, {userName}!</h1>
            <p>Bem-vindo a sua dashboard.</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <i className="fa fa-file-alt fa-2x text-lightblue"></i>
            <div className="card-inner">
              <p className="text-primary-p">Número de transações</p>
              <span className="font=bold text-title">{totalTransacoes}</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-archive fa-2x text-red"></i>
            <div className="card-inner">
              <p className="text-primary-p">Valor total</p>
              <span className="font-bold text-title">R${totalEarnings}</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-archive fa-2x text-yellow"></i>
            <div className="card-inner">
              <p className="text-primary-p">Número de saídas</p>
              <span className="font-bold text-title"></span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-bars fa-2x text-green"></i>
            <div className="card-inner">
              <p className="text-primary-p">Categorias</p>
              <span className="font=bold text-title">{totalCategories}</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Ultimas Transações</h1>
                <p>São Paulo, SP</p>
              </div>
              <i className="fa fa-money-bill-alt"></i>

            </div>
            <div style={{marginTop: "35px"}}>
                <Table/>
            </div>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Cotação em tempo real</h1>
                <p>São Paulo, SP</p>
              </div>
              <i className="fa fa-money-bill-alt"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Valor Dólar</h1>
                <p>R${dolar}</p>
              </div>

              <div className="card2">
                <h1>Valor Euro</h1>
                <p>R$</p>
              </div>

              <div className="card3">
                <h1>Valor Real</h1>
                <p>R$</p>
              </div>

              <div className="card4">
                <h1>Valor Total</h1>
                <p>R$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
