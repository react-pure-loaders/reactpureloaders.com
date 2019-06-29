import React from 'react';

import Section from '../../components/Section';
import Menu from '../../components/Menu';
import SocialMedia from '../../components/SocialMedia';

import { LogoGithub } from '../../utils/icons';

import './style.scss';

const Home = () => (
  <div>
    <header className="header-home">
      <div className="header-home menu">
        <div className="header-home menu logo">
          <img alt="Logo" />
          <p>React Pure Loaders</p>
        </div>
        <Menu />
      </div>

      <SocialMedia
        desc="Github Logo"
        path={LogoGithub}
        link="https://github.com/jameswlane/react-pure-loaders"
        title="Code Repository"
      />
    </header>

    <section className="section-home">
      <Section title="What is?">
        <p>
          React Pure Loaders is a package that disponibilizes loaders for your
          Project. Those loaders are used as components, using color and a
          loading variables as properties.
        </p>
        <p>
          The component expects the to receive the color as a string with the
          hexadecimal code and the loading as a boolean, that is true by
          default.
        </p>
      </Section>
      <Section title="Getting Started">
        <div className="section-home-children">
          <img
            src="../../../assets/images/inst.png"
            alt="getting start instructions"
          />
        </div>
      </Section>

      <Section title="Contributing">
        <div className="section-home-children">
          <p>
            To Contributing to this project, you can access the{' '}
            <a
              href="https://github.com/jameswlane/react-pure-loaders"
              title="Loaders Repo"
            >
              repository
            </a>{' '}
            and check the source code. To contribute to this website,{' '}
            <a
              href="https://github.com/jameswlane/reactpureloaders.io"
              title="Website Repo"
            >
              {' '}
              check this repository
            </a>
            .
          </p>
          <p>License MIT.</p>
        </div>
      </Section>
    </section>
    <footer className="footer-home">
      <p>Footer</p>
    </footer>
  </div>
);

export default Home;
