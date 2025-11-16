import { useLanguage } from "../context/LanguageContext";
import { CircleFlag } from 'react-circle-flags';

const languages = [
	{ code: "en", country: "gb" },
	{ code: "sv", country: "se" },
	{ code: "fi", country: "fi" },
	{ code: "ph", country: "ph" },
	{ code: "is", country: "is" }
]

export default function LanguageMenu() {
	const { language, setLanguage } = useLanguage();

	return (
		<div className="fixed top-4 right-4 z-50">
			<div className="relative">
				<div className="flex gap-2 backdrop-blur-sm p-2">
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => setLanguage(lang.code as any)}
							className={`
								w-9 h-9 rounded-full flex items-center justify-center transition hover:scale-110
								${language === lang.code 
									? "border-2 border-emerald-400 scale-110"
									: "brightness-50"}
							`}
						>
							<CircleFlag countryCode={lang.country} height={35} />
						</button>
					))}
				</div>
			</div>
		</div>
	);
}