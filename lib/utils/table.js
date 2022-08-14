import chalk from 'chalk';
import Table from 'cli-table3';

const blue = chalk.blue;
const green = chalk.green;
const gray = chalk.gray;
const yellow = chalk.yellow;
const white = chalk.white;
const bgBlue = chalk.bgBlue;

const table = data => {
	let table = new Table({
		head: [
			blue.bold('Title/Link'),
			blue.bold('Brief'),
			blue.bold('Article by')
		],
		style: {
			head: [], //disable colors in header cells
			border: [] //disable colors for the border
		},
		colWidths: [30, 50, 20], //set the widths of each column (optional)
		rowHeights: [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		wordWrap: true
	});

	for (var d of data) {
		const title = white.bold(d.title);
		const brief = white.italic(d.brief);
		const uploaderName = white.bold(d.author.name);
		const uploaderUsername = gray.italic(d.author.username);

		table.push(
			d.author
				? [
						{ content: title, vAlign: 'center' },
						{ content: brief, vAlign: 'center' },
						{
							content: `${uploaderName} (@${uploaderUsername})`,
							vAlign: 'center'
						}
				  ]
				: [
						{ content: title, vAlign: 'center' },
						{ content: brief, vAlign: 'center' }
				  ]
		);
	}
	return chalk.gray(table.toString());
};

export default table;
