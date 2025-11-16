import { useLanguage } from "../context/LanguageContext";
import { texts } from "./texts";

export function useTranslation() {
	const { language } = useLanguage();

	function t(path: string): string {
		const parts = path.split(".");
		let result: any = texts[language];

		for (const p of parts) {
			result = result?.[p];
		}
		return result ?? `Missing: ${path}`;
	}

	return { t, language };
}