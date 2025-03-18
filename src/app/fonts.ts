import { Poppins, Lora } from 'next/font/google';

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-poppins-sans-serif',
});
export const lora = Lora({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-lora-serif',
});
