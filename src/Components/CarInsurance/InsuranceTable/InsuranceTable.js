import * as TiIcons from "react-icons/ti";
import * as ImIcons from "react-icons/im";
import * as HiIcons from "react-icons/hi";
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		fontSize: "1em",
		fontWeight: "bold",
	},
	body: {
		fontSize: "1em",
		fontWeight: "bold",
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(even)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		maxWidth: 1150,
		margin: "auto",
	},
});

// CEP = Comprehsnive Everyday Plus
// TPPD = Third Party Property Damage
// TPFT = Third Party Fire & Theft
// MB = Mechnical Breakdown
function createData(name, CEP, TPPD, TPFT, MB) {
	return { name, CEP, TPPD, TPFT, MB };
}

const rows = [
	createData(
		"Agreed Value",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"One event, one excess",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Discounts",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />
	),
	createData(
		"Lifetime Repair Guarantee",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />
	),
	createData(
		"Towing, storage and transport",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Damage to someone else's property",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Damage to your car",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Damage caused by an uninsured third party",
		"N/A full cover applies",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />
	),
	createData(
		"Car is stolen",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Fire damage",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Excess-Free keys and locks",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Optional Extras"
		// <TiIcons.TiTick style={{ color: "green" }} />,
		// <ImIcons.ImCross style={{ color: "red" }} />,
		// <ImIcons.ImCross style={{ color: "red" }} />,
		// <ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Excess-Free Glass Cover",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Rental Cover",
		<TiIcons.TiTick style={{ color: "green" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />,
		<ImIcons.ImCross style={{ color: "red" }} />
	),
	createData(
		"Policy document",
		<HiIcons.HiDocumentText style={{ fontSize: "2em" }} />,
		<HiIcons.HiDocumentText style={{ fontSize: "2em" }} />,
		<HiIcons.HiDocumentText style={{ fontSize: "2em" }} />,
		<HiIcons.HiDocumentText style={{ fontSize: "2em" }} />
	),
];

export default function InsuranceTable() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<h1 style={{ textAlign: "center" }}>Compare Insurance Cover</h1>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<StyledTableCell></StyledTableCell>
						<StyledTableCell align="right">
							Comprehensive Everyday Plus
						</StyledTableCell>
						<StyledTableCell align="right">
							Third Party Property Damage
						</StyledTableCell>
						<StyledTableCell align="right">
							Third Party Fire & Theft
						</StyledTableCell>
						<StyledTableCell align="right">
							Mechanical Breakdown Insurance
						</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="right">{row.CEP}</StyledTableCell>
							<StyledTableCell align="right">{row.TPPD}</StyledTableCell>
							<StyledTableCell align="right">{row.TPFT}</StyledTableCell>
							<StyledTableCell align="right">{row.MB}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
