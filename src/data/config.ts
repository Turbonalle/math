import { additionGenerator } from "./generators/addition";
import { subtractionGenerator } from "./generators/subtraction";
import { MultiplicationGenerator } from "./generators/multiplication";
import type { Problem } from "../types/Problem";

export interface OperationConfig {
	symbol: string;
	difficulties: string[];
	generate: (difficulty: string) => Problem;
}

const multiplicationGenerator = new MultiplicationGenerator();

export const operations: Record<string, OperationConfig> = {
	addition: {
		symbol: "+",
		difficulties: ["0 to 5", "0 to 10", "Pairs of ten", "Add to ten", "10 to 20", "Past ten: low", "Past ten: high", "20 to 100"],
		generate: additionGenerator
	},
	subtraction: {
		symbol: "-",
		difficulties: ["0 to 5", "0 to 10", "10 - x", "20 - x", "Past ten", "0 to 100"],
		generate: subtractionGenerator
	},
	multiplication: {
		symbol: "×",
		difficulties: ["Table 2", "Table 3", "Table 4", "Table 5", "Table 6", "Table 7", "Table 8", "Table 9", "Table 10"],
		generate: (mode: string) => {
			switch (mode) {
				case "Table 2": return multiplicationGenerator.generate(2);
				case "Table 3": return multiplicationGenerator.generate(3);
				case "Table 4": return multiplicationGenerator.generate(4);
				case "Table 5": return multiplicationGenerator.generate(5);
				case "Table 6": return multiplicationGenerator.generate(6);
				case "Table 7": return multiplicationGenerator.generate(7);
				case "Table 8": return multiplicationGenerator.generate(8);
				case "Table 9": return multiplicationGenerator.generate(9);
				case "Table 10": return multiplicationGenerator.generate(10);
				default: throw new Error(`Unknown multiplication mode: ${mode}`);
			}
		}
	}
};
