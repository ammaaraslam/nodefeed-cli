import chalk from 'chalk';
import Table from 'cli-table3';

const blue = chalk.blue;
const green = chalk.green;
const red = chalk.red;
const yellow = chalk.yellow;
const white = chalk.white;

const table = data => {
	let table = new Table({
		head: [blue.bold('Title/Link'), blue('Brief')],
		style: {
			head: [], //disable colors in header cells
			border: [] //disable colors for the border
		},
		colWidths: [30, 50], //set the widths of each column (optional)
		rowHeights: [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		wordWrap: true
	});

	for (var d of data) {
		const title = white.bold(d.title);
		const brief = white.italic(d.brief);
		table.push([
			{ content: title, vAlign: 'center' },
			{ content: brief, vAlign: 'center' }
		]);
	}
	return chalk.gray(table.toString());
};

export default table;
