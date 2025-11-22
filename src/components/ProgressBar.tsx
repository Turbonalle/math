interface ProgressBarProps {
	name: string,
	current: number,
	total: number,
	showTotal: boolean
}

export default function OperationCard({ name, current, total, showTotal }: ProgressBarProps) {
	return (
		<div className="w-80">
			<p className="text-sm mb-1 text-gray-400">{name}:
				<span className="text-emerald-400"> {
					showTotal
						? `${current} / ${total}`
						: `${current}`}</span>
			</p>
			<div className="w-full h-4 bg-gray-700 rounded-full">
				<div
					className="h-full bg-emerald-500 rounded-full transition-all"
					style={{ width: `${(current / total) * 100}%`}}
				/>
			</div>
		</div>
	);
}