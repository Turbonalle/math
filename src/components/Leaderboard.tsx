import { useTranslation } from "../data/useTranslation";

interface LeaderboardProps {
	operation: string;
	mode: string;
};

export default function Leaderboard({ operation, mode }: LeaderboardProps) {
	const scores = JSON.parse(localStorage.getItem("mathScores") || "{}");
	const modeScores = scores[operation]?.[mode] || [];
	const { t } = useTranslation();

	return (
		<div className="text-xl text-emerald-400 font-semibold mb-4">
			<h2 className="mb-4">{t("leaderboard.top10")}</h2>
			
			{modeScores.length === 0 ? (
				<p className="text-gray-600 text-lg font-normal">No scores yet.</p>
			) : (
				<ol>
					{modeScores.map((entry: { name: string; score: number }, i: number) => (
						<li
							key={i}
							className="grid grid-cols-[2rem_1fr_auto] items-center gap-2 px-4 py-2 mb-1 rounded-xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800"
						>
							<span
								className={
									i === 0
										? "text-yellow-400 font-bold"
										: i === 1
										? "text-gray-400 font-bold"
										: i === 2
										? "text-amber-700 font-bold"
										: "text-emerald-500"
								}
							>{i + 1}.</span>
							<span className="text-gray-500 text-left truncate">{entry.name}</span>
							<span
								className={
									i === 0
										? "text-yellow-400 font-bold text-right"
										: i === 1
										? "text-gray-400 font-bold text-right"
										: i === 2
										? "text-amber-700 font-bold text-right"
										: "text-emerald-500 text-right"
								}
							>{entry.score}</span>
						</li>
					))}
				</ol>
			)}
		</div>
	);
}