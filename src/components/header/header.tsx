import HeaderSocialList from './header-social-list';

export default function Header() {
	const name = "I'm Zohaib Ashraf.";
	return (
		<header>
			<p>Hello, World.</p>
			<h1 className='font-poppins text-3xl'>{name}</h1>
			<h2 className='font-lora text-3xl'>Front-end Developer UI/UX Designer</h2>
			<a href='#'>More About Me</a>
			<HeaderSocialList />
		</header>
	);
}
