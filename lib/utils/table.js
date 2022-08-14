import chalk from 'chalk';
import Table from 'cli-table3';

const blue = chalk.blue;
const green = chalk.green;
const red = chalk.red;
const yellow = chalk.yellow;
const dim = chalk.dim;

const table = data => {
	let table = new Table({
		head: [blue.bold('Title/Link'), blue('Brief')],
		style: {
			head: [], //disable colors in header cells
			border: ['*'] //disable colors for the border
		},
		colWidths: [50, 50], //set the widths of each column (optional)
		wordWrap: true
	});

	for (var d of data) {
		const title = d.title;
		const brief = d.brief;
		table.push([
			{ content: title, vAlign: 'center' },
			{ content: brief, vAlign: 'center' }
		]);
	}
	return table;
};

export default table;
