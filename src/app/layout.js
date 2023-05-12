import "./globals.css"

export const metadata = {
	title: "Sidequix",
	description: "Find the best side hustles for you",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
 