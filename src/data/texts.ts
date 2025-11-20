import type { Language } from "../context/LanguageContext";

export const texts: Record<Language, any> = {
	en: {
		landing: {
			title: "Choose a Math Operation",
			reset: "Reset Progress"
		},
		modepage: {
			title: "Choose Mode",
			record: "Record",
		},
		leaderboard: {
			hover: "Hover a mode to view leaderboard",
			top10: "Top 10",
			noscore: "No scores yet"
		},
		game: {
			score: "Score",
			total: "Total Score",
			progress: "Progress",
		},
		back: "Back",
		error: "Sorry, something went wrong...",
		operations: {
			addition: {
				name: "Addition",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Ten: Pairs",
					"4": "10 + x",
					"5": "10 - 20",
					"6": "Past 10: low",
					"7": "Past 10: high",
					"8": "20 - 100"
				}
			},
			subtraction: {
				name: "Subtraction",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Ten: Pairs",
					"4": "12 - x",
					"5": "10 - 20",
					"6": "0 - 20",
					"7": "100 - x",
					"8": "0 - 100"
				}
			},
			multiplication: {
				name: "Multiplication",
				modes: {
					"1": "Table 2",
					"2": "Table 3",
					"3": "Table 4",
					"4": "Table 5",
					"5": "Table 6",
					"6": "Table 7",
					"7": "Table 8",
					"8": "Table 9",
					"9": "Table 10",
					"10": "Table 2-10"
				}
			},
			division: {
				name: "Division",
				modes: {
					"1": "Table 2",
					"2": "Table 3",
					"3": "Table 4",
					"4": "Table 5",
					"5": "Table 6",
					"6": "Table 7",
					"7": "Table 8",
					"8": "Table 9",
					"9": "Table 10"
				}
			}
		}
	},
	sv: {
		landing: {
			title: "Välj ett räknesätt",
			reset: "Återställ rekord"
		},
		modepage: {
			title: "Välj nivå",
			record: "Rekord",
		},
		leaderboard: {
			hover: "Håll muspekaren över en nivå för att se topplistan",
			top10: "Topp 10",
			noscore: "Inga poäng ännu"
		},
		game: {
			score: "Poäng",
			total: "Totalpoäng",
			progress: "Framsteg",
		},
		back: "Tillbaka",
		error: "Hoppsan, något gick snett...",
		operations: {
			addition: {
				name: "Addition",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Tiopar",
					"4": "10 + x",
					"5": "10 - 20",
					"6": "Tiotalsövergång: låg",
					"7": "Tiotalsövergång: hög",
					"8": "20 - 100"
				}
			},
			subtraction: {
				name: "Subtraktion",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Tiopar",
					"4": "12 - x",
					"5": "10 - 20",
					"6": "0 - 20",
					"7": "100 - x",
					"8": "0 - 100"
				}
			},
			multiplication: {
				name: "Multiplikation",
				modes: {
					"1": "Tabell 2",
					"2": "Tabell 3",
					"3": "Tabell 4",
					"4": "Tabell 5",
					"5": "Tabell 6",
					"6": "Tabell 7",
					"7": "Tabell 8",
					"8": "Tabell 9",
					"9": "Tabell 10",
					"10": "Tabell 2-10"
				}
			},
			division: {
				name: "Division",
				modes: {
					"1": "Tabell 2",
					"2": "Tabell 3",
					"3": "Tabell 4",
					"4": "Tabell 5",
					"5": "Tabell 6",
					"6": "Tabell 7",
					"7": "Tabell 8",
					"8": "Tabell 9",
					"9": "Tabell 10"
				}
			}
		}
	},
	fi: {
		landing: {
			title: "Valitse laskutoimitus",
			reset: "Nollaa edistyminen"
		},
		modepage: {
			title: "Valitse taso",
			record: "Ennätys",
		},
		leaderboard: {
			hover: "Vie hiiri tason päälle nähdäksesi pistetaulukon",
			top10: "10 parhaat",
			noscore: "Ei pisteitä vielä"
		},
		game: {
			score: "Pisteet",
			total: "Kokonaispisteet",
			progress: "Edistyminen",
		},
		back: "Takaisin",
		error: "Voi ei, jokin meni vikaan...",
		operations: {
			addition: {
				name: "Yhteenlasku",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Kymppiparit",
					"4": "10 + x",
					"5": "10 - 20",
					"6": "Yli 10: helppo",
					"7": "Yli 10: vaikea",
					"8": "20 - 100"
				}
			},
			subtraction: {
				name: "Vähennyslasku",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Kymppiparit",
					"4": "12 - x",
					"5": "10 - 20",
					"6": "0 - 20",
					"7": "100 - x",
					"8": "0 - 100"
				}
			},
			multiplication: {
				name: "Kertolasku",
				modes: {
					"1": "Kertotaulu 2",
					"2": "Kertotaulu 3",
					"3": "Kertotaulu 4",
					"4": "Kertotaulu 5",
					"5": "Kertotaulu 6",
					"6": "Kertotaulu 7",
					"7": "Kertotaulu 8",
					"8": "Kertotaulu 9",
					"9": "Kertotaulu 10",
					"10": "Kertotaulut 2-10"
				}
			},
			division: {
				name: "Jakolasku",
				modes: {
					"1": "Kertotaulu 2",
					"2": "Kertotaulu 3",
					"3": "Kertotaulu 4",
					"4": "Kertotaulu 5",
					"5": "Kertotaulu 6",
					"6": "Kertotaulu 7",
					"7": "Kertotaulu 8",
					"8": "Kertotaulu 9",
					"9": "Kertotaulu 10"
				}
			}
		}
	},
	ph: {
		landing: {
			title: "Pumili ng operasyon sa matematika",
			reset: "I-reset ang progreso"
		},
		modepage: {
			title: "Pumili ng mode",
			record: "Rekord",
		},
		leaderboard: {
			hover: "I-hover ang isang mode para makita ang leaderboard",
			top10: "Top 10",
			noscore: "Wala pang mga score"
		},
		game: {
			score: "Score",
			total: "Kabuuang iskor",
			progress: "Progreso",
		},
		back: "Bumalik",
		error: "Pasensya, may nagkamali",
		operations: {
			addition: {
				name: "Pagdaragdag",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Sampu: Magkapareha",
					"4": "10 + x",
					"5": "10 - 20",
					"6": "Lampas 10: mababa",
					"7": "Lampas 10: mataas",
					"8": "20 - 100"
				}
			},
			subtraction: {
				name: "Pagbabawas",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Sampu: Magkapareha",
					"4": "12 - x",
					"5": "10 - 20",
					"6": "0 - 20",
					"7": "100 - x",
					"8": "0 - 100"
				}
			},
			multiplication: {
				name: "Pagmumultiplika",
				modes: {
					"1": "Talahanayan 2",
					"2": "Talahanayan 3",
					"3": "Talahanayan 4",
					"4": "Talahanayan 5",
					"5": "Talahanayan 6",
					"6": "Talahanayan 7",
					"7": "Talahanayan 8",
					"8": "Talahanayan 9",
					"9": "Talahanayan 10",
					"10": "Talahanayan 2-10"
				}
			},
			division: {
				name: "Dibisyon",
				modes: {
					"1": "Talahanayan 2",
					"2": "Talahanayan 3",
					"3": "Talahanayan 4",
					"4": "Talahanayan 5",
					"5": "Talahanayan 6",
					"6": "Talahanayan 7",
					"7": "Talahanayan 8",
					"8": "Talahanayan 9",
					"9": "Talahanayan 10"
				}
			}
		}
	},
	is: {
		landing: {
			title: "Veldu stærðfræðiaðgerð",
			reset: "Endurstilla framvindu"
		},
		modepage: {
			title: "Veldu stillingu",
			record: "Met",
		},
		leaderboard: {
			hover: "Færðu bendilinn yfir stillingu til að sjá stigatöfluna",
			top10: "Top 10",
			noscore: "Engin stig enn"
		},
		game: {
			score: "Stig",
			total: "Heildarstig",
			progress: "Framvinda",
		},
		back: "Til baka",
		error: "Úps, eitthvað fór úrskeiðis...",
		operations: {
			addition: {
				name: "Samlagning",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Tugapör",
					"4": "10 + x",
					"5": "10 - 20",
					"6": "Yfir 10: létt",
					"7": "Yfir 10: erfitt",
					"8": "20 - 100"
				}
			},
			subtraction: {
				name: "Frádráttur",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Tugapör",
					"4": "12 - x",
					"5": "10 - 20",
					"6": "0 - 20",
					"7": "100 - x",
					"8": "0 - 100"
				}
			},
			multiplication: {
				name: "Margföldun",
				modes: {
					"1": "Tafla 2",
					"2": "Tafla 3",
					"3": "Tafla 4",
					"4": "Tafla 5",
					"5": "Tafla 6",
					"6": "Tafla 7",
					"7": "Tafla 8",
					"8": "Tafla 9",
					"9": "Tafla 10",
					"10": "Tölur 2-10"
				}
			},
			division: {
				name: "Deiling",
				modes: {
					"1": "Tafla 2",
					"2": "Tafla 3",
					"3": "Tafla 4",
					"4": "Tafla 5",
					"5": "Tafla 6",
					"6": "Tafla 7",
					"7": "Tafla 8",
					"8": "Tafla 9",
					"9": "Tafla 10"
				}
			}
		}
	},
	lt: {
		landing: {
			title: "Pasirinkite matematinę operaciją",
			reset: "Atstatyti progresą"
		},
		modepage: {
			title: "Pasirinkite režimą",
			record: "Rekordas",
		},
		leaderboard: {
			hover: "Užveskite ant režimo, kad pamatytumėte rezultatų lentelę",
			top10: "Geriausi 10",
			noscore: "Rezultatų dar nėra"
		},
		game: {
			score: "Taškai",
			total: "Bendras taškų skaičius",
			progress: "Progresas",
		},
		back: "Atgal",
		error: "Atsiprašome, įvyko klaida...",
		operations: {
			addition: {
				name: "Sudėtis",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Dešimtukas: poros",
					"4": "10 + x",
					"5": "10 - 20",
					"6": "Po 10: žemi",
					"7": "Po 10: aukšti",
					"8": "20 - 100"
				}
			},
			subtraction: {
				name: "Atimtis",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Dešimtukas: poros",
					"4": "12 - x",
					"5": "10 - 20",
					"6": "0 - 20",
					"7": "100 - x",
					"8": "0 - 100"
				}
			},
			multiplication: {
				name: "Daugyba",
				modes: {
					"1": "Daugybos lentelė 2",
					"2": "Daugybos lentelė 3",
					"3": "Daugybos lentelė 4",
					"4": "Daugybos lentelė 5",
					"5": "Daugybos lentelė 6",
					"6": "Daugybos lentelė 7",
					"7": "Daugybos lentelė 8",
					"8": "Daugybos lentelė 9",
					"9": "Daugybos lentelė 10",
					"10": "Daugybos lentelė 2-10"
				}
			},
			division: {
				name: "Dalyba",
				modes: {
					"1": "Lentelė 2",
					"2": "Lentelė 3",
					"3": "Lentelė 4",
					"4": "Lentelė 5",
					"5": "Lentelė 6",
					"6": "Lentelė 7",
					"7": "Lentelė 8",
					"8": "Lentelė 9",
					"9": "Lentelė 10"
				}
			}
		}
	},
	ua: {
		landing: {
			title: "Виберіть математичну операцію",
			reset: "Скинути прогрес"
		},
		modepage: {
			title: "Виберіть режим",
			record: "Рекорд",
		},
		leaderboard: {
			hover: "Наведіть на режим, щоб переглянути таблицю лідерів",
			top10: "Топ 10",
			noscore: "Поки що немає результатів"
		},
		game: {
			score: "Рахунок",
			total: "Загальний рахунок",
			progress: "Прогрес",
		},
		back: "Назад",
		error: "Вибачте, щось пішло не так...",
		operations: {
			addition: {
				name: "Додавання",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Десять: пари",
					"4": "10 + x",
					"5": "10 - 20",
					"6": "Понад 10: низькі",
					"7": "Понад 10: високі",
					"8": "20 - 100"
				}
			},
			subtraction: {
				name: "Віднімання",
				modes: {
					"1": "0 - 5",
					"2": "0 - 10",
					"3": "Десять: пари",
					"4": "12 - x",
					"5": "10 - 20",
					"6": "0 - 20",
					"7": "100 - x",
					"8": "0 - 100"
				}
			},
			multiplication: {
				name: "Множення",
				modes: {
					"1": "Таблиця 2",
					"2": "Таблиця 3",
					"3": "Таблиця 4",
					"4": "Таблиця 5",
					"5": "Таблиця 6",
					"6": "Таблиця 7",
					"7": "Таблиця 8",
					"8": "Таблиця 9",
					"9": "Таблиця 10",
					"10": "Таблиця 2-10"
				}
			},
			division: {
				name: "Division",
				modes: {
					"1": "Таблиця 2",
					"2": "Таблиця 3",
					"3": "Таблиця 4",
					"4": "Таблиця 5",
					"5": "Таблиця 6",
					"6": "Таблиця 7",
					"7": "Таблиця 8",
					"8": "Таблиця 9",
					"9": "Таблиця 10"
				}
			}
		}
	},
	ir: {
		landing: {
			title: "یک عمل ریاضی را انتخاب کنید",
			reset: "بازنشانی پیشرفت"
		},
		modepage: {
			title: "انتخاب حالت",
			record: "رکورد",
		},
		leaderboard: {
			hover: "برای دیدن جدول برترین‌ها روی یک حالت هوور کنید",
			top10: "۱۰ نفر برتر",
			noscore: "هنوز امتیازی ثبت نشده است"
		},
		game: {
			score: "امتیاز",
			total: "امتیاز کل",
			progress: "پیشرفت",
		},
		back: "بازگشت",
		error: "متأسفیم، مشکلی پیش آمد...",
		operations: {
			addition: {
				name: "جمع",
				modes: {
					"1": "۰ - ۵",
					"2": "۰ - ۱۰",
					"3": "ده: جفت‌ها",
					"4": "۱۰ + x",
					"5": "۱۰ - ۲۰",
					"6": "بیش از ۱۰: کم",
					"7": "بیش از ۱۰: زیاد",
					"8": "۲۰ - ۱۰۰"
				}
			},
			subtraction: {
				name: "تفریق",
				modes: {
					"1": "۰ - ۵",
					"2": "۰ - ۱۰",
					"3": "ده: جفت‌ها",
					"4": "۱۲ - x",
					"5": "۱۰ - ۲۰",
					"6": "۰ - ۲۰",
					"7": "۱۰۰ - x",
					"8": "۰ - ۱۰۰"
				}
			},
			multiplication: {
				name: "ضرب",
				modes: {
					"1": "جدول ۲",
					"2": "جدول ۳",
					"3": "جدول ۴",
					"4": "جدول ۵",
					"5": "جدول ۶",
					"6": "جدول ۷",
					"7": "جدول ۸",
					"8": "جدول ۹",
					"9": "جدول ۱۰",
					"10": "جدول ۲ تا ۱۰"
				}
			},
			division: {
				name: "تقسیم",
				modes: {
					"1": "جدول ۲",
					"2": "جدول ۳",
					"3": "جدول ۴",
					"4": "جدول ۵",
					"5": "جدول ۶",
					"6": "جدول ۷",
					"7": "جدول ۸",
					"8": "جدول ۹",
					"9": "جدول ۱۰"
				}
			}
		}
	}
};