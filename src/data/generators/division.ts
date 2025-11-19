import type { Problem } from "../../types/Problem";

const optionAmount = 4;

export class DivisionGenerator {
	private divisionPool: number[] = [];

	private getNextQuotient(): number {
		if (!this.divisionPool || this.divisionPool.length === 0) {
			this.divisionPool = [];
			for (let i = 1; i <= 10; i++) {
				this.divisionPool.push(i);
			}
		}
		const index = Math.floor(Math.random() * this.divisionPool.length);
		const divisor = this.divisionPool.splice(index, 1)[0];
		return divisor;
	}

	resetPools() {
		this.divisionPool = [];
	}

	generate(table: number): Problem {
		const answer = this.getNextQuotient();
		const dividend = table * answer;
		const question = `${dividend} / ${table} = ?`;
		const options = generateOptions(answer, optionAmount);
		return { question, options, answer };
	}
}


// ---- Helper functions -------------------------------------------------------

function generateOptions(answer: number, optionAmount: number): number[] {
	let options: number[] = [];
	while (options.length < optionAmount - 1) {
		let option = getRandomInt(1, 10);
		if (option !== answer && !options.includes(option)) {
			options.push(option);
		}
	}
	options.push(answer);
	options.sort(() => Math.random() - 0.5);
	return options;
}

function getRandomInt(min: number, max: number): number {
	return (Math.floor(Math.random() * (max - min + 1)) + min);
}
