import "./globals.css";

export const metadata = {
	title: "Tution",
	description: "El lugar de Tu Tienda Online",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
