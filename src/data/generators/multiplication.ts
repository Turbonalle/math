import type { Problem } from "../../types/Problem";

export function multiplicationGenerator(mode: string): Problem {
	switch (mode) {
		case "Table 2: low": {
			return generateMultiplicationProblem(2, 5);
		}
		case "Table 2": {
			return generateMultiplicationProblem(2, 10);
		}
		case "Table 3: low": {
			return generateMultiplicationProblem(3, 5);
		}
		case "Table 3": {
			return generateMultiplicationProblem(3, 10);
		}
		case "Table 4: low": {
			return generateMultiplicationProblem(4, 5);
		}
		case "Table 4": {
			return generateMultiplicationProblem(4, 10);
		}
		case "Table 5: low": {
			return generateMultiplicationProblem(5, 5);
		}
		case "Table 5": {
			return generateMultiplicationProblem(5, 10);
		}
		default:
			throw new Error(`Unknown mode: ${mode}`);
	}
}



// ---- Helper functions -------------------------------------------------------

function generateMultiplicationProblem(table: number, max: number): Problem {
	const factor = getRandomInt(0, max);
	const answer = table * factor;
	const question = `${table} * ${factor} = ?`;
	const options = generateOptions(table, answer, 4);
	
	options.push(answer);
	options.sort(() => Math.random() - 0.5);
	
	return { question, answer, options };
}

function getRandomInt(min: number, max: number): number {
	return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function generateOptions(table: number, answer: number, optionAmount: number): number[] {
	let options: number[] = [];
	while (options.length < optionAmount - 1) {
		let factor = getRandomInt(0, 10);
		let option = table * factor;
		if (option !== answer && !options.includes(option)) {
			options.push(option);
		}
	}
	return options;
}