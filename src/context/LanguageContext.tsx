import { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "sv" | "fi" | "ph" | "is" | "lt" | "ua" | "ir";

interface LanguageContextProps {
	language: Language;
	setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>("en");

	// Load from localStorage on startup
	useEffect(() => {
		const saved = localStorage.getItem("language");
		if (saved) setLanguage(saved as Language);
	}, []);

	// Save when changed
	useEffect(() => {
		localStorage.setItem("language", language);
	}, [language]);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
	return context;
}