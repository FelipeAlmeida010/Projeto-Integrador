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

const useStyles = makeStyles({
	table: {
		maxWidth: '100%',
		
	},
	bg: {
		background: "#f7e756"
	}
});


export default function DenseTable() {
	const classes = useStyles();

	const { lastTransaction, deleteTransaction, updateTransaction } = useContext(AuthContext)

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
						
					</TableRow>
				</TableHead>
				<TableBody>
					{lastTransaction.map((data) => (
						<TableRow key={data.id}>
							<TableCell component="th" scope="row">{data.id}</TableCell>
							<TableCell component="th" scope="row">R${data.valor}</TableCell>
							<TableCell align="right">{data.tipo}</TableCell>
							<TableCell align="right">{data.moeda}</TableCell>
							<TableCell align="right">{data.categoria}</TableCell>
							<TableCell align="right">{data.descricao}</TableCell>
							
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
