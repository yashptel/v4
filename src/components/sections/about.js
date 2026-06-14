import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div``;
const StyledSkills = styled.div`
  margin-top: 25px;

  .skills-intro {
    margin: 0 0 15px;
  }

  ul.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px 30px;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    li {
      position: relative;
      padding-left: 20px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        top: 2px;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }

      .cat {
        display: block;
        margin-bottom: 4px;
        color: var(--lightest-slate);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
      }

      .items {
        color: var(--light-slate);
        font-size: var(--fz-sm);
        line-height: 1.5;
      }
    }
  }
`;
const StyledCreds = styled.div`
  margin-top: 35px;

  h3 {
    margin: 0 0 12px;
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 8px;
      padding-left: 20px;
      color: var(--light-slate);
      font-size: var(--fz-sm);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    { cat: 'Languages', items: 'TypeScript · JavaScript · Go · Python · SQL' },
    {
      cat: 'Backend & APIs',
      items: 'Node.js · Express · Fastify · Go (Fiber, net/http) · GraphQL · REST · Temporal',
    },
    { cat: 'Frontend', items: 'React · Next.js · React Native · Redux · XState · Tailwind · Vue' },
    {
      cat: 'Databases & Data',
      items: 'PostgreSQL (replication, LSN, RLS) · Redis · pgvector · Qdrant · DynamoDB',
    },
    {
      cat: 'Cloud & DevOps',
      items: 'AWS (S3, Lambda, CloudFront, RDS, SQS) · GCP · Docker · Kubernetes · Terraform · CI/CD',
    },
    {
      cat: 'AI / LLM',
      items: 'OpenAI · Anthropic · Gemini · Vercel AI SDK · Mastra · RAG · embeddings · local Whisper STT',
    },
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I’m Yash — a backend-heavy full-stack engineer with 5+ years delivering
              production B2B SaaS to more than 700,000 users. I like owning hard problems end to
              end, especially where databases, infrastructure, and production safety meet.
            </p>
            <p>
              Most recently at <a href="https://www.eventbrite.com/">Eventbrite</a> I rebuilt the
              localization pipeline across ~140 services; before that, at{' '}
              <a href="https://toddleapp.com/">Toddle</a>, I led a zero-downtime billion-row
              migration, PostgreSQL read-replica scaling, and multi-tenant CDN authorization for a
              700,000+ user platform. Earlier I cut analytics API latency at{' '}
              <a href="https://www.firstcry.com/">FirstCry</a> and shipped production Go services at{' '}
              <a href="https://improwised.com/">Improwised</a>.
            </p>
            <p>
              I also build and ship my own products — including AI-native tools using RAG and local
              Whisper-style speech-to-text — and contribute to open source; my work on Return
              YouTube Dislike runs for 4M+ users weekly.
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot of Yash Patel"
            />
          </div>
        </StyledPic>
      </div>

      <StyledSkills>
        <p className="skills-intro">Here’s the stack I reach for most:</p>
        <ul className="skills-grid">
          {skills.map(({ cat, items }, i) => (
            <li key={i}>
              <span className="cat">{cat}</span>
              <span className="items">{items}</span>
            </li>
          ))}
        </ul>
      </StyledSkills>

      <StyledCreds>
        <h3>Education &amp; Recognition</h3>
        <ul>
          <li>
            B.E. in Computer Engineering — Gujarat Technological University (2017–2021), CGPA
            8.34/10
          </li>
          <li>
            Top 0.7% — ranked under 100 of 15,000+ in the HackOn with Amazon Coding Challenge, 2021
          </li>
        </ul>
      </StyledCreds>
    </StyledAboutSection>
  );
};

export default About;
