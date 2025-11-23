import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { CircleFlag } from "react-circle-flags";
import { RiHomeLine } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";

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

	const [open, setOpen] = useState(false);

	const isHome = location.pathname === "/";

	return (
		<div className="z-50 w-full flex justify-between items-center bg-gray-900 sm:gap-2 py-2 px-2 sm:px-4">
			
			{/* LEFT SIDE - BACK*/}
			<button
				className={`${isHome ? "text-gray-600" : "text-gray-300 hover:text-emerald-400 transition"}`}
				disabled={isHome}
				onClick={() => navigate("/")}
			>
				<RiHomeLine size={35} />
			</button>

			{/* MIDDLE - LANGUAGE MENU*/}
			{/* Desktop - Flags */}
			<div className="hidden sm:flex gap-2">
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
			{/* Mobile - Dropdown */}
			<div className="relative h-8 flex items-center justify-center sm:hidden text-sm text-gray-200">
				{!open && (
						<button
							onClick={() => setOpen((prev) => !prev)}
							className="h-full flex items-center justify-start gap-2 px-2 bg-gray-800 border border-gray-700 rounded-lg"
						>
								<div className="w-6 h-6 flex items-center justify-center">
									<CircleFlag countryCode={languages.find((lang) => lang.code === language)?.country || "gb"} height={18} />
								</div>
								<span>{language.toUpperCase()}</span>
						</button>
				)}
				{open && (
					<div className="absolute top-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg flex flex-col items-start gap-1">
						{languages.map((lang) => (
							<button
								key={lang.code}
								onClick={() => {
									setLanguage(lang.code as any);
									setOpen(false);
								}}
								className="h-8 flex items-center gap-2 px-2 rounded"
							>
								<div className="w-6 h-6 flex items-center justify-center">
									<CircleFlag countryCode={lang.country} height={18} />
								</div>
								<span>{lang.code.toUpperCase()}</span>
							</button>
						))}
					</div>
				)}
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