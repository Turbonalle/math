import React from "react";
import LanguageMenu from "./LanguageMenu";

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<div className="h-screen flex flex-col">
			<LanguageMenu />
			<div className="flex-1 overflow-hidden bg-gray-900">{children}</div>
		</div>
	);
}