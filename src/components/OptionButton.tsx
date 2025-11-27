interface OptionButtonProps {
	value: number;
	locked?: boolean;
	status?: null | "correct" | "wrong";
	onClick: (value: number) => void;
};

export default function OptionButton({ value, locked, status = null, onClick }: OptionButtonProps) {
	let base = "w-full h-[12vh] text-4xl font-semibold rounded-xl transition select-none border-2 border-transparent";
	
	const hover = !locked && status === null
		? "hover:bg-gray-300 hover:border-emerald-400 cursor-pointer"
		: "";

	const visual = status === "correct"
		? "bg-emerald-500 text-white"
		: status === "wrong"
			? "bg-red-500 text-white"
			: "bg-gray-300 text-black";

	return (
		<button
			className={`${base} ${hover} ${visual}`}
			onClick={() => !locked && onClick(value)}
			disabled={locked}
			aria-pressed={status !== null}
		>
			{value}
		</button>
	);
}