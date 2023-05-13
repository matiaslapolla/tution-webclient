import AppRouter from "./components/app-router";
import "./globals.css";

export const metadata = {
	title: "Tution",
	description: "El lugar de Tu Tienda Online",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<AppRouter />
				{children}
			</body>
		</html>
	);
}
