import React, { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
	return (
		<section>
			<h1>Blog Layout File</h1>
			<div>{children}</div>
		</section>
	);
}
