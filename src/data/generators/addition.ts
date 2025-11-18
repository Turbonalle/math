import type { Problem } from "../../types/Problem";

const optionAmount = 4;

export class AdditionGenerator {
	private singlePool: number[] = [];
	private pairPool: [number, number][] = [];


	// ---- Fill pool ----------------------------------------------------------

	private fillSinglePool(min: number, max: number) {
		this.singlePool = [];
		for (let i = min; i <= max; i++) {
			this.singlePool.push(i);
		}
	}

	private fillPairPool(min: number, sum: number) {
		this.pairPool = [];
		for (let i = min; i <= sum; i++) {
			for (let j = min; i + j <= sum; j++) {
				this.pairPool.push([i, j]);
			}
		}
	}

	private fillRangedSumPairPool(minSum: number, maxSum: number) {
		this.pairPool = [];
		for (let i = 0; i < maxSum; i++) {
			for (let j = 0; j < maxSum; j++) {
				if (i > j && i + j >= minSum && i + j <= maxSum) {
					this.pairPool.push([i, j]);
				}
			}
		}
	}

	private fillRangedTermsRangedSumPairPool(minA: number, maxA: number, minB: number, maxB: number, minSum: number, maxSum: number) {
		this.pairPool = [];
		for (let i = minA; i <= maxA; i++) {
			for (let j = minB; j <= maxB; j++) {
				if (i + j >= minSum && i + j <= maxSum) {
					this.pairPool.push([i, j]);
				}
			}
		}
	}

	// ---- Get from pool ------------------------------------------------------

	private getRandomTerm(min: number, max: number): number {
		if (!this.singlePool || this.singlePool.length === 0) {
			this.fillSinglePool(min, max);
		}
		const index = Math.floor(Math.random() * this.singlePool.length);
		const single = this.singlePool.splice(index, 1)[0];
		return single;
	}

	private getRandomPair(min: number, max: number): [number, number] {
		if (!this.pairPool || this.pairPool.length == 0) {
			this.fillPairPool(min, max);
		}
		const index = Math.floor(Math.random() * this.pairPool.length);
		const pair = this.pairPool.splice(index, 1)[0];
		return pair;
	}

	private getRangedSumPair(minSum: number, maxSum: number): [number, number] {
		if (!this.pairPool || this.pairPool.length == 0) {
			this.fillRangedSumPairPool(minSum, maxSum);
		}
		const index = Math.floor(Math.random() * this.pairPool.length);
		const pair = this.pairPool.splice(index, 1)[0];
		return pair;
	}

	private getRangedTermsRangedSumPair(minA: number, maxA: number, minB: number, maxB: number, minSum: number, maxSum: number): [number, number] {
		if (!this.pairPool || this.pairPool.length == 0) {
			this.fillRangedTermsRangedSumPairPool(minA, maxA, minB, maxB, minSum, maxSum);
		}
		const index = Math.floor(Math.random() * this.pairPool.length);
		const pair = this.pairPool.splice(index, 1)[0];
		return pair;
	}

	// ---- Generate -----------------------------------------------------------

	generateMaxSum(sum: number): Problem {
		const terms = this.getRandomPair(0, sum);
		const answer = terms[0] + terms[1];
		const question = `${terms[0]} + ${terms[1]} = ?`;
		let options = generateOptions(answer, 0, sum, optionAmount);
		options.push(answer);
		options = options.sort(() => Math.random() - 0.5);
		return { question, options, answer };
	}

	generateSetSum(sum: number): Problem {
		const term = this.getRandomTerm(0, sum);
		const answer = sum - term;
		const question = `${term} + ? = ${sum}`;
		let options = generateOptions(answer, 0, sum, optionAmount);
		options.push(answer);
		options = options.sort(() => Math.random() - 0.5);
		return { question, options, answer };
	}

	generateSetTermMaxSum(setTerm: number, maxSum: number): Problem {
		const term = this.getRandomTerm(0, maxSum - setTerm);
		const answer = setTerm + term;
		const question = `${setTerm} + ${term} = ?`;
		let options = generateOptions(answer, setTerm, maxSum, optionAmount);
		options.push(answer);
		options = options.sort(() => Math.random() - 0.5);
		return { question, options, answer };
	}

	generateRangedSum(minSum: number, maxSum: number): Problem {
		const pair = this.getRangedSumPair(minSum, maxSum);
		const answer = pair[0] + pair[1];
		const question = `${pair[0]} + ${pair[1]} = ?`;
		let options = generateOptions(answer, minSum, maxSum, optionAmount);
		options.push(answer);
		options = options.sort(() => Math.random() - 0.5);
		return { question, options, answer };
	}

	generateRangedTermsRangedSum(minA: number, maxA: number, minB: number, maxB: number, minSum: number, maxSum: number): Problem {
		const pair = this.getRangedTermsRangedSumPair(minA, maxA, minB, maxB, minSum, maxSum);
		const answer = pair[0] + pair[1];
		const question = `${pair[0]} + ${pair[1]} = ?`;
		let options = generateOptions(answer, minSum, maxSum, optionAmount);
		options.push(answer);
		options = options.sort(() => Math.random() - 0.5);
		return { question, options, answer };
	}

	// ---- Public -------------------------------------------------------------

	resetPools() {
		this.singlePool = [];
		this.pairPool = [];
	}

	generate(mode: string): Problem {
		switch (mode) {
			case "1": {
				return this.generateMaxSum(5);
			}
			case "2": {
				return this.generateMaxSum(10);
			}
			case "3": {
				return this.generateSetSum(10);
			}
			case "4": {
				return this.generateSetTermMaxSum(10, 20);
			}
			case "5": {
				return this.generateRangedSum(10, 20);
			}
			case "6": {
				return this.generateRangedTermsRangedSum(0, 9, 0, 5, 11, 14);
			}
			case "7": {
				return this.generateRangedTermsRangedSum(0, 9, 0, 9, 14, 18);
			}
			case "8": {
				return this.generateRangedSum(20, 100);
			}
			default: throw new Error(`Unknown addition mode: $(mode)`);
		}
	}
}


// ---- Helper functions -------------------------------------------------------

function getRandomInt(min: number, max: number): number {
	return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function generateOptions(answer: number, min: number, max: number, optionAmount: number): number[] {
	let options: number[] = [];
	while (options.length < optionAmount - 1) {
		let option = getRandomInt(min, max);
		if (option !== answer && !options.includes(option)) {
			options.push(option);
		}
	}
	return options;
}