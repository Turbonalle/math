import type { Problem } from "../../types/Problem";

const optionAmount = 4;

export class SubtractionGenerator {
	private singlePool: number[] = [];
	private pairPool: [number, number][] = [];

	private fillSinglePool(min: number, max: number) {
		this.singlePool = [];
		for (let i = min; i <= max; i++) {
			this.singlePool.push(i);
		}
		for (let i = 0; i < this.singlePool.length; i++) {
			console.log(i + ": " + this.singlePool[i]);
		}
	}

	private fillPairPool(min: number, max: number) {
		this.pairPool = [];
		for (let i = min; i <= max; i++) {
			for (let j = min; j <= i; j++) {
				this.pairPool.push([i, j]);
			}
		}
	}

	private fillRangedPairPool(aMin: number, aMax: number, bMin: number, bMax: number) {
		this.pairPool = [];
		for (let i = aMin; i <= aMax; i++) {
			for (let j = bMin; j <= i && j <= bMax; j++) {
				this.pairPool.push([i, j]);
			}
		}
	}

	private getRandomSingle(min: number, max: number): number {
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

	private getRangedPair(aMin: number, aMax: number, bMin: number, bMax: number): [number, number] {
		if (!this.pairPool || this.pairPool.length == 0) {
			this.fillRangedPairPool(aMin, aMax, bMin, bMax);
		}
		const index = Math.floor(Math.random() * this.pairPool.length);
		const pair = this.pairPool.splice(index, 1)[0];
		return pair;
	}


	// ---- Generate -----------------------------------------------------------

	private generateRandomSingle(min: number, max: number): Problem {
		const term = this.getRandomSingle(min, max);
		const answer = max - term;
		const question = `${max} - ${term} = ?`;
		let options = generateOptions(answer, min, max, optionAmount);
		options.push(answer);
		options = options.sort(() => Math.random() - 0.5);
		return { question, options, answer };
	}

	private generateRandomPair(min: number, max: number): Problem {
		const pair = this.getRandomPair(min, max);
		const answer = pair[0] - pair[1];
		const question = pair[0] + " - " + pair[1] + " = ?";
		let options = generateOptions(answer, min, max, optionAmount);
		options.push(answer);
		options = options.sort(() => Math.random() - 0.5);
		return { question, options, answer };
	}

	private generateRangedPair(aMin: number, aMax: number, bMin: number, bMax: number): Problem {
		const pair = this.getRangedPair(aMin, aMax, bMin, bMax);
		const answer = pair[0] - pair[1];
		const question = pair[0] + " - " + pair[1] + " = ?";
		let options = generateOptions(answer, bMin, bMax, optionAmount);
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
				return this.generateRandomPair(0, 5);
			}
			case "2": {
				return this.generateRandomPair(0, 10);
			}
			case "3": {
				return this.generateRandomSingle(0, 10);
			}
			case "4": {
				return this.generateRandomSingle(0, 12);
			}
			case "5": {
				return this.generateRangedPair(10, 20, 0, 20);
			}
			case "6": {
				return this.generateRandomPair(0, 20);
			}
			case "7": {
				return this.generateRandomSingle(0, 100);
			}
			case "8": {
				return this.generateRangedPair(20, 100, 0, 100);
			}
			default: throw new Error(`Unknown subtraction mode: $(mode)`);
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