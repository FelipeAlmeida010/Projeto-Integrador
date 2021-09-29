import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AuthContext from '../../../Context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import EditTransaction from '../EditTransaction/EditTransaction';

const useStyles = makeStyles({
	table: {
		maxWidth: '100%',
	},
	bg: {
		background: "#f7e756"
	}
});


export default function DataTable({toggle, open}) {
	const classes = useStyles();

	const { data, deleteTransaction } = useContext(AuthContext)

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow className={classes.bg}>
						<TableCell>ID</TableCell>
						<TableCell align="right">Valor</TableCell>
						<TableCell align="right">Tipo</TableCell>
						<TableCell align="right">Moeda</TableCell>
						<TableCell align="right">Categoria</TableCell>
						<TableCell align="right">Descrição</TableCell>
						<TableCell align="right">Ações</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((data) => (
						<TableRow key={data.id}>
							<TableCell component="th" scope="row">{data.id}</TableCell>
							<TableCell component="th" scope="row">R${data.valor}</TableCell>
							<TableCell align="right">{data.tipo}</TableCell>
							<TableCell align="right">{data.moeda}</TableCell>
							<TableCell align="right">{data.categoria}</TableCell>
							<TableCell align="right">{data.descricao}</TableCell>
							<TableCell align="right"><a onClick={() => deleteTransaction(data.id)} style={{ cursor: "pointer", color: "#3ea175", paddingRight: "10px" }} ><i className="fa fa-trash-alt"></i></a>
								<a style={{ cursor: "pointer", color: "#35a4ba" }}>
									<EditTransaction
									key={data.id}
									id={data.id}
									valor={data.valor}
									tipo={data.tipo}
									moeda={data.moeda}
									categoria={data.categoria}
									descricao={data.descricao}
									/>
									</a></TableCell>
								{/* <Link to={`edit/${data.id}`}><a onClick={toggle} style={{ cursor: "pointer", color: "#35a4ba" }}><i className="fa fa-edit"></i></a></Link>
							</TableCell> */}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
