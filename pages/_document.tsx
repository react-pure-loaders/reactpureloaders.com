import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet='utf-8'/>
				<link rel='shortcut icon' href='favicon.ico'/>
				<meta name='theme-color' content='#000000'/>
				<link rel='manifest' href='manifest.json'/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
