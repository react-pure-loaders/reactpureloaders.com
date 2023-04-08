import React from 'react';
import Head from 'next/head'

import Section from '@/components/Section';
import Menu from '@/components/Menu';
import SocialMedia from '@/components/SocialMedia';
import Logo from '@/components/Logo';
import Contributing from '@/components/ContributingSection';
import Description from '@/components/DescriptionSection';
import GettingStarted from '@/components/GettingStartedSection';

import styles from '@/styles/index.module.css';

const Home = () => (
	<div>
    <Head>
      <title>React Pure Loaders</title>
    </Head>
		<header className={styles.headerHome}>
			<div className={'header-home menu'}>
				<Logo />
				<Menu />
			</div>

			<SocialMedia
				desc='Github Logo'
        src='/images/github.png'
				link='https://github.com/react-pure-loaders/react-pure-loaders'
				title='Code Repository'
			/>
		</header>

		<section className={styles.sectionHome}>
			<Section title='What is?'>
				<Description />
			</Section>
			<Section title='Getting Started'>
				<GettingStarted />
			</Section>

			<Section title='Contributing'>
				<Contributing />
			</Section>
		</section>
		<footer className={styles.footerHome}>
			<p>Made using MIT License.</p>
		</footer>
	</div>
);

export default Home;
