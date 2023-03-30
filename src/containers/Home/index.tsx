import React from 'react';

import Section from '../../components/Section';
import Menu from '../../components/Menu';
import SocialMedia from '../../components/SocialMedia';
import Logo from '../../components/Logo';

import Contributing from '../../components/ContributingSection';
import Description from '../../components/DescriptionSection';
import GettingStarted from '../../components/GettingStartedSection';

import { LogoGithub, LogoImage } from '../../utils/icons';

import './style.scss';

const Home = () => (
  <div>
    <header className="header-home">
      <div className="header-home menu">
        <Logo image={LogoImage} />
        <Menu />
      </div>

      <SocialMedia
        desc="Github Logo"
        path={LogoGithub}
        link="https://github.com/react-pure-loaders/react-pure-loaders"
        title="Code Repository"
      />
    </header>

    <section className="section-home">
      <Section title="What is?">
        <Description />
      </Section>
      <Section title="Getting Started">
        <GettingStarted />
      </Section>

      <Section title="Contributing">
        <Contributing />
      </Section>
    </section>
    <footer className="footer-home">
      <p>Made using MIT License.</p>
    </footer>
  </div>
);

export default Home;
