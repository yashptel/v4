import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .hero-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 15px 35px;
    margin: 30px 0 0;
    padding: 0;
    list-style: none;
    max-width: 560px;

    li {
      .stat-num {
        display: block;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-xl);
        line-height: 1.1;
      }

      .stat-label {
        color: var(--light-slate);
        font-family: var(--font-mono);
        font-size: var(--fz-xxs);
      }
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Yash Patel.</h2>;
  const three = <h3 className="big-heading">I build backend systems that scale safely.</h3>;
  const four = (
    <>
      <p>
        I’m a backend-heavy full-stack engineer with 5+ years building production B2B SaaS — most
        recently rebuilding the localization platform at{' '}
        <a href="https://www.eventbrite.com/" target="_blank" rel="noreferrer">
          Eventbrite
        </a>
        , and before that scaling multi-tenant systems to 700,000+ users at{' '}
        <a href="https://toddleapp.com/" target="_blank" rel="noreferrer">
          Toddle
        </a>
        . I’m strongest where databases, infrastructure, and production safety matter — safe
        large-scale migrations, replica scaling, workflow orchestration, and authorization. Based in
        Bengaluru, open to senior backend-leaning roles (remote-friendly).
      </p>
    </>
  );
  const stats = (
    <ul className="hero-stats">
      <li>
        <span className="stat-num">5+ yrs</span>
        <span className="stat-label">production B2B SaaS</span>
      </li>
      <li>
        <span className="stat-num">700K+</span>
        <span className="stat-label">users served</span>
      </li>
      <li>
        <span className="stat-num">4M+</span>
        <span className="stat-label">weekly open-source users</span>
      </li>
      <li>
        <span className="stat-num">Live</span>
        <span className="stat-label">products with paying customers</span>
      </li>
    </ul>
  );
  const five = (
    <a className="email-link" href={`mailto:${email}`}>
      Get in touch
    </a>
  );

  const items = [one, two, three, four, stats, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
