import { Inter } from "next/font/google";
import AppRouter from "./components/app-router";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
	title: "Tution",
	description: "Tu Tienda Online",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es" className={inter.className}>
			<body>
				<AppRouter />
				{children}
			</body>
		</html>
	);
}
