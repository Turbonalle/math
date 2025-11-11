import { additionGenerator } from "./generators/addition";
import { subtractionGenerator } from "./generators/subtraction";
import { multiplicationGenerator } from "./generators/multiplication";
import type { Problem } from "../types/Problem";

export interface OperationConfig {
	symbol: string;
	difficulties: string[];
	generate: (difficulty: string) => Problem;
}

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
		difficulties: ["Table 2: low", "Table 2", "Table 3: low", "Table 3", "Table 4: low", "Table 4", "Table 5: low", "Table 5"],
		generate: multiplicationGenerator
	}
};
