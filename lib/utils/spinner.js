import ora from 'ora';

export const spinner = ora({
	text: '',
	color: 'yellow',
	spinner: {
		interval: 300, // Optional
		frames: ['📕', '📘', '📔', '📗', '📚']
	}
});
