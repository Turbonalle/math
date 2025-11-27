interface OperationCardProps {
	name: string;
	symbol: string;
	onStart: () => void;
}

export default function OperationCard({ name, symbol, onStart }: OperationCardProps) {
	return (
			<button
				className="p-1 h-[14vh] bg-gray-200 shadow rounded-xl hover:scale-105 transition flex flex-col justify-center text-center w-45 border-2 border-gray-600 hover:border-emerald-400"
				onClick={onStart}
			>
				<h2 className="text-xl font-bold capitalize">{name}</h2>
				<div className="text-2xl sm:text-4xl">{symbol}</div>
			</button>
	);
}
