import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { operations } from "../data/config";
import ModeCard from "../components/ModeCard";
import Leaderboard from "../components/Leaderboard";

export default function ModeSelect() {
	const navigate = useNavigate();
	const { operation } = useParams();
	const [hoveredMode, setHoveredMode] = useState<string | null>(null);

	const operationConfig = operation ? operations[operation] : null;

	const storedScores = JSON.parse(localStorage.getItem("mathScores") || "{}");
	const operationScores = operation ? storedScores[operation] || {} : {};

	if (!operationConfig) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
				<p className="text-red-400 text-xl mb-4">Invalid operation selected</p>
				<button
					className="text-emerald-400 hover:text-emerald-300 transition"
					onClick={() => navigate("/")}
				>
					← Back to Home
				</button>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center h-screen bg-gray-950 p-8 text-center text-gray-800">
			<h1 className="text-emerald-500 font-semibold text-3xl mb-2">{operation} - Choose mode</h1>
			
			{/* MAIN CONTENT AREA */}
			<div className="grow flex justify-center items-center">
				<div className="flex gap-4 w-full max-w-5xl h-full bg-gray-950">
					
					{/* LEFT COLUMN */}
					<div className="flex flex-col space-y-2 p-2 overflow-y-auto">
						{operationConfig.difficulties.map((mode: string) => {
							const topRecord = operationScores[mode]?.[0];

							return (
								<ModeCard
									key={mode}
									name={mode}
									record={topRecord}
									onStart={() => navigate(`/mode/${operation}/${mode}`)}
									onHover={() => setHoveredMode(mode)}
									onLeave={() => setHoveredMode(null)}
								/>
							);
						})}
					</div>
					
					{/* RIGHT COLUMN */}
					{hoveredMode ? (
						<div className="bg-gray-900 p-6 rounded-2xl h-full w-[400px]">
							<Leaderboard operation={operation!} mode={hoveredMode} />
						</div>
					) : (
						<div className="bg-gray-900 p-6 rounded-2xl h-full w-[400px] flex items-center justify-center">
							<div className="text-gray-600 text-lg">
								Hover a mode to view leaderboard.
							</div>
						</div>
					)}
				</div>
			</div>

			{/* FOOTER */}
			<button
				className="mt-10 text-gray-400 hover:text-emerald-400 transition"
				onClick={() => navigate("/")}
			>
				← Back to Home
			</button>
		</div>
	);
}