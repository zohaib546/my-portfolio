import { poppins, lora } from './fonts';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${poppins.variable} ${lora.variable} antialiased`}>
			<body>{children}</body>
		</html>
	);
}
