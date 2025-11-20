import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { CircleFlag } from "react-circle-flags";
import { RiHomeLine } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";

const languages = [
	{ code: "en", country: "gb" },
	{ code: "sv", country: "se" },
	{ code: "fi", country: "fi" },
	{ code: "ph", country: "ph" },
	{ code: "is", country: "is" },
	{ code: "lt", country: "lt" },
	{ code: "ua", country: "ua" },
	{ code: "ir", country: "ir" },
]

export default function LanguageMenu() {
	const { language, setLanguage } = useLanguage();
	const location = useLocation();
	const navigate = useNavigate();

	const isHome = location.pathname === "/";

	return (
		<div className="z-50 w-full flex justify-between items-center gap-2 bg-gray-900 py-2 px-4">
			
			{/* LEFT SIDE - BACK*/}
			<button
				className={`${isHome ? "text-gray-600" : "text-gray-300 hover:text-emerald-400 transition"}`}
				disabled={isHome}
				onClick={() => navigate("/")}
			>
				<RiHomeLine size={35} />
			</button>

			{/* MIDDLE - LANGUAGE MENU*/}
			<div className="flex gap-2">
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

			{/* RIGHT SIDE - BACK*/}	
			<button
				className={`${isHome ? "text-gray-600" : "text-gray-300 hover:text-emerald-400 transition"}`}
				disabled={isHome}
				onClick={() => navigate(-1)}
			>
				<IoArrowBack size={35} />
			</button>
		</div>
	);
}